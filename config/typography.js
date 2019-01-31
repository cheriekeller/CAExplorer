import Typography from 'typography'
import theme from 'typography-theme-kirkham'

theme.googleFonts = [
  {
    name: 'Playfair Display',
    styles: ['400', '700'],
  },
  {
    name: 'Fira Sans',
    styles: ['400', '400i', '700', '700i'],
  },
]
theme.baseFontSize = '20px'
theme.overrideThemeStyles = () => ({
  html: {
    overflowY: 'auto',
    height: '100%',
  },
  body: {
    height: '100%',
    width: '100%',
  },
  'h1,h2,h3,h4,h5': {
    color: '#2d4059',
  },
  a: {
    color: '#bb490f', // theme.colors.secondary.800
    textDecoration: 'none',
  },
  'a:hover': {
    textDecoration: 'underline',
  },
})

const typography = Typography(theme)

export default typography
