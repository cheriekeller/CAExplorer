/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path')

/**
 * Enable absolute imports with `/src` as root.
 *
 * See: https://github.com/alampros/gatsby-plugin-resolve-src/issues/4
 */
exports.onCreateWebpackConfig = ({ actions, stage, loaders }) => {
  const config = {
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  }

  // when building HTML, window is not defined, so Leaflet causes the build to blow up
  if (stage === 'build-html') {
    config.module = {
      rules: [
        {
          test: /leaflet/,
          use: loaders.null(),
        },
      ],
    }
  }

  actions.setWebpackConfig(config)
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const contentTemplate = path.resolve(`src/templates/content.jsx`)
    const sppTemplate = path.resolve(`src/templates/elements.jsx`)
    const mapTemplate = path.resolve('src/templates/map.jsx')
    let template = null
    // Query for markdown nodes to use in creating pages.
    resolve(
      graphql(
        `
          {
            allMarkdownRemark {
              edges {
                node {
                  frontmatter {
                    path
                  }
                }
              }
            }
            allJson {
              edges {
                node {
                  id
                  itemType
                  path
                  icon
                  name
                  name2
                  group
                  subgroup
                  area
                  bounds
                  slr1
                  slr3
                  vulnerability
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.error(result.errors)
          reject(result.errors)
        }

        // Create pages for each markdown file.
        result.data.allMarkdownRemark.edges.forEach(
          ({
            node: {
              frontmatter: { path: pagePath },
            },
          }) => {
            if (
              pagePath.startsWith('/species') ||
              pagePath.startsWith('/habitats')
            ) {
              template = sppTemplate
            } else {
              template = contentTemplate
            }

            createPage({
              path: pagePath,
              component: template,
            })
          }
        )

        // Create map pages for each species and habitat entry in maps/*.json
        result.data.allJson.edges.forEach(
          ({ node: { id, path: pagePath, bounds } }) => {
            if (bounds === null || bounds === undefined) return

            createPage({
              path: `${pagePath}/map`,
              context: { id },
              component: mapTemplate,
            })
          }
        )
      })
    )
  })
}
