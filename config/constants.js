import { theme } from 'util/style'

export const VULNERABILITY = {
  0: 'Not Assessed',
  1: 'Very Low',
  2: 'Low',
  3: 'Moderate',
  4: 'High',
  5: 'Very High',
}

// .vulnerability.vulnerability-not {
//     background: ${themeGet('colors.grey.200')};
//   }
//   .vulnerability.vulnerability-low,
//   .vulnerability.vulnerability-slight {
//     background: ${themeGet('colors.yellow.200')};
//   }
//   .vulnerability.vulnerability-moderate {
//     background: ${themeGet('colors.yellow.400')};
//   }
//   .vulnerability.vulnerability-high {
//     background: ${themeGet('colors.secondary.500')};
//     color: #fff;
//     font-weight: normal;
//   }
//   .vulnerability.vulnerability-extreme {
//     background: ${themeGet('colors.secondary.800')};
//     color: #fff;
//     font-weight: normal;
//   }

export const VULNERABILITY_COLORS = {
  0: theme.colors.grey[500],
  1: '#90CAF9', // theme.colors.yellow[200],
  2: theme.colors.yellow[300],
  3: theme.colors.secondary[200],
  4: theme.colors.secondary[500],
  5: theme.colors.secondary[800],
}
