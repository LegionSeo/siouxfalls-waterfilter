import type { PhotoKey } from './photos';
import type { SourceKey } from './sources';

export interface Faq {
  q: string;
  a: string;
}

export interface Service {
  slug: string;
  name: string;
  /** Short label for menus and lists. */
  short: string;
  summary: string;
  title: string;
  description: string;
  h1: string;
  lede: string;
  photo?: PhotoKey;
  intro: string[];
  includes: string[];
  /** Local notes. Any line with a source must match that source. */
  local: { text: string; source?: SourceKey }[];
  faqs: Faq[];
  related: string[];
}

export const SERVICES: Service[] = [
  {
    slug: 'concrete-driveways',
    name: 'Concrete driveways',
    short: 'Driveways',
    summary: 'New driveways, wider driveways, and full tear out and replace.',
    title: 'Concrete Driveways in Sioux Falls, SD | Sioux Falls Concrete',
    description:
      'New concrete driveways and driveway replacement in Sioux Falls, SD. Tear out, base prep, rebar or mesh, and a clean broom finish. Call for a quote.',
    h1: 'Concrete driveways in Sioux Falls',
    lede: 'A driveway takes cars, plows, and salt every winter. We pour it to hold up to all three.',
    photo: 'driveway',
    intro: [
      'Most driveway calls are for one of three jobs. The old slab is cracked and sinking. The family needs one more parking spot. Or a new house needs its first driveway.',
      'We look at the slope, the soil, and how water runs off before we price anything. A driveway that drains away from the garage and the house lasts longer.',
    ],
    includes: [
      'Tear out and haul away of the old driveway',
      'Grading and a compacted gravel base',
      'Forms set to the right slope for drainage',
      'Steel reinforcement where the job calls for it',
      'Control joints cut to guide cracks into straight lines',
      'Broom finish for grip, or a decorative edge if you want one',
    ],
    local: [
      {
        text: 'The part of the driveway between the sidewalk and the street is the approach. In Sioux Falls, approach repair must be done by a bonded and insured contractor registered with the City.',
        source: 'cityPermit',
      },
      {
        text: 'Where a public sidewalk crosses your driveway, the city standard is 6 inches thick through the driveway area.',
        source: 'cityStandards',
      },
      {
        text: 'Concrete that will see deicing salt should reach about 4,000 psi before it goes through repeated freeze and thaw. Ask about timing if your pour is late in the year.',
        source: 'cementFreezeThaw',
      },
    ],
    faqs: [
      {
        q: 'How much does a new concrete driveway cost in Sioux Falls?',
        a: 'It depends on the size, the thickness, whether old concrete has to come out, and how easy it is to get a truck close. Call and we will set up a time to measure and give you a price.',
      },
      {
        q: 'Can you make my driveway wider?',
        a: 'Yes. We can add a strip along one or both sides, or replace the whole slab if the old one is in rough shape. We will tell you which makes more sense after we see it.',
      },
      {
        q: 'When can I park on a new driveway?',
        a: 'It depends on the mix and the weather. Your crew will give you a date before they leave. Walking on it comes sooner than driving on it.',
      },
    ],
    related: ['sidewalks', 'garage-floors', 'concrete-repair'],
  },
  {
    slug: 'concrete-patios',
    name: 'Concrete patios',
    short: 'Patios',
    summary: 'Backyard patios, fire pit pads, and slabs for grills and hot tubs.',
    title: 'Concrete Patios in Sioux Falls, SD | Sioux Falls Concrete',
    description:
      'Concrete patios in Sioux Falls, SD. Backyard patios, fire pit pads, hot tub slabs, and patio extensions. Broom or stamped finish. Call for a quote.',
    h1: 'Concrete patios in Sioux Falls',
    lede: 'A patio should be the easy part of summer. Flat where you put the table, sloped where the rain goes.',
    photo: 'finishing',
    intro: [
      'We pour new patios, add on to old ones, and set pads for fire pits, grills, sheds, and hot tubs.',
      'Before the forms go in, we talk through how you will use it. Where the table sits, where the steps land, and where water should drain all shape the slab.',
    ],
    includes: [
      'Layout and size planning on site',
      'Digging out sod and soil to the right depth',
      'Compacted gravel base',
      'Slope away from the house so water drains off',
      'Plain, broom, exposed aggregate, or stamped finish',
      'Pads sized for hot tubs and sheds',
    ],
    local: [
      {
        text: 'Freeze and thaw is hard on outdoor slabs. Air entrained concrete holds up much better in wet, freezing weather, so it is the mix to ask for here.',
        source: 'cementFreezeThaw',
      },
      {
        text: 'A hot tub is heavy when full. Tell us the make and model so the pad is sized and reinforced for it.',
      },
    ],
    faqs: [
      {
        q: 'Should my patio be plain or stamped?',
        a: 'Plain or broom finished concrete costs less and is easy to keep up. Stamped concrete looks like stone or brick and needs a sealer every few years. We can show you both.',
      },
      {
        q: 'Can you pour a patio next to my existing one?',
        a: 'Yes. We can tie a new section into an old slab or set a joint between them. The color will not match at first, so some people choose a border to break it up.',
      },
    ],
    related: ['stamped-concrete', 'sidewalks', 'concrete-repair'],
  },
  {
    slug: 'sidewalks',
    name: 'Sidewalks, walkways, and steps',
    short: 'Sidewalks',
    summary: 'Public sidewalk panels, front walks, and concrete steps.',
    title: 'Sidewalk Repair and Replacement in Sioux Falls, SD | Sioux Falls Concrete',
    description:
      'Sidewalk repair and replacement in Sioux Falls, SD. City sidewalk panels, front walks, and concrete steps, with the city permit handled. Call for a quote.',
    h1: 'Sidewalk repair and replacement in Sioux Falls',
    lede: 'Got a city notice about your sidewalk? Or a front walk that tips toward the house? We fix both.',
    photo: 'residentialFlatwork',
    intro: [
      'Public sidewalk work in Sioux Falls has its own rules. You need a permit, and paid crews have to be bonded and insured with the City. We handle the permit as part of the job.',
      'We also pour front walks, side walks to the backyard, and concrete steps on private property.',
    ],
    includes: [
      'Sidewalk permit with the City of Sioux Falls',
      'Tear out of marked panels',
      'Compacted granular base',
      'Forms, pour, and broom finish to city standard',
      'Front walks and walks to the back yard',
      'Concrete steps and landings',
    ],
    local: [
      {
        text: 'You need a permit before repairing, replacing, or installing a sidewalk in Sioux Falls.',
        source: 'cityPermit',
      },
      {
        text: 'Property owners are responsible for sidewalk repair costs. Anyone paid to do the work must be bonded and insured with the City.',
        source: 'cityRepairGuide',
      },
      {
        text: 'City standard: 4 inches thick for a standard sidewalk, at least 2 inches of compacted granular base, and contraction joints every 5 feet.',
        source: 'cityStandards',
      },
      {
        text: 'Widths: 4 feet on local streets and cul de sacs, 5 feet on collector and arterial streets and in commercial areas, 6 feet when the walk is at the back of the curb.',
        source: 'cityStandards',
      },
    ],
    faqs: [
      {
        q: 'The city marked my sidewalk. What now?',
        a: 'Painted marks show panels or edges that need work. Call us with your address. We will look at the marked panels, pull the permit, and give you a price to fix them.',
      },
      {
        q: 'Can a raised panel be ground down instead of replaced?',
        a: 'Sometimes. City rules allow grinding small offsets up to 1 1/4 inch. Bigger offsets, and panels lifted by tree roots, have to be replaced. A permit and inspection are still needed either way.',
      },
      {
        q: 'Who fixes the corner by the crosswalk?',
        a: 'In Sioux Falls, pedestrian ramps and the corner panel at an intersection are the City’s job, not the homeowner’s.',
      },
    ],
    related: ['concrete-repair', 'concrete-driveways', 'concrete-patios'],
  },
  {
    slug: 'garage-floors',
    name: 'Garage floors and slabs',
    short: 'Garage floors',
    summary: 'New garage slabs, replacement floors, and shop and shed slabs.',
    title: 'Garage Floors and Concrete Slabs in Sioux Falls, SD | Sioux Falls Concrete',
    description:
      'Garage floor replacement and new concrete slabs in Sioux Falls, SD. Garages, shops, sheds, and pole barns, poured level with a smooth finish. Call for a quote.',
    h1: 'Garage floors and concrete slabs in Sioux Falls',
    lede: 'A garage floor takes snow melt, road salt, and car weight every day of winter. It needs to be poured for that.',
    photo: 'shoveling',
    intro: [
      'We replace cracked and sunken garage floors, and pour new slabs for detached garages, shops, sheds, and pole buildings.',
      'Inside a garage the floor should be smooth and pitched so melt water runs out the door, not toward the walls.',
    ],
    includes: [
      'Tear out of the old floor when needed',
      'Base prep and compaction',
      'Vapor barrier where it fits the use',
      'Reinforcement sized to the load',
      'Pitch to the door or a floor drain',
      'Smooth trowel finish inside, broom finish at the apron',
    ],
    local: [
      {
        text: 'A new garage or shop usually needs a building permit. Check with the city or county where the building sits. We can tell you what we see most often.',
      },
      {
        text: 'Salt from your car drips onto the floor all winter. Concrete that sees deicers should gain about 4,000 psi of strength before repeated freeze and thaw.',
        source: 'cementFreezeThaw',
      },
    ],
    faqs: [
      {
        q: 'Can you replace a garage floor without touching the walls?',
        a: 'Often yes. We cut the old floor away from the walls, remove it in pieces, and pour the new floor inside. We look at the footing and the walls first to make sure they are sound.',
      },
      {
        q: 'Do you pour slabs for pole barns and shops?',
        a: 'Yes. Tell us the size, what will park or sit on it, and whether you want floor drains or in floor heat tubing laid in before the pour.',
      },
    ],
    related: ['foundations', 'concrete-driveways', 'commercial-concrete'],
  },
  {
    slug: 'stamped-concrete',
    name: 'Stamped and decorative concrete',
    short: 'Stamped concrete',
    summary: 'Stamped patterns, color, exposed aggregate, and borders.',
    title: 'Stamped and Decorative Concrete in Sioux Falls, SD | Sioux Falls Concrete',
    description:
      'Stamped and decorative concrete in Sioux Falls, SD. Patios and walks that look like stone, slate, or brick, plus color and exposed aggregate. Call for a quote.',
    h1: 'Stamped and decorative concrete in Sioux Falls',
    lede: 'Stamped concrete gives you the look of stone or brick in one solid slab, with no pavers to heave or weeds to pull.',
    intro: [
      'Stamped concrete is pressed with patterns while it is still soft. Color goes in the mix, on the surface, or both. The result can look like slate, flagstone, brick, or wood plank.',
      'We also do exposed aggregate, colored borders, and a plain center with a stamped edge for a lower cost.',
    ],
    includes: [
      'Pattern and color picks before the pour',
      'Integral color, color hardener, and release',
      'Stamping while the slab is workable',
      'Clean cut joints that follow the pattern',
      'Sealer to protect color and finish',
      'Stamped borders around plain slabs',
    ],
    local: [
      {
        text: 'Sealer helps stamped concrete hold its color and shrug off salt and water. Plan to reseal every few years. We can tell you which sealer we used.',
      },
      {
        text: 'Decorative slabs still face freeze and thaw. The same air entrained mix that protects a driveway protects a stamped patio.',
        source: 'cementFreezeThaw',
      },
    ],
    faqs: [
      {
        q: 'Is stamped concrete slippery?',
        a: 'Smooth sealed surfaces can be slick when wet or icy. A grit additive in the sealer adds grip. Ask for it on steps and walkways.',
      },
      {
        q: 'Will stamped concrete crack?',
        a: 'All concrete can crack. Joints cut into the pattern give cracks a place to go where they are hard to see.',
      },
    ],
    related: ['concrete-patios', 'sidewalks', 'concrete-driveways'],
  },
  {
    slug: 'foundations',
    name: 'Foundations, footings, and slabs',
    short: 'Foundations',
    summary: 'Footings, frost walls, and slabs on grade for garages and additions.',
    title: 'Concrete Foundations and Footings in Sioux Falls, SD | Sioux Falls Concrete',
    description:
      'Concrete foundations, footings, frost walls, and slabs on grade in Sioux Falls, SD, for garages, additions, and outbuildings. Call for a quote.',
    h1: 'Concrete foundations and footings in Sioux Falls',
    lede: 'Everything you build sits on this. It has to go below frost and be poured right the first time.',
    photo: 'foundationWall',
    intro: [
      'We pour footings, frost walls, and slabs on grade for detached garages, additions, three season rooms, and outbuildings.',
      'Foundation work runs with a building permit and inspections. We work from your plans and keep the inspector’s schedule in mind.',
    ],
    includes: [
      'Footings dug and formed to the plan',
      'Frost walls and stem walls',
      'Rebar placed and tied before inspection',
      'Anchor bolts set for the framer',
      'Slab on grade with base and vapor barrier',
      'Pads for decks, posts, and equipment',
    ],
    local: [
      {
        text: 'Footings must sit below the frost line set by the local building code. Your plans and permit will list the depth. We pour to that number.',
      },
      {
        text: 'Concrete has to be kept from freezing until it gains early strength, about 500 psi. Cold weather pours need blankets or heat.',
        source: 'cementFreezeThaw',
      },
    ],
    faqs: [
      {
        q: 'Do you pull the building permit?',
        a: 'Usually the general contractor or homeowner pulls the building permit for the whole project. We pour to the approved plans and are ready for the footing inspection.',
      },
      {
        q: 'Can you pour a foundation in winter?',
        a: 'It can be done, but it costs more. The ground cannot be frozen, and the concrete has to be kept warm while it cures. We will talk through it with you.',
      },
    ],
    related: ['garage-floors', 'commercial-concrete', 'concrete-repair'],
  },
  {
    slug: 'concrete-repair',
    name: 'Concrete repair and replacement',
    short: 'Repair',
    summary: 'Cracked, sunken, and flaking concrete, fixed or replaced.',
    title: 'Concrete Repair and Replacement in Sioux Falls, SD | Sioux Falls Concrete',
    description:
      'Concrete repair in Sioux Falls, SD. Cracked, sunken, heaved, and flaking driveways, walks, steps, and patios. We tell you when to repair and when to replace.',
    h1: 'Concrete repair and replacement in Sioux Falls',
    lede: 'Not every crack means a new slab. We tell you straight when a repair will hold and when it will not.',
    photo: 'machinePour',
    intro: [
      'Common calls: a sidewalk panel that tips, steps pulling away from the house, a driveway sunk at the garage, or a surface flaking after a few winters.',
      'Some of that can be fixed. Some of it needs to come out. We walk it with you and give you both options when both make sense.',
    ],
    includes: [
      'Crack sealing on slabs that are still sound',
      'Replacing single panels instead of the whole slab',
      'Step and stoop replacement',
      'Fixing low spots that hold water or ice',
      'Removing flaking and scaled concrete',
      'Sealing to slow down salt damage',
    ],
    local: [
      {
        text: 'On public sidewalks in Sioux Falls, offsets up to 1 1/4 inch can be ground. Bigger ones must be replaced. Panels lifted by tree roots must be replaced, not ground.',
        source: 'cityStandards',
      },
      {
        text: 'Mudjacking is allowed on a settled public sidewalk panel, but it is not recommended when a tree root is the cause. A permit and inspection are still needed.',
        source: 'cityFaq',
      },
      {
        text: 'Flaking, called scaling, often comes from freeze and thaw with deicing salt. Strong, air entrained concrete resists it best.',
        source: 'cementFreezeThaw',
      },
    ],
    faqs: [
      {
        q: 'Should I repair or replace my driveway?',
        a: 'If the slab is mostly level and the cracks are narrow, sealing can buy years. If it is broken into pieces, sunken, or badly flaked, replacing the worst sections or the whole slab is usually the better spend.',
      },
      {
        q: 'Why is my concrete flaking?',
        a: 'Surface flaking usually comes from water and salt freezing in the top layer. It is worse on concrete that was finished wet or did not have enough air in the mix.',
      },
    ],
    related: ['sidewalks', 'concrete-driveways', 'concrete-patios'],
  },
  {
    slug: 'commercial-concrete',
    name: 'Commercial concrete and flatwork',
    short: 'Commercial',
    summary: 'Parking areas, curb and gutter, dumpster pads, and walks for businesses.',
    title: 'Commercial Concrete Contractors in Sioux Falls, SD | Sioux Falls Concrete',
    description:
      'Commercial concrete flatwork in Sioux Falls, SD. Parking areas, sidewalks, curb and gutter, dumpster pads, and approaches for businesses and property managers.',
    h1: 'Commercial concrete in Sioux Falls',
    lede: 'Flatwork for businesses, churches, rentals, and property managers, scheduled around your open hours.',
    photo: 'chutePour',
    intro: [
      'We pour and replace parking areas, entry walks, curb and gutter, dumpster pads, loading areas, and driveway approaches.',
      'For occupied sites we plan the work in sections so customers and tenants can still get in.',
    ],
    includes: [
      'Parking lot sections and approaches',
      'Curb and gutter',
      'Dumpster and equipment pads',
      'Entry walks and ADA ramps on private property',
      'Loading dock aprons',
      'Phased work to keep doors open',
    ],
    local: [
      {
        text: 'Commercial area sidewalks in the public right of way are 5 feet wide by city standard, or 6 feet at the back of the curb.',
        source: 'cityStandards',
      },
      {
        text: 'Work in the city right of way needs a contractor that is bonded and insured with the City.',
        source: 'cityRowContractors',
      },
    ],
    faqs: [
      {
        q: 'Can you work after hours or on weekends?',
        a: 'Often yes, for an added cost. Tell us your hours and we will plan the pour and the cure around them.',
      },
      {
        q: 'Do you handle property manager punch lists?',
        a: 'Yes. Send the list of addresses and items. We can price them as one job and schedule them together.',
      },
    ],
    related: ['concrete-driveways', 'sidewalks', 'foundations'],
  },
];

export function serviceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
