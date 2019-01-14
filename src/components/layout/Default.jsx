import React from 'react'
import PropTypes from 'prop-types'

import styled, { ThemeProvider, theme } from 'util/style'
import { Flex, Container } from 'components/Grid'
import Sidebar from '../Sidebar'
import MobileNavigation from './MobileNavigation'
import Header from './Header'

import { backgroundItems } from '../../../config/sidebarItems'

const Content = styled(Flex)`
  padding-top: 2.75rem;
`

const ContentContainer = styled.div`
  padding: 2rem 0 2rem 16rem;
  width: 100%;
`

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <Header />
      <Content>
        <Sidebar items={backgroundItems} />
        <ContentContainer>
          <Container px={3}>{children}</Container>
        </ContentContainer>
      </Content>
      <MobileNavigation />
    </>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
