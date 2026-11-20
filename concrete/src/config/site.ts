/**
 * Business details for the whole site. Swap these when the site is rented.
 *
 * PHONE IS A PLACEHOLDER. (605) 000-0000 must be replaced with the Quo
 * tracking number before launch. Every call button reads from here.
 */
export const SITE = {
  name: 'Sioux Falls Concrete',
  shortName: 'SF Concrete',
  origin: 'https://www.siouxfalls-concrete.com',
  phoneDisplay: '(605) 000-0000',
  phoneE164: '+16050000000',
  phoneHref: 'tel:+16050000000',
  city: 'Sioux Falls',
  region: 'SD',
  regionName: 'South Dakota',
  /** Add a Google Business Profile or social link only after it really exists. */
  sameAs: [] as string[],
  ogImage: '/og-image.png',
  themeColor: '#1D2226',
};

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
