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
  completionLog: { [date: string]: string[] };
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

// ── Weekly Threshold System ──────────────────────────────────────────────────

export interface WeeklySubjectAlloc {
  subjectId: string;
  name: string;
  videos: number;
}

export interface WeekPlan {
  week: number;
  phase: 1 | 2;
  startDate: string;              // Monday (or plan start for week 1)
  endDate: string;                // Sunday — weekly deadline
  days: number;
  videoTarget: number;            // planned target
  videoMin: number;               // minimum threshold — must hit by Sunday
  hoursTarget: number;
  hoursMin: number;
  questionsTarget: number;
  questionsMin: number;
  revisionTarget: number;
  revisionMin: number;
  subjects: WeeklySubjectAlloc[];
  milestone?: string;
}

export interface WeeklyPlanData {
  startDate: string;
  examLabel: string;
  totalVideos: number;
  phase1Weeks: number;
  totalWeeks: number;
  phase1EndDate: string;
  weeks: WeekPlan[];
}

export type WeekResult = 'achieved' | 'threshold-met' | 'missed' | 'in-progress' | 'upcoming';

export interface MetricProgress {
  done: number;
  target: number;
  min: number;
  pctOfTarget: number;            // capped at 100
  pctOfMin: number;               // capped at 100
  minMet: boolean;
  targetMet: boolean;
}

export interface WeekProgress {
  plan: WeekPlan;
  result: WeekResult;
  videos: MetricProgress;
  hours: MetricProgress;
  questions: MetricProgress;
  revision: MetricProgress;
  score: number;                  // weighted % of weekly target achieved
}
