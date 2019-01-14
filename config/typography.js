import Typography from 'typography'
import theme from 'typography-theme-kirkham'

theme.baseFontSize = '20px'
theme.overrideThemeStyles = () => ({
  'h1,h2,h3,h4,h5': {
    color: '#2d4059',
  },
  a: {
    color: '#bb490f', // theme.colors.secondary.800
  },
})

const typography = Typography(theme)

export default typography
