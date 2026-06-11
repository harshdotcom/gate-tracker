import { Component, inject, computed } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { WeeklyPlanService, WeekPace } from '../../core/services/weekly-plan.service';
import { MetricProgress, WeekProgress, WeekResult } from '../../core/models';

interface MetricRow {
  key: string;
  label: string;
  icon: string;
  unit: string;
  m: MetricProgress;
}

@Component({
  selector: 'app-weekly',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatTooltipModule],
  template: `
<div class="weekly">

  <!-- ── Header ── -->
  <div class="page-header">
    <div>
      <h2 class="page-title">Weekly Goals</h2>
      <p class="page-subtitle">
        Hit the <strong>minimum threshold by Sunday</strong> — how you spread it across the week is up to you.
      </p>
    </div>
    @if (cw(); as w) {
      <div class="week-chip">
        <mat-icon>calendar_month</mat-icon>
        <span>Week <strong>{{ w.plan.week }}</strong> of {{ svc.plan()?.totalWeeks }}
          · {{ svc.formatRange(w.plan) }}
          · Phase {{ w.plan.phase }}</span>
      </div>
    }
  </div>

  @if (cw(); as w) {

    <!-- ── Status banner ── -->
    <div class="status-banner" [class]="'pace-' + pace()">
      <mat-icon>{{ paceIcon() }}</mat-icon>
      <div>
        <div class="status-title">{{ paceLabel() }}</div>
        <div class="status-sub">{{ paceMessage() }}</div>
      </div>
      <div class="score-ring" [matTooltip]="'Weighted weekly score'">
        <div class="score-val">{{ w.score }}%</div>
        <div class="score-lbl">week score</div>
      </div>
    </div>

    <!-- ── Current week metrics ── -->
    <mat-card class="panel">
      <mat-card-header>
        <mat-icon mat-card-avatar class="panel-icon blue">flag</mat-icon>
        <mat-card-title>This Week's Targets</mat-card-title>
        <mat-card-subtitle>
          {{ daysLeftLabel() }} · deadline {{ fmtDay(w.plan.endDate) }}
        </mat-card-subtitle>
      </mat-card-header>
      <mat-card-content>
        <div class="metric-bars">
          @for (row of metricRows(); track row.key) {
            <div class="metric-bar-row">
              <div class="mb-head">
                <span class="mb-label"><mat-icon>{{ row.icon }}</mat-icon>{{ row.label }}</span>
                <span class="mb-nums">
                  <strong>{{ row.m.done }}</strong> / min {{ row.m.min }} / target {{ row.m.target }} {{ row.unit }}
                </span>
              </div>
              <div class="mb-track">
                <div class="mb-fill" [class.min-met]="row.m.minMet" [class.target-met]="row.m.targetMet"
                     [style.width.%]="row.m.pctOfTarget"></div>
                @if (row.m.target > 0) {
                  <div class="mb-threshold" [style.left.%]="(row.m.min / row.m.target) * 100"
                       matTooltip="Minimum threshold"></div>
                }
              </div>
              <div class="mb-status">
                @if (row.m.targetMet) { <span class="chip chip-green">target met</span> }
                @else if (row.m.minMet) { <span class="chip chip-teal">threshold met</span> }
                @else { <span class="chip chip-grey">{{ row.m.min - row.m.done }} {{ row.unit }} to threshold</span> }
              </div>
            </div>
          }
        </div>
      </mat-card-content>
    </mat-card>

    <div class="two-col">

      <!-- ── Pace guide ── -->
      @if (svc.paceGuide(); as g) {
        <mat-card class="panel">
          <mat-card-header>
            <mat-icon mat-card-avatar class="panel-icon green">speed</mat-icon>
            <mat-card-title>Pace Guide</mat-card-title>
            <mat-card-subtitle>What today needs to look like — recalculated daily</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <div class="pace-grid">
              <div class="pace-item big">
                <div class="pace-num">{{ g.videosPerDay }}</div>
                <div class="pace-lbl">videos / day to hit target{{ svc.backlogVideos() ? ' + backlog' : '' }}</div>
              </div>
              <div class="pace-item">
                <div class="pace-num">{{ g.videosPerDayToMin }}</div>
                <div class="pace-lbl">videos / day for minimum</div>
              </div>
              <div class="pace-item">
                <div class="pace-num">{{ g.hoursPerDay }}h</div>
                <div class="pace-lbl">study hours / day</div>
              </div>
              <div class="pace-item">
                <div class="pace-num">{{ g.questionsPerDay }}</div>
                <div class="pace-lbl">questions / day</div>
              </div>
              <div class="pace-item">
                <div class="pace-num">{{ g.revisionPerDay }}</div>
                <div class="pace-lbl">revisions / day</div>
              </div>
              <div class="pace-item">
                <div class="pace-num">{{ g.daysLeft }}</div>
                <div class="pace-lbl">days left this week</div>
              </div>
            </div>
            <div class="hint-box">
              <mat-icon>tips_and_updates</mat-icon>
              <span>A skipped day only changes the pace, not the goal. Sunday is your built-in flex day —
              keep it free for recovery and revision.</span>
            </div>
          </mat-card-content>
        </mat-card>
      }

      <!-- ── Backlog ── -->
      <mat-card class="panel">
        <mat-card-header>
          <mat-icon mat-card-avatar class="panel-icon" [class.red]="svc.backlogVideos() > 0" [class.green]="svc.backlogVideos() === 0">inventory</mat-icon>
          <mat-card-title>Backlog</mat-card-title>
          <mat-card-subtitle>Videos owed from past weeks</mat-card-subtitle>
        </mat-card-header>
        <mat-card-content>
          @if (svc.backlogVideos() === 0) {
            <div class="empty-good">
              <mat-icon>check_circle</mat-icon>
              <p>No backlog — every finished week met its video target.</p>
            </div>
          } @else {
            <div class="backlog-big">{{ svc.backlogVideos() }}</div>
            <p class="backlog-text">
              videos behind the cumulative plan. Spread across the remaining weeks of Phase 1 this adds
              <strong>+{{ svc.backlogShare() }} videos</strong> to each week's target (already included in your pace guide).
            </p>
            <div class="hint-box warn">
              <mat-icon>event_available</mat-icon>
              <span>Fastest way out: use the Sunday flex day for backlog before touching new content.</span>
            </div>
          }

          @if (w.plan.subjects.length) {
            <div class="subject-alloc">
              <div class="alloc-title">This week's content</div>
              @for (s of w.plan.subjects; track s.subjectId) {
                <div class="alloc-row">
                  <span>{{ s.name }}</span>
                  <span class="alloc-count">{{ s.videos }} videos</span>
                </div>
              }
              @if (w.plan.milestone) {
                <div class="milestone-row"><mat-icon>flag</mat-icon>{{ w.plan.milestone }}</div>
              }
            </div>
          }
        </mat-card-content>
      </mat-card>
    </div>
  } @else {
    <mat-card class="panel"><mat-card-content>
      <p>The weekly plan has ended. Mock-test phase — track sessions in the Daily Tracker.</p>
    </mat-card-content></mat-card>
  }

  <!-- ── All weeks ── -->
  <mat-card class="panel">
    <mat-card-header>
      <mat-icon mat-card-avatar class="panel-icon purple">view_timeline</mat-icon>
      <mat-card-title>Season Overview</mat-card-title>
      <mat-card-subtitle>Every week, its threshold, and how it ended</mat-card-subtitle>
    </mat-card-header>
    <mat-card-content>
      <div class="weeks-table">
        <div class="wt-header">
          <span>Week</span><span>Dates</span><span class="hide-sm">Content</span><span>Done / Min / Target</span><span>Result</span>
        </div>
        @for (wp of svc.weekProgressList(); track wp.plan.week) {
          <div class="wt-row" [class.current]="wp.result === 'in-progress'">
            <span class="wt-week">W{{ wp.plan.week }} <em class="phase-tag">P{{ wp.plan.phase }}</em></span>
            <span class="wt-dates">{{ svc.formatRange(wp.plan) }}</span>
            <span class="wt-content hide-sm">
              @if (wp.plan.phase === 1) { {{ subjectsLabel(wp) }} } @else { Full-syllabus revision }
            </span>
            <span class="wt-nums">
              @if (wp.plan.phase === 1) {
                {{ wp.videos.done }} / {{ wp.plan.videoMin }} / {{ wp.plan.videoTarget }}
              } @else {
                {{ wp.revision.done }} / {{ wp.plan.revisionMin }} / {{ wp.plan.revisionTarget }}
              }
            </span>
            <span class="chip" [class]="'chip ' + resultChip(wp.result)">{{ resultLabel(wp.result) }}</span>
          </div>
        }
      </div>
    </mat-card-content>
  </mat-card>

</div>
  `,
  styles: [`
  .weekly { display: flex; flex-direction: column; gap: 1.25rem; padding-bottom: 2rem; }

  .page-header { display: flex; justify-content: space-between; align-items: flex-start; gap: 1rem; flex-wrap: wrap; }
  .page-title { margin: 0; font-size: 1.5rem; font-weight: 800; color: var(--text-main); }
  .page-subtitle { margin: 4px 0 0; color: var(--text-secondary); font-size: .9rem; }
  .week-chip { display: flex; align-items: center; gap: 8px; padding: 10px 16px; border-radius: 12px; background: var(--bg-surface); border: 1px solid var(--border-color); font-size: .875rem; color: var(--text-main); }
  .week-chip mat-icon { color: var(--primary); }

  /* status banner */
  .status-banner { display: flex; align-items: center; gap: 14px; padding: 16px 20px; border-radius: 14px; }
  .status-banner mat-icon { font-size: 2rem; width: 2rem; height: 2rem; }
  .status-title { font-weight: 800; font-size: 1.1rem; }
  .status-sub { font-size: .85rem; opacity: .85; margin-top: 2px; }
  .score-ring { margin-left: auto; text-align: center; }
  .score-val { font-size: 1.5rem; font-weight: 900; }
  .score-lbl { font-size: .68rem; opacity: .75; }
  .pace-achieved      { background: rgba(76,175,80,.14);  color: #1b5e20; }
  .pace-threshold-met { background: rgba(0,188,212,.12);  color: #006064; }
  .pace-on-pace       { background: rgba(63,81,181,.10);  color: #283593; }
  .pace-push-needed   { background: rgba(255,152,0,.14);  color: #bf360c; }
  .pace-at-risk       { background: rgba(244,67,54,.14);  color: #b71c1c; }
  body.dark-mode .pace-achieved      { color: #a5d6a7; }
  body.dark-mode .pace-threshold-met { color: #80deea; }
  body.dark-mode .pace-on-pace       { color: #9fa8da; }
  body.dark-mode .pace-push-needed   { color: #ffcc80; }
  body.dark-mode .pace-at-risk       { color: #ef9a9a; }

  .panel { border-radius: 14px; }
  .panel mat-card-content { padding: 1rem 1.25rem 1.25rem !important; }
  .panel-icon { border-radius: 8px !important; padding: 6px !important; font-size: 1.3rem !important; width: 2rem !important; height: 2rem !important; display: flex !important; align-items: center !important; justify-content: center !important; }
  .panel-icon.blue   { background: rgba(63,81,181,.12);  color: var(--primary) !important; }
  .panel-icon.green  { background: rgba(76,175,80,.12);  color: var(--success) !important; }
  .panel-icon.red    { background: rgba(244,67,54,.12);  color: #c62828 !important; }
  .panel-icon.purple { background: rgba(156,39,176,.12); color: #7b1fa2 !important; }

  /* metric bars */
  .metric-bars { display: flex; flex-direction: column; gap: 1.1rem; }
  .mb-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px; flex-wrap: wrap; gap: 4px; }
  .mb-label { display: flex; align-items: center; gap: 6px; font-weight: 600; font-size: .9rem; color: var(--text-main); }
  .mb-label mat-icon { font-size: 1.1rem; width: 1.1rem; height: 1.1rem; color: var(--primary); }
  .mb-nums { font-size: .8rem; color: var(--text-secondary); }
  .mb-track { position: relative; height: 12px; background: var(--bg-surface-variant); border-radius: 6px; }
  .mb-fill { height: 100%; border-radius: 6px; background: var(--warning); transition: width .3s ease; }
  .mb-fill.min-met { background: #26c6da; }
  .mb-fill.target-met { background: var(--success); }
  .mb-threshold { position: absolute; top: -3px; bottom: -3px; width: 3px; background: var(--text-main); opacity: .55; border-radius: 2px; }
  .mb-status { margin-top: 5px; }

  .chip { font-size: .7rem; padding: 2px 10px; border-radius: 10px; font-weight: 700; white-space: nowrap; }
  .chip-green { background: rgba(76,175,80,.15); color: #2e7d32; }
  .chip-teal  { background: rgba(0,188,212,.15); color: #00838f; }
  .chip-grey  { background: var(--bg-surface-variant); color: var(--text-secondary); }
  .chip-blue  { background: rgba(63,81,181,.12); color: var(--primary); }
  .chip-red   { background: rgba(244,67,54,.12); color: #c62828; }

  .two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem; }
  @media (max-width: 900px) { .two-col { grid-template-columns: 1fr; } }

  /* pace */
  .pace-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: .75rem; }
  @media (max-width: 480px) { .pace-grid { grid-template-columns: repeat(2, 1fr); } }
  .pace-item { text-align: center; padding: .9rem .5rem; background: var(--bg-surface-variant); border-radius: 10px; }
  .pace-item.big { background: rgba(63,81,181,.1); }
  .pace-item.big .pace-num { color: var(--primary); }
  .pace-num { font-size: 1.5rem; font-weight: 800; color: var(--text-main); }
  .pace-lbl { font-size: .7rem; color: var(--text-secondary); margin-top: 2px; line-height: 1.3; }

  .hint-box { display: flex; gap: 10px; align-items: flex-start; background: rgba(63,81,181,.07); border-radius: 10px; padding: .8rem 1rem; margin-top: 1rem; font-size: .85rem; color: var(--text-main); line-height: 1.5; }
  .hint-box mat-icon { color: var(--primary); flex-shrink: 0; font-size: 1.2rem; width: 1.2rem; height: 1.2rem; }
  .hint-box.warn { background: rgba(255,152,0,.08); }
  .hint-box.warn mat-icon { color: var(--warning); }

  /* backlog */
  .empty-good { text-align: center; padding: 1rem; color: var(--success); }
  .empty-good mat-icon { font-size: 2.2rem; width: 2.2rem; height: 2.2rem; }
  .empty-good p { color: var(--text-secondary); margin: .5rem 0 0; font-size: .875rem; }
  .backlog-big { font-size: 2.6rem; font-weight: 900; color: #e53935; line-height: 1; }
  .backlog-text { font-size: .875rem; color: var(--text-secondary); line-height: 1.5; }

  .subject-alloc { margin-top: 1.25rem; border-top: 1px solid var(--border-color); padding-top: .9rem; }
  .alloc-title { font-size: .72rem; text-transform: uppercase; letter-spacing: .06em; color: var(--text-secondary); font-weight: 700; margin-bottom: .5rem; }
  .alloc-row { display: flex; justify-content: space-between; padding: .35rem 0; font-size: .875rem; color: var(--text-main); }
  .alloc-count { color: var(--text-secondary); }
  .milestone-row { display: flex; align-items: center; gap: 6px; margin-top: .6rem; font-size: .82rem; font-weight: 600; color: var(--success); }
  .milestone-row mat-icon { font-size: 1rem; width: 1rem; height: 1rem; }

  /* weeks table */
  .weeks-table { width: 100%; }
  .wt-header { display: grid; grid-template-columns: 80px 110px 1fr 150px 110px; gap: .5rem; padding: .4rem .6rem; font-size: .72rem; font-weight: 700; text-transform: uppercase; letter-spacing: .05em; color: var(--text-secondary); border-bottom: 2px solid var(--border-color); }
  .wt-row { display: grid; grid-template-columns: 80px 110px 1fr 150px 110px; gap: .5rem; padding: .55rem .6rem; font-size: .85rem; align-items: center; border-bottom: 1px solid var(--border-color); color: var(--text-main); }
  .wt-row:last-child { border-bottom: none; }
  .wt-row.current { background: rgba(63,81,181,.06); border-radius: 8px; }
  .wt-week { font-weight: 700; }
  .phase-tag { font-style: normal; font-size: .65rem; color: var(--text-tertiary); margin-left: 2px; }
  .wt-dates, .wt-content { color: var(--text-secondary); font-size: .8rem; }
  .wt-content { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .wt-nums { font-variant-numeric: tabular-nums; }
  @media (max-width: 700px) {
    .wt-header { grid-template-columns: 60px 100px 110px 90px; }
    .wt-row { grid-template-columns: 60px 100px 110px 90px; }
    .hide-sm { display: none; }
  }
  `]
})
export class WeeklyComponent {
  svc = inject(WeeklyPlanService);

  cw = computed(() => this.svc.currentWeek());
  pace = computed<WeekPace>(() => this.svc.weekPace());

  metricRows = computed<MetricRow[]>(() => {
    const w = this.cw();
    if (!w) return [];
    const rows: MetricRow[] = [
      { key: 'hours', label: 'Study Hours', icon: 'schedule', unit: 'h', m: w.hours },
      { key: 'questions', label: 'Practice Questions', icon: 'quiz', unit: 'qs', m: w.questions },
      { key: 'revision', label: 'Revision (videos revised)', icon: 'replay', unit: '', m: w.revision },
    ];
    if (w.plan.videoTarget > 0) {
      rows.unshift({ key: 'videos', label: 'Topics / Videos Completed', icon: 'play_circle', unit: '', m: w.videos });
    }
    return rows;
  });

  daysLeftLabel = computed(() => {
    const g = this.svc.paceGuide();
    if (!g) return '';
    return g.daysLeft === 1 ? 'Last day — deadline today' : `${g.daysLeft} days left`;
  });

  paceIcon = computed(() => ({
    'achieved': 'emoji_events', 'threshold-met': 'verified', 'on-pace': 'trending_up',
    'push-needed': 'bolt', 'at-risk': 'warning'
  }[this.pace()]));

  paceLabel = computed(() => ({
    'achieved': 'Weekly target achieved!',
    'threshold-met': 'Minimum threshold met',
    'on-pace': 'On pace',
    'push-needed': 'Push needed',
    'at-risk': 'Week at risk'
  }[this.pace()]));

  paceMessage = computed(() => {
    const g = this.svc.paceGuide();
    if (!g) return '';
    switch (this.pace()) {
      case 'achieved': return 'Everything beyond this is a head start on next week.';
      case 'threshold-met': return `Threshold secured — ${g.videosPerDay}/day takes you to the full target.`;
      case 'on-pace': return `Keep ${g.videosPerDay} videos/day and the week closes on target.`;
      case 'push-needed': return `You need ${g.videosPerDay} videos/day now — still doable, use the flex day.`;
      case 'at-risk': return `Required pace is ${g.videosPerDay}/day. Protect the minimum (${g.videosPerDayToMin}/day) first.`;
    }
  });

  subjectsLabel(wp: WeekProgress): string {
    return wp.plan.subjects.map(s => `${s.name} (${s.videos})`).join(' · ');
  }

  resultChip(r: WeekResult): string {
    return { 'achieved': 'chip-green', 'threshold-met': 'chip-teal', 'missed': 'chip-red', 'in-progress': 'chip-blue', 'upcoming': 'chip-grey' }[r];
  }

  resultLabel(r: WeekResult): string {
    return { 'achieved': 'achieved', 'threshold-met': 'threshold met', 'missed': 'missed', 'in-progress': 'this week', 'upcoming': 'upcoming' }[r];
  }

  fmtDay(d: string): string {
    return new Date(d + 'T00:00:00').toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'short' });
  }
}
