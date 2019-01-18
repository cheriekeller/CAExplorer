import React from 'react'

import { Link } from 'components/Link'
import Layout from 'components/layout/Default'
import SEO from 'components/SEO'

const IndexPage = () => (
  <Layout>
    <SEO title="Background" />
    <h1>Get Started</h1>
    <p>
      Background launch page content TODO
      <br />
      <br />
    </p>

    <h3>For now, some links:</h3>
    <ul>
      <li>
        <Link to="/impacts/howto">How to Use This Tool</Link>
      </li>
      <li>
        <Link to="/impacts/climate101">Climate 101</Link>
      </li>
      <li>
        <Link to="/impacts/florida">Florida&apos;s Climate and Impacts</Link>
      </li>
    </ul>
  </Layout>
)

export default IndexPage
