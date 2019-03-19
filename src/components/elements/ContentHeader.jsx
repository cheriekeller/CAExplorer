import React from 'react'
import PropTypes from 'prop-types'

import { Flex } from 'components/Grid'
import styled, { themeGet } from 'util/style'
import Icon from './Icon'

const Wrapper = styled.div`
  margin-bottom: 2rem;
`

const Title = styled.h1`
  margin-top: -0.1em;
`

const Subtitle = styled.h3`
  color: ${themeGet('colors.primary.300')};
  font-weight: normal;
  font-style: italic;
  margin-top: -1rem;
  margin-bottom: 0 !important;
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
