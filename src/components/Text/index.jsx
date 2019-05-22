import { display } from 'styled-system'
import { Text as BaseText } from 'rebass'

import styled from 'util/style'

// Add support for responsive use of display prop
const Text = styled(BaseText)`
  ${display}
`

export { Text }
