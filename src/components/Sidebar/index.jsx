import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Link } from 'components/Link'

const ItemsPropType = PropTypes.arrayOf(
  PropTypes.shape({
    path: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })
)

// TODO: responsive
const SidebarContainer = styled.div`
  position: fixed;
  left: 0;
  height: 100%;
  width: 16rem;
  border-right: 1px solid #aaa;
  padding: 2rem 1rem;
  header {
    font-weight: bold;
    text-transform: uppercase;
    margin: 0 0 8px 0;
  }
  ul {
    margin: 0 0 16px 0;
    list-style: none;
  }

  ul ul {
    margin-top: 0.5em;
    margin-left: 1em;
  }
`

const List = ({ items }) => (
  <ul>
    {items.map(({ path, label, children }) => (
      <li key={path}>
        <Link to={path}>{label}</Link>
        {children && children.length > 0 ? <List items={children} /> : null}
      </li>
    ))}
  </ul>
)

List.propTypes = {
  items: ItemsPropType.isRequired,
}

const Sidebar = ({ items }) => (
  <SidebarContainer>
    <List items={items} />
    {/* <h3>Sidebar content</h3> */}
    {/* <ul>
      {items.map(({ path, label, children }) => (
        <li key={path}>
          <Link to={path}>{label}</Link>
        </li>
      ))}
    </ul> */}
  </SidebarContainer>
)

Sidebar.propTypes = {
  items: ItemsPropType.isRequired,
}

export default Sidebar
