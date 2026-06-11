import { Injectable, inject, computed } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { DataService } from './data.service';
import { StorageService } from './storage.service';
import { TrackerService } from './tracker.service';
import { MetricProgress, WeekPlan, WeekProgress, WeekResult, WeeklyPlanData } from '../models';

function today(): string { return new Date().toISOString().split('T')[0]; }

function addDays(iso: string, n: number): string {
  const d = new Date(iso + 'T00:00:00');
  d.setDate(d.getDate() + n);
  return d.toISOString().split('T')[0];
}

function daysBetween(a: string, b: string): number {
  return Math.round((new Date(b).getTime() - new Date(a).getTime()) / 86400000);
}

function metric(done: number, target: number, min: number): MetricProgress {
  return {
    done, target, min,
    pctOfTarget: target ? Math.min(100, Math.round((done / target) * 100)) : 100,
    pctOfMin: min ? Math.min(100, Math.round((done / min) * 100)) : 100,
    minMet: done >= min,
    targetMet: done >= target,
  };
}

export type WeekPace = 'achieved' | 'threshold-met' | 'on-pace' | 'push-needed' | 'at-risk';

@Injectable({ providedIn: 'root' })
export class WeeklyPlanService {
  private data = inject(DataService);
  private storage = inject(StorageService);
  private tracker = inject(TrackerService);

  plan = toSignal<WeeklyPlanData | null>(this.data.getWeeklyPlan(), { initialValue: null });

  // ── per-week actuals (daily logs + dated video completions + revision log) ──

  private weekActuals(plan: WeekPlan) {
    const logs = this.tracker.logs();
    const progress = this.storage.progress();
    let videos = 0, hours = 0, questions = 0, revision = 0;
    for (let i = 0; i < plan.days; i++) {
      const date = addDays(plan.startDate, i);
      const log = logs[date];
      const ticked = (progress.completionLog[date] ?? []).length;
      // both sources describe the same thing (videos finished that day) — take the larger
      videos += Math.max(ticked, log?.completedVideos ?? 0);
      hours += log?.actualHours ?? 0;
      questions += log?.questionsAttempted ?? 0;
      revision += (progress.revisionLog[date] ?? []).length;
    }
    return { videos, hours, questions, revision };
  }

  private resultFor(plan: WeekPlan, primary: MetricProgress, t: string): WeekResult {
    if (t < plan.startDate) return 'upcoming';
    if (t <= plan.endDate) return 'in-progress';
    if (primary.targetMet) return 'achieved';
    if (primary.minMet) return 'threshold-met';
    return 'missed';
  }

  weekProgressList = computed<WeekProgress[]>(() => {
    const plan = this.plan();
    if (!plan) return [];
    const t = today();
    return plan.weeks.map(wk => {
      const a = this.weekActuals(wk);
      const videos = metric(a.videos, wk.videoTarget, wk.videoMin);
      const hours = metric(a.hours, wk.hoursTarget, wk.hoursMin);
      const questions = metric(a.questions, wk.questionsTarget, wk.questionsMin);
      const revision = metric(a.revision, wk.revisionTarget, wk.revisionMin);
      const primary = wk.phase === 1 ? videos : revision;
      const weights = wk.phase === 1
        ? [[videos, 4], [hours, 2], [questions, 2], [revision, 2]] as const
        : [[revision, 4], [questions, 3], [hours, 3]] as const;
      const score = Math.round(
        weights.reduce((s, [m, w]) => s + m.pctOfTarget * w, 0) /
        weights.reduce((s, [, w]) => s + w, 0)
      );
      return { plan: wk, result: this.resultFor(wk, primary, t), videos, hours, questions, revision, score };
    });
  });

  currentWeek = computed<WeekProgress | null>(() => {
    const t = today();
    return this.weekProgressList().find(w => t >= w.plan.startDate && t <= w.plan.endDate) ?? null;
  });

  // ── backlog: cumulative video target of finished weeks vs total syllabus done ──

  backlogVideos = computed(() => {
    const plan = this.plan();
    if (!plan) return 0;
    const t = today();
    const cumTarget = plan.weeks
      .filter(w => w.endDate < t)
      .reduce((s, w) => s + w.videoTarget, 0);
    return Math.max(0, cumTarget - this.storage.progress().completedVideoIds.length);
  });

  /** Remaining phase-1 weeks including the current one. */
  private weeksLeftInPhase1 = computed(() => {
    const plan = this.plan();
    if (!plan) return 0;
    const t = today();
    return plan.weeks.filter(w => w.phase === 1 && w.endDate >= t).length;
  });

  /** Extra videos to add to each remaining week to absorb the backlog. */
  backlogShare = computed(() => {
    const left = this.weeksLeftInPhase1();
    return left ? Math.ceil(this.backlogVideos() / left) : this.backlogVideos();
  });

  // ── pace guide for the current week ──────────────────────────────────────────

  paceGuide = computed(() => {
    const cw = this.currentWeek();
    if (!cw) return null;
    const t = today();
    const daysLeft = daysBetween(t, cw.plan.endDate) + 1;
    const adjustedTarget = cw.plan.videoTarget + this.backlogShare();
    const toTarget = Math.max(0, adjustedTarget - cw.videos.done);
    const toMin = Math.max(0, cw.plan.videoMin - cw.videos.done);
    const hoursLeft = Math.max(0, cw.plan.hoursTarget - cw.hours.done);
    const questionsLeft = Math.max(0, cw.plan.questionsTarget - cw.questions.done);
    const revisionLeft = Math.max(0, cw.plan.revisionTarget - cw.revision.done);
    return {
      daysLeft,
      adjustedTarget,
      videosPerDay: Math.ceil(toTarget / daysLeft),
      videosPerDayToMin: Math.ceil(toMin / daysLeft),
      hoursPerDay: +(hoursLeft / daysLeft).toFixed(1),
      questionsPerDay: Math.ceil(questionsLeft / daysLeft),
      revisionPerDay: Math.ceil(revisionLeft / daysLeft),
    };
  });

  /** How the current week is going, judged against the pace still required. */
  weekPace = computed<WeekPace>(() => {
    const cw = this.currentWeek();
    const guide = this.paceGuide();
    if (!cw || !guide) return 'on-pace';
    const primary = cw.plan.phase === 1 ? cw.videos : cw.revision;
    if (primary.targetMet) return 'achieved';
    const idealPace = primary.target / cw.plan.days;
    const requiredPace = (primary.target - primary.done) / guide.daysLeft;
    if (requiredPace <= idealPace) return primary.minMet ? 'threshold-met' : 'on-pace';
    if (requiredPace <= idealPace * 2) return 'push-needed';
    return 'at-risk';
  });

  /** Plan totals + overall syllabus pace vs where the plan says we should be. */
  overall = computed(() => {
    const plan = this.plan();
    if (!plan) return null;
    const t = today();
    const done = this.storage.progress().completedVideoIds.length;
    // expected-by-today: full weeks finished + prorated share of the current week
    let expected = 0;
    for (const w of plan.weeks) {
      if (w.endDate < t) expected += w.videoTarget;
      else if (t >= w.startDate) expected += Math.round(w.videoTarget * ((daysBetween(w.startDate, t) + 1) / w.days));
    }
    return {
      totalVideos: plan.totalVideos,
      done,
      expected: Math.min(expected, plan.totalVideos),
      aheadBy: done - Math.min(expected, plan.totalVideos),
      pct: Math.round((done / plan.totalVideos) * 100),
    };
  });

  formatRange(w: WeekPlan): string {
    const f = (d: string) =>
      new Date(d + 'T00:00:00').toLocaleDateString('en-US', { day: 'numeric', month: 'short' });
    return `${f(w.startDate)} – ${f(w.endDate)}`;
  }
}
