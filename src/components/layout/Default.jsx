import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider, theme } from 'util/style'

import { Box, Container } from 'components/Grid'
// import Header from 'components/Header'
// import Footer from 'components/Footer'
import MobileNavigation from './MobileNavigation'

// import config from '../../../config/meta'

const ContentPage = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      {/* <Header siteTitle={config.siteTitle} /> */}
      <Container maxWidth="700px" px={3}>
        {children}
        <Box mt={3} />
      </Container>
      {/* <Footer /> */}
      <MobileNavigation />
    </>
  </ThemeProvider>
)

ContentPage.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ContentPage
