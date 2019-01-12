import React from 'react'
import PropTypes from 'prop-types'

import { ThemeProvider, theme } from 'util/style'
import Header from './Header'

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <Header isLarge />
      {children}
    </>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
