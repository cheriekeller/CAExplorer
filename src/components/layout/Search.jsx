import React, { useState } from 'react'

import styled, { themeGet } from 'util/style'
import { Link } from 'components/Link'
import { Box } from 'components/Grid'

import { SearchField, useIndex } from 'components/Search'

const SearchWrapper = styled(Box).attrs({
  display: ['none', 'none', 'none', 'unset'],
  width: ['200px', 'auto'],
})`
  position: relative;
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
  max-height: 50vh;
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

const NoResult = styled.li`
  padding: 0.25em 1em;
  margin: 0;
  color: ${themeGet('colors.grey.400')};
  text-align: center;
  font-size: 0.8em;
`

const Search = () => {
  const queryIndex = useIndex()
  const [query, setQuery] = useState('')

  const handleChange = value => {
    setQuery(value)
  }

  const results = query ? queryIndex(query) : []

  return (
    <>
      <SearchWrapper>
        <SearchField value={query} onChange={handleChange} />
        {query && (
          <Results>
            {results && results.length > 0 ? (
              results.map(({ id, path, title }) => (
                <Link key={id} to={path}>
                  <Result>{title}</Result>
                </Link>
              ))
            ) : (
              <NoResult>No pages match your query...</NoResult>
            )}
          </Results>
        )}
      </SearchWrapper>
    </>
  )
}

export default Search
