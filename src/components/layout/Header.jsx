import React from 'react'
import PropTypes from 'prop-types'

import styled, { themeGet, themePx } from 'util/style'
import { Flex } from 'components/Grid'
import { Link } from 'components/Link'
import Navigation from './Navigation'
import Search from '../Search'

import SiteLogo from '../../images/CAE_Icon.svg'

import config from '../../../config/meta'

const Title = styled.h1`
  margin: 0 1.5em 0 0;
  color: ${themeGet('colors.primary.900')};
  text-decoration: none;
  font-size: ${themePx('fontSizes.4')};
`

const LargeTitle = styled(Title)`
  font-size: ${themePx('fontSizes.5')};
`

const Subtitle = styled.h4`
  margin: 0.25em 0 0 0;
  color: ${themeGet('colors.primary.900')};
  font-style: italic;
  font-weight: normal;
`

const Wrapper = styled.div`
  background: ${themeGet('colors.primary.100')};
  border-bottom: 2px solid ${themeGet('colors.secondary.800')};
  padding: ${themePx('space.3')} ${themePx('space.3')};
  margin-bottom: ${themePx('space.4')};

  a {
    text-decoration: none;
  }
`

const Logo = styled.img.attrs({ src: SiteLogo })`
  height: ${props => props.height};
  margin: -0.5em 0.5em -0.5em -0.5em;
`

Logo.propTypes = {
  height: PropTypes.string.isRequired,
}

const Header = ({ isLarge }) => (
  <Wrapper as="header">
    <Flex alignItems="center">
      <Link to="/">
        <Flex alignItems="center">
          <Logo height={isLarge ? '4em' : '2.5em'} />
          <div>
            {isLarge ? (
              <LargeTitle>{config.siteTitle}</LargeTitle>
            ) : (
              <Title>{config.siteTitle}</Title>
            )}
            {isLarge ? <Subtitle>{config.siteSubtitle}</Subtitle> : null}
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
