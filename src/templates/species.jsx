import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Img from 'gatsby-image'
import { Box } from 'rebass'

import { Flex } from 'components/Grid'
import { Link, OutboundLink } from 'components/Link'
import Layout from 'components/layout/Default'
import SEO from 'components/SEO'
import styled, { themeGet } from 'util/style'
import { formatNumber } from 'util/format'
import ContentHeader from 'components/elements/ContentHeader'
import Vulnerability from 'components/charts/Vulnerability'
import Donut from 'components/charts/Donut'
import {
  VULNERABILITY,
  VULNERABILITY_COLORS,
  CONSERVATION_STATUS,
} from '../../config/constants'

const DONUTSIZE = 130
const DONUTWIDTH = 20

const Content = styled.div``

const Section = styled.section`
  padding-top: 2rem;
  margin-top: 2rem;

  &:not(:first-of-type) {
    border-top: 1px solid ${themeGet('colors.grey.200')};
  }
`

const HeaderImage = styled(Img)`
  min-width: 290px;
  flex: 1 0 auto;

  img {
    margin-bottom: 0.5rem;
  }

  @media (min-width: ${themeGet('breakpoints.0')}) {
    flex-grow: 0 !important;
  }
`

const MapImage = styled(Img)`
  min-width: 290px;
  flex: 1 0 auto;

  img {
    margin-bottom: 0.5rem;
  }
`

const PhotoCaption = styled.figcaption`
  font-size: smaller;
  margin-bottom: 3rem;
  text-align: center;
  font-weight: normal;
  margin-bottom: 0;
  font-size: small;
`

const SectionHeader = styled.h2``

const SubHeader = styled.h3`
  margin-bottom: 0.5rem;
`

const MinorHeader = styled.h4``

const OtherVulnerabilityLevel = styled.div`
  margin-left: 2rem;
`

const Template = ({
  data: {
    json: {
      id,
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
    <Content>
      <ContentHeader icon={icon} title={commonName} subtitle={scientificName} />
      <Flex flexWrap="wrap">
        {photo ? (
          <Box
            width={['100%', '100%', '100%', '60%']}
            mr={[0, 0, 0, '1rem']}
            mb={['3rem', '3rem', '3rem', 0]}
          >
            <HeaderImage sizes={photo.childImageSharp.sizes} />
            {photoCredit ? (
              <PhotoCaption>Photo: {photoCredit}</PhotoCaption>
            ) : null}
          </Box>
        ) : null}

        <Box width={['100%', '100%', '66%', photo ? '30%' : 400]}>
          <SubHeader>Overall vulnerability: </SubHeader>

          {vulnerability === [0] ? (
            <p>This species was not assessed for vulnerability</p>
          ) : (
            <Vulnerability vulnerability={vulnerability} />
          )}

          <SubHeader>Conservation status:</SubHeader>
          {conservationStatus
            ? CONSERVATION_STATUS[conservationStatus]
            : 'Not Listed'}
        </Box>
      </Flex>

      <Section>
        <SectionHeader>General Information</SectionHeader>
        <p>{description}</p>
      </Section>
    </Content>

    <Section>
      <SectionHeader>Habitat Requirements</SectionHeader>
      <p>{habitatDescription}</p>

      {area && bounds && (
        <>
          <MinorHeader>Habitat area:</MinorHeader>
          <Flex>
            <Box>
              <a href={`${path}/map`}>
                <MapImage sizes={map.childImageSharp.sizes} />
              </a>
              <PhotoCaption>Basemap: © Mapbox</PhotoCaption>
            </Box>
            <Box>
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

              <MinorHeader>Habitat impacted by up to 3 meters sea level rise:</MinorHeader>
              <Donut
                percent={formatNumber(100 - (100 * slr3m) / area)}
                color="#388E3C"
                label="not impacted"
                donutWidth={DONUTWIDTH}
                size={DONUTSIZE}
              />
              <Donut
                percent={formatNumber((100 * slr1m) / area)}
                color="#0D47A1"
                label="1 meter"
                donutWidth={DONUTWIDTH}
                size={DONUTSIZE}
              />
              <Donut
                percent={formatNumber((100 * slr3m) / area)}
                color="#90CAF9"
                label="3 meters"
                donutWidth={DONUTWIDTH}
                size={DONUTSIZE}
              />
            </Box>
          </Flex>
        </>
      )}
    </Section>

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
      {area && slr3m ? (
        <>
          <MinorHeader style={{ marginTop: '3rem' }}>
            This species is expected to be impacted by sea level rise:
          </MinorHeader>
          <ul>
            <li>
              3 meters of sea level rise: {formatNumber((100 * slr3m) / area)}%
              of area ({formatNumber(slr3m)} ha)
            </li>
            <li>
              1 meter of sea level rise: {formatNumber((100 * slr1m) / area)}%
              of area ({formatNumber(slr1m)} ha)
            </li>
          </ul>
          <p>
            <Link to={`${path}/map`}>Explore sea level rise impacts map.</Link>
          </p>
        </>
      ) : null}
    </Section>

    {vulnerability !== [0] && (
      <Section>
        <SectionHeader>Vulnerability Assessment(s)</SectionHeader>
        <p>
          The overall vulnerability level was based on the following
          assessment(s):
        </p>

        {ccvi && (
          <>
            <MinorHeader>
              <Link to="/impacts/vulnerability/ccvi">
                Climate Change Vulnerability Index
              </Link>
            </MinorHeader>
            <OtherVulnerabilityLevel>
              Vulnerability: <b>{ccvi}</b>
              <br />
              <br />
              {ccviNotes && <p>{ccviNotes}</p>}
            </OtherVulnerabilityLevel>
          </>
        )}

        {gcva && (
          <>
            <MinorHeader>
              <Link to="/impacts/vulnerability/gcva">
                Gulf Coast Vulnerability Assessment
              </Link>
            </MinorHeader>
            <OtherVulnerabilityLevel>
              Vulnerability: <b>{gcva}</b>
              <br />
              <br />
              {gcvaNotes && <p>{gcvaNotes}</p>}
            </OtherVulnerabilityLevel>
          </>
        )}

        {sivva && (
          <>
            <MinorHeader>
              <Link to="/impacts/vulnerability/sivva/species">
                Standardized Index of Vulnerability and Value Assessment
              </Link>
            </MinorHeader>
            <OtherVulnerabilityLevel>
              Vulnerability: <b>{sivva}</b>
              <br />
              <br />
              {sivvaNotes && <p>{sivvaNotes}</p>}
            </OtherVulnerabilityLevel>
          </>
        )}
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

Template.propTypes = {
  data: PropTypes.shape({
    json: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
}

Template.defaultProps = {
  data: {
    json: {
      protectedArea: 0,
      slr1m: 0,
      slr3m: 0,
      vulnerability: [0],
    },
  },
}

export default Template

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

// TODO: try GatsbyImageSharpSizes_tracedSVG
