# Tanay Pathare — Portfolio

Full-stack developer portfolio. React + Vite + Tailwind, glassmorphism + hand-drawn
doodle visual style in pink/red/amber, built around real resume content.

## Stack
- React 18 + Vite
- Tailwind CSS 3 (custom `flare` color tokens + glass/doodle utilities)
- Framer Motion (page-load + scroll-reveal animations)
- lucide-react (icons)

## Getting started
```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Structure
```
src/
  components/
    common/       # GlassCard, SectionHeading, RevealOnScroll, Doodles (shared UI)
    layout/       # Navbar, Footer
    sections/     # Hero, About, Skills, Experience, Projects, Chess, Contact
  data/
    portfolioData.js   # single source of truth for all content
  utils/
    cn.js         # tailwind class merge helper
```

## Editing content
Everything text-based (name, education, experience, projects, skills) lives in
`src/data/portfolioData.js`. Change it there — components don't hardcode copy.
