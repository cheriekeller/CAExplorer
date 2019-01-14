import Typography from 'typography'
import theme from 'typography-theme-kirkham'

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
  },
  figcaption: {
    fontWeight: 'bold',
    marginBottom: '3rem',
  },
})

const typography = Typography(theme)

export default typography
