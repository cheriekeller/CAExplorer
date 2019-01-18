const impactNav = [
  {
    path: '/impacts',
    label: 'Get Started',
  },
  {
    path: '/impacts/howto',
    label: 'How to Use This Tool',
  },
  {
    path: '/impacts/climate101',
    label: 'Climate 101',
    children: [
      {
        path: '/impacts/climate101/co2',
        label: 'Increasing Atmospheric Carbon Dioxide',
      },
      {
        path: '/impacts/climate101/models',
        label: 'Carbon Dioxide Emission Models',
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
    ],
  },
  {
    path: '/impacts/species',
    label: "Florida's Species",
    children: [
      {
        path: '/impacts/species/stressors',
        label: 'Climate Stressors',
        children: [
          {
            path: '/impacts/species/stressors/slr',
            label: 'Sea Level Rise',
          },
          {
            path: '/impacts/species/stressors/temperature',
            label: 'Temperature Changes',
          },
          {
            path: '/impacts/species/stressors/precipitation',
            label: 'Precipitation Changes',
          },

          {
            path: '/impacts/species/stressors/extreme-events',
            label: 'Changes to Extreme Events',
          },

          {
            path: '/impacts/species/stressors/co2',
            label: 'Changes in Water Chemistry',
          },
        ],
      },
      {
        path: '/impacts/species/impacts',
        label: 'Climate Impacts',
        children: [
          {
            path: '/impacts/species/impacts/community-dynamics',
            label: 'Altered Community Dynamics',
          },
          {
            path: '/impacts/species/impacts/altered-range',
            label: 'Altered Habitat Suitability',
          },
          {
            path: '/impacts/species/impacts/altered-survival',
            label: 'Altered Survival',
          },
          {
            path: '/impacts/species/impacts/altered-phenology',
            label: 'Altered Phenology & Physiology',
          },
          {
            path: '/impacts/species/impacts/disturbance',
            label: 'Altered Disturbance Regimes',
          },
          {
            path: '/impacts/species/impacts/existing-stressors',
            label: 'Interactions with Existing Stressors',
          },
        ],
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
      },
      {
        path: '/impacts/vulnerability/gcva',
        label: 'Gulf Coast Vulnerability Assessment',
      },
    ],
  },
  {
    path: '/impacts/adaptation',
    label: 'Overview',
    children: [
      { path: '/strategies', label: 'TODO' },
      { path: '/strategies/resources', label: 'Resources' },
    ],
  },
]

const strategiesNav = []

export default {
  impacts: impactNav,
  species: [],
  habitats: [],
  strategies: strategiesNav,
}
