# Sioux Falls Water Filtration

Lead site for water softeners, filtration, reverse osmosis, iron and sulfur treatment, well water treatment, and water testing in Sioux Falls, SD and nearby towns. Built with Astro and Tailwind, hosted on Vercel.

## Commands

| Command | What it does |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Start the local dev server |
| `npm run build` | Build the static site into `dist/` |
| `npm test` | Run the lead form tests |

## Where to change things

- Phone number: `src/config/phone.ts`. It is a placeholder until the real number is ready.
- Email, towns, form endpoint, images: `src/config/site.ts`.
- Hardness numbers: `src/config/water.ts`, plus the hard water guide in `src/content/guides/`.
- Services: `src/config/catalog.ts` and `src/content/service-pages.ts`.
- Towns: `src/content/town-pages.ts` and `src/content/town-places.ts`. Sources are in `src/content/town-sources.md`.
