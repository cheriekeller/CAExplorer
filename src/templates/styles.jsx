import { Text } from 'components/Text'

import styled from 'util/style'


export const H1 = styled(Text).attrs({
    as: 'h1',
    fontSize: ['1.5rem', '1.75rem', '2.15rem'],
    m: 0,
  })`
    line-height: 1;
  `
  
 export const H2 = styled(Text).attrs({
    as: 'h2',
    fontSize: ['1.25rem', '1.5rem', '1.6rem'],
  })``