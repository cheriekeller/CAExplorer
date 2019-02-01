import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import { Link } from 'components/Link'
import { Container } from 'components/Grid'
import Layout from 'components/layout/Home'
import SEO from 'components/SEO'
import { FluidImage } from 'components/Image'

const NotFoundPage = ({ data: { headerImage } }) => (
  <Layout>
    <SEO title="404: Not found" />

    <FluidImage
      image={headerImage.childImageSharp.fluid}
      height="80vh"
      credits={{
        url: 'https://unsplash.com/photos/ap3VOzPnliQ',
        author: 'Ray Hennessy',
      }}
    />

    <Container>
      <h1>PAGE NOT FOUND</h1>
      <h2>You appear to be lost...</h2>
      <h3>
        Try going <Link to="/">Home</Link>
      </h3>
    </Container>
  </Layout>
)

NotFoundPage.propTypes = {
  data: PropTypes.shape({
    headerImage: PropTypes.object.isRequired,
  }).isRequired,
}

export const pageQuery = graphql`
  query NotFoundPageQuery {
    headerImage: file(
      relativePath: { eq: "ray-hennessy-261590-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 3200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default NotFoundPage
