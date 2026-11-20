# Sioux Falls HVAC

Rank and rent lead site for heating and cooling in Sioux Falls, SD. Domain: siouxfalls-hvac.com (not attached yet). Astro and Tailwind, hosted on Vercel (project `siouxfalls-hvac`, root directory `hvac`).

| Command | What it does |
| --- | --- |
| `npm install` | Install packages |
| `npm run dev` | Local dev server |
| `npm run build` | Build into `dist/` |

## Where to change things
- Phone number and business name: `src/config/site.ts`. The phone is a placeholder until a Quo number exists.
- Service pages: `src/content/services.ts`.
- Town pages: `src/content/towns.ts`. Every town fact has a source in `src/content/town-sources.md`.
- Photos and credits: `src/content/photos.ts`.

Do not add reviews, licenses, years in business, prices or stats unless they are real and checked.
