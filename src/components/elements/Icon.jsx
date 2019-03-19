import React from 'react'
import PropTypes from 'prop-types'

import styled, { themeGet } from 'util/style'

const Icon = ({ name, size, color, borderColor, className }) => {
  /* eslint-disable-next-line */
  const svg = require(`icons/${name}.svg`)

  const SVG = styled(svg)`
    flex-shrink: 0;
    height: ${size};
    width: ${size};

    g path {
      fill: ${color} !important;
    }
    #Outline,
    #Outline1 {
      stroke: ${borderColor} !important;
      fill: none !important;
    }
    #Inner-Outline {
      fill: none !important;
    }
  `

  return <SVG className={className} />
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.string,
  borderColor: PropTypes.string,
  className: PropTypes.string,
}

Icon.defaultProps = {
  size: '1em',
  color: themeGet('colors.primary.500'),
  borderColor: themeGet('colors.grey.500'),
  className: null,
}

export default Icon
