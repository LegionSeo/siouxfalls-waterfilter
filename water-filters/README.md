# Sioux Falls Water Filters

Lead site for whole house water filters, softeners, reverse osmosis and well water systems in Sioux Falls, SD. Domain: siouxfallswaterfilter.com. Built with Astro and Tailwind, hosted on Vercel (project `siouxfalls-waterfilter`, root directory `water-filters`).

| Command | What it does |
| --- | --- |
| `npm install` | Install packages |
| `npm run dev` | Local dev server |
| `npm run build` | Build into `dist/` |

## Where to change things

- Phone number and the free water test offer: `src/config/site.ts`. The phone is a placeholder until a real line exists.
- Water numbers and their sources: `src/content/water.ts`.
- Service pages: `src/content/services.ts`.
- Town pages: `src/content/towns.ts`.

Every water number on the site comes from a public report named on the page. Do not add reviews, licenses or years in business unless they are real.
