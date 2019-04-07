import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Link } from 'components/Link'
import Layout from 'components/layout/Default'
import SEO from 'components/SEO'
import ContentHeader from 'components/elements/ContentHeader'
import { Photo, PhotoCaption, Section, SectionHeader } from 'components/Profile'
import { splitLines } from 'util/dom'

const EcosystemTemplate = ({
  data: {
    json: { ecosystem, icon, photoCredit, description, impacts, sppImpacts },
    photo,
  },
}) => {
  const name = `${ecosystem} Ecosystem`
  return (
    <Layout>
      <SEO title={name} />
      <ContentHeader icon={icon} title={name} />
      <Photo sizes={photo.childImageSharp.sizes} />
      {photoCredit ? <PhotoCaption>Photo: {photoCredit}</PhotoCaption> : null}

      <Section>
        <p>{splitLines(description)}</p>
      </Section>

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
    </Layout>
  )
}

EcosystemTemplate.propTypes = {
  data: PropTypes.shape({
    json: PropTypes.object.isRequired,
  }).isRequired,
}

export const pageQuery = graphql`
  query($id: String!, $imgSrc: String!) {
    json(id: { eq: $id }) {
      icon
      ecosystem
      photoCredit
      photoUrl
      description
      impacts
      sppImpacts
    }
    photo: file(relativePath: { eq: $imgSrc }) {
      childImageSharp {
        sizes(maxWidth: 960) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
  }
`

export default EcosystemTemplate
