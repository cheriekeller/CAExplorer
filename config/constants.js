import { theme } from 'util/style'

export const VULNERABILITY = {
  0: 'Not Assessed',
  1: 'Very Low',
  2: 'Low',
  3: 'Moderate',
  4: 'High',
  5: 'Very High',
}

export const VULNERABILITY_COLORS = {
  0: theme.colors.grey[500],
  1: '#90CAF9',
  2: theme.colors.yellow[300],
  3: theme.colors.secondary[200],
  4: theme.colors.secondary[500],
  5: theme.colors.secondary[800],
}

export const FLORIDA_BOUNDS = [-88.615723, 24.006326, -79.519043, 31.54109]