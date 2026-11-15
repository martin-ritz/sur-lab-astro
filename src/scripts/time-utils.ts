// Time zone calculations for the time tool.
// Plain functions: you give them a time zone and a moment, they give you an answer.
// No page, no saved state, so they work the same everywhere.
//
// "moment" = milliseconds since 1 Jan 1970, like Date.now() or exactNow().

export type ZoneParts = {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  second: number;
};

// Creating an Intl formatter is the slow part, so keep one per time zone and reuse it
const partsFormatters = new Map<string, Intl.DateTimeFormat>();

// The calendar date and clock time in a time zone at a moment, as numbers
export function zoneParts(tz: string, moment: number): ZoneParts {
  let formatter = partsFormatters.get(tz);
  if (!formatter) {
    formatter = new Intl.DateTimeFormat("en-GB", {
      timeZone: tz,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hourCycle: "h23",
    });
    partsFormatters.set(tz, formatter);
  }

  const p: Record<string, string> = {};
  for (const part of formatter.formatToParts(moment)) p[part.type] = part.value;

  return { year: +p.year, month: +p.month, day: +p.day, hour: +p.hour, minute: +p.minute, second: +p.second };
}

// How many minutes a time zone is ahead of UTC at a moment.
// Prague in winter: 60. New York in winter: -300. Mumbai: 330.
// Trick: read the clock in that zone, pretend those numbers are UTC, and compare with the real moment.
// Because it reads the zone's clock at that exact moment, daylight saving is included automatically.
export function offsetMinutes(tz: string, moment: number): number {
  const p = zoneParts(tz, moment);
  const asIfUtc = Date.UTC(p.year, p.month - 1, p.day, p.hour, p.minute, p.second);
  const realSecond = Math.floor(moment / 1000) * 1000;
  return Math.round((asIfUtc - realSecond) / 60000);
}

// The calendar day as one comparable number: 15 Nov 2026 → 20261115
export function dayNumber(tz: string, moment: number): number {
  const p = zoneParts(tz, moment);
  return p.year * 10000 + p.month * 100 + p.day;
}

// Is it today, tomorrow or yesterday in `tz`, compared with `refTz`?
export function dayLabel(tz: string, refTz: string, moment: number): "Today" | "Tomorrow" | "Yesterday" {
  const here = dayNumber(tz, moment);
  const there = dayNumber(refTz, moment);
  if (here > there) return "Tomorrow";
  if (here < there) return "Yesterday";
  return "Today";
}

// "14:30" or "2:30 PM"
export function formatTime(tz: string, moment: number, hour12: boolean): string {
  return new Intl.DateTimeFormat(hour12 ? "en-US" : "en-GB", {
    timeZone: tz,
    hour: hour12 ? "numeric" : "2-digit",
    minute: "2-digit",
    hourCycle: hour12 ? "h12" : "h23",
  }).format(moment);
}

// "6 h", "4 h 30 min", "45 min"
function span(minutes: number): string {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  if (h && m) return `${h} h ${m} min`;
  if (h) return `${h} h`;
  return `${m} min`;
}

// The difference in words, compared with `ref` ("you" or a city name):
// "Same time as you", "6 h behind Oaxaca", "4 h 30 min ahead of you"
export function describeDifference(diffMinutes: number, ref: string): string {
  if (diffMinutes === 0) return `Same time as ${ref}`;
  if (diffMinutes > 0) return `${span(diffMinutes)} ahead of ${ref}`;
  return `${span(-diffMinutes)} behind ${ref}`;
}

// "UTC+1", "UTC−5", "UTC+5:30", "UTC+0" (with a real minus sign)
export function utcLabel(offset: number): string {
  const sign = offset < 0 ? "−" : "+";
  const a = Math.abs(offset);
  const h = Math.floor(a / 60);
  const m = a % 60;
  return `UTC${sign}${h}${m ? ":" + String(m).padStart(2, "0") : ""}`;
}

// The short code of a time zone: "CET", "EST", or "UTC+9" when there's no common code.
// British English knows the European codes, American English the American ones.
export function zoneCode(tz: string, moment: number): string {
  const codeIn = (language: string) =>
    new Intl.DateTimeFormat(language, { timeZone: tz, timeZoneName: "short" })
      .formatToParts(moment)
      .find((p) => p.type === "timeZoneName")?.value ?? "";

  const british = codeIn("en-GB");
  if (!british.startsWith("GMT+") && !british.startsWith("GMT-")) return british;

  const american = codeIn("en-US");
  if (!american.startsWith("GMT")) return american;

  return utcLabel(offsetMinutes(tz, moment));
}

// The full name: "Central European Standard Time", "Pacific Daylight Time"
export function zoneLongName(tz: string, moment: number): string {
  return (
    new Intl.DateTimeFormat("en-US", { timeZone: tz, timeZoneName: "long" })
      .formatToParts(moment)
      .find((p) => p.type === "timeZoneName")?.value ?? tz
  );
}

// "Sunday, 15 November 2026"
export function longDate(tz: string, moment: number): string {
  return new Intl.DateTimeFormat("en-GB", {
    timeZone: tz,
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(moment);
}

// "Sun 15 Nov"
export function shortDate(tz: string, moment: number): string {
  return new Intl.DateTimeFormat("en-GB", {
    timeZone: tz,
    weekday: "short",
    day: "numeric",
    month: "short",
  }).format(moment);
}

// ISO week number (weeks start on Monday; week 1 is the week with the year's first Thursday)
export function isoWeek(tz: string, moment: number): number {
  const p = zoneParts(tz, moment);
  const date = new Date(Date.UTC(p.year, p.month - 1, p.day));
  const weekday = date.getUTCDay() || 7; // Monday 1 … Sunday 7
  date.setUTCDate(date.getUTCDate() + 4 - weekday); // move to that week's Thursday
  const yearStart = Date.UTC(date.getUTCFullYear(), 0, 1);
  return Math.ceil(((date.getTime() - yearStart) / 86400000 + 1) / 7);
}

// Working hours, as used on the cards and in the meeting finder
export const WORK_START = 9;
export const WORK_END = 18;

export type Status = "work" | "off" | "asleep";

export function workStatus(hour: number): Status {
  if (hour >= WORK_START && hour < WORK_END) return "work";
  if (hour >= 7 && hour < 22) return "off";
  return "asleep";
}

export const statusText: Record<Status, string> = {
  work: "Working hours",
  off: "Off work",
  asleep: "Probably asleep",
};

// Night is when the moon shows on a card
export function isNight(hour: number): boolean {
  return hour < 6 || hour >= 20;
}

// For search: lower case, no accents. "Medellín" → "medellin", "São Paulo" → "sao paulo"
export function simplify(text: string): string {
  return text.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase().trim();
}
