import React, { useEffect, useState, useRef } from 'react'
import PropTypes from 'prop-types'
import { Index } from 'elasticlunr'
import { FaSearch } from 'react-icons/fa'

import styled, { themeGet, theme } from 'util/style'
import { Link } from 'components/Link'
import { Box, Flex } from 'components/Grid'

const Wrapper = styled(Box)`
  position: relative;
`

const Container = styled(Flex).attrs({ alignItems: 'center' })`
  background: #fff;
  border-radius: 0.25rem;
  padding: 0.25rem 0.5rem;
`

const Icon = styled(FaSearch).attrs({
  color: theme.colors.grey[400],
})`
  width: 1rem;
  height: 1rem;
  margin-right: 0.5em;
`

const Input = styled.input.attrs({
  type: 'text',
})`
  padding: 0;
  outline: none;
  border: none;
`
const Results = styled.ul`
  list-style: none;
  position: absolute;
  z-index: 20000;
  right: 0;
  background: #fff;
  margin: 4px 0 0 0;
  box-shadow: 2px 2px 6px ${themeGet('colors.grey.800')};
  overflow-y: auto;
  max-height: 300px;
  width: 300px;
  border-radius: 0.25rem;
  border-bottom: 4px solid #fff;
`

const Result = styled.li`
  padding: 0.25em 1em;
  margin: 0;

  &:hover {
    background-color: ${themeGet('colors.grey.100')};
  }

  &:not(:first-child) {
    border-top: 1px solid ${themeGet('colors.grey.200')};
  }
`

const SearchField = ({ rawIndex }) => {
  console.log('render search field')
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const indexRef = useRef(null)

  useEffect(
    () => {
      indexRef.current = Index.load(rawIndex)
      window.index = indexRef.current
    },
    [rawIndex]
  )

  const handleChange = ({ target: { value } }) => {
    const { current: index } = indexRef
    console.log('value', value)
    setQuery(value)
    setResults(
      index.search(value, {}).map(({ ref }) => index.documentStore.getDoc(ref))
    )
    // TODO: debounce?
    // if no results after a while, show a message
  }

  console.log('results', results)

  return (
    <Wrapper ml={['0.25rem', '1rem']} mr={['0.25rem', '0.5rem', '1rem']}>
      <Container
        p={['0.1em 0.25em', '0.25em 0.5em']}
        fontSize={['0.75rem', '0.8rem', '0.9rem']}
      >
        <Icon />
        <Input placeholder="Search..." value={query} onChange={handleChange} />
      </Container>
      {results && results.length > 0 ? (
        <Results>
          {results.map(({ id, path, title }) => (
            <Link to={path}>
              <Result key={id}>{title}</Result>
            </Link>
          ))}
        </Results>
      ) : null}
    </Wrapper>
  )
}

SearchField.propTypes = {
  rawIndex: PropTypes.object.isRequired,
}

export default SearchField
