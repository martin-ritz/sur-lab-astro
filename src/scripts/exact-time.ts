// Exact time for every clock in the Lab.
// offset = how far the server clock is ahead of this device (ms)
let offset = 0;

export const exactNow = () => Date.now() + offset;
export const getOffset = () => offset;

async function measureOnce() {
  const sent = Date.now();
  const res = await fetch("/api/now", { cache: "no-store" });
  const received = Date.now();
  const { now } = await res.json();
  const roundTrip = received - sent;
  return { offset: now + roundTrip / 2 - received, roundTrip };
}

async function syncClock() {
  const samples = [];
  for (let i = 0; i < 3; i++) samples.push(await measureOnce());
  samples.sort((a, b) => a.roundTrip - b.roundTrip);
  offset = samples[0].offset;
  // Tell any clock on the page that the time was corrected
  window.dispatchEvent(new Event("clock-synced"));
}

let started = false;

export function startSync() {
  if (started) return; // if two components call this, sync only once
  started = true;

  syncClock().catch(() => window.dispatchEvent(new Event("clock-sync-failed")));

  // Re-measure every 15 minutes (drift, or the device fixing its own clock)
  setInterval(() => syncClock().catch(() => {}), 15 * 60 * 1000);

  // Re-measure when the tab comes back (laptop woke up, tab switched)
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") syncClock().catch(() => {});
  });
}

// Run fn at the start of every exact second
export function everySecond(fn: () => void) {
  const tick = () => {
    fn();
    setTimeout(tick, 1000 - (exactNow() % 1000));
  };
  tick();
}