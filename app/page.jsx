"use client";
// app/page.jsx — Home route: assembles all home sections.
import { useSite } from "../components/SiteShell";

import Hero          from "../components/Hero";
import MarqueeBand   from "../components/MarqueeBand";
import Experience    from "../components/Experience";
import ProjectsBento from "../components/ProjectsBento";
import SkillsGrid    from "../components/SkillsGrid";

export default function Home() {
  const { t, dark } = useSite();
  return (
    <>
      <Hero          t={t} />
      <MarqueeBand   t={t} />
      <Experience    t={t} dark={dark} />
      <ProjectsBento t={t} dark={dark} />
      <SkillsGrid    t={t} dark={dark} />
    </>
  );
}
