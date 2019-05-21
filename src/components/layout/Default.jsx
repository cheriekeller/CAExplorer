import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { FaBars, FaTimes } from 'react-icons/fa'

import styled, { ThemeProvider, theme, themeGet } from 'util/style'
import { isUnsupported } from 'util/dom'
import { Box, Flex, Container } from 'components/Grid'
import Sidebar from 'components/Sidebar'
import MobileNavigation from './MobileNavigation'
import Header from './Header'
import UnsupportedBrowser from './UnsupportedBrowser'
import sidebarItems from '../../../config/sidebar'

const Wrapper = styled(Flex).attrs({ flexDirection: 'column' })`
  height: 100%;
`

const PageContent = styled(Flex)`
  height: 100%;
`

const SidebarToggle = styled.button`
  width: 2rem;
  height: 2rem;
  line-height: 2.25;
  z-index: 2000;
  display: none;
  position: fixed;
  bottom: 4rem;
  right: 1rem;
  border-radius: 2rem;
  box-shadow: 2px 2px 5px #000;
  background: ${themeGet('colors.primary.500')};
  border: none;
  outline: none !important;
  color: #fff;
  box-sizing: border-box;
  text-align: center;

  @media screen and (max-width: ${themeGet('breakpoints.0')}) {
    display: block;
  }
`

const ContentContainer = styled(Box).attrs({ py: '2rem;' })`
  flex: 1 1 auto;
  overflow: auto;
  height: 100%;
  width: 100%;

  @media screen and (max-width: ${themeGet('breakpoints.0')}) {
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  }
`

// make sure that window is available (not available in Gatsby build)
const hasWindow = typeof window !== 'undefined' && window

const Layout = ({ children }) => {
  const items = hasWindow
    ? sidebarItems[window.location.pathname.split('/')[1]] || []
    : []

  // responsive sidebar toggle state
  const [isSidebarOpen, setSidebarOpen] = useState(false)

  return (
    <ThemeProvider theme={theme}>
      {isUnsupported ? (
        <UnsupportedBrowser />
      ) : (
        <Wrapper>
          <Header />
          <SidebarToggle
            isOpen={isSidebarOpen}
            onClick={() => setSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? <FaTimes /> : <FaBars />}
          </SidebarToggle>
          <PageContent>
            <Sidebar items={items} isOpen={isSidebarOpen} />
            <ContentContainer isOpen={!isSidebarOpen}>
              <Container px={3}>{children}</Container>
            </ContentContainer>
          </PageContent>
          <MobileNavigation />
        </Wrapper>
      )}
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
