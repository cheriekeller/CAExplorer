import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import rehypeReact from 'rehype-react'

import Layout from 'components/layout/Default'
import SEO from 'components/SEO'
import Icon from 'components/elements/Icon'
import FaIcon from 'components/elements/FaIcon'
import ContentHeader from 'components/elements/ContentHeader'
import Snippet from 'components/Profile/Snippet'
import styled, { themeGet } from 'util/style'

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

    &.divider {
      margin-bottom: 2rem;
      height: 4px;
      background: ${themeGet('colors.primary.900')};
    }
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

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    icon: Icon,
    'content-header': ContentHeader,
    'fa-icon': FaIcon,
    'profile-snippet': Snippet,
  },
}).Compiler

const Template = ({
  data: {
    markdownRemark: {
      htmlAst,
      frontmatter: { title },
    },
  },
}) => (
  <Layout>
    <SEO title={title} />
    <Content>{renderAst(htmlAst)}</Content>
  </Layout>
)

Template.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      htmlAst: PropTypes.object.isRequired,
    }).isRequired,
  }).isRequired,
}

export default Template

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      htmlAst
      frontmatter {
        path
        title
      }
    }
  }
`
