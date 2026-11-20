import { SITE, absoluteUrl } from '../config/site';
import { services } from '../content/services';

const businessId = `${SITE.origin}/#business`;
const websiteId = `${SITE.origin}/#website`;

export function businessNode() {
  const node: Record<string, unknown> = {
    '@type': 'HVACBusiness',
    '@id': businessId,
    name: SITE.name,
    url: SITE.origin,
    telephone: SITE.phoneE164,
    image: absoluteUrl(SITE.ogImage),
    logo: absoluteUrl('/logo.png'),
    description:
      'Furnace repair and installation, AC repair and installation, heat pumps, ductless mini splits and HVAC maintenance in Sioux Falls, SD and nearby towns.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: SITE.city,
      addressRegion: SITE.region,
      addressCountry: SITE.country,
    },
    areaServed: [...SITE.serviceTowns, ...SITE.nearbyTowns].map((name) => ({
      '@type': 'City',
      name,
      containedInPlace: { '@type': 'State', name: 'South Dakota' },
    })),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Heating and cooling services',
      itemListElement: services.map((s) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: s.name, url: `${SITE.origin}/services/${s.slug}` },
      })),
    },
  };
  if (SITE.sameAs.length) node.sameAs = SITE.sameAs;
  return node;
}

export function serviceNode(s: { name: string; slug: string; description: string }, area = 'Sioux Falls') {
  return {
    '@type': 'Service',
    '@id': `${SITE.origin}/services/${s.slug}#service`,
    name: s.name,
    serviceType: s.name,
    description: s.description,
    provider: { '@id': businessId },
    areaServed: { '@type': 'City', name: area },
    url: `${SITE.origin}/services/${s.slug}`,
  };
}

export function faqNode(items: { q: string; a: string }[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
}

export function breadcrumbNode(items: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.path === '/' ? SITE.origin : `${SITE.origin}${item.path}`,
    })),
  };
}

export function pageGraph(page: { url: string; name: string; description: string }, extra: unknown[] = []) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'WebSite', '@id': websiteId, url: SITE.origin, name: SITE.name, publisher: { '@id': businessId } },
      businessNode(),
      {
        '@type': 'WebPage',
        '@id': `${page.url}#webpage`,
        url: page.url,
        name: page.name,
        description: page.description,
        isPartOf: { '@id': websiteId },
        about: { '@id': businessId },
        inLanguage: 'en-US',
      },
      ...extra,
    ],
  };
}

export function jsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}
