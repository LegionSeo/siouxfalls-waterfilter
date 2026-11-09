import { SITE, absoluteUrl } from '../config/site';

export interface Guide {
  slug: string;
  /** Full <title>. Must include the city. */
  title: string;
  h1: string;
  description: string;
  /** One line for the guides index card. */
  summary: string;
  datePublished: string;
  dateLabel: string;
  faqs: { q: string; a: string }[];
}

export const guides: Guide[] = [
  {
    slug: 'hard-water-sioux-falls',
    title: 'Hard Water in Sioux Falls: What Your Numbers Mean',
    h1: 'Hard Water in Sioux Falls: What Your Numbers Mean',
    description:
      'How hard is Sioux Falls water? See what the city report says, what grains per gallon means, how to find your own number, and what to do about it.',
    summary: 'What the city report says, what grains per gallon means, and how to find the number at your own tap.',
    datePublished: '2026-11-09',
    dateLabel: 'November 9, 2026',
    faqs: [
      {
        q: 'Is hard water bad for me?',
        a: 'Hard water is not considered a health risk. The main problems are scale, soap, and comfort.',
      },
      {
        q: 'Why does my hardness number change?',
        a: 'Sioux Falls gets water from its own plant and from Lewis & Clark. The two have different hardness, so your number can shift.',
      },
      {
        q: 'Do towns near Sioux Falls have the same water?',
        a: 'Not always. Your supplier may be a town system, a rural water system, or your own well. Check your bill and your annual water report.',
      },
    ],
  },
];

/** BlogPosting and FAQPage nodes, placed in the head of the guide page. */
export function guideSchema(guide: Guide): Record<string, unknown>[] {
  const url = absoluteUrl(`/guides/${guide.slug}`);
  const business = { '@type': 'Organization', '@id': `${SITE.origin}/#business`, name: SITE.name, url: SITE.origin };
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      '@id': `${url}#article`,
      headline: guide.h1,
      description: guide.description,
      url,
      mainEntityOfPage: { '@type': 'WebPage', '@id': url },
      datePublished: guide.datePublished,
      dateModified: guide.datePublished,
      inLanguage: 'en-US',
      author: business,
      publisher: { ...business, logo: { '@type': 'ImageObject', url: absoluteUrl('/logo.png') } },
      spatialCoverage: {
        '@type': 'City',
        name: 'Sioux Falls',
        containedInPlace: { '@type': 'State', name: 'South Dakota' },
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      '@id': `${url}#faq`,
      mainEntity: guide.faqs.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    },
  ];
}
