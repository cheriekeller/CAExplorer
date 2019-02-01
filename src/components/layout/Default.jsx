import React from 'react'
import PropTypes from 'prop-types'

import styled, { ThemeProvider, theme } from 'util/style'
import { Box, Flex, Container } from 'components/Grid'
import Sidebar from '../Sidebar'
import MobileNavigation from './MobileNavigation'
import Header from './Header'

import sidebarItems from '../../../config/sidebarItems'

const ContentContainer = styled(Box)`
  padding: 2rem 0 2rem 0;
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
        <Flex pt={[0, '2rem', '2.75rem']}>
          <Sidebar items={items} />
          <ContentContainer pl={[0, '16em']}>
            <Container px={3}>{children}</Container>
          </ContentContainer>
        </Flex>
        <MobileNavigation />
      </>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
