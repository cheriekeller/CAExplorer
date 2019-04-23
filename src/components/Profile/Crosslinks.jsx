import React from 'react'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'

import Icon from 'components/elements/Icon'
import { Box, Flex } from 'components/Grid'
import { Link } from 'components/Link'
import styled, { themeGet } from 'util/style'

const List = styled(Flex).attrs({ flexWrap: 'wrap' })``

const ListItem = styled(Box).attrs({
  width: [1, 0.3],
  minWidth: '14em',
  m: 2,
  flex: '0 1 14em',
})`
  line-height: 1.2;
  padding: 0.5em;
  background-color: ${themeGet('colors.grey.100')};
  min-height: 3em;
  border-radius: 0.5em;

  a {
    color: ${themeGet('colors.primary.800')};
  }
`

const StyledIcon = styled(Icon).attrs({
  size: '2em',
})`
  margin-right: 0.5em;
`

const Crosslinks = ({ species, habitat, header }) => {
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
        speciesID === species || habitatID === habitat
    )
    .map(({ node }) => node)

  if (!targetLinks) return null

  const targetIDs = new Set(
    targetLinks.map(({ speciesID, habitatID }) =>
      species !== null ? habitatID : speciesID
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
    .sort((a, b) => (a.name < b.name ? -1 : 1))

  if (!profiles) return null

  return (
    <>
      {header && profiles.length ? header : null}
      <List>
        {profiles.map(({ path, icon, name }) => (
          <ListItem key={path}>
            <Link to={path}>
              <Flex alignItems="center">
                <StyledIcon name={icon} />
                {name}
              </Flex>
            </Link>
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
