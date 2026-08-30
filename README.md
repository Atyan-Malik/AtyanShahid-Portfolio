# Portfolio — atyan.dev

A fast, creative developer portfolio built with React 19 + TypeScript + Vite,
themed around a "trading terminal / ledger" identity: void-black backgrounds,
a cyan/red/amber signal palette, a live particle network background, and
mono/display type pairing that reads like logs and tickers rather than a
generic template.

## Stack (all latest majors, none of the pinned-old versions)

- React 19 + TypeScript + Vite 8
- Tailwind CSS v4 (CSS-first config via `@theme`, no `tailwind.config.js`)
- Framer Motion 13 — scroll reveals, hero sequencing
- @tsparticles/react v4 + @tsparticles/slim — the network background
- react-parallax-tilt — tilt/glare on cards
- react-vertical-timeline-component — Experience section
- lucide-react + @tabler/icons-react — iconography (brand icons come from
  Tabler since recent lucide-react majors dropped brand/logo icons)
- react-router-dom — installed and ready if you split this into multiple
  routed pages later (currently a single scrolling page)
- clsx + tailwind-merge — the `cn()` class helper in `src/lib/utils.ts`

## Folder structure

```
src/
  components/
    layout/     Navbar, Footer
    sections/   Hero, About, Experience, TechStack, Feedbacks, Contact
    ui/         ParticlesBackground, SectionHeading, GlowButton (shared primitives)
  data/         Plain-data files (nav, social, experience, techstack, about, feedback)
  hooks/        useActiveSection (scroll-spy for the navbar)
  lib/          utils.ts (cn helper)
  index.css     Design tokens (@theme) + base styles
  App.tsx       Composes the page from sections
```

## Run it

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # type-checks then builds to dist/
npm run preview   # serve the production build locally
```

## Customize

- **Colors / fonts**: edit the `@theme` block at the top of `src/index.css`.
- **Content**: everything under `src/data/*.ts` — no JSX edits needed to
  change copy, links, experience entries, tech stack, or testimonials.
- **Contact form**: `src/components/sections/Contact.tsx` currently logs to
  the console on submit — wire `handleSubmit` up to your API route, Formspree,
  or email service of choice.
- **Socials**: `src/data/social.ts` — replace the placeholder GitHub/LinkedIn/
  email/Twitter URLs with your real ones.
