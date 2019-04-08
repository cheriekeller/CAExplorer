import React from 'react'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import { Flex } from 'components/Grid'
import { Link } from 'components/Link'
import styled, { themeGet } from 'util/style'

const Wrapper = styled(Flex).attrs({
  //   alignItems: 'top',
})`
  &:not(:first-child) {
    margin-top: 2rem;
  }
`

// const StyledImage = styled.div`
//   width: 150px;
//   height: 150px; /* TODO: auto */
//   background: #eee;
// `

// async function getImage(imgPath) {
//   const img = await fixed({
//     file: imgPath,
//     args: { width: 150, height: 150 },
//   })
//   return img
// }

const Species = ({ id, text }) => {
  console.log('loading spp summary', id)
  const data = useStaticQuery(graphql`
    query SpeciesSummaryQuery {
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
      allJson(filter: { itemType: { eq: "species" } }) {
        edges {
          node {
            id
            path
            commonName
          }
        }
      }
    }
  `)

  //   console.log(data.allFile.edges)

  const regex = new RegExp(`profiles/${id}.jpg`)
  const filteredImages = data.allFile.edges.filter(
    ({ node: { relativePath } }) => regex.test(relativePath)
  )
  const img =
    filteredImages && filteredImages[0].node.childImageSharp
      ? filteredImages[0].node.childImageSharp.fixed
      : null

  const filteredJson = data.allJson.edges.filter(
    ({ node: { id: curID } }) => curID === id
  )
  console.log(data.allJson)

  const { path, commonName: name } = filteredJson[0].node

  //   const imgPath = filtered ? filtered[0].node.relativePath : null
  //   console.log(filtered, imgPath)
  //   console.log(require(`images/profiles/${id}.jpg`))

  //   const img = getImage(imgPath)
  //   console.log(img)

  return (
    <Wrapper>
      {img ? <Img fixed={img} /> : null}

      <Link to={path}>{name}</Link>
      {text && (
        <p>
          {text} <Link to={path}>Read more...</Link>
        </p>
      )}
    </Wrapper>
  )
}

Species.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  text: PropTypes.string,
}

Species.defaultProps = {
  text: null,
}

export default Species
