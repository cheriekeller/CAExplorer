import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import { Box, Container } from 'components/Grid'
// import { Link } from 'components/Link'
import Layout from 'components/layout/Home'
import SEO from 'components/SEO'

import ImageBanner from 'components/ImageBanner'

// https://unsplash.com/photos/bxa3nqFOGmc

const IndexPage = ({ data: { headerImage } }) => (
  <Layout>
    <SEO />
    <ImageBanner headerImage={headerImage.childImageSharp.fluid} />
    <Container>
      <p>In progress...</p>
    </Container>
  </Layout>
)

IndexPage.propTypes = {
  data: PropTypes.shape({
    headerImage: PropTypes.any.isRequired,
  }).isRequired,
}

export default IndexPage

export const pageQuery = graphql`
  query HeaderImageQuery {
    headerImage: file(
      relativePath: { eq: "nik-shuliahin-621547-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
