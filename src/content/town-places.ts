import type { PhotoSlot } from '../config/site';

export interface TownPlace {
  slug: string;
  photo: PhotoSlot;
  caption: string;
  author: string;
  license: string;
  licenseUrl: string;
  sourceUrl: string;
  heading: string;
  intro: string[];
}

function placePhoto(base: string, alt: string, width: number, height: number, sourceUrl: string): PhotoSlot {
  return {
    alt,
    width,
    height,
    src: `/images/${base}-1600.webp`,
    webpSrcset: `/images/${base}-800.webp 800w, /images/${base}-1600.webp 1600w`,
    avifSrcset: `/images/${base}-800.avif 800w, /images/${base}-1600.avif 1600w`,
    note: `Resized from ${sourceUrl}`,
  };
}

export const townPlaces: TownPlace[] = [
  {
    slug: 'brandon',
    photo: placePhoto('place-brandon', 'Downtown Brandon, SD', 1600, 900, 'https://commons.wikimedia.org/wiki/File:Downtown_Brandon.jpg'),
    caption: 'Downtown Brandon, looking north on Main Street.',
    author: 'TCN7JM',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Downtown_Brandon.jpg',
    heading: 'A growing city between two waterways',
    intro: [
      'Brandon is in Minnehaha County, five miles east of Sioux Falls. The Big Sioux River and Split Rock Creek both run through the city. Interstate 90 runs along the north side of town.',
      'The census counted 3,238 housing units in 2010 and 4,038 in 2020. That is about 800 more homes in ten years. If you live in one of them, your water equipment may be new. If you live near Main Street, it may not be.',
    ],
  },
  {
    slug: 'harrisburg',
    photo: placePhoto('place-harrisburg', 'A DAIR locomotive in Harrisburg, SD', 1600, 1067, 'https://commons.wikimedia.org/wiki/File:DAIR_3024,_Harrisburg_-_Flickr_-_chief_huddleston.jpg'),
    caption: 'A DAIR locomotive in Harrisburg.',
    author: 'Jerry Huddleston',
    license: 'CC BY 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:DAIR_3024,_Harrisburg_-_Flickr_-_chief_huddleston.jpg',
    heading: 'The railroad town south of Sioux Falls',
    intro: [
      'Harrisburg is in Lincoln County, about 2.7 miles from the south edge of Sioux Falls. The town grew up with the railroad. The first train came through on August 1, 1879.',
      'The 2010 census counted 1,507 housing units. The 2020 census counted 2,399. So a lot of Harrisburg homes are fairly new, with older blocks close to the tracks.',
    ],
  },
  {
    slug: 'tea',
    photo: placePhoto('place-tea', 'Entrance to Tea Area High School in Tea, SD', 1600, 1205, 'https://commons.wikimedia.org/wiki/File:Tea_Area_High_School.jpg'),
    caption: 'The entrance to Tea Area High School.',
    author: 'WavingDolphin',
    license: 'CC0 1.0',
    licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Tea_Area_High_School.jpg',
    heading: 'A young town that grew fast',
    intro: [
      'Tea is a suburb of Sioux Falls in Lincoln County. The town was laid out in 1894. The census counted 600 housing units in 2000 and 1,970 in 2020.',
      'In 2020 the median age here was 29.7, and 36.1 percent of residents were under 18. That means many busy homes with young kids, full laundry rooms, and hard working dishwashers.',
    ],
  },
  {
    slug: 'hartford',
    photo: placePhoto('place-hartford', 'Downtown Hartford, SD', 1600, 756, 'https://commons.wikimedia.org/wiki/File:Hartford,_South_Dakota_5.jpg'),
    caption: 'Downtown Hartford.',
    author: 'Jon Platek',
    license: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Hartford,_South_Dakota_5.jpg',
    heading: 'Town streets with open country all around',
    intro: [
      'Hartford began as Oaksville in 1878 and took its current name in 1881. You are in Minnehaha County, about 10 miles west of Sioux Falls. The 2020 census counted 3,354 people and 1,294 housing units.',
      'West Central High School serves students from Hartford, Humboldt, the Wall Lake area, and Ellis. That wide map is a good picture of the area. Some homes are on town streets, and others are out on acreages.',
    ],
  },
  {
    slug: 'dell-rapids',
    photo: placePhoto('place-dell-rapids', 'Downtown Dell Rapids, SD', 1600, 1067, 'https://commons.wikimedia.org/wiki/File:Downtown_Dell_Rapids,_South_Dakota.JPG'),
    caption: 'Downtown Dell Rapids in winter.',
    author: 'Michaelzamboni',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Downtown_Dell_Rapids,_South_Dakota.JPG',
    heading: 'Quartzite downtown on the Big Sioux',
    intro: [
      'Dell Rapids is in Minnehaha County, on the Big Sioux River. After a fire burned most of the main street, the town was rebuilt in Sioux quartzite, the pink stone quarried here. The 2020 census counted 3,996 people.',
      'The river shapes more than the view. The US Geological Survey describes the Big Sioux River and the glacial aquifer under its flood plain as the major water sources in the valley between Sioux Falls and Dell Rapids.',
    ],
  },
  {
    slug: 'canton',
    photo: placePhoto('place-canton', 'Downtown Canton, SD', 1600, 785, 'https://commons.wikimedia.org/wiki/File:Canton,_South_Dakota_5.jpg'),
    caption: 'Downtown Canton.',
    author: 'AlexiusHoratius',
    license: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Canton,_South_Dakota_5.jpg',
    heading: 'The county seat on the Big Sioux',
    intro: [
      'Canton is the Lincoln County seat, 18 miles south of Sioux Falls. The city sits on the Big Sioux River, across from Beloit, Iowa. Newton Hills State Park is six miles south.',
      'Downtown keeps buildings from the late 1800s. The Lincoln County Courthouse was built in 1889. The 2020 census counted 3,066 people and 1,375 housing units. Plenty of those homes have had a long time to collect scale in their pipes.',
    ],
  },
  {
    slug: 'lennox',
    photo: placePhoto('place-lennox', 'Downtown Lennox, SD', 1600, 710, 'https://commons.wikimedia.org/wiki/File:Lennox,_South_Dakota_5.jpg'),
    caption: 'Downtown Lennox.',
    author: 'Jon Platek',
    license: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Lennox,_South_Dakota_5.jpg',
    heading: 'A railroad town in farm country',
    intro: [
      'Lennox is in Lincoln County, 20 miles southwest of Sioux Falls. Settlers arrived in 1879, and the town was named for Ben Lennox of the Milwaukee Railroad.',
      'The 2020 census counted 2,423 people and 961 housing units. Town homes sit close together here, and farms start right where the streets end. So your neighbor a mile out may have very different water than you do.',
    ],
  },
];

export function townPlaceBySlug(slug: string) {
  return townPlaces.find((place) => place.slug === slug);
}
