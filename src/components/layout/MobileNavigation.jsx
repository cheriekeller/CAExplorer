import React from 'react'
import { FaHome, FaSearch } from 'react-icons/fa'

import styled, { themeGet } from 'util/style'
import { Box } from 'components/Grid'
import { Link } from 'components/Link'
import { hasWindow } from 'util/dom'

import config from '../../../config/meta'

const NavBar = styled(Box).attrs({
  as: 'nav',
  display: ['flex', 'flex', 'none'],
  fontSize: ['0.5rem', '0.75rem'],
})`
  flex: 0;
  background: ${themeGet('colors.primary.100')};
  border-top: 2px solid ${themeGet('colors.secondary.800')};
`

const NavLink = styled(Link)`
  text-align: center;
  padding: 0.5rem;
  color: ${({ active }) =>
    themeGet(active ? 'colors.white' : 'colors.secondary.800')};
  border-top: 2px solid transparent;
  text-decoration: none;
  flex: 1;
  background: ${({ active }) =>
    active ? themeGet('colors.primary.200') : 'transparent'};
`

const isActive = path => hasWindow && window.location.pathname.startsWith(path)

const MobileNavigation = () => (
  <NavBar justifyContent="space-evenly" alignItems="center">
    <NavLink to="/" active={hasWindow && window.location.pathname === '/'}>
      <FaHome />
    </NavLink>
    {config.nav.map(({ label, shortLabel, link }) => (
      <NavLink key={link} to={link} active={isActive(link)}>
        {shortLabel || label}
      </NavLink>
    ))}
    <NavLink to="/search" active={isActive('/search')}>
      <FaSearch />
    </NavLink>
  </NavBar>
)
export default MobileNavigation
