import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadComponent: () => import('./features/dashboard/dashboard.component').then(m => m.DashboardComponent) },
      { path: 'subjects', loadComponent: () => import('./features/subjects/subjects.component').then(m => m.SubjectsComponent) },
      { path: 'tracker', loadComponent: () => import('./features/tracker/tracker.component').then(m => m.TrackerComponent) },
      { path: 'roadmap', loadComponent: () => import('./features/roadmap/roadmap.component').then(m => m.RoadmapComponent) },
      { path: 'analytics', loadComponent: () => import('./features/analytics/analytics.component').then(m => m.AnalyticsComponent) },
      { path: 'revision', loadComponent: () => import('./features/revision/revision.component').then(m => m.RevisionComponent) },
      { path: 'settings', loadComponent: () => import('./features/settings/settings.component').then(m => m.SettingsComponent) }
    ]
  }
];
