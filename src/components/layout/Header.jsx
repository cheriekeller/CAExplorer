import React from 'react'
import PropTypes from 'prop-types'

import styled, { themeGet, themePx } from 'util/style'
import { Flex } from 'components/Grid'
import { Link } from 'components/Link'
import Navigation from './Navigation'
import Search from '../Search'

import SiteLogo from '../../images/CAE_Icon.svg'

import config from '../../../config/meta'

const Title = styled.h3`
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
  height: 2.75rem;
  background: ${themeGet('colors.primary.100')};
  border-bottom: 2px solid ${themeGet('colors.secondary.800')};
  padding: 0.5rem;

  a {
    text-decoration: none;
  }
`

const Logo = styled.img.attrs({ src: SiteLogo })`
  height: 2.5rem;
  margin: -0.5rem 0.5rem -0.5rem -0.5rem;
`

const Header = () => (
  <Wrapper as="header">
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

Header.propTypes = {
  isLarge: PropTypes.bool,
}

Header.defaultProps = {
  isLarge: false,
}

export default Header
