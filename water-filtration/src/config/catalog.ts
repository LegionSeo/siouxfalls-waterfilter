import { SITE } from './site';

export function joinNames(names: string[]): string {
  if (names.length <= 1) return names.join('');
  if (names.length === 2) return `${names[0]} and ${names[1]}`;
  return `${names.slice(0, -1).join(', ')}, and ${names[names.length - 1]}`;
}

export interface ServiceItem {
  name: string;
  href: string;
  icon: string;
  summary: string;
  /** False until the page exists. Dead URLs stay out of nav, footer, cards, and schema. */
  live: boolean;
}

const serviceList: Omit<ServiceItem, 'live'>[] = [
  {
    name: 'Water Softeners',
    href: '/services/water-softeners',
    icon: 'drop',
    summary: 'Stop the scale, the spotty dishes, and the dry skin. We size the softener to your hardness and your household.',
  },
  {
    name: 'Whole House Water Filtration',
    href: '/services/whole-house-water-filtration',
    icon: 'filter',
    summary: 'Better water at every tap. We filter on the main line for chlorine taste, sediment, and the things your test turns up.',
  },
  {
    name: 'Reverse Osmosis Drinking Water',
    href: '/services/reverse-osmosis-drinking-water',
    icon: 'faucet',
    summary: 'Great tasting water at one kitchen tap. Good for drinking, coffee, ice, and cooking.',
  },
  {
    name: 'Iron and Sulfur Removal',
    href: '/services/iron-and-sulfur-removal',
    icon: 'flask',
    summary: 'Orange stains and rotten egg smell have causes. We find yours and match the treatment to it.',
  },
  {
    name: 'Well Water Treatment',
    href: '/services/well-water-treatment',
    icon: 'well',
    summary: 'Your well, your water, your call. We build a treatment plan from what your well actually has in it.',
  },
  {
    name: 'Water Testing',
    href: '/services/water-testing',
    icon: 'tube',
    summary: 'Know what is in your water before you buy anything. City, rural, or well.',
  },
];

export const services: ServiceItem[] = serviceList.map((service) => ({
  ...service,
  live: true,
}));

export function townHref(name: string): string {
  if (name === 'Sioux Falls') return '/';
  return `/locations/${name.toLowerCase().replace(/\s+/g, '-')}`;
}

/** One entry per town page. List-only towns live in site.ts and must not be added here. */
const TOWN_ENTRIES: { name: string; live: boolean }[] = [
  { name: 'Sioux Falls', live: true },
  { name: 'Brandon', live: true },
  { name: 'Harrisburg', live: true },
  { name: 'Tea', live: true },
  { name: 'Hartford', live: true },
  { name: 'Dell Rapids', live: true },
  { name: 'Canton', live: true },
  { name: 'Lennox', live: true },
];

for (const name of SITE.listOnlyTowns) {
  if (TOWN_ENTRIES.some((town) => town.name === name)) {
    throw new Error(`${name} is list-only and must not have a town page entry`);
  }
}

export const townPages = TOWN_ENTRIES.map((town) => ({
  name: town.name,
  href: townHref(town.name),
  live: town.live,
}));
