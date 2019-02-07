export const impacts = [
  {
    path: '/impacts',
    label: 'Overview',
  },
  {
    path: '/impacts/climate101',
    label: 'Climate 101',
    children: [
      {
        path: '/impacts/climate101/slr',
        label: 'Sea Level Rise',
      },
      {
        path: '/impacts/climate101/temperature',
        label: 'Changes in Temperature',
      },
      {
        path: '/impacts/climate101/precipitation',
        label: 'Changes in Precipitation',
      },
      {
        path: '/impacts/climate101/co2',
        label: 'Increasing Atmospheric Carbon Dioxide',
      },
      {
        path: '/impacts/climate101/models',
        label: 'Climate Models',
      },
    ],
  },
  {
    path: '/impacts/florida',
    label: 'Impacts of Climate Change in Florida',
    children: [
      { path: '/impacts/florida/slr', label: 'Sea Level Rise' },
      {
        path: '/impacts/florida/temperature',
        label: 'Changes in Temperature',
      },
      {
        path: '/impacts/florida/precipitation',
        label: 'Changes in Precipitation',
      },
      {
        path: '/impacts/florida/extreme-events',
        label: 'Changes in Extreme Events',
      },
      {
        path: '/impacts/florida/co2',
        label: 'Changes in Water Chemistry',
      },
      {
        path: '/impacts/florida/social',
        label: 'Social and Economic Impacts',
      },
    ],
  },
  {
    path: '/impacts/species',
    label: "Florida's Species",
    children: [
      {
        path: '/impacts/species/community-dynamics',
        label: 'Altered Community Dynamics',
      },
      {
        path: '/impacts/species/altered-range',
        label: 'Altered Habitat Suitability',
      },
      {
        path: '/impacts/species/altered-survival',
        label: 'Altered Survival',
      },
      {
        path: '/impacts/species/altered-phenology',
        label: 'Altered Phenology & Physiology',
      },
      {
        path: '/impacts/species/disturbance',
        label: 'Altered Disturbance Regimes',
      },
      {
        path: '/impacts/species/keystone',
        label: 'Loss of Keystone Species',
      },
    ],
  },
  {
    path: '/impacts/habitats',
    label: "Florida's Ecosystems and Habitats",
    children: [
      {
        path: '/impacts/habitats/coastal',
        label: 'Coastal Ecosystems',
      },
      {
        path: '/impacts/habitats/freshwater',
        label: 'Freshwater Ecosystems',
      },
      {
        path: '/impacts/habitats/marine',
        label: 'Marine & Estuarine Ecosystems',
      },
      {
        path: '/impacts/habitats/terrestrial',
        label: 'Terrestrial Ecosystems',
      },
    ],
  },
  {
    path: '/impacts/existing-stressors',
    label: 'Interactions with Existing Stressors',
    children: [
      {
        path: '/impacts/existing-stressors/habitat-loss',
        label: 'Habitat Loss',
      },
      {
        path: '/impacts/existing-stressors/invasives',
        label: 'Invasive Species',
      },
      {
        path: '/impacts/existing-stressors/pathogens',
        label: 'Pathogens, Pests, Pollution',
      },
      {
        path: '/impacts/existing-stressors/competition',
        label: 'Competition & Overexploitation',
      },
    ],
  },
  {
    path: '/impacts/vulnerability',
    label: 'Vulnerability to Climate Change',
    children: [
      {
        path: '/impacts/vulnerability/scenarios',
        label: 'Scenario Planning',
      },
      {
        path: '/impacts/vulnerability/ccvi',
        label: 'Climate Change Vulnerability Index',
      },
      {
        path: '/impacts/vulnerability/sivva',
        label: 'Standardized Index of Vulnerability and Value Assessment',
        children: [
          { path: '/impacts/vulnerability/sivva/species', label: 'Species' },
          {
            path: '/impacts/vulnerability/sivva/natcom',
            label: 'Natural Communities',
          },
        ],
      },
      {
        path: '/impacts/vulnerability/gcva',
        label: 'Gulf Coast Vulnerability Assessment',
      },
    ],
  },
  {
    path: '/impacts/tools',
    label: 'Other Tools',
  },
  {
    path: '/impacts/resources',
    label: 'Additional Resources',
  },
]
