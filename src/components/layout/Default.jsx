import React from 'react'
import PropTypes from 'prop-types'

import styled, { ThemeProvider, theme } from 'util/style'
import { Flex, Container } from 'components/Grid'
import Sidebar from '../Sidebar'
import MobileNavigation from './MobileNavigation'
import Header from './Header'

import sidebarItems from '../../../config/sidebarItems'

const Content = styled(Flex)`
  padding-top: 2.75rem;
`

const ContentContainer = styled.div`
  padding: 2rem 0 2rem 16rem;
  width: 100%;
`

// make sure that window is available (not available in Gatsby build)
const hasWindow = typeof window !== 'undefined' && window

const Layout = ({ children }) => {
  const items = hasWindow
    ? sidebarItems[window.location.pathname.split('/')[1]] || []
    : []

  return (
    <ThemeProvider theme={theme}>
      <>
        <Header />
        <Content>
          <Sidebar items={items} />
          <ContentContainer>
            <Container px={3}>{children}</Container>
          </ContentContainer>
        </Content>
        <MobileNavigation />
      </>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
