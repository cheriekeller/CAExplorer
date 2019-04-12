import React from 'react'
import PropTypes from 'prop-types'

import { ThemeProvider, theme } from 'util/style'
import { isUnsupported } from 'util/dom'

import Header from './LargeHeader'
import MobileNavigation from './MobileNavigation'
import UnsupportedBrowser from './UnsupportedBrowser'

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    {isUnsupported ? (
      <UnsupportedBrowser />
    ) : (
      <>
        <Header />
        {children}
        <MobileNavigation />
      </>
    )}
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
