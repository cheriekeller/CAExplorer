import React from 'react'
import PropTypes from 'prop-types'

import { ThemeProvider, theme } from 'util/style'
import { Flex, Container } from 'components/Grid'
import Sidebar from '../Sidebar'
import MobileNavigation from './MobileNavigation'
import Header from './Header'

import { backgroundItemList } from '../Sidebar/items'

const Layout = ({ children }) => {
  console.log('items', backgroundItemList)
  return (
    <ThemeProvider theme={theme}>
      <>
        <Header />
        <Flex>
          <Sidebar items={backgroundItemList} />
          <Container px={3}>{children}</Container>
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
