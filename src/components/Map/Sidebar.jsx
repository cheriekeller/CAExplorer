import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'rebass'
import { FaReply } from 'react-icons/fa'

import { Flex } from 'components/Grid'
import styled, { theme, themeGet } from 'util/style'
import { Link } from 'components/Link'
import Donut from 'components/charts/Donut'
import HelpText from 'components/elements/HelpText'

const DONUTSIZE = 130
const DONUTWIDTH = 20

const SidebarContainer = styled(Text)`
  overflow-y: auto;
  left: 0;
  height: 100%;
  width: 100%;
  padding: 0;
  z-index: 999;
  background: #fff;

  @media screen and (min-width: ${themeGet('breakpoints.0')}) {
    position: fixed;
    border-right: 1px solid #aaa;
  }

  @media screen and (max-width: ${themeGet('breakpoints.0')}) {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  }
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

const Title = styled.h3`
  margin: 0.5rem 0 0;
`

const Subtitle = styled.h4`
  margin-bottom: 0;
`

const Content = styled.div`
  padding: 1rem;
  overflow-y: auto;
  overflow-x: hidden;
  flex-grow: 1;
  z-index: 0;

  svg {
    flex: 0 0 auto;
    margin-top: 1rem;
    // margin-right: 1rem;
  }
`

const VerticalSpacer = styled.div`
  width: 1rem;
`

const Sidebar = ({ name, path, area, slr1, slr3 }) => {
  const slr1Percent = (100 * slr1) / area
  const slr3Percent = (100 * slr3) / area
  const notImpactedPercent = 100 - slr3Percent // by definition, everything impacted by 3m was also impacted at 1m

  return (
    <SidebarContainer
      mt={['2rem', '2.5rem', '2.75rem']}
      width={['100%', '12rem', '16rem', '18rem']}
      isOpen
    >
      <Flex flexDirection="column" style={{ height: '100%' }}>
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
            <br />
            <br />
            TODO: more information and crosslinks to modeled habitat in CPA?
          </HelpText>
        </Content>
      </Flex>
    </SidebarContainer>
  )
}

Sidebar.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  area: PropTypes.number.isRequired,
  slr1: PropTypes.number,
  slr3: PropTypes.number,
}

Sidebar.defaultProps = {
  slr1: 0,
  slr3: 0,
}

export default Sidebar
