import type { Faq } from './services';

/**
 * Town facts come from the pages listed in town-sources.md.
 * Do not add facts that are not in a source there.
 */
export interface Town {
  slug: string;
  name: string;
  county: string;
  title: string;
  description: string;
  h1: string;
  lead: string;
  facts: { label: string; value: string }[];
  body: { title: string; text: string[] }[];
  faqs: Faq[];
  /** Services to feature first on this page. */
  featured: string[];
}

export const towns: Town[] = [
  {
    slug: 'brandon',
    name: 'Brandon',
    county: 'Minnehaha County',
    title: 'HVAC Service in Brandon, SD | Furnace and AC Repair',
    description:
      'Furnace repair, AC repair and new HVAC systems in Brandon, SD. Local heating and cooling help for Brandon Valley homes, five miles east of Sioux Falls.',
    h1: 'Furnace and AC service in Brandon, SD',
    lead: 'Brandon sits about five miles east of Sioux Falls, along the Big Sioux River and Split Rock Creek. Call for furnace repair, AC repair, tune ups and new systems anywhere in town.',
    facts: [
      { label: 'County', value: 'Minnehaha' },
      { label: 'ZIP code', value: '57005' },
      { label: 'Population', value: '11,048 (2020 census)' },
      { label: 'From Sioux Falls', value: 'About 5 miles east' },
    ],
    body: [
      {
        title: 'Heating and cooling in Brandon',
        text: [
          'Brandon gets the same long winters and humid summers as Sioux Falls. A furnace that fails in January needs quick help, and an AC that struggles in July makes the house hard to sleep in.',
          'Techs cover all of Brandon and the Brandon Valley area, including homes on the east side of Sioux Falls in the Brandon Valley School District.',
        ],
      },
      {
        title: 'Permits in Brandon',
        text: [
          'Brandon has its own Planning and Inspection Department at 304 Main Ave. Ask your installer to confirm the permit for a new furnace, AC or heat pump before work starts.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Do you serve all of Brandon?',
        a: 'Yes. Call for service anywhere in Brandon, in ZIP code 57005, and in the nearby parts of the Brandon Valley.',
      },
      {
        q: 'Who handles building permits in Brandon?',
        a: 'The City of Brandon Planning and Inspection Department, at 304 Main Ave. Your installer should know what the job needs.',
      },
    ],
    featured: ['furnace-repair', 'ac-repair', 'furnace-installation', 'hvac-maintenance'],
  },
  {
    slug: 'harrisburg',
    name: 'Harrisburg',
    county: 'Lincoln County',
    title: 'HVAC Service in Harrisburg, SD | Furnace and AC Repair',
    description:
      'Furnace repair, AC repair, heat pumps and new HVAC systems in Harrisburg, SD. Heating and cooling help just south of Sioux Falls.',
    h1: 'Furnace and AC service in Harrisburg, SD',
    lead: 'Harrisburg sits just south of Sioux Falls in Lincoln County, about 2.7 miles from the city edge. Call for furnace repair, AC repair, heat pumps and new systems.',
    facts: [
      { label: 'County', value: 'Lincoln' },
      { label: 'ZIP code', value: '57032' },
      { label: 'Population', value: '6,732 in 2020, about 10,203 in 2024' },
      { label: 'Main road', value: '273rd Street to I-29 Exit 71' },
    ],
    body: [
      {
        title: 'A fast growing town',
        text: [
          'The Census Bureau estimate for Harrisburg went from 6,732 people in 2020 to about 10,203 in 2024. That means a lot of new homes with new furnaces and AC units.',
          'A new home still needs care. Change the filter, book a yearly tune up, and keep the builder warranty paperwork for the furnace and AC in a safe place.',
        ],
      },
      {
        title: 'Getting to you',
        text: [
          '273rd Street is the main east and west road into Harrisburg and meets I-29 at Exit 71. Techs come from the Sioux Falls area and cover the whole town, including the Harrisburg School District homes inside Sioux Falls.',
        ],
      },
    ],
    faqs: [
      {
        q: 'My home in Harrisburg is new. Does it still need a tune up?',
        a: 'Yes. New systems can have setup problems that show up in the first year or two, and many warranties ask for yearly maintenance.',
      },
      {
        q: 'Do you serve Harrisburg School District homes in Sioux Falls?',
        a: 'Yes. Call for service in Harrisburg and the nearby parts of south Sioux Falls.',
      },
    ],
    featured: ['hvac-maintenance', 'ac-repair', 'furnace-repair', 'heat-pumps'],
  },
  {
    slug: 'tea',
    name: 'Tea',
    county: 'Lincoln County',
    title: 'HVAC Service in Tea, SD | Furnace and AC Repair',
    description:
      'Furnace repair, AC repair and new heating and cooling systems in Tea, SD. Local HVAC help for Tea Area homes near I-29 Exit 73.',
    h1: 'Furnace and AC service in Tea, SD',
    lead: 'Tea is a Lincoln County town just southwest of Sioux Falls, off I-29 at Exit 73. Call for furnace repair, AC repair, tune ups and new systems.',
    facts: [
      { label: 'County', value: 'Lincoln' },
      { label: 'ZIP code', value: '57064' },
      { label: 'Population', value: '5,598 in 2020, about 7,699 in 2024' },
      { label: 'Highway', value: 'I-29 Exit 73 at 271st Street' },
    ],
    body: [
      {
        title: 'Heating and cooling in Tea',
        text: [
          'Tea was laid out in 1894, and it has grown fast in recent years. The Census Bureau estimate went from 5,598 people in 2020 to about 7,699 in 2024.',
          'Whether your home is new or decades old, the furnace and AC face the same long winters and humid summers as the rest of the Sioux Falls area.',
        ],
      },
      {
        title: 'Getting to you',
        text: [
          'Techs reach Tea from I-29 at Exit 73 and cover the whole town and the nearby Tea Area School District homes.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Do you serve all of Tea?',
        a: 'Yes. Call for service anywhere in Tea, in ZIP code 57064, and nearby.',
      },
      {
        q: 'When should I book a furnace tune up in Tea?',
        a: 'Fall is best, before the first real cold snap. Book the AC check in the spring.',
      },
    ],
    featured: ['furnace-repair', 'ac-repair', 'ac-installation', 'hvac-maintenance'],
  },
  {
    slug: 'hartford',
    name: 'Hartford',
    county: 'Minnehaha County',
    title: 'HVAC Service in Hartford, SD | Furnace and AC Repair',
    description:
      'Furnace repair, AC repair, mini splits and new HVAC systems in Hartford, SD. Heating and cooling help about 10 miles west of Sioux Falls.',
    h1: 'Furnace and AC service in Hartford, SD',
    lead: 'Hartford is about 10 miles west of Sioux Falls on SD Highway 38. Call for furnace repair, AC repair, mini splits and new systems.',
    facts: [
      { label: 'County', value: 'Minnehaha' },
      { label: 'ZIP code', value: '57033' },
      { label: 'Population', value: '3,354 (2020 census)' },
      { label: 'Highway', value: 'SD 38, I-90 Exit 390' },
    ],
    body: [
      {
        title: 'Heating and cooling in Hartford',
        text: [
          'Hartford was first named Oaksville in 1878 and took the name Hartford in 1881. Today it is home to the West Central School District.',
          'If you have a garage or shop that needs heat, a ductless mini split can heat and cool it without tying into the home system.',
        ],
      },
      {
        title: 'Getting to you',
        text: [
          'SD Highway 38 runs through Hartford and meets I-90 at Exit 390, just east of town. Techs cover Hartford and the nearby West Central area.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Can you heat my shop or garage in Hartford?',
        a: 'Yes. A cold climate ductless mini split is a common choice for a garage or shop. Insulating the space first helps a lot.',
      },
      {
        q: 'Do you serve homes outside Hartford city limits?',
        a: 'Call and ask. Techs cover Hartford and much of the nearby West Central area.',
      },
    ],
    featured: ['furnace-repair', 'ductless-mini-splits', 'ac-repair', 'heat-pumps'],
  },
  {
    slug: 'dell-rapids',
    name: 'Dell Rapids',
    county: 'Minnehaha County',
    title: 'HVAC Service in Dell Rapids, SD | Furnace and AC Repair',
    description:
      'Furnace repair, AC repair and new heating and cooling systems in Dell Rapids, SD. HVAC help about 15 miles north of Sioux Falls on the I-29 corridor.',
    h1: 'Furnace and AC service in Dell Rapids, SD',
    lead: 'Dell Rapids sits on the Big Sioux River about 15 miles north of Sioux Falls. Call for furnace repair, AC repair, tune ups and new systems.',
    facts: [
      { label: 'County', value: 'Minnehaha' },
      { label: 'From Sioux Falls', value: 'About 15 miles north' },
      { label: 'Highways', value: 'I-29 and SD 115' },
      { label: 'Schools', value: 'Dell Rapids School District' },
    ],
    body: [
      {
        title: 'Heating and cooling in Dell Rapids',
        text: [
          'Dell Rapids is a bedroom community for Sioux Falls, so many people here commute down I-29 every day. Older houses often have older furnaces and ductwork, and a tune up can show what is worth fixing and what is close to the end.',
          'If your furnace is old and needs repairs most winters, ask for the cost of a repair and the cost of a new system so you can compare.',
        ],
      },
      {
        title: 'Getting to you',
        text: [
          'Downtown Dell Rapids is about three miles from I-29 on SD Highway 115. Techs come up the I-29 corridor from the Sioux Falls area.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Do you come out to Dell Rapids?',
        a: 'Yes. Call for service in Dell Rapids and the nearby area along I-29.',
      },
      {
        q: 'Should I replace my old furnace or keep repairing it?',
        a: 'If repairs come every winter or the furnace has a cracked heat exchanger, replacement often makes more sense. Ask for both prices.',
      },
    ],
    featured: ['furnace-repair', 'furnace-installation', 'ac-repair', 'hvac-maintenance'],
  },
];

export const townBySlug = (slug: string) => towns.find((t) => t.slug === slug);
