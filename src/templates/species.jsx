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
  flex: 1 0 auto;

  &:after,
  &:before {
    position: absolute;
    opacity: 0;
    transition: all 0.5s;
    -webkit-transition: all 0.5s;
  }

  &:before {
    position: absolute;
    transition: all 0.5s;
    -webkit-transition: all 0.5s;
    content: 'Explore interactive map';
    width: 100%;
    color: #fff;
    z-index: 1;
    top: calc(50% - 1rem);
    left: 0;
    right: 0;
    bottom: 0;
    padding: 4px 10px;
    text-align: center;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
  }
  &:after {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.6);
  }

  &:hover {
    &:before,
    &:after {
      opacity: 1;
    }
  }

  img {
    margin-bottom: 0.5rem;
  }
`

const DonutWrapper = styled(Flex)`
height: 100%;
  @media (min-width: ${themeGet('breakpoints.3')}) {
    
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

const SpeciesTemplate = ({
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

          {vulnerability === null ||
          vulnerability === undefined ||
          vulnerability === [0] ? (
            <p>This species was not assessed for vulnerability</p>
          ) : (
            <Vulnerability vulnerability={vulnerability} />
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
        <p>{description}</p>
      </Section>
    </Content>

    <Section>
      <SectionHeader>Habitat Requirements</SectionHeader>
      <p>{habitatDescription}</p>

      {area && bounds && (
        <>
          <SubHeader>Habitat area:</SubHeader>
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

          
              <MinorHeader>
                Habitat impacted by up to 3 meters sea level rise:
              </MinorHeader>

          <Flex flexWrap="wrap">
            <Box width={['100%', '100%', '100%', '50%']} mr='1rem' mb={['1rem', '1rem', '1rem', 0]}>
              <a href={`${path}/map`}>
                <MapImage sizes={map.childImageSharp.sizes} />
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
    </Section>

    {vulnerability && vulnerability !== [0] && (
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

SpeciesTemplate.propTypes = {
  data: PropTypes.shape({
    json: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
}

SpeciesTemplate.defaultProps = {
  data: {
    json: {
      protectedArea: 0,
      slr1m: 0,
      slr3m: 0,
      vulnerability: null,
    },
  },
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
