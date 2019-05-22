/**
 * Note: Multiple elements included here because of circular import issues.
 */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { css } from 'styled-components'
import { FaCaretDown, FaCaretRight } from 'react-icons/fa'

import { Flex } from 'components/Grid'
import Icon from 'components/elements/Icon'
import styled, { theme, themeGet } from 'util/style'
import { hasWindow, rootPath } from 'util/dom'
import { Link } from 'components/Link'

export const ItemsPropType = PropTypes.arrayOf(
  PropTypes.shape({
    path: PropTypes.string, // if absent, indicates that this does not navigate to a page and should only be used for headings for children
    label: PropTypes.string.isRequired,
    children: PropTypes.array,
  })
)

const expandoColor = theme.colors.grey[500]
const expandoSize = '1rem'

export const CaretDown = styled(FaCaretDown).attrs({ color: expandoColor })`
  width: ${expandoSize};
  height: ${expandoSize};
`

export const CaretRight = styled(FaCaretRight).attrs({ color: expandoColor })`
  width: ${expandoSize};
  height: ${expandoSize};
`

export const Expander = styled(Flex)`
  cursor: pointer;
  margin-left: -${expandoSize};
  margin-top: -4px;
  opacity: 0.75;
  display: flex;
  align-items: center;

  &:hover {
    opacity: 1;
  }

  svg {
    display: block;
  }
`

export const StyledIcon = styled(Icon)`
  margin-right: 0.25em;
  cursor: pointer;
`

export const Label = styled.div`
  font-size: 0.9em;
  cursor: pointer;
  border-bottom: 2px solid transparent;

  ${({ isActive }) =>
    isActive &&
    css`
      color: ${themeGet('colors.secondary.800')};
    `}

  ${({ isCurrent }) =>
    isCurrent &&
    css`
      border-bottom-color: ${themeGet('colors.secondary.800')};
    `}
`

export const HoverContainer = styled.div`
  opacity: 0.75;
  &:hover {
    opacity: 1;
  }
`

export const SidebarLink = styled(Link)`
  font-size: 0.9em;
  border-bottom: 2px solid transparent;
  color: ${themeGet('colors.primary.800')};

  &:hover {
    text-decoration: none;
  }

  ${({ isActive }) =>
    isActive &&
    css`
      color: ${themeGet('colors.secondary.800')};
    `}

  ${({ isCurrent }) =>
    isCurrent &&
    css`
      border-bottom-color: ${themeGet('colors.secondary.800')};
    `}
`

const serializeScroll = () => {
  if (!hasWindow) return

  const container = window.document.getElementById('Sidebar')

  if (container) {
    sessionStorage.setItem(`sidebarScroll/${rootPath()}`, container.scrollTop)
  }
}

const isCurrentPath = path => {
  if (!hasWindow) return false

  return window.location.pathname === path
}

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
      <Flex alignItems="center" onClick={() => setExpanded(!isExpanded)}>
        <Expander>
          <>
            {isExpanded ? <CaretDown /> : <CaretRight />}
            {icon ? <StyledIcon name={icon} size="2em" /> : null}
          </>
        </Expander>

        <div>
          <SidebarLink
            to={path}
            isActive={isActive}
            isCurrent={isCurrentPath(path)}
          >
            {label}
          </SidebarLink>
        </div>
      </Flex>
      {isExpanded && <ItemList items={children} />}
    </>
  )
}

ExpandableLink.propTypes = ItemsPropType.isRequired

const ExpandableLabel = ({ label, icon, children, isActive = false }) => {
  const [isExpanded, setExpanded] = useState(isActive)

  return (
    <>
      <Flex alignItems="center">
        <Expander onClick={() => setExpanded(!isExpanded)}>
          <>
            {isExpanded ? <CaretDown /> : <CaretRight />}
            {icon ? <StyledIcon name={icon} size="2em" /> : null}
          </>
        </Expander>

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
          /* eslint-disable-next-line */
          <div onClick={serializeScroll}>
            <Flex alignItems="center">
              {icon ? (
                <HoverContainer>
                  <StyledIcon name={icon} size="2em" />
                </HoverContainer>
              ) : null}
              {isActive ? (
                <Label isActive={isActive} isCurrent={isCurrentPath(path)}>
                  {label}
                </Label>
              ) : (
                <SidebarLink
                  to={path}
                  isActive={isActive}
                  isCurrent={isCurrentPath(path)}
                >
                  {label}
                </SidebarLink>
              )}
            </Flex>
          </div>
        )}
      </li>
    ))}
  </ul>
)

ItemList.propTypes = {
  items: ItemsPropType.isRequired,
}

export default ItemList
