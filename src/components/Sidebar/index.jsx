import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { css } from 'styled-components'
import { setConfig } from 'react-hot-loader'
import { Text } from 'rebass'
import { FaCaretDown, FaCaretRight } from 'react-icons/fa'
import { List, fromJS } from 'immutable'

import { Flex } from 'components/Grid'

import styled, { theme, themeGet } from 'util/style'
import { hasWindow, scrollIntoView } from 'util/dom'
import { Link } from 'components/Link'

setConfig({ pureSFC: true })

const ItemsPropType = PropTypes.arrayOf(
  PropTypes.shape({
    path: PropTypes.string, // if absent, indicates that this does not navigate to a page and should only be used for headings for children
    label: PropTypes.string.isRequired,
    children: PropTypes.array,
  })
)

const expandoColor = theme.colors.grey[500]
const expandoSize = '1.5rem'

const isActiveTerminalItem = path =>
  hasWindow && window.location.pathname.endsWith(path)

// TODO: refactor this so it works based on other things that URL alone
const isActiveParentItem = path =>
  hasWindow && window.location.pathname.startsWith(path)

const rootPath = () => (window ? window.location.pathname.split('/')[1] : null)

/**
 * Recurse into children arrays to determine which items are active based on current navigation
 * Intentionally mutate the item while traversing
 *
 * @param {Object} item - instance of ItemPropType
 */
const setActiveItems = item => {
  const { path = null, children = null } = item

  if (path && window.location.pathname.search(path) === -1) {
    // path is not part of URL, stop recursion
    item.isActive = false
    return item.isActive
  }

  if (children && children.length > 0) {
    item.isActive = children.reduce(
      (hasActiveChild, child) => hasActiveChild || setActiveItems(child),
      false
    )
  } else {
    item.isActive = path ? window.location.pathname === path : false
  }

  return item.isActive
}

const SidebarContainer = styled(Text)`
  overflow-y: auto;
  left: 0;
  height: 100%;
  width: 100%;
  padding: 2rem 1rem 4rem 1.5rem;
  z-index: 999;
  background: #fff;

  @media screen and (min-width: ${themeGet('breakpoints.0')}) {
    position: fixed;
    border-right: 1px solid #aaa;
  }

  @media screen and (max-width: ${themeGet('breakpoints.0')}) {
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

    // &::before {
    //   width: 0.5em;
    // }
  }

  ${({ isActive }) =>
    isActive &&
    css`
      color: ${themeGet('colors.primary.800')};
      font-weight: bold;

      // &::before {
      //   width: 0.75em !important;
      //   border-radius: 0 1em 1em 0 !important;
      //   left: 0 !important;
      // }
    `}

  ${({ isActiveParent }) =>
    isActiveParent &&
    css`
      color: ${themeGet('colors.primary.800')};
      font-weight: bold;
    `}
`

const Label = styled.div`
  color: ${themeGet('colors.primary.800')};
  font-weight: bold;
  cursor: pointer;
`

const Expander = styled.div`
  cursor: pointer;
  margin-left: -${expandoSize};
  margin-top: -4px;
  opacity: 0.75;

  &:hover {
    opacity: 1;
  }
`

const serializeScroll = () => {
  console.log('serialize scroll')
  const container = hasWindow
    ? window.document.getElementById('Sidebar')
    : null || null
  console.log(container)
  if (container) {
    console.log('scrollTop', container.scrollTop)
    sessionStorage[`sidebarScroll/${rootPath()}`] = container.scrollTop
  }
}

// TODO: show expanded parents
const ExpandableLink = ({ path, label, children, isActive = false }) => {
  const [isExpanded, setExpanded] = useState(isActive)

  return (
    <>
      <Flex alignItems="flex-start">
        <Expander onClick={() => setExpanded(!isExpanded)}>
          {isExpanded ? (
            <FaCaretDown color={expandoColor} size={expandoSize} />
          ) : (
            <FaCaretRight color={expandoColor} size={expandoSize} />
          )}
        </Expander>
        {isActive ? (
          <Label onClick={() => setExpanded(!isExpanded)}>{label}</Label>
        ) : (
          <SidebarLink
            onClick={serializeScroll}
            to={path}
            isActive={isActive}
            isActiveParent={isExpanded}
          >
            {label}
          </SidebarLink>
        )}
      </Flex>
      {isExpanded && <ItemList items={children} />}
    </>
  )
}

ExpandableLink.propTypes = ItemsPropType.isRequired

// TODO: refactor how we figure out active path and parents
const ExpandableLabel = ({ label, children, isActive = false }) => {
  const [isExpanded, setExpanded] = useState(isActive)

  return (
    <>
      <Flex alignItems="flex-start">
        <Expander onClick={() => setExpanded(!isExpanded)}>
          {isExpanded ? (
            <FaCaretDown color={expandoColor} size={expandoSize} />
          ) : (
            <FaCaretRight color={expandoColor} size={expandoSize} />
          )}
        </Expander>
        <Label onClick={() => setExpanded(!isExpanded)}>{label}</Label>
      </Flex>
      {isExpanded && <ItemList items={children} />}
    </>
  )
}

ExpandableLink.propTypes = ItemsPropType.isRequired

const ItemList = ({ items }) => (
  <ul>
    {items.map(({ path, label, children, isActive = false }) => (
      <li key={path || label} id={isActive ? 'ActiveSidebarLink' : null}>
        {children && children.length > 0 ? (
          /* eslint-disable react/no-children-prop */
          <>
            {path ? (
              <ExpandableLink path={path} label={label} children={children} />
            ) : (
              <ExpandableLabel label={label} children={children} />
            )}
          </>
        ) : (
          <>
            {isActive ? (
              <Label>{label}</Label>
            ) : (
              <SidebarLink
                to={path}
                isActive={isActive}
                onClick={serializeScroll}
              >
                {label}
              </SidebarLink>
            )}
          </>
        )}
      </li>
    ))}
  </ul>
)

ItemList.propTypes = {
  items: ItemsPropType.isRequired,
}

const Sidebar = ({ items, isOpen }) => {
  // roundtrip through immutable to force a deep copy
  const nav = fromJS(items).toJS()
  console.log('nav', nav)

  nav.forEach(setActiveItems)
  // nav.forEach(item => {
  //   console.log('top level', item, isActiveItem(item))
  // })

  useEffect(() => {
    scrollIntoView('ActiveSidebarLink', 'Sidebar')
  })

  return (
    <SidebarContainer
      id="Sidebar"
      isOpen={isOpen}
      width={['100%', '12rem', '12rem', '16rem']}
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
