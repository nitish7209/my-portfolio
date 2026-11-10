"use client";
import { useRef } from "react";
import Link from "next/link";
import { PROJECTS } from "../lib/data";
import { useReveal } from "../hooks/useReveal";

const CSS = `
  .bento-section { padding: 5rem 1.5rem; }
  .bento-inner   { max-width: 1100px; margin: 0 auto; }
  .bento-header  {
    display: flex; justify-content: space-between; align-items: flex-end;
    margin-bottom: 32px; flex-wrap: wrap; gap: 12px;
  }
  .bento-title { font-family: 'Geist', sans-serif; font-weight: 500; letter-spacing: -.03em; }
  .bento-all   {
    font-family: 'Geist', sans-serif; font-size: 13px;
    background: none; border: none; cursor: pointer; transition: color .2s;
  }

  .bento-grid {
    display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px;
  }
  .bento-card {
    border-radius: 14px; padding: 1.75rem;
    position: relative; overflow: hidden;
    border: 1px solid var(--line); background: var(--card);
    transition: border-color .2s;
    cursor: default;
  }
  .bento-card:hover { border-color: var(--line-hover); }
  .bento-card.large { grid-column: span 2; }

  .bento-year { position: absolute; top: 28px; right: 28px; font-family: 'Geist Mono', monospace; font-size: 11px; line-height: 16px; }
  .bento-num  {
    font-family: 'Geist', sans-serif; font-size: 56px; font-weight: 400;
    letter-spacing: -.04em; font-variant-numeric: tabular-nums; line-height: 1; margin-bottom: 16px;
    user-select: none;
  }
  .bento-name { font-family: 'Geist', sans-serif; font-size: 20px; font-weight: 500; letter-spacing: -.02em; margin-bottom: 8px; }
  .bento-desc { font-size: 14px; line-height: 1.7; margin-bottom: 20px; }
  .bento-tags { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 24px; }
  .bento-tag  { padding: 2px 8px; border-radius: 6px; font-size: 11px; font-family: 'Geist Mono', monospace; }
  .bento-link { display: inline-flex; align-items: center; gap: 8px; font-size: 13px; font-family: 'Geist', sans-serif; text-decoration: none; transition: color .2s; }
  .bento-live { width: 6px; height: 6px; border-radius: 50%; flex-shrink: 0; }
  .bento-badge {
    display: block; margin-bottom: 16px;
    font-family: 'Geist Mono', monospace; font-size: 11px; line-height: 16px;
  }

  @media(max-width:620px) { .bento-card.large { grid-column: span 1; } }
  @media(max-width:480px) { .bento-grid { grid-template-columns: 1fr; } .bento-card.large { grid-column: span 1; } }
`;

function BentoCard({ p, i, t, dark }) {
  const borderHover = dark ? "rgba(255,255,255,0.14)" : "rgba(0,0,0,0.14)";

  return (
    <div
      className={`bento-card${p.size === "large" ? " large" : ""}`}
      data-reveal
      style={{ "--card": t.card, "--line": t.border, "--line-hover": borderHover }}
    >
      <span className="bento-year" style={{ color: t.dim }}>{p.year}</span>
      {p.badge && (
        <div className="bento-badge" style={{ color: t.muted }}>{p.badge}</div>
      )}
      <div className="bento-num" style={{ color: t.dim }}>0{i + 1}</div>
      <h3 className="bento-name" style={{ color: t.text }}>{p.title}</h3>
      <p
        className="bento-desc"
        style={{ color: t.muted, maxWidth: p.size === "large" ? 480 : "100%" }}
      >
        {p.desc}
      </p>
      <div className="bento-tags">
        {p.tags.map(tag => (
          <span
            key={tag}
            className="bento-tag"
            style={{ border: `1px solid ${t.border}`, color: t.dim }}
          >
            {tag}
          </span>
        ))}
      </div>
      {p.live && p.live !== "#" && (
        <a
          href={p.live}
          target="_blank"
          rel="noopener noreferrer"
          className="bento-link"
          aria-label={`${p.linkLabel ?? "Visit website"}: ${p.title}`}
          style={{ color: t.muted }}
          onMouseOver={e => { e.currentTarget.style.color = t.text; }}
          onMouseOut={e => { e.currentTarget.style.color = t.muted; }}
        >
          <span className="bento-live" style={{ background: t.accent }} aria-hidden="true" />
          {p.linkLabel ?? "Visit website"} ↗
        </a>
      )}
    </div>
  );
}

export default function ProjectsBento({ t, dark }) {
  const sectionRef = useRef(null);
  useReveal(sectionRef);

  return (
    <>
      <style>{CSS}</style>
      <section className="bento-section" ref={sectionRef}>
        <div className="bento-inner">
          <div className="bento-header" data-reveal>
            <h2
              className="bento-title"
              style={{ fontSize: "clamp(1.6rem,3vw,2.2rem)", color: t.text }}
            >
              My Projects
            </h2>
            <Link
              href="/projects"
              className="bento-all"
              style={{ color: t.muted }}
              onMouseOver={e => { e.currentTarget.style.color = t.text; }}
              onMouseOut={e => { e.currentTarget.style.color = t.muted; }}
            >
              View all →
            </Link>
          </div>

          <div className="bento-grid">
            {PROJECTS.map((p, i) => (
              <BentoCard
                key={p.title}
                p={p}
                i={i}
                t={t}
                dark={dark}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
