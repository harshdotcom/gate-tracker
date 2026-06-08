import { Component, inject, computed } from '@angular/core';
import { ProgressService } from '../../core/services/progress.service';
import { StorageService } from '../../core/services/storage.service';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ProgressBarComponent } from '../../shared/components/progress-bar/progress-bar.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-subjects',
  standalone: true,
  imports: [MatExpansionModule, MatCheckboxModule, ProgressBarComponent, MatIconModule],
  template: `
    <div class="subjects-container">
      <h2>Subject Modules</h2>

      <mat-accordion class="headers-align">
        @for (sub of progress.subjectProgress(); track sub.id) {
          <mat-expansion-panel [expanded]="false">
            <mat-expansion-panel-header>
              <mat-panel-title>{{ sub.name }}</mat-panel-title>
              <mat-panel-description>
                <div class="panel-desc">
                  <span>{{ sub.completedVideos }} / {{ sub.totalVideos }} Videos</span>
                  <app-progress-bar [percent]="sub.percent" [colorClass]="sub.percent === 100 ? 'success' : 'primary'"></app-progress-bar>
                </div>
              </mat-panel-description>
            </mat-expansion-panel-header>

            <div class="videos-list">
              @for (video of getVideosForSubject(sub.id); track video.id) {
                <div class="video-item">
                  <mat-checkbox
                    [checked]="isVideoCompleted(video.id)"
                    (change)="toggleVideo(video.id)"
                    color="primary">
                    <span [class.completed]="isVideoCompleted(video.id)">
                      Video {{ video.videoNumber }}: {{ video.name }}
                    </span>
                    <span class="duration">({{ video.duration }})</span>
                  </mat-checkbox>
                </div>
              }
            </div>
          </mat-expansion-panel>
        }
      </mat-accordion>
    </div>
  `,
  styles: [`
    .subjects-container { display: flex; flex-direction: column; gap: 1rem; }
    .panel-desc { display: flex; align-items: center; justify-content: flex-end; width: 100%; gap: 1.5rem; }
    .panel-desc app-progress-bar { width: 150px; margin-bottom: 0; }
    .headers-align mat-expansion-panel-header { padding: 0 24px; }
    mat-panel-title { flex-basis: 30%; }
    mat-panel-description { flex-basis: 70%; justify-content: space-between; align-items: center; }
    .videos-list { display: flex; flex-direction: column; gap: 0.5rem; margin-top: 1rem; }
    .video-item { padding: 0.5rem 0; border-bottom: 1px solid var(--border-color); }
    .video-item:last-child { border-bottom: none; }
    .completed { text-decoration: line-through; color: var(--text-tertiary); }
    .duration { margin-left: 0.5rem; font-size: 0.8rem; color: var(--text-tertiary); }
  `]
})
export class SubjectsComponent {
  progress = inject(ProgressService);
  storage = inject(StorageService);

  completedSet = computed(() => new Set(this.storage.progress().completedVideoIds));

  getVideosForSubject(subjectId: string) {
    return this.progress.videos().filter(v => v.subjectId === subjectId);
  }

  isVideoCompleted(videoId: string) {
    return this.completedSet().has(videoId);
  }

  toggleVideo(videoId: string) {
    this.storage.toggleVideo(videoId);
  }
}
