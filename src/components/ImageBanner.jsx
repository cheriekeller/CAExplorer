import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

import styled, { themePx } from 'util/style'

const Wrapper = styled.div`
  margin-top: -${themePx('space.4')};
  height: ${props => props.maxHeight};
  overflow: hidden;
  width: 100%;
  position: relative;
`

const StyledImage = styled(Img)`
  position: absolute !important;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
`

const ImageBanner = ({ headerImage, height }) => (
  <Wrapper maxHeight={height}>
    <StyledImage fluid={headerImage} />
  </Wrapper>
)

ImageBanner.propTypes = {
  headerImage: PropTypes.any.isRequired,
  height: PropTypes.string,
}

ImageBanner.defaultProps = {
  height: '40vh',
}

export default ImageBanner
