export const impacts = [
  {
    path: '/impacts',
    label: 'Overview',
  },
  {
    path: '/impacts/climate101',
    label: 'Climate 101',
    icon: 'climate_101',
    children: [
      {
        path: '/impacts/climate101/slr',
        label: 'Sea Level Rise',
        icon: 'sea_level_rise',
      },
      {
        path: '/impacts/climate101/temperature',
        label: 'Changes in Temperature',
        icon: 'temperature_change',
      },
      {
        path: '/impacts/climate101/precipitation',
        label: 'Changes in Precipitation',
        icon: 'precipitation_change',
      },
      {
        path: '/impacts/climate101/co2',
        label: 'Increasing Atmospheric Carbon Dioxide',
        icon: 'air_co2_change',
      },
      {
        path: '/impacts/climate101/models',
        label: 'Climate Models',
        icon: 'climate_models',
      },
    ],
  },
  {
    path: '/impacts/florida',
    label: 'Impacts of Climate Change in Florida',
    icon: 'florida_impacts',
    children: [
      {
        path: '/impacts/florida/slr',
        label: 'Sea Level Rise',
        icon: 'sea_level_rise',
      },
      {
        path: '/impacts/florida/temperature',
        label: 'Changes in Temperature',
        icon: 'temperature_change',
      },
      {
        path: '/impacts/florida/precipitation',
        label: 'Changes in Precipitation',
        icon: 'precipitation_change',
      },
      {
        path: '/impacts/florida/extreme-events',
        label: 'Changes in Extreme Events',
        icon: 'extreme_events',
      },
      {
        path: '/impacts/florida/co2',
        label: 'Changes in Water Chemistry',
        icon: 'water_co2_change',
      },
      {
        path: '/impacts/florida/social',
        label: 'Social and Economic Impacts',
        icon: 'social_impacts',
      },
    ],
  },
  {
    path: '/impacts/species',
    label: "Florida's Species",
    icon: 'shorebirds',
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
    icon: 'marine_estuarine_ecosystems',
    children: [
      {
        path: '/impacts/habitats/coastal',
        label: 'Coastal Ecosystems',
        icon: 'coastal_ecosystems',
      },
      {
        path: '/impacts/habitats/freshwater',
        label: 'Freshwater Ecosystems',
        icon: 'freshwater_ecosystems',
      },
      {
        path: '/impacts/habitats/marine',
        label: 'Marine & Estuarine Ecosystems',
        icon: 'marine_estuarine_ecosystems',
      },
      {
        path: '/impacts/habitats/terrestrial',
        label: 'Terrestrial Ecosystems',
        icon: 'terrestrial_ecosystems',
      },
    ],
  },
  {
    path: '/impacts/existing-stressors',
    label: 'Interactions with Existing Stressors',
    icon: 'habitat_loss',
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
    icon: 'sea_level_rise',
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
    icon: 'tools',
  },
  {
    path: '/impacts/resources',
    label: 'Additional Resources',
    icon: 'resources',
  },
]
