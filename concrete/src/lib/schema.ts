import { SITE, absoluteUrl, canonicalUrl } from '../config/site';
import { SERVICES, type Faq } from '../content/services';
import { TOWNS } from '../content/towns';

export const BUSINESS_ID = `${SITE.origin}/#business`;
export const WEBSITE_ID = `${SITE.origin}/#website`;

function city(name: string) {
  return {
    '@type': 'City',
    name,
    containedInPlace: { '@type': 'State', name: SITE.regionName },
  };
}

export function businessNode() {
  return {
    '@type': 'HomeAndConstructionBusiness',
    '@id': BUSINESS_ID,
    name: SITE.name,
    url: SITE.origin,
    telephone: SITE.phoneE164,
    image: absoluteUrl(SITE.ogImage),
    logo: absoluteUrl('/logo.svg'),
    description:
      'Concrete contractor in Sioux Falls, SD for driveways, patios, sidewalks, garage floors, stamped concrete, foundations, repair, and commercial flatwork.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: SITE.city,
      addressRegion: SITE.region,
      addressCountry: 'US',
    },
    areaServed: [city('Sioux Falls'), ...TOWNS.map((t) => city(t.name))],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Concrete services',
      itemListElement: SERVICES.map((s) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: s.name,
          url: canonicalUrl(`/services/${s.slug}`),
        },
      })),
    },
    ...(SITE.sameAs.length ? { sameAs: SITE.sameAs } : {}),
  };
}

export function websiteNode() {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: SITE.origin,
    name: SITE.name,
    publisher: { '@id': BUSINESS_ID },
    inLanguage: 'en-US',
  };
}

export function breadcrumbNode(items: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: canonicalUrl(item.path),
    })),
  };
}

export function faqNode(faqs: Faq[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function serviceNode(opts: { name: string; path: string; description: string; areas?: string[] }) {
  return {
    '@type': 'Service',
    name: opts.name,
    serviceType: opts.name,
    url: canonicalUrl(opts.path),
    description: opts.description,
    provider: { '@id': BUSINESS_ID },
    areaServed: (opts.areas ?? ['Sioux Falls', ...TOWNS.map((t) => t.name)]).map(city),
  };
}

export function jsonLd(graph: unknown[]): string {
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replace(/</g, '\\u003c');
}
