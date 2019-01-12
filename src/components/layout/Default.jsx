import React from 'react'
import PropTypes from 'prop-types'

import { ThemeProvider, theme } from 'util/style'
import { Flex, Box, Container } from 'components/Grid'
import Sidebar from '../Sidebar'
import MobileNavigation from './MobileNavigation'
import Header from './Header'

const ContentPage = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <Header />
      <Flex>
        <Sidebar />
        <Container maxWidth="700px" px={3}>
          {children}
          <Box mt={3} />
        </Container>
      </Flex>
      <MobileNavigation />
    </>
  </ThemeProvider>
)

ContentPage.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ContentPage
