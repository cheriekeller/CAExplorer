import React from 'react'
import PropTypes from 'prop-types'

import { Box, Flex } from 'components/Grid'
import styled, { ThemeProvider, theme } from 'util/style'
import MobileNavigation from './MobileNavigation'
import Header from './Header'

const Wrapper = styled(Flex).attrs({ flexDirection: 'column' })`
  height: 100%;
  flex: 1 1 auto;
`

const ContentContainer = styled(Box)`
  flex: 1 1 auto;
  height: 100%;
  width: 100%;
  overflow: hidden;
`

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Wrapper>
      <Header />
      <ContentContainer>{children}</ContentContainer>
      <MobileNavigation />
    </Wrapper>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
