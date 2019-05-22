import React from 'react'
import { Image } from 'rebass'

import { Text } from 'components/Text'
import styled, { themeGet } from 'util/style'
import { Flex } from 'components/Grid'
import { Link } from 'components/Link'
import Search from './Search'
import Navigation from './Navigation'

import SiteLogo from '../../images/CAE_Icon.svg'

import config from '../../../config/meta'

const Wrapper = styled.div`
  flex: 0;
  background: ${themeGet('colors.primary.100')};
  border-bottom: 2px solid ${themeGet('colors.secondary.800')};
  padding: 0.5rem;

  a:hover {
    text-decoration: none;
  }
`

const Logo = styled(Image).attrs({
  as: 'img',
  src: SiteLogo,
  width: ['1.75rem', '2rem', '2.5rem'],
})`
  margin: -0.5rem 0.25rem -0.5rem -0.5rem;
`

const Title = styled(Text).attrs({
  as: 'h1',
  fontSize: ['1rem', '1rem', '1rem', '1.5rem'],
})`
  margin: 0;
  color: ${themeGet('colors.primary.900')};
  text-decoration: none;
`

const Header = () => (
  <Wrapper as="header" id="Header">
    <Flex alignItems="center">
      <Link to="/">
        <Flex alignItems="center">
          <Logo />
          <div>
            <Title>{config.siteTitle}</Title>
          </div>
        </Flex>
      </Link>
      <Navigation />
      <Search />
    </Flex>
  </Wrapper>
)

export default Header
