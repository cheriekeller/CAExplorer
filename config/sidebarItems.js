const impactNav = [
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
        path: '/impacts/species/slr',
        label: 'Sea Level Rise',
      },
      {
        path: '/impacts/species/temperature',
        label: 'Temperature Changes',
      },
      {
        path: '/impacts/species/precipitation',
        label: 'Precipitation Changes',
      },

      {
        path: '/impacts/species/extreme-events',
        label: 'Changes to Extreme Events',
      },

      {
        path: '/impacts/species/co2',
        label: 'Changes in Water Chemistry',
      },
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
        path: '/impacts/species/existing-stressors',
        label: 'Interactions with Existing Stressors',
      },
    ],
  },
  {
    path: '/impacts/habitats',
    label: "Florida's Ecosystems and Habitats",
    children: [
      {
        path: '/impacts/habitats/slr',
        label: 'Sea Level Rise',
      },
      {
        path: '/impacts/habitats/temperature',
        label: 'Temperature Changes',
      },
      {
        path: '/impacts/habitats/precipitation',
        label: 'Precipitation Changes',
      },

      {
        path: '/impacts/habitats/extreme-events',
        label: 'Changes to Extreme Events',
      },

      {
        path: '/impacts/habitats/co2',
        label: 'Changes in Water Chemistry',
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

const strategiesNav = [
  {
    path: '/strategies',
    label: 'Overview',
  },
  {
    path: '/strategies/guidance',
    label: 'How to Create Strategies?',
  },
  { path: '/strategies/species', label: 'Species Strategies' },
  { path: '/strategies/habitats', label: 'Habitat Strategies' },
  {
    path: '/strategies/crosscutting',
    label: 'Cross-cutting Strategies',
    children: [
      {
        path: '/strategies/crosscutting/protection',
        label: 'Land and Water Protection',
      },
      {
        path: '/strategies/crosscutting/restoration',
        label: 'Restoration',
      },
      {
        path: '/strategies/crosscutting/planning',
        label: 'Planning',
      },
      {
        path: '/strategies/crosscutting/research',
        label: 'Research',
      },
      {
        path: '/strategies/crosscutting/policy',
        label: 'Policy',
      },
      {
        path: '/strategies/crosscutting/education',
        label: 'Education and Outreach',
      },
      {
        path: '/strategies/crosscutting/collaboration',
        label: 'Collaboration',
      },
      {
        path: '/strategies/crosscutting/monitoring',
        label: 'Monitoring',
      },
      {
        path: '/strategies/crosscutting/habitat-loss',
        label: 'Habitat Loss',
      },
      {
        path: '/strategies/crosscutting/invasives',
        label: 'Invasive Species',
      },
      {
        path: '/strategies/crosscutting/pathogens',
        label: 'Pathogens, Pests / Parasites, Pollutants',
      },
      {
        path: '/strategies/crosscutting/competition',
        label: 'Competition and Overexploitation',
      },
    ],
  },

  { path: '/strategies/resources', label: 'Additional Resources' },
]

export default {
  impacts: impactNav,
  species: [],
  habitats: [],
  strategies: strategiesNav,
}
