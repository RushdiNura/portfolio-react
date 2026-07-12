# Rushdi Nura — Portfolio

A premium, dark-themed developer portfolio built with React, Vite, Tailwind CSS,
and Framer Motion. The design's signature is a restrained "terminal" motif —
every section opens with a monospace command-style label (`$ whoami`,
`git log --oneline`, `curl -X POST /contact`) that ties the visual identity
back to the subject: a software engineer.

## Tech stack

- **React 18** + **Vite** — fast dev server and build
- **React Router** — routing scaffold (single-page app with in-page section navigation)
- **Tailwind CSS** — utility-first styling, extended with a custom design-token theme
- **Framer Motion** — scroll-reveal and micro-interaction animation
- **React Icons** — technology and UI icons

## Getting started

```bash
npm install
npm run dev
```

The app runs at `http://localhost:5173` by default.

To create a production build:

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  assets/
    CV.pdf                 # Replace with your real resume — powers the Download CV button
  components/
    layout/
      Navbar.jsx            # Sticky nav, scroll-aware style, mobile menu
      Footer.jsx
    sections/
      Hero.jsx
      About.jsx
      Skills.jsx
      Projects.jsx
      Experience.jsx
      Leadership.jsx
      Certificates.jsx
      Contact.jsx
    ui/
      SectionHeading.jsx    # Shared "$ path" heading used by every section
      RoleTyper.jsx         # Rotating role typewriter effect in the hero
      ProjectCard.jsx
  data/
    skills.js               # Skill groups + proficiency levels
    projects.js              # Project list — edit this to add/remove projects
  hooks/
    useActiveSection.js     # IntersectionObserver-based scroll spy for the navbar
  App.jsx
  main.jsx
  index.css                 # Design tokens, base styles, reusable utility classes
```

## Customizing content

- **Projects** — edit `src/data/projects.js`. Each entry supports `github` and
  `demo` links; point them at your real repositories and deployed URLs.
- **Skills** — edit `src/data/skills.js` to adjust technologies or proficiency
  bars (`level` is a 0–100 percentage).
- **CV / resume** — replace `src/assets/CV.pdf` with your real PDF. The
  filename and import in `Hero.jsx` can stay the same.
- **Contact links** — update the GitHub, LinkedIn, and email values in
  `src/components/sections/Contact.jsx`.
- **Contact form submission** — the form currently validates client-side and
  shows a success state on submit. Wire the `handleSubmit` function in
  `Contact.jsx` up to your email service or form backend of choice (e.g.
  Formspree, EmailJS, or your own API route) to actually deliver messages.
- **Certificates** — the certificates section ships with placeholder tiles by
  category. Swap each placeholder for an `<img>` once you have certificate
  images to add.

## Design notes

- **Palette**: near-black background (`#0a0e16`), deep blue primary
  (`#2563eb`), cyan secondary (`#22d3ee`), white/light-slate text.
- **Type**: Space Grotesk for display headings, Inter for body copy,
  JetBrains Mono for the terminal-style labels and tags.
- **Motion**: fade-up reveals on scroll, hover elevation on cards, and a
  restrained typewriter effect in the hero — no spinning, bouncing, or glow
  effects. Respects `prefers-reduced-motion`.
"# portfolio-react" 
