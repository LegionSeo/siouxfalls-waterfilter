import { BRANDON, HARRISBURG, LENNOX } from './water';

export interface Town {
  slug: string;
  name: string;
  title: string;
  description: string;
  intro: string;
  waterHeading: string;
  water: string;
  source?: { name: string; url: string };
  fitHeading: string;
  fit: { service: string; why: string }[];
  faqs: { q: string; a: string }[];
}

export const towns: Town[] = [
  {
    slug: 'brandon',
    name: 'Brandon',
    title: 'Water Softeners and Filters Brandon, SD | Whole House Systems',
    description: `Water softener and whole house filter installation in Brandon, SD. Brandon now softens city water to about ${BRANDON.afterGpg} grains. We help you set and size your system.`,
    intro:
      'Brandon homeowners got a big change in their water in 2025. The city added reverse osmosis treatment at its water plant, and that cut the hardness of city water a lot. If you live in Brandon, your old softener settings may now be wrong. We can test your water, reset your softener, and tell you if a whole house filter still makes sense.',
    waterHeading: 'What changed in Brandon water',
    water: `An October 2025 flyer from the City of Brandon says the new reverse osmosis process cut the minerals in city water from about ${BRANDON.beforeGpg} grains per gallon to about ${BRANDON.afterGpg}. The city tells residents to set their softeners to ${BRANDON.afterGpg} grains per gallon. Water at ${BRANDON.afterGpg} grains is still hard, so most homes still want a softener. It just does not have to work as hard.`,
    source: BRANDON,
    fitHeading: 'What most Brandon homes need',
    fit: [
      { service: 'water-filter-service', why: 'Reset an existing softener to the new hardness so it stops wasting salt and water.' },
      { service: 'water-softener-installation', why: 'Size a new softener for 12 grain water instead of 24.' },
      { service: 'reverse-osmosis-installation', why: 'Drinking water from its own faucet at the kitchen sink.' },
    ],
    faqs: [
      {
        q: 'Do I still need a softener in Brandon?',
        a: `Most homes do. The city says its water now runs about ${BRANDON.afterGpg} grains per gallon. That is still in the hard range, so you will still see scale without one.`,
      },
      {
        q: 'Should I change my softener setting?',
        a: `Yes, if it was set for the old water. The city says to set softeners to ${BRANDON.afterGpg}. A setting that is too high wastes salt and water.`,
      },
      {
        q: 'Do you serve homes outside Brandon city limits?',
        a: 'Yes. Homes on rural water or a private well around Brandon are welcome. Your water will be different from city water, so we test it first.',
      },
    ],
  },
  {
    slug: 'harrisburg',
    name: 'Harrisburg',
    title: 'Whole House Water Filters Harrisburg, SD | Softeners and RO',
    description:
      'Whole house water filters, softeners and reverse osmosis for Harrisburg, SD homes on Lewis & Clark water. Call for a free in home water test.',
    intro:
      'Harrisburg has grown fast, and many homes are newer builds. A newer home is the easiest place to add a whole house filter or softener, because the plumbing is often ready for it. We test your water, then install a system that fits your home and your family.',
    waterHeading: 'Where Harrisburg water comes from',
    water:
      'The City of Harrisburg 2025 drinking water report says the city buys all of its water from the Lewis & Clark Regional Water System. Lewis & Clark water is treated and disinfected before it reaches town. Many homes still add a filter for taste and a softener for scale. A test at your tap shows the numbers for your home.',
    source: HARRISBURG,
    fitHeading: 'What most Harrisburg homes need',
    fit: [
      { service: 'whole-house-water-filter', why: 'Takes out chlorine taste and smell at every tap.' },
      { service: 'softener-and-filter-combo', why: 'One install for filtered and softened water in a new build.' },
      { service: 'free-water-test', why: 'See your real hardness before you buy anything.' },
    ],
    faqs: [
      {
        q: 'Is Harrisburg water hard?',
        a: 'The city report we read does not list a hardness number. Lewis & Clark water in Sioux Falls tests at about 10 grains per gallon, which is hard. A free test at your tap gives you the number for your home.',
      },
      {
        q: 'My new house has a softener loop. What is that?',
        a: 'It is a pair of pipes near the water heater where a softener can connect. It makes the install faster and cheaper.',
      },
    ],
  },
  {
    slug: 'tea',
    name: 'Tea',
    title: 'Water Softener and Filter Installation Tea, SD',
    description:
      'Water softener, whole house filter and reverse osmosis installation in Tea, SD. Free in home water test. Call to book a visit.',
    intro:
      'Tea homeowners call us for the same things as Sioux Falls: spots, scale and a taste they do not love. Tea is right next door, so we can usually set up a visit quickly. We start with a free water test at your tap, then show you the options.',
    waterHeading: 'Know your water in Tea',
    water:
      'Your water bill tells you who supplies your water. Every public water system in South Dakota publishes a yearly drinking water report, and many list hardness. If you live outside town on a private well, there is no report, so a test is the only way to know. Either way, we test at your tap before we suggest anything.',
    fitHeading: 'What most Tea homes need',
    fit: [
      { service: 'free-water-test', why: 'Find out your hardness and chlorine levels first.' },
      { service: 'water-softener-installation', why: 'Stop scale on fixtures and in the water heater.' },
      { service: 'reverse-osmosis-installation', why: 'Better drinking water and ice at the kitchen sink.' },
    ],
    faqs: [
      {
        q: 'How do I find my water report?',
        a: 'Look at your water bill for the name of your supplier. Then search that name with "annual drinking water report". The South Dakota DANR also posts many reports online.',
      },
      {
        q: 'Do you install in new construction?',
        a: 'Yes. If you are building in or near Tea, it is easiest to plan the softener and filter spot before the basement is finished.',
      },
    ],
  },
  {
    slug: 'lennox',
    name: 'Lennox',
    title: 'Water Filters and Softeners Lennox, SD | Lewis & Clark',
    description:
      'Water filters, softeners and reverse osmosis for Lennox, SD. Lennox city water comes from Lewis & Clark. We help you pick what your home really needs.',
    intro:
      'Lennox gets its city water from the Lewis & Clark Regional Water System. That water is softened before it reaches town, so many Lennox homes need less than you might think. We test first and will tell you plainly if your home does not need a softener.',
    waterHeading: 'Lennox city water',
    water: `A 2024 article from the City of Lennox says the city connected to Lewis & Clark in ${LENNOX.connectedYear} and now uses it as its only source of drinking water. The city stopped using its old wells and treatment plant. The article says homes now get pre softened water. Some homes still want a filter for chlorine taste or a reverse osmosis tap for drinking water.`,
    source: LENNOX,
    fitHeading: 'What Lennox homes ask for',
    fit: [
      { service: 'free-water-test', why: 'Check whether a softener is still worth it on pre softened water.' },
      { service: 'whole-house-water-filter', why: 'Takes out chlorine taste and smell at every tap.' },
      { service: 'reverse-osmosis-installation', why: 'Drinking water from its own faucet.' },
    ],
    faqs: [
      {
        q: 'Do I need a softener in Lennox?',
        a: 'Maybe not. The city says its water arrives pre softened. Lewis & Clark water in Sioux Falls tests at about 10 grains per gallon, so some homes still want a softener. A free test tells you.',
      },
      {
        q: 'My old softener is still running. Should I turn it off?',
        a: 'Do not just unplug it. Test your water first. If you keep it, we can reset it for the softer water so it uses less salt.',
      },
    ],
  },
  {
    slug: 'hartford',
    name: 'Hartford',
    title: 'Whole House Water Filter and Softener Hartford, SD',
    description:
      'Whole house water filters, softeners and well water systems for Hartford, SD and nearby acreages. Free in home water test. Call to book.',
    intro:
      'Hartford sits west of Sioux Falls with a mix of town lots and acreages. Some homes are on a public water system and some are on private wells. The right filter depends on which one you have, so we always test first.',
    waterHeading: 'Town water or a well',
    water:
      'Check your water bill to see who supplies your water, then look up that supplier yearly drinking water report. If you get no bill, you are likely on a private well. Wells can bring iron, a sulfur smell and hard water, and nobody treats them but you. We test well water for the basics and point you to a certified lab for bacteria and nitrates.',
    fitHeading: 'What Hartford homes ask for',
    fit: [
      { service: 'well-water-filtration', why: 'Iron filters and smell treatment for acreage wells.' },
      { service: 'softener-and-filter-combo', why: 'Soft water and better taste in town homes.' },
      { service: 'water-filter-service', why: 'Repair or tune up the system you already have.' },
    ],
    faqs: [
      {
        q: 'Can you treat iron from my well?',
        a: 'Yes. Iron filters go ahead of the softener so the softener resin does not get fouled. We test the iron level first so the filter is sized right.',
      },
      {
        q: 'Do you come out to acreages?',
        a: 'Yes. Tell us your road and how far you are from town when you call.',
      },
    ],
  },
];

export function townBySlug(slug: string | undefined) {
  return towns.find((town) => town.slug === slug);
}
