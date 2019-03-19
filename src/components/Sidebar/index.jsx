import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { css } from 'styled-components'
import { setConfig } from 'react-hot-loader'
import { Text } from 'rebass'
import { FaCaretDown, FaCaretRight } from 'react-icons/fa'
import { fromJS } from 'immutable'

import { Flex } from 'components/Grid'
import Icon from 'components/elements/Icon'
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

const rootPath = () => (window ? window.location.pathname.split('/')[1] : null)

/**
 * Recurse into children arrays to determine which items are active based on current navigation
 * Intentionally mutate the item while traversing
 *
 * @param {Object} item - instance of ItemPropType
 */
const setActiveItems = item => {
  const { path = null, children = null } = item

  // Note: even if path is not active, children may be active, so we need to recurse into everything

  if (children && children.length > 0) {
    // active if terminal currently selected parent, or has an active child
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
    margin-left: 1.25em;
  }
`

const SidebarLink = styled(Link)`
  &:hover {
    text-decoration: none;
    color: ${themeGet('colors.primary.800')};
    transition: color 0.5s;
  }

  ${({ isActive }) =>
    isActive &&
    css`
      color: ${themeGet('colors.primary.800')};
      font-weight: bold;
    `}

  ${({ isActiveParent }) =>
    isActiveParent &&
    css`
      color: ${themeGet('colors.primary.800')};
      font-weight: bold;
    `}
`

const Label = styled.div`
  cursor: pointer;

  ${({ isActive }) =>
    isActive &&
    css`
      color: ${themeGet('colors.primary.800')};
      font-weight: bold;
    `}
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

const StyledIcon = styled(Icon)`
  margin-right: 0.25em;
`

// WIP: make this work properly!
// TODO: in browser.js, on route change, clear out sidebarScroll if nav to different root
const serializeScroll = () => {
  // console.log('serialize scroll')
  const container = hasWindow
    ? window.document.getElementById('Sidebar')
    : null || null
  if (container) {
    // console.log('scrollTop', container.scrollTop)
    sessionStorage.setItem(`sidebarScroll/${rootPath()}`, container.scrollTop)
  }
}

// TODO: show expanded parents
const ExpandableLink = ({
  path = null,
  label,
  icon = null,
  children = null,
  isActive = false,
}) => {
  const [isExpanded, setExpanded] = useState(isActive)

  return (
    <>
      <Flex alignItems="center">
        <Expander onClick={() => setExpanded(!isExpanded)}>
          {isExpanded ? (
            <FaCaretDown color={expandoColor} size={expandoSize} />
          ) : (
            <FaCaretRight color={expandoColor} size={expandoSize} />
          )}
        </Expander>

        {icon ? <StyledIcon name={icon} size="2em" /> : null}

        <div onClick={() => setExpanded(!isExpanded)}>
          <SidebarLink to={path} isActive={isActive}>
            {label}
          </SidebarLink>
        </div>
      </Flex>
      {isExpanded && <ItemList items={children} />}
    </>
  )
}

ExpandableLink.propTypes = ItemsPropType.isRequired

// TODO: refactor how we figure out active path and parents
const ExpandableLabel = ({ label, icon, children, isActive = false }) => {
  const [isExpanded, setExpanded] = useState(isActive)

  return (
    <>
      <Flex alignItems="center">
        <Expander onClick={() => setExpanded(!isExpanded)}>
          {isExpanded ? (
            <FaCaretDown color={expandoColor} size={expandoSize} />
          ) : (
            <FaCaretRight color={expandoColor} size={expandoSize} />
          )}
        </Expander>

        {icon ? <StyledIcon name={icon} size="2em" /> : null}
        <Label isActive={isActive} onClick={() => setExpanded(!isExpanded)}>
          {label}
        </Label>
      </Flex>
      {isExpanded && <ItemList items={children} />}
    </>
  )
}

ExpandableLabel.propTypes = ItemsPropType.isRequired

const ItemList = ({ items }) => (
  <ul>
    {items.map(({ path, label, icon, children, isActive = false }) => (
      <li key={path || label} id={isActive ? 'ActiveSidebarLink' : null}>
        {children && children.length > 0 ? (
          /* eslint-disable react/no-children-prop */
          <>
            {path ? (
              <ExpandableLink
                path={path}
                label={label}
                icon={icon}
                children={children}
                isActive={isActive}
              />
            ) : (
              <ExpandableLabel
                label={label}
                icon={icon}
                children={children}
                isActive={isActive}
              />
            )}
          </>
        ) : (
          <div onClick={serializeScroll}>
            {isActive ? (
              <Label isActive={isActive}>{label}</Label>
            ) : (
              <SidebarLink
                to={path}
                isActive={isActive}
                state={{ test: 'test state' }}
              >
                {label}
              </SidebarLink>
            )}
          </div>
        )}
      </li>
    ))}
  </ul>
)

ItemList.propTypes = {
  items: ItemsPropType.isRequired,
}

const Sidebar = ({ items, isOpen }) => {
  // console.log('incoming items', items)
  // roundtrip through immutable to force a deep copy
  const nav = fromJS(items).toJS()

  nav.forEach(setActiveItems)
  // console.log('set nav', nav)

  useEffect(() => {
    const container = hasWindow
      ? window.document.getElementById('Sidebar')
      : null || null
    if (container) {
      const scroll = sessionStorage.getItem(`sidebarScroll/${rootPath()}`)
      if (scroll !== null) {
        container.scrollTop = scroll
      } else {
        scrollIntoView('ActiveSidebarLink', 'Sidebar')
      }
    }
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
