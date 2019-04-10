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
import Vulnerability from 'components/charts/Vulnerability'
import Donut from 'components/charts/Donut'
import {
  DONUTSIZE,
  DONUTWIDTH,
  Photo,
  Map,
  PhotoCaption,
  Section,
  SectionHeader,
  SubHeader,
  MinorHeader,
  VulnerabilityList,
  DonutWrapper,
} from 'components/Profile'
import { splitLines } from 'util/dom'
import {
  CONSERVATION_STATUS,
  VULNERABILITY_LEVELS,
} from '../../config/constants'

const SpeciesTemplate = ({
  data: {
    json: {
      path,
      commonName,
      scientificName,
      conservationStatus,
      vulnerability,
      icon,
      photoCredit,
      description,
      habitatDescription,
      impacts,
      strategies,
      ccvi,
      ccviNotes,
      gcva,
      gcvaNotes,
      sivva,
      sivvaNotes,
      resources,
      area,
      protectedArea,
      slr1m,
      slr3m,
      bounds,
    },
    photo,
    map,
  },
}) => (
  <Layout>
    <SEO title={commonName} />

    <ContentHeader icon={icon} title={commonName} subtitle={scientificName} />
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
          <p>This species was not assessed for vulnerability</p>
        ) : (
          <Vulnerability
            vulnerability={vulnerability}
            levels={VULNERABILITY_LEVELS}
          />
        )}

        <SubHeader style={{ marginTop: '3rem' }}>
          Conservation status:
        </SubHeader>
        {conservationStatus
          ? CONSERVATION_STATUS[conservationStatus]
          : 'Not Listed'}
      </Box>
    </Flex>

    <Section>
      <SectionHeader>General Information</SectionHeader>
      <p>{splitLines(description)}</p>
    </Section>

    <Section>
      <SectionHeader>Habitat Requirements</SectionHeader>
      <p>{splitLines(habitatDescription)}</p>
    </Section>

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
              <div>Explore interactive map</div>
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

    <Section>
      <SectionHeader>Climate Impacts</SectionHeader>
      <p>
        {impacts}
        <br />
        <br />
        <Link to="/impacts/species">
          More information about general climate impacts to species in Florida.
        </Link>
      </p>
    </Section>

    {vulnerability && vulnerability !== [0] && (
      <Section>
        <SectionHeader>Vulnerability Assessment(s)</SectionHeader>
        <p>
          The overall vulnerability level was based on the following
          assessment(s):
        </p>

        {ccvi || gcva || sivva ? (
          <VulnerabilityList>
            {ccvi && (
              <li>
                <MinorHeader>
                  <Link to="/impacts/vulnerability/ccvi">
                    Climate Change Vulnerability Index
                  </Link>
                </MinorHeader>
                <div>
                  Vulnerability: <b>{ccvi}</b>
                  <br />
                  <br />
                  {ccviNotes && <p>{ccviNotes}</p>}
                </div>
              </li>
            )}

            {gcva && (
              <li>
                <MinorHeader>
                  <Link to="/impacts/vulnerability/gcva">
                    Gulf Coast Vulnerability Assessment
                  </Link>
                </MinorHeader>
                <div>
                  Vulnerability: <b>{gcva}</b>
                  <br />
                  <br />
                  {gcvaNotes && <p>{gcvaNotes}</p>}
                </div>
              </li>
            )}

            {sivva && (
              <li>
                <MinorHeader>
                  <Link to="/impacts/vulnerability/sivva/species">
                    Standardized Index of Vulnerability and Value Assessment
                  </Link>
                </MinorHeader>
                <div>
                  Vulnerability: <b>{sivva}</b>
                  <br />
                  <br />
                  {sivvaNotes && <p>{sivvaNotes}</p>}
                </div>
              </li>
            )}
          </VulnerabilityList>
        ) : null}
      </Section>
    )}

    {strategies && strategies.All && (
      <Section>
        <SectionHeader>Adaptation Strategies</SectionHeader>
        <ul>
          {strategies.All.map(strategy => (
            <li key={strategy}>{strategy}</li>
          ))}
        </ul>
        <p>
          <Link to="/strategies">
            More information about adaptation strategies.
          </Link>
        </p>
      </Section>
    )}

    {resources && (
      <Section>
        <SectionHeader>Additional Resources</SectionHeader>
        <ul>
          {resources.map(({ label, url }) => (
            <li key={url}>
              <OutboundLink from={path} to={url} target="_blank">
                {label}
              </OutboundLink>
            </li>
          ))}
        </ul>
      </Section>
    )}
  </Layout>
)

SpeciesTemplate.propTypes = {
  data: PropTypes.shape({
    json: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
}

export const pageQuery = graphql`
  query($id: String!, $imgSrc: String!, $mapImgSrc: String!) {
    json(id: { eq: $id }) {
      id
      path
      icon
      commonName
      scientificName
      conservationStatus
      vulnerability
      photoCredit
      photoUrl
      description
      habitatDescription
      impacts
      strategies {
        All
      }
      ccvi
      ccviNotes
      gcva
      gcvaNotes
      sivva
      sivvaNotes
      resources {
        label
        url
      }
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

export default SpeciesTemplate
