import json, os
from datetime import date, timedelta

START       = '2026-06-11'
EXAM_CUTOFF = '2027-01-25'
DATA_DIR    = os.path.join(os.path.dirname(__file__), 'src', 'assets', 'data')

SUBJECTS = [
  {'id': 'solid-mechanics',            'name': 'Soil Mechanics',            'totalVideos': 46, 'gateMarks': 9  },
  {'id': 'fluid-mechanics',            'name': 'Fluid Mechanics',           'totalVideos': 40, 'gateMarks': 10 },
  {'id': 'structural-analysis',        'name': 'Structural Analysis',       'totalVideos': 50, 'gateMarks': 13 },
  {'id': 'strength-of-materials',      'name': 'Strength of Materials',     'totalVideos': 45, 'gateMarks': 11 },
  {'id': 'rcc',                        'name': 'RCC',                       'totalVideos': 40, 'gateMarks': 9  },
  {'id': 'engineering-mathematics',    'name': 'Engineering Mathematics',   'totalVideos': 30, 'gateMarks': 13 },
  {'id': 'general-aptitude',           'name': 'General Aptitude',          'totalVideos': 25, 'gateMarks': 15 },
  {'id': 'geotechnical-engineering',   'name': 'Geotechnical Engineering',  'totalVideos': 45, 'gateMarks': 8  },
  {'id': 'environmental-engineering',  'name': 'Environmental Engineering', 'totalVideos': 35, 'gateMarks': 6  },
  {'id': 'transportation-engineering', 'name': 'Transportation Engineering','totalVideos': 35, 'gateMarks': 6  },
  {'id': 'steel-structures',           'name': 'Steel Structures',          'totalVideos': 35, 'gateMarks': 5  },
]
TOTAL_VIDEOS = sum(s['totalVideos'] for s in SUBJECTS)

def add_days(iso, n):
    return (date.fromisoformat(iso) + timedelta(days=n)).isoformat()

def dow_of(iso):
    # 0=Mon ... 5=Sat, 6=Sun
    return date.fromisoformat(iso).weekday()

def week_end(iso):
    dow = dow_of(iso)
    days_to_sun = (6 - dow) % 7
    if days_to_sun == 0:
        days_to_sun = 7
    return add_days(iso, days_to_sun)

# ── Weekly plan ───────────────────────────────────────────────────────────────
weeks = []
week_start = START
subj_idx = 0
subj_used = 0
total_done = 0

while week_start <= EXAM_CUTOFF and subj_idx < len(SUBJECTS):
    we = week_end(week_start)
    slots = 0
    cur = week_start
    while cur <= we:
        if dow_of(cur) != 6:   # not Sunday
            slots += 2
        cur = add_days(cur, 1)

    alloc = []
    remaining = slots
    while remaining > 0 and subj_idx < len(SUBJECTS):
        sub = SUBJECTS[subj_idx]
        avail = sub['totalVideos'] - subj_used
        take = min(avail, remaining)
        alloc.append({'subjectId': sub['id'], 'name': sub['name'], 'videos': take})
        total_done += take
        subj_used  += take
        remaining  -= take
        if subj_used == sub['totalVideos']:
            subj_idx += 1
            subj_used = 0

    video_target = slots - remaining
    video_min    = min(video_target, max(1, round(video_target * 0.75)))
    days_count   = (date.fromisoformat(we) - date.fromisoformat(week_start)).days + 1
    ratio        = days_count / 7

    # Milestone: which subjects finished in this week
    finishing_names = []
    for a in alloc:
        idx = next(i for i, s in enumerate(SUBJECTS) if s['id'] == a['subjectId'])
        if idx < subj_idx:
            finishing_names.append(a['name'])

    entry = {
        'week':             len(weeks) + 1,
        'phase':            1,
        'startDate':        week_start,
        'endDate':          we,
        'days':             days_count,
        'videoTarget':      video_target,
        'videoMin':         video_min,
        'hoursTarget':      round(21 * ratio),
        'hoursMin':         round(15 * ratio),
        'questionsTarget':  round(30 * ratio),
        'questionsMin':     round(20 * ratio),
        'revisionTarget':   round(6  * ratio),
        'revisionMin':      round(4  * ratio),
        'subjects':         alloc,
    }
    if finishing_names:
        entry['milestone'] = finishing_names[-1] + ' complete'
    weeks.append(entry)
    week_start = add_days(we, 1)

if weeks and 'milestone' not in weeks[-1]:
    weeks[-1]['milestone'] = 'Pre-exam final revision week'

weekly_plan = {
    'startDate':        START,
    'examLabel':        'GATE Feb 2027',
    'maxVideosPerDay':  2,
    'totalVideos':      TOTAL_VIDEOS,
    'videosScheduled':  total_done,
    'phase1Weeks':      len(weeks),
    'totalWeeks':       len(weeks),
    'phase1EndDate':    weeks[-1]['endDate'],
    'note': (f'{TOTAL_VIDEOS - total_done} videos (Steel Structures) fall beyond exam cutoff — cover with PYQ notes if time allows.'
             if total_done < TOTAL_VIDEOS else 'Full syllabus fits within the plan.'),
    'weeks': weeks,
}

# ── Daily roadmap ─────────────────────────────────────────────────────────────
daily_plan = []
milestones = []
day_num   = 0
d_subj    = 0
d_consumed = 0

cur_date = START
while cur_date <= EXAM_CUTOFF and d_subj < len(SUBJECTS):
    day_num += 1
    dow    = dow_of(cur_date)
    is_sun = (dow == 6)
    is_sat = (dow == 5)
    videos_today = 0 if is_sun else 2

    focus_sub = SUBJECTS[min(d_subj, len(SUBJECTS)-1)]
    focus = 'Flex day - revision, recovery & weekly review' if is_sun else focus_sub['name']

    if not is_sun:
        left = videos_today
        while left > 0 and d_subj < len(SUBJECTS):
            sub   = SUBJECTS[d_subj]
            avail = sub['totalVideos'] - d_consumed
            take  = min(avail, left)
            d_consumed += take
            left       -= take
            if d_consumed == sub['totalVideos']:
                milestones.append({'day': day_num, 'date': cur_date, 'title': sub['name'] + ' Complete'})
                d_subj    += 1
                d_consumed = 0

    daily_plan.append({
        'day':           day_num,
        'date':          cur_date,
        'isWeekend':     is_sat or is_sun,
        'videosToWatch': videos_today,
        'revisionSlots': 3 if is_sun else (2 if is_sat else 1),
        'subjectFocus':  focus,
    })
    cur_date = add_days(cur_date, 1)

milestones.append({'day': day_num, 'date': EXAM_CUTOFF, 'title': 'Pre-exam final revision week'})

roadmap = {
    'startDate': START,
    'totalDays': len(daily_plan),
    'dailyPlan': daily_plan,
    'milestones': milestones,
}

# ── Write ─────────────────────────────────────────────────────────────────────
with open(os.path.join(DATA_DIR, 'weekly-plan.json'), 'w') as f:
    json.dump(weekly_plan, f, indent=2)
with open(os.path.join(DATA_DIR, 'roadmap.json'), 'w') as f:
    json.dump(roadmap, f, indent=2)

print('Plan generated:')
print(f'  Max videos/day  : 2 (hard cap)')
print(f'  Weeks           : {len(weeks)}')
print(f'  Videos covered  : {total_done} / {TOTAL_VIDEOS}')
print(f'  Phase 1 ends    : {weeks[-1]["endDate"]}')
print(f'  Roadmap days    : {len(daily_plan)}')
print(f'  Milestones      : {len(milestones)}')
print()
for sub in SUBJECTS:
    ms = next((m for m in milestones if m['title'] == sub['name'] + ' Complete'), None)
    if ms:
        print(f'  {sub["name"][:30]:30} -> {ms["date"]} (day {ms["day"]})')
    else:
        print(f'  {sub["name"][:30]:30} -> NOT completed before exam cutoff')
print()
print('Week 1:', weeks[0])
print('Week 2:', weeks[1])
