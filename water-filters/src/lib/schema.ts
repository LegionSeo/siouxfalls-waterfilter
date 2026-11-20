import { SITE, absoluteUrl } from '../config/site';
import { services } from '../content/services';

const businessId = `${SITE.origin}/#business`;
const websiteId = `${SITE.origin}/#website`;

export function businessNode() {
  const node: Record<string, unknown> = {
    '@type': 'HomeAndConstructionBusiness',
    '@id': businessId,
    name: SITE.name,
    url: SITE.origin,
    telephone: SITE.phoneE164,
    image: absoluteUrl(SITE.ogImage),
    logo: absoluteUrl('/logo.png'),
    description:
      'Whole house water filter, water softener, reverse osmosis and well water system installation and service in Sioux Falls, SD.',
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
      name: 'Water filtration and softening services',
      itemListElement: services.map((service) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: service.name, url: `${SITE.origin}/${service.slug}` },
      })),
    },
  };
  if (SITE.sameAs.length) node.sameAs = SITE.sameAs;
  return node;
}

export function serviceNode(service: { name: string; slug: string; description: string }) {
  return {
    '@type': 'Service',
    '@id': `${SITE.origin}/${service.slug}#service`,
    name: service.name,
    serviceType: service.name,
    description: service.description,
    provider: { '@id': businessId },
    areaServed: { '@type': 'City', name: 'Sioux Falls' },
    url: `${SITE.origin}/${service.slug}`,
  };
}

export function faqNode(items: { q: string; a: string }[]) {
  const plain = (text: string) =>
    text.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\{phone\}/g, SITE.phoneDisplay);
  return {
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: plain(item.a) },
    })),
  };
}

export function breadcrumbNode(items: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
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
