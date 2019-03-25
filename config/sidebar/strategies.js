export const strategies = [
  {
    path: '/strategies',
    label: 'Overview',
  },
  {
    path: '/strategies/guidance',
    label: 'How to Create Strategies?',
    icon: 'climate_101',
  },
  {
    path: '/strategies/species',
    label: 'Species Strategies',
    icon: 'shorebirds',
  },
  {
    path: '/strategies/habitats',
    label: 'Habitat Strategies',
    icon: 'marine_estuarine_ecosystems',
  },
  {
    path: '/strategies/crosscutting',
    label: 'Common Adaptation Strategies',
    icon: 'coastal_ecosystems',
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
        path: '/strategies/crosscutting/existing',
        label: 'Existing Stressors',
        children: [
          {
            path: '/strategies/crosscutting/existing/habitat-loss',
            label: 'Habitat Loss',
          },
          {
            path: '/strategies/crosscutting/existing/invasives',
            label: 'Invasive Species',
          },
          {
            path: '/strategies/crosscutting/existing/pathogens',
            label: 'Pathogens, Pests / Parasites, Pollutants',
          },
          {
            path: '/strategies/crosscutting/existing/competition',
            label: 'Competition and Overexploitation',
          },
        ],
      },
    ],
  },

  {
    path: '/strategies/resources',
    label: 'Additional Resources',
    icon: 'resources',
  },
]
