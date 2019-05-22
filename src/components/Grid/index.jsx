import { display } from 'styled-system'
import { Flex, Box as BaseBox } from '@rebass/grid'
import styled from 'util/style'
import Container from './Container'

// Add support for responsive use of display prop
const Box = styled(BaseBox)`
  ${display}
`

export { Flex, Box, Container }
