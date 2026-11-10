"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const CSS = `
  .experience-carousel { padding: 0 0 60px 0; }

  .experience-card {
    height: 100%;
    padding: 28px;
    border-radius: 16px;
    position: relative;
    overflow: hidden;
    border: 1px solid var(--line);
    transition: border-color 0.2s;
  }
  .experience-card:hover { border-color: var(--line-hover); }

  .experience-header { margin-bottom: 20px; }

  .experience-role {
    font-family: 'Geist', sans-serif;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: -0.02em;
    margin-bottom: 8px;
  }

  .experience-company {
    font-family: 'Geist', sans-serif;
    font-size: 14px;
    margin-bottom: 8px;
  }

  .experience-meta {
    display: flex;
    gap: 10px;
    align-items: center;
    font-family: 'Geist Mono', monospace;
    font-size: 12px;
  }

  .experience-live {
    width: 6px; height: 6px; border-radius: 50%;
    margin-right: -4px;
  }

  .experience-type {
    padding: 2px 8px;
    border-radius: 6px;
    font-size: 11px;
  }

  .experience-divider {
    height: 1px;
    margin: 16px 0;
  }

  .experience-points {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .experience-point {
    padding: 8px 0;
    padding-left: 20px;
    position: relative;
    font-size: 13px;
    line-height: 1.75;
  }

  .experience-point::before {
    content: "→";
    position: absolute;
    left: 0;
    font-family: 'Geist Mono', monospace;
    font-size: 11px;
    opacity: 0.5;
  }

  .swiper-pagination { bottom: 20px !important; }

  .swiper-pagination-bullet {
    width: 8px; height: 8px;
    opacity: 0.3;
    transition: opacity 0.2s ease;
  }
  .swiper-pagination-bullet-active {
    opacity: 1; width: 24px; border-radius: 4px;
  }

  .swiper-button-next,
  .swiper-button-prev {
    width: 38px; height: 38px;
    border-radius: 8px;
    transition: opacity 0.2s ease;
  }
  .swiper-button-next:after,
  .swiper-button-prev:after {
    font-size: 14px; font-weight: 500;
  }

  @media (max-width: 768px) {
    .swiper-button-next,
    .swiper-button-prev { display: none; }
  }
`;

export default function ExperienceCarousel({ experiences, t, dark }) {
  return (
    <>
      <style>{CSS}</style>
      <div className="experience-carousel">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            640:  { slidesPerView: 1 },
            768:  { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          style={{
            "--swiper-navigation-color": t.text,
            "--swiper-pagination-color": t.text,
            "--swiper-navigation-size": "15px",
          }}
        >
          {experiences.map((exp, index) => (
            <SwiperSlide key={index}>
              <div
                className="experience-card"
                style={{
                  "--line": t.border,
                  "--line-hover": dark ? "rgba(255,255,255,0.14)" : "rgba(0,0,0,0.14)",
                  background: t.card,
                }}
              >
                <div className="experience-header">
                  <h3 className="experience-role" style={{ color: t.text }}>
                    {exp.role}
                  </h3>
                  <div className="experience-company" style={{ color: t.muted }}>
                    {exp.company}
                  </div>
                  <div className="experience-meta" style={{ color: t.dim }}>
                    {exp.period.includes("Present") && (
                      <span className="experience-live" style={{ background: t.accent }} aria-hidden="true" />
                    )}
                    <span>{exp.period}</span>
                    <span
                      className="experience-type"
                      style={{
                        color: t.muted,
                        border: `1px solid ${t.border}`,
                      }}
                    >
                      {exp.type}
                    </span>
                  </div>
                </div>

                <div className="experience-divider" style={{ background: t.border }} />

                <ul className="experience-points">
                  {exp.points.map((point, i) => (
                    <li
                      key={i}
                      className="experience-point"
                      style={{ color: t.muted }}
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
