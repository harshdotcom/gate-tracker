import { Component, inject, computed } from '@angular/core';
import { ProgressService } from '../../core/services/progress.service';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [BaseChartDirective, MatCardModule],
  template: `
    <div class="analytics-container">
      <h2>Performance Analytics</h2>
      
      <div class="charts-grid">
        <mat-card class="chart-card">
          <mat-card-header>
            <mat-card-title>Subject Mastery (Radar)</mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <canvas baseChart
              [data]="radarChartData()"
              [options]="radarChartOptions"
              [type]="radarChartType">
            </canvas>
          </mat-card-content>
        </mat-card>

        <mat-card class="chart-card">
          <mat-card-header>
            <mat-card-title>Subject Completion (%)</mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <canvas baseChart
              [data]="barChartData()"
              [options]="barChartOptions"
              [type]="barChartType">
            </canvas>
          </mat-card-content>
        </mat-card>
      </div>
    </div>
  `,
  styles: [`
    .analytics-container { padding: 1rem 0; }
    .charts-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 400px), 1fr)); gap: 2rem; }
    .chart-card { padding: 1rem; border-radius: 12px; }
  `]
})
export class AnalyticsComponent {
  progress = inject(ProgressService);

  // Radar Chart
  public radarChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  };
  public radarChartType: ChartType = 'radar';
  
  radarChartData = computed<ChartData<'radar'>>(() => {
    const subjects = this.progress.subjectProgress();
    return {
      labels: subjects.map(s => s.name),
      datasets: [
        { data: subjects.map(s => s.percent), label: 'Completion %', fill: true, backgroundColor: 'rgba(63, 81, 181, 0.2)', borderColor: '#3f51b5' }
      ]
    };
  });

  // Bar Chart
  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    scales: { x: {}, y: { min: 0, max: 100 } },
    plugins: { legend: { display: false } }
  };
  public barChartType: ChartType = 'bar';
  
  barChartData = computed<ChartData<'bar'>>(() => {
    const subjects = this.progress.subjectProgress();
    return {
      labels: subjects.map(s => s.name),
      datasets: [
        { data: subjects.map(s => s.percent), label: 'Completion %', backgroundColor: '#4caf50' }
      ]
    };
  });
}
