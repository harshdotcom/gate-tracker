import { Injectable, inject, computed } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { DataService } from './data.service';
import { StorageService } from './storage.service';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProgressService {
  private dataService = inject(DataService);
  private storageService = inject(StorageService);

  subjects = toSignal(this.dataService.getSubjects(), { initialValue: [] });
  videos = toSignal(this.dataService.getVideos(), { initialValue: [] });

  totalVideos = computed(() => this.videos().length);
  completedVideosCount = computed(() => this.storageService.progress().completedVideoIds.length);

  overallCompletionPercent = computed(() => {
    const total = this.totalVideos();
    if (total === 0) return 0;
    return Math.round((this.completedVideosCount() / total) * 100);
  });

  subjectProgress = computed(() => {
    const subs = this.subjects();
    const vids = this.videos();
    const completedSet = new Set(this.storageService.progress().completedVideoIds);

    return subs.map(sub => {
      const subVideos = vids.filter(v => v.subjectId === sub.id);
      const completedCount = subVideos.filter(v => completedSet.has(v.id)).length;
      return {
        ...sub,
        completedVideos: completedCount,
        percent: subVideos.length ? Math.round((completedCount / subVideos.length) * 100) : 0
      };
    });
  });
}
