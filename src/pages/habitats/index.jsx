import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Set } from 'immutable'
import Img from 'gatsby-image'

import { Link } from 'components/Link'
import Layout from 'components/layout/Default'
import SEO from 'components/SEO'
import { ImageCredits } from 'components/Image'
import { Flex, Box } from 'components/Grid'
import Icon from 'components/elements/Icon'
import Donut from 'components/charts/Donut'
import styled, { themeGet } from 'util/style'
import { toggleSetItem } from 'util/set'

import { VULNERABILITY, VULNERABILITY_COLORS } from '../../../config/constants'

const ecosystems = [
  'Terrestrial',
  'Coastal',
  'Freshwater',
  'Marine & Estuarine',
]

const itemSort = (
  { vulnerabilityLevel: leftLevel, name: leftName, group: leftGroup },
  { vulnerabilityLevel: rightLevel, name: rightName, group: rightGroup }
) => {
  if (leftLevel === rightLevel) {
    if (leftGroup === rightGroup) {
      return leftName > rightName ? 1 : -1
    }
    return leftGroup > rightGroup ? 1 : -1
  }
  return leftLevel < rightLevel ? 1 : -1
}

const Spacer = styled.div`
  width: 1rem;
  flex-shrink: 0;
`

const StyledDonut = styled(Donut)`
  margin-top: 1rem;
  cursor: pointer;
`

const Header = styled.h3`
  margin-top: 3rem;
`

const NoItemsBlock = styled.h4`
  margin: 2rem 0;
  text-align: center;
  color: ${themeGet('colors.grey.600')};
`

const InlineIcon = styled(Icon)`
  margin-right: 0.25em;
`

const ListItemWrapper = styled(Box).attrs({
  width: [1, 0.3],
  minWidth: '14em',
  // p: 3,
  m: 2,
  flex: '0 1 14em',
})``

const ListItem = ({
  icon,
  habitat,
  conservationAsset,
  ecosystem,
  path,
  vulnerabilityLevel,
}) => (
  <ListItemWrapper>
    <Flex>
      <InlineIcon
        name={icon}
        size="1.5rem"
        color={VULNERABILITY_COLORS[vulnerabilityLevel]}
        borderColor={VULNERABILITY_COLORS[vulnerabilityLevel]}
      />
      <div>
        <Link to={path}>{habitat || conservationAsset || ecosystem}</Link>
      </div>
    </Flex>
  </ListItemWrapper>
)

ListItem.propTypes = {
  icon: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  vulnerabilityLevel: PropTypes.number.isRequired,
  habitat: PropTypes.string,
  conservationAsset: PropTypes.string,
  ecosystem: PropTypes.string,
}

ListItem.defaultProps = {
  habitat: null,
  conservationAsset: null,
  ecosystem: null,
}

const IndexPage = ({
  data: {
    allJson: { edges },
    photo,
  },
}) => {
  const [selectedLevels, setLevel] = useState(Set())
  const [selectedEcosystems, setEcosystems] = useState(Set())

  const handleLevelClick = level => {
    setLevel(toggleSetItem(selectedLevels, level))
  }

  const handleEcosystemClick = level => {
    setEcosystems(toggleSetItem(selectedEcosystems, level))
  }

  const items = edges
    // .filter(
    //   ({ node: { habitat, conservationAsset, vulnerability } }) =>
    //     habitat || (conservationAsset && vulnerability !== null)
    // )
    .map(({ node: item }) => ({
      // take the highest vulnerability assigned to each species
      vulnerabilityLevel: (item.vulnerability || [0]).slice(-1)[0],
      ...item,
    }))

  // sort in descending order from highest to lowest vulnerability
  const levels = Set(items.map(({ vulnerabilityLevel }) => vulnerabilityLevel))
    .toJS()
    .sort()
    .reverse()

  // apply filters and regenerate counts
  const ecoGroups = {}
  const vulnerabilityGroups = {}
  ecosystems.forEach(e => {
    ecoGroups[e] = 0
  })
  levels.forEach(l => {
    vulnerabilityGroups[l] = 0
  })

  const filteredItems = items
    .filter(({ ecosystem, vulnerabilityLevel }) => {
      const hasLevel =
        selectedLevels.size > 0 ? selectedLevels.has(vulnerabilityLevel) : true
      const hasEco =
        selectedEcosystems.size > 0 ? selectedEcosystems.has(ecosystem) : true

      // to mimic crossfilter effect, only filter according to the OTHER criterion
      if (hasLevel) {
        ecoGroups[ecosystem] += 1
      }
      if (hasEco) {
        vulnerabilityGroups[vulnerabilityLevel] += 1
      }

      return hasLevel && hasEco
    })
    .sort(itemSort)

  return (
    <Layout>
      <SEO title="Habitats" />
      <h1>Climate Impacts and Adaptation Strategies for Florida Habitats</h1>

      <Img fluid={photo.childImageSharp.fluid} />
      <ImageCredits>
        Photo:&nbsp;
        <a
          href="https://www.flickr.com/photos/bigcypressnps/30610230073/"
          target="_blank"
          rel="noopener noreferrer"
        >
          NPS.
        </a>
      </ImageCredits>

      <p>
        <b>
          This tool includes profiles for 31 habitats, grouped into 15
          conservation assets.
        </b>
        <br />
        <br />
        Conservation Assets were identified by the Peninsular Florida Landscape
        Conservation Cooperative (PFLCC) as the set of biological, ecological,
        and cultural features most important for Florida’s Landscape. They
        represent the most significant resources, embody key landscape
        components, and reflect the mission, vision, common interests, and
        values of the PFLCC partners.
      </p>

      <Header>Select habitats based on ecosystem:</Header>
      <Flex flexWrap="wrap">
        {ecosystems.map((ecosystem, i) => {
          const count = ecoGroups[ecosystem]
          return (
            <React.Fragment key={ecosystem}>
              {i > 0 ? <Spacer /> : null}
              <StyledDonut
                percent={(100 * count) / items.length}
                percentLabel={count}
                label={ecosystem}
                isPercent={false}
                size={150}
                active={selectedEcosystems.has(ecosystem)}
                onClick={() => handleEcosystemClick(ecosystem)}
              />
            </React.Fragment>
          )
        })}
      </Flex>

      <Header>Select habitats based on vulnerability level:</Header>

      <Flex flexWrap="wrap">
        {levels.map((level, i) => {
          const count = vulnerabilityGroups[level]
          return (
            <React.Fragment key={level}>
              {i > 0 ? <Spacer /> : null}

              <StyledDonut
                percent={(100 * count) / items.length}
                percentLabel={count}
                color={VULNERABILITY_COLORS[level]}
                label={VULNERABILITY[level]}
                isPercent={false}
                size={150}
                active={selectedLevels.has(level)}
                onClick={() => handleLevelClick(level)}
              />
            </React.Fragment>
          )
        })}
      </Flex>

      {selectedLevels.size > 0 || selectedEcosystems.size > 0 ? (
        <>
          {filteredItems.length > 0 ? (
            <Flex flexWrap="wrap" style={{ marginTop: '2rem' }}>
              {filteredItems.map(item => (
                <ListItem key={item.id} {...item} />
              ))}
            </Flex>
          ) : (
            <NoItemsBlock>
              No habitats meet your selected criteria.
            </NoItemsBlock>
          )}
        </>
      ) : (
        <NoItemsBlock>
          Click on one or more of the ecosystems or vulnerability levels above
          to select habitats.
        </NoItemsBlock>
      )}
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allJson: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            id: PropTypes.string.isRequired,
            icon: PropTypes.string.isRequired,
            path: PropTypes.string.isRequired,
            vulnerability: PropTypes.arrayOf(PropTypes.number),
            habitat: PropTypes.string,
            conservationAsset: PropTypes.string,
            ecosystem: PropTypes.string,
          }),
        }).isRequired
      ).isRequired,
    }).isRequired,
  }).isRequired,
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allJson(
      filter: { itemType: { eq: "habitats" }, habitatType: { ne: "ecosystem" } }
    ) {
      edges {
        node {
          id
          icon
          path
          habitat
          conservationAsset
          ecosystem
          area
          slr1m
          slr3m
          bounds
          vulnerability
        }
      }
    }
    photo: file(relativePath: { eq: "30610230073_c9acd6553a_k.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 960) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
