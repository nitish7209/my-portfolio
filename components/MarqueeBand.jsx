"use client";
import { MARQUEE } from "../lib/data";

const CSS = `
  @keyframes marqueeScroll {
    from { transform: translateX(0); }
    to   { transform: translateX(-50%); }
  }
  .marquee-wrap {
    overflow: hidden;
    -webkit-mask-image: linear-gradient(to right, transparent, black 9%, black 91%, transparent);
    mask-image: linear-gradient(to right, transparent, black 9%, black 91%, transparent);
  }
  .marquee-inner {
    display: flex; width: max-content;
    animation: marqueeScroll 30s linear infinite;
  }
  .marquee-item {
    display: flex; align-items: center; gap: 0;
    font-family: 'Geist Mono', monospace;
    font-size: 12px; letter-spacing: .03em; white-space: nowrap;
  }
  .marquee-text { margin-right: 20px; }
  .marquee-sep {
    margin-right: 20px;
    opacity: 0.5;
  }
`;

export default function MarqueeBand({ t }) {
  const items = [...MARQUEE, ...MARQUEE];
  return (
    <>
      <style>{CSS}</style>
      <div
        className="marquee-wrap"
        style={{
          borderTop: `1px solid ${t.border}`,
          borderBottom: `1px solid ${t.border}`,
          padding: "12px 0",
        }}
      >
        <div className="marquee-inner">
          {items.map((s, i) => (
            <span key={i} className="marquee-item" style={{ color: t.dim }}>
              <span className="marquee-text">{s}</span>
              <span className="marquee-sep">/</span>
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
