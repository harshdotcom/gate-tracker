const fs = require('fs');
const path = require('path');

const subjects = [
  { id: 'solid-mechanics', name: 'Solid Mechanics', totalVideos: 46 },
  { id: 'fluid-mechanics', name: 'Fluid Mechanics', totalVideos: 40 },
  { id: 'structural-analysis', name: 'Structural Analysis', totalVideos: 50 },
  { id: 'strength-of-materials', name: 'Strength of Materials', totalVideos: 45 },
  { id: 'rcc', name: 'RCC', totalVideos: 40 },
  { id: 'steel-structures', name: 'Steel Structures', totalVideos: 35 },
  { id: 'geotechnical-engineering', name: 'Geotechnical Engineering', totalVideos: 45 },
  { id: 'environmental-engineering', name: 'Environmental Engineering', totalVideos: 35 },
  { id: 'transportation-engineering', name: 'Transportation Engineering', totalVideos: 35 },
  { id: 'engineering-mathematics', name: 'Engineering Mathematics', totalVideos: 30 },
  { id: 'general-aptitude', name: 'General Aptitude', totalVideos: 25 }
];

const videos = [];

subjects.forEach(subject => {
  for (let i = 1; i <= subject.totalVideos; i++) {
    videos.push({
      id: `${subject.id}-${i}`,
      subjectId: subject.id,
      videoNumber: i,
      name: `${subject.name} - Lecture ${i}`,
      duration: `${Math.floor(Math.random() * 20 + 30)}:00`, // random duration between 30 and 50 mins
      completed: false, // Default structure, though we will track this in local storage
      notes: ''
    });
  }
});

fs.writeFileSync(
  path.join(__dirname, 'src', 'assets', 'data', 'videos.json'),
  JSON.stringify(videos, null, 2)
);

console.log('Successfully generated videos.json with ' + videos.length + ' videos.');
