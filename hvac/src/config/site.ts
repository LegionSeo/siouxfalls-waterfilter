/**
 * Renter swappable business details. Every phone number on the site comes from here.
 * The phone is a placeholder until a Quo number is set up for this site.
 * Do not add hours, a license number, reviews or years in business unless they are real.
 */
export const SITE = {
  name: 'Sioux Falls HVAC',
  tagline: 'Heating and cooling for Sioux Falls homes',
  origin: 'https://www.siouxfalls-hvac.com',
  phoneDisplay: '(605) 000-0000',
  phoneE164: '+16050000000',
  city: 'Sioux Falls',
  region: 'SD',
  country: 'US',
  /** Towns with their own page. Slugs match src/content/towns.ts. */
  serviceTowns: ['Sioux Falls', 'Brandon', 'Harrisburg', 'Tea', 'Hartford', 'Dell Rapids'],
  /** Named in the service area list only. */
  nearbyTowns: ['Canton', 'Lennox', 'Crooks', 'Renner', 'Baltic', 'Garretson'],
  /** Add a Google Business Profile or social link only after it exists. */
  sameAs: [] as string[],
  ogImage: '/og-image.png',
} as const;

export const phoneHref = `tel:${SITE.phoneE164}`;

export function canonicalUrl(pathname: string): string {
  let path = pathname.split('?')[0].split('#')[0];
  path = path.replace(/\/index\.html$/, '/').replace(/\.html$/, '');
  if (path === '' || path === '/') return SITE.origin;
  return `${SITE.origin}${path.replace(/\/+$/, '')}`;
}

export function absoluteUrl(path: string): string {
  if (/^https?:\/\//.test(path)) return path;
  return `${SITE.origin}${path.startsWith('/') ? path : `/${path}`}`;
}
