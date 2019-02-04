import React from 'react'
import { Text } from 'rebass'

import { Flex } from 'components/Grid'
import { Link } from 'components/Link'
import ResponsiveHide from 'components/elements/ResponsiveHide'
import ResponsiveShow from 'components/elements/ResponsiveShow'
import styled, { theme, themeGet } from 'util/style'
import config from '../../../config/meta'

const NavBar = styled(Flex)`
  flex-grow: 1;

  @media screen and (max-width: ${themeGet('breakpoints.0')}) {
    display: none;
  }
`

const NavLink = styled(Link)`
  color: ${({ active }) =>
    themeGet(active ? 'colors.secondary.500' : 'colors.secondary.800')};
  border-top: 2px solid transparent;
  text-decoration: none;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: ${({ active }) =>
    active ? themeGet('colors.secondary.500') : 'transparent'};

  & + a {
    margin-left: 1em;
  }

  &:hover {
    border-bottom-color: ${themeGet('colors.secondary.200')};
    transition: border-bottom-color 0.5s;
  }
`

// make sure that window is available (not available in Gatsby build)
const hasWindow = typeof window !== 'undefined' && window

const isActive = path => hasWindow && window.location.pathname.startsWith(path)

const fontSizes = ['0.75rem', '0.75em', '1rem']

const Navigation = () => (
  <NavBar as="nav">
    {config.nav.map(({ label, shortLabel, link }) => (
      <NavLink key={link} to={link} active={isActive(link)}>
        {shortLabel ? (
          <>
            <ResponsiveHide min={theme.breakpoints[2]}>
              <Text fontSize={fontSizes}>{label}</Text>
            </ResponsiveHide>
            <ResponsiveShow max={theme.breakpoints[2]}>
              <Text fontSize={fontSizes}>{shortLabel}</Text>
            </ResponsiveShow>
          </>
        ) : (
          <Text fontSize={fontSizes}>{label}</Text>
        )}
      </NavLink>
    ))}
  </NavBar>
)

export default Navigation
