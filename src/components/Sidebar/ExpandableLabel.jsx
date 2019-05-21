import React, { useState } from 'react'

import { Flex } from 'components/Grid'
import ItemList from './ItemList'
import { ItemsPropType } from './proptypes'
import { Expander, CaretDown, CaretRight, StyledIcon, Label } from './styles'

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

export default ExpandableLabel
