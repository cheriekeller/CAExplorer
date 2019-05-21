import PropTypes from 'prop-types'

export const ItemsPropType = PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string, // if absent, indicates that this does not navigate to a page and should only be used for headings for children
      label: PropTypes.string.isRequired,
      children: PropTypes.array,
    })
  )
  