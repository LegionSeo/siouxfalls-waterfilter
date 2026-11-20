/**
 * Every local fact on the site points to one of these. All were read on Nov 20, 2026.
 * If a page changes, update the fact or remove it.
 */
export const SOURCES = {
  cityPermit: {
    label: 'City of Sioux Falls, Sidewalk Permit',
    url: 'https://www.siouxfalls.gov/business-permits/permits-licenses-inspections/permits/sidewalk-permit',
  },
  cityStandards: {
    label: 'City of Sioux Falls, Sidewalk Construction and Repair',
    url: 'https://www.siouxfalls.gov/business-permits/permits-licenses-inspections/ordinances-codes/homeowner-sidewalk-repair/construct-repair',
  },
  cityRepairGuide: {
    label: 'City of Sioux Falls, Sidewalk Repair Guide',
    url: 'https://www.siouxfalls.gov/business-permits/permits-licenses-inspections/ordinances-codes/homeowner-sidewalk-repair',
  },
  cityFaq: {
    label: 'City of Sioux Falls, Sidewalk Inspection and Repair FAQ',
    url: 'https://www.siouxfalls.gov/business-permits/permits-licenses-inspections/ordinances-codes/homeowner-sidewalk-repair/guide/faq',
  },
  cityRowContractors: {
    label: 'City of Sioux Falls, Right of Way Contractors',
    url: 'https://www.siouxfalls.gov/business-permits/permits-licenses-inspections/licensing/contractor-licensing/row-contractors',
  },
  cementFreezeThaw: {
    label: 'Portland Cement Association, Freeze Thaw Resistance',
    url: 'https://cement.org/tech/cct_dur_freeze-thaw.asp',
  },
  nrmcaFreezeThaw: {
    label: 'NRMCA, Criteria for Freeze Thaw Resistant Concrete Mixtures',
    url: 'https://www.nrmca.org/wp-content/uploads/2020/06/08.pdf',
  },
} as const;

export type SourceKey = keyof typeof SOURCES;
