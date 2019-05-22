import React from 'react'
import PropTypes from 'prop-types'

import { Text } from 'components/Text'
import { Flex, Box } from 'components/Grid'
import styled, { themeGet } from 'util/style'
import Icon from './Icon'

const Wrapper = styled(Box).attrs({ mb: ['1rem', '1rem', '2rem'] })``

const Title = styled(Text).attrs({
  as: 'h1',
  fontSize: ['1.5rem', '1.75rem', '2.15rem'],
  m: 0,
})`
  line-height: 1;
`

const Subtitle = styled(Text).attrs({
  as: 'h3',
  fontSize: ['1rem', '1rem', '1.25rem'],
  m: '0.1rem 0 0 0',
})`
  color: ${themeGet('colors.primary.300')};
  font-weight: normal;
  font-style: italic;
`

const StyledIcon = styled(Icon)`
  margin-right: 0.5em;
`

const ContentHeader = ({ icon, title, subtitle }) => {
  const iconSize = subtitle ? '4em' : '3em'

  return (
    <Wrapper>
      <Flex alignItems="center">
        {icon && <StyledIcon name={icon} size={iconSize} />}
        <div>
          <Title>{title}</Title>
          {subtitle && <Subtitle>{subtitle}</Subtitle>}
        </div>
      </Flex>
    </Wrapper>
  )
}

ContentHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  icon: PropTypes.string,
}

ContentHeader.defaultProps = {
  icon: null,
  subtitle: null,
}

export default ContentHeader
