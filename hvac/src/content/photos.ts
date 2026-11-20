/**
 * Photos are free to use under the Unsplash License (checked on each photo page, Nov 20 2026).
 * They load from the Unsplash image CDN, which Unsplash allows. Credits show on the About page.
 * None of these people or homes are this company's staff or jobs. Swap in real job photos later.
 */
export interface PhotoDef {
  id: string;
  alt: string;
  by: string;
  page: string;
}

export const PHOTOS = {
  heatPump: {
    id: 'photo-1776860155275-eee24bfb1dee',
    alt: 'Outdoor heat pump unit in front of a modern home',
    by: 'alpha innotec',
    page: 'https://unsplash.com/photos/modern-house-exterior-with-heat-pump-unit-kblddocwPa0',
  },
  heatPumpBrick: {
    id: 'photo-1776860150305-108ed577d7d4',
    alt: 'Outdoor heat pump unit next to a brick house',
    by: 'alpha innotec',
    page: 'https://unsplash.com/photos/outdoor-heat-pump-unit-next-to-a-brick-building-4VCm8l6wLQY',
  },
  thermostat: {
    id: 'photo-1545259741-2ea3ebf61fa3',
    alt: 'Smart thermostat on a wall set to 63 degrees',
    by: 'Dan LeFebvre',
    page: 'https://unsplash.com/photos/gray-nest-thermostat-displaying-at-63-RFAHj4tI37Y',
  },
  miniSplit: {
    id: 'photo-1759772238012-9d5ad59ae637',
    alt: 'White ductless wall unit mounted high on an inside wall',
    by: 'Illia Horokhovsky',
    page: 'https://unsplash.com/photos/a-white-air-conditioner-mounted-on-a-wall-SJnak9YYFWU',
  },
  livingRoom: {
    id: 'photo-1761330440311-16e160cad236',
    alt: 'Bright living room with a wall air conditioner above the seating',
    by: 'Caroline Badran',
    page: 'https://unsplash.com/photos/modern-living-room-with-air-conditioner-and-decor-BsHycOlU6Bg',
  },
  snowStreet: {
    id: 'photo-1709983049578-f2e4f13b45e5',
    alt: 'Snow covered street lined with houses in winter',
    by: 'Laura Brain',
    page: 'https://unsplash.com/photos/a-snow-covered-street-with-houses-in-the-background-nNfC9mbdyn0',
  },
  snowHouse: {
    id: 'photo-1771680968896-cfd9b8f7244e',
    alt: 'Modern house with a wood deck surrounded by snow',
    by: 'Clay Banks',
    page: 'https://unsplash.com/photos/modern-house-with-wooden-deck-in-snowy-landscape-Wd8Nm8iXglQ',
  },
  pipes: {
    id: 'photo-1650551182991-b07558247564',
    alt: 'Heating pipes and valves in a utility room',
    by: 'Immo Wegmann',
    page: 'https://unsplash.com/photos/pipes-and-valves-in-a-room-with-orange-table-U0jpGKtMtWE',
  },
} satisfies Record<string, PhotoDef>;

export type PhotoKey = keyof typeof PHOTOS;

export function photoUrl(key: PhotoKey, width: number, ratio: number) {
  const height = Math.round(width / ratio);
  return `https://images.unsplash.com/${PHOTOS[key].id}?auto=format&fit=crop&w=${width}&h=${height}&q=70`;
}
