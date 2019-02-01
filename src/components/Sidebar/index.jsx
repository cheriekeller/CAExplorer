import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { css } from 'styled-components'
import { setConfig } from 'react-hot-loader'
import { Text } from 'rebass'

import styled, { themeGet } from 'util/style'
import { scrollIntoView } from 'util/dom'
import { Link } from 'components/Link'

setConfig({ pureSFC: true })

const ItemsPropType = PropTypes.arrayOf(
  PropTypes.shape({
    path: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })
)

const SidebarContainer = styled(Text)`
  overflow-y: auto;
  left: 0;
  height: 100%;
  width: 100%;
  padding: 2rem 1rem 4rem;
  z-index: 999;
  background: #fff;

  @media screen and (min-width: ${themeGet('breakpoints.0')}) {
    position: fixed;
    width: 16em;
    border-right: 1px solid #aaa;
  }

  @media screen and (max-width: ${themeGet('breakpoints.0')}) {
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  }

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

  ${({ isActive }) =>
    isActive &&
    css`
      color: ${themeGet('colors.primary.800')};
      font-weight: bold;

      &::before {
        width: 0.75em !important;
        border-radius: 0 1em 1em 0 !important;
        left: 0 !important;
      }
    `}

  ${({ isActiveParent }) =>
    isActiveParent &&
    css`
      color: ${themeGet('colors.primary.800')};
      font-weight: bold;
    `}
`

// make sure that window is available (not available in Gatsby build)
const hasWindow = typeof window !== 'undefined' && window

const isActive = path => hasWindow && window.location.pathname.endsWith(path)

const showChildren = path =>
  hasWindow && window.location.pathname.startsWith(path)

const List = ({ items }) => (
  <ul>
    {items.map(({ path, label, children }) => (
      <li key={path} id={isActive(path) ? 'ActiveSidebarLink' : null}>
        <SidebarLink
          to={path}
          isActive={isActive(path)}
          isActiveParent={children && children.length && showChildren(path)}
        >
          {label}
        </SidebarLink>
        {children && children.length > 0 && showChildren(path) ? (
          <List items={children} />
        ) : null}
      </li>
    ))}
  </ul>
)

List.propTypes = {
  items: ItemsPropType.isRequired,
}

const Sidebar = ({ items, isOpen }) => {
  useEffect(() => {
    scrollIntoView('ActiveSidebarLink')
  })

  return (
    <SidebarContainer
      isOpen={isOpen}
      fontSize={['1rem', '0.75rem', '1rem', '1rem']}
    >
      <List items={items} />
    </SidebarContainer>
  )
}

Sidebar.propTypes = {
  items: ItemsPropType.isRequired,
  isOpen: PropTypes.bool.isRequired,
}

export default Sidebar
