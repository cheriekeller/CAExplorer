import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'styled-components'

import styled, { themeGet } from 'util/style'

import { Link } from 'components/Link'

// make sure that window is available (not available in Gatsby build)
const hasWindow = typeof window !== 'undefined' && window

const ItemsPropType = PropTypes.arrayOf(
  PropTypes.shape({
    path: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })
)

// TODO: responsive
const SidebarContainer = styled.div`
  position: fixed;
  left: 0;
  height: 100%;
  width: 16rem;
  border-right: 1px solid #aaa;
  padding: 2rem 1rem;
  header {
    font-weight: bold;
    text-transform: uppercase;
    margin: 0 0 8px 0;
  }
  ul {
    margin: 0 0 16px 0;
    list-style: none;
  }

  ul ul {
    margin-top: 0.5em;
    margin-left: 1em;
  }
`

const SidebarLink = styled(Link)`
  &::before {
    content: '';
    margin-top: 0.5em;
    width: 0;
    height: 0.5em;
    border-radius: 0 1em 1em 0;
    background: ${themeGet('colors.primary.800')};
    position: absolute;
    left: 0;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  }

  &:hover {
    text-decoration: none;
    color: ${themeGet('colors.primary.800')};
    transition: color 0.5s;

    &::before {
      width: 0.5em;
    }
  }

  ${({ active }) =>
    active &&
    css`
      color: ${themeGet('colors.primary.800')};
      font-weight: bold;

      &::before {
        width: 0.75em !important;
        border-radius: 0 1em 1em 0 !important;
        left: 0 !important;
      }
    `}
`

const List = ({ items }) => (
  <ul>
    {items.map(({ path, label, children }) => {
      console.log(path, hasWindow && window.location.href.search(path) !== -1)
      return (
        <li key={path}>
          <SidebarLink
            to={path}
            active={hasWindow && window.location.href.search(path) !== -1}
          >
            {label}
          </SidebarLink>
          {children && children.length > 0 ? <List items={children} /> : null}
        </li>
      )
    })}
  </ul>
)

List.propTypes = {
  items: ItemsPropType.isRequired,
}

const Sidebar = ({ items }) => (
  <SidebarContainer>
    <List items={items} />
  </SidebarContainer>
)

Sidebar.propTypes = {
  items: ItemsPropType.isRequired,
}

export default Sidebar
