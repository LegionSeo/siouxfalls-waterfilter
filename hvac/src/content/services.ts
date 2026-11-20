import type { PhotoKey } from './photos';

export interface Faq {
  q: string;
  a: string;
}

export interface Service {
  slug: string;
  name: string;
  group: 'heating' | 'cooling';
  icon: string;
  /** One line for cards. */
  short: string;
  title: string;
  description: string;
  h1: string;
  intro: string[];
  signsTitle: string;
  signs: string[];
  steps: { title: string; text: string }[];
  local: { title: string; text: string[] };
  faqs: Faq[];
  related: string[];
  photo: PhotoKey;
}

export const services: Service[] = [
  {
    slug: 'furnace-repair',
    name: 'Furnace Repair',
    group: 'heating',
    icon: 'ph:fire-bold',
    short: 'No heat, short cycles, odd smells or noises. Get the furnace running again.',
    title: 'Furnace Repair in Sioux Falls, SD | Sioux Falls HVAC',
    description:
      'Furnace not heating? Call for furnace repair in Sioux Falls, Brandon, Harrisburg, Tea and nearby towns. Gas and electric furnaces, all major brands.',
    h1: 'Furnace repair in Sioux Falls',
    intro: [
      'A furnace that quits in a Sioux Falls winter is more than a hassle. Pipes can freeze and the house cools fast.',
      'Call and tell us what the furnace is doing. A tech will find the cause, explain it in plain words and give you the price before any repair starts.',
    ],
    signsTitle: 'Signs your furnace needs a repair',
    signs: [
      'The furnace runs but blows cold or lukewarm air',
      'It turns on and off every few minutes',
      'Some rooms stay cold while others are warm',
      'You hear banging, squealing or rattling',
      'The pilot or flame looks yellow instead of blue',
      'Your gas bill jumps but you have not changed the thermostat',
    ],
    steps: [
      { title: 'Check the basics', text: 'Thermostat, power, gas supply, filter and venting. Many no heat calls start here.' },
      { title: 'Test the parts', text: 'Igniter, flame sensor, pressure switch, blower motor, control board and safety switches.' },
      { title: 'Check for safety', text: 'Look for cracks, rust, poor venting and carbon monoxide risk before the furnace goes back into use.' },
      { title: 'Fix and explain', text: 'You hear what failed, what it costs to fix, and whether repair or replacement makes more sense.' },
    ],
    local: {
      title: 'Why winter repairs cannot wait here',
      text: [
        'The National Weather Service lists a record low of 42 below zero for Sioux Falls. Even a normal cold snap can push a weak furnace past its limit.',
        'If the heat goes out in deep cold, keep cabinet doors under sinks open, close off unused rooms, and call right away.',
      ],
    },
    faqs: [
      {
        q: 'Why is my furnace blowing cold air?',
        a: 'Common causes are a dirty flame sensor, a failed igniter, a clogged filter, or the thermostat fan set to ON instead of AUTO. A tech can test each one and find the real cause.',
      },
      {
        q: 'Should I repair or replace my furnace?',
        a: 'Repair usually makes sense when the furnace is in good shape and the part is affordable. Replacement starts to make sense when the furnace is old, needs repairs often, or has a cracked heat exchanger. Ask the tech to walk you through both costs.',
      },
      {
        q: 'What should I do if I smell gas?',
        a: 'Leave the house right away. Do not flip switches or use your phone inside. Once you are outside, call 911 or your gas company. Call for a furnace repair only after the gas company says it is safe.',
      },
      {
        q: 'Do you work on all furnace brands?',
        a: 'Yes. Techs work on gas and electric furnaces from all the common brands found in Sioux Falls area homes.',
      },
    ],
    related: ['furnace-installation', 'hvac-maintenance', 'emergency-hvac'],
    photo: 'pipes',
  },
  {
    slug: 'furnace-installation',
    name: 'Furnace Installation',
    group: 'heating',
    icon: 'ph:house-line-bold',
    short: 'New furnace sized for your home, with a clear quote before work starts.',
    title: 'Furnace Installation in Sioux Falls, SD | Sioux Falls HVAC',
    description:
      'New furnace installation and furnace replacement in Sioux Falls, SD. Sized to your home, installed to city code, with the permit handled for you.',
    h1: 'Furnace installation and replacement in Sioux Falls',
    intro: [
      'A new furnace should fit your house, not just the space in the basement. The right size keeps rooms even and the bills steady.',
      'Call to set up a visit. You get options in plain words and a written price before anything is ordered.',
    ],
    signsTitle: 'When it is time for a new furnace',
    signs: [
      'The furnace is old and needs repairs most winters',
      'A tech found a cracked heat exchanger',
      'Heating bills keep going up',
      'Rooms never feel warm enough on the coldest days',
      'You are adding on, finishing a basement or replacing the AC at the same time',
    ],
    steps: [
      { title: 'Measure the home', text: 'Square footage, windows, insulation and ductwork all affect the size you need.' },
      { title: 'Compare options', text: 'Standard and high efficiency gas furnaces, single stage or variable speed, and what each costs to run.' },
      { title: 'Permit and install', text: 'The installer pulls the city mechanical permit, removes the old unit and sets the new one.' },
      { title: 'Test and walk through', text: 'Gas pressure, venting and airflow get checked, and you learn how to change the filter.' },
    ],
    local: {
      title: 'Sioux Falls permit rules',
      text: [
        'The City of Sioux Falls requires a license for any contractor doing mechanical or HVAC work inside city limits. A new furnace also needs a mechanical permit.',
        'Before you hire anyone, ask for their city mechanical contractor license. A homeowner who lives in a single family home can pull their own permit, but most people let the installer handle it.',
      ],
    },
    faqs: [
      {
        q: 'How long does a furnace replacement take?',
        a: 'Most swaps in a typical home take about one day. Jobs that need new venting, gas line work or duct changes can take longer.',
      },
      {
        q: 'What size furnace do I need?',
        a: 'It depends on the home, not just the square footage. A proper load calculation looks at insulation, windows and air leaks. A furnace that is too big turns on and off too often and wears out sooner.',
      },
      {
        q: 'Is a high efficiency furnace worth it?',
        a: 'In a cold place like Sioux Falls the furnace runs for many months, so efficiency often pays back faster than in warm states. Ask for the yearly running cost of each option so you can compare.',
      },
      {
        q: 'Do I need a permit for a new furnace in Sioux Falls?',
        a: 'Yes. Mechanical work in Sioux Falls city limits needs a permit and a licensed mechanical contractor, unless you own and live in a single family home and do the work yourself with a homeowner permit.',
      },
    ],
    related: ['furnace-repair', 'ac-installation', 'heat-pumps'],
    photo: 'snowHouse',
  },
  {
    slug: 'ac-repair',
    name: 'AC Repair',
    group: 'cooling',
    icon: 'ph:snowflake-bold',
    short: 'Warm air, ice on lines, leaks or a unit that will not start.',
    title: 'AC Repair in Sioux Falls, SD | Sioux Falls HVAC',
    description:
      'Air conditioner not cooling? Call for AC repair in Sioux Falls, Brandon, Harrisburg, Tea, Hartford and Dell Rapids. Central air and heat pumps.',
    h1: 'AC repair in Sioux Falls',
    intro: [
      'Sioux Falls summers can turn hot and sticky fast. When the air conditioner stops keeping up, the whole house feels it.',
      'Call and describe what the AC is doing. A tech will find the problem and give you the price before fixing it.',
    ],
    signsTitle: 'Signs your AC needs a repair',
    signs: [
      'The AC runs but the air from the vents feels warm',
      'Ice forms on the copper lines or the indoor coil',
      'Water pools near the furnace or indoor unit',
      'The outdoor unit hums but the fan does not spin',
      'The breaker trips when the AC starts',
      'The house feels damp even when the AC runs',
    ],
    steps: [
      { title: 'Check airflow first', text: 'Filter, vents, blower and coil. Poor airflow causes many cooling problems.' },
      { title: 'Test the outdoor unit', text: 'Capacitor, contactor, fan motor and compressor get tested.' },
      { title: 'Check refrigerant', text: 'Pressures are measured. Low refrigerant means a leak, and the leak should be found and fixed.' },
      { title: 'Fix and explain', text: 'You get a clear answer on what failed and what it costs before work starts.' },
    ],
    local: {
      title: 'Hot days do happen here',
      text: [
        'The National Weather Service record high for Sioux Falls is 110 degrees, set in 1936 and tied in 1988. Most summers are milder, but a few hot, humid weeks are enough to strain an older system.',
        'If your AC sat all winter, a quick spring check can catch a weak part before the first heat wave.',
      ],
    },
    faqs: [
      {
        q: 'Why is my AC running but not cooling?',
        a: 'Common causes are a dirty filter, a dirty outdoor coil, a failed capacitor, or low refrigerant from a leak. A tech can test each one.',
      },
      {
        q: 'Why is there ice on my AC lines?',
        a: 'Ice usually means poor airflow or low refrigerant. Turn the AC off and set the fan to ON so the ice can melt, then call for service.',
      },
      {
        q: 'Can you fix my AC the same day?',
        a: 'Call and ask. Many repairs use common parts that techs carry on the truck, so they can often be done on the first visit.',
      },
      {
        q: 'Should I repair or replace my AC?',
        a: 'If the AC is older, uses the old R22 refrigerant, or needs a compressor, replacement often makes more sense. Ask for the cost of both so you can decide.',
      },
    ],
    related: ['ac-installation', 'hvac-maintenance', 'heat-pumps'],
    photo: 'thermostat',
  },
  {
    slug: 'ac-installation',
    name: 'AC Installation',
    group: 'cooling',
    icon: 'ph:wind-bold',
    short: 'New central air sized for your home, matched to your furnace.',
    title: 'AC Installation and Replacement in Sioux Falls | Sioux Falls HVAC',
    description:
      'Central air conditioner installation and replacement in Sioux Falls, SD. Sized right, matched to your furnace, with a clear written quote.',
    h1: 'AC installation and replacement in Sioux Falls',
    intro: [
      'A new central air system should cool every room and pull moisture out of the air. Size and setup matter as much as the brand.',
      'Call for a look at your home. You get options in plain words and a written price before anything is ordered.',
    ],
    signsTitle: 'When it is time for a new AC',
    signs: [
      'The AC is old and needs repairs most summers',
      'It uses R22 refrigerant, which is no longer made',
      'The compressor has failed',
      'Upstairs rooms never cool down',
      'You are replacing the furnace and want both to match',
    ],
    steps: [
      { title: 'Size the system', text: 'The home is measured so the new AC is not too big or too small.' },
      { title: 'Match the parts', text: 'The outdoor unit, indoor coil and furnace blower need to work together for the rated efficiency.' },
      { title: 'Install to code', text: 'New line set or flushed lines, a level pad, a proper disconnect and the city permit.' },
      { title: 'Test the system', text: 'Refrigerant charge, airflow and drain lines are checked before the job is done.' },
    ],
    local: {
      title: 'Plan ahead for spring',
      text: [
        'Many Sioux Falls homeowners wait until the first hot week to find out the AC is done. Installers get busy fast once that happens.',
        'If your AC struggled last summer, late winter and early spring are easier times to plan a replacement.',
      ],
    },
    faqs: [
      {
        q: 'How long does AC installation take?',
        a: 'A swap of an outdoor unit and indoor coil in a typical home often takes about a day. New ductwork or line sets can add time.',
      },
      {
        q: 'Do I need to replace my furnace when I replace my AC?',
        a: 'Not always. If the furnace is newer and in good shape, a matched coil may be enough. If both are old, doing them together can save a second install visit.',
      },
      {
        q: 'What is a SEER2 rating?',
        a: 'SEER2 is the cooling efficiency rating used on new air conditioners. A higher number means lower running costs. Ask the installer what the yearly cost difference would be for your home.',
      },
      {
        q: 'Should I get a heat pump instead of an AC?',
        a: 'A heat pump cools like an AC and can also heat in milder weather. Many Sioux Falls homes pair one with a gas furnace for the coldest days. See the heat pump page for more.',
      },
    ],
    related: ['ac-repair', 'heat-pumps', 'furnace-installation'],
    photo: 'heatPumpBrick',
  },
  {
    slug: 'heat-pumps',
    name: 'Heat Pumps',
    group: 'heating',
    icon: 'ph:arrows-clockwise-bold',
    short: 'Heat and cool with one system. Cold climate and dual fuel setups.',
    title: 'Heat Pump Installation and Repair in Sioux Falls | Sioux Falls HVAC',
    description:
      'Heat pump installation, repair and dual fuel systems in Sioux Falls, SD. Cold climate heat pumps paired with a furnace for South Dakota winters.',
    h1: 'Heat pumps in Sioux Falls',
    intro: [
      'A heat pump cools your home in summer and heats it in spring and fall. It moves heat instead of burning fuel, so it can cost less to run.',
      'In Sioux Falls, most heat pumps are set up as dual fuel. The heat pump does the work most of the year and a gas furnace takes over on the coldest days.',
    ],
    signsTitle: 'A heat pump may fit your home if',
    signs: [
      'Your AC needs replacing and you want lower heating bills too',
      'You have electric heat or propane and want cheaper heat',
      'You want one system for heating and cooling',
      'Your current heat pump is not keeping up or makes odd noises',
    ],
    steps: [
      { title: 'Look at your home', text: 'Size, insulation and your current furnace decide what kind of heat pump fits.' },
      { title: 'Pick the setup', text: 'Dual fuel with your gas furnace, an all electric cold climate model, or a ductless system.' },
      { title: 'Set the switch point', text: 'On a dual fuel system the thermostat is set to switch to the furnace at the right outdoor temperature.' },
      { title: 'Install and test', text: 'Defrost, heating and cooling modes are all tested before the job is done.' },
    ],
    local: {
      title: 'Heat pumps and South Dakota cold',
      text: [
        'Older heat pumps struggled in deep cold. Newer cold climate models keep heating at much lower temperatures, but most Sioux Falls homes still keep a furnace or backup heat for the worst nights.',
        'A dual fuel setup lets the heat pump handle mild days and the furnace handle the rest.',
      ],
    },
    faqs: [
      {
        q: 'Do heat pumps work in Sioux Falls winters?',
        a: 'Yes, with the right setup. Cold climate heat pumps can heat well below freezing. For the coldest days, most homes here pair the heat pump with a gas furnace or electric backup heat.',
      },
      {
        q: 'What is a dual fuel system?',
        a: 'It is a heat pump paired with a gas furnace. The thermostat uses the heat pump when it is cheaper to run and switches to the furnace when it gets very cold.',
      },
      {
        q: 'Why is my heat pump blowing cool air in winter?',
        a: 'A heat pump runs a short defrost cycle in cold weather, which can feel cool for a few minutes. If it lasts longer, or the outdoor unit is covered in ice, call for service.',
      },
      {
        q: 'Can a heat pump replace my AC?',
        a: 'Yes. A heat pump cools just like a central air conditioner and adds heating on top.',
      },
    ],
    related: ['ductless-mini-splits', 'ac-installation', 'furnace-installation'],
    photo: 'heatPump',
  },
  {
    slug: 'ductless-mini-splits',
    name: 'Ductless Mini Splits',
    group: 'cooling',
    icon: 'ph:fan-bold',
    short: 'Heat and cool garages, additions, bonus rooms and homes without ducts.',
    title: 'Ductless Mini Split Installation in Sioux Falls | Sioux Falls HVAC',
    description:
      'Ductless mini split installation and repair in Sioux Falls, SD. Heat and cool additions, garages, sunrooms and older homes without ductwork.',
    h1: 'Ductless mini splits in Sioux Falls',
    intro: [
      'A ductless mini split heats and cools one room or area without any ductwork. A small outdoor unit connects to a wall unit inside through a small hole in the wall.',
      'It is a good fit for the rooms your main system never reaches.',
    ],
    signsTitle: 'Good places for a mini split',
    signs: [
      'A garage or shop you want to use all year',
      'A bonus room over the garage that is always too hot or too cold',
      'A finished basement, sunroom or addition',
      'An older home with boiler heat and no ducts for AC',
      'A home office you want to control on its own',
    ],
    steps: [
      { title: 'Plan the zones', text: 'Decide which rooms need heat, cooling or both, and where the wall units go.' },
      { title: 'Size each head', text: 'Each indoor unit is sized for its room so it does not short cycle.' },
      { title: 'Install the system', text: 'Mount the units, run the line set, wire the outdoor unit and seal the wall.' },
      { title: 'Show you the controls', text: 'You learn the remote or app, the modes and how to clean the filters.' },
    ],
    local: {
      title: 'Picking a model for our winters',
      text: [
        'If the mini split will be a main heat source, ask for a cold climate model rated to heat at low outdoor temperatures.',
        'In a garage or space you do not use every day, a mini split can keep things above freezing without running the whole house system.',
      ],
    },
    faqs: [
      {
        q: 'Can a mini split heat my garage in winter?',
        a: 'Yes. A cold climate mini split can heat a garage or shop in winter and cool it in summer. Insulating the garage first makes a big difference.',
      },
      {
        q: 'How many rooms can one mini split cover?',
        a: 'One outdoor unit can run one indoor unit or several, depending on the model. Each room usually gets its own indoor unit.',
      },
      {
        q: 'Do mini splits need maintenance?',
        a: 'Yes. Clean the indoor filters every month or two, keep the outdoor unit clear of snow and leaves, and have the system checked once a year.',
      },
    ],
    related: ['heat-pumps', 'ac-installation', 'hvac-maintenance'],
    photo: 'miniSplit',
  },
  {
    slug: 'hvac-maintenance',
    name: 'HVAC Maintenance',
    group: 'cooling',
    icon: 'ph:wrench-bold',
    short: 'Fall furnace and spring AC tune ups to catch problems early.',
    title: 'Furnace and AC Tune Ups in Sioux Falls | Sioux Falls HVAC',
    description:
      'Furnace tune ups, AC tune ups and HVAC maintenance in Sioux Falls, SD. Catch small problems before the first cold snap or heat wave.',
    h1: 'Furnace and AC tune ups in Sioux Falls',
    intro: [
      'Most furnace and AC breakdowns start as small problems. A yearly check catches a weak part before it fails on the coldest or hottest day.',
      'Book a furnace tune up in the fall and an AC tune up in the spring.',
    ],
    signsTitle: 'What a tune up checks',
    signs: [
      'Thermostat settings and wiring',
      'Filter, blower and airflow',
      'Burners, igniter, flame sensor and venting on the furnace',
      'Carbon monoxide check around the furnace',
      'Outdoor coil, capacitor and refrigerant on the AC',
      'Condensate drain and safety switches',
    ],
    steps: [
      { title: 'Clean', text: 'Burners, flame sensor and the outdoor coil get cleaned so the system runs as it should.' },
      { title: 'Test', text: 'Electrical parts, gas pressure, temperatures and airflow are measured.' },
      { title: 'Check safety', text: 'Venting, heat exchanger and carbon monoxide are checked on the furnace.' },
      { title: 'Report', text: 'You get a short list of anything that needs attention, with no pressure to fix it that day.' },
    ],
    local: {
      title: 'Timing for Sioux Falls',
      text: [
        'Fall is the best time for a furnace check, before the first real cold. Spring is the best time for the AC, before it gets hot.',
        'Between visits, change the filter every one to three months and keep snow and leaves off the outdoor unit.',
      ],
    },
    faqs: [
      {
        q: 'How often should I have my furnace checked?',
        a: 'Once a year, ideally in the fall. A furnace in a cold place like Sioux Falls runs many hours each winter, so a yearly check is worth it.',
      },
      {
        q: 'How often should I change my furnace filter?',
        a: 'Check it every month. Most one inch filters need changing every one to three months. Thicker media filters can last longer. Pets and remodeling mean more often.',
      },
      {
        q: 'Does a tune up really help?',
        a: 'A tune up can catch worn parts, dirty burners and safety issues early, and a clean system runs more efficiently. Many equipment makers also ask for yearly maintenance to keep the warranty valid.',
      },
    ],
    related: ['furnace-repair', 'ac-repair', 'emergency-hvac'],
    photo: 'livingRoom',
  },
  {
    slug: 'emergency-hvac',
    name: 'Emergency HVAC Service',
    group: 'heating',
    icon: 'ph:siren-bold',
    short: 'No heat in winter or no AC in a heat wave. Call right away.',
    title: 'Emergency Furnace and AC Service in Sioux Falls | Sioux Falls HVAC',
    description:
      'No heat or no AC in Sioux Falls? Call for emergency furnace and AC service. What to do while you wait, and when to call 911 or the gas company.',
    h1: 'Emergency heating and AC service in Sioux Falls',
    intro: [
      'No heat in January is an emergency here. So is no AC for an older family member in a heat wave.',
      'Call now and tell us what is going on. Below are the steps to keep your home safe while help is on the way.',
    ],
    signsTitle: 'Call right away if',
    signs: [
      'The furnace is out and it is below freezing outside',
      'Your carbon monoxide alarm is going off. Get everyone outside and call 911 first.',
      'You smell gas. Leave the house and call 911 or your gas company from outside.',
      'The furnace or AC smells like burning or the breaker keeps tripping',
      'Water is leaking from the furnace or AC onto the floor',
    ],
    steps: [
      { title: 'Check the simple things', text: 'Thermostat batteries and setting, the furnace switch, the breaker, and a clogged filter.' },
      { title: 'Protect the pipes', text: 'If there is no heat, open cabinet doors under sinks and let faucets drip on outside walls.' },
      { title: 'Stay safe', text: 'Do not use the oven or a grill to heat the house. Use space heaters only as the label says.' },
      { title: 'Call', text: 'Tell us what the system is doing and how cold or hot it is inside.' },
    ],
    local: {
      title: 'How cold it can get',
      text: [
        'The National Weather Service lists 42 below zero as the record low for Sioux Falls, and 38 below as the January record. A house can lose heat fast on nights like that.',
        'If you have an older family member, a baby, or someone with health problems at home, say so when you call.',
      ],
    },
    faqs: [
      {
        q: 'What should I do if my furnace stops in the middle of the night?',
        a: 'Check the thermostat, the furnace power switch and the breaker, and change the filter if it is dirty. If the heat does not come back, call for service and take steps to protect your pipes.',
      },
      {
        q: 'Is it safe to use a space heater while I wait?',
        a: 'Use space heaters only as the label says. Keep them away from anything that can burn, plug them straight into the wall, and never leave them on when no one is home.',
      },
      {
        q: 'What if my carbon monoxide alarm goes off?',
        a: 'Get everyone outside right away and call 911. Do not go back in until the fire department says it is safe. Then have the furnace checked before you use it again.',
      },
    ],
    related: ['furnace-repair', 'ac-repair', 'hvac-maintenance'],
    photo: 'snowStreet',
  },
];

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug);

export const groups = {
  heating: { label: 'Heating', note: 'Furnaces, heat pumps and no heat calls.' },
  cooling: { label: 'Cooling', note: 'Central air, mini splits and yearly tune ups.' },
} as const;
