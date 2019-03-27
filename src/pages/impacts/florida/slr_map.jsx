import React from 'react'

// import Layout from 'components/layout/Map'
import Layout from 'components/layout/Default'
import SEO from 'components/SEO'
import Map from 'components/Map'
import { FLORIDA_BOUNDS } from '../../../../config/constants'

const SLRMap = () => (
  <Layout>
    <SEO title="Sea Level Rise in Florida" />
    <Map bounds={FLORIDA_BOUNDS} />
  </Layout>
)

export default SLRMap
