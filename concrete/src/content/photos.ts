/**
 * Photos are free to use under the Unsplash License (unsplash.com/license),
 * checked on each photo page on Nov 20, 2026. Credits are listed on the About page.
 * They are stock photos, not this company's jobs. Swap in real job photos when they exist.
 */
export interface StockPhoto {
  id: string;
  alt: string;
  credit: string;
  page: string;
  /** Focal point for object-position. */
  focus?: string;
}

export const PHOTOS = {
  chutePour: {
    id: '1574757987642-5755f0839101',
    alt: 'Worker in an orange vest guiding wet concrete down a truck chute',
    credit: 'Mitchell Luo',
    page: 'https://unsplash.com/photos/man-pouring-cements-on-road-TtX79Vkm8gs',
    focus: '50% 40%',
  },
  finishing: {
    id: '1773432114474-c1afba22a339',
    alt: 'Finisher smoothing a fresh concrete slab with hand tools',
    credit: 'TROY ALLEN',
    page: 'https://unsplash.com/photos/construction-worker-smoothing-wet-concrete-slab-with-tools-GNClKls4ok8',
  },
  residentialFlatwork: {
    id: '1773380498433-f6c511f82e40',
    alt: 'Crew using a skid steer to prep flatwork in front of a house',
    credit: 'Yale Cohen',
    page: 'https://unsplash.com/photos/workers-use-a-skid-steer-loader-for-construction-work-o96RfpHxw74',
  },
  driveway: {
    id: '1783125127341-81112b795c23',
    alt: 'Wide concrete driveway leading to a two car garage',
    credit: 'Salvo Media LLC',
    page: 'https://unsplash.com/photos/modern-white-house-two-garage-doors-and-concrete-driveway-mledaZ8XtVM',
    focus: '50% 70%',
  },
  sunnyPour: {
    id: '1774931363306-5a896cd4dd02',
    alt: 'Two workers spreading wet concrete on a sunny day',
    credit: 'Hammilton Ojijo',
    page: 'https://unsplash.com/photos/construction-workers-pouring-concrete-on-a-sunny-day-8eEkLj8HU_I',
  },
  foundationWall: {
    id: '1616179058441-37aa58affac8',
    alt: 'Smooth poured concrete wall showing form tie marks',
    credit: 'Brands&People',
    page: 'https://unsplash.com/photos/gray-concrete-wall-during-daytime-7JDv9vBeYQA',
  },
  shoveling: {
    id: '1685464196387-854858ce0f4f',
    alt: 'Worker in an orange vest shoveling fresh concrete into place',
    credit: 'Mélyna Côté',
    page: 'https://unsplash.com/photos/a-man-in-an-orange-vest-is-shoveling-concrete-L3jkxfr-MnA',
  },
  machinePour: {
    id: '1685464196332-ed9c9da28d9a',
    alt: 'Worker using a machine to place concrete',
    credit: 'Mélyna Côté',
    page: 'https://unsplash.com/photos/a-man-using-a-machine-to-pour-concrete-PdJL3BbMjeg',
  },
  steps: {
    id: '1587052694737-a972e4186288',
    alt: 'Person walking down wide gray concrete steps',
    credit: 'Becca Tapert',
    page: 'https://unsplash.com/photos/man-in-red-jacket-and-black-pants-walking-on-gray-concrete-stairs-tam80nXFvL4',
  },
} satisfies Record<string, StockPhoto>;

export type PhotoKey = keyof typeof PHOTOS;

export function photoUrl(id: string, width: number, height?: number): string {
  const size = height ? `&h=${height}&fit=crop` : '';
  return `https://images.unsplash.com/photo-${id}?auto=format&q=70&w=${width}${size}`;
}
