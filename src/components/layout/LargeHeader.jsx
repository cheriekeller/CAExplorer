import React from 'react'
import { Image, Text } from 'rebass'

import styled, { themeGet } from 'util/style'
import { Flex } from 'components/Grid'
import { Link } from 'components/Link'
import Navigation from './Navigation'
import Search from '../Search'

import SiteLogo from '../../images/CAE_Icon.svg'

import config from '../../../config/meta'

const Title = styled(Text)`
  margin: 0 1.5rem 0.2em 0;
  color: ${themeGet('colors.primary.900')};
  text-decoration: none;
`

const Subtitle = styled(Text)`
  margin: 0.25rem 0 0 0;
  color: ${themeGet('colors.primary.900')};
  font-style: italic;
  font-weight: normal;

  @media screen and (max-width: ${themeGet('breakpoints.0')}) {
    display: none;
  }
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
  margin: -0.5rem 0.5rem -0.5rem -0.5rem;
`

const LargeHeader = () => (
  <Wrapper as="header">
    <Flex alignItems="center">
      <Link to="/">
        <Flex alignItems="center">
          <Logo as="img" width={['3rem', '2.5rem', '4rem', '4.25rem']} />
          <div>
            <Title
              as="h1"
              fontSize={['1rem', '1rem', '1.5rem', '1.75rem']}
              width={[]}
            >
              {config.siteTitle}
            </Title>
            <Subtitle as="h2" fontSize={[0, 1, 2]}>
              {config.siteSubtitle}
            </Subtitle>
          </div>
        </Flex>
      </Link>
      <Navigation />
      <Search />
    </Flex>
  </Wrapper>
)

export default LargeHeader
