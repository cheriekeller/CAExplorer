import React from 'react'
import PropTypes from 'prop-types'
// import * as Icons from 'react-icons/fa'

const FaIcon = ({ name, size }) => {
  const iconName = `Fa${name.slice(0, 1).toUpperCase()}${name.slice(1)}`
  //   console.log('Icons', Icons[iconName])
  const Icon = require('react-icons/fa')[iconName]
  console.log(Icon)

  //   const Icon = Icons[]

  //   return null
  if (!Icon) return null

  return <Icon size={size} />
}

FaIcon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.string,
}

FaIcon.defaultProps = {
  size: null,
}

export default FaIcon
