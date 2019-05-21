import React from 'react'
import PropTypes from 'prop-types'

import { Flex } from 'components/Grid'
import styled, { ThemeProvider, theme } from 'util/style'
import { isUnsupported } from 'util/dom'
import Header from './LargeHeader'
import MobileNavigation from './MobileNavigation'
import UnsupportedBrowser from './UnsupportedBrowser'

const Wrapper = styled(Flex).attrs({ flexDirection: 'column' })`
  height: 100%;
`

const Content = styled.div`
  flex: 1 1 auto;
  overflow-y: auto;
`

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Wrapper>
      <Header />
      {isUnsupported ? <UnsupportedBrowser /> : <Content>{children}</Content>}
      <MobileNavigation />
    </Wrapper>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
