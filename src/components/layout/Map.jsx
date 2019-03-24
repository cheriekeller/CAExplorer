import React from 'react'
import PropTypes from 'prop-types'

import { Box, Flex, Container } from 'components/Grid'
import styled, { ThemeProvider, theme } from 'util/style'
import Header from './Header'

const ContentContainer = styled(Box)`
  width: 100%;
`

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <Header />
      <ContentContainer>{children}</ContentContainer>
    </>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
