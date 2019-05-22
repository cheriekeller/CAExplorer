import { graphql, useStaticQuery } from 'gatsby'
import { Index } from 'elasticlunr'

const useIndex = () => {
  const data = useStaticQuery(graphql`
    query SearchIndexQuery {
      siteSearchIndex {
        index
      }
    }
  `)
  const index = Index.load(data.siteSearchIndex.index)

  return query =>
    index
      .search(query, { expand: true, fields: { title: {} } })
      .map(({ ref }) => index.documentStore.getDoc(ref))
}

export { useIndex }
