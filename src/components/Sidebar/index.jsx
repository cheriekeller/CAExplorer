import React from 'react'
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

const Sidebar = () => (
  <SidebarContainer>
    <h3>Sidebar content</h3>
    <ul>
      <li>
        <Link to="/test">Page 1</Link>
      </li>
    </ul>
  </SidebarContainer>
)

export default Sidebar
