import { Component, inject, signal, computed, OnInit, HostListener } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DataService } from '../core/services/data.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterModule, MatSidenavModule, MatToolbarModule, MatListModule, MatIconModule, MatButtonModule],
  template: `
    <mat-sidenav-container class="sidenav-container">
      <mat-sidenav #sidenav [mode]="isMobile() ? 'over' : 'side'"
                   [opened]="!isMobile()"
                   class="sidenav">
        <div class="logo-container">
          <mat-icon>school</mat-icon>
          <span>GATE Tracker</span>
        </div>
        <mat-nav-list>
          <a mat-list-item routerLink="/dashboard" routerLinkActive="active-link" (click)="isMobile() && sidenav.close()">
            <mat-icon matListItemIcon>dashboard</mat-icon>
            <span matListItemTitle>Dashboard</span>
          </a>
          <a mat-list-item routerLink="/subjects" routerLinkActive="active-link" (click)="isMobile() && sidenav.close()">
            <mat-icon matListItemIcon>menu_book</mat-icon>
            <span matListItemTitle>Subjects</span>
          </a>
          <a mat-list-item routerLink="/tracker" routerLinkActive="active-link" (click)="isMobile() && sidenav.close()">
            <mat-icon matListItemIcon>track_changes</mat-icon>
            <span matListItemTitle>Daily Tracker</span>
          </a>
          <a mat-list-item routerLink="/roadmap" routerLinkActive="active-link" (click)="isMobile() && sidenav.close()">
            <mat-icon matListItemIcon>map</mat-icon>
            <span matListItemTitle>Roadmap</span>
          </a>
          <a mat-list-item routerLink="/revision" routerLinkActive="active-link" (click)="isMobile() && sidenav.close()">
            <mat-icon matListItemIcon>replay</mat-icon>
            <span matListItemTitle>Revision</span>
          </a>
          <a mat-list-item routerLink="/analytics" routerLinkActive="active-link" (click)="isMobile() && sidenav.close()">
            <mat-icon matListItemIcon>bar_chart</mat-icon>
            <span matListItemTitle>Analytics</span>
          </a>
          <a mat-list-item routerLink="/settings" routerLinkActive="active-link" (click)="isMobile() && sidenav.close()">
            <mat-icon matListItemIcon>settings</mat-icon>
            <span matListItemTitle>Settings</span>
          </a>
        </mat-nav-list>
      </mat-sidenav>

      <mat-sidenav-content>
        <mat-toolbar class="top-toolbar">
          <button mat-icon-button (click)="sidenav.toggle()">
            <mat-icon>menu</mat-icon>
          </button>

          @if (dailyQuote() && !isMobile()) {
            <div class="quote-container">
              <mat-icon>format_quote</mat-icon>
              <span class="quote-text">{{ dailyQuote() }}</span>
            </div>
          }

          <span class="spacer"></span>

          <button mat-icon-button (click)="toggleDarkMode()" aria-label="Toggle Dark Mode">
            <mat-icon>{{ isDarkMode() ? 'light_mode' : 'dark_mode' }}</mat-icon>
          </button>
        </mat-toolbar>

        <div class="main-content">
          <router-outlet></router-outlet>
        </div>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styles: [`
    .sidenav-container { position: absolute; top: 0; bottom: 0; left: 0; right: 0; }
    .sidenav { width: 250px; border-right: 1px solid var(--border-color); background: var(--bg-surface); }
    .logo-container { padding: 20px; display: flex; align-items: center; gap: 10px; font-size: 1.25rem; font-weight: 700; color: var(--primary); }
    .active-link { background: rgba(63, 81, 181, 0.15) !important; }
    .active-link mat-icon { color: var(--primary) !important; }
    .top-toolbar { background: var(--bg-surface) !important; color: var(--text-main) !important; border-bottom: 1px solid var(--border-color); box-shadow: none; display: flex; align-items: center; }
    .spacer { flex: 1 1 auto; }
    .main-content { padding: 16px; max-width: 1200px; margin: 0 auto; }
    @media (min-width: 600px) { .main-content { padding: 24px; } }
    .quote-container { display: flex; align-items: center; gap: 8px; font-style: italic; color: var(--text-secondary); margin-left: 20px; font-size: 0.875rem; overflow: hidden; }
    .quote-text { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 400px; }
    .quote-container mat-icon { font-size: 1.1rem; height: 1.1rem; width: 1.1rem; color: var(--primary); flex-shrink: 0; }
  `]
})
export class LayoutComponent implements OnInit {
  private dataService = inject(DataService);

  isDarkMode = signal(localStorage.getItem('theme') === 'dark');
  isMobile = signal(window.innerWidth < 768);

  private quotes = toSignal(this.dataService.getQuotes(), { initialValue: [] as string[] });

  dailyQuote = computed(() => {
    const q = this.quotes();
    if (!q.length) return '';
    return q[new Date().getDay() % q.length];
  });

  @HostListener('window:resize')
  onResize() {
    this.isMobile.set(window.innerWidth < 768);
  }

  ngOnInit() {
    this.applyTheme(this.isDarkMode());
  }

  toggleDarkMode() {
    const next = !this.isDarkMode();
    this.isDarkMode.set(next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
    this.applyTheme(next);
  }

  private applyTheme(dark: boolean) {
    document.body.classList.toggle('dark-mode', dark);
  }
}
