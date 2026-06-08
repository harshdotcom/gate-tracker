import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-metric-card',
  standalone: true,
  imports: [MatCardModule, MatIconModule],
  template: `
    <mat-card class="metric-card">
      <mat-card-content>
        <div class="icon-wrapper" [class]="colorClass">
          <mat-icon>{{ icon }}</mat-icon>
        </div>
        <div class="content">
          <div class="title">{{ title }}</div>
          <div class="value">{{ value }}</div>
          @if (subtitle) {
            <div class="subtitle">{{ subtitle }}</div>
          }
        </div>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`
    .metric-card { height: 100%; border-radius: 12px; }
    mat-card-content { display: flex; align-items: center; gap: 1rem; padding: 1.5rem !important; }
    .icon-wrapper { width: 48px; height: 48px; border-radius: 50%; display: flex; align-items: center; justify-content: center; }
    .icon-wrapper.primary { background: rgba(63, 81, 181, 0.1); color: #3f51b5; }
    .icon-wrapper.success { background: rgba(76, 175, 80, 0.1); color: #4caf50; }
    .icon-wrapper.warning { background: rgba(255, 152, 0, 0.1); color: #ff9800; }
    .title { font-size: 0.875rem; color: var(--text-secondary, #666); }
    .value { font-size: 1.5rem; font-weight: bold; margin-top: 0.25rem; }
    .subtitle { font-size: 0.75rem; color: var(--text-tertiary, #999); margin-top: 0.25rem; }
  `]
})
export class MetricCardComponent {
  @Input() title = '';
  @Input() value: string | number = '';
  @Input() subtitle = '';
  @Input() icon = 'trending_up';
  @Input() colorClass: 'primary' | 'success' | 'warning' = 'primary';
}
