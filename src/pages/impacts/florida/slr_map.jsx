import React from 'react'

import Layout from 'components/layout/Basic'
import SEO from 'components/SEO'
import Map from 'components/Map'
import { Flex } from 'components/Grid'
import Sidebar from 'components/Sidebar'
import styled from 'util/style'
import { FLORIDA_BOUNDS } from '../../../../config/constants'
import sidebarItems from '../../../../config/sidebar'

const Wrapper = styled(Flex).attrs({})`
  flex: 1 1 auto;
  height: 100%;
`

const SLRMap = () => (
    <Layout>
      <SEO title="Sea Level Rise in Florida" />
      <Wrapper>
        <Sidebar items={sidebarItems.impacts} isOpen />
        <Map bounds={FLORIDA_BOUNDS} />
      </Wrapper>
    </Layout>
  )

export default SLRMap
