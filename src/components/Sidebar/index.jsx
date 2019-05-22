import React, { useLayoutEffect } from 'react'
import PropTypes from 'prop-types'
import { Text } from 'rebass'
import { fromJS } from 'immutable'

import styled, { themeGet } from 'util/style'
import { hasWindow, scrollIntoView, rootPath } from 'util/dom'

import ItemList, { ItemsPropType } from './ItemList'

/**
 * Recurse into children arrays to determine which items are active based on current navigation
 * Intentionally mutate the item while traversing
 *
 * @param {Object} item - instance of ItemPropType
 */
const setActiveItems = item => {
  if (!hasWindow) return false

  const { path = null, children = null } = item

  // Note: even if path is not active, children may be active, so we need to recurse into everything
  if (children && children.length > 0) {
    // active if terminal currently selected parent, or has an active child
    /* eslint-disable no-param-reassign */
    item.isActive =
      window.location.pathname === path ||
      children.reduce(
        (hasActiveChild, child) => hasActiveChild || setActiveItems(child),
        false
      )
  } else {
    item.isActive = path ? window.location.pathname === path : false
  }
  return item.isActive
}

const SidebarContainer = styled(Text)`
  flex: 0 0 auto;
  overflow-y: auto;
  height: 100%;
  padding: 2rem 1rem 4rem 1.5rem;
  z-index: 999;
  background: #fff;

  @media screen and (min-width: ${themeGet('breakpoints.1')}) {
    border-right: 1px solid #aaa;
  }

  @media screen and (max-width: ${themeGet('breakpoints.1')}) {
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    padding-top: 1rem;
  }

  header {
    font-weight: bold;
    text-transform: uppercase;
    margin: 0 0 8px 0;
  }
  ul {
    margin: 0 0 16px 0;
    list-style: none;
    line-height: 1.2;
  }

  ul ul {
    margin-top: 0.5em;
    margin-left: 1.25em;
  }
`

const Sidebar = ({ items, isOpen }) => {
  // roundtrip through immutable to force a deep copy
  const nav = fromJS(items).toJS()

  nav.forEach(setActiveItems)

  useLayoutEffect(() => {
    const container = hasWindow
      ? window.document.getElementById('Sidebar')
      : null || null
    if (container) {
      const scroll = sessionStorage.getItem(`sidebarScroll/${rootPath()}`)
      if (scroll !== null) {
        container.scrollTop = scroll
      } else {
        scrollIntoView('ActiveSidebarLink')
      }
    }
  })

  return (
    <SidebarContainer
      id="Sidebar"
      isOpen={isOpen}
      width={['100%', '100%', '12rem', '16rem', '18rem']}
    >
      <ItemList items={nav} />
    </SidebarContainer>
  )
}

Sidebar.propTypes = {
  items: ItemsPropType.isRequired,
  isOpen: PropTypes.bool.isRequired,
}

export default Sidebar
