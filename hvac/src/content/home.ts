import type { Faq } from './services';

export const homeFaqs: Faq[] = [
  {
    q: 'What areas do you serve?',
    a: 'Sioux Falls and nearby towns, including Brandon, Harrisburg, Tea, Hartford, Dell Rapids, Canton, Lennox, Crooks, Renner, Baltic and Garretson. Call if you are not sure your home is covered.',
  },
  {
    q: 'How much does furnace or AC repair cost in Sioux Falls?',
    a: 'It depends on what failed. A loose wire costs far less than a new compressor. The tech finds the cause first and tells you the price before any repair starts.',
  },
  {
    q: 'Do HVAC contractors need a license in Sioux Falls?',
    a: 'Yes. The City of Sioux Falls requires a license for any contractor doing mechanical or HVAC work inside city limits. Ask any company you hire for their license.',
  },
  {
    q: 'Do you install heat pumps in Sioux Falls?',
    a: 'Yes. Most heat pumps here are set up as dual fuel, paired with a gas furnace for the coldest days. Cold climate models and ductless mini splits are also options.',
  },
  {
    q: 'How often should my furnace be serviced?',
    a: 'Once a year, ideally in the fall before the first cold snap. Have the AC checked in the spring. Change the filter every one to three months.',
  },
];

export const quickChecks = [
  { title: 'Check the thermostat', text: 'Is it set to HEAT or COOL, a few degrees past room temperature? Swap the batteries if the screen is blank.' },
  { title: 'Look at the filter', text: 'A filter packed with dust can choke airflow and make the system shut itself off.' },
  { title: 'Check the breaker and switch', text: 'Look for a tripped breaker, and make sure the light switch style power switch by the furnace is on.' },
  { title: 'Clear the outdoor unit', text: 'In summer, clear leaves and grass. In winter, keep snow off a heat pump and away from furnace vent pipes.' },
];
