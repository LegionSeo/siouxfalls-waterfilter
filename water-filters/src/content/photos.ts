/**
 * Photos are free to use under the Unsplash License (checked on each photo page, Nov 2026).
 * They load from the Unsplash image CDN, which Unsplash allows. Credits show on the About page.
 */
export interface PhotoDef {
  id: string;
  alt: string;
  by: string;
  page: string;
}

export const PHOTOS = {
  tap: {
    id: 'photo-1542013936693-884638332954',
    alt: 'Hand turning on a chrome kitchen faucet as water fills a glass',
    by: 'Jacek Dylag',
    page: 'https://unsplash.com/photos/person-opening-faucet-Vve7XkiUq_Y',
  },
  tech: {
    id: 'photo-1676210133055-eab6ef033ce3',
    alt: 'Technician fitting pipes in the cabinet under a sink',
    by: 'Timur Shakerzianov',
    page: 'https://unsplash.com/photos/a-man-working-on-a-pipe-in-a-cabinet-wzIjLL4KB-4',
  },
  home: {
    id: 'photo-1570129477492-45c003edd2be',
    alt: 'Two story home with a wide front porch and a green lawn',
    by: 'todd kent',
    page: 'https://unsplash.com/photos/gray-wooden-house-178j8tJrNlc',
  },
  glass: {
    id: 'photo-1534616042650-80f5c9b61f09',
    alt: 'Clear glass of water on a light table',
    by: 'manu schwendener',
    page: 'https://unsplash.com/photos/clear-drinking-glass-filled-with-water-zFEY4DP4h6c',
  },
  faucet: {
    id: 'photo-1521207418485-99c705420785',
    alt: 'Water running from a kitchen faucet into the sink',
    by: 'Imani',
    page: 'https://unsplash.com/photos/a-faucet-running-water-from-a-kitchen-sink-vDQ-e3RtaoE',
  },
} satisfies Record<string, PhotoDef>;

export type PhotoKey = keyof typeof PHOTOS;

export function photoUrl(key: PhotoKey, width: number, ratio: number) {
  const height = Math.round(width / ratio);
  return `https://images.unsplash.com/${PHOTOS[key].id}?auto=format&fit=crop&w=${width}&h=${height}&q=70`;
}
