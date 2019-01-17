const backgroundItems = [
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
      {
        path: '/background/climate101/models',
        label: 'Carbon Dioxide Emission Models',
      },
    ],
  },
  {
    path: '/background/florida',
    label: 'Impacts of Climate Change in Florida',
    children: [
      { path: '/background/florida/slr', label: 'Sea Level Rise' },
      {
        path: '/background/florida/temperature',
        label: 'Changes in Temperature',
      },
      {
        path: '/background/florida/precipitation',
        label: 'Changes in Precipitation',
      },
      {
        path: '/background/florida/extreme-events',
        label: 'Changes in Extreme Events',
      },
      {
        path: '/background/florida/co2',
        label: 'Changes in Water Chemistry',
      },
    ],
  },
  {
    path: '/background/species',
    label: "Florida's Species",
    children: [
      {
        path: '/background/species/stressors',
        label: 'Climate Stressors',
        children: [
          {
            path: '/background/species/stressors/slr',
            label: 'Sea Level Rise',
          },
          {
            path: '/background/species/stressors/temperature',
            label: 'Temperature Changes',
          },
          {
            path: '/background/species/stressors/precipitation',
            label: 'Precipitation Changes',
          },

          {
            path: '/background/species/stressors/extreme-events',
            label: 'Changes to Extreme Events',
          },

          {
            path: '/background/species/stressors/co2',
            label: 'Changes in Water Chemistry',
          },
        ],
      },
      {
        path: '/background/species/impacts',
        label: 'Climate Impacts',
        children: [
          {
            path: '/background/species/impacts/community-dynamics',
            label: 'Altered Community Dynamics',
          },
          {
            path: '/background/species/impacts/altered-range',
            label: 'Altered Habitat Suitability',
          },
          {
            path: '/background/species/impacts/altered-survival',
            label: 'Altered Survival',
          },
          {
            path: '/background/species/impacts/altered-phenology',
            label: 'Altered Phenology & Physiology',
          },
          {
            path: '/background/species/impacts/disturbance',
            label: 'Altered Disturbance Regimes',
          },
          {
            path: '/background/species/impacts/existing-stressors',
            label: 'Interactions with Existing Stressors',
          },
        ],
      },
    ],
  },
  {
    path: '/background/habitats',
    label: "Florida's Ecosystems and Habitats",
    children: [
      {
        path: '/background/habitats/slr',
        label: 'Sea Level Rise',
      },
      {
        path: '/background/habitats/temperature',
        label: 'Temperature Changes',
      },
      {
        path: '/background/habitats/precipitation',
        label: 'Precipitation Changes',
      },

      {
        path: '/background/habitats/extreme-events',
        label: 'Changes to Extreme Events',
      },

      {
        path: '/background/habitats/co2',
        label: 'Changes in Water Chemistry',
      },
    ],
  },
  {
    path: '/background/vulnerability',
    label: 'Vulnerability to Climate Change',
    children: [
      {
        path: '/background/vulnerability/scenarios',
        label: 'Scenario Planning',
      },
      {
        path: '/background/vulnerability/ccvi',
        label: 'Climate Change Vulnerability Index',
      },
      {
        path: '/background/vulnerability/sivva',
        label: 'Standardized Index of Vulnerability and Value Assessment',
      },
      {
        path: '/background/vulnerability/gcva',
        label: 'Gulf Coast Vulnerability Assessment',
      },
    ],
  },
  {
    path: '/background/adaptation',
    label: 'Adaptation Strategies',
    // children: [
    //   { path: '/background/impacts/social', label: 'Social Impacts' },
    //   { path: '/background/impacts/economic', label: 'Economic Impacts' },
    // ],
  },
]

export default { background: backgroundItems, species: [], habitats: [] }
