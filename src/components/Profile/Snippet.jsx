import React from 'react'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'

import { Flex } from 'components/Grid'
import { Link } from 'components/Link'
import styled from 'util/style'

import Thumbnail from './Thumbnail'

const Wrapper = styled(Flex).attrs({})`
  &:not(:first-child) {
    margin-top: 2rem;
  }
`

const StyledThumbnail = styled(Thumbnail)`
  margin-right: 0.5rem;
`

const Header = styled.h4``

/**
 * Retrieve a snippet of a profile with a fixed-size, blur-up image.
 * Due to the way graphql queries work at the moment, for all items up front,
 * then filter out the ones we want.
 *
 * @param {id} - id of profile to retrieve
 */

const Species = ({ id, children }) => {
  console.log('loading spp summary', id)
  const data = useStaticQuery(graphql`
    query ProfileDataQuery {
      allJson(filter: { itemType: { in: ["species", "habitats"] } }) {
        edges {
          node {
            id
            path
            itemType
            habitatType
            commonName
            ecosystem
            conservationAsset
            habitat
          }
        }
      }
    }
  `)

  const filtered = data.allJson.edges.filter(
    ({ node: { id: curID } }) => curID === id
  )

  const {
    path,
    commonName,
    ecosystem,
    conservationAsset,
    habitat,
  } = filtered[0].node

  const name = commonName || habitat || conservationAsset || ecosystem

  return (
    <Wrapper>
      <div>
        <Link to={path}>
          <StyledThumbnail id={id} />
        </Link>
      </div>

      <div>
        <Header>
          <Link to={path}>{name}</Link>
        </Header>

        {children && (
          <p>
            {children} <Link to={path}>Read more...</Link>
          </p>
        )}
      </div>
    </Wrapper>
  )
}

Species.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node,
}

Species.defaultProps = {
  children: null,
}

export default Species
