export const backgroundItems = [
  {
    path: '/background',
    label: 'Get Started',
  },
  {
    path: '/background/howto',
    label: 'How to Use This Tool',
  },
  {
    path: '/background/climate101',
    label: 'Climate 101',
    children: [
      {
        path: '/background/climate101/co2',
        label: 'Increasing Atmospheric Carbon Dioxide',
      },
      { path: '/background/climate101/models', label: 'Climate Models' },
    ],
  },
  {
    path: '/background/florida',
    label: "Florida's Climate and Impacts",
    children: [
      { path: '/background/florida/slr', label: 'Sea Level Rise' },
      {
        path: '/background/florida/precipitation',
        label: 'Changes in Precipitation',
      },
      {
        path: '/background/florida/temperature',
        label: 'Changes in Temperature',
      },
      {
        path: '/background/florida/extreme-events',
        label: 'Changes in Extreme Events',
      },
      {
        path: '/background/florida/co2',
        label: 'Changes in Carbon Dioxide Concentration',
      },
    ],
  },
  {
    path: '/background/species',
    label: "Florida's Species",
    children: [
      {
        path: '/background/species/temperature',
        label: 'Temperature Impacts',
      },
      {
        path: '/background/species/precipitation',
        label: 'Precipitation Impacts',
      },
      { path: '/background/species/slr', label: 'Sea Level Rise Impacts' },
      {
        path: '/background/species/extreme-events',
        label: 'Impacts from Extreme Events',
      },

      { path: '/background/species/co2', label: 'Carbon Dioxide Impacts' },
      {
        path: '/background/species/community-dynamics',
        label: 'Altered Community Dynamics',
      },
      {
        path: '/background/species/keystone-species',
        label: 'Loss of Keystone Species',
      },
      {
        path: '/background/species/altered-range',
        label: 'Altered Habitat Suitability',
      },
      {
        path: '/background/species/migratory-species',
        label: 'Migratory Species',
      },
      {
        path: '/background/species/altered-survival',
        label: 'Altered Survival',
      },
      {
        path: '/background/species/altered-phenology',
        label: 'Altered Phenology & Physiology',
      },
      {
        path: '/background/species/',
        label: 'Temperature-Dependent Sex Determination',
      },
      {
        path: '/background/species/plasticity',
        label: 'Phenotypic Plasticity',
      },
      {
        path: '/background/species/extinction',
        label: 'Increased Extinction Risk',
      },
      {
        path: '/background/species/disturbance',
        label: 'Altered Disturbance Regimes',
      },
      {
        path: '/background/species/existing-stressors',
        label: 'Existing Stressors',
      },
    ],
  },
]
