import React, { useState } from 'react'
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
  { node: { level: leftLevel, name: leftName, group: leftGroup } },
  { node: { level: rightLevel, name: rightName, group: rightGroup } }
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

const DonutWrapper = styled.div`
  margin-top: 1rem;
  cursor: pointer;
  border-bottom: 2px solid
    ${({ active }) =>
      active ? themeGet('colors.secondary.800') : 'transparent'};

  &:hover {
    border-bottom-color: ${({ active }) =>
      active ? themeGet('colors.secondary.800') : themeGet('colors.grey.500')};
  }
`

// TODO: make this a vulnerabilty block instead
const ListHeader = styled.h3``

// const ListItemWrapper = styled(Flex).attrs({
//   alignItems: 'center',
//   flexWrap: 'wrap',
// })`
//   width: 300px;
//   padding: 1rem;
//   flex: 0 0 auto;
// `

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
  level,
}) => (
  <ListItemWrapper>
    <Flex>
      <InlineIcon
        name={icon}
        size="1.5rem"
        color={VULNERABILITY_COLORS[level]}
        borderColor={VULNERABILITY_COLORS[level]}
      />
      <div>
        <Link to={path}>{habitat || conservationAsset || ecosystem}</Link>
      </div>
    </Flex>
  </ListItemWrapper>
)

const IndexPage = ({
  data: {
    allJson: { edges },
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

  const items = edges.filter(({ node: { ca } }) => ca !== null)

  // group species by vulnerability
  // take the highest vulnerability assigned to each species
  const grouped = {}
  items.forEach(({ node: item }) => {
    const { vulnerability } = item

    const level = (vulnerability || [0]).slice(-1)[0]
    item.level = level

    if (!grouped[level]) {
      grouped[level] = 0
    }
    grouped[level] += 1
  })

  // sort in descending order
  const levels = Object.keys(grouped)
    .map(k => parseInt(k, 10))
    .sort()
    .reverse()

  const numItems = items.length

  const selectedItems = items
    .filter(({ node: item }) => selectedLevels.has(item.level))
    .sort(itemSort)

  return (
    <Layout>
      <SEO title="Habitats" />
      <h1>Climate Impacts and Adaptation Strategies for Florida Habitats</h1>
      {/* <p>
        <b>This tool includes species profile for 138 species.</b>
        <br />
        <br /> Species were chosen based if they were federally or state listed,
        had a state management plan (State Species Action Plan, State Management
        Plan, State Imperiled Species Management Plan), had habitat models, or
        had a vulnerability score.
      </p> */}

      <h3>Select habitats based on vulnerability level:</h3>
      <Flex flexWrap="wrap">
        {levels.map((level, i) => {
          const count = grouped[level]
          return (
            <>
              {i > 0 ? <Spacer /> : null}
              <DonutWrapper
                active={selectedLevels.has(level)}
                onClick={() => handleDonutClick(level)}
              >
                <Donut
                  percent={(100 * count) / numItems}
                  percentLabel={count}
                  color={VULNERABILITY_COLORS[level]}
                  label={VULNERABILITY[level]}
                  isPercent={false}
                  size={150}
                />
              </DonutWrapper>
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
          habitats.
        </NoItemsBlock>
      )}
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allJson(filter: { itemType: { eq: "habitats" } }) {
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
  }
`
