import React from 'react'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'

import Icon from 'components/elements/Icon'
import { Box, Flex } from 'components/Grid'
import { Link } from 'components/Link'
import styled from 'util/style'

const List = styled(Flex).attrs({ flexWrap: 'wrap' })``

const ListItem = styled(Box).attrs({
  width: [1, 0.3],
  minWidth: '14em',
  m: 2,
  flex: '0 1 14em',
})``

const StyledIcon = styled(Icon)`
  margin-right: 0.25em;
`

const Crosslinks = ({ species, habitat, header }) => {
  const targetSppID = species !== null ? parseInt(species, 10) : null
  const targetHabitatID = habitat !== null ? parseInt(habitat, 10) : null

  const query = useStaticQuery(graphql`
    query ProfileCrosslinkQuery {
      links: allJson(filter: { path: { eq: null } }) {
        edges {
          node {
            speciesID
            habitatID
          }
        }
      }
      profiles: allJson(
        filter: { path: { ne: null }, habitatType: { ne: "ecosystem" } }
      ) {
        edges {
          node {
            id
            path
            icon
            conservationAsset
            habitat
            commonName
          }
        }
      }
    }
  `)

  const targetLinks = query.links.edges
    .filter(
      ({ node: { speciesID, habitatID } }) =>
        speciesID === targetSppID || habitatID === targetHabitatID
    )
    .map(({ node }) => node)
  if (!targetLinks) return null

  const targetIDs = new Set(
    targetLinks.map(({ speciesID, habitatID }) =>
      species !== null ? habitatID.toString() : speciesID.toString()
    )
  )

  // select target profiles
  const profiles = query.profiles.edges
    .filter(({ node: { id } }) => targetIDs.has(id))
    .map(
      ({
        node: {
          id,
          path,
          icon,
          commonName,
          conservationAsset,
          habitat: habitatName,
        },
      }) => ({
        id,
        path,
        icon,
        name: commonName || habitatName || conservationAsset,
      })
    )

  if (!profiles) return null

  return (
    <>
      {header && profiles.length ? header : null}
      <List>
        {profiles.map(({ path, icon, name }) => (
          <ListItem key={path}>
            <Flex alignItems="center">
              <StyledIcon name={icon} />
              <Link to={path}>{name}</Link>
            </Flex>
          </ListItem>
        ))}
      </List>
    </>
  )
}

Crosslinks.propTypes = {
  species: PropTypes.string,
  habitat: PropTypes.string,
  header: PropTypes.node,
}

Crosslinks.defaultProps = {
  species: null,
  habitat: null,
  header: null,
}

export default Crosslinks
