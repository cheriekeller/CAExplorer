import React from 'react'

import { Flex } from 'components/Grid'
import { Link } from 'components/Link'
import styled, { themePx } from 'util/style'
import config from '../../../config/meta'

// TODO: responsive font size
const NavBar = styled(Flex)`
  font-size: ${themePx('fontSizes.3')};
  flex-grow: 1;
`

const NavLink = styled(Link)`
  color: #fff;
  border-top: 2px solid transparent;
  text-decoration: none;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: ${props =>
    props.active ? '#f07b3f !important' : 'transparent'};

  & + a {
    margin-left: 1rem;
  }

  &:hover {
    border-bottom-color: #fff;
    transition: border-bottom-color 0.5s;
  }
`

const Navigation = () => (
  <NavBar as="nav">
    {config.nav.map(({ label, link }) => (
      <NavLink
        key={link}
        to={link}
        active={window.location.href.search(link) !== -1}
      >
        {label}
      </NavLink>
    ))}
  </NavBar>
)

export default Navigation
