import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import SearchField from './SearchField'

const Search = () => {
  const data = useStaticQuery(graphql`
    query SearchIndexQuery {
      siteSearchIndex {
        index
      }
    }
  `)

  return <SearchField rawIndex={data.siteSearchIndex.index} />
}

export default Search

// import React from 'react'
// import styled, { themeGet } from 'util/style'

// const Wrapper = styled.div`
//   width: 5rem;
//   height: 1.5rem;
//   background: #eee;
//   border-radius: 3px;
//   color: #aaa;
//   font-size: smaller;
//   padding: 0.25rem;
//   box-sizing: border-box;
//   margin-left: 1rem;

//   @media screen and (max-width: ${themeGet('breakpoints.0')}) {
//     display: none;
//   }
// `

// const index = () => <Wrapper>search...</Wrapper>

// export default index
