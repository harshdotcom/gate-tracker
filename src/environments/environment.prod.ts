// PRODUCTION config — used by the GitHub Pages build (`npm run build:gh` / `npm run deploy`).
// Writes to the `prod/…` branch of your Firebase database — this is your real,
// cross-device study data.
export const environment = {
  production: true,

  // 👇 SAME Firebase URL as environment.ts.
  firebaseDbUrl: 'https://gate-civil-tracker-default-rtdb.firebaseio.com',

  // Separate from local dev data.
  dataSpace: 'prod',
};
