import React from 'react'

import styled from 'util/style'

const Wrapper = styled.div`
  display: none;
  @media (max-width: 40em) {
    display: block;
  }
`

const MobileNavigation = () => <Wrapper>Mobile nav here</Wrapper>

export default MobileNavigation
