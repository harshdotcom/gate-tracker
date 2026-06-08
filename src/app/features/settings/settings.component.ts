import { Component, inject } from '@angular/core';
import { StorageService } from '../../core/services/storage.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [MatButtonModule, MatCardModule],
  template: `
    <div class="settings-container">
      <h2>Settings</h2>
      
      <mat-card class="settings-card">
        <mat-card-header>
          <mat-card-title>Data Management</mat-card-title>
        </mat-card-header>
        <mat-card-content class="pt-4">
          <p class="text-secondary mb-4">Export your progress to a file, or import it back to restore your state across devices.</p>
          
          <div class="actions">
            <button mat-raised-button color="primary" (click)="exportData()">Export Progress</button>
            <button mat-raised-button (click)="fileInput.click()">Import Progress</button>
            <input #fileInput type="file" hidden (change)="importData($event)" accept=".json">
            <span class="spacer"></span>
            <button mat-raised-button color="warn" (click)="resetProgress()">Reset Progress</button>
          </div>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    .settings-container { padding: 1rem 0; }
    .settings-card { padding: 1rem; border-radius: 12px; }
    .pt-4 { padding-top: 1rem; }
    .mb-4 { margin-bottom: 1.5rem; }
    .text-secondary { color: var(--text-secondary); }
    .actions { display: flex; gap: 1rem; align-items: center; }
    .spacer { flex: 1; }
  `]
})
export class SettingsComponent {
  storage = inject(StorageService);

  exportData() {
    const dataStr = this.storage.exportData();
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    const exportFileDefaultName = 'gate-civil-progress.json';
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  }

  importData(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.storage.importData(e.target.result);
        alert('Progress imported successfully!');
      };
      reader.readAsText(file);
    }
  }

  resetProgress() {
    if (confirm('Are you sure you want to reset all your progress? This action cannot be undone.')) {
      this.storage.resetProgress();
    }
  }
}
