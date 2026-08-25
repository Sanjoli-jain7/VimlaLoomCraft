# Vimla Loom Crafts — Homepage

React + Vite + GSAP (ScrollTrigger) + Lenis.

## Run it

```
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Editing content without touching component code

- **Nav links, hero copy, CTAs, the Vimla Retreats link** → `src/data/siteConfig.js`
- **The eight steps of the visit (Arrive → Remember)** → `src/data/journey.js`
- **The seven craft stages (Spinning → Finishing)** → `src/data/craftSteps.js`
- **Village / tea / story section copy and photos** → `src/data/sections.js`
- **Experience packages and prices, business-preview copy** → `src/data/experiences.js`
- **Golden Triangle route and nearby landmarks** → `src/data/locations.js`
- **Brand colours, type, spacing** → `src/styles/variables.css`

## Swapping in real photography

Every image is currently a remote Unsplash URL, referenced from the `data/`
files above — nothing is hardcoded in a component. To go live with real
Vimla photographs:

1. Drop your image files into `src/assets/`.
2. In the relevant `data/` file, change the `image` (or `src`) value from
   the Unsplash URL to an import path, e.g. `/src/assets/hero.jpg`.

## What's built vs. what's next

This first pass is the **homepage only**, per the brief. `App.jsx` already
has route placeholders for `/experience`, `/craft`, `/village`, `/business`,
`/visit` and `/book` so the nav links don't dead-end — each of those is a
real page to build next. `Vimla Retreats` in the nav points at a
placeholder URL in `siteConfig.js`; swap it for the real domain once that
site exists.

## A note on testing

This project was written but not run inside the assistant's sandbox — that
environment has no network access, so `npm install` couldn't complete
there. Everything follows Vite/React/GSAP/Lenis conventions and should run
as-is with the two commands above; if anything breaks on your machine,
send me the error and I'll fix it directly in the code.
