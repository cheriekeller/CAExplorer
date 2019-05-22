import React from 'react'
import { Image } from 'rebass'

import styled, { themeGet } from 'util/style'
import { Text } from 'components/Text'
import { Flex } from 'components/Grid'
import { Link } from 'components/Link'
import Navigation from './Navigation'
import Search from './Search'

import SiteLogo from '../../images/CAE_Icon.svg'

import config from '../../../config/meta'

const Wrapper = styled.div`
  line-height: 1;
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
  width: ['1.75rem', '2.5rem', '4rem', '4.25rem'],
})`
  margin: -0.5rem 0.25rem -0.5rem -0.5rem;
`

const Title = styled(Text).attrs({
  as: 'h1',
  fontSize: ['1rem', '1rem', '1rem', '1.75rem'],
})`
  margin: 0;
  color: ${themeGet('colors.primary.900')};
  text-decoration: none;
`

const Subtitle = styled(Text).attrs({
  as: 'h2',
  fontSize: ['0.75rem', '0.75rem', '1rem'],
  display: ['none', 'none', 'none', 'unset'],
})`
  margin: 0;
  color: ${themeGet('colors.primary.900')};
  font-style: italic;
  font-weight: normal;
`

const LargeHeader = () => (
  <Wrapper as="header">
    <Flex alignItems="center">
      <Link to="/">
        <Flex alignItems="center">
          <Logo />

          <div>
            <Title>{config.siteTitle}</Title>
            <Subtitle>{config.siteSubtitle}</Subtitle>
          </div>
        </Flex>
      </Link>

      <Navigation />

      <Search />
    </Flex>
  </Wrapper>
)

export default LargeHeader
