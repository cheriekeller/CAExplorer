import { theme } from 'util/style'

export const VULNERABILITY = {
  0: 'Not Assessed',
  1: 'Very Low',
  2: 'Low',
  3: 'Moderate',
  4: 'High',
  5: 'Very High',
}

export const VULNERABILITY_LEVELS = [1, 2, 3, 4, 5] // 0 intentionally omitted

export const VULNERABILITY_COLORS = {
  0: theme.colors.grey[500],
  1: '#90CAF9',
  2: theme.colors.yellow[300],
  3: theme.colors.secondary[200],
  4: theme.colors.secondary[500],
  5: theme.colors.secondary[800],
}

export const HABITAT_VULNERABILITY_CRITERIA = {
  5: 'is within the top 5 SIVVA most vulnerable natural communities or in the top 5 in most of the SIVVA vulnerability categories.',
  4: 'is within the top 5 most vulnerable natural communities in one but not all of the SIVVA vulnerability categories.',
  3: 'has a SIVVA vulnerability score greater than 70 but is not among the top 5 most vulnerable natural communities in any SIVVA vulnerability category.',
  2: 'has a SIVVA vulnerability score less than 70 SIVVA.',
}

export const CONSERVATION_STATUS = {
  FE: 'Federally Endangered',
  FT: 'Federally Threatened',
  FXN: 'Federally Listed - Experimental Population',
  ST: 'State Threatened',
  SSC: 'State Species of Special Concern',
  SGCN: 'Species of Greatest Conservation Need',
  NN: 'Non-native',
  NL: 'Not Listed', // also assume as default
}

export const FLORIDA_BOUNDS = [-88.615723, 24.006326, -79.519043, 31.54109]

export const ADAPTATION_STRATEGIES = [
  'protection',
  'restoration',
  'planning',
  'policy',
  'education',
]

export const ADAPTATION_STRATEGY_LABELS = {
  education: 'Education and Outreach',
  monitoring: 'Monitoring',
  planning: 'Planning',
  policy: 'Policy',
  protection: 'Protection',
  restoration: 'Restoration',
}
