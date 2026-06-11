/**
 * Generates the weekly-threshold study plan.
 *
 * Hard constraints:
 *   - MAX 2 new lecture videos per day (non-negotiable)
 *   - Sunday = flex day (0 new lectures; recovery, revision, weekly review)
 *   - Mon–Sat: up to 2 lectures + revision/practice tasks
 *
 * Subject order: Soil first (already in progress), then by GATE weightage.
 * Steel Structures is last — it may not be fully covered before the exam.
 *
 * Output files:
 *   src/assets/data/weekly-plan.json
 *   src/assets/data/roadmap.json
 *
 * Run: node generate-plan.js
 */

const fs   = require('fs');
const path = require('path');

const START       = '2026-06-11';   // Thursday (today, day 1)
const EXAM_CUTOFF = '2027-01-25';   // Last week before exam; leave buffer
const DATA_DIR    = path.join(__dirname, 'src', 'assets', 'data');

// ── Subject order ─────────────────────────────────────────────────────────────
// Soil first (started), then by GATE Civil marks weightage.
// Steel Structures is last — will be partial/skipped if time runs out.
const SUBJECTS = [
  { id: 'solid-mechanics',            name: 'Soil Mechanics',            totalVideos: 46, gateMarks: 9  },
  { id: 'fluid-mechanics',            name: 'Fluid Mechanics',           totalVideos: 40, gateMarks: 10 },
  { id: 'structural-analysis',        name: 'Structural Analysis',       totalVideos: 50, gateMarks: 13 },
  { id: 'strength-of-materials',      name: 'Strength of Materials',     totalVideos: 45, gateMarks: 11 },
  { id: 'rcc',                        name: 'RCC',                       totalVideos: 40, gateMarks: 9  },
  { id: 'engineering-mathematics',    name: 'Engineering Mathematics',   totalVideos: 30, gateMarks: 13 },
  { id: 'general-aptitude',           name: 'General Aptitude',          totalVideos: 25, gateMarks: 15 },
  { id: 'geotechnical-engineering',   name: 'Geotechnical Engineering',  totalVideos: 45, gateMarks: 8  },
  { id: 'environmental-engineering',  name: 'Environmental Engineering', totalVideos: 35, gateMarks: 6  },
  { id: 'transportation-engineering', name: 'Transportation Engineering',totalVideos: 35, gateMarks: 6  },
  { id: 'steel-structures',           name: 'Steel Structures',          totalVideos: 35, gateMarks: 5  },
];
const TOTAL_VIDEOS = SUBJECTS.reduce((s, x) => s + x.totalVideos, 0); // 426

// ── date helpers ──────────────────────────────────────────────────────────────
function addDays(iso, n) {
  const d = new Date(iso + 'T00:00:00');
  d.setDate(d.getDate() + n);
  return d.toISOString().split('T')[0];
}
function dowOf(iso) { return new Date(iso + 'T00:00:00').getDay(); }   // 0=Sun

// Sunday that ends the week containing 'iso'
function weekEnd(iso) {
  const dow = dowOf(iso);
  const daysToSun = (7 - dow) % 7 || 7;   // 0→7, 1→6, …, 6→1
  return addDays(iso, daysToSun);
}

// ── build weeks ───────────────────────────────────────────────────────────────
const weeks      = [];
let weekStart    = START;
let subjectIdx   = 0;
let subjectUsed  = 0;
let totalDone    = 0;

while (weekStart <= EXAM_CUTOFF && subjectIdx < SUBJECTS.length) {
  const we = weekEnd(weekStart);

  // Count available lecture slots Mon-Sat (max 2/day; Sunday = 0)
  let slots = 0;
  let cur = weekStart;
  while (cur <= we) {
    if (dowOf(cur) !== 0) slots += 2;   // not Sunday → +2
    cur = addDays(cur, 1);
  }

  // Allocate subjects to fill slots (hard cap 2/day flows naturally from slot count)
  const alloc = [];
  let remaining = slots;
  while (remaining > 0 && subjectIdx < SUBJECTS.length) {
    const sub = SUBJECTS[subjectIdx];
    const available = sub.totalVideos - subjectUsed;
    const take = Math.min(available, remaining);
    alloc.push({ subjectId: sub.id, name: sub.name, videos: take });
    totalDone    += take;
    subjectUsed  += take;
    remaining    -= take;
    if (subjectUsed === sub.totalVideos) { subjectIdx++; subjectUsed = 0; }
  }

  const videoTarget = slots - remaining;
  // Minimum threshold: 75% of target (rounding up), capped so it's reachable in 5 of 6 days
  const videoMin    = Math.min(videoTarget, Math.ceil(videoTarget * 0.75));

  // Weekly study targets (revision + hours + questions run in parallel every day)
  const days   = (new Date(we + 'T00:00:00') - new Date(weekStart + 'T00:00:00')) / 86400000 + 1;
  const ratio  = days / 7;
  const hoursTarget    = Math.round(21 * ratio);   // ~3h/day
  const hoursMin       = Math.round(15 * ratio);   // ~2.5h/day
  const questionsTarget= Math.round(30 * ratio);   // ~5 PYQs/day (same topic as lecture)
  const questionsMin   = Math.round(20 * ratio);
  const revisionTarget = Math.round(6  * ratio);   // revise ~1 older lecture/day
  const revisionMin    = Math.round(4  * ratio);

  // Milestone if a subject completes inside this week
  const finishing = alloc.filter(a => {
    const idx = SUBJECTS.findIndex(s => s.id === a.subjectId);
    const sub = SUBJECTS[idx];
    // subject finishes if all its videos are used up
    return idx < subjectIdx || (idx === subjectIdx && subjectUsed === 0 && idx > 0);
  });
  const milestone = finishing.length
    ? `${finishing[finishing.length - 1].name} complete`
    : undefined;

  const entry = {
    week: weeks.length + 1,
    phase: 1,
    startDate: weekStart,
    endDate: we,
    days,
    videoTarget,
    videoMin,
    hoursTarget,
    hoursMin,
    questionsTarget,
    questionsMin,
    revisionTarget,
    revisionMin,
    subjects: alloc,
  };
  if (milestone) entry.milestone = milestone;
  weeks.push(entry);

  weekStart = addDays(we, 1);
}

// Final milestone on the last week
if (weeks.length) {
  const last = weeks[weeks.length - 1];
  if (!last.milestone) last.milestone = 'Pre-exam week — final revision';
}

const coverageEndDate = weeks[weeks.length - 1].endDate;

const weeklyPlan = {
  startDate:         START,
  examLabel:         'GATE Feb 2027',
  maxVideosPerDay:   2,
  totalVideos:       TOTAL_VIDEOS,
  videosScheduled:   totalDone,
  phase1Weeks:       weeks.length,
  totalWeeks:        weeks.length,
  phase1EndDate:     coverageEndDate,
  note:              totalDone < TOTAL_VIDEOS
    ? `${TOTAL_VIDEOS - totalDone} videos (Steel Structures tail) beyond exam cutoff — cover with PYQ notes if time allows.`
    : 'Full syllabus fits within the plan.',
  weeks,
};

// ── day-level roadmap ─────────────────────────────────────────────────────────
// Each study day: exactly 2 new lectures (0 on Sunday).
// subjectFocus tracks which subject is being covered that day.
const dailyPlan  = [];
const milestones = [];
let dayNum     = 0;
let dSubj      = 0;
let dConsumed  = 0;
let videosDone = 0;

let date = START;
while (date <= EXAM_CUTOFF && dSubj < SUBJECTS.length) {
  dayNum++;
  const dow     = dowOf(date);
  const isSun   = dow === 0;
  const isSat   = dow === 6;
  const videosToday = isSun ? 0 : 2;

  const focusSub = SUBJECTS[Math.min(dSubj, SUBJECTS.length - 1)];
  let focus = isSun ? 'Flex day — revision, recovery & weekly review' : focusSub.name;

  // Advance subject cursor
  if (!isSun && videosToday > 0) {
    let left = videosToday;
    while (left > 0 && dSubj < SUBJECTS.length) {
      const sub = SUBJECTS[dSubj];
      const avail = sub.totalVideos - dConsumed;
      const take  = Math.min(avail, left);
      dConsumed   += take;
      videosDone  += take;
      left        -= take;
      if (dConsumed === sub.totalVideos) {
        milestones.push({ day: dayNum, date, title: `${sub.name} Complete` });
        dSubj++; dConsumed = 0;
      }
    }
  }

  dailyPlan.push({
    day: dayNum,
    date,
    isWeekend: isSat || isSun,
    videosToWatch: videosToday,
    revisionSlots: isSun ? 3 : isSat ? 2 : 1,
    subjectFocus: focus,
  });

  date = addDays(date, 1);
}

if (!milestones.find(m => m.title.includes('Pre-exam'))) {
  milestones.push({ day: dayNum, date: EXAM_CUTOFF, title: 'Pre-exam final revision week' });
}

const roadmap = {
  startDate: START,
  totalDays: dailyPlan.length,
  dailyPlan,
  milestones,
};

// ── write files ───────────────────────────────────────────────────────────────
fs.writeFileSync(path.join(DATA_DIR, 'weekly-plan.json'), JSON.stringify(weeklyPlan, null, 2));
fs.writeFileSync(path.join(DATA_DIR, 'roadmap.json'),    JSON.stringify(roadmap,    null, 2));

console.log(`\nPlan generated:`);
console.log(`  Max videos/day : 2 (hard cap)`);
console.log(`  Weeks          : ${weeks.length}`);
console.log(`  Videos covered : ${totalDone} / ${TOTAL_VIDEOS}`);
console.log(`  Phase 1 ends   : ${coverageEndDate}`);
console.log(`  Roadmap days   : ${dailyPlan.length}`);
console.log(`  Milestones     : ${milestones.length}`);
console.log(`\nSubject completion dates:`);
SUBJECTS.forEach((sub, i) => {
  const ms = milestones.find(m => m.title === `${sub.name} Complete`);
  if (ms) console.log(`  ${sub.name.padEnd(28)} → ${ms.date} (day ${ms.day})`);
  else    console.log(`  ${sub.name.padEnd(28)} → NOT COMPLETED before exam cutoff`);
});
