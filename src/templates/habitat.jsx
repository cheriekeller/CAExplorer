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
  MinorHeader,
  DonutWrapper,
} from 'components/Profile'
import Vulnerability from 'components/charts/Vulnerability'
import Donut from 'components/charts/Donut'
import { splitLines } from 'util/dom'

const HabitatTemplate = ({
  data: {
    json: {
      path,
      habitatType,
      conservationAsset,
      habitat,
      components,
      species,
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

  const strategyGroups = strategies ? Object.keys(strategies).sort() : []

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
          <SubHeader>Overall vulnerability: </SubHeader>

          {vulnerability === null ||
          vulnerability === undefined ||
          vulnerability === [0] ? (
            <p>This habitat was not assessed for vulnerability</p>
          ) : (
            <Vulnerability vulnerability={vulnerability} />
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
              <br />
              {components}
            </>
          )}
        </p>
      </Section>

      {species && (
        <Section>
          <SectionHeader>Example species</SectionHeader>
          <p>{species}</p>
        </Section>
      )}

      {area && bounds && (
        <Section>
          <SectionHeader>Habitat area:</SectionHeader>
          <ul>
            <li>{formatNumber(area)} hectares within Florida (modeled)</li>
            {protectedArea ? (
              <li>
                {formatNumber(protectedArea)} hectares (
                {formatNumber((100 * protectedArea) / area)}%) is located on
                public lands
              </li>
            ) : (
              <li>No habitat is located on public lands</li>
            )}
          </ul>

          <SubHeader style={{ margin: '2rem 0 1rem' }}>
            Habitat impacted by up to 3 meters sea level rise:
          </SubHeader>

          <Flex flexWrap="wrap">
            <Box
              width={['100%', '100%', '100%', '60%']}
              mr="1rem"
              mb={['1rem', '1rem', '1rem', 0]}
            >
              <a href={`${path}/map`}>
                <Map sizes={map.childImageSharp.sizes} />
              </a>
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
            <br />
            <Link to="/impacts/species">
              More information about general climate impacts to species in
              Florida.
            </Link>
          </p>
        </Section>
      )}

      {threats && (
        <Section>
          <SectionHeader>Other Non-climate Threats</SectionHeader>
          <p>
            {/* TODO: convert to list form and split in JSON */}
            {threats}
            <br />
            <br />
            <Link to="/impacts/existing-stressors">
              More information about climate change interactions with existing
              threats and stressors in Florida.
            </Link>
          </p>
        </Section>
      )}

      {vulnerability && vulnerability !== [0] && (
        <Section>
          <SectionHeader>Vulnerability Assessment Details</SectionHeader>
          <p>
            TODO: more info about vulnerability assessment based on spreadsheet
            info
            {vulnerabilityNotes && (
              <>
                <br />
                <br />
                {vulnerabilityNotes}.
              </>
            )}
          </p>
        </Section>
      )}

      {strategyGroups.length > 0 ? (
        <Section>
          <SectionHeader>Adaptation Strategies</SectionHeader>
          <div>
            {strategyGroups.map(group => (
              <Subsection key={group}>
                <MinorHeader>{group}</MinorHeader>
                <ul>
                  {strategies[group].map((strategy, i) => (
                    /* eslint-disable react/no-array-index-key */
                    <li key={i}>{strategy}</li>
                  ))}
                </ul>
              </Subsection>
            ))}
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
      path
      icon
      habitatType
      conservationAsset
      habitat
      components
      species
      vulnerability
      vulnerabilityNotes
      photoCredit
      photoUrl
      description
      impacts
      sppImpacts
      threats
      strategies {
        Monitoring
        Planning
        Policy
        Protection
        Restoration
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
