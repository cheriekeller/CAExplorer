import React from 'react'

import Layout from 'components/layout/Map'
import SEO from 'components/SEO'
import Map from 'components/Map'
import { Flex } from 'components/Grid'
import styled from 'util/style'
import { FLORIDA_BOUNDS } from '../../../../config/constants'

const Wrapper = styled(Flex)`
  height: 100%;
`

const SLRMap = () => (
  <Layout>
    <SEO title="Sea Level Rise in Florida" />
    <Wrapper>
      <Map bounds={FLORIDA_BOUNDS} />
    </Wrapper>
  </Layout>
)

export default SLRMap
