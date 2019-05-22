const breakpoints = ['480px', '640px', '960px', '1024px', '1216px']

// palette: https://colorhunt.co/palette/7247
// shades generated: http://www.0to255.com/2d4059
/**
 * Primary: Colors to use for actionable items, such as links, buttons etc.
 * Grey: Colors for items that are not that important
 */
const colors = {
  white: 'hsl(0, 0%, 100%)',
  black: 'hsl(0, 0%, 0%)',
  grey: {
    100: '#f8f9f9',
    200: '#ebedee',
    300: '#dee1e3',
    400: '#cfd3d6',
    500: '#bec4c8',
    600: '#acb4b9',
    700: '#97a1a7',
    800: '#5f6e78',
    900: '#374047',
  },
  primary: {
    100: '#d0dae7', // primary + 18
    200: '#a3b7d1',
    300: '#8da5c5',
    400: '#7693ba',
    500: '#6082ae',
    600: '#4f719d',
    700: '#446086',
    800: '#385070', // primary +2
    900: '#2d4059', // palette primary
  },
  secondary: {
    100: '#fce7dd', // secondary + 10
    200: '#f7bc9e',
    300: '#f5a67e',
    400: '#f2915f', // secondary + 2
    500: '#f07b3f', // palette orange
    600: '#ee651f', // secondary - 2
    700: '#da5511',
    800: '#bb490f',
    900: '#9b3d0c',
  },

  yellow: {
    100: '#fff9e8',
    200: '#fff0c6',
    300: '#ffe6a4',
    400: '#ffdd82', // palette + 2
    500: '#ffd460', // palette yellow
    600: '#ffcb3e', // palette - 2
    700: '#ffc21c',
    800: '#f9b600',
    900: '#d79d00',
  },
}

/**
 * Space is used for margin and padding scales.
 * It's recommended to use powers of two to ensure alignment across the entire project
 */
const space = [0, 4, 8, 16, 32, 64, 128, 256, 512]

/**
 * Typographic scale
 */
// const fontSizes = [12, 14, 16, 20, 24, 32, 48, 64, 96, 128]
const fontSizes = [
  '0.5rem',
  '0.75rem',
  '1rem',
  '1.25rem',
  '1.5rem',
  '1.75rem',
  '2rem',
  '2.5rem',
  '3rem',
  '4rem',
]

const lineHeights = [1, 1.125, 1.25, 1.5]

const fontWeights = {
  normal: 400,
  semibold: 600,
}

/**
 * Letter-spacing should vary, depending on usage of text
 */
const letterSpacings = {
  normal: 'normal',
  caps: '0.25em',
  labels: '0.05em',
}

/**
 * Border-radius
 */
const radii = [0, 2, 4, 8, 16]

export const theme = {
  name: 'Default',
  breakpoints,
  colors,
  space,
  fontSizes,
  lineHeights,
  fontWeights,
  letterSpacings,
  radii,
}
