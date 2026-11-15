// The time tool's memory: which cities are on the list, which one is "home",
// and whether a time was picked on the slider.
//
// Every part of the page (big clock, city cards, meeting finder, clock mode) reads from here.
// When something changes, the store sends a "time-change" signal on window, and each part redraws.
// That way the parts never have to know about each other.

import { cities, type City } from "../data/cities";
import { exactNow } from "./exact-time";
import { simplify, zoneParts } from "./time-utils";

// ---------- Every city gets a short, unique id for links: "oaxaca", "buenos-aires" ----------

export type Place = City & { id: string };

const slug = (text: string) => simplify(text).replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

// Some names exist in two countries (Valencia, La Paz). Those get the country added: "valencia-spain".
const nameCount = new Map<string, number>();
for (const c of cities) nameCount.set(slug(c.name), (nameCount.get(slug(c.name)) ?? 0) + 1);

export const places: Place[] = cities.map((c) => ({
  ...c,
  id: nameCount.get(slug(c.name))! > 1 ? `${slug(c.name)}-${slug(c.country)}` : slug(c.name),
}));

const byId = new Map(places.map((p) => [p.id, p]));
export const findPlace = (id: string) => byId.get(id);

// ---------- The state ----------

const STARTER = ["oaxaca", "buenos-aires", "london", "tokyo"];
const STORAGE_KEY = "lab-time-cities";

type State = {
  ids: string[];               // the cities on the list, in order
  homeId: string | null;       // the starred city, or null = the visitor's own time zone
  shared: boolean;             // true while looking at a list someone shared by link
  pickedMinute: number | null; // a time picked on the slider (minutes after midnight, home time), or null = now
};

// Keep only ids that exist, without duplicates
const clean = (ids: string[]) => [...new Set(ids)].filter((id) => byId.has(id));

// A shared link looks like /time?cities=oaxaca,london,tokyo&home=oaxaca
function readLink(): Pick<State, "ids" | "homeId"> | null {
  const params = new URLSearchParams(location.search);
  const list = params.get("cities");
  if (!list) return null;
  const ids = clean(list.split(","));
  if (ids.length === 0) return null;
  const home = params.get("home");
  return { ids, homeId: home && ids.includes(home) ? home : null };
}

// The visitor's own list, saved in their browser
function readSaved(): Pick<State, "ids" | "homeId"> | null {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "null");
    if (!saved || !Array.isArray(saved.ids)) return null;
    const ids = clean(saved.ids);
    return { ids, homeId: ids.includes(saved.homeId) ? saved.homeId : null };
  } catch {
    return null; // storage blocked (private window) or broken data: start fresh
  }
}

const fromLink = readLink();
const state: State = {
  ...(fromLink ?? readSaved() ?? { ids: STARTER, homeId: null }),
  shared: fromLink !== null,
  pickedMinute: null,
};

function save() {
  if (state.shared) return; // a shared list isn't saved until the visitor clicks "Keep this list"
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ ids: state.ids, homeId: state.homeId }));
  } catch {}
}

// Save, then tell every part of the page to redraw
function changed() {
  save();
  window.dispatchEvent(new Event("time-change"));
}

// ---------- Reading ----------

export const getIds = () => [...state.ids];
export const isShared = () => state.shared;
export const getPickedMinute = () => state.pickedMinute;

export const deviceTz = Intl.DateTimeFormat().resolvedOptions().timeZone;

// The starred city, or null when home is the visitor's own time zone
export const getHome = () => (state.homeId ? findPlace(state.homeId) ?? null : null);
export const homeTz = () => getHome()?.tz ?? deviceTz;
// What the cards compare to: "you" or the city's name ("6 h behind Oaxaca")
export const homeRef = () => getHome()?.name ?? "you";

// The moment the cards show: now, or the time picked on the slider (today, in home time)
export function getMoment(): number {
  const now = exactNow();
  if (state.pickedMinute === null) return now;
  const p = zoneParts(homeTz(), now);
  const minutesNow = p.hour * 60 + p.minute;
  return now + (state.pickedMinute - minutesNow) * 60000 - p.second * 1000 - (now % 1000);
}

// ---------- Changing ----------

export function addCity(id: string) {
  if (!byId.has(id) || state.ids.includes(id)) return;
  state.ids.push(id);
  changed();
}

export function removeCity(id: string) {
  state.ids = state.ids.filter((x) => x !== id);
  if (state.homeId === id) {
    state.homeId = null;
    state.pickedMinute = null; // the picked time was in that city's time
  }
  changed();
}

// Star a city as home, or un-star it (back to the visitor's own time zone)
export function toggleHome(id: string) {
  state.homeId = state.homeId === id ? null : id;
  state.pickedMinute = null; // a picked time means "in home time", so it no longer fits
  changed();
}

export function pickMinute(minute: number | null) {
  state.pickedMinute = minute;
  window.dispatchEvent(new Event("time-change")); // nothing to save: a picked time isn't remembered
}

// ---------- Sharing ----------

// The link to this list: /time?cities=…&home=…
export function shareUrl(): string {
  const url = new URL("/time", location.origin);
  url.searchParams.set("cities", state.ids.join(","));
  if (state.homeId) url.searchParams.set("home", state.homeId);
  // URLSearchParams writes commas as %2C; plain commas are easier to read in a link
  return url.toString().replaceAll("%2C", ",");
}

// Make the shared list the visitor's own
export function keepShared() {
  state.shared = false;
  history.replaceState(null, "", "/time"); // remove ?cities=… from the address bar
  changed(); // saves now that shared is false
}

// Ignore the shared list and go back to the visitor's own
export function leaveShared() {
  const saved = readSaved() ?? { ids: STARTER, homeId: null };
  state.ids = saved.ids;
  state.homeId = saved.homeId;
  state.shared = false;
  state.pickedMinute = null;
  history.replaceState(null, "", "/time");
  window.dispatchEvent(new Event("time-change"));
}
