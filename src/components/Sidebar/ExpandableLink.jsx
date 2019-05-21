import React, { useState } from 'react'
import { Flex } from 'components/Grid'
import ItemList from './ItemList'
import {
  CaretDown,
  CaretRight,
  Expander,
  StyledIcon,
  SidebarLink,
} from './styles'
import { ItemsPropType } from './proptypes'

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
            isCurrent={window.location.pathname === path}
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

export default ExpandableLink
