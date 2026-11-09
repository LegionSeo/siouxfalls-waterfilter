/**
 * Hardness figures published by the City of Sioux Falls in its annual water report.
 * From the "Water Softener Setting, total hardness (GPG)" row of the 2025 water quality data.
 * Update these when the city publishes a new report.
 * src/content/guides/hard-water-sioux-falls.md repeats these numbers, so update it too.
 */
export const HARD_WATER = {
  cityGpg: 15,
  lewisClarkGpg: 10,
  cityPpm: 250,
  lewisClarkPpm: 168,
  reportYear: 2025,
  sourceName: 'City of Sioux Falls water quality report',
  sourceUrl: 'https://www.siouxfalls.gov/resident-services/utilities-billing/water/water-quality/water-report',
} as const;
