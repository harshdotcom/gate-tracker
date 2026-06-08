import { Component, inject } from '@angular/core';
import { ProgressService } from '../../core/services/progress.service';
import { StorageService } from '../../core/services/storage.service';
import { MetricCardComponent } from '../../shared/components/metric-card/metric-card.component';
import { ProgressBarComponent } from '../../shared/components/progress-bar/progress-bar.component';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MetricCardComponent, ProgressBarComponent, MatCardModule],
  template: `
    <div class="dashboard-container">
      <div class="metrics-grid">
        <app-metric-card title="Total Days" value="200" icon="event" colorClass="primary"></app-metric-card>
        <app-metric-card title="Days Completed" [value]="storage.progress().studyDaysCompleted" icon="event_available" colorClass="success"></app-metric-card>
        <app-metric-card title="Days Remaining" [value]="200 - storage.progress().studyDaysCompleted" icon="event_busy" colorClass="warning"></app-metric-card>
        <app-metric-card title="Syllabus Completion" [value]="progress.overallCompletionPercent() + '%'" icon="school" colorClass="primary"></app-metric-card>
      </div>

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
    .subject-bars { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; }
  `]
})
export class DashboardComponent {
  progress = inject(ProgressService);
  storage = inject(StorageService);
}
