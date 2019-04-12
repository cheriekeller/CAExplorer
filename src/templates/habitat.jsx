import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Box } from 'rebass'

import { Flex } from 'components/Grid'
import { Link, OutboundLink } from 'components/Link'
import Layout from 'components/layout/Default'
import SEO from 'components/SEO'
import { formatNumber } from 'util/format'
import ContentHeader from 'components/elements/ContentHeader'
import {
  DONUTSIZE,
  DONUTWIDTH,
  Photo,
  Map,
  PhotoCaption,
  Section,
  Subsection,
  SectionHeader,
  SubHeader,
  DonutWrapper,
} from 'components/Profile'
import Crosslinks from 'components/Profile/Crosslinks'
import Vulnerability from 'components/charts/Vulnerability'
import Donut from 'components/charts/Donut'
import styled from 'util/style'
import { splitLines } from 'util/dom'
import {
  ADAPTATION_STRATEGIES,
  ADAPTATION_STRATEGY_LABELS,
  HABITAT_VULNERABILITY_CRITERIA,
  VULNERABILITY_LEVELS,
} from '../../config/constants'

const SpeciesWrapper = styled.div`
  margin-top: 3rem;
`

const HabitatTemplate = ({
  data: {
    json: {
      id,
      path,
      habitatType,
      conservationAsset,
      habitat,
      components,
      vulnerability,
      vulnerabilityNotes,
      icon,
      photoCredit,
      description,
      impacts,
      sppImpacts,
      threats,
      strategies,
      link,
      area,
      protectedArea,
      slr1m,
      slr3m,
      bounds,
    },
    photo,
    map,
  },
}) => {
  const name = habitatType === 'habitat' ? habitat : conservationAsset
  const subtitle =
    habitatType === 'habitat' ? `within ${conservationAsset}` : null

  /* eslint-disable prefer-const */
  let [minVulnerability, maxVulnerability] = vulnerability || [0]
  maxVulnerability = maxVulnerability || minVulnerability

  return (
    <Layout>
      <SEO title={name} />

      <ContentHeader icon={icon} title={name} subtitle={subtitle} />
      <Flex flexWrap="wrap">
        {photo ? (
          <Box
            width={['100%', '100%', '100%', '60%']}
            mr={[0, 0, 0, '1rem']}
            mb={['3rem', '3rem', '3rem', 0]}
          >
            <Photo sizes={photo.childImageSharp.sizes} />
            {photoCredit ? (
              <PhotoCaption>Photo: {photoCredit}</PhotoCaption>
            ) : null}
          </Box>
        ) : null}

        <Box width={['100%', '100%', '66%', photo ? '30%' : 400]}>
          <SubHeader>Vulnerability: </SubHeader>

          {maxVulnerability ? (
            <>
              <Vulnerability
                vulnerability={vulnerability}
                levels={VULNERABILITY_LEVELS.slice(1)}
              />
            </>
          ) : (
            <p>This {habitatType} was not assessed for vulnerability</p>
          )}
        </Box>
      </Flex>

      <Section>
        <SectionHeader>General Information</SectionHeader>
        <p>
          {splitLines(description)}

          {components && (
            <>
              <br />
              {components}
            </>
          )}
        </p>

        <SpeciesWrapper>
          <Crosslinks habitat={id} header={<SubHeader>Species:</SubHeader>} />
        </SpeciesWrapper>
      </Section>

      {area && bounds && (
        <Section>
          <SectionHeader>Area</SectionHeader>
          <ul>
            <li>{formatNumber(area)} hectares within Florida (modeled)</li>
            {protectedArea ? (
              <li>
                {formatNumber(protectedArea)} hectares (
                {formatNumber((100 * protectedArea) / area)}%) is located on
                public lands
              </li>
            ) : (
              <li>No area occurs on public lands</li>
            )}
          </ul>

          <SubHeader style={{ margin: '2rem 0 1rem' }}>
            Area impacted by up to 3 meters sea level rise:
          </SubHeader>

          <Flex flexWrap="wrap">
            <Box
              width={['100%', '100%', '100%', '60%']}
              mr="1rem"
              mb={['1rem', '1rem', '1rem', 0]}
            >
              <Link to={`${path}/map`}>
                <Map sizes={map.childImageSharp.sizes} />
                <div>Explore interactive map</div>
              </Link>
            </Box>
            <Box width={['100%', '100%', '100%', 200]}>
              <DonutWrapper justifyContent="space-evenly" flexWrap="wrap">
                <Donut
                  percent={(100 * slr1m) / area}
                  color="#0D47A1"
                  label="1 meter"
                  donutWidth={DONUTWIDTH}
                  size={DONUTSIZE}
                />
                <Donut
                  percent={(100 * slr3m) / area}
                  color="#90CAF9"
                  label="3 meters"
                  donutWidth={DONUTWIDTH}
                  size={DONUTSIZE}
                />
                <Donut
                  percent={100 - (100 * slr3m) / area}
                  color="#388E3C"
                  label="not impacted"
                  donutWidth={DONUTWIDTH}
                  size={DONUTSIZE}
                />
              </DonutWrapper>
            </Box>
          </Flex>
        </Section>
      )}

      {impacts && (
        <Section>
          <SectionHeader>Climate Impacts</SectionHeader>
          <p>
            {splitLines(impacts)}
            <br />
            <Link to="/impacts/habitats">
              More information about general climate impacts to habitats in
              Florida.
            </Link>
          </p>
        </Section>
      )}

      {sppImpacts && (
        <Section>
          <SectionHeader>Climate Impacts to Species</SectionHeader>
          <p>
            {splitLines(sppImpacts)}
            <br />
            <Link to="/impacts/species">
              More information about general climate impacts to species in
              Florida.
            </Link>
          </p>
        </Section>
      )}

      <Section>
        <SectionHeader>Other Non-climate Threats</SectionHeader>
        {threats && threats.length > 0 ? (
          <ul>
            {threats.map(threat => (
              <li key={threat}>{threat}</li>
            ))}
          </ul>
        ) : (
          <p>
            Non-climate threats have not been assessed for this {habitatType}.
          </p>
        )}

        <p>
          <Link to="/impacts/existing-stressors">
            More information about climate change interactions with existing
            threats and stressors in Florida.
          </Link>
        </p>
      </Section>

      {maxVulnerability && (
        <Section>
          <SectionHeader>Vulnerability Assessment Details</SectionHeader>
          <p>
            This {habitatType} was assessed as part of the{' '}
            <Link to="/impacts/vulnerability/sivva/natcom">
              Standardized Index of Vulnerability and Value Assessment - Natural
              Communities
            </Link>{' '}
            (SIVVA).
            <br />
            <br />
            This {habitatType}{' '}
            {HABITAT_VULNERABILITY_CRITERIA[maxVulnerability]}
            <br />
            <br />
            <Link to="/impacts/vulnerability/sivva/natcom">
              Read more information about SIVVA natural communities.
            </Link>
            {vulnerabilityNotes && (
              <>
                <br />
                <br />
                This {habitatType} was{' '}
                {`${vulnerabilityNotes[0].toLowerCase()}${vulnerabilityNotes.slice(
                  1
                )}`}
                .
              </>
            )}
          </p>
        </Section>
      )}

      {strategies ? (
        <Section>
          <SectionHeader>Adaptation Strategies</SectionHeader>
          <div>
            {ADAPTATION_STRATEGIES.filter(group => strategies[group]).map(
              group => (
                <Subsection key={group}>
                  <SubHeader>{ADAPTATION_STRATEGY_LABELS[group]}</SubHeader>
                  <ul>
                    {strategies[group].map((strategy, i) => (
                      /* eslint-disable react/no-array-index-key */
                      <li key={i}>{strategy}</li>
                    ))}
                  </ul>
                </Subsection>
              )
            )}
          </div>

          <p>
            <Link to="/strategies">
              More information about adaptation strategies.
            </Link>
          </p>
        </Section>
      ) : null}

      {link && (
        <Section>
          <SectionHeader>Additional Resources</SectionHeader>
          <ul>
            <li>
              <OutboundLink from={path} to={link} target="_blank">
                Florida Natural Areas Inventory Profile
              </OutboundLink>
            </li>
          </ul>
        </Section>
      )}
    </Layout>
  )
}

HabitatTemplate.propTypes = {
  data: PropTypes.shape({
    json: PropTypes.object.isRequired,
  }).isRequired,
}

export const pageQuery = graphql`
  query($id: String!, $imgSrc: String!, $mapImgSrc: String!) {
    json(id: { eq: $id }) {
      id
      path
      icon
      habitatType
      conservationAsset
      habitat
      components
      vulnerability
      vulnerabilityNotes
      photoCredit
      photoUrl
      description
      impacts
      sppImpacts
      threats
      strategies {
        education
        monitoring
        planning
        policy
        protection
        restoration
      }
      link
      area
      protectedArea
      slr1m
      slr3m
      bounds
    }
    photo: file(relativePath: { eq: $imgSrc }) {
      childImageSharp {
        sizes(maxWidth: 960) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
    map: file(relativePath: { eq: $mapImgSrc }) {
      childImageSharp {
        sizes(maxWidth: 960) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
  }
`

export default HabitatTemplate
