import React from 'react'
import PropTypes from 'prop-types'

import styled, { ThemeProvider, theme, themeGet, themePx } from 'util/style'
import { Flex, Box, Container } from 'components/Grid'
import { Link } from 'components/Link'
import Sidebar from '../Sidebar'
import Navigation from './Navigation'
import MobileNavigation from './MobileNavigation'
import Search from '../Search'

import config from '../../../config/meta'

const Title = styled.h1`
  margin: 0 1rem 0 0;
  & * {
    color: #fff;
    text-decoration: none;
    font-size: ${themePx('fontSizes.4')};
  }
`

const Wrapper = styled.div`
  background: ${themeGet('colors.primary.800')};
  padding: ${themePx('space.3')} ${themePx('space.3')};
  margin-bottom: ${themePx('space.4')};
`

const Header = () => (
  <Wrapper as="header">
    <Flex alignItems="center">
      <Title>
        <Link to="/">
          <Flex alignItems="center">
            <svg height="32" width="32">
              <circle cx="16" cy="16" r="12" fill="#ffd460" />
            </svg>
            {config.siteTitle}
          </Flex>
        </Link>
      </Title>
      <Navigation />
      <Search />
    </Flex>
  </Wrapper>
)

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
