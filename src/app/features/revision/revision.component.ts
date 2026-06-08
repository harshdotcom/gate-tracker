import { Component, inject, computed, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { DataService } from '../../core/services/data.service';
import { StorageService } from '../../core/services/storage.service';
import { ProgressService } from '../../core/services/progress.service';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-revision',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatButtonModule, MatCheckboxModule, MatProgressBarModule, MatChipsModule],
  template: `
    <div class="revision-container">

      <!-- Header -->
      <div class="page-header">
        <div>
          <h2 class="page-title">Revision Tracker</h2>
          <p class="page-subtitle">20% of your study time is dedicated to revision. Stay sharp!</p>
        </div>
        <div class="header-stats">
          <div class="stat-pill">
            <mat-icon>replay</mat-icon>
            <span>{{ totalRevised() }} revised</span>
          </div>
          <div class="stat-pill success">
            <mat-icon>today</mat-icon>
            <span>{{ todayRevised() }} today</span>
          </div>
          <div class="stat-pill warning">
            <mat-icon>schedule</mat-icon>
            <span>Target: {{ dailyTarget() }} today</span>
          </div>
        </div>
      </div>

      <!-- Today's target card -->
      <mat-card class="target-card" [class.on-track]="todayRevised() >= dailyTarget()">
        <mat-card-content>
          <div class="target-row">
            <div class="target-info">
              <div class="target-label">Today's Revision Target</div>
              <div class="target-numbers">
                <span class="revised-count">{{ todayRevised() }}</span>
                <span class="divider"> / </span>
                <span class="target-count">{{ dailyTarget() }}</span>
                <span class="unit"> videos</span>
              </div>
            </div>
            @if (todayRevised() >= dailyTarget()) {
              <div class="on-track-badge">
                <mat-icon>check_circle</mat-icon>
                Done for today!
              </div>
            } @else {
              <div class="remaining-badge">
                {{ dailyTarget() - todayRevised() }} more to go
              </div>
            }
          </div>
          <mat-progress-bar
            mode="determinate"
            [value]="todayProgress()"
            [color]="todayRevised() >= dailyTarget() ? 'accent' : 'primary'">
          </mat-progress-bar>
        </mat-card-content>
      </mat-card>

      <!-- Overall revision stats -->
      <div class="stats-grid">
        <mat-card class="stat-card">
          <mat-card-content>
            <mat-icon class="stat-icon primary-icon">replay</mat-icon>
            <div class="stat-value">{{ totalRevised() }}</div>
            <div class="stat-label">Total Revised</div>
          </mat-card-content>
        </mat-card>
        <mat-card class="stat-card">
          <mat-card-content>
            <mat-icon class="stat-icon success-icon">check_circle</mat-icon>
            <div class="stat-value">{{ completedAndRevised() }}</div>
            <div class="stat-label">Watched & Revised</div>
          </mat-card-content>
        </mat-card>
        <mat-card class="stat-card">
          <mat-card-content>
            <mat-icon class="stat-icon warning-icon">pending</mat-icon>
            <div class="stat-value">{{ completedNotRevised() }}</div>
            <div class="stat-label">Watched, Not Revised</div>
          </mat-card-content>
        </mat-card>
        <mat-card class="stat-card">
          <mat-card-content>
            <mat-icon class="stat-icon info-icon">percent</mat-icon>
            <div class="stat-value">{{ revisionCoveragePercent() }}%</div>
            <div class="stat-label">Revision Coverage</div>
          </mat-card-content>
        </mat-card>
      </div>

      <!-- Today's suggested videos -->
      <div class="section-header">
        <div class="section-title">
          <mat-icon>lightbulb</mat-icon>
          <h3>Suggested for Revision Today</h3>
        </div>
        <button mat-stroked-button (click)="refreshSuggestions()">
          <mat-icon>refresh</mat-icon> Refresh
        </button>
      </div>

      @if (suggestions().length === 0) {
        <mat-card class="empty-card">
          <mat-card-content>
            <mat-icon>school</mat-icon>
            <p>Watch some videos first — your revision suggestions will appear here once you've completed videos.</p>
          </mat-card-content>
        </mat-card>
      } @else {
        <div class="suggestions-list">
          @for (video of suggestions(); track video.id) {
            <mat-card class="suggestion-card" [class.revised]="isRevised(video.id)">
              <mat-card-content>
                <div class="suggestion-row">
                  <mat-checkbox
                    color="primary"
                    [checked]="isRevised(video.id)"
                    (change)="toggleRevision(video.id)">
                  </mat-checkbox>
                  <div class="suggestion-info">
                    <div class="suggestion-title" [class.revised-text]="isRevised(video.id)">
                      {{ video.name }}
                    </div>
                    <div class="suggestion-meta">
                      <span class="subject-chip">{{ getSubjectName(video.subjectId) }}</span>
                      <span class="duration-chip">
                        <mat-icon>schedule</mat-icon>{{ video.duration }}
                      </span>
                    </div>
                  </div>
                  @if (isRevised(video.id)) {
                    <mat-icon class="revised-icon">check_circle</mat-icon>
                  }
                </div>
              </mat-card-content>
            </mat-card>
          }
        </div>
      }

      <!-- Subject-wise revision breakdown -->
      <div class="section-title mt">
        <mat-icon>bar_chart</mat-icon>
        <h3>Subject-wise Revision</h3>
      </div>
      <mat-card class="breakdown-card">
        <mat-card-content>
          @for (sub of subjectRevision(); track sub.id) {
            <div class="breakdown-row">
              <div class="breakdown-name">{{ sub.name }}</div>
              <div class="breakdown-bar-wrap">
                <div class="breakdown-bar">
                  <div class="bar-fill" [style.width.%]="sub.revisionPercent"></div>
                </div>
              </div>
              <div class="breakdown-numbers">{{ sub.revised }}/{{ sub.completed }}</div>
              <div class="breakdown-pct">{{ sub.revisionPercent }}%</div>
            </div>
          }
        </mat-card-content>
      </mat-card>

      <!-- Revision history -->
      @if (revisionDates().length > 0) {
        <div class="section-title mt">
          <mat-icon>history</mat-icon>
          <h3>Revision History</h3>
        </div>
        <mat-card class="history-card">
          <mat-card-content>
            @for (entry of revisionDates(); track entry.date) {
              <div class="history-row">
                <div class="history-date">
                  <mat-icon>calendar_today</mat-icon>
                  {{ formatDate(entry.date) }}
                </div>
                <div class="history-count">{{ entry.count }} video{{ entry.count !== 1 ? 's' : '' }} revised</div>
              </div>
            }
          </mat-card-content>
        </mat-card>
      }

    </div>
  `,
  styles: [`
    .revision-container { display: flex; flex-direction: column; gap: 1.5rem; padding-bottom: 2rem; }

    /* Header */
    .page-header { display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 1rem; }
    .page-title { margin: 0; font-size: 1.75rem; font-weight: 700; color: var(--text-main); }
    .page-subtitle { margin: 0.25rem 0 0; color: var(--text-secondary); font-size: 0.9rem; }
    .header-stats { display: flex; gap: 0.75rem; flex-wrap: wrap; }
    .stat-pill { display: flex; align-items: center; gap: 6px; background: rgba(63,81,181,0.1); color: var(--primary); padding: 6px 14px; border-radius: 20px; font-size: 0.875rem; font-weight: 500; }
    .stat-pill mat-icon { font-size: 1rem; width: 1rem; height: 1rem; }
    .stat-pill.success { background: rgba(76,175,80,0.1); color: var(--success); }
    .stat-pill.warning { background: rgba(255,152,0,0.1); color: var(--warning); }

    /* Target card */
    .target-card { border-radius: 12px; border-left: 4px solid var(--primary) !important; }
    .target-card.on-track { border-left-color: var(--success) !important; }
    .target-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; flex-wrap: wrap; gap: 1rem; }
    .target-label { font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 4px; }
    .target-numbers { display: flex; align-items: baseline; gap: 2px; }
    .revised-count { font-size: 2rem; font-weight: 800; color: var(--primary); }
    .divider { font-size: 1.5rem; color: var(--text-secondary); }
    .target-count { font-size: 1.5rem; font-weight: 600; color: var(--text-secondary); }
    .unit { font-size: 0.9rem; color: var(--text-secondary); margin-left: 4px; }
    .on-track-badge { display: flex; align-items: center; gap: 6px; background: rgba(76,175,80,0.1); color: var(--success); padding: 8px 16px; border-radius: 20px; font-weight: 600; }
    .on-track-badge mat-icon { font-size: 1.1rem; width: 1.1rem; height: 1.1rem; }
    .remaining-badge { background: rgba(255,152,0,0.1); color: var(--warning); padding: 8px 16px; border-radius: 20px; font-weight: 600; font-size: 0.875rem; }

    /* Stats grid */
    .stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 1rem; }
    .stat-card { border-radius: 12px; text-align: center; }
    .stat-card mat-card-content { padding: 1.25rem !important; }
    .stat-icon { font-size: 2rem; width: 2rem; height: 2rem; margin-bottom: 0.5rem; }
    .primary-icon { color: var(--primary) !important; }
    .success-icon { color: var(--success) !important; }
    .warning-icon { color: var(--warning) !important; }
    .info-icon { color: #06b6d4 !important; }
    .stat-value { font-size: 1.75rem; font-weight: 800; color: var(--text-main); }
    .stat-label { font-size: 0.8rem; color: var(--text-secondary); margin-top: 2px; }

    /* Section headers */
    .section-header { display: flex; justify-content: space-between; align-items: center; }
    .section-title { display: flex; align-items: center; gap: 8px; }
    .section-title.mt { margin-top: 0.5rem; }
    .section-title mat-icon { color: var(--primary); }
    .section-title h3 { margin: 0; font-size: 1.1rem; font-weight: 600; color: var(--text-main); }

    /* Empty state */
    .empty-card { border-radius: 12px; text-align: center; }
    .empty-card mat-card-content { padding: 2rem !important; }
    .empty-card mat-icon { font-size: 3rem; width: 3rem; height: 3rem; color: var(--text-tertiary); }
    .empty-card p { color: var(--text-secondary); margin-top: 0.5rem; }

    /* Suggestions */
    .suggestions-list { display: flex; flex-direction: column; gap: 0.75rem; }
    .suggestion-card { border-radius: 10px; transition: all 0.2s; }
    .suggestion-card.revised { opacity: 0.7; border-left: 3px solid var(--success) !important; }
    .suggestion-card mat-card-content { padding: 0.875rem 1rem !important; }
    .suggestion-row { display: flex; align-items: center; gap: 1rem; }
    .suggestion-info { flex: 1; min-width: 0; }
    .suggestion-title { font-weight: 500; color: var(--text-main); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .revised-text { text-decoration: line-through; color: var(--text-secondary); }
    .suggestion-meta { display: flex; align-items: center; gap: 0.75rem; margin-top: 4px; }
    .subject-chip { background: rgba(63,81,181,0.1); color: var(--primary); font-size: 0.72rem; padding: 2px 8px; border-radius: 10px; font-weight: 500; }
    .duration-chip { display: flex; align-items: center; gap: 3px; font-size: 0.75rem; color: var(--text-secondary); }
    .duration-chip mat-icon { font-size: 0.85rem; width: 0.85rem; height: 0.85rem; }
    .revised-icon { color: var(--success) !important; margin-left: auto; }

    /* Breakdown */
    .breakdown-card { border-radius: 12px; }
    .breakdown-card mat-card-content { padding: 1rem !important; }
    .breakdown-row { display: grid; grid-template-columns: 200px 1fr 60px 48px; gap: 1rem; align-items: center; padding: 0.5rem 0; border-bottom: 1px solid var(--border-color); }
    .breakdown-row:last-child { border-bottom: none; }
    @media (max-width: 600px) {
      .breakdown-row { grid-template-columns: 1fr 60px 48px; grid-template-rows: auto auto; }
      .breakdown-name { grid-column: 1 / -1; font-size: 0.8rem; }
    }
    .breakdown-name { font-weight: 500; font-size: 0.875rem; color: var(--text-main); }
    .breakdown-bar-wrap { width: 100%; }
    .breakdown-bar { height: 8px; background: var(--bg-surface-variant); border-radius: 4px; overflow: hidden; }
    .bar-fill { height: 100%; background: var(--success); border-radius: 4px; transition: width 0.4s ease; }
    .breakdown-numbers { font-size: 0.8rem; color: var(--text-secondary); text-align: center; }
    .breakdown-pct { font-weight: 700; font-size: 0.875rem; color: var(--success); text-align: right; }

    /* History */
    .history-card { border-radius: 12px; }
    .history-card mat-card-content { padding: 0.5rem 1rem !important; }
    .history-row { display: flex; justify-content: space-between; align-items: center; padding: 0.6rem 0; border-bottom: 1px solid var(--border-color); }
    .history-row:last-child { border-bottom: none; }
    .history-date { display: flex; align-items: center; gap: 6px; font-size: 0.875rem; color: var(--text-main); }
    .history-date mat-icon { font-size: 1rem; width: 1rem; height: 1rem; color: var(--text-secondary); }
    .history-count { font-size: 0.875rem; font-weight: 600; color: var(--primary); }
  `]
})
export class RevisionComponent {
  private dataService = inject(DataService);
  private storage = inject(StorageService);
  private progressService = inject(ProgressService);

  private subjects = toSignal(this.dataService.getSubjects(), { initialValue: [] });
  private videos = this.progressService.videos;
  private refreshTick = signal(0);

  today = new Date().toISOString().split('T')[0];

  // ── Core computed ──

  completedIds = computed(() => new Set(this.storage.progress().completedVideoIds));
  revisedIds   = computed(() => new Set(this.storage.progress().revisedVideoIds));

  completedVideos = computed(() =>
    this.videos().filter(v => this.completedIds().has(v.id))
  );

  totalRevised = computed(() => this.revisedIds().size);

  todayRevised = computed(() =>
    (this.storage.progress().revisionLog[this.today] ?? []).length
  );

  dailyTarget = computed(() => {
    const dow = new Date(this.today + 'T00:00:00').getDay();
    return (dow === 0 || dow === 6) ? 10 : 2;
  });

  todayProgress = computed(() =>
    Math.min(100, Math.round((this.todayRevised() / this.dailyTarget()) * 100))
  );

  completedAndRevised  = computed(() =>
    this.completedVideos().filter(v => this.revisedIds().has(v.id)).length
  );

  completedNotRevised = computed(() =>
    this.completedVideos().filter(v => !this.revisedIds().has(v.id)).length
  );

  revisionCoveragePercent = computed(() => {
    const done = this.completedVideos().length;
    return done === 0 ? 0 : Math.round((this.completedAndRevised() / done) * 100);
  });

  // ── Suggestions: pick videos completed but not yet revised today ──

  suggestions = computed(() => {
    void this.refreshTick(); // reactive dependency for refresh button
    const pool = this.completedVideos().filter(v => !this.revisedIds().has(v.id));
    if (pool.length === 0) return this.completedVideos().slice(0, this.dailyTarget());
    // rotate by day-of-year so suggestions change daily
    const doy = Math.floor((Date.now() - new Date(this.today.slice(0, 4) + '-01-01').getTime()) / 86400000);
    const offset = (doy * 7 + this.refreshTick()) % Math.max(1, pool.length);
    const rotated = [...pool.slice(offset), ...pool.slice(0, offset)];
    return rotated.slice(0, Math.max(this.dailyTarget(), 3));
  });

  // ── Subject breakdown ──

  subjectRevision = computed(() =>
    this.subjects().map(sub => {
      const completed = this.videos().filter(v => v.subjectId === sub.id && this.completedIds().has(v.id));
      const revised   = completed.filter(v => this.revisedIds().has(v.id));
      const pct = completed.length ? Math.round((revised.length / completed.length) * 100) : 0;
      return { ...sub, completed: completed.length, revised: revised.length, revisionPercent: pct };
    })
  );

  // ── Revision history ──

  revisionDates = computed(() => {
    const log = this.storage.progress().revisionLog;
    return Object.entries(log)
      .map(([date, ids]) => ({ date, count: (ids as string[]).length }))
      .filter(e => e.count > 0)
      .sort((a, b) => b.date.localeCompare(a.date))
      .slice(0, 14);
  });

  // ── Actions ──

  isRevised(id: string) { return this.revisedIds().has(id); }

  toggleRevision(id: string) {
    if (this.isRevised(id)) this.storage.unmarkRevised(id);
    else this.storage.markRevised(id);
  }

  refreshSuggestions() { this.refreshTick.update(n => n + 1); }

  getSubjectName(subjectId: string) {
    return this.subjects().find(s => s.id === subjectId)?.name ?? subjectId;
  }

  formatDate(date: string) {
    return new Date(date + 'T00:00:00').toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' });
  }
}
