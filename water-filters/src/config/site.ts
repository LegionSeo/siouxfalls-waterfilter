/**
 * Business details for Sioux Falls Water Filters.
 * Every phone link, schema node and call button reads from here.
 *
 * PHONE: placeholder until a real tracking line exists. Change PHONE only.
 * FREE_TEST: turn off if the company that rents this site does not offer a free in home water test.
 */

const PHONE = '(605) 000-0000';
const digits = PHONE.replace(/\D/g, '');

export const SITE = {
  name: 'Sioux Falls Water Filters',
  shortName: 'SF Water Filters',
  origin: 'https://www.siouxfallswaterfilter.com',
  phoneDisplay: PHONE,
  phoneE164: `+1${digits}`,
  phoneHref: `tel:+1${digits}`,
  /** True while PHONE is the placeholder. Shows a small notice on the contact page. */
  phoneIsPlaceholder: PHONE === '(605) 000-0000',
  freeTest: true,
  city: 'Sioux Falls',
  region: 'SD',
  country: 'US',
  hoursLabel: 'Call any day to set up a visit',
  serviceTowns: ['Sioux Falls', 'Brandon', 'Harrisburg', 'Tea', 'Lennox', 'Hartford'],
  nearbyTowns: ['Dell Rapids', 'Canton', 'Crooks', 'Renner', 'Worthing'],
  /** Add a Google or Facebook profile only after it really exists. */
  sameAs: [] as string[],
  ogImage: '/og-image.png',
} as const;

export function canonicalUrl(pathname: string): string {
  let path = pathname.split('?')[0].split('#')[0];
  path = path.replace(/\/index\.html$/, '/').replace(/\.html$/, '').replace(/\/+$/, '');
  return path ? `${SITE.origin}${path}` : SITE.origin;
}

export function absoluteUrl(path: string): string {
  if (/^https?:\/\//.test(path)) return path;
  return `${SITE.origin}${path.startsWith('/') ? path : `/${path}`}`;
}
