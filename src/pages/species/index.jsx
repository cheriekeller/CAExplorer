import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Set } from 'immutable'

import { Link } from 'components/Link'
import Layout from 'components/layout/Default'
import SEO from 'components/SEO'
import { Flex, Box } from 'components/Grid'
import Icon from 'components/elements/Icon'
import Donut from 'components/charts/Donut'
import styled, { themeGet } from 'util/style'

import { VULNERABILITY, VULNERABILITY_COLORS } from '../../../config/constants'

const itemSort = (
  { node: { vulnerabilityLevel: leftLevel, name: leftName, group: leftGroup } },
  {
    node: {
      vulnerabilityLevel: rightLevel,
      name: rightName,
      group: rightGroup,
    },
  }
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

// TODO: make this a vulnerabilty block instead
const ListHeader = styled.h3``

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
    allJson: { edges: items },
  },
}) => {
  const [selectedLevels, setSelected] = useState(Set())

  const handleDonutClick = level => {
    setSelected(
      selectedLevels.has(level)
        ? selectedLevels.remove(level)
        : selectedLevels.add(level)
    )
  }

  // group species by vulnerability
  // take the highest vulnerability assigned to each species
  const grouped = {}
  items.forEach(({ node: item }) => {
    const { vulnerability } = item

    const vulnerabilityLevel = (vulnerability || [0]).slice(-1)[0]
    item.vulnerabilityLevel = vulnerabilityLevel

    if (!grouped[vulnerabilityLevel]) {
      grouped[vulnerabilityLevel] = []
    }
    grouped[vulnerabilityLevel].push(item)
  })

  // sort in descending order
  const levels = Object.keys(grouped)
    .map(k => parseInt(k, 10))
    .sort()
    .reverse()

  const numItems = items.length

  const selectedItems = items
    .filter(({ node: item }) => selectedLevels.has(item.vulnerabilityLevel))
    .sort(itemSort)

  return (
    <Layout>
      <SEO title="Species" />
      <h1>Climate Impacts and Adaptation Strategies for Florida Species</h1>
      <p>
        <b>This tool includes species profile for 138 species.</b>
        <br />
        <br /> Species were chosen based if they were federally or state listed,
        had a state management plan (State Species Action Plan, State Management
        Plan, State Imperiled Species Management Plan), had habitat models, or
        had a vulnerability score.
      </p>

      <h3>Select species based on vulnerability level:</h3>
      <Flex flexWrap="wrap">
        {levels.map((level, i) => {
          const count = grouped[level].length
          return (
            <>
              {i > 0 ? <Spacer /> : null}
              <StyledDonut
                percent={(100 * count) / numItems}
                percentLabel={count}
                color={VULNERABILITY_COLORS[level]}
                label={VULNERABILITY[level]}
                isPercent={false}
                size={150}
                active={selectedLevels.has(level)}
                onClick={() => handleDonutClick(level)}
              />
            </>
          )
        })}
      </Flex>

      {selectedItems.length > 0 ? (
        <Flex flexWrap="wrap" style={{ marginTop: '2rem' }}>
          {selectedItems.map(item => (
            <ListItem {...item.node} />
          ))}
        </Flex>
      ) : (
        <NoItemsBlock>
          Click on one or more of the vulnerability levels above to select
          species.
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
  }
`
