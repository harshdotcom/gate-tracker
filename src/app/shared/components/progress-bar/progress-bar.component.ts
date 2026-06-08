import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [],
  template: `
    <div class="progress-wrapper">
      @if (label) {
        <div class="progress-header">
          <span class="label">{{ label }}</span>
          <span class="value">{{ percent }}%</span>
        </div>
      }
      <div class="progress-track">
        <div class="progress-fill" [style.width.%]="percent" [class]="colorClass"></div>
      </div>
    </div>
  `,
  styles: [`
    .progress-wrapper { width: 100%; margin-bottom: 1rem; }
    .progress-header { display: flex; justify-content: space-between; font-size: 0.875rem; margin-bottom: 0.5rem; font-weight: 500; }
    .progress-track { height: 8px; background: var(--bg-surface-variant, #e0e0e0); border-radius: 4px; overflow: hidden; }
    .progress-fill { height: 100%; transition: width 0.3s ease; border-radius: 4px; }
    .primary { background: var(--primary, #3f51b5); }
    .success { background: var(--success, #4caf50); }
    .warning { background: var(--warning, #ff9800); }
  `]
})
export class ProgressBarComponent {
  @Input() percent = 0;
  @Input() label = '';
  @Input() colorClass: 'primary' | 'success' | 'warning' = 'primary';
}
