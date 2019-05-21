
import React from 'react'

import { Flex } from 'components/Grid'
import { hasWindow, rootPath } from 'util/dom'
import ExpandableLabel from './ExpandableLabel'
import ExpandableLink from './ExpandableLink'
import {Label, StyledIcon, HoverContainer, SidebarLink} from './styles'
import {ItemsPropType} from './proptypes'


const serializeScroll = () => {
    const container = hasWindow
      ? window.document.getElementById('Sidebar')
      : null || null
    if (container) {
      sessionStorage.setItem(`sidebarScroll/${rootPath()}`, container.scrollTop)
    }
  }

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
                  <Label
                    isActive={isActive}
                    isCurrent={window.location.pathname === path}
                  >
                    {label}
                  </Label>
                ) : (
                  <SidebarLink
                    to={path}
                    isActive={isActive}
                    isCurrent={window.location.pathname === path}
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