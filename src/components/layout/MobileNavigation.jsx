import React from 'react'
import { FaHome } from 'react-icons/fa'

import styled, { themeGet } from 'util/style'
import { Flex } from 'components/Grid'
import { Link } from 'components/Link'
import { hasWindow } from 'util/dom'
import config from '../../../config/meta'

const NavBar = styled(Flex)`
  display: none;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  /* padding: 0.5rem; */
  z-index: 2000;
  background: ${themeGet('colors.primary.100')};
  border-top: 2px solid ${themeGet('colors.secondary.800')};

  @media (max-width: ${themeGet('breakpoints.0')}) {
    display: flex;
  }

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`

const NavLink = styled(Link)`
  text-align: center;
  padding: 0.5rem;
  color: ${({ active }) =>
    themeGet(active ? 'colors.white' : 'colors.secondary.800')};
  border-top: 2px solid transparent;
  text-decoration: none;
  flex-grow: 1;
  background: ${({ active }) =>
    active ? themeGet('colors.primary.200') : 'transparent'};

  & + a {
    margin-left: 1em;
  }
`

const isActive = path => hasWindow && window.location.pathname.startsWith(path)

const MobileNavigation = () => (
  <NavBar as="nav" justifyContent="space-evenly" alignItems="center">
    <NavLink to="/" active={hasWindow && window.location.pathname === '/'}>
      <FaHome />
    </NavLink>
    {config.nav.map(({ label, link }) => (
      <NavLink key={link} to={link} active={isActive(link)}>
        {label}
      </NavLink>
    ))}
  </NavBar>
)

export default MobileNavigation
