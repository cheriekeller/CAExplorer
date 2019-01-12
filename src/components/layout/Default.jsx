import React from 'react'
import PropTypes from 'prop-types'

import { ThemeProvider, theme } from 'util/style'
import { Flex, Container } from 'components/Grid'
import Sidebar from '../Sidebar'
import MobileNavigation from './MobileNavigation'
import Header from './Header'

const ContentPage = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <Header />
      <Flex>
        <Sidebar />
        <Container px={3}>{children}</Container>
      </Flex>
      <MobileNavigation />
    </>
  </ThemeProvider>
)

ContentPage.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ContentPage
