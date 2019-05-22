import React, { useState } from 'react'

import { Flex, Box, Container } from 'components/Grid'
import { Link } from 'components/Link'
import Layout from 'components/layout/Basic'
import SEO from 'components/SEO'
import styled, { themeGet } from 'util/style'
import { useIndex, SearchField } from 'components/Search'

const Wrapper = styled(Container)`
  height: 100%;
`

const InnerWrapper = styled(Flex).attrs({ flexDirection: 'column' })`
  height: 100%;
`

const SearchFieldWrapper = styled(Box).attrs({
  px: '1rem',
  py: '1rem',
  flex: '0',
})`
  background-color: ${themeGet('colors.grey.200')};
  border-bottom: 1px solid ${themeGet('colors.grey.600')};
`

const Results = styled.div`
  flex: 1 1 auto;
  overflow-y: auto;
`

const Result = styled(Link)`
  display: block;
  padding: 0.5em 1em;
  margin: 0;

  &:not(:first-child) {
    border-top: 1px solid ${themeGet('colors.grey.200')};
  }
`

const NoResult = styled.div`
  padding: 0.25em 1em;
  margin: 0;
  color: ${themeGet('colors.grey.400')};
  text-align: center;
  font-size: 0.8em;
`

const SearchPage = () => {
  const queryIndex = useIndex()
  const [query, setQuery] = useState('')

  const handleChange = value => {
    setQuery(value)
  }

  const results = query ? queryIndex(query) : []

  return (
    <Layout>
      <SEO title="Search the Climate Adaptation Explorer" />

      <Wrapper>
        <InnerWrapper>
          <SearchFieldWrapper>
            <SearchField
              value={query}
              onChange={handleChange}
              placeholder="Search the Climate Adaptation Explorer"
            />
          </SearchFieldWrapper>
          {query && (
            <Results>
              {results && results.length > 0 ? (
                results.map(({ id, path, title }) => (
                  <Result key={id} to={path}>
                    {title}
                  </Result>
                ))
              ) : (
                <NoResult>No pages match your query...</NoResult>
              )}
            </Results>
          )}
        </InnerWrapper>
      </Wrapper>
    </Layout>
  )
}

export default SearchPage
