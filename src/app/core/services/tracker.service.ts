import { Injectable, signal, computed } from '@angular/core';
import {
  DailyLog, DailyTask, DailyReflection,
  RecoveryItem, TaskStatus, TrackerStore, HealthStatus
} from '../models';

const KEY = 'gate_tracker_store';
const START = '2026-06-11';

function today(): string { return new Date().toISOString().split('T')[0]; }

function daysBetween(a: string, b: string): number {
  return Math.round((new Date(b).getTime() - new Date(a).getTime()) / 86400000);
}

function dayNumber(date: string): number {
  return daysBetween(START, date) + 1;
}

// Sundays are flex days: no new videos planned, used for recovery + revision + weekly review.
function isFlexDay(date: string): boolean {
  return new Date(date + 'T00:00:00').getDay() === 0;
}

@Injectable({ providedIn: 'root' })
export class TrackerService {
  private store = signal<TrackerStore>(this.load());

  // ── Public signals ──────────────────────────────────────────────────────────

  logs           = computed(() => this.store().logs);
  recoveryQueue  = computed(() => this.store().recoveryQueue);

  todayLog = computed<DailyLog>(() => {
    const t = today();
    return this.store().logs[t] ?? this.buildEmptyLog(t);
  });

  // ── Health ──────────────────────────────────────────────────────────────────

  scheduleHealth = computed<HealthStatus>(() => {
    const backlog = this.recoveryQueue().length;
    const logs    = Object.values(this.store().logs);
    if (!logs.length) return 'on-track';

    const totalPlanned   = logs.reduce((s, l) => s + l.plannedVideos, 0);
    const totalCompleted = logs.reduce((s, l) => s + l.completedVideos, 0);
    const pct = totalPlanned ? Math.round((totalCompleted / totalPlanned) * 100) : 100;

    if (backlog >= 10 || pct < 50) return 'high-risk';
    if (backlog >= 5  || pct < 70) return 'needs-recovery';
    if (backlog >= 2  || pct < 85) return 'minor-delay';
    return 'on-track';
  });

  // ── Metrics ─────────────────────────────────────────────────────────────────

  metrics = computed(() => {
    const logs = Object.values(this.store().logs);
    const studiedDays = logs.filter(l => l.actualHours > 0);
    const streaks = this.calcStreaks(Object.keys(this.store().logs).sort());

    const totalVideos    = logs.reduce((s, l) => s + l.completedVideos, 0);
    const totalHours     = logs.reduce((s, l) => s + l.actualHours, 0);
    const totalPlanned   = logs.reduce((s, l) => s + l.plannedVideos, 0);
    const totalCompleted = logs.reduce((s, l) => s + l.completedVideos, 0);
    const missedDays     = logs.filter(l => l.completedVideos < l.plannedVideos).length;
    const recoveryUsed   = logs.filter(l => l.isCatchUpDay).length;
    const consistency    = studiedDays.length
      ? Math.round((studiedDays.filter(l => l.completedVideos >= l.plannedVideos).length / studiedDays.length) * 100)
      : 0;
    const recoveryEff    = totalPlanned
      ? Math.round((totalCompleted / totalPlanned) * 100)
      : 0;

    return {
      studyStreak:     streaks.current,
      bestStreak:      streaks.best,
      daysMissed:      missedDays,
      recoveryUsed,
      avgHours:        studiedDays.length ? +(totalHours / studiedDays.length).toFixed(1) : 0,
      avgVideosPerDay: studiedDays.length ? +(totalVideos / studiedDays.length).toFixed(1) : 0,
      consistencyScore: consistency,
      recoveryEfficiency: recoveryEff,
    };
  });

  // ── Next flex (catch-up) day: the coming Sunday ─────────────────────────────

  nextCatchUpDay = computed<{ day: number; date: string } | null>(() => {
    const t = today();
    for (let i = 1; i <= 7; i++) {
      const d = new Date(t + 'T00:00:00');
      d.setDate(d.getDate() + i);
      const date = d.toISOString().split('T')[0];
      if (isFlexDay(date)) return { day: dayNumber(date), date };
    }
    return null;
  });

  // ── Weekly summary ──────────────────────────────────────────────────────────

  weeklySummary = computed(() => {
    const t     = today();
    const start = new Date(t);
    start.setDate(start.getDate() - 6);
    const logs = Object.entries(this.store().logs)
      .filter(([d]) => d >= start.toISOString().split('T')[0] && d <= t)
      .map(([, l]) => l);

    const planned   = logs.reduce((s, l) => s + l.plannedVideos, 0);
    const completed = logs.reduce((s, l) => s + l.completedVideos, 0);
    const hours     = logs.reduce((s, l) => s + l.actualHours, 0);
    const missed    = planned - completed;
    const pct       = planned ? Math.round((completed / planned) * 100) : 0;

    let suggestion = '';
    if (pct >= 95) suggestion = 'Excellent! You are on track or ahead of schedule.';
    else if (missed <= 3) suggestion = `You missed ${missed} video(s). Add 1 extra video daily to recover.`;
    else if (missed <= 7) suggestion = `You missed ${missed} videos. Use catch-up days and add 2 extra videos daily.`;
    else suggestion = `High backlog (${missed} videos). Prioritize catch-up days and reduce revision temporarily.`;

    return { planned, completed, missed, hours: +hours.toFixed(1), pct, suggestion };
  });

  // ── CRUD ─────────────────────────────────────────────────────────────────────

  saveTodayLog(log: DailyLog) {
    const s = this.store();
    const updated: TrackerStore = {
      ...s,
      logs: { ...s.logs, [log.date]: log }
    };
    this.persist(updated);
    this.rebuildRecoveryQueue(updated);
  }

  updateTaskStatus(taskId: string, status: TaskStatus) {
    const log = { ...this.todayLog() };
    log.tasks = log.tasks.map(t => t.id === taskId ? { ...t, status } : t);
    this.saveTodayLog(log);
  }

  updateReflection(ref: DailyReflection) {
    this.saveTodayLog({ ...this.todayLog(), reflection: ref });
  }

  updateActuals(patch: Partial<DailyLog>) {
    this.saveTodayLog({ ...this.todayLog(), ...patch });
  }

  getLog(date: string): DailyLog {
    return this.store().logs[date] ?? this.buildEmptyLog(date);
  }

  dismissRecovery(taskId: string) {
    const s = this.store();
    this.persist({ ...s, recoveryQueue: s.recoveryQueue.filter(r => r.taskId !== taskId) });
  }

  // ── Helpers ──────────────────────────────────────────────────────────────────

  buildEmptyLog(date: string): DailyLog {
    const dayNum = dayNumber(date);
    const dow    = new Date(date + 'T00:00:00').getDay();
    const flex   = isFlexDay(date);
    // Hard cap: max 2 new videos/day. Sun = 0 (flex day). Sat = 2 (same as weekday).
    // Planned hours: ~3h/day on study days (lecture + notes + revision + PYQs).
    return {
      date,
      dayNumber: dayNum,
      plannedVideos: flex ? 0 : 2,
      completedVideos: 0,
      plannedHours: flex ? 0 : 3,
      actualHours: 0,
      isCatchUpDay: flex,
      tasks: [],
      reflection: { wentWell: '', delays: '', conceptsLearned: '', needsRevision: '', remarks: '' },
      questionsAttempted: 0,
      notesPrepared: 0,
    };
  }

  recoveryPriority(originalDate: string): 'low' | 'medium' | 'high' {
    const days = daysBetween(originalDate, today());
    if (days >= 6) return 'high';
    if (days >= 3) return 'medium';
    return 'low';
  }

  formatDate(d: string) {
    return new Date(d + 'T00:00:00').toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'short' });
  }

  // ── Private ──────────────────────────────────────────────────────────────────

  private rebuildRecoveryQueue(s: TrackerStore) {
    const queue: RecoveryItem[] = [];
    for (const [date, log] of Object.entries(s.logs)) {
      if (date >= today()) continue;
      for (const task of log.tasks) {
        if (task.status === 'planned' || task.status === 'started') {
          if (!queue.find(r => r.taskId === task.id)) {
            queue.push({ taskId: task.id, label: task.label, type: task.type, originalDate: date, videoId: task.videoId });
          }
        }
      }
    }
    this.persist({ ...s, recoveryQueue: queue });
  }

  private calcStreaks(sortedDates: string[]) {
    let current = 0, best = 0, run = 0;
    for (let i = 0; i < sortedDates.length; i++) {
      const prev = i > 0 ? sortedDates[i - 1] : null;
      if (prev && daysBetween(prev, sortedDates[i]) === 1) { run++; }
      else { run = 1; }
      best = Math.max(best, run);
    }
    const t = today();
    if (sortedDates.length) {
      const last = sortedDates[sortedDates.length - 1];
      const diff = daysBetween(last, t);
      if (diff <= 1) current = run;
    }
    return { current, best };
  }

  private load(): TrackerStore {
    const raw = localStorage.getItem(KEY);
    if (raw) return JSON.parse(raw);
    return { logs: {}, recoveryQueue: [] };
  }

  private persist(s: TrackerStore) {
    localStorage.setItem(KEY, JSON.stringify(s));
    this.store.set({ ...s });
  }
}
