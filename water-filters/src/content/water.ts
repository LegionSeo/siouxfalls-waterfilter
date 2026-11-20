/**
 * Local water facts. Every number here comes from a public source listed below.
 * Check them each fall when new reports come out.
 */

export const SF_REPORT = {
  year: 2025,
  name: 'City of Sioux Falls 2025 water quality report',
  url: 'https://www.siouxfalls.gov/resident-services/utilities-billing/water/water-quality/water-report',
  /** "Water Softener Setting, total hardness (GPG)" row. */
  plantGpg: 15,
  lewisClarkGpg: 10,
  plantPpm: 250,
  lewisClarkPpm: 168,
  /** Total chlorine, average level found. */
  chlorinePpm: 2.63,
  plantSodiumPpm: 34,
  lewisClarkSodiumPpm: 82,
  ironPpm: 0.02,
};

export const BRANDON = {
  name: 'City of Brandon water plant flyer, October 2025',
  url: 'https://cityofbrandon.org/watertreatmentplant',
  beforeGpg: 24,
  afterGpg: 12,
};

export const LENNOX = {
  name: 'City of Lennox, Lewis & Clark article, 2024',
  url: 'https://www.cityoflennoxsd.com/article/1639606',
  connectedYear: 2012,
};

export const HARRISBURG = {
  name: 'City of Harrisburg 2025 drinking water report (SD DANR)',
  url: 'https://danr.sd.gov/wrimage/DW/DWQPDFs/0148ccr.pdf',
};

/** Sioux Falls 2025 report filed with SD DANR: share of water bought from Lewis & Clark. */
export const SF_LEWIS_CLARK_SHARE = 62;
