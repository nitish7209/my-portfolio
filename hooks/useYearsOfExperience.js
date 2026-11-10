"use client";
// hooks/useYearsOfExperience.js
// Build-time value in the static HTML, then today's value after hydration,
// so the count stays current between deploys.
import { useIsClient } from "./useIsClient";
import { yearsOfExperience } from "../lib/experience";

const BUILD_TIME = Number(process.env.NEXT_PUBLIC_BUILD_TIME) || Date.now();

export function useYearsOfExperience() {
  const isClient = useIsClient();
  return yearsOfExperience(isClient ? Date.now() : BUILD_TIME);
}
