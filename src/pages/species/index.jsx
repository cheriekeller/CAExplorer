import React from 'react'

// import { Link } from 'components/Link'
import Layout from 'components/layout/Default'
import SEO from 'components/SEO'

const IndexPage = () => (
  <Layout>
    <SEO title="Species" />
    Use the sidebar for now...
    <p>
      This tool includes species profile for 139 species. These species were
      chosen based on:
    </p>
    <ul>
      <li>Federally listed</li>
      <li>State listed</li>
      <li>Species with a State Species Action Plan</li>
      <li>Specie with a State Management Plan</li>
      <li>Species included in the State Imperiled Species Management Plan</li>
      <li>Species with Habitat Models</li>
      <li>Selected additional species with a Vulnerability Assessment score</li>
    </ul>
  </Layout>
)

export default IndexPage
