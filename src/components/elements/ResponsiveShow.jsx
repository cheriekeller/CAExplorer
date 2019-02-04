// import React from 'react'
import PropTypes from 'prop-types'

import styled from 'util/style'

const ResponsiveShow = styled.span`
  // display: none;
  @media screen and (min-width: ${({ max }) => max}) {
    display: none;
    // display: ${({ display }) => display};
  }
`

ResponsiveShow.propTypes = {
  max: PropTypes.string.isRequired, // max width at which this will show
  // display: PropTypes.string, // CSS display: block, inline, etc
}

// ResponsiveShow.defaultProps = {
//   display: 'block',
// }

export default ResponsiveShow
