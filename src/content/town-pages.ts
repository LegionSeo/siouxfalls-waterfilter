export interface TownPage {
  slug: string;
  name: string;
  /** Document title. Unique per town, and it names that town. */
  documentTitle: string;
  description: string;
  sub: string;
  answer: string;
  waterIntro: string;
  /** City water versus rural water versus private wells for this town. */
  sources: { title: string; text: string }[];
  problemsIntro: string;
  problems: string[];
  signsIntro: string;
  signs: string[];
  /** What to tell us when you call. */
  callList: string[];
  faqs: { q: string; a: string }[];
  mapNote: string;
  mapQuery: string;
  preview: string;
}

const softener = '/services/water-softeners';
const whole = '/services/whole-house-water-filtration';
const ro = '/services/reverse-osmosis-drinking-water';
const iron = '/services/iron-and-sulfur-removal';
const well = '/services/well-water-treatment';
const testing = '/services/water-testing';

export const townPagesContent: TownPage[] = [
  {
    slug: 'brandon',
    name: 'Brandon',
    documentTitle: 'Water Softeners and Filtration in Brandon, SD',
    description: 'Water softeners, filtration, and water testing in Brandon, SD. Help with hard water on city water, rural water, and private wells in the Split Rock Creek area.',
    sub: 'Hard water help for homes five miles east of Sioux Falls.',
    answer: 'Hard water is a common complaint in Brandon, whether you have been here for years or just moved into a new build. We help with softeners, filtration, and water testing across town. Call {phone} and tell us your street and your water source.',
    waterIntro: 'Your water in Brandon depends on where your home sits. Your water bill is the quickest way to find out who supplies it.',
    sources: [
      { title: 'Brandon city water', text: 'Local reporting describes the city drawing from wells in the Big Sioux and Split Rock Creek aquifers. Groundwater like this tends to carry hardness minerals. Your city publishes an annual water report with the latest numbers.' },
      { title: 'Rural water', text: 'Some homes just outside town are served by a rural water system. It is treated before it reaches you, and it can still be hard. Your bill will name your supplier.' },
      { title: 'A private well', text: `If you have your own well, you are in charge of testing it. Start with a [water test](${testing}) before you buy equipment.` },
    ],
    problemsIntro: 'Most Brandon calls come down to a few things.',
    problems: [
      `Scale on faucets and spotty dishes. A [softener](${softener}) is the usual answer.`,
      'A newer home with a softener loop but no softener yet.',
      `Chlorine taste or smell that you want gone at every tap. See [whole house filtration](${whole}).`,
      `Wanting better drinking water without buying bottles. See [reverse osmosis](${ro}).`,
    ],
    signsIntro: 'Here is what to look for around your Brandon home.',
    signs: ['White crust around faucets', 'Cloudy glasses after the dishwasher', 'Soap that will not lather', 'A water heater that pops or rumbles', 'Dry skin after a shower'],
    callList: ['Your street, so we know which part of town you are in', 'Whether you have city water, rural water, or a well', 'How many people live in your home', 'If you already have a softener, how old it is', 'Whether you have a softener loop near the water heater'],
    faqs: [
      { q: 'Is Brandon water hard?', a: `Groundwater in this area tends to be hard, and many homes here use a softener. Your city water report has the current numbers, and a [water test](${testing}) tells you what your own tap is doing.` },
      { q: 'Do newer Brandon homes need a softener?', a: 'A new home has new pipes and appliances, and that is the best time to protect them. Many newer homes already have a softener loop, which can make the install simpler.' },
      { q: 'Who supplies my water in Brandon?', a: 'Check your water bill. It will show if you are on city water or a rural water system. If you have no bill, you likely have a private well.' },
    ],
    mapNote: 'Tell us your street when you call so we can sort out your water source.',
    mapQuery: 'Brandon, South Dakota',
    preview: '/images/maps/brandon.webp',
  },
  {
    slug: 'harrisburg',
    name: 'Harrisburg',
    documentTitle: 'Hard Water Treatment and Softeners in Harrisburg, SD',
    description: 'Hard water treatment in Harrisburg, SD. Softeners, drinking water systems, and testing for new homes, older blocks by the tracks, and acreages nearby.',
    sub: 'From brand new subdivisions to older blocks by the tracks.',
    answer: 'A lot of Harrisburg homes are new, and new homes often come without a softener. If you are seeing scale on your faucets already, you are not imagining it. Call {phone} and we will help you figure out what your water needs.',
    waterIntro: 'Harrisburg grew fast, and homes here do not all get their water the same way.',
    sources: [
      { title: 'Town water', text: 'If you live inside city limits, you are likely on the municipal system. Ask for its annual water report to see the latest hardness numbers for your area.' },
      { title: 'Rural water', text: 'Homes on the edges of town may be on a rural water system. The water is treated before it reaches you, but hardness can still be a concern.' },
      { title: 'A private well', text: `Acreages near town may have a private well. See [well water treatment](${well}) if that is you.` },
    ],
    problemsIntro: 'Here is what we hear most from Harrisburg homeowners.',
    problems: [
      'Builder grade homes with a softener loop and nothing on it yet.',
      `Scale building up on a nearly new water heater. A [softener](${softener}) helps protect it.`,
      `Older homes near Railroad Avenue with stains or low pressure at some taps. A [water test](${testing}) is a good first step.`,
      `Families who want better water for bottles and lunches. See [reverse osmosis](${ro}).`,
    ],
    signsIntro: 'Even a brand new house can show these within months.',
    signs: ['Spots on new shower glass', 'Scale on a new faucet aerator', 'Dishes that never look clean', 'Stiff towels', 'Using more soap than you expected'],
    callList: ['Your neighborhood or nearest cross street', 'Your water source, if you know it', 'The year your home was built', 'Whether a softener loop was roughed in', 'What you have noticed so far'],
    faqs: [
      { q: 'My Harrisburg home is new. Do I really need a softener?', a: 'If your water is hard, scale starts forming right away. New fixtures and a new water heater are worth protecting. A quick test will show you where you stand.' },
      { q: 'What is a softener loop?', a: 'It is plumbing a builder may leave near the water heater so a softener can be added later. Many newer homes have one. Tell us if you can see two capped pipes or a labeled spot.' },
      { q: 'Can you work on older homes near the tracks too?', a: 'Yes. Older plumbing can behave differently, so tell us what you see and how old the home is when you call {phone}.' },
    ],
    mapNote: 'Harrisburg spreads out to the north and east. Your street helps us know your water source.',
    mapQuery: 'Harrisburg, South Dakota',
    preview: '/images/maps/harrisburg.webp',
  },
  {
    slug: 'tea',
    name: 'Tea',
    documentTitle: 'Water Softeners and Drinking Water Systems in Tea, SD',
    description: 'Water softeners and drinking water systems in Tea, SD. Hard water help for busy family homes, new builds, and older houses around town.',
    sub: 'Hard water help for busy homes and full laundry rooms.',
    answer: 'Tea is full of young families, and hard water hits busy homes hardest. It shows up in the laundry, the dishwasher, and the shower. Call {phone} and tell us what you are running into at home.',
    waterIntro: 'Most Tea homes are in town, but your supplier and your hardness are still worth checking.',
    sources: [
      { title: 'Town water', text: 'If you are on the city system, ask for your annual water report. It lists what is in your water, and many reports list hardness too.' },
      { title: 'Rural water', text: 'Some homes around Tea use a rural water system. Your bill will name your supplier, and that supplier publishes its own water report.' },
      { title: 'A private well', text: `Few homes in town have wells, but acreages outside town might. [Test a well every year](${testing}) for bacteria and nitrates.` },
    ],
    problemsIntro: 'With kids around, these are the problems we hear about most.',
    problems: [
      `Laundry that feels stiff and looks dull, even with extra detergent. A [softener](${softener}) can help.`,
      'Dishwashers leaving film on glasses and bottles.',
      `Parents wanting great tasting water for bottles, cups, and ice. See [reverse osmosis](${ro}).`,
      'Kids with dry, itchy skin after baths. Softened water may feel gentler on skin.',
    ],
    signsIntro: 'If your house is busy, watch for these.',
    signs: ['Detergent that does not seem to work', 'Film on sippy cups and bottles', 'Crusty shower heads', 'Scale on your humidifier', 'A water heater that seems to be working harder'],
    callList: ['Your address in Tea', 'How many people live in your home', 'How many loads of laundry you run in a week', 'Your water source', 'Whether you want softer water, better tasting water, or both'],
    faqs: [
      { q: 'What should I do first about hard water in Tea?', a: `Start with what you see, then get a real number. A [water test](${testing}) takes the guessing out of it.` },
      { q: 'Will a softener help with laundry?', a: 'Often yes. Soft water lets detergent work better, so clothes can feel softer and you may need less soap.' },
      { q: 'Is softened water okay for mixing baby formula?', a: 'Softeners add some sodium to water. Ask your doctor what is right for your baby. Many parents use a [reverse osmosis tap](' + ro + ') for drinking and mixing.' },
    ],
    mapNote: 'Tea sits just southwest of Sioux Falls in Lincoln County.',
    mapQuery: 'Tea, South Dakota',
    preview: '/images/maps/tea.webp',
  },
  {
    slug: 'hartford',
    name: 'Hartford',
    documentTitle: 'Well and Rural Water Treatment in Hartford, SD',
    description: 'Water treatment in Hartford, SD for town homes, rural water customers, and acreages on private wells. Softeners, iron removal, and water testing.',
    sub: 'Town water, rural water, and acreage wells west of Sioux Falls.',
    answer: 'Around Hartford, the home next door and the acreage down the road can have very different water. We help with softeners, iron and sulfur problems, and well water treatment. Call {phone} and tell us where you are and where your water comes from.',
    waterIntro: 'Hartford sits ten miles west of Sioux Falls with open country all around it. That means more variety in water than you might expect.',
    sources: [
      { title: 'Town water', text: 'If you live in town, your water comes through the city system. Your annual water report shows the latest numbers.' },
      { title: 'Rural water', text: 'Plenty of homes around Hartford use a rural water system. It is treated, but it can still be hard. Your bill names your supplier.' },
      { title: 'A private well', text: `Acreages may have their own wells. Iron, sulfur, and hardness can all show up. See [well water treatment](${well}).` },
    ],
    problemsIntro: 'Problems around Hartford depend on your water source.',
    problems: [
      `Orange stains from iron on well water. See [iron and sulfur removal](${iron}).`,
      'A rotten egg smell at some or all of your taps.',
      `Hard water scale in town and on rural water. A [softener](${softener}) is usually the fix.`,
      'An older treatment system on an acreage that no longer keeps up.',
    ],
    signsIntro: 'Keep an eye out for these around your Hartford home.',
    signs: ['Rust colored stains in the toilet', 'Egg smell in the hot water or cold water', 'Heavy white scale on fixtures', 'Grit in your faucet screens', 'Laundry that picks up color'],
    callList: ['Whether you are in town or out on an acreage', 'Your water source', 'If on a well, when it was last tested', 'What equipment you already have', 'Whether the smell or stain is hot, cold, or both'],
    faqs: [
      { q: 'I am on an acreage near Hartford. Where do I start?', a: `Start with a [water test](${testing}). It tells you what is in your well and what order treatment should go in.` },
      { q: 'Can one system handle iron and hardness?', a: 'Sometimes, if the iron level is low. Higher iron usually needs its own step before the softener. Your test results will guide that.' },
      { q: 'Do you serve homes outside of town?', a: 'Yes. Tell us your road and nearest town when you call {phone} so we can confirm the trip.' },
    ],
    mapNote: 'Hartford is about 10 miles west of Sioux Falls in Minnehaha County.',
    mapQuery: 'Hartford, South Dakota',
    preview: '/images/maps/hartford.webp',
  },
  {
    slug: 'dell-rapids',
    name: 'Dell Rapids',
    documentTitle: 'Hard Water and Well Water Help in Dell Rapids, SD',
    description: 'Hard water and well water help in Dell Rapids, SD. Softeners, filtration, and testing for homes in town and along the Big Sioux River valley.',
    sub: 'Older homes in town and wells along the Big Sioux valley.',
    answer: 'Dell Rapids sits in the Big Sioux River valley, and many homes here have been around a long time. Hard water and old scale often go together. Call {phone} and tell us about your home and your water.',
    waterIntro: 'Your water in Dell Rapids depends on whether you are in town or out in the valley.',
    sources: [
      { title: 'Town water', text: 'If you are in city limits, your water comes through the municipal system. Your annual report shows what is in it.' },
      { title: 'Rural water', text: 'Homes outside town may use a rural water system. Your bill names your supplier.' },
      { title: 'A private well', text: 'Shallow wells in a river valley can respond to what happens on the surface. That is one reason yearly testing for bacteria and nitrates matters so much here.' },
    ],
    problemsIntro: 'These are the problems that fit Dell Rapids homes best.',
    problems: [
      `Old scale in older plumbing, along with low flow at some taps. Start with a [water test](${testing}).`,
      `Hard water on fixtures and appliances. See [water softeners](${softener}).`,
      `Valley wells with iron or a musty smell. See [well water treatment](${well}).`,
      `Sediment in faucet screens after heavy rain or snowmelt. See [whole house filtration](${whole}).`,
    ],
    signsIntro: 'In an older home or on a valley well, watch for these.',
    signs: ['Weak flow at only some faucets', 'Water that changes after big rains', 'Crusty aerators', 'Brown staining in sinks', 'A musty smell in the water'],
    callList: ['Your street or road', 'About how old your home is', 'Your water source', 'If on a well, how deep it is if you know', 'Whether things change after rain or snowmelt'],
    faqs: [
      { q: 'My Dell Rapids home is old. Can a softener help?', a: 'A softener stops new scale from forming. It will not undo every bit of old buildup, and older pipes may need a plumber to look at them. We will tell you what we see.' },
      { q: 'Should I worry about my well after flooding?', a: 'Yes. Do not drink from a well that flooded until it has been tested and cleared. Your county or state health resources can help with testing.' },
      { q: 'Does changing water after rain mean a problem?', a: 'It can mean surface water is reaching your well. Stop drinking the water if you are worried, and get it tested.' },
    ],
    mapNote: 'Dell Rapids is north of Sioux Falls in Minnehaha County, along the Big Sioux River.',
    mapQuery: 'Dell Rapids, South Dakota',
    preview: '/images/maps/dell-rapids.webp',
  },
  {
    slug: 'canton',
    name: 'Canton',
    documentTitle: 'Water Softeners and Water Testing in Canton, SD',
    description: 'Water softeners and water testing in Canton, SD. Help for older homes near downtown, river properties, and acreages south of Sioux Falls.',
    sub: 'Help for older homes and river properties in the county seat.',
    answer: 'Canton has homes that go back a long way, and hard water has had years to leave its mark. We help you test your water and find a treatment that fits your home. Call {phone} and tell us what is going on.',
    waterIntro: 'Canton is 18 miles south of Sioux Falls, and water sources vary across the area.',
    sources: [
      { title: 'Town water', text: 'If you are in town, you are on the city system. Ask the city for its annual water report to see the latest numbers.' },
      { title: 'Rural water', text: 'Many homes around Canton use a rural water system. Your bill will name your supplier.' },
      { title: 'A private well', text: `River properties and acreages may have wells. Those are yours to test. See [water testing](${testing}).` },
    ],
    problemsIntro: 'Older homes and country properties each bring their own problems.',
    problems: [
      `Years of scale in water heaters and older fixtures. A [softener](${softener}) helps stop more from forming.`,
      'Older galvanized pipes that can add rust to your water.',
      `Iron or sulfur on acreage wells. See [iron and sulfur removal](${iron}).`,
      `Wanting cleaner tasting water at the kitchen sink. See [reverse osmosis](${ro}).`,
    ],
    signsIntro: 'Here is what often shows up in Canton homes.',
    signs: ['Rusty water when you first turn on a tap', 'A water heater that is loud or slow', 'Crusty fixtures that do not clean up', 'Off tastes at the kitchen sink', 'Stained laundry'],
    callList: ['Your street or road', 'About how old your home is', 'If you know what your pipes are made of', 'Your water source', 'Whether the rust clears after the water runs'],
    faqs: [
      { q: 'Why is my water rusty only at first?', a: 'That often points to older pipes, since water that sits in them can pick up rust. Tell us if it clears up after the water runs for a bit.' },
      { q: 'Can you help me if I am outside Canton?', a: 'Yes. Tell us your road and nearest town when you call {phone}.' },
      { q: 'Will a softener fix old rusty pipes?', a: 'No. A softener handles hardness. Pipes that are rusting may need a plumber. We will be honest about what water treatment can and cannot do.' },
    ],
    mapNote: 'Canton is the Lincoln County seat, south of Sioux Falls on the Big Sioux River.',
    mapQuery: 'Canton, South Dakota',
    preview: '/images/maps/canton.webp',
  },
  {
    slug: 'lennox',
    name: 'Lennox',
    documentTitle: 'Water Treatment and Softeners in Lennox, SD',
    description: 'Water treatment and softeners in Lennox, SD. Hard water help for town homes and well water treatment for nearby farms and acreages.',
    sub: 'Town homes and the farms right next to them.',
    answer: 'In Lennox, town streets give way to farm ground fast. So your water might come from a town system, a rural line, or your own well. We help with all three. Call {phone} and tell us where you are.',
    waterIntro: 'Lennox is 20 miles southwest of Sioux Falls. Knowing your source is the first step.',
    sources: [
      { title: 'Town water', text: 'Homes in town use the city system. Ask for the annual water report to see what is in it.' },
      { title: 'Rural water', text: 'Many farms and acreages nearby use a rural water system. It is treated before it reaches you, and it can still be hard.' },
      { title: 'A private well', text: 'Wells in farm country deserve regular testing, including for nitrates. Softeners and most filters do not treat nitrates.' },
    ],
    problemsIntro: 'These are the concerns that come up around Lennox.',
    problems: [
      `Well water near fields that needs testing for nitrates and bacteria. See [water testing](${testing}).`,
      `Iron stains on farm wells. See [iron and sulfur removal](${iron}).`,
      `Hard water in town homes. See [water softeners](${softener}).`,
      `Clean drinking water at the kitchen tap. See [reverse osmosis](${ro}).`,
    ],
    signsIntro: 'Some of these you can see. Others only a test will catch.',
    signs: ['Orange stains in tubs and toilets', 'Heavy scale in the kettle', 'A metal taste', 'A well that has not been tested this year', 'A new baby in a home on well water'],
    callList: ['Whether you are in town or on a farm or acreage', 'Your water source', 'When your well was last tested', 'If you have animals or irrigation on the same well', 'What you already have for treatment'],
    faqs: [
      { q: 'Should I test my well for nitrates near Lennox?', a: 'Yes. Wells near farm ground should be tested regularly, and at least every year. Nitrates cannot be seen, smelled, or tasted, and they are a special concern for infants.' },
      { q: 'Can one system cover my house and my shop?', a: 'It depends on how your water lines run. Tell us how your buildings are connected when you call {phone}.' },
      { q: 'Does a softener remove nitrates?', a: `Standard softeners are not the right tool for nitrates. If your test shows them, ask about [well water treatment](${well}) and talk to your health care provider about drinking water for infants.` },
    ],
    mapNote: 'Lennox is about 20 miles southwest of Sioux Falls in Lincoln County.',
    mapQuery: 'Lennox, South Dakota',
    preview: '/images/maps/lennox.webp',
  },
];

export function townPageBySlug(slug: string | undefined) {
  return townPagesContent.find((page) => page.slug === slug);
}
