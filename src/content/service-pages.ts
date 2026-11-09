import { HARD_WATER } from '../config/water';

export interface ServicePage {
  slug: string;
  /** Visible H1. */
  title: string;
  /** Document title. Must include Sioux Falls. */
  documentTitle: string;
  /** Schema serviceType. Must differ from the catalog name. */
  serviceType: string;
  /** Finishes the sentence "Need help with ...?" */
  ctaName: string;
  sub: string;
  description: string;
  photo: string;
  alt: string;
  answer: string;
  includedHeading: string;
  includedLead: string;
  included: string[];
  signsHeading: string;
  signsLead: string;
  signs: string[];
  compare?: {
    heading: string;
    lead: string;
    rows: { title: string; text: string }[];
  };
  costLead: string;
  cost: string[];
  noteHeading: string;
  note: string;
  /** Sentences are split evenly across the three visit steps. */
  visit: string;
  faqs: { q: string; a: string }[];
  related: string[];
}

const softeners = '/services/water-softeners';
const whole = '/services/whole-house-water-filtration';
const ro = '/services/reverse-osmosis-drinking-water';
const iron = '/services/iron-and-sulfur-removal';
const well = '/services/well-water-treatment';
const testing = '/services/water-testing';

export const servicePages: ServicePage[] = [
  {
    slug: 'water-softeners',
    title: 'Water Softeners in Sioux Falls, SD',
    documentTitle: 'Water Softeners in Sioux Falls, SD | Hard Water Help',
    serviceType: 'Residential water softening',
    ctaName: 'a water softener',
    sub: 'Sioux Falls water is very hard. A softener sized to your home takes care of it.',
    description: `Water softeners in Sioux Falls, SD. The city reports about ${HARD_WATER.cityGpg} grains per gallon at its plant. We size a softener to your water and your household.`,
    photo: 'service-softener',
    alt: 'Illustration of a water softener with a resin tank and a salt tank',
    answer: `A water softener takes out the calcium and magnesium that make water hard. That matters here. The City of Sioux Falls ${HARD_WATER.reportYear} water report lists about ${HARD_WATER.cityGpg} grains per gallon for water from the city plant and about ${HARD_WATER.lewisClarkGpg} for Lewis & Clark water. Call {phone} and we will help you find the right size for your home.`,
    includedHeading: 'What we help you with',
    includedLead: 'A softener works best when it fits your water and the way your family uses it. We start there.',
    included: [
      'Checking your hardness first, so the softener is set for your water and not a guess.',
      'Sizing the unit for the number of people at home and how much water you use.',
      'Replacing an old softener that no longer keeps up.',
      'Installing a new softener on the loop your home already has, or finding the best spot if it has none.',
      'Setting the regeneration schedule and salt level, then showing you how it works.',
      'Pairing the softener with [reverse osmosis](/services/reverse-osmosis-drinking-water) if you want better drinking water too.',
    ],
    signsHeading: 'Signs your water is too hard',
    signsLead: 'Hard water leaves clues all over the house. You may have stopped noticing them.',
    signs: [
      'White crust builds up on faucets and shower heads.',
      'Your dishes come out of the dishwasher cloudy or spotted.',
      'Soap does not lather well, and you keep using more.',
      'Your skin feels dry and your hair feels dull after a shower.',
      'Your water heater makes popping or rumbling sounds.',
      'Towels and clothes feel stiff after washing.',
    ],
    compare: {
      heading: 'Softener or filter?',
      lead: 'People often mix these up. They do different jobs, and many Sioux Falls homes use both.',
      rows: [
        { title: 'A softener', text: 'Takes out hardness minerals. It protects pipes and appliances and helps soap work.' },
        { title: 'A filter', text: 'Targets taste, odor, chlorine, or sediment. It does not soften your water. See [whole house filtration](/services/whole-house-water-filtration).' },
      ],
    },
    costLead: 'We do not list one price here, because homes and water are different. These are the things that change it.',
    cost: [
      'The size of the softener depends on your hardness, your household, and how much water you use.',
      'Your plumbing matters. A home with a softener loop is simpler than one that needs new lines run to the softener.',
      'The type of system changes the number too, along with any added filtration you choose.',
      'Ask us what your job includes before anything starts, and we will walk you through it.',
    ],
    noteHeading: 'A note on sodium',
    note: 'Salt based softeners add a small amount of sodium to your water. If you watch your sodium, tell us and ask your doctor what is right for you. Many people keep a reverse osmosis tap in the kitchen for drinking.',
    visit: 'You call and tell us your town and whether you have city, rural, or well water. We talk through what you are seeing around the house. We check your hardness and look at your plumbing. We talk through the size that fits and what the job includes. We install the softener and set it for your water. Then we show you how to add salt and what to watch for.',
    faqs: [
      {
        q: 'How hard is the water in Sioux Falls?',
        a: `Very hard. The City of Sioux Falls ${HARD_WATER.reportYear} water report lists about ${HARD_WATER.cityGpg} grains per gallon for water from the city plant and about ${HARD_WATER.lewisClarkGpg} grains per gallon for Lewis & Clark water. The city uses both sources, so the number at your tap can change.`,
      },
      {
        q: 'What size water softener do I need?',
        a: 'It depends on your hardness, how many people live with you, and how much water you use. A unit that is too small regenerates too often. One that is too big can sit idle. Call {phone} and we will work it out with you.',
      },
      {
        q: 'What should I set my softener to in Sioux Falls?',
        a: `The city publishes a softener setting in its yearly report. The ${HARD_WATER.reportYear} report lists ${HARD_WATER.cityGpg} for its own plant and ${HARD_WATER.lewisClarkGpg} for Lewis & Clark water. A test at your own tap tells you where your home really lands.`,
      },
      {
        q: 'Will a softener make my water safe to drink?',
        a: 'A softener only takes out hardness minerals and some iron. It does not treat bacteria or nitrates. If you have safety questions, start with [water testing](/services/water-testing).',
      },
      {
        q: 'Can you replace the softener I already have?',
        a: 'Yes. Tell us the brand and age if you know them. We will look at whether a repair or a replacement makes more sense for you.',
      },
    ],
    related: [testing, ro, whole],
  },
  {
    slug: 'whole-house-water-filtration',
    title: 'Whole House Water Filtration in Sioux Falls, SD',
    documentTitle: 'Whole House Water Filtration in Sioux Falls, SD',
    serviceType: 'Point of entry water filtration',
    ctaName: 'whole house filtration',
    sub: 'Better water at every tap, from the kitchen sink to the shower.',
    description: 'Whole house water filtration in Sioux Falls, SD for chlorine taste, odor, and sediment. We match the filter to your water and install it on your main line.',
    photo: 'service-whole-house',
    alt: 'Illustration of two filter housings on the main water line of a house',
    answer: 'A whole house filter sits on the main water line where it comes into your home. Every tap and shower gets filtered water. It can help with chlorine taste, odor, and sediment. Call {phone} and tell us what you notice in your water.',
    includedHeading: 'What we help you with',
    includedLead: 'There are many kinds of filters. We help you pick one that solves the problem you actually have.',
    included: [
      'Sediment filters that catch sand, grit, and pipe scale.',
      'Carbon filters for chlorine taste and smell.',
      'Finding a good location on your main line, with room to change filters.',
      'Adding shutoff valves and a bypass so service stays simple.',
      'Working alongside your [water softener](/services/water-softeners), in the right order.',
      'Showing you how and when to change your filters.',
    ],
    signsHeading: 'Signs a whole house filter could help',
    signsLead: 'If the problem shows up at more than one tap, treating it at one faucet will not be enough.',
    signs: [
      'Your water smells or tastes like chlorine at every tap.',
      'You see grit or sediment in faucet screens.',
      'Your shower water bothers your skin or smells strong.',
      'Your washing machine and dishwasher screens keep clogging.',
      'You want one system instead of filters on every faucet.',
    ],
    compare: {
      heading: 'Whole house or one tap?',
      lead: 'Here is the simple way to think about it.',
      rows: [
        { title: 'Whole house filter', text: 'Treats all the water coming into your home. Good for taste, odor, and sediment everywhere.' },
        { title: 'Reverse osmosis', text: 'Treats water at one tap, usually the kitchen. Good for drinking water. See [reverse osmosis](/services/reverse-osmosis-drinking-water).' },
      ],
    },
    costLead: 'We do not list one price here. What you pay depends on your water and your home.',
    cost: [
      'The filter type depends on what your water needs. Carbon, sediment, and combined systems differ.',
      'Your water flow matters. A larger home with more bathrooms may need a larger system.',
      'Where your main line sits, and how easy it is to reach, changes the install.',
      'Filters need changing over time. Ask us what upkeep looks like for the one you choose.',
    ],
    noteHeading: 'Filtering does not soften',
    note: `A filter will not take out hardness. With Sioux Falls water at about ${HARD_WATER.cityGpg} grains per gallon from the city plant, many homes need a softener too. We can help you plan both at once.`,
    visit: 'You call and tell us what you notice and where you notice it. We ask about your water source and your home. We look at your main line and your water. We talk through which filter fits and why. We install the system with shutoffs so it is easy to service. Then we show you how to change the filters.',
    faqs: [
      {
        q: 'Does Sioux Falls city water need a whole house filter?',
        a: `City water is treated and tested. The city reported no health based violations in ${HARD_WATER.reportYear}. A filter is mostly about taste, smell, and sediment. If those bother you, a filter can help.`,
      },
      {
        q: 'Will a whole house filter take out hardness?',
        a: 'No. Filters and softeners do different jobs. For hardness, you want a [water softener](/services/water-softeners).',
      },
      {
        q: 'Will a whole house filter lower my water pressure?',
        a: 'A filter sized for your home should not cause a big drop. A clogged filter can. That is why sizing and regular changes matter.',
      },
      {
        q: 'How often do the filters need changing?',
        a: 'It depends on the filter and on your water. Well water with more sediment can use up a filter faster. We will tell you what to expect for the system you pick.',
      },
    ],
    related: [softeners, ro, testing],
  },
  {
    slug: 'reverse-osmosis-drinking-water',
    title: 'Reverse Osmosis Drinking Water in Sioux Falls, SD',
    documentTitle: 'Reverse Osmosis Drinking Water Systems in Sioux Falls, SD',
    serviceType: 'Under sink reverse osmosis installation',
    ctaName: 'reverse osmosis',
    sub: 'Clean tasting water at your kitchen tap for drinking, coffee, and ice.',
    description: 'Reverse osmosis drinking water systems in Sioux Falls, SD. Great tasting water at your kitchen tap, installed under your sink and connected to your ice maker if you want.',
    photo: 'service-ro',
    alt: 'Illustration of a drinking water faucet filling a glass above reverse osmosis filters',
    answer: 'A reverse osmosis system pushes water through a very fine membrane and into a small tank under your sink. You get a separate faucet with clean tasting water for drinking and cooking. It cuts down many dissolved solids that make hard water taste flat or mineral heavy. Call {phone} and we will help you pick one.',
    includedHeading: 'What we help you with',
    includedLead: 'A reverse osmosis system is a small install that you will use every single day. We want it to fit your kitchen.',
    included: [
      'Picking a system that fits the space under your sink.',
      'Installing the drinking water faucet where you want it.',
      'Connecting your refrigerator or ice maker if the line can reach.',
      'Checking your water pressure, since these systems need enough of it to work well.',
      'Replacing an old system that has stopped keeping up.',
      'Showing you when to change the filters and membrane.',
    ],
    signsHeading: 'Signs reverse osmosis is a good fit',
    signsLead: 'If you are hauling water home from the store, you are probably ready for this.',
    signs: [
      'You buy bottled water because you do not like your tap water.',
      'Your coffee or tea tastes flat or bitter.',
      'Your ice comes out cloudy.',
      'You want lower sodium drinking water alongside a softener.',
      'A water test turned up something you want to reduce at the tap.',
    ],
    costLead: 'We do not list one price here. A few things shape the job.',
    cost: [
      'System type and the size of the storage tank change what you need.',
      'Your sink matters. Some need a new hole for the faucet, depending on the material.',
      'An ice maker or refrigerator line adds some work.',
      'Filters and membranes need replacing over time. Ask us about upkeep before you choose.',
    ],
    noteHeading: 'Well owners, test first',
    note: 'Reverse osmosis is not a fix for water that may have bacteria in it. If you are on a private well, get a [water test](/services/water-testing) first so you know what you are working with.',
    visit: 'You call and tell us what you want from your drinking water. We ask about your kitchen and your water source. We look under your sink and check your water pressure. We talk through where the faucet and tank should go. We install the system and flush it. Then we show you how it works and when to change the filters.',
    faqs: [
      {
        q: 'What does reverse osmosis take out of Sioux Falls water?',
        a: 'It reduces many dissolved solids, including hardness minerals and sodium. How much depends on the system and your water. Ask us to go over what yours is rated to reduce.',
      },
      {
        q: 'Do I need a softener if I have reverse osmosis?',
        a: 'They help different parts of your home. Reverse osmosis treats one tap. A [water softener](/services/water-softeners) protects the whole house. Hard water can also shorten the life of a reverse osmosis membrane, so many homes here use both.',
      },
      {
        q: 'Does reverse osmosis waste water?',
        a: 'Yes, some water goes down the drain as the system rinses itself. How much depends on the system. We can talk through options if that matters to you.',
      },
      {
        q: 'Can it connect to my refrigerator?',
        a: 'Often yes, if the line can reach. Tell us where your refrigerator sits compared to your sink when you call {phone}.',
      },
    ],
    related: [softeners, whole, testing],
  },
  {
    slug: 'iron-and-sulfur-removal',
    title: 'Iron and Sulfur Removal in Sioux Falls, SD',
    documentTitle: 'Iron and Sulfur Water Treatment in Sioux Falls, SD',
    serviceType: 'Iron and hydrogen sulfide water treatment',
    ctaName: 'iron or sulfur water',
    sub: 'Orange stains and rotten egg smell have causes. We find yours.',
    description: 'Iron and sulfur removal in Sioux Falls, SD and nearby towns. We help with orange stains, metallic taste, and rotten egg smell, starting with a look at your water.',
    photo: 'service-iron',
    alt: 'Illustration of a treatment tank turning rusty water into clear water',
    answer: 'Iron leaves orange and brown stains. Sulfur makes water smell like rotten eggs. Both are common on private wells in eastern South Dakota. The right fix depends on how much you have and what form it is in. Call {phone} and tell us what you see and smell.',
    includedHeading: 'What we help you with',
    includedLead: 'There is no single fix for every home. We look at your water first, then match the treatment to it.',
    included: [
      'Figuring out if your smell comes from the well or from the water heater.',
      'Air injection and media systems that take out iron and sulfur at the main line.',
      'Treatment plans for iron bacteria, the slimy growth that can clog fixtures.',
      'Working with your [water softener](/services/water-softeners) so iron does not foul it.',
      'Looking into stains on fixtures, laundry, and dishes.',
      'Pointing you to a [water test](/services/water-testing) when we need real numbers.',
    ],
    signsHeading: 'Signs of iron or sulfur in your water',
    signsLead: 'Your nose and your laundry will usually tell you first.',
    signs: [
      'Orange or brown stains show up in sinks, tubs, and toilets.',
      'Your white laundry starts to look dingy or rusty.',
      'Your water smells like rotten eggs.',
      'Your water tastes like metal.',
      'Water comes out clear, then turns cloudy or rusty after it sits.',
      'You see slime inside your toilet tank.',
    ],
    compare: {
      heading: 'Where is the smell coming from?',
      lead: 'Here is a quick check you can do at home.',
      rows: [
        { title: 'Only the hot water smells', text: 'The cause is often inside your water heater, not your well. That is a different fix.' },
        { title: 'Hot and cold both smell', text: 'The cause is more likely in your well or your groundwater. Treatment at the main line may help.' },
      ],
    },
    costLead: 'We do not list one price here. The right system depends on your water.',
    cost: [
      'How much iron or sulfur you have decides what type of system can handle it.',
      'The form of the iron matters. Some iron dissolves and some shows up as particles.',
      'Your well output and home water use affect sizing.',
      'Your existing equipment matters, including any softener already in place.',
    ],
    noteHeading: 'Did the smell change suddenly?',
    note: 'A new smell or color can mean something has changed in your well or plumbing. If you are on a private well, stop drinking the water if you are worried and get it tested. If you are on city or rural water, call your water provider first.',
    visit: 'You call and tell us what you see, smell, and taste. We ask where it shows up and when it started. We look at your water and your equipment. We test if we need better numbers. We talk through the treatment that fits. Then we install it and show you how to care for it.',
    faqs: [
      {
        q: 'Why does my water smell like rotten eggs?',
        a: 'Usually it is hydrogen sulfide gas or sulfur bacteria. If only your hot water smells, your water heater may be the cause. If both hot and cold smell, it may be in your well.',
      },
      {
        q: 'Will a water softener take out iron?',
        a: 'A softener can handle small amounts of some iron. Larger amounts can foul it and shorten its life. A dedicated iron system is often the better choice.',
      },
      {
        q: 'Is iron in water dangerous?',
        a: 'Iron is mostly a stain and taste problem. EPA guidance treats it as an aesthetic issue. It is still smart to test a private well for safety items like bacteria and nitrates.',
      },
      {
        q: 'Why is my city water suddenly rusty?',
        a: 'That can happen when water mains are flushed or disturbed. If it does not clear up after running a cold tap, call your water provider first. If it keeps coming back, call us at {phone}.',
      },
    ],
    related: [well, testing, softeners],
  },
  {
    slug: 'well-water-treatment',
    title: 'Well Water Treatment in Sioux Falls, SD',
    documentTitle: 'Well Water Treatment in Sioux Falls, SD and Nearby Towns',
    serviceType: 'Private well water treatment',
    ctaName: 'well water treatment',
    sub: 'Your well is yours to look after. We help you treat what is in it.',
    description: 'Well water treatment around Sioux Falls, SD for hardness, iron, sulfur, and sediment. We build the plan from what your own well has in it.',
    photo: 'service-well',
    alt: 'Illustration of a private well reaching down through the ground to water',
    answer: 'If you are on a private well, nobody tests your water but you. Wells around Sioux Falls can carry hardness, iron, sulfur, and sediment. A good treatment plan starts with a test. Call {phone} and tell us about your well.',
    includedHeading: 'What we help you with',
    includedLead: 'Every well is different, even two on the same road. We build the plan around yours.',
    included: [
      'Starting with a [water test](/services/water-testing), so you treat what is really there.',
      'Sediment filtration to protect the rest of your system.',
      '[Iron and sulfur treatment](/services/iron-and-sulfur-removal) for stains and smell.',
      '[Softening](/services/water-softeners) for hard well water.',
      '[Reverse osmosis](/services/reverse-osmosis-drinking-water) for drinking water at the kitchen tap.',
      'Putting each piece in the right order so they work together.',
    ],
    signsHeading: 'Signs your well water needs treatment',
    signsLead: 'Some problems you can see and smell. Others you cannot, which is why testing matters.',
    signs: [
      'You have orange stains, or black stains that may point to manganese.',
      'Your water smells like eggs or tastes like metal.',
      'Grit or sand shows up in your faucet screens.',
      'Your water is very hard and leaves heavy scale.',
      'You have not tested your well in over a year.',
      'You are buying a home with a well or just moved into one.',
    ],
    costLead: 'We do not list one price here. Well treatment depends on your well.',
    cost: [
      'What your test shows decides how many steps your system needs.',
      'Well output and pressure affect which equipment can work.',
      'Space matters. Treatment systems need room near where the water comes in.',
      'Your existing equipment may stay, or it may need to be replaced.',
    ],
    noteHeading: 'Test your well every year',
    note: 'Public health agencies recommend testing private wells every year for coliform bacteria and nitrates. Test sooner if the taste, color, or smell changes, after flooding, or if someone at home is pregnant or has an infant. Softeners and most filters do not treat bacteria or nitrates.',
    visit: 'You call and tell us about your well and what you have noticed. We ask how old the well is and if you have a recent test. We review your water test or help you get one. We look at your equipment and space. We lay out a plan in the right order. Then we install it and show you how to care for it.',
    faqs: [
      {
        q: 'How often should I test my well water?',
        a: 'At least once a year for coliform bacteria and nitrates. Test sooner if something changes, or after flooding or work on your well.',
      },
      {
        q: 'Should I test before I buy a treatment system?',
        a: 'Yes. A test tells you what you are treating, how much of it there is, and what order your equipment should go in. It keeps you from paying for the wrong thing.',
      },
      {
        q: 'Can you treat water from an older well?',
        a: 'Often yes. Tell us what you know about the well. If the well itself has a problem, such as a damaged cap or casing, you may need a well contractor first.',
      },
      {
        q: 'Do you handle rural water too?',
        a: 'Yes. Rural water is treated by the supplier before it reaches you, so it needs a different plan than a well. Hardness and taste are usually the main concerns. Call {phone} and tell us which one you have.',
      },
    ],
    related: [iron, testing, softeners],
  },
  {
    slug: 'water-testing',
    title: 'Water Testing in Sioux Falls, SD',
    documentTitle: 'Home Water Testing in Sioux Falls, SD',
    serviceType: 'Residential water quality testing',
    ctaName: 'water testing',
    sub: 'Know what is in your water before you spend money treating it.',
    description: 'Water testing in Sioux Falls, SD for hardness, iron, and more. Find out what is in your city, rural, or well water, and what to do about it.',
    photo: 'service-testing',
    alt: 'Illustration of water samples in test tubes beside a test strip',
    answer: 'A water test tells you what is really in your water, so you only treat what needs treating. We can check common items like hardness and iron at your home. For safety items like bacteria and nitrates, a lab test is the right call. Call {phone} and tell us what you want to know.',
    includedHeading: 'What we can look at',
    includedLead: 'The right test depends on your water source and on what is bothering you.',
    included: [
      'Hardness, the number one question in Sioux Falls.',
      'Iron, which causes orange and brown staining.',
      'pH, which can affect your plumbing.',
      'Total dissolved solids, a rough measure of what is in your water.',
      'Helping you get a lab test for bacteria, nitrates, and other safety items.',
      'Going through the results with you in plain words.',
    ],
    signsHeading: 'Good reasons to test your water',
    signsLead: 'You do not need a problem to want an answer. These are the most common reasons.',
    signs: [
      'You just bought a home, or you are about to.',
      'You are on a private well and have not tested this year.',
      'Your water changed in taste, smell, or color.',
      'You are thinking about a [softener](/services/water-softeners) or a filter.',
      'You have a new baby at home and use well water.',
    ],
    compare: {
      heading: 'At home or at a lab?',
      lead: 'Both are useful. They answer different questions.',
      rows: [
        { title: 'At home', text: 'Good for hardness, iron, and pH. You see the results and we can talk through them right away.' },
        { title: 'At a lab', text: 'The right choice for bacteria, nitrates, arsenic, and other health related items.' },
      ],
    },
    costLead: 'We do not list one price here. Ask us about testing when you call.',
    cost: [
      'What you want tested changes the work involved.',
      'Lab tests are charged by the lab, and the cost depends on what you ask them to check.',
      'Your town and travel can matter, so tell us where you are.',
      'Ask what is included up front, and we will give you a straight answer.',
    ],
    noteHeading: 'If you are on city or rural water',
    note: `Your water provider publishes a report every year. The ${HARD_WATER.sourceName} is a good place for Sioux Falls homes to start. Testing at your own tap still helps, because your plumbing and treatment equipment can change what comes out.`,
    visit: 'You call and tell us your water source and your concern. We help you decide which tests make sense. We take a sample or help you get a lab kit. We check what we can at your home. We go through your results in plain words. Then, if your water needs treatment, we explain your options.',
    faqs: [
      {
        q: 'What should I test my water for in Sioux Falls?',
        a: 'On city water, hardness is the big one. On a private well, test yearly for bacteria and nitrates, and check hardness and iron too.',
      },
      {
        q: 'Do I need a test if I am on city water?',
        a: `You do not need one for safety alone, since the city tests its water and publishes the results. A test at your tap is still useful for setting a softener. The ${HARD_WATER.reportYear} city report lists about ${HARD_WATER.cityGpg} grains per gallon from the city plant.`,
      },
      {
        q: 'How do I collect a water sample?',
        a: 'Lab tests come with their own instructions, and you should follow them closely. Bacteria samples need a clean bottle and must reach the lab within the time they set.',
      },
      {
        q: 'What do the hardness numbers mean?',
        a: 'Hardness is usually listed in grains per gallon. Above about 10.5 grains is generally called very hard. Our [hard water guide](/guides/hard-water-sioux-falls) explains it.',
      },
    ],
    related: [softeners, well, iron],
  },
];

export function servicePageBySlug(slug: string | undefined) {
  return servicePages.find((page) => page.slug === slug);
}
