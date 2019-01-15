import styled, { themeGet } from 'util/style'
import { Box } from 'components/Grid'

const WarningBox = styled(Box).attrs({
  p: 3,
  m: 2,
})`
  color: #fff;
  border-radius: 6px;
  background: ${themeGet('colors.secondary.600')};
`

export default WarningBox
