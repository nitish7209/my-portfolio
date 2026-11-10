@AGENTS.md

# Nitish Kumar - Portfolio Documentation

## Overview
Modern, minimalist portfolio website for Nitish Kumar - MERN Stack Developer & DevOps Engineer.

## Tech Stack
- **Framework:** Next.js 16.2.6 (App Router)
- **React:** 19.2.4
- **Styling:** Vanilla CSS with CSS-in-JS
- **Fonts:** Geist & Geist Mono (Next.js fonts)
- **Icons:** 
  - react-icons (social media icons)
  - lucide-react (UI icons)
  - skillicons.dev + devicon + simple-icons (skill badges, self-hosted in public/icons/skills)
- **Carousel:** Swiper.js
- **Theme:** next-themes (dark/light mode)
- **Animations:** GSAP (hero intro, cursor, ScrollTrigger reveals), Motion/Framer Motion (`motion/react` — resume modal, projects filter), CSS keyframes
- **Smooth scroll:** Locomotive Scroll v5 (built on Lenis, pinned to the same `lenis` version) driven by GSAP's ticker — desktop only
- **Accent:** signal green (`t.accent`) only on live things — availability dot, "Present" roles, live project links

## Project Structure
Pages are real routes, so each one is exported as its own static HTML file
(readable by crawlers and AI agents).
```
/app
  layout.js            # Root layout: fonts, metadata, JSON-LD, ThemeProvider, SiteShell
  page.jsx             # Home route (Hero, Marquee, Experience, Projects, Skills)
  about|projects|designs/page.jsx   # Routes with per-page metadata
  robots.js, sitemap.js             # Generated at build (force-static)
  llms.txt/route.js    # Markdown summary for LLMs, generated from lib/data.js
  globals.css

/app-pages             # Page bodies (AboutPage, ProjectsPage, DesignsPage)

/components
  SiteShell.jsx        # Persistent shell + useSite() context ({ t, dark, navigate, introDone })
  RoutePages.jsx       # Client bridges for the server route files
  Loader.jsx           # Signature loader — decorative overlay, page is visible underneath
  SmoothScroll.jsx     # Locomotive/Lenis + ScrollTrigger; exports lockScroll()
  AgentTools.jsx       # WebMCP tools for AI agents (navigator.modelContext)
  CursorFollower.jsx   # gsap.quickTo cursor (fine pointers only)
  NavBar, Footer, Hero, ExperienceCarousel, Experience, MarqueeBand,
  ProjectsBento, SkillsGrid, ResumeModal, ThemeToggle, theme-provider

/hooks                 # useTypewriter, useReveal (ScrollTrigger), useIsClient
/lib
  data.js              # All content data
  site.js              # SITE_URL, identity, ROUTES, RESUMES
  theme.js             # Theme color tokens
  gsap.js              # Lazy loaders for GSAP / ScrollTrigger
  motionFeatures.js    # Lazy Motion features for <LazyMotion>
/public/icons/skills   # Self-hosted skill icons
/public/designs        # barba.webm (replaces a 1.3 MB GIF) + poster
```

## Key Features

### 1. Signature Loader
- Custom SVG handwriting animation
- Duration: ~1.75 seconds, once per browser session, skippable (click / key / scroll)
- Font: Great Vibes (cursive)
- Phases: Draw → Fill → Slide out

### 2. Theme System
- Dark/Light mode with next-themes
- Custom ThemeToggle component with smooth animations
- CSS variables for theming
- Persistent theme preference

### 3. Experience Carousel
- Swiper.js implementation
- Responsive breakpoints:
  - Mobile: 1 card
  - Tablet: 2 cards
  - Desktop: 3 cards
- Touch/swipe gestures
- Auto-play (5s delay)
- Navigation arrows (desktop)
- Pagination dots

### 4. Typewriter Effect
- Alternates between roles:
  - "MERN Stack Developer"
  - "DevOps Engineer"
- Custom hook implementation
- Smooth typing animation

### 5. Skills Grid
- 22 technologies displayed
- Icons from skillicons.dev + devicon
- Hover animations
- Custom icons for: Helm, Azure DevOps, Bash, Argo CD

## Content Data

### Experience
- MERN Stack Developer @ Vizualytic (Jan 2024 - Present)
- Freelance MERN Stack Developer (Nov 2023 - Present)
- Freelance DevOps Engineer (Sept 2023 - Present)

### Skills (22 total)
React, Next.js, TypeScript, JavaScript, HTML, CSS, Tailwind CSS, Node.js, Express.js, MongoDB, MySQL, Git, Docker, Kubernetes, Helm, GitHub Actions, Azure DevOps, Azure, AWS, Terraform, Bash, Argo CD

### Contact
- Email: nitish.kumar.cs57@mail.com
- Phone: +91 7294002072
- LinkedIn: https://www.linkedin.com/in/nitishkweb/
- GitHub: https://github.com/nitish7209

## Color Scheme

### Dark Mode (Default)
- Background: `#09090b`
- Text: `#fafafa`
- Muted: `#a1a1aa`
- Dim: `#71717a`
- Border: `#27272a`

### Light Mode
- Background: `#ffffff`
- Text: `#09090b`
- Muted: `#71717a`
- Dim: `#a1a1aa`
- Border: `#e4e4e7`

## Performance Optimizations
- Reduced loader time from 5.6s → 3.2s
- Lazy loading for images
- CSS-in-JS for component isolation
- Optimized animations with CSS transforms
- Minimal dependencies

## Development Commands
```bash
npm run dev    # Start development server
npm run build  # Build for production
npm start      # Start production server
```

## Recent Updates
1. ✅ Replaced "Full Stack Developer" with "MERN Stack Developer" throughout
2. ✅ Added Swiper.js carousel for Experience section
3. ✅ Implemented custom ThemeToggle with animations
4. ✅ Added social icons (LinkedIn, GitHub) with react-icons
5. ✅ Added contact information (email, phone) in About & Footer
6. ✅ Removed Instagram, FastAPI, Redux from portfolio
7. ✅ Added Helm, Azure DevOps, Bash, Argo CD skills
8. ✅ Optimized loader timing (43% faster)
9. ✅ Updated typewriter to show only 2 roles

## Performance rules
- Run Lighthouse against `npm run build` output (e.g. `npx serve out`), never `next dev` — dev is unminified.
- Keep GSAP, ScrollTrigger, Motion and Locomotive out of the initial bundle (dynamic imports via lib/gsap.js, LazyMotion, next/dynamic).
- Never fade large hero text from opacity 0 — it delays LCP. Move it with transforms only.
- `NEXT_PUBLIC_SITE_URL` (or Netlify's `URL`) sets canonical/sitemap/JSON-LD URLs.

## Notes for AI Assistants
- Project uses vanilla CSS, NOT Tailwind (despite having it in skills)
- Skiper UI components require Tailwind, so custom implementations were used
- Theme comes from next-themes; static HTML is always dark until hydration (see SiteShell)
- Skill icons are self-hosted in public/icons/skills (originally from skillicons.dev / devicon / simple-icons)
- Loader timing is critical for UX - keep under 2s; the key `nk-loader-seen` is shared by Loader.jsx and the inline script in layout.js
