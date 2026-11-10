// lib/experience.js
// Years of experience, counted from the earliest EXPERIENCE period
// ("Sept 2023 – Present"), so editing roles in lib/data.js updates it.
import { EXPERIENCE } from "./data";

const MONTHS = ["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"];

// "Sept 2023" → months since year 0
function toMonthIndex(text) {
  const m = /([a-z]+)\.?\s+(\d{4})/i.exec(text);
  if (!m) return null;
  const month = MONTHS.indexOf(m[1].slice(0, 3).toLowerCase());
  return month < 0 ? null : Number(m[2]) * 12 + month;
}

const nowIndex = now => {
  const d = new Date(now);
  return d.getFullYear() * 12 + d.getMonth();
};

// Earliest start across all roles — Sept 2023 today.
const CAREER_START = Math.min(...EXPERIENCE.map(e => toMonthIndex(e.period)));

// Whole half-years since the first role, e.g. "2.5+" or "3+".
export function yearsOfExperience(now = Date.now()) {
  const halves = Math.max(0, Math.floor((nowIndex(now) - CAREER_START) / 6));
  return `${halves / 2}+`;
}
