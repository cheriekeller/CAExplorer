import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Link } from 'components/Link'

// TODO: responsive
const SidebarContainer = styled.div`
  width: 250px;
  border-right: 1px solid #aaa;
  padding: 0 1rem;
  header {
    font-weight: bold;
    text-transform: uppercase;
    margin: 0 0 8px 0;
  }
  ul {
    margin: 0 0 16px 0;
    list-style: none;
  }
`

const Sidebar = ({items}) => (
  <SidebarContainer>
    {/* <h3>Sidebar content</h3> */}
    <ul>
      {items.map(({path, label})=> (
      <li key={path}>
        <Link to={path}>{label}</Link>
      </li>  
      ))}
      
    </ul>
  </SidebarContainer>
)

Sidebar.propTypes = {
  items: PropTypes.shape({
    path: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
  }).isRequired
}

export default Sidebar
