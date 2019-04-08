import React from 'react'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

/**
 * Retrieve a fixed-size, blur-up image.
 * Due to the way graphql queries work at the moment, we have to do this for all
 * profile images, and then filter out the one we want.
 *
 *
 * @param {id} - id of photo to retrieve from 'src/images/profiles/<id>.jpg
 */
const Thumbnail = ({ id, className }) => {
  const data = useStaticQuery(graphql`
    query ProfileThumbnailQuery {
      allFile(filter: { relativeDirectory: { eq: "profiles" } }) {
        edges {
          node {
            id
            relativePath
            childImageSharp {
              fixed(width: 150, height: 150) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  `)

  const regex = new RegExp(`profiles/${id}.jpg`)
  const filtered = data.allFile.edges.filter(({ node: { relativePath } }) =>
    regex.test(relativePath)
  )
  const img =
    filtered && filtered[0] && filtered[0].node.childImageSharp
      ? filtered[0].node.childImageSharp.fixed
      : null

  return img ? <Img fixed={img} className={className} /> : null
}

Thumbnail.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
}

Thumbnail.defaultProps = {
  className: '',
}

export default Thumbnail
