export const strategies = [
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
    label: 'Common Adaptation Strategies',
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
    ],
  },

  { path: '/strategies/resources', label: 'Additional Resources' },
]
