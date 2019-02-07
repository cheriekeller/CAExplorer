export const habitats = [
  {
    path: '/habitats',
    label: 'Overview',
  },
  {
    path: '/habitats/terrestrial',
    label: 'Terrestrial Ecosystems',
    children: [
      {
        path: '/habitats/terrestrial/1100',
        label: 'Hardwood Forested Uplands',
        children: [
          {
            path: '/habitats/terrestrial/1130',
            label: 'Rockland Hammock',
          },
        ],
      },
      {
        path: '/habitats/terrestrial/1200',
        label: 'High Pine and Scrub',
        children: [
          {
            path: '/habitats/terrestrial/1210',
            label: 'Scrub',
          },
          {
            path: '/habitats/terrestrial/1231',
            label: 'Upland Pine',
          },
          {
            path: '/habitats/terrestrial/1240',
            label: 'Sandhill',
          },
        ],
      },
      {
        path: '/habitats/terrestrial/1300',
        label: 'Pine Flatwoods and Dry Prairie',
        children: [
          {
            path: '/habitats/terrestrial/1310',
            label: 'Dry Flatwoods',
          },
          {
            path: '/habitats/terrestrial/1311',
            label: 'Mesic Flatwoods',
          },
          {
            path: '/habitats/terrestrial/1312',
            label: 'Scrubby Flatwoods',
          },
          {
            path: '/habitats/terrestrial/1320',
            label: 'Pine Rockland',
          },
          {
            path: '/habitats/terrestrial/1330',
            label: 'Dry Prairie',
          },
        ],
      },
      {
        path: '/habitats/terrestrial/1830',
        label: 'Working Lands (Disturbed)',
        children: [
          {
            path: '/habitats/terrestrial/1831',
            label: 'Working Lands - Low Intensity',
          },
          {
            path: '/habitats/terrestrial/1833',
            label: 'Working Lands - Moderate Intensity',
          },
        ],
      },
    ],
  },
  {
    path: '/habitats/coastal',
    label: 'Coastal Ecosystems',
    children: [
      {
        path: '/habitats/coastal/1601',
        label: 'Coastal Uplands',
        children: [
          {
            path: '/habitats/coastal/1610',
            label: 'Beach Dune',
          },
          {
            path: '/habitats/coastal/1620',
            label: 'Coastal Berm',
          },
          {
            path: '/habitats/coastal/1630',
            label: 'Coastal Grassland',
          },
          {
            path: '/habitats/coastal/1640',
            label: 'Coastal Strand',
          },
          {
            path: '/habitats/coastal/1650',
            label: 'Maritime Hammock',
          },
          {
            path: '/habitats/coastal/1670',
            label: 'Beach and Surf Zone',
          },
          {
            path: '/habitats/coastal/1740',
            label: 'Keys Cactus Barren',
          },
        ],
      },
    ],
  },
  {
    path: '/habitats/freshwater',
    label: 'Freshwater Ecosystems',
    children: [
      {
        path: '/habitats/freshwater/2100',
        label: 'Freshwater Non-forested Wetlands',
        children: [
          {
            path: '/habitats/freshwater/2111',
            label: 'Wet Prairie',
          },
          {
            path: '/habitats/freshwater/2113',
            label: 'Marl Prairie',
          },
          {
            path: '/habitats/freshwater/2122',
            label: 'Coastal Interdunal Swale',
          },
          {
            path: '/habitats/freshwater/2123',
            label: 'Floodplain Marsh',
          },
          {
            path: '/habitats/freshwater/2125',
            label: 'Glades Marsh',
          },
          {
            path: '/habitats/freshwater/2160',
            label: 'Ephemeral Ponds and Wetlands',
          },
        ],
      },
      {
        path: '/habitats/freshwater/2200',
        label: 'Freshwater Forested Wetlands',
        children: [
          {
            path: '/habitats/freshwater/2210',
            label: 'Cypress Swamp',
          },
          {
            path: '/habitats/freshwater/2214',
            label: 'Strand Swamp',
          },
          {
            path: '/habitats/freshwater/2215',
            label: 'Floodplain Swamp',
          },
          {
            path: '/habitats/freshwater/2221',
            label: 'Wet Flatwoods',
          },
          {
            path: '/habitats/freshwater/2232',
            label: 'Hydric Hammock',
          },
        ],
      },
      {
        path: '/habitats/freshwater/3100',
        label: 'Lakes, Ponds and Reservoirs',
        children: [
          {
            path: '/habitats/freshwater/3112',
            label: 'Coastal Dune Lake',
          },
        ],
      },
      {
        path: '/habitats/freshwater/4000',
        label: 'Rivers and Streams',
      },
      {
        path: '/habitats/freshwater/4001',
        label: 'Springs',
      },
    ],
  },
  {
    path: '/habitats/marine',
    label: 'Marine & Estuarine Ecosystems',
    children: [
      {
        path: '/habitats/marine/5200',
        label: 'Estuarine/Marine (system wide)',
        children: [
          {
            path: '/habitats/marine/52111',
            label: 'Keys Tidal Rock Barren',
          },
        ],
      },
      {
        path: '/habitats/marine/5240',
        label: 'Saltwater Marsh',
      },
      {
        path: '/habitats/marine/5250',
        label: 'Mangrove Swamp',
      },
      {
        path: '/habitats/marine/6100',
        label: 'Coral and Hardbottom',
      },
      {
        path: '/habitats/marine/6200',
        label: 'Seagrass',
      },
    ],
  },
]
