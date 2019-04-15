import React, { useState, useEffect } from 'react'
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

const ListItem = ({ icon, commonName: name, path, vulnerabilityLevel }) => (
  <ListItemWrapper>
    <Flex>
      <InlineIcon
        name={icon}
        size="1.5rem"
        color={VULNERABILITY_COLORS[vulnerabilityLevel]}
        borderColor={VULNERABILITY_COLORS[vulnerabilityLevel]}
      />
      <div>
        <Link to={path}>{name}</Link>
      </div>
    </Flex>
  </ListItemWrapper>
)

ListItem.propTypes = {
  icon: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  vulnerabilityLevel: PropTypes.number.isRequired,
  commonName: PropTypes.string.isRequired,
}

const IndexPage = ({
  data: {
    allJson: { edges },
    photo,
  },
}) => {
  const [selectedLevels, setLevel] = useState(Set())
  const [selectedTaxa, setTaxa] = useState(Set())

  const handleLevelClick = level => {
    setLevel(toggleSetItem(selectedLevels, level))
  }

  const handleTaxaClick = group => {
    setTaxa(toggleSetItem(selectedTaxa, group))
  }

  const items = edges.map(({ node: item }) => ({
    // take the highest vulnerability assigned to each species
    vulnerabilityLevel: (item.vulnerability || [0]).slice(-1)[0],
    ...item,
  }))

  const taxa = Set(items.map(({ group }) => group))
    .toJS()
    .sort()

  // sort in descending order from highest to lowest vulnerability
  const levels = Set(items.map(({ vulnerabilityLevel }) => vulnerabilityLevel))
    .toJS()
    .sort()
    .reverse()

  // apply filters and regenerate counts
  const taxaGroups = {}
  const vulnerabilityGroups = {}
  taxa.forEach(t => {
    taxaGroups[t] = 0
  })
  levels.forEach(l => {
    vulnerabilityGroups[l] = 0
  })

  const filteredItems = items
    .filter(({ group, vulnerabilityLevel }) => {
      const hasLevel =
        selectedLevels.size > 0 ? selectedLevels.has(vulnerabilityLevel) : true
      const hasTaxa = selectedTaxa.size > 0 ? selectedTaxa.has(group) : true

      // to mimic crossfilter effect, only filter according to the OTHER criterion
      if (hasLevel) {
        taxaGroups[group] += 1
      }
      if (hasTaxa) {
        vulnerabilityGroups[vulnerabilityLevel] += 1
      }

      return hasLevel && hasTaxa
    })
    .sort(itemSort)

  return (
    <Layout>
      <SEO title="Species" />
      <h1>Climate Impacts and Adaptation Strategies for Florida Species</h1>

      <Img fluid={photo.childImageSharp.fluid} />
      <ImageCredits>
        Photo:&nbsp;
        <a
          href="https://www.flickr.com/photos/bigcypressnps/37945027454/"
          target="_blank"
          rel="noopener noreferrer"
        >
          NPS.
        </a>
      </ImageCredits>

      <p>
        <b>This tool includes species profile for 138 species.</b>
        <br />
        <br /> Species were chosen based if they were federally or state listed,
        had a state management plan (State Species Action Plan, State Management
        Plan, State Imperiled Species Management Plan), had habitat models, or
        had a vulnerability score.
      </p>

      <Header>Select species based on taxonomic group:</Header>
      <Flex flexWrap="wrap">
        {taxa.map((group, i) => {
          const count = taxaGroups[group]
          return (
            <React.Fragment key={group}>
              {i > 0 ? <Spacer /> : null}
              <StyledDonut
                percent={(100 * count) / items.length}
                percentLabel={count}
                label={group}
                isPercent={false}
                size={130}
                active={selectedTaxa.has(group)}
                onClick={() => handleTaxaClick(group)}
              />
            </React.Fragment>
          )
        })}
      </Flex>

      <Header>Select species based on vulnerability level:</Header>
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
                size={130}
                active={selectedLevels.has(level)}
                onClick={() => handleLevelClick(level)}
              />
            </React.Fragment>
          )
        })}
      </Flex>

      {selectedLevels.size > 0 || selectedTaxa.size > 0 ? (
        <>
          {filteredItems.length > 0 ? (
            <Flex flexWrap="wrap" style={{ marginTop: '2rem' }}>
              {filteredItems.map(item => (
                <ListItem key={item.id} {...item} />
              ))}
            </Flex>
          ) : (
            <NoItemsBlock>No species meet your selected criteria.</NoItemsBlock>
          )}
        </>
      ) : (
        <NoItemsBlock>
          Click on one or more of the taxonomic groups or vulnerability levels
          above to select species.
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
            commonName: PropTypes.string.isRequired,
          }),
        }).isRequired
      ).isRequired,
    }).isRequired,
  }).isRequired,
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allJson(filter: { itemType: { eq: "species" } }) {
      edges {
        node {
          id
          icon
          path
          commonName
          scientificName
          group
          subgroup
          area
          slr1m
          slr3m
          bounds
          vulnerability
        }
      }
    }
    photo: file(relativePath: { eq: "37945027454_19f0e45471_k.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 960) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
