import { Component, inject, computed, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { DataService } from '../../core/services/data.service';
import { StorageService } from '../../core/services/storage.service';
import { DayPlan, RoadmapMilestone } from '../../core/models';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-roadmap',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatButtonModule, MatChipsModule, MatProgressBarModule],
  template: `
    <div class="roadmap-container">

      <!-- Header -->
      <div class="page-header">
        <div>
          <h2 class="page-title">Preparation Roadmap</h2>
          <p class="page-subtitle">Max 2 videos/day (hard cap) · Mon–Sat: 2 lectures + revision + PYQs · Sunday: flex day</p>
        </div>
        <div class="header-stats">
          <div class="stat-pill">
            <mat-icon>today</mat-icon>
            <span>Day {{ currentDayNumber() }} of {{ totalDays() }}</span>
          </div>
          <div class="stat-pill success">
            <mat-icon>check_circle</mat-icon>
            <span>{{ daysCompleted() }} done</span>
          </div>
        </div>
      </div>

      <!-- Overall progress bar -->
      <mat-card class="progress-card">
        <mat-card-content>
          <div class="progress-header-row">
            <span class="progress-label">Overall Journey</span>
            <span class="progress-pct">{{ overallPercent() }}%</span>
          </div>
          <mat-progress-bar mode="determinate" [value]="overallPercent()" color="primary"></mat-progress-bar>
          <div class="progress-meta">
            <span>Started: {{ startDate() }}</span>
            <span>Coverage target: Jan 25 2027 · Exam: GATE Feb 2027</span>
          </div>
        </mat-card-content>
      </mat-card>

      <!-- Today's Plan -->
      @if (todayPlan()) {
        <mat-card class="today-card">
          <mat-card-header>
            <mat-icon mat-card-avatar class="today-icon">wb_sunny</mat-icon>
            <mat-card-title>Today — Day {{ todayPlan()!.day }}</mat-card-title>
            <mat-card-subtitle>{{ todayPlan()!.date }} · {{ todayPlan()!.isWeekend ? 'Weekend' : 'Weekday' }}</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content class="today-content">
            <div class="today-tasks">
              <div class="task-chip watch">
                <mat-icon>play_circle</mat-icon>
                <div>
                  <div class="task-label">New Videos</div>
                  <div class="task-value">{{ todayPlan()!.videosToWatch }} videos</div>
                </div>
              </div>
              <div class="task-chip revise">
                <mat-icon>menu_book</mat-icon>
                <div>
                  <div class="task-label">Revision</div>
                  <div class="task-value">{{ todayRevisionTarget() }} video{{ todayRevisionTarget() !== 1 ? 's' : '' }}</div>
                </div>
              </div>
              <div class="task-chip subject">
                <mat-icon>school</mat-icon>
                <div>
                  <div class="task-label">Focus Subject</div>
                  <div class="task-value">{{ todayPlan()!.subjectFocus }}</div>
                </div>
              </div>
            </div>
          </mat-card-content>
        </mat-card>
      }

      <!-- Milestones -->
      <div class="section-title">
        <mat-icon>flag</mat-icon>
        <h3>Milestones</h3>
      </div>
      <div class="milestones-grid">
        @for (ms of milestones(); track ms.day) {
          <div class="milestone-item" [class.reached]="currentDayNumber() >= ms.day" [class.next]="isNextMilestone(ms)">
            <div class="milestone-day">Day {{ ms.day }}</div>
            <div class="milestone-icon">
              @if (currentDayNumber() >= ms.day) {
                <mat-icon class="done-icon">check_circle</mat-icon>
              } @else if (isNextMilestone(ms)) {
                <mat-icon class="next-icon">radio_button_unchecked</mat-icon>
              } @else {
                <mat-icon class="future-icon">radio_button_unchecked</mat-icon>
              }
            </div>
            <div class="milestone-title">{{ ms.title }}</div>
          </div>
        }
      </div>

      <!-- Weekly Schedule -->
      <div class="section-title">
        <mat-icon>calendar_view_week</mat-icon>
        <h3>This Week's Schedule</h3>
      </div>
      <div class="week-grid">
        @for (day of thisWeek(); track day.day) {
          <mat-card class="day-card" [class.today]="isToday(day)" [class.past]="isPast(day)" [class.weekend]="day.isWeekend">
            <mat-card-content>
              <div class="day-name">{{ getDayName(day.date) }}</div>
              <div class="day-date">{{ formatShortDate(day.date) }}</div>
              <div class="day-videos">
                <mat-icon>play_circle</mat-icon>
                {{ day.videosToWatch }} videos
              </div>
              <div class="day-revision">
                <mat-icon>menu_book</mat-icon>
                {{ day.revisionSlots }} revision
              </div>
              <div class="day-subject">{{ day.subjectFocus }}</div>
              @if (isToday(day)) {
                <div class="today-badge">TODAY</div>
              }
            </mat-card-content>
          </mat-card>
        }
      </div>

      <!-- Upcoming 30 days table -->
      <div class="section-title">
        <mat-icon>view_list</mat-icon>
        <h3>Upcoming Days</h3>
      </div>
      <mat-card class="table-card">
        <mat-card-content>
          <div class="plan-table">
            <div class="table-header">
              <span>Day</span>
              <span>Date</span>
              <span>Type</span>
              <span>Videos</span>
              <span>Revision</span>
              <span>Subject Focus</span>
            </div>
            @for (day of upcoming30(); track day.day) {
              <div class="table-row" [class.today-row]="isToday(day)" [class.weekend-row]="day.isWeekend" [class.past-row]="isPast(day)">
                <span class="day-num">{{ day.day }}</span>
                <span>{{ formatShortDate(day.date) }}</span>
                <span>
                  @if (day.isWeekend) {
                    <span class="badge weekend-badge">Weekend</span>
                  } @else {
                    <span class="badge weekday-badge">Weekday</span>
                  }
                </span>
                <span class="center">{{ day.videosToWatch }}</span>
                <span class="center">{{ day.revisionSlots }}</span>
                <span class="subject-tag">{{ day.subjectFocus }}</span>
              </div>
            }
          </div>
        </mat-card-content>
      </mat-card>

    </div>
  `,
  styles: [`
    .roadmap-container { display: flex; flex-direction: column; gap: 1.5rem; padding-bottom: 2rem; }

    /* Header */
    .page-header { display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 1rem; }
    .page-title { margin: 0; font-size: 1.75rem; font-weight: 700; color: var(--text-main); }
    .page-subtitle { margin: 0.25rem 0 0; color: var(--text-secondary); font-size: 0.9rem; }
    .header-stats { display: flex; gap: 0.75rem; flex-wrap: wrap; }
    .stat-pill { display: flex; align-items: center; gap: 6px; background: rgba(63,81,181,0.1); color: var(--primary); padding: 6px 14px; border-radius: 20px; font-size: 0.875rem; font-weight: 500; }
    .stat-pill mat-icon { font-size: 1rem; width: 1rem; height: 1rem; }
    .stat-pill.success { background: rgba(76,175,80,0.1); color: var(--success); }

    /* Progress card */
    .progress-card { border-radius: 12px; }
    .progress-header-row { display: flex; justify-content: space-between; margin-bottom: 0.5rem; }
    .progress-label { font-weight: 600; color: var(--text-main); }
    .progress-pct { font-weight: 700; color: var(--primary); font-size: 1.1rem; }
    .progress-meta { display: flex; justify-content: space-between; margin-top: 0.5rem; font-size: 0.8rem; color: var(--text-secondary); }

    /* Today card */
    .today-card { border-radius: 12px; border-left: 4px solid var(--primary) !important; }
    .today-icon { color: #f59e0b !important; background: rgba(245,158,11,0.1); border-radius: 50%; padding: 4px; }
    .today-content { padding-top: 1rem !important; }
    .today-tasks { display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 1rem; }
    .task-chip { display: flex; align-items: center; gap: 12px; padding: 1rem; border-radius: 10px; }
    .task-chip.watch { background: rgba(63,81,181,0.08); }
    .task-chip.revise { background: rgba(76,175,80,0.08); }
    .task-chip.subject { background: rgba(245,158,11,0.08); }
    .task-chip mat-icon { font-size: 1.5rem; width: 1.5rem; height: 1.5rem; }
    .task-chip.watch mat-icon { color: var(--primary); }
    .task-chip.revise mat-icon { color: var(--success); }
    .task-chip.subject mat-icon { color: #f59e0b; }
    .task-label { font-size: 0.75rem; color: var(--text-secondary); }
    .task-value { font-weight: 700; font-size: 1rem; color: var(--text-main); }

    /* Section titles */
    .section-title { display: flex; align-items: center; gap: 8px; margin-top: 0.5rem; }
    .section-title mat-icon { color: var(--primary); }
    .section-title h3 { margin: 0; font-size: 1.1rem; font-weight: 600; color: var(--text-main); }

    /* Milestones */
    .milestones-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap: 1rem; }
    .milestone-item { background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: 10px; padding: 1rem; text-align: center; transition: all 0.2s; }
    .milestone-item.reached { background: rgba(76,175,80,0.08); border-color: var(--success); }
    .milestone-item.next { background: rgba(63,81,181,0.08); border-color: var(--primary); box-shadow: 0 0 0 2px rgba(63,81,181,0.2); }
    .milestone-day { font-size: 0.75rem; color: var(--text-secondary); margin-bottom: 4px; }
    .milestone-icon { margin: 6px 0; }
    .done-icon { color: var(--success) !important; }
    .next-icon { color: var(--primary) !important; }
    .future-icon { color: var(--border-color) !important; }
    .milestone-title { font-size: 0.8rem; font-weight: 500; color: var(--text-main); line-height: 1.3; }

    /* Week grid */
    .week-grid { display: grid; grid-template-columns: repeat(7, 1fr); gap: 0.75rem; }
    @media (max-width: 900px) { .week-grid { grid-template-columns: repeat(4, 1fr); } }
    @media (max-width: 600px) { .week-grid { grid-template-columns: repeat(2, 1fr); } }
    .day-card { border-radius: 10px; position: relative; overflow: hidden; cursor: default; }
    .day-card mat-card-content { padding: 0.75rem !important; }
    .day-card.today { border: 2px solid var(--primary) !important; }
    .day-card.past { opacity: 0.55; }
    .day-card.weekend { background: rgba(63,81,181,0.04) !important; }
    .day-name { font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-secondary); }
    .day-date { font-weight: 700; font-size: 0.95rem; color: var(--text-main); margin: 2px 0 6px; }
    .day-videos { display: flex; align-items: center; gap: 4px; font-size: 0.8rem; color: var(--primary); font-weight: 500; }
    .day-videos mat-icon, .day-revision mat-icon { font-size: 0.95rem; width: 0.95rem; height: 0.95rem; }
    .day-revision { display: flex; align-items: center; gap: 4px; font-size: 0.8rem; color: var(--success); font-weight: 500; margin-top: 2px; }
    .day-subject { font-size: 0.72rem; color: var(--text-secondary); margin-top: 4px; line-height: 1.2; }
    .today-badge { position: absolute; top: 4px; right: 4px; background: var(--primary); color: #fff; font-size: 0.6rem; font-weight: 700; padding: 1px 5px; border-radius: 4px; letter-spacing: 0.05em; }

    /* Table */
    .table-card { border-radius: 12px; }
    .plan-table { width: 100%; }
    .table-header { display: grid; grid-template-columns: 48px 90px 90px 64px 72px 1fr; gap: 0.5rem; padding: 0.6rem 1rem; font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-secondary); border-bottom: 2px solid var(--border-color); }
    .table-row { display: grid; grid-template-columns: 48px 90px 90px 64px 72px 1fr; gap: 0.5rem; padding: 0.6rem 1rem; font-size: 0.85rem; border-bottom: 1px solid var(--border-color); align-items: center; transition: background 0.15s; }
    .table-row:hover { background: var(--bg-surface-variant); }
    .table-row:last-child { border-bottom: none; }
    .table-row.today-row { background: rgba(63,81,181,0.06); font-weight: 600; }
    .table-row.weekend-row { background: rgba(63,81,181,0.02); }
    .table-row.past-row { opacity: 0.5; }
    @media (max-width: 600px) {
      .table-header { display: none; }
      .table-row { grid-template-columns: 40px 1fr auto; grid-template-rows: auto auto; gap: 0.25rem 0.5rem; padding: 0.6rem 0.75rem; }
      .table-row > span:nth-child(3) { grid-column: 3; grid-row: 1; }
      .table-row > span:nth-child(4),
      .table-row > span:nth-child(5) { font-size: 0.75rem; color: var(--text-secondary); }
      .table-row > span:nth-child(6) { grid-column: 2 / -1; font-size: 0.8rem; }
    }
    .day-num { font-weight: 700; color: var(--primary); }
    .center { text-align: center; }
    .badge { font-size: 0.7rem; padding: 2px 8px; border-radius: 10px; font-weight: 500; }
    .weekend-badge { background: rgba(63,81,181,0.12); color: var(--primary); }
    .weekday-badge { background: var(--bg-surface-variant); color: var(--text-secondary); }
    .subject-tag { color: var(--text-main); font-weight: 500; }
  `]
})
export class RoadmapComponent {
  private dataService = inject(DataService);
  private storage = inject(StorageService);

  private roadmap = toSignal(this.dataService.getRoadmap(), { initialValue: null as any });

  today = new Date().toISOString().split('T')[0];

  dailyPlan = computed<DayPlan[]>(() => this.roadmap()?.dailyPlan ?? []);
  milestones = computed<RoadmapMilestone[]>(() => this.roadmap()?.milestones ?? []);
  startDate = computed(() => this.roadmap()?.startDate ?? '');
  totalDays = computed(() => this.roadmap()?.totalDays ?? 0);

  todayPlan = computed(() => this.dailyPlan().find(d => d.date === this.today) ?? null);

  currentDayNumber = computed(() => this.todayPlan()?.day ?? 0);

  daysCompleted = computed(() => this.dailyPlan().filter(d => d.date < this.today).length);

  overallPercent = computed(() => {
    const total = this.totalDays();
    return total ? Math.round((this.daysCompleted() / total) * 100) : 0;
  });

  todayRevisionTarget = computed(() => {
    const plan = this.todayPlan();
    if (!plan) return 0;
    return plan.revisionSlots;
  });

  thisWeek = computed<DayPlan[]>(() => {
    const plan = this.dailyPlan();
    const idx = plan.findIndex(d => d.date === this.today);
    if (idx === -1) return plan.slice(0, 7);
    const start = Math.max(0, idx - 3);
    return plan.slice(start, start + 7);
  });

  upcoming30 = computed<DayPlan[]>(() => {
    const plan = this.dailyPlan();
    const idx = plan.findIndex(d => d.date >= this.today);
    const start = idx === -1 ? 0 : Math.max(0, idx - 2);
    return plan.slice(start, start + 30);
  });

  isToday(day: DayPlan) { return day.date === this.today; }
  isPast(day: DayPlan)  { return day.date < this.today; }

  isNextMilestone(ms: RoadmapMilestone) {
    const cur = this.currentDayNumber();
    return ms.day > cur && !this.milestones().some(m => m.day > cur && m.day < ms.day);
  }

  getDayName(date: string) {
    return new Date(date + 'T00:00:00').toLocaleDateString('en-US', { weekday: 'short' });
  }

  formatShortDate(date: string) {
    return new Date(date + 'T00:00:00').toLocaleDateString('en-US', { day: 'numeric', month: 'short' });
  }
}
