import type { Faq } from './services';

export interface Town {
  slug: string;
  name: string;
  county: string;
  title: string;
  description: string;
  h1: string;
  lede: string;
  where: string;
  body: string[];
  /** Services listed first for this town. */
  focus: string[];
  faqs: Faq[];
}

const permitFaq = (town: string): Faq => ({
  q: `Do I need a permit for concrete work in ${town}?`,
  a: `It depends on the job and where it sits. Sidewalks, approaches, and new buildings usually need one. Rules in ${town} come from the city of ${town}, not Sioux Falls. We check before we start and tell you what applies.`,
});

export const TOWNS: Town[] = [
  {
    slug: 'brandon',
    name: 'Brandon',
    county: 'Minnehaha County',
    title: 'Concrete Contractor in Brandon, SD | Sioux Falls Concrete',
    description:
      'Concrete driveways, patios, sidewalks, and garage floors in Brandon, SD. Local crews from Sioux Falls. Call for a quote.',
    h1: 'Concrete contractor in Brandon, SD',
    lede: 'Driveways, patios, and garage slabs for Brandon homes, a short drive east of Sioux Falls.',
    where: 'Brandon sits just east of Sioux Falls along Interstate 90 in Minnehaha County.',
    body: [
      'A lot of Brandon calls are for wider driveways, new patios off the back of the house, and slabs for sheds and detached garages.',
      'We also replace sidewalk panels and front steps that have settled over the years.',
    ],
    focus: ['concrete-driveways', 'concrete-patios', 'garage-floors', 'sidewalks'],
    faqs: [
      permitFaq('Brandon'),
      {
        q: 'How soon can you get to Brandon?',
        a: 'Brandon is in our regular area, so it is scheduled like any Sioux Falls job. Call and we will give you the next open date for a look.',
      },
    ],
  },
  {
    slug: 'harrisburg',
    name: 'Harrisburg',
    county: 'Lincoln County',
    title: 'Concrete Contractor in Harrisburg, SD | Sioux Falls Concrete',
    description:
      'Concrete driveways, patios, and slabs in Harrisburg, SD. New build flatwork, extensions, and repairs. Call for a quote.',
    h1: 'Concrete contractor in Harrisburg, SD',
    lede: 'Flatwork for Harrisburg homes, from first driveways on new builds to patios a few summers later.',
    where: 'Harrisburg is just south of Sioux Falls in Lincoln County.',
    body: [
      'Newer homes often come with a basic driveway and no patio. We add patios, side pads for trailers and campers, and walks to the back yard.',
      'We also widen driveways and pour pads for hot tubs and sheds.',
    ],
    focus: ['concrete-patios', 'concrete-driveways', 'stamped-concrete', 'garage-floors'],
    faqs: [
      permitFaq('Harrisburg'),
      {
        q: 'Can you pour a pad for an RV or trailer?',
        a: 'Yes. Tell us what will park there and how it gets in. We size the thickness and base for the weight.',
      },
    ],
  },
  {
    slug: 'tea',
    name: 'Tea',
    county: 'Lincoln County',
    title: 'Concrete Contractor in Tea, SD | Sioux Falls Concrete',
    description:
      'Concrete driveways, patios, sidewalks, and shop slabs in Tea, SD. Call Sioux Falls Concrete for a quote.',
    h1: 'Concrete contractor in Tea, SD',
    lede: 'Driveways, patios, and shop slabs for Tea, just southwest of Sioux Falls.',
    where: 'Tea sits southwest of Sioux Falls near Interstate 29 in Lincoln County.',
    body: [
      'Tea calls run from new patios and driveway extensions to slabs for shops and pole buildings on the edge of town.',
      'For shop floors, tell us early if you want floor drains or heat tubing so it goes in before the pour.',
    ],
    focus: ['concrete-driveways', 'concrete-patios', 'garage-floors', 'foundations'],
    faqs: [
      permitFaq('Tea'),
      {
        q: 'Do you pour shop floors with in floor heat?',
        a: 'Yes. The heating contractor lays the tubing on the base, and we pour and finish over it. We work out the timing between the two crews.',
      },
    ],
  },
  {
    slug: 'hartford',
    name: 'Hartford',
    county: 'Minnehaha County',
    title: 'Concrete Contractor in Hartford, SD | Sioux Falls Concrete',
    description:
      'Concrete driveways, patios, steps, and repairs in Hartford, SD. Call Sioux Falls Concrete for a quote.',
    h1: 'Concrete contractor in Hartford, SD',
    lede: 'Concrete work for Hartford homes and acreages west of Sioux Falls.',
    where: 'Hartford is west of Sioux Falls off Interstate 90 in Minnehaha County.',
    body: [
      'In and around Hartford we pour driveways, garage and shop slabs, and patios, and we replace old steps and walks.',
      'On acreages, long driveways and big shop slabs are common. We plan truck access and pour order before the day of the pour.',
    ],
    focus: ['concrete-driveways', 'garage-floors', 'sidewalks', 'concrete-repair'],
    faqs: [
      permitFaq('Hartford'),
      {
        q: 'Do you work on acreages outside town?',
        a: 'Yes. Rural sites may fall under county rules instead of city rules. Tell us the address and we will sort out which applies.',
      },
    ],
  },
  {
    slug: 'dell-rapids',
    name: 'Dell Rapids',
    county: 'Minnehaha County',
    title: 'Concrete Contractor in Dell Rapids, SD | Sioux Falls Concrete',
    description:
      'Concrete driveways, sidewalks, steps, and patios in Dell Rapids, SD. Repairs and replacement for older homes. Call for a quote.',
    h1: 'Concrete contractor in Dell Rapids, SD',
    lede: 'Driveways, walks, and steps for Dell Rapids, north of Sioux Falls on the Big Sioux River.',
    where: 'Dell Rapids is north of Sioux Falls off Interstate 29 in Minnehaha County.',
    body: [
      'Dell Rapids has many older homes. That means a lot of tired front steps, cracked walks, and single car driveways ready for an upgrade.',
      'We replace what is failing and match new work to the house so it looks like it belongs.',
    ],
    focus: ['sidewalks', 'concrete-repair', 'concrete-driveways', 'concrete-patios'],
    faqs: [
      permitFaq('Dell Rapids'),
      {
        q: 'Can you replace just my front steps?',
        a: 'Yes. We remove the old steps, check what is under them, and pour new ones with even risers and a landing where it fits.',
      },
    ],
  },
];

export function townBySlug(slug: string): Town | undefined {
  return TOWNS.find((t) => t.slug === slug);
}

/** Towns also served, listed by name only. */
export const ALSO_SERVED = ['Canton', 'Lennox', 'Crooks', 'Renner', 'Baltic', 'Garretson'];
