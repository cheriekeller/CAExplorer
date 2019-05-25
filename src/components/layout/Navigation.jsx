import React from 'react'
import { FaSearch } from 'react-icons/fa'

import { Text } from 'components/Text'
import { Box } from 'components/Grid'
import { Link } from 'components/Link'
import styled, { themeGet } from 'util/style'
import config from '../../../config/meta'

const NavBar = styled(Box).attrs({
  ml: '1.25rem',
  display: ['none', 'none', 'flex'],
})`
  flex-grow: 1;
`

const NavLink = styled(Link)`
  display: block;
  color: ${({ active }) =>
    themeGet(active ? 'colors.secondary.500' : 'colors.secondary.800')};
  border-top: 2px solid transparent;
  text-decoration: none;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: ${({ active }) =>
    active ? themeGet('colors.secondary.500') : 'transparent'};

  &:hover {
    border-bottom-color: ${themeGet('colors.secondary.200')};
    transition: border-bottom-color 0.5s;
  }

  margin-right: 1em;
`

const SearchIcon = styled(FaSearch).attrs({ size: '1em' })`
  width: 1em;
  height: 1em;
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
            <Text
              display={['none', 'none', 'none', 'unset']}
              fontSize={fontSizes}
            >
              {label}
            </Text>
            <Text
              display={['unset', 'unset', 'unset', 'none']}
              fontSize={fontSizes}
            >
              {shortLabel}
            </Text>
          </>
        ) : (
          <Text fontSize={fontSizes}>{label}</Text>
        )}
      </NavLink>
    ))}

    <Box display={['none', 'none', 'unset', 'none']}>
      <NavLink to="/search" active={isActive('/search')}>
        <SearchIcon />
      </NavLink>
    </Box>
  </NavBar>
)

export default Navigation
