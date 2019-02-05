import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/layout/Default'
import SEO from '../components/SEO'
import styled from '../util/style'

const Content = styled.div`
  h2,
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

  hr {
    margin-top: 3rem;
  }

  .float-left {
    float: left;
    margin: 0 1em 1em 0;
  }

  .float-right {
    float: right;
    margin: 0 0 1em 1em;
  }

  .thumbnail-small {
    width: 150px;
  }

  .thumbnail-medium {
    width: 320px;
  }

  .thumbnail-large {
    width: 460px;
  }

  h2,
  h3,
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
    <Content
      className="blog-post-content"
      dangerouslySetInnerHTML={{ __html: html }}
    />
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
