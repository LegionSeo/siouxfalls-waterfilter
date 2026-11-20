import { joinNames, townPages } from '../config/catalog';
import { SITE } from '../config/site';
import { HARD_WATER } from '../config/water';

export interface FaqItem {
  question: string;
  paragraphs: string[];
}

/** Visible FAQ copy. Schema uses the same strings. */
export const homeFaqs: FaqItem[] = [
  {
    question: 'How hard is the water in Sioux Falls?',
    paragraphs: [
      `Very hard. The City of Sioux Falls ${HARD_WATER.reportYear} water report lists about ${HARD_WATER.cityGpg} grains per gallon for water from the city plant and about ${HARD_WATER.lewisClarkGpg} grains per gallon for Lewis & Clark water.`,
      'The city uses both sources, so the number at your tap can change.',
    ],
  },
  {
    question: 'Do I need a water softener in Sioux Falls?',
    paragraphs: [
      'A softener is not a safety item. It is about your home. Scale builds up in your water heater, your faucets, and your appliances. Many homes here choose a softener to protect them and to make soap work better.',
    ],
  },
  {
    question: 'Is Sioux Falls tap water safe to drink?',
    paragraphs: [
      `The city tests its water and publishes the results. Its report says no health based drinking water violations were recorded in ${HARD_WATER.reportYear}. Hardness is mostly a question of scale, soap, and comfort.`,
    ],
  },
  {
    question: 'What is the difference between a softener and a filter?',
    paragraphs: [
      'A softener takes out the minerals that make water hard. A filter targets things like chlorine taste, odor, and sediment. They do different jobs, and many homes use both.',
    ],
  },
  {
    question: 'What does a water softener cost?',
    paragraphs: [
      'We do not list one price, because it depends on your water, your household, and your plumbing. Call and we will talk through what your home needs.',
    ],
  },
  {
    question: 'Can you help if I am on a private well?',
    paragraphs: [
      'Yes. Wells can carry hardness, iron, sulfur, and sediment. Since nobody tests a private well but you, we suggest starting with a water test.',
    ],
  },
  {
    question: 'Which towns around Sioux Falls do you serve?',
    paragraphs: [
      `We serve ${joinNames(townPages.map((town) => town.name))}, South Dakota. We also take calls from ${joinNames(SITE.listOnlyTowns)}.`,
    ],
  },
  {
    question: 'What should I tell you when I call?',
    paragraphs: [
      'Tell us your town, whether you are on city water, rural water, or a well, and what you have noticed. If you have a softener already, tell us how old it is.',
    ],
  },
];

export function faqAnswerText(item: FaqItem): string {
  return item.paragraphs.join(' ');
}
