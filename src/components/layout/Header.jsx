import React from 'react'
import { Image, Text } from 'rebass'

import styled, { themeGet } from 'util/style'
import { Flex } from 'components/Grid'
import { Link } from 'components/Link'
import Search from 'components/Search'
import Navigation from './Navigation'

import SiteLogo from '../../images/CAE_Icon.svg'

import config from '../../../config/meta'

const Title = styled(Text)`
  margin: 0 1.5rem 0 0;
  color: ${themeGet('colors.primary.900')};
  text-decoration: none;
`

const Wrapper = styled.div`
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  right: 0;
  background: ${themeGet('colors.primary.100')};
  border-bottom: 2px solid ${themeGet('colors.secondary.800')};
  padding: 0.5rem;

  @media screen and (max-width: ${themeGet('breakpoints.0')}) {
    position: unset;
  }

  a:hover {
    text-decoration: none;
  }
`

const Logo = styled(Image).attrs({ src: SiteLogo })`
  margin: -0.5rem 0.25rem -0.5rem -0.5rem;
`

const Header = () => (
  <Wrapper as="header" id="Header">
    <Flex alignItems="center">
      <Link to="/">
        <Flex alignItems="center">
          <Logo as="img" width={['1.75rem', '2rem', '2.5rem']} />
          <div>
            <Title as="h1" fontSize={['0.9rem', '1rem', '1.5rem']}>
              {config.siteTitle}
            </Title>
          </div>
        </Flex>
      </Link>
      <Navigation />
      <Search />
    </Flex>
  </Wrapper>
)

export default Header
