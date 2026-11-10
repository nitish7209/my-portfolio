"use client";
import { useState, useEffect, useRef } from "react";
import { SKILL_ICONS } from "../lib/data";

const CSS = `
  .skills-section { padding: 5rem 1.5rem; }
  .skills-inner   { max-width: 1100px; margin: 0 auto; }
  .skills-header  {
    display: flex; justify-content: space-between; align-items: flex-end;
    margin-bottom: 48px; flex-wrap: wrap; gap: 12px;
  }
  .skills-title    { font-family: 'Geist', sans-serif; font-weight: 500; letter-spacing: -.03em; }
  .skills-subtitle { font-family: 'Geist Mono', monospace; font-size: 11px; }

  .skills-group { margin-bottom: 40px; }
  .skills-group:last-child { margin-bottom: 0; }
  .skills-group-label {
    font-family: 'Geist Mono', monospace; font-size: 12px;
    margin-bottom: 20px;
  }
  .skills-grid {
    display: flex; flex-wrap: wrap; gap: 24px; justify-content: center;
  }
  .skill-wrap {
    display: flex; flex-direction: column; align-items: center; gap: 8px;
    cursor: default;
  }
  .skill-icon-box {
    width: 52px; height: 52px; border-radius: 14px;
    display: flex; align-items: center; justify-content: center;
    border: 1px solid var(--line);
    transition: border-color .2s;
    overflow: hidden;
  }
  .skill-wrap:hover .skill-icon-box { border-color: var(--line-hover); }
  .skill-img {
    width: 100%; height: 100%; display: block; border-radius: 14px;
  }
  .skill-label {
    font-family: 'Geist', sans-serif; font-size: 11px;
    text-align: center; max-width: 64px; line-height: 1.3;
    transition: color .2s;
  }
  .skill-wrap:hover .skill-label { color: var(--label-hover) !important; }
`;

const SKILL_GROUPS = [
  { key: "dev",    label: "Development" },
  { key: "devops", label: "DevOps & Cloud" },
];

export default function SkillsGrid({ t, dark }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.08 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{CSS}</style>
      <section
        className="skills-section"
        style={{
          background: t.surface,
          "--line": t.border,
          "--line-hover": dark ? "rgba(255,255,255,0.18)" : "rgba(0,0,0,0.18)",
          "--label-hover": t.text,
        }}
        ref={ref}
      >
        <div className="skills-inner">
          <div
            className="skills-header"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "none" : "translateY(18px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
            }}
          >
            <h2
              className="skills-title"
              style={{ fontSize: "clamp(1.6rem,3vw,2.2rem)", color: t.text }}
            >
              Skills
            </h2>
            <span className="skills-subtitle" style={{ color: t.dim }}>// tech stack</span>
          </div>

          {SKILL_GROUPS.map(group => {
            const groupSkills = SKILL_ICONS.filter(s => s.category === group.key);
            return (
              <div key={group.key} className="skills-group">
                <div
                  className="skills-group-label"
                  style={{
                    color: t.dim,
                    opacity: visible ? 1 : 0,
                    transform: visible ? "none" : "translateY(14px)",
                    transition: "opacity 0.6s ease, transform 0.6s ease",
                  }}
                >
                  {group.label}
                </div>
                <div className="skills-grid">
                  {groupSkills.map((skill, i) => (
                    <div
                      key={skill.name}
                      className="skill-wrap"
                      title={skill.name}
                      style={{
                        opacity: visible ? 1 : 0,
                        transform: visible ? "none" : "translateY(8px)",
                        transition: `opacity 0.5s ${i * 0.02}s ease, transform 0.5s ${i * 0.02}s ease`,
                      }}
                    >
                      <div
                        className="skill-icon-box"
                        style={{
                          background: dark ? "#1c1c1e" : "#f0f0f2",
                        }}
                      >
                        <img
                          className="skill-img"
                          src={`/icons/skills/${skill.id}.svg`}
                          alt={skill.name}
                          width={52}
                          height={52}
                          loading="lazy"
                          decoding="async"
                          style={{ padding: skill.custom ? "8px" : "0" }}
                          onError={e => { e.currentTarget.style.display = "none"; }}
                        />
                      </div>
                      <span className="skill-label" style={{ color: t.muted }}>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
