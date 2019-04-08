import React from 'react'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'

import { Flex } from 'components/Grid'
import { Link } from 'components/Link'
import styled, { themeGet } from 'util/style'

import Thumbnail from './Thumbnail'

const Wrapper = styled.div`
  padding: 1rem;
  background-color: ${themeGet('colors.grey.200')};
  border-radius: 1rem;
  &:not(:first-child) {
    margin-top: 2rem;
  }
`

const StyledThumbnail = styled(Thumbnail)`
  margin-right: 1rem;
  border-radius: 0.25em;
`

const Header = styled.h3`
  margin-bottom: 0.5em;
`

/**
 * Retrieve a snippet of a profile with a fixed-size, blur-up image.
 * Due to the way graphql queries work at the moment, for all items up front,
 * then filter out the ones we want.
 *
 * @param {id} - id of profile to retrieve
 */

const Species = ({ id, children }) => {
  const data = useStaticQuery(graphql`
    query ProfileDataQuery {
      allJson(filter: { itemType: { in: ["species", "habitats"] } }) {
        edges {
          node {
            id
            path
            icon
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

  const name =
    commonName || habitat || conservationAsset || `${ecosystem} Ecosystems`

  return (
    <Wrapper>
      <Header>
        <Link to={path}>{name}</Link>
      </Header>

      <Flex>
        <div>
          <Link to={path}>
            <StyledThumbnail id={id} />
          </Link>
        </div>

        <div>
          {children && (
            <p>
              {children} <Link to={path}>Read more...</Link>
            </p>
          )}
        </div>
      </Flex>
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
