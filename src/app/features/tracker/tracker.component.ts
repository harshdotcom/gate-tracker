import { Component, inject, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TrackerService } from '../../core/services/tracker.service';
import { DailyLog, DailyTask, DailyReflection, TaskStatus, HealthStatus } from '../../core/models';

@Component({
  selector: 'app-tracker',
  standalone: true,
  imports: [
    FormsModule, MatCardModule, MatIconModule, MatButtonModule,
    MatInputModule, MatFormFieldModule, MatSelectModule,
    MatProgressBarModule, MatTooltipModule
  ],
  template: `
<div class="tracker">

  <!-- ── TOP: Health + Next Catch-Up ── -->
  <div class="top-row">
    <div class="health-card" [class]="'health-' + svc.scheduleHealth()">
      <mat-icon>{{ healthIcon(svc.scheduleHealth()) }}</mat-icon>
      <div>
        <div class="health-label">Schedule Health</div>
        <div class="health-value">{{ healthLabel(svc.scheduleHealth()) }}</div>
      </div>
    </div>
    @if (svc.nextCatchUpDay()) {
      <div class="catchup-pill">
        <mat-icon>event_available</mat-icon>
        Next Catch-Up: <strong>Day {{ svc.nextCatchUpDay()!.day }}</strong> · {{ fmtShort(svc.nextCatchUpDay()!.date) }}
      </div>
    }
    <div class="streak-pill">
      <mat-icon>local_fire_department</mat-icon>
      Streak <strong>{{ svc.metrics().studyStreak }}</strong> · Best <strong>{{ svc.metrics().bestStreak }}</strong>
    </div>
  </div>

  <!-- ── DATE NAV + TITLE ── -->
  <div class="date-nav">
    <button mat-icon-button (click)="shiftDay(-1)"><mat-icon>chevron_left</mat-icon></button>
    <div class="date-center">
      <div class="day-num-badge" [class.catchup]="activeLog().isCatchUpDay">
        Day {{ activeLog().dayNumber }}
        @if (activeLog().isCatchUpDay) { <span class="catchup-tag">CATCH-UP</span> }
        @if (isActiveToday()) { <span class="today-tag">TODAY</span> }
      </div>
      <div class="date-label">{{ fmtFull(activeDate()) }}</div>
    </div>
    <button mat-icon-button (click)="shiftDay(1)" [disabled]="isActiveToday()"><mat-icon>chevron_right</mat-icon></button>
  </div>

  <!-- ── ACHIEVEMENT SCORE ── -->
  <mat-card class="score-card">
    <mat-card-content>
      <div class="score-grid">
        <div class="score-block">
          <div class="score-num" [class.full]="achievementScore() >= 100">{{ achievementScore() }}%</div>
          <div class="score-sub">Achievement Score</div>
          <mat-progress-bar [value]="achievementScore()" [color]="achievementScore() >= 80 ? 'accent' : 'primary'"></mat-progress-bar>
        </div>
        <div class="kpi-row">
          <div class="kpi">
            <mat-icon>play_circle</mat-icon>
            <div class="kpi-nums">{{ activeLog().completedVideos }}<span>/{{ activeLog().plannedVideos }}</span></div>
            <div class="kpi-label">Videos</div>
          </div>
          <div class="kpi">
            <mat-icon>schedule</mat-icon>
            <div class="kpi-nums">{{ activeLog().actualHours }}<span>/{{ activeLog().plannedHours }}h</span></div>
            <div class="kpi-label">Hours</div>
          </div>
          <div class="kpi">
            <mat-icon>quiz</mat-icon>
            <div class="kpi-nums">{{ activeLog().questionsAttempted }}</div>
            <div class="kpi-label">Questions</div>
          </div>
          <div class="kpi">
            <mat-icon>note_alt</mat-icon>
            <div class="kpi-nums">{{ activeLog().notesPrepared }}</div>
            <div class="kpi-label">Notes</div>
          </div>
        </div>
      </div>
    </mat-card-content>
  </mat-card>

  <!-- ── MAIN GRID ── -->
  <div class="main-grid">

    <!-- LEFT: Tasks + Actuals -->
    <div class="left-col">

      <!-- Tasks -->
      <mat-card class="panel">
        <mat-card-header>
          <mat-icon mat-card-avatar class="panel-icon blue">task_alt</mat-icon>
          <mat-card-title>Today's Tasks</mat-card-title>
          <mat-card-subtitle>Tap status to cycle · Skipped items go to Recovery</mat-card-subtitle>
        </mat-card-header>
        <mat-card-content>

          <!-- Add task -->
          @if (isActiveToday()) {
            <div class="add-task-row">
              <mat-form-field appearance="outline" class="task-input">
                <mat-label>Task label</mat-label>
                <input matInput [(ngModel)]="newLabel" (keyup.enter)="addTask()" placeholder="e.g. Fluid Mechanics Video 3" />
              </mat-form-field>
              <mat-form-field appearance="outline" class="task-type-select">
                <mat-label>Type</mat-label>
                <mat-select [(ngModel)]="newType">
                  <mat-option value="video">Video</mat-option>
                  <mat-option value="revision">Revision</mat-option>
                  <mat-option value="notes">Notes</mat-option>
                  <mat-option value="practice">Practice</mat-option>
                </mat-select>
              </mat-form-field>
              <button mat-flat-button color="primary" (click)="addTask()" [disabled]="!newLabel.trim()">Add</button>
            </div>
          }

          @if (activeLog().tasks.length === 0) {
            <div class="empty-state">
              <mat-icon>add_task</mat-icon>
              <p>No tasks yet. Add tasks above to start tracking.</p>
            </div>
          }

          <div class="task-list">
            @for (task of activeLog().tasks; track task.id) {
              <div class="task-item" [class]="'task-' + task.status">
                <div class="task-type-icon">
                  <mat-icon>{{ taskIcon(task.type) }}</mat-icon>
                </div>
                <div class="task-label-wrap">
                  <span class="task-name">{{ task.label }}</span>
                  <span class="task-type-chip">{{ task.type }}</span>
                </div>
                <div class="task-status-btns">
                  @for (s of statusOptions; track s.value) {
                    <button class="status-btn" [class.active]="task.status === s.value"
                      [class]="'status-btn status-btn-' + s.value + (task.status === s.value ? ' active' : '')"
                      (click)="setStatus(task.id, s.value)" [matTooltip]="s.label">
                      <mat-icon>{{ s.icon }}</mat-icon>
                    </button>
                  }
                </div>
                @if (isActiveToday()) {
                  <button mat-icon-button class="del-btn" (click)="removeTask(task.id)">
                    <mat-icon>close</mat-icon>
                  </button>
                }
              </div>
            }
          </div>
        </mat-card-content>
      </mat-card>

      <!-- Actuals -->
      @if (isActiveToday()) {
        <mat-card class="panel">
          <mat-card-header>
            <mat-icon mat-card-avatar class="panel-icon green">edit_note</mat-icon>
            <mat-card-title>Record Actuals</mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <div class="actuals-grid">
              <mat-form-field appearance="outline">
                <mat-label>Videos Completed</mat-label>
                <input matInput type="number" min="0" [ngModel]="activeLog().completedVideos"
                  (ngModelChange)="patch({ completedVideos: +$event })" />
              </mat-form-field>
              <mat-form-field appearance="outline">
                <mat-label>Actual Hours</mat-label>
                <input matInput type="number" min="0" step="0.5" [ngModel]="activeLog().actualHours"
                  (ngModelChange)="patch({ actualHours: +$event })" />
              </mat-form-field>
              <mat-form-field appearance="outline">
                <mat-label>Questions Attempted</mat-label>
                <input matInput type="number" min="0" [ngModel]="activeLog().questionsAttempted"
                  (ngModelChange)="patch({ questionsAttempted: +$event })" />
              </mat-form-field>
              <mat-form-field appearance="outline">
                <mat-label>Notes Prepared</mat-label>
                <input matInput type="number" min="0" [ngModel]="activeLog().notesPrepared"
                  (ngModelChange)="patch({ notesPrepared: +$event })" />
              </mat-form-field>
            </div>
          </mat-card-content>
        </mat-card>
      }

    </div><!-- /left-col -->

    <!-- RIGHT: Reflection + Recovery + Stats -->
    <div class="right-col">

      <!-- Reflection -->
      <mat-card class="panel">
        <mat-card-header>
          <mat-icon mat-card-avatar class="panel-icon orange">psychology</mat-icon>
          <mat-card-title>Daily Reflection</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <div class="reflection-fields">
            <mat-form-field appearance="outline">
              <mat-label>What went well?</mat-label>
              <textarea matInput rows="2" [disabled]="!isActiveToday()"
                [ngModel]="activeLog().reflection.wentWell"
                (ngModelChange)="patchReflection('wentWell', $event)"></textarea>
            </mat-form-field>
            <mat-form-field appearance="outline">
              <mat-label>What caused delays?</mat-label>
              <textarea matInput rows="2" [disabled]="!isActiveToday()"
                [ngModel]="activeLog().reflection.delays"
                (ngModelChange)="patchReflection('delays', $event)"></textarea>
            </mat-form-field>
            <mat-form-field appearance="outline">
              <mat-label>Key concepts learned</mat-label>
              <textarea matInput rows="2" [disabled]="!isActiveToday()"
                [ngModel]="activeLog().reflection.conceptsLearned"
                (ngModelChange)="patchReflection('conceptsLearned', $event)"></textarea>
            </mat-form-field>
            <mat-form-field appearance="outline">
              <mat-label>Areas needing revision</mat-label>
              <textarea matInput rows="2" [disabled]="!isActiveToday()"
                [ngModel]="activeLog().reflection.needsRevision"
                (ngModelChange)="patchReflection('needsRevision', $event)"></textarea>
            </mat-form-field>
            <mat-form-field appearance="outline">
              <mat-label>Personal remarks</mat-label>
              <textarea matInput rows="2" [disabled]="!isActiveToday()"
                [ngModel]="activeLog().reflection.remarks"
                (ngModelChange)="patchReflection('remarks', $event)"></textarea>
            </mat-form-field>
          </div>
        </mat-card-content>
      </mat-card>

      <!-- Performance Metrics -->
      <mat-card class="panel">
        <mat-card-header>
          <mat-icon mat-card-avatar class="panel-icon purple">bar_chart</mat-icon>
          <mat-card-title>Performance Metrics</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <div class="metrics-list">
            @for (m of metricRows(); track m.label) {
              <div class="metric-row">
                <span class="metric-label">{{ m.label }}</span>
                <span class="metric-val">{{ m.value }}</span>
              </div>
            }
          </div>
        </mat-card-content>
      </mat-card>

    </div><!-- /right-col -->
  </div><!-- /main-grid -->

  <!-- ── RECOVERY QUEUE ── -->
  <mat-card class="panel">
    <mat-card-header>
      <mat-icon mat-card-avatar class="panel-icon red">warning</mat-icon>
      <mat-card-title>Recovery Backlog</mat-card-title>
      <mat-card-subtitle>{{ svc.recoveryQueue().length }} item(s) pending</mat-card-subtitle>
    </mat-card-header>
    <mat-card-content>
      @if (svc.recoveryQueue().length === 0) {
        <div class="empty-state green-empty">
          <mat-icon>check_circle</mat-icon>
          <p>No backlog. You're fully on track!</p>
        </div>
      } @else {
        <div class="recovery-table">
          <div class="recovery-header">
            <span>Task</span><span>Type</span><span>Due</span><span>Delay</span><span>Priority</span><span></span>
          </div>
          @for (item of svc.recoveryQueue(); track item.taskId) {
            <div class="recovery-row" [class]="'priority-' + svc.recoveryPriority(item.originalDate)">
              <span class="rec-label">{{ item.label }}</span>
              <span class="rec-type">{{ item.type }}</span>
              <span class="rec-date">{{ fmtShort(item.originalDate) }}</span>
              <span class="rec-delay">{{ delayDays(item.originalDate) }}d</span>
              <span class="priority-badge" [class]="'p-' + svc.recoveryPriority(item.originalDate)">
                {{ svc.recoveryPriority(item.originalDate) }}
              </span>
              <button mat-icon-button (click)="svc.dismissRecovery(item.taskId)" matTooltip="Dismiss">
                <mat-icon>close</mat-icon>
              </button>
            </div>
          }
        </div>
      }
    </mat-card-content>
  </mat-card>

  <!-- ── WEEKLY SUMMARY ── -->
  <mat-card class="panel">
    <mat-card-header>
      <mat-icon mat-card-avatar class="panel-icon teal">calendar_view_week</mat-icon>
      <mat-card-title>Weekly Summary</mat-card-title>
    </mat-card-header>
    <mat-card-content>
      <div class="weekly-stats">
        <div class="w-stat"><div class="w-num">{{ svc.weeklySummary().planned }}</div><div class="w-lbl">Planned</div></div>
        <div class="w-stat success"><div class="w-num">{{ svc.weeklySummary().completed }}</div><div class="w-lbl">Completed</div></div>
        <div class="w-stat warn"><div class="w-num">{{ svc.weeklySummary().missed }}</div><div class="w-lbl">Missed</div></div>
        <div class="w-stat"><div class="w-num">{{ svc.weeklySummary().hours }}h</div><div class="w-lbl">Studied</div></div>
        <div class="w-stat primary"><div class="w-num">{{ svc.weeklySummary().pct }}%</div><div class="w-lbl">Completion</div></div>
      </div>
      <div class="suggestion-box">
        <mat-icon>tips_and_updates</mat-icon>
        <span>{{ svc.weeklySummary().suggestion }}</span>
      </div>
    </mat-card-content>
  </mat-card>

  <!-- ── CALENDAR HEATMAP ── -->
  <mat-card class="panel">
    <mat-card-header>
      <mat-icon mat-card-avatar class="panel-icon indigo">grid_view</mat-icon>
      <mat-card-title>Consistency Heatmap</mat-card-title>
      <mat-card-subtitle>Last 30 days</mat-card-subtitle>
    </mat-card-header>
    <mat-card-content>
      <div class="heatmap">
        @for (cell of heatmapCells(); track cell.date) {
          <div class="hm-cell" [class]="'hm-' + cell.level"
            [matTooltip]="cell.date + ': ' + cell.completed + '/' + cell.planned + ' videos'">
            @if (cell.isToday) { <div class="hm-today-dot"></div> }
          </div>
        }
      </div>
      <div class="heatmap-legend">
        <span>Less</span>
        <div class="hm-cell hm-0"></div>
        <div class="hm-cell hm-1"></div>
        <div class="hm-cell hm-2"></div>
        <div class="hm-cell hm-3"></div>
        <div class="hm-cell hm-4"></div>
        <span>More</span>
      </div>
    </mat-card-content>
  </mat-card>

</div>
  `,
  styles: [`
  /* ── Layout ── */
  .tracker { display: flex; flex-direction: column; gap: 1.25rem; padding-bottom: 2rem; }

  /* ── Top row ── */
  .top-row { display: flex; align-items: center; gap: 1rem; flex-wrap: wrap; }
  .health-card { display: flex; align-items: center; gap: 10px; padding: 10px 18px; border-radius: 12px; font-size: 0.875rem; flex: 1; min-width: 200px; }
  .health-label { font-size: 0.72rem; text-transform: uppercase; letter-spacing: .06em; opacity: .75; }
  .health-value { font-weight: 700; font-size: 1rem; }
  .health-card mat-icon { font-size: 1.6rem; width: 1.6rem; height: 1.6rem; }
  .health-on-track    { background: rgba(76,175,80,.12);  color: #2e7d32; }
  .health-minor-delay { background: rgba(255,193,7,.14);  color: #e65100; }
  .health-needs-recovery { background: rgba(255,152,0,.14); color: #bf360c; }
  .health-high-risk   { background: rgba(244,67,54,.14);  color: #b71c1c; }
  .catchup-pill, .streak-pill { display: flex; align-items: center; gap: 6px; padding: 8px 16px; border-radius: 20px; font-size: 0.85rem; background: var(--bg-surface); border: 1px solid var(--border-color); color: var(--text-main); white-space: nowrap; }
  .catchup-pill mat-icon { color: var(--success); font-size: 1.1rem; width: 1.1rem; height: 1.1rem; }
  .streak-pill mat-icon { color: #f97316; font-size: 1.1rem; width: 1.1rem; height: 1.1rem; }

  /* ── Date nav ── */
  .date-nav { display: flex; align-items: center; justify-content: center; gap: 1rem; }
  .date-center { text-align: center; }
  .day-num-badge { font-size: 1.4rem; font-weight: 800; color: var(--primary); display: flex; align-items: center; gap: 8px; justify-content: center; }
  .day-num-badge.catchup { color: var(--success); }
  .catchup-tag { font-size: 0.65rem; background: var(--success); color: #fff; padding: 2px 7px; border-radius: 6px; font-weight: 700; letter-spacing: .06em; }
  .today-tag   { font-size: 0.65rem; background: var(--primary); color: #fff; padding: 2px 7px; border-radius: 6px; font-weight: 700; letter-spacing: .06em; }
  .date-label { font-size: 0.9rem; color: var(--text-secondary); }

  /* ── Score card ── */
  .score-card { border-radius: 14px; }
  .score-card mat-card-content { padding: 1.25rem !important; }
  .score-grid { display: grid; grid-template-columns: 140px 1fr; gap: 1.5rem; align-items: center; }
  .score-num { font-size: 2.5rem; font-weight: 900; color: var(--primary); line-height: 1; }
  .score-num.full { color: var(--success); }
  .score-sub { font-size: 0.75rem; color: var(--text-secondary); margin: 4px 0 8px; }
  .kpi-row { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; }
  .kpi { text-align: center; }
  .kpi mat-icon { color: var(--primary); font-size: 1.3rem; width: 1.3rem; height: 1.3rem; }
  .kpi-nums { font-size: 1.25rem; font-weight: 700; color: var(--text-main); }
  .kpi-nums span { font-size: 0.8rem; color: var(--text-secondary); font-weight: 400; }
  .kpi-label { font-size: 0.72rem; color: var(--text-secondary); }

  /* ── Main grid ── */
  .main-grid { display: grid; grid-template-columns: 1fr 380px; gap: 1.25rem; }
  @media (max-width: 960px) { .main-grid { grid-template-columns: 1fr; } }
  .left-col, .right-col { display: flex; flex-direction: column; gap: 1.25rem; }

  /* ── Panel ── */
  .panel { border-radius: 14px; }
  .panel mat-card-content { padding: 1rem 1.25rem 1.25rem !important; }
  .panel-icon { border-radius: 8px !important; padding: 6px !important; font-size: 1.3rem !important; width: 2rem !important; height: 2rem !important; display: flex !important; align-items: center !important; justify-content: center !important; }
  .panel-icon.blue   { background: rgba(63,81,181,.12);  color: var(--primary) !important; }
  .panel-icon.green  { background: rgba(76,175,80,.12);  color: var(--success) !important; }
  .panel-icon.orange { background: rgba(255,152,0,.12);  color: var(--warning) !important; }
  .panel-icon.purple { background: rgba(156,39,176,.12); color: #7b1fa2 !important; }
  .panel-icon.red    { background: rgba(244,67,54,.12);  color: #c62828 !important; }
  .panel-icon.teal   { background: rgba(0,188,212,.12);  color: #00838f !important; }
  .panel-icon.indigo { background: rgba(63,81,181,.12);  color: var(--primary) !important; }

  /* ── Add task ── */
  .add-task-row { display: flex; gap: .75rem; align-items: flex-start; margin-bottom: .5rem; flex-wrap: wrap; }
  .task-input { flex: 1; min-width: 180px; }
  .task-type-select { width: 130px; }

  /* ── Task list ── */
  .empty-state { text-align: center; padding: 1.5rem; color: var(--text-secondary); }
  .empty-state mat-icon { font-size: 2.5rem; width: 2.5rem; height: 2.5rem; display: block; margin: 0 auto .5rem; }
  .green-empty mat-icon { color: var(--success); }
  .task-list { display: flex; flex-direction: column; gap: .5rem; }
  .task-item { display: flex; align-items: center; gap: .75rem; padding: .6rem .75rem; border-radius: 10px; border: 1px solid var(--border-color); background: var(--bg-surface); transition: all .15s; }
  .task-completed { background: rgba(76,175,80,.06); border-color: rgba(76,175,80,.25); }
  .task-skipped   { background: rgba(244,67,54,.05); border-color: rgba(244,67,54,.2); opacity: .7; }
  .task-started   { background: rgba(255,152,0,.06); border-color: rgba(255,152,0,.25); }
  .task-type-icon mat-icon { font-size: 1.1rem; width: 1.1rem; height: 1.1rem; color: var(--text-secondary); }
  .task-label-wrap { flex: 1; min-width: 0; }
  .task-name { display: block; font-weight: 500; font-size: .875rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; color: var(--text-main); }
  .task-type-chip { font-size: .68rem; background: var(--bg-surface-variant); color: var(--text-secondary); padding: 1px 6px; border-radius: 8px; }
  .task-status-btns { display: flex; gap: 3px; }
  .status-btn { border: none; background: none; cursor: pointer; padding: 4px 6px; border-radius: 6px; display: flex; align-items: center; color: var(--text-tertiary); transition: all .15s; }
  .status-btn mat-icon { font-size: 1rem; width: 1rem; height: 1rem; }
  .status-btn-planned.active  { background: rgba(63,81,181,.15);  color: var(--primary); }
  .status-btn-started.active  { background: rgba(255,152,0,.15);  color: var(--warning); }
  .status-btn-completed.active{ background: rgba(76,175,80,.15);  color: var(--success); }
  .status-btn-skipped.active  { background: rgba(244,67,54,.12);  color: #e53935; }
  .del-btn { opacity: .4; }
  .del-btn:hover { opacity: 1; }

  /* ── Actuals ── */
  .actuals-grid { display: grid; grid-template-columns: 1fr 1fr; gap: .75rem; }

  /* ── Reflection ── */
  .reflection-fields { display: flex; flex-direction: column; gap: .5rem; }
  .reflection-fields mat-form-field { width: 100%; }

  /* ── Metrics ── */
  .metrics-list { display: flex; flex-direction: column; }
  .metric-row { display: flex; justify-content: space-between; align-items: center; padding: .45rem 0; border-bottom: 1px solid var(--border-color); font-size: .875rem; }
  .metric-row:last-child { border-bottom: none; }
  .metric-label { color: var(--text-secondary); }
  .metric-val { font-weight: 700; color: var(--text-main); }

  /* ── Recovery ── */
  .recovery-table { width: 100%; }
  .recovery-header { display: grid; grid-template-columns: 1fr 80px 80px 55px 75px 40px; gap: .5rem; padding: .4rem .6rem; font-size: .72rem; font-weight: 700; text-transform: uppercase; letter-spacing: .05em; color: var(--text-secondary); border-bottom: 2px solid var(--border-color); }
  .recovery-row { display: grid; grid-template-columns: 1fr 80px 80px 55px 75px 40px; gap: .5rem; padding: .5rem .6rem; font-size: .85rem; align-items: center; border-bottom: 1px solid var(--border-color); }
  .recovery-row:last-child { border-bottom: none; }
  .priority-high   { border-left: 3px solid #e53935; }
  .priority-medium { border-left: 3px solid var(--warning); }
  .priority-low    { border-left: 3px solid var(--success); }
  .priority-badge { font-size: .7rem; padding: 2px 8px; border-radius: 10px; font-weight: 600; text-transform: capitalize; }
  .p-high   { background: rgba(244,67,54,.12);  color: #c62828; }
  .p-medium { background: rgba(255,152,0,.12);  color: #e65100; }
  .p-low    { background: rgba(76,175,80,.12);  color: #2e7d32; }
  .rec-label { font-weight: 500; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .rec-type  { color: var(--text-secondary); font-size: .8rem; }
  .rec-date  { color: var(--text-secondary); font-size: .8rem; }
  .rec-delay { font-weight: 700; color: #e53935; }

  /* ── Weekly ── */
  .weekly-stats { display: grid; grid-template-columns: repeat(5, 1fr); gap: 1rem; margin-bottom: 1rem; }
  .w-stat { text-align: center; padding: .75rem; background: var(--bg-surface-variant); border-radius: 10px; }
  .w-stat.success { background: rgba(76,175,80,.1); }
  .w-stat.warn    { background: rgba(244,67,54,.08); }
  .w-stat.primary { background: rgba(63,81,181,.08); }
  .w-num { font-size: 1.4rem; font-weight: 800; color: var(--text-main); }
  .w-lbl { font-size: .72rem; color: var(--text-secondary); margin-top: 2px; }
  .suggestion-box { display: flex; align-items: flex-start; gap: 10px; background: rgba(63,81,181,.07); border-radius: 10px; padding: .9rem 1rem; }
  .suggestion-box mat-icon { color: var(--primary); flex-shrink: 0; }
  .suggestion-box span { font-size: .875rem; color: var(--text-main); line-height: 1.5; }

  /* ── Heatmap ── */
  .heatmap { display: flex; flex-wrap: wrap; gap: 4px; }
  .hm-cell { width: 20px; height: 20px; border-radius: 4px; position: relative; cursor: default; flex-shrink: 0; }
  .hm-0 { background: var(--bg-surface-variant); }
  .hm-1 { background: rgba(76,175,80,.25); }
  .hm-2 { background: rgba(76,175,80,.5); }
  .hm-3 { background: rgba(76,175,80,.75); }
  .hm-4 { background: #4caf50; }
  .hm-today-dot { position: absolute; bottom: 2px; right: 2px; width: 5px; height: 5px; background: var(--primary); border-radius: 50%; }
  .heatmap-legend { display: flex; align-items: center; gap: 4px; margin-top: .75rem; font-size: .75rem; color: var(--text-secondary); }

  /* ── Forms dark mode ── */
  :host ::ng-deep .mat-mdc-form-field-subscript-wrapper { display: none; }
  `]
})
export class TrackerComponent {
  svc = inject(TrackerService);

  activeDate  = signal(new Date().toISOString().split('T')[0]);
  newLabel    = '';
  newType: DailyTask['type'] = 'video';

  activeLog = computed<DailyLog>(() => this.svc.getLog(this.activeDate()));
  isActiveToday = computed(() => this.activeDate() === new Date().toISOString().split('T')[0]);

  achievementScore = computed(() => {
    const log = this.activeLog();
    if (!log.tasks.length) {
      return log.plannedVideos ? Math.min(100, Math.round((log.completedVideos / log.plannedVideos) * 100)) : 0;
    }
    const done = log.tasks.filter(t => t.status === 'completed').length;
    return Math.min(100, Math.round((done / log.tasks.length) * 100));
  });

  statusOptions: { value: TaskStatus; label: string; icon: string }[] = [
    { value: 'planned',   label: 'Planned',   icon: 'radio_button_unchecked' },
    { value: 'started',   label: 'Started',   icon: 'pending' },
    { value: 'completed', label: 'Completed', icon: 'check_circle' },
    { value: 'skipped',   label: 'Skipped',   icon: 'cancel' },
  ];

  metricRows = computed(() => {
    const m = this.svc.metrics();
    return [
      { label: 'Study Streak',          value: `${m.studyStreak} days` },
      { label: 'Best Streak',           value: `${m.bestStreak} days` },
      { label: 'Days Missed',           value: `${m.daysMissed}` },
      { label: 'Recovery Days Used',    value: `${m.recoveryUsed}` },
      { label: 'Avg Daily Hours',       value: `${m.avgHours}h` },
      { label: 'Avg Videos / Day',      value: `${m.avgVideosPerDay}` },
      { label: 'Consistency Score',     value: `${m.consistencyScore}%` },
      { label: 'Recovery Efficiency',   value: `${m.recoveryEfficiency}%` },
    ];
  });

  heatmapCells = computed(() => {
    const today = new Date().toISOString().split('T')[0];
    const cells = [];
    for (let i = 29; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      const date = d.toISOString().split('T')[0];
      const log  = this.svc.logs()[date];
      const planned   = log?.plannedVideos ?? 2;
      const completed = log?.completedVideos ?? 0;
      const pct = planned ? completed / planned : 0;
      const level = !log ? 0 : pct >= 1 ? 4 : pct >= .75 ? 3 : pct >= .5 ? 2 : pct > 0 ? 1 : 0;
      cells.push({ date, planned, completed, level, isToday: date === today });
    }
    return cells;
  });

  shiftDay(delta: number) {
    const d = new Date(this.activeDate() + 'T00:00:00');
    d.setDate(d.getDate() + delta);
    const next = d.toISOString().split('T')[0];
    const today = new Date().toISOString().split('T')[0];
    if (next <= today) this.activeDate.set(next);
  }

  addTask() {
    if (!this.newLabel.trim()) return;
    const log = this.activeLog();
    const task: DailyTask = {
      id: `${Date.now()}`,
      label: this.newLabel.trim(),
      type: this.newType,
      status: 'planned'
    };
    this.svc.saveTodayLog({ ...log, tasks: [...log.tasks, task] });
    this.newLabel = '';
  }

  removeTask(id: string) {
    const log = this.activeLog();
    this.svc.saveTodayLog({ ...log, tasks: log.tasks.filter(t => t.id !== id) });
  }

  setStatus(taskId: string, status: TaskStatus) {
    if (!this.isActiveToday()) return;
    this.svc.updateTaskStatus(taskId, status);
  }

  patch(partial: Partial<DailyLog>) {
    this.svc.updateActuals(partial);
  }

  patchReflection(field: keyof DailyReflection, value: string) {
    const ref = { ...this.activeLog().reflection, [field]: value };
    this.svc.updateReflection(ref);
  }

  taskIcon(type: DailyTask['type']) {
    return { video: 'play_circle', revision: 'replay', notes: 'note_alt', practice: 'quiz' }[type];
  }

  healthIcon(h: HealthStatus) {
    return { 'on-track': 'check_circle', 'minor-delay': 'info', 'needs-recovery': 'warning', 'high-risk': 'error' }[h];
  }

  healthLabel(h: HealthStatus) {
    return { 'on-track': 'On Track', 'minor-delay': 'Minor Delay', 'needs-recovery': 'Needs Recovery', 'high-risk': 'High Risk' }[h];
  }

  delayDays(date: string) {
    return Math.max(0, Math.round((Date.now() - new Date(date + 'T00:00:00').getTime()) / 86400000));
  }

  fmtShort(d: string) {
    return new Date(d + 'T00:00:00').toLocaleDateString('en-US', { day: 'numeric', month: 'short' });
  }

  fmtFull(d: string) {
    return new Date(d + 'T00:00:00').toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  }
}
