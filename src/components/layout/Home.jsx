import React from 'react'
import PropTypes from 'prop-types'

import { ThemeProvider, theme } from 'util/style'
// import { Box, Container } from 'components/Grid'
import Header from './Header'

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <Header isLarge />
      {/* <Container px={3}> */}
      {children}
      {/* </Container> */}
    </>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
