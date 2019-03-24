import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from 'components/layout/Map'
import SEO from 'components/SEO'
import Map from 'components/Map'
import MapSidebar from 'components/Map/Sidebar'

import styled from '../util/style'

const Content = styled.div``

const Template = ({
  data: {
    json: { id, path, name, area, slr1, slr3, bounds },
  },
}) => (
  <Layout>
    <SEO title={name} />
    <MapSidebar
      id={id}
      path={path}
      name={name}
      area={area}
      slr1={slr1}
      slr3={slr3}
    />
    <Map id={id} bounds={bounds} />
  </Layout>
)

Template.propTypes = {
  data: PropTypes.shape({
    json: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
}

export default Template

export const pageQuery = graphql`
  query($id: String!) {
    json(id: { eq: $id }) {
      id
      path
      name
      area
      slr1
      slr3
      bounds
    }
  }
`
