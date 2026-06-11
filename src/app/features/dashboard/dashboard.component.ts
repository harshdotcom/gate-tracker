import { Component, inject, computed } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProgressService } from '../../core/services/progress.service';
import { WeeklyPlanService } from '../../core/services/weekly-plan.service';
import { MetricCardComponent } from '../../shared/components/metric-card/metric-card.component';
import { ProgressBarComponent } from '../../shared/components/progress-bar/progress-bar.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule, MetricCardComponent, ProgressBarComponent, MatCardModule, MatIconModule, MatButtonModule],
  template: `
    <div class="dashboard-container">

      <div class="metrics-grid">
        <app-metric-card title="Videos This Week" [value]="videosThisWeek()" [subtitle]="videosThisWeekSub()" icon="play_circle" [colorClass]="weekColor()"></app-metric-card>
        <app-metric-card title="Week" [value]="weekLabel()" [subtitle]="weekDates()" icon="calendar_month" colorClass="primary"></app-metric-card>
        <app-metric-card title="Syllabus Done" [value]="progress.overallCompletionPercent() + '%'" [subtitle]="syllabusSubtitle()" icon="school" colorClass="success"></app-metric-card>
        <app-metric-card title="Backlog" [value]="weekly.backlogVideos() === 0 ? 'Clear' : weekly.backlogVideos() + ' videos'" [subtitle]="backlogSubtitle()" icon="inventory" [colorClass]="weekly.backlogVideos() > 0 ? 'warning' : 'success'"></app-metric-card>
      </div>

      @if (weekly.currentWeek(); as w) {
        <mat-card class="main-card mt-4">
          <mat-card-header>
            <mat-card-title>Week {{ w.plan.week }} Progress</mat-card-title>
            <mat-card-subtitle>Minimum thresholds must be met by Sunday — daily pace is flexible</mat-card-subtitle>
            <span class="header-spacer"></span>
            <a mat-stroked-button color="primary" routerLink="/weekly">Weekly Goals</a>
          </mat-card-header>
          <mat-card-content class="pt-4">
            @if (w.plan.videoTarget > 0) {
              <app-progress-bar [percent]="w.videos.pctOfTarget"
                [label]="'Topics / Videos · ' + w.videos.done + ' of ' + w.plan.videoTarget + ' (min ' + w.plan.videoMin + ')'"
                [colorClass]="w.videos.minMet ? 'success' : 'warning'"></app-progress-bar>
            }
            <app-progress-bar [percent]="w.hours.pctOfTarget"
              [label]="'Study Hours · ' + w.hours.done + ' of ' + w.plan.hoursTarget + 'h (min ' + w.plan.hoursMin + 'h)'"
              [colorClass]="w.hours.minMet ? 'success' : 'warning'"></app-progress-bar>
            <app-progress-bar [percent]="w.questions.pctOfTarget"
              [label]="'Practice Questions · ' + w.questions.done + ' of ' + w.plan.questionsTarget + ' (min ' + w.plan.questionsMin + ')'"
              [colorClass]="w.questions.minMet ? 'success' : 'warning'"></app-progress-bar>
            <app-progress-bar [percent]="w.revision.pctOfTarget"
              [label]="'Revision · ' + w.revision.done + ' of ' + w.plan.revisionTarget + ' (min ' + w.plan.revisionMin + ')'"
              [colorClass]="w.revision.minMet ? 'success' : 'warning'"></app-progress-bar>

            @if (weekly.paceGuide(); as g) {
              <div class="pace-line">
                <mat-icon>speed</mat-icon>
                <span><strong>{{ g.videosPerDay }} videos/day</strong> for the remaining {{ g.daysLeft }} day{{ g.daysLeft === 1 ? '' : 's' }}
                closes this week's target{{ weekly.backlogVideos() ? ' and clears the backlog share' : '' }}.</span>
              </div>
            }
          </mat-card-content>
        </mat-card>
      }

      <mat-card class="main-card mt-4">
        <mat-card-header>
          <mat-card-title>Overall Progress</mat-card-title>
        </mat-card-header>
        <mat-card-content class="pt-4">
          <app-progress-bar [percent]="progress.overallCompletionPercent()" label="Total Syllabus" colorClass="success"></app-progress-bar>
        </mat-card-content>
      </mat-card>

      <mat-card class="main-card mt-4">
        <mat-card-header>
          <mat-card-title>Subject Progress</mat-card-title>
        </mat-card-header>
        <mat-card-content class="pt-4">
          <div class="subject-bars">
            @for (sub of progress.subjectProgress(); track sub.id) {
              <app-progress-bar
                [percent]="sub.percent"
                [label]="sub.name"
                colorClass="primary">
              </app-progress-bar>
            }
          </div>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    .dashboard-container { display: flex; flex-direction: column; gap: 1rem; }
    .metrics-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1rem; }
    .mt-4 { margin-top: 1rem; }
    .pt-4 { padding-top: 1rem; }
    .main-card { padding: 1rem; border-radius: 12px; }
    .main-card mat-card-header { align-items: center; }
    .header-spacer { flex: 1; }
    .subject-bars { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; }
    .pace-line { display: flex; align-items: center; gap: 8px; background: rgba(63,81,181,.07); border-radius: 10px; padding: .7rem 1rem; font-size: .875rem; color: var(--text-main); }
    .pace-line mat-icon { color: var(--primary); }
  `]
})
export class DashboardComponent {
  progress = inject(ProgressService);
  weekly = inject(WeeklyPlanService);

  videosThisWeek = computed(() => {
    const w = this.weekly.currentWeek();
    if (!w) return '—';
    return `${w.videos.done} / ${w.plan.videoTarget}`;
  });

  videosThisWeekSub = computed(() => {
    const w = this.weekly.currentWeek();
    if (!w) return '';
    if (w.videos.targetMet) return 'Target reached!';
    if (w.videos.minMet) return `Min met · ${w.plan.videoTarget - w.videos.done} more to target`;
    return `Need ${w.plan.videoMin - w.videos.done} more to reach minimum (${w.plan.videoMin})`;
  });

  weekLabel = computed(() => {
    const w = this.weekly.currentWeek();
    const plan = this.weekly.plan();
    if (!w || !plan) return '—';
    return `${w.plan.week} / ${plan.totalWeeks}`;
  });

  weekDates = computed(() => {
    const w = this.weekly.currentWeek();
    return w ? `${this.weekly.formatRange(w.plan)} · Phase ${w.plan.phase}` : '';
  });

  weekScore = computed(() => {
    const w = this.weekly.currentWeek();
    return w ? `${w.score}%` : '—';
  });

  weekSubtitle = computed(() => {
    const w = this.weekly.currentWeek();
    if (!w) return '';
    const primary = w.plan.phase === 1 ? w.videos : w.revision;
    if (primary.targetMet) return 'Target achieved';
    if (primary.minMet) return 'Threshold met — push for target';
    return `${primary.min - primary.done} more to minimum threshold`;
  });

  weekColor = computed(() => {
    const w = this.weekly.currentWeek();
    if (!w) return 'primary' as const;
    const primary = w.plan.phase === 1 ? w.videos : w.revision;
    return primary.minMet ? 'success' as const : 'warning' as const;
  });

  syllabusSubtitle = computed(() => {
    const o = this.weekly.overall();
    if (!o) return '';
    if (o.aheadBy >= 0) return `${o.done}/${o.totalVideos} videos · ${o.aheadBy} ahead of plan`;
    return `${o.done}/${o.totalVideos} videos · ${-o.aheadBy} behind plan`;
  });

  backlogSubtitle = computed(() => {
    const b = this.weekly.backlogVideos();
    return b > 0 ? `+${this.weekly.backlogShare()} per week to recover` : 'All clear';
  });
}
