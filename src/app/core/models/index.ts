export interface Subject {
  id: string;
  name: string;
  totalVideos: number;
}

export interface Video {
  id: string;
  subjectId: string;
  videoNumber: number;
  name: string;
  duration: string;
}

export interface UserProgress {
  completedVideoIds: string[];
  videoNotes: { [videoId: string]: string };
  studyDaysCompleted: number;
  startDate: string | null;
  dailyStreak: number;
  lastStudyDate: string | null;
  revisedVideoIds: string[];
  revisionLog: { [date: string]: string[] };
}

export interface RoadmapPhase {
  id: number;
  name: string;
  duration: string;
  milestones: RoadmapMilestone[];
}

export interface RoadmapMilestone {
  day: number;
  title: string;
}

export interface DayPlan {
  day: number;
  date: string;
  isWeekend: boolean;
  videosToWatch: number;
  revisionSlots: number;
  subjectFocus: string;
}

export interface RoadmapData {
  startDate: string;
  totalDays: number;
  dailyPlan: DayPlan[];
  milestones: RoadmapMilestone[];
}

// ── Daily Execution Tracker ──────────────────────────────────────────────────

export type TaskStatus = 'planned' | 'started' | 'completed' | 'skipped';
export type HealthStatus = 'on-track' | 'minor-delay' | 'needs-recovery' | 'high-risk';

export interface DailyTask {
  id: string;
  label: string;
  type: 'video' | 'revision' | 'notes' | 'practice';
  videoId?: string;
  status: TaskStatus;
}

export interface DailyReflection {
  wentWell: string;
  delays: string;
  conceptsLearned: string;
  needsRevision: string;
  remarks: string;
}

export interface DailyLog {
  date: string;                   // YYYY-MM-DD
  dayNumber: number;
  plannedVideos: number;
  completedVideos: number;
  plannedHours: number;
  actualHours: number;
  tasks: DailyTask[];
  reflection: DailyReflection;
  questionsAttempted: number;
  notesPrepared: number;
  isCatchUpDay: boolean;
}

export interface RecoveryItem {
  taskId: string;
  label: string;
  type: DailyTask['type'];
  originalDate: string;
  videoId?: string;
}

export interface TrackerStore {
  logs: { [date: string]: DailyLog };
  recoveryQueue: RecoveryItem[];
}
