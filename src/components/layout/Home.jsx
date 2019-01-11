import React from 'react'
import PropTypes from 'prop-types'

import styled, { ThemeProvider, theme, themeGet, themePx } from 'util/style'
import { Link } from 'components/Link'
import { Box, Flex, Container } from 'components/Grid'
import Navigation from './Navigation'
import Search from '../Search'
import Header from './Header'

import config from '../../../config/meta'

// const Title = styled.h1`
//   margin: 0;
//   // color: #fff;

//   & * {
//     color: #fff;
//     text-decoration: none;
//   }
// `

// const SubTitle = styled.h3`
//   margin: 0;
//   // color: #fff;
//   font-style: italic;
//   font-weight: normal;
// `

// const Wrapper = styled.div`
//   // background: ${themeGet('colors.primary.800')};
//   padding: ${themePx('space.3')} ${themePx('space.3')};
//   margin-bottom: ${themePx('space.4')};
// `

const NavWrapper = styled.div`
  background: #eee;
  border-radius: 6px;
  padding: 0.5rem 1rem;
  margin: 1rem -1rem 0;
  a {
    color: #333;
  }
`

// const Header = () => (
//   <Wrapper as="header">
//     <Title>{config.siteTitle}</Title>
//     <SubTitle>{config.siteSubtitle}</SubTitle>
//     <NavWrapper>
//       <Flex alignItems="center">
//         <Navigation />
//         <Search />
//       </Flex>
//     </NavWrapper>
//   </Wrapper>
// )

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <Header isLarge />
      <Container px={3}>
        {children}
        <Box mt={3} />
      </Container>
    </>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
