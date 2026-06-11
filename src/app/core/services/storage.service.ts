import { Injectable, signal } from '@angular/core';
import { UserProgress } from '../models';

@Injectable({ providedIn: 'root' })
export class StorageService {
  private readonly STORAGE_KEY = 'gate_civil_progress';

  progress = signal<UserProgress>(this.loadProgress());

  loadProgress(): UserProgress {
    const data = localStorage.getItem(this.STORAGE_KEY);
    if (data) {
      const p = JSON.parse(data) as UserProgress;
      // migrate older saved data that lacks revision fields
      if (!p.revisedVideoIds) p.revisedVideoIds = [];
      if (!p.revisionLog) p.revisionLog = {};
      if (!p.completionLog) p.completionLog = {};
      return p;
    }
    return {
      completedVideoIds: [],
      videoNotes: {},
      studyDaysCompleted: 0,
      startDate: null,
      dailyStreak: 0,
      lastStudyDate: null,
      revisedVideoIds: [],
      revisionLog: {},
      completionLog: {}
    };
  }

  saveProgress(data: UserProgress) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
    this.progress.set({ ...data });
  }

  toggleVideo(videoId: string) {
    const curr = this.progress();
    const today = new Date().toISOString().split('T')[0];
    const completed = new Set(curr.completedVideoIds);
    const log = { ...curr.completionLog };
    if (completed.has(videoId)) {
      completed.delete(videoId);
      // remove from whichever day it was logged on
      for (const date of Object.keys(log)) {
        if (log[date].includes(videoId)) {
          log[date] = log[date].filter(id => id !== videoId);
          if (!log[date].length) delete log[date];
        }
      }
    } else {
      completed.add(videoId);
      log[today] = Array.from(new Set([...(log[today] ?? []), videoId]));
    }
    this.saveProgress({ ...curr, completedVideoIds: Array.from(completed), completionLog: log });
    this.updateDailyStreak();
  }

  markRevised(videoId: string) {
    const curr = this.progress();
    const today = new Date().toISOString().split('T')[0];
    const revised = new Set(curr.revisedVideoIds);
    revised.add(videoId);
    const log = { ...curr.revisionLog };
    log[today] = Array.from(new Set([...(log[today] ?? []), videoId]));
    this.saveProgress({ ...curr, revisedVideoIds: Array.from(revised), revisionLog: log });
  }

  unmarkRevised(videoId: string) {
    const curr = this.progress();
    const today = new Date().toISOString().split('T')[0];
    const revised = new Set(curr.revisedVideoIds);
    revised.delete(videoId);
    const log = { ...curr.revisionLog };
    log[today] = (log[today] ?? []).filter((id: string) => id !== videoId);
    this.saveProgress({ ...curr, revisedVideoIds: Array.from(revised), revisionLog: log });
  }

  revisedTodayCount(): number {
    const today = new Date().toISOString().split('T')[0];
    return (this.progress().revisionLog[today] ?? []).length;
  }

  updateDailyStreak() {
    const curr = this.progress();
    const today = new Date().toISOString().split('T')[0];
    if (curr.lastStudyDate !== today) {
      let streak = curr.dailyStreak;
      if (curr.lastStudyDate) {
        const last = new Date(curr.lastStudyDate);
        const now = new Date(today);
        const diff = Math.floor((now.getTime() - last.getTime()) / (1000 * 3600 * 24));
        if (diff === 1) streak++;
        else if (diff > 1) streak = 1;
      } else {
        streak = 1;
      }
      this.saveProgress({
        ...curr,
        lastStudyDate: today,
        dailyStreak: streak,
        studyDaysCompleted: curr.studyDaysCompleted + 1
      });
    }
  }

  exportData(): string {
    return JSON.stringify(this.progress(), null, 2);
  }

  importData(json: string) {
    try {
      const parsed = JSON.parse(json);
      this.saveProgress(parsed);
    } catch (e) {
      console.error('Invalid JSON');
    }
  }

  resetProgress() {
    localStorage.removeItem(this.STORAGE_KEY);
    this.progress.set(this.loadProgress());
  }
}
