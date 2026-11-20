import { PHONE, PHONE_E164, PHONE_HREF, PHONE_SMS_HREF } from './phone';

/**
 * Renter-swappable business details.
 * The phone number lives in ./phone.ts. Email, towns, and image paths come from here.
 *
 * Leave smsEnabled false until the number can receive texts.
 * Service images are illustrations. Point the paths at real job photos when those exist.
 */

export interface PostalAddress {
  city: string;
  region: string;
  country: string;
}

export interface JobPhoto {
  src: string;
  alt: string;
  width: number;
  height: number;
}

/** Swappable responsive image. Change the paths when a real photo replaces it. */
export interface PhotoSlot {
  alt: string;
  width: number;
  height: number;
  src: string;
  webpSrcset: string;
  avifSrcset: string;
  /** Editor note. Rendered as an HTML comment, not as visible copy. */
  note: string;
}

export interface SiteConfig {
  name: string;
  origin: string;
  phoneDisplay: string;
  phoneE164: string;
  phoneHref: string;
  smsHref: string;
  /** Show sms: links only when the tracking number can receive texts. */
  smsEnabled: boolean;
  email: string;
  /** City and state only. No street address is published. */
  address: PostalAddress;
  serviceTowns: string[];
  listOnlyTowns: string[];
  /** Add a Google or Facebook profile only after it really exists. */
  sameAs: string[];
  /** Dark-surface lockup for the header and footer. */
  logo: string;
  /** Light-surface lockup. */
  logoLight: string;
  /** Droplet mark without the wordmark. */
  logoIcon: string;
  /** Alt text, and the name to show if the logo image does not load. */
  logoText: string;
  ogImage: string;
  heroPhoto: PhotoSlot;
  /** Card images keyed by service path. */
  servicePhotos: Record<string, PhotoSlot>;
  /** Real job photos for the proof block. Empty keeps that block hidden. */
  jobPhotos: JobPhoto[];
  /** HTTPS action for the request form. Mail is sent by formsubmit.co, not this site. */
  formEndpoint: string;
  /** Page FormSubmit returns to when the form posts without JavaScript. */
  thankYouUrl: string;
  /** Palette id. */
  theme: string;
  /** GA4 measurement id, such as G-ABC123. Empty loads no tag. Ignored when gtmId is set. */
  ga4Id: string;
  /** GTM container id, such as GTM-ABC123. Empty loads no tag. */
  gtmId: string;
}

function art(base: string, alt: string): PhotoSlot {
  return {
    alt,
    width: 1280,
    height: 720,
    src: `/images/${base}-1280.webp`,
    webpSrcset: `/images/${base}-800.webp 800w, /images/${base}-1280.webp 1280w`,
    avifSrcset: `/images/${base}-800.avif 800w, /images/${base}-1280.avif 1280w`,
    note: 'Illustration. Replace these files, or this slot, with a real job photo when one exists.',
  };
}

const SERVICE_EMAIL = 'service@siouxfallswaterfilter.com';
const ORIGIN = 'https://www.siouxfallswaterfilter.com';

export const SITE: SiteConfig = {
  name: 'Sioux Falls Water Filtration',
  origin: ORIGIN,
  phoneDisplay: PHONE,
  phoneE164: PHONE_E164,
  phoneHref: PHONE_HREF,
  smsHref: PHONE_SMS_HREF,
  smsEnabled: false,
  email: SERVICE_EMAIL,
  address: {
    city: 'Sioux Falls',
    region: 'SD',
    country: 'US',
  },
  serviceTowns: [
    'Sioux Falls',
    'Brandon',
    'Harrisburg',
    'Tea',
    'Hartford',
    'Dell Rapids',
    'Canton',
    'Lennox',
  ],
  listOnlyTowns: ['Crooks', 'Renner', 'Baltic'],
  sameAs: [],
  logo: '/logo-white.svg',
  logoLight: '/logo.svg',
  logoIcon: '/logo-icon.svg',
  logoText: 'Sioux Falls Water Filtration',
  ogImage: '/brand/og-image.jpg',
  heroPhoto: art('hero-water', 'Illustration of a kitchen faucet running clear water beside a large water drop'),
  servicePhotos: {
    '/services/water-softeners': art('service-softener', 'Illustration of a water softener with a resin tank and a salt tank'),
    '/services/whole-house-water-filtration': art('service-whole-house', 'Illustration of two filter housings on the main water line of a house'),
    '/services/reverse-osmosis-drinking-water': art('service-ro', 'Illustration of a drinking water faucet filling a glass above reverse osmosis filters'),
    '/services/iron-and-sulfur-removal': art('service-iron', 'Illustration of a treatment tank turning rusty water into clear water'),
    '/services/well-water-treatment': art('service-well', 'Illustration of a private well reaching down through the ground to water'),
    '/services/water-testing': art('service-testing', 'Illustration of water samples in test tubes beside a test strip'),
  },
  jobPhotos: [],
  formEndpoint: `https://formsubmit.co/${SERVICE_EMAIL}`,
  thankYouUrl: `${ORIGIN}/thank-you`,
  theme: 'glacier-spring',
  ga4Id: '',
  gtmId: '',
};

const GTM_ID = /^GTM-[A-Z0-9]+$/;
const GA4_ID = /^G-[A-Z0-9]+$/;

/** AJAX endpoint on the same FormSubmit host. HTTPS only, no API key. */
export function leadAjaxEndpoint(): string {
  return `https://formsubmit.co/ajax/${SITE.email}`;
}

/** Which tag to load. GTM wins when both ids are set. Empty or invalid ids load nothing. */
export function activeAnalytics(): { provider: 'gtm' | 'ga4'; id: string } | null {
  const gtmId = SITE.gtmId.trim();
  if (gtmId) return GTM_ID.test(gtmId) ? { provider: 'gtm', id: gtmId } : null;
  const ga4Id = SITE.ga4Id.trim();
  if (ga4Id) return GA4_ID.test(ga4Id) ? { provider: 'ga4', id: ga4Id } : null;
  return null;
}

export function formatAddress(): string {
  return `${SITE.address.city}, ${SITE.address.region}`;
}

export function mapsUrl(): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(formatAddress())}`;
}

/** Absolute canonical URL. Homepage has no trailing slash. */
export function canonicalUrl(pathname: string): string {
  let path = pathname.split('?')[0].split('#')[0];
  // `build.format: 'file'` reports /about.html during the build. Canonicals never carry the extension.
  path = path.replace(/\/index\.html$/, '/').replace(/\.html$/, '');
  if (path === '' || path === '/') return SITE.origin;
  return `${SITE.origin}${path.replace(/\/+$/, '')}`;
}

export function absoluteUrl(path: string): string {
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  return `${SITE.origin}${path.startsWith('/') ? path : `/${path}`}`;
}
