import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/layout/Default'
import SEO from '../components/SEO'
import styled, { themeGet } from '../util/style'

const Content = styled.div`
  h1 {
    & + h3 {
      color: ${themeGet('colors.primary.300')};
      font-weight: normal;
      font-style: italic;
      margin-top: -1rem;
      margin-bottom: 2rem;
    }
  }

  h2,
  hr {
    margin-top: 2rem;
  }

  h3 {
    margin-bottom: 0.25em;
  }

  p + h3,
  ul + h3,
  p + h4,
  ul + h4 {
    margin-top: 3rem;
  }
  h4 {
    margin-bottom: 0.5em;
  }
  figcaption {
    font-weight: bold;
    font-size: smaller;
    margin-bottom: 3rem;
  }

  #TopSection {
    display: flex;
    flex-wrap: wrap;
    & > div {
      flex-grow: 1;
    }
    .vulnerability {
      margin-bottom: 3rem;
    }
  }

  .gatsby-resp-image-wrapper {
    max-width: inherit !important;
  }

  .gatsby-resp-image-wrapper + figcaption {
    text-align: center;
    font-weight: normal;
    margin-bottom: 0;
    font-size: small;
  }

  .header-photo {
    margin-bottom: 3rem;
    min-width: 290px;
    margin: 0 1rem 1rem 0;
    @media (min-width: ${themeGet('breakpoints.0')}) {
      width: 480px;
      margin: 0 1rem 1rem 0;
      flex-grow: 0 !important;
    }
  }

  .float-left {
    float: left;
    margin: 0 1em 1em 0;
  }

  .vulnerability-header {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5em;

    h3 {
      margin-bottom: 0;
      max-width: 600px;
    }
  }

  .vulnerability {
    padding: 0.5em 1em;
    border-radius: 0.5em;
    width: 300px;
    text-align: center;
    letter-spacing: 0.05em;
    font-weight: bold;
  }

  .vulnerability.vulnerability-not {
    background: ${themeGet('colors.grey.200')};
  }
  .vulnerability.vulnerability-low,
  .vulnerability.vulnerability-slight {
    background: ${themeGet('colors.yellow.200')};
  }
  .vulnerability.vulnerability-moderate {
    background: ${themeGet('colors.yellow.400')};
  }
  .vulnerability.vulnerability-high {
    background: ${themeGet('colors.secondary.500')};
    color: #fff;
    font-weight: normal;
  }
  .vulnerability.vulnerability-extreme {
    background: ${themeGet('colors.secondary.800')};
    color: #fff;
    font-weight: normal;
  }

  .clear {
    clear: both;
  }

  .columns {
    display: flex;
    flex-wrap: wrap;
  }

  .column {
    flex: 1 0 auto;
    min-width: 400px;
    width: 50%;
    &.is-two-thirds {
      width: 66%;
    }
  }
`

const Template = ({
  data: {
    markdownRemark: {
      html,
      frontmatter: { title },
    },
  },
}) => (
  <Layout>
    <SEO title={title} />
    <Content dangerouslySetInnerHTML={{ __html: html }} />
  </Layout>
)

Template.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
}

export default Template

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`
