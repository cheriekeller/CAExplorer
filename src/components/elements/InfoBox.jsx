import styled, { themeGet } from 'util/style'
import { Box } from 'components/Grid'

const InfoBox = styled(Box).attrs({
  width: [1, 0.3],
  minWidth: '14em',
  p: 3,
  m: 2,
  flex: '1 1 14em',
})`
  border-radius: 6px;
  background: ${themeGet('colors.yellow.200')};
`

export default InfoBox
