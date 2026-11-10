"use client";
// app-pages/ProjectsPage.jsx
import { useState } from "react";
import { AnimatePresence, LazyMotion } from "motion/react";
import * as m from "motion/react-m";
import { PROJECTS } from "../lib/data";

const loadMotionFeatures = () => import("../lib/motionFeatures").then(mod => mod.default);

const PROJ_CSS = `
  @keyframes projFadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .proj-page  { max-width: 1100px; margin: 0 auto; padding: 4rem 1.5rem 6rem; }
  .proj-top   { margin-bottom: 48px; animation: projFadeUp .55s both; }
  .proj-tag   { font-family: 'Geist Mono', monospace; font-size: 11px; margin-bottom: 10px; }
  .proj-h1    { font-family: 'Geist', sans-serif; font-weight: 500; letter-spacing: -.035em; line-height: 1; }

  .proj-filters { display: flex; gap: 8px; margin-bottom: 40px; flex-wrap: wrap; animation: projFadeUp .55s .1s both; }
  .proj-filter  {
    padding: 7px 18px; border-radius: 100px; font-size: 13px;
    background: transparent; cursor: pointer;
    font-family: 'Geist', sans-serif; transition: color .2s, border-color .2s, background-color .2s;
  }

  .proj-grid { display: grid; grid-template-columns: repeat(2,1fr); gap: 10px; }
  .proj-card { border-radius: 14px; padding: 2rem; position: relative; }

  .proj-year  { position: absolute; top: 18px; right: 18px; font-family: 'Geist Mono', monospace; font-size: 11px; }
  .proj-num   { font-family: 'Geist', sans-serif; font-size: 52px; font-weight: 400; letter-spacing: -.04em; line-height: 1; margin-bottom: 16px; user-select: none; }
  .proj-name  { font-family: 'Geist', sans-serif; font-size: 22px; font-weight: 500; letter-spacing: -.02em; margin-bottom: 10px; }
  .proj-desc  { font-size: 14px; line-height: 1.7; margin-bottom: 20px; }
  .proj-tags  { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 24px; }
  .proj-tag-pill { padding: 3px 10px; border-radius: 100px; font-size: 11px; font-family: 'Geist Mono', monospace; }
  .proj-link  { font-size: 13px; font-family: 'Geist', sans-serif; text-decoration: none; transition: color .2s; }

  @media(max-width:480px) { .proj-grid { grid-template-columns: 1fr; } }
`;

export function ProjectsPage({ t }) {
  const [filter, setFilter] = useState("All");
  const cats = ["All", "DevOps", "MERN", "Frontend"];

  const filtered = filter === "All" ? PROJECTS : PROJECTS.filter(p => {
    if (filter === "DevOps")
      return p.tags.some(tag => ["GCP","Kubernetes","ArgoCD","Terraform","GitHub Actions","KEDA","Prometheus","Helm","Docker"].includes(tag));
    if (filter === "MERN")
      return p.tags.some(tag => ["React","MongoDB","Next.js","Node.js","Express","TypeScript"].includes(tag));
    return p.tags.some(tag => ["JavaScript","Tailwind","HTML","CSS"].includes(tag));
  });

  return (
    <>
      <style>{PROJ_CSS}</style>
      <div className="proj-page">
        <div className="proj-top">
          <div className="proj-tag" style={{ color: t.dim }}>// my work</div>
          <h1 className="proj-h1" style={{ fontSize: "clamp(2.5rem,8vw,5.5rem)", color: t.text }}>
            Projects &amp;<br /><span style={{ color: t.muted }}>Case Studies.</span>
          </h1>
        </div>

        <div className="proj-filters">
          {cats.map(c => (
            <button
              key={c}
              className="proj-filter"
              onClick={() => setFilter(c)}
              style={{
                border: `1px solid ${filter === c ? t.muted : t.border}`,
                color: filter === c ? t.text : t.muted,
              }}
            >
              {c}
            </button>
          ))}
        </div>

        <LazyMotion features={loadMotionFeatures} strict>
        <div className="proj-grid">
          {/* initial={false}: cards in the static HTML render visible; only
              filter changes animate. */}
          <AnimatePresence mode="popLayout" initial={false}>
          {filtered.map((p, i) => (
            <m.div
              key={p.title}
              className="proj-card"
              style={{ background: t.card, border: `1px solid ${t.border}` }}
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] } }}
              exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
              whileHover={{ y: -4, transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] } }}
            >
              <span className="proj-year" style={{ color: t.dim }}>{p.year}</span>
              <div className="proj-num" style={{ color: t.dim }}>0{i + 1}</div>
              <h2 className="proj-name" style={{ color: t.text }}>{p.title}</h2>
              <p className="proj-desc" style={{ color: t.muted }}>{p.desc}</p>
              <div className="proj-tags">
                {p.tags.map(tag => (
                  <span key={tag} className="proj-tag-pill" style={{ border: `1px solid ${t.border}`, color: t.dim }}>{tag}</span>
                ))}
              </div>
              {p.live && p.live !== "#" && (
                <a
                  href={p.live} target="_blank" rel="noopener noreferrer"
                  className="proj-link" style={{ color: t.muted }}
                  aria-label={`Visit website: ${p.title}`}
                  onMouseOver={e => e.currentTarget.style.color = t.text}
                  onMouseOut={e => e.currentTarget.style.color = t.muted}
                >
                  Visit website ↗
                </a>
              )}
            </m.div>
          ))}
          </AnimatePresence>
        </div>
        </LazyMotion>
      </div>
    </>
  );
}
