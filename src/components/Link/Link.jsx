import React from 'react'
import PropTypes from 'prop-types'
import GoogleAnalytics from 'react-ga'
import { Link as GatsbyLink } from 'gatsby'

const Link = ({ to, from, children, state, className }) => (
  <GatsbyLink
    to={to}
    state={state}
    className={className}
    onClick={() => {
      GoogleAnalytics.event({
        category: 'Link',
        action: `[clicked] ${from}`,
        label: to,
      })
    }}
  >
    {children}
  </GatsbyLink>
)

Link.propTypes = {
  to: PropTypes.string.isRequired,
  from: PropTypes.string,
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
}

Link.defaultProps = {
  className: ``,
  from: `unnamed link`,
}

export default Link
