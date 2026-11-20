import { SF_REPORT, SF_LEWIS_CLARK_SHARE } from './water';

export interface Service {
  slug: string;
  /** Short name for menus and cards. */
  name: string;
  icon: IconName;
  /** One line for cards. */
  card: string;
  h1: string;
  title: string;
  description: string;
  /** Opening answer. {phone} becomes the call link. */
  intro: string;
  fixesHeading: string;
  fixes: string[];
  stepsHeading: string;
  steps: { title: string; text: string }[];
  priceHeading: string;
  price: string[];
  localHeading: string;
  local: string;
  faqs: { q: string; a: string }[];
  related: string[];
}

export type IconName =
  | 'house'
  | 'drop'
  | 'layers'
  | 'glass'
  | 'well'
  | 'test'
  | 'wrench'
  | 'phone'
  | 'check'
  | 'pin'
  | 'calc';

const sf = SF_REPORT;

export const services: Service[] = [
  {
    slug: 'whole-house-water-filter',
    name: 'Whole House Water Filters',
    icon: 'house',
    card: 'One system on your main line. Every tap, shower and appliance gets filtered water.',
    h1: 'Whole House Water Filter Installation in Sioux Falls',
    title: 'Whole House Water Filter Installation Sioux Falls, SD',
    description:
      'Whole house water filter installation for Sioux Falls homes. We test your water, pick the right system, and install it on your main line. Call today.',
    intro:
      'A whole house water filter sits where water enters your home. It cleans the water before it reaches any tap, shower or appliance. In Sioux Falls, most homeowners want it for one reason: the chlorine taste and smell. We test your water, show you what a filter will fix, and install it in one visit. Call {phone} to set it up.',
    fixesHeading: 'What a whole house filter fixes',
    fixes: [
      'Chlorine taste and smell at every tap, not just the kitchen.',
      'Dry skin and hair after a shower in treated water.',
      'Sand, grit and rust flakes that clog faucet screens.',
      'Musty or earthy tastes that show up at times of the year.',
      'Some chemicals, when the system uses the right media for them.',
    ],
    stepsHeading: 'How the install goes',
    steps: [
      { title: 'Test first', text: 'We check your water at the tap so the system fits what is really in it.' },
      { title: 'Pick the system', text: 'We show you two or three options and what each one fixes. You choose.' },
      { title: 'Install on the main line', text: 'We add the filter near your water meter, with a bypass valve so you can shut it off for service.' },
      { title: 'Show you the upkeep', text: 'You learn when to change cartridges or when the tank media gets replaced.' },
    ],
    priceHeading: 'What changes the price',
    price: [
      'Cartridge housings cost less up front. Large tank systems cost more but need less upkeep.',
      'Homes with more bathrooms need a system that can keep up with flow.',
      'Space near the meter matters. Tight spots can need extra plumbing.',
      'Adding a softener at the same time often saves on labor. See [softener and filter combos](/softener-and-filter-combo).',
    ],
    localHeading: 'Why Sioux Falls homes add one',
    local: `The city disinfects its water with chlorine. Its ${sf.year} report lists an average total chlorine level of ${sf.chlorinePpm} parts per million. That is within the safe limit, and it keeps the water safe in the pipes. But many people do not like the taste or smell. A whole house carbon filter takes it out at every tap. Note that a filter does not soften water. Sioux Falls water is also hard, so many homes pair the two.`,
    faqs: [
      {
        q: 'Is a whole house filter the same as a water softener?',
        a: 'No. A filter takes out things like chlorine, sediment and odors. A softener takes out the calcium and magnesium that make water hard. Sioux Falls water needs both jobs done, so many homes get a combo system.',
      },
      {
        q: 'How long does a whole house filter last?',
        a: 'It depends on the type. Cartridge filters need new cartridges every few months to a year. Large carbon tanks can go several years before the media is replaced. We will tell you the schedule for the system you pick.',
      },
      {
        q: 'Will it lower my water pressure?',
        a: 'A filter sized for your home should not cause a big drop. Pressure loss usually means the system is too small or a cartridge is clogged. We size it to your flow so this does not happen.',
      },
      {
        q: 'Do I still need a drinking water filter?',
        a: 'Many people still want [reverse osmosis](/reverse-osmosis-installation) at the kitchen sink. A whole house filter improves taste. Reverse osmosis takes out far more for the water you drink and cook with.',
      },
    ],
    related: ['softener-and-filter-combo', 'water-softener-installation', 'free-water-test'],
  },
  {
    slug: 'water-softener-installation',
    name: 'Water Softeners',
    icon: 'drop',
    card: 'Stops scale, spots and crusty faucets. Sized to your water and your family.',
    h1: 'Water Softener Installation in Sioux Falls',
    title: 'Water Softener Installation Sioux Falls, SD | New and Replacement',
    description: `Water softener installation in Sioux Falls. City water is about ${sf.plantGpg} grains per gallon at the city plant. We size, install and set your softener. Call today.`,
    intro: `Sioux Falls has hard water. The city lists about ${sf.plantGpg} grains per gallon for water from its plant and about ${sf.lewisClarkGpg} for Lewis & Clark water. A softener takes out the minerals that leave scale on everything. We size the softener to your home, install it, and set it for your water. Call {phone} for a new softener or a replacement.`,
    fixesHeading: 'Signs you need a softener',
    fixes: [
      'White crust on faucets, shower heads and the dishwasher.',
      'Spots on glasses and shower doors that will not wipe off.',
      'Soap and shampoo that do not lather well.',
      'A water heater that pops or rumbles.',
      'Stiff towels and faded clothes.',
      'An old softener that runs out of soft water before the day is over.',
    ],
    stepsHeading: 'How the install goes',
    steps: [
      { title: 'Check your hardness', text: 'We test the water at your tap. Your number may differ from the city average.' },
      { title: 'Size the unit', text: 'We match the softener to your hardness, your household and your water use.' },
      { title: 'Install and set it', text: 'We connect it to your softener loop or plumb one in, then set the hardness and regen schedule.' },
      { title: 'Haul the old one', text: 'Replacing a softener? We take the old unit out of your way.' },
    ],
    priceHeading: 'What changes the price',
    price: [
      'Grain capacity. Bigger families and harder water need a larger unit.',
      'Whether your home already has a softener loop near the water heater.',
      'Metered softeners cost a little more but use less salt and water.',
      'Adding filtration or a drinking water system in the same visit.',
    ],
    localHeading: 'Sioux Falls water changes',
    local: `Sioux Falls buys about ${SF_LEWIS_CLARK_SHARE} percent of its water from Lewis & Clark and treats the rest at its own plant. The two have different hardness, so the water at your tap can shift. A softener with a meter handles that well. Set it to the number from a test at your own tap, or use the city setting from its yearly report.`,
    faqs: [
      {
        q: 'What should I set my softener to in Sioux Falls?',
        a: `The city's ${sf.year} report lists a softener setting of ${sf.plantGpg} for water from its plant and ${sf.lewisClarkGpg} for Lewis & Clark water. A test at your tap tells you where your home lands. If you also have iron, the setting goes up.`,
      },
      {
        q: 'What size water softener do I need?',
        a: 'A common rule is people times 75 gallons a day times your hardness. That gives the grains the softener must remove each day. Try our [softener size calculator](/softener-size-calculator), then call us to confirm.',
      },
      {
        q: 'Does softened water have salt in it?',
        a: 'A salt softener adds a small amount of sodium to the water. If you watch your sodium, ask your doctor. Many homes keep a reverse osmosis tap in the kitchen for drinking.',
      },
      {
        q: 'How long does a water softener last?',
        a: 'Many last 10 to 15 years with good care. Hard water and iron wear the resin faster. Regular salt and a yearly check help it last.',
      },
    ],
    related: ['softener-and-filter-combo', 'water-filter-service', 'reverse-osmosis-installation'],
  },
  {
    slug: 'softener-and-filter-combo',
    name: 'Softener and Filter Combos',
    icon: 'layers',
    card: 'Soft water and no chlorine taste. One install handles both jobs.',
    h1: 'Water Softener and Filter Combo Systems in Sioux Falls',
    title: 'Water Softener and Filter Combo Sioux Falls, SD | Whole Home',
    description:
      'Whole home water softener and filter combo systems for Sioux Falls homes. Soft water and no chlorine taste at every tap. Free water test. Call today.',
    intro:
      'Sioux Falls water has two common complaints: it is hard, and it tastes like chlorine. A combo system fixes both. A carbon filter takes out the chlorine, and a softener takes out the hardness. They are installed together on your main line, so every tap in the house gets the benefit. Call {phone} to see if a combo fits your home.',
    fixesHeading: 'What a combo system fixes',
    fixes: [
      'Scale on faucets, glass and inside the water heater.',
      'Chlorine taste and smell in every room.',
      'Dry skin and hair after showers.',
      'Soap scum in tubs and showers.',
      'Two separate service visits, since both parts get checked together.',
    ],
    stepsHeading: 'How it is set up',
    steps: [
      { title: 'Carbon filter first', text: 'Water passes through carbon to take out chlorine and odors.' },
      { title: 'Softener next', text: 'Then the softener removes hardness. The filter also helps protect the softener resin.' },
      { title: 'Bypass and drain', text: 'We add a bypass for service and run the softener drain to code.' },
      { title: 'Set for your water', text: 'We set hardness and regen for your test results, then walk you through salt and upkeep.' },
    ],
    priceHeading: 'What changes the price',
    price: [
      'Tank sizes for the filter and softener, based on your home and your water use.',
      'The type of filter media you choose.',
      'How much plumbing is needed near the meter and water heater.',
      'Whether you add a [reverse osmosis](/reverse-osmosis-installation) faucet for drinking water.',
    ],
    localHeading: 'Why combos are common here',
    local: `The city's ${sf.year} report lists hardness of about ${sf.plantGpg} grains per gallon at its plant and an average chlorine level of ${sf.chlorinePpm} parts per million. One is a scale problem and the other is a taste problem. A single system cannot do both jobs well, which is why a filter and softener pair makes sense for many Sioux Falls homes.`,
    faqs: [
      {
        q: 'Can one tank do both jobs?',
        a: 'Some systems put carbon and softening resin in one tank. They save space, but the carbon wears out on a different schedule than the resin. Two tanks are easier to service. We will show you both.',
      },
      {
        q: 'Do I need a combo if I am on a well?',
        a: 'A well usually needs a different setup. Iron and sulfur are more common than chlorine. See [well water filter systems](/well-water-filtration).',
      },
      {
        q: 'Can I add a filter to the softener I already have?',
        a: 'Often, yes. If your softener is in good shape, we can add a carbon filter ahead of it. We check its age and condition first.',
      },
    ],
    related: ['whole-house-water-filter', 'water-softener-installation', 'free-water-test'],
  },
  {
    slug: 'reverse-osmosis-installation',
    name: 'Reverse Osmosis',
    icon: 'glass',
    card: 'Clean drinking water from its own faucet at the kitchen sink.',
    h1: 'Reverse Osmosis System Installation in Sioux Falls',
    title: 'Reverse Osmosis Installation Sioux Falls, SD | Drinking Water',
    description:
      'Reverse osmosis drinking water system installation in Sioux Falls. Its own faucet at your sink, ice maker hookups and filter changes. Call today.',
    intro:
      'A reverse osmosis system gives you drinking water from its own faucet at the kitchen sink. It pushes water through a very fine membrane and a set of filters. That takes out far more than a pitcher or fridge filter. We install it under your sink, hook up your fridge or ice maker if you want, and handle the filter changes. Call {phone} to get started.',
    fixesHeading: 'Why people add reverse osmosis',
    fixes: [
      'Better tasting water for drinking, coffee and cooking.',
      'Less sodium in drinking water when the home has a salt softener.',
      'Clear ice cubes and no more buying bottled water.',
      'Lower levels of many dissolved solids, nitrates and some metals.',
    ],
    stepsHeading: 'How the install goes',
    steps: [
      { title: 'Check the sink', text: 'We look at space under your sink, the drain and where the faucet will go.' },
      { title: 'Mount the system', text: 'The filters and storage tank go under the sink, out of sight.' },
      { title: 'Add the faucet', text: 'A small faucet goes on your sink or countertop. We can run a line to the fridge too.' },
      { title: 'Flush and test', text: 'We flush the new filters, check for leaks and show you how to change them.' },
    ],
    priceHeading: 'What changes the price',
    price: [
      'Tank systems cost less. Tankless systems save space and cost more.',
      'Running a line to a fridge, ice maker or second sink.',
      'Drilling a granite or quartz countertop for the faucet.',
      'Add ons like a remineralizing filter.',
    ],
    localHeading: 'Reverse osmosis and softened water',
    local: `Salt softeners add some sodium to water. The city's ${sf.year} report also shows sodium already in the water, about ${sf.plantSodiumPpm} parts per million from the city plant and ${sf.lewisClarkSodiumPpm} from Lewis & Clark. Reverse osmosis takes most of that out at the one tap you drink from. That is why it pairs so well with a softener in Sioux Falls homes.`,
    faqs: [
      {
        q: 'Does reverse osmosis waste water?',
        a: 'Yes, some water goes down the drain to rinse the membrane. Newer systems waste much less than older ones. We can show you the ratio for each system.',
      },
      {
        q: 'How often do the filters need changing?',
        a: 'Most pre filters are changed every 6 to 12 months. The membrane often lasts 2 to 5 years. Hard water and no softener can shorten that.',
      },
      {
        q: 'Does reverse osmosis take out fluoride?',
        a: 'Reverse osmosis takes out most fluoride. If you want to keep it, talk with your dentist about what is right for your family.',
      },
      {
        q: 'Can you hook it up to my fridge?',
        a: 'Yes. We can run a line from the system to your fridge or ice maker so it gets the same water.',
      },
    ],
    related: ['water-softener-installation', 'whole-house-water-filter', 'water-filter-service'],
  },
  {
    slug: 'well-water-filtration',
    name: 'Well Water Systems',
    icon: 'well',
    card: 'Iron, sulfur smell and hardness from a private well, treated at the source.',
    h1: 'Well Water Filter Systems Near Sioux Falls',
    title: 'Well Water Filter Systems Sioux Falls, SD | Iron and Sulfur',
    description:
      'Well water filter systems for homes and acreages around Sioux Falls. Iron filters, sulfur smell treatment, softeners and testing. Call today.',
    intro:
      'If your home is on a private well, nobody treats that water but you. Wells around Sioux Falls can bring iron, a rotten egg smell, hardness and sediment. We test the well water first, then build a system that handles what is really in it. Call {phone} for well water help on your acreage or farm place.',
    fixesHeading: 'Common well water problems',
    fixes: [
      'Orange or brown stains in sinks, toilets and laundry.',
      'A rotten egg smell, often worse with hot water.',
      'Black specks or slime in the toilet tank.',
      'Very hard water and scale.',
      'Sand or grit that wears out fixtures.',
    ],
    stepsHeading: 'How we treat a well',
    steps: [
      { title: 'Test the well', text: 'We check iron, hardness, smell and other basics. For safety items like bacteria and nitrates, we point you to a certified lab.' },
      { title: 'Plan the order', text: 'Sediment comes out first, then iron and sulfur, then hardness. Order matters for a well.' },
      { title: 'Install the system', text: 'Most well systems go near the pressure tank, with a bypass for service.' },
      { title: 'Check it later', text: 'Wells change. We retest after the system settles in and adjust it if needed.' },
    ],
    priceHeading: 'What changes the price',
    price: [
      'How much iron and sulfur is in the water. Higher levels need stronger systems.',
      'Air injection or other iron filters versus simple cartridge filters.',
      'Whether a softener and drinking water system are part of the plan.',
      'Space near the pressure tank and the drain.',
    ],
    localHeading: 'Wells outside town limits',
    local:
      'Many homes on acreages around Sioux Falls use a private well or a rural water system instead of city water. Your water bill tells you which. If you get no water bill, you likely have a well. Public water systems publish a yearly report, but a private well has no report, so a test is the only way to know what you have. The CDC suggests testing a private well at least once a year for bacteria and nitrates.',
    faqs: [
      {
        q: 'How often should I test my well?',
        a: 'The CDC suggests a bacteria and nitrate test at least once a year, and again after flooding or well work. Test for iron and hardness when you plan a treatment system.',
      },
      {
        q: 'Will a softener take out iron?',
        a: 'A softener can handle a small amount of iron. Higher levels foul the resin and need an iron filter ahead of the softener.',
      },
      {
        q: 'What causes the rotten egg smell?',
        a: 'Usually hydrogen sulfide gas, sometimes from bacteria in the well or the water heater. A test helps find the source before we pick a fix.',
      },
    ],
    related: ['free-water-test', 'water-softener-installation', 'whole-house-water-filter'],
  },
  {
    slug: 'free-water-test',
    name: 'Free In Home Water Test',
    icon: 'test',
    card: 'We test your water at your tap and tell you what it needs. No charge.',
    h1: 'Free In Home Water Test in Sioux Falls',
    title: 'Free In Home Water Test Sioux Falls, SD | Hardness and Chlorine',
    description:
      'Book a free in home water test in Sioux Falls. We check hardness, chlorine, iron and more at your tap and explain what your water needs. Call today.',
    intro:
      'Not sure what your water needs? Start with a free in home water test. We come to your home, test the water at your tap, and explain the results in plain words. You see your hardness, chlorine and iron numbers before anyone talks about equipment. Call {phone} to book a time.',
    fixesHeading: 'What we check at your tap',
    fixes: [
      'Hardness, so a softener is set to your real number.',
      'Chlorine, the cause of most taste and smell complaints on city water.',
      'Iron, which stains fixtures and fouls softeners.',
      'Total dissolved solids, a quick look at what is in the water.',
      'pH, which can affect pipes and fixtures.',
      'How your current softener or filter is working, if you have one.',
    ],
    stepsHeading: 'How the visit goes',
    steps: [
      { title: 'Book a time', text: 'Call and tell us your town and whether you are on city, rural or well water.' },
      { title: 'We test at the tap', text: 'The test takes place in your kitchen. You watch the results come in.' },
      { title: 'You get the numbers', text: 'We write them down for you and explain what each one means for your home.' },
      { title: 'You decide', text: 'If your water needs nothing, we will tell you. If it does, we show you the options.' },
    ],
    priceHeading: 'What the free test does not cover',
    price: [
      'Safety tests for bacteria, nitrates, lead and arsenic need a certified lab. We can tell you how to get one.',
      'A free test is a screening. It is not a lab report for a home sale or a loan.',
      'If a lab test is needed, the lab sets its own fee.',
    ],
    localHeading: 'Why test if the city has a report?',
    local: `The city report is an average across the system. Sioux Falls blends water from its own plant with Lewis & Clark water, and the ${sf.year} report lists different hardness for each, ${sf.plantGpg} and ${sf.lewisClarkGpg} grains per gallon. Your home also has its own pipes and water heater. A test at your tap tells you what you are really getting.`,
    faqs: [
      {
        q: 'Is the water test really free?',
        a: 'Yes. The in home test is free, and you are under no obligation to buy anything.',
      },
      {
        q: 'How long does it take?',
        a: 'Plan on about 30 minutes to an hour, including time to go over the results.',
      },
      {
        q: 'Do you test well water?',
        a: 'Yes. We screen well water for hardness, iron and smell. For bacteria and nitrates, we point you to a certified lab.',
      },
    ],
    related: ['whole-house-water-filter', 'water-softener-installation', 'well-water-filtration'],
  },
  {
    slug: 'water-filter-service',
    name: 'Filter and Softener Service',
    icon: 'wrench',
    card: 'Filter changes, softener repair, resin swaps and yearly checkups.',
    h1: 'Water Filter and Softener Service in Sioux Falls',
    title: 'Water Softener Repair and Filter Service Sioux Falls, SD',
    description:
      'Water softener repair, filter changes and yearly service in Sioux Falls. We work on the system you already have. Call today.',
    intro:
      'A softener or filter only works when it is kept up. We change filters, fix softeners that stop working, replace worn resin and clean out salt tanks. We work on most systems, not just ones we installed. Call {phone} and tell us what your system is doing.',
    fixesHeading: 'Common service calls',
    fixes: [
      'Hard water coming back even though the softener has salt.',
      'A salt bridge or mushy salt in the brine tank.',
      'A softener that runs at the wrong time or will not stop.',
      'Low water pressure from a clogged filter cartridge.',
      'A reverse osmosis faucet that drips slowly or tastes off.',
      'Water on the floor near the softener or filter.',
    ],
    stepsHeading: 'How a service visit goes',
    steps: [
      { title: 'Tell us the symptom', text: 'Brand, age and what changed help us bring the right parts.' },
      { title: 'Find the cause', text: 'We test the water before and after the system to see what is working.' },
      { title: 'Fix or replace', text: 'We repair when it makes sense. If a system is worn out, we tell you plainly.' },
      { title: 'Set a schedule', text: 'We note when the next filter change or checkup is due.' },
    ],
    priceHeading: 'What changes the price',
    price: [
      'Simple filter changes cost the least.',
      'Valve repairs depend on the brand and the part.',
      'Resin replacement depends on tank size.',
      'Older systems can cost more to repair than to replace. We will show you both.',
    ],
    localHeading: 'Hard water is hard on equipment',
    local: `At about ${sf.plantGpg} grains per gallon from the city plant, Sioux Falls water asks a lot of a softener. A yearly check catches small problems early, like a worn seal or a salt bridge, before hard water gets back into your pipes and water heater.`,
    faqs: [
      {
        q: 'How do I know my softener stopped working?',
        a: 'Spots on dishes, crust on faucets and soap that will not lather are the first signs. Check that the salt level is dropping over time. If it is not, the softener may not be running.',
      },
      {
        q: 'What salt should I use?',
        a: 'Most softeners do well with clean pellet salt. Avoid rock salt with a lot of dirt in it. If you have iron, ask us about salt made for iron.',
      },
      {
        q: 'Do you service brands you did not install?',
        a: 'Yes. Tell us the brand and model when you call, and we will let you know if we can get parts.',
      },
    ],
    related: ['water-softener-installation', 'reverse-osmosis-installation', 'free-water-test'],
  },
];

export function serviceBySlug(slug: string | undefined) {
  return services.find((service) => service.slug === slug);
}
