// LOCAL / development config — used by `ng serve` and `npm start`.
// Writes to the `dev/…` branch of your Firebase database so local
// experiments never touch your real study data.
export const environment = {
  production: false,

  // 👇 PASTE YOUR FIREBASE REALTIME DATABASE URL HERE (same value in both env files).
  // Looks like: https://gate-tracker-xxxx-default-rtdb.firebaseio.com
  // (or a regional one ending in .firebasedatabase.app)
  // Until you replace the placeholder, the app runs in local-only mode (no sync, no errors).
  firebaseDbUrl: 'https://gate-civil-tracker-default-rtdb.firebaseio.com',

  // Keeps local and production data completely separate.
  dataSpace: 'dev',
};
