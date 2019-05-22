import React from 'react'
import PropTypes from 'prop-types'
import { FaReply } from 'react-icons/fa'

import { Text } from 'components/Text'
import { Box, Flex } from 'components/Grid'
import styled, { theme, themeGet } from 'util/style'
import { Link } from 'components/Link'
import Donut from 'components/charts/Donut'
import HelpText from 'components/elements/HelpText'

const DONUTSIZE = 130
const DONUTWIDTH = 20

const Wrapper = styled(Box).attrs({
  width: ['100%', '100%', '12rem', '16rem', '18rem'],
  flex: '0 0 auto',
  height: ['auto', 'auto', '100%'],
})`
  border-right: 1px solid ${themeGet('colors.grey.800')};
`

const InnerWrapper = styled(Flex).attrs({
  flexDirection: 'column',
  flex: '1 1 auto',
})`
  overflow-x: hidden;
  overflow-y: auto;
  height: 100%;
`

const BackLink = styled(Link)`
  font-size: 0.8em;
  svg {
    margin-right: 0.5em;
  }
`

const Header = styled.div`
  background: ${themeGet('colors.grey.200')};
  padding: 0.25rem 0.5rem 0.5rem;
  border-bottom: 1px solid ${themeGet('colors.grey.400')};
  flex-shrink: 0;
  z-index: 1;
`

const Title = styled(Text).attrs({
  as: 'h3',
  mb: 0,
  mt: [0, '0.25rem', '0.5rem'],
})``

const Subtitle = styled.h4`
  margin-bottom: 0;
`

// hide content on mobile, it is redundant with profile page
const Content = styled(Box).attrs({
  p: '1rem',
  display: ['none', 'none', 'unset'],
})`
  overflow-y: auto;
  overflow-x: hidden;
  flex-grow: 1;
  z-index: 0;

  svg {
    flex: 0 0 auto;
    margin-top: 1rem;
  }
`

const VerticalSpacer = styled.div`
  width: 1rem;
`

const Sidebar = ({ name, path, area, slr1m, slr3m }) => {
  const slr1Percent = (100 * slr1m) / area
  const slr3Percent = (100 * slr3m) / area
  const notImpactedPercent = 100 - slr3Percent // by definition, everything impacted by 3m was also impacted at 1m

  return (
    <Wrapper>
      <InnerWrapper>
        <Header>
          <BackLink to={path.replace(/\/map$/g, '')}>
            <Flex alignItems="center">
              <FaReply color={theme.colors.secondary[800]} />
              <div>back to description</div>
            </Flex>
          </BackLink>
          <Title>{name}</Title>
        </Header>

        <Content>
          <Subtitle>Amount of habitat impacted by sea level rise:</Subtitle>

          <Flex alignItems="center" flexWrap="wrap" justifyContent="center">
            <Donut
              percent={slr1Percent}
              color="#0D47A1"
              label="1 meter"
              donutWidth={DONUTWIDTH}
              size={DONUTSIZE}
            />
            <VerticalSpacer />
            <Donut
              percent={slr3Percent}
              color="#90CAF9"
              label="3 meters"
              donutWidth={DONUTWIDTH}
              size={DONUTSIZE}
            />
          </Flex>

          <Subtitle style={{ marginTop: '2rem' }}>
            Amount of habitat not impacted by up to 3 meters sea level rise:
          </Subtitle>
          <Flex justifyContent="center">
            <Donut
              percent={notImpactedPercent}
              color="#388E3C"
              label="not impacted"
              offset={slr3Percent}
              size={175}
            />
          </Flex>
          <HelpText style={{ marginTop: '2rem' }}>
            Sea level rise projections were produced by the University of
            Florida Geoplan Center.
          </HelpText>
        </Content>
      </InnerWrapper>
    </Wrapper>
  )
}

Sidebar.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  area: PropTypes.number.isRequired,
  slr1m: PropTypes.number,
  slr3m: PropTypes.number,
}

Sidebar.defaultProps = {
  slr1m: 0,
  slr3m: 0,
}

export default Sidebar
