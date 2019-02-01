// import React from 'react'
import PropTypes from 'prop-types'

import styled from 'util/style'

const ResponsiveHide = styled.span`
  display: none;
  @media screen and (min-width: ${({ min }) => min}) {
    display: ${({ display }) => display};
  }
`

ResponsiveHide.propTypes = {
  min: PropTypes.string.isRequired, // min width at which this will show
  display: PropTypes.string, // CSS display: block, inline, etc
}

ResponsiveHide.defaultProps = {
  display: 'block',
}

export default ResponsiveHide
