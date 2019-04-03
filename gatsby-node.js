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
    const elementsTemplate = path.resolve(`src/templates/elements.jsx`)
    const mapTemplate = path.resolve(`src/templates/map.jsx`)
    const speciesTemplate = path.resolve(`src/templates/species.jsx`)
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
            allJson(filter: { itemType: { ne: null } }) {
              edges {
                node {
                  id
                  path
                  itemType
                  bounds
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
              template = elementsTemplate
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
          ({ node: { id, itemType, path: pagePath, bounds } }) => {
            let profileTemplate = null
            let imgSrc = null
            let mapImgSrc = null

            if (itemType === 'species') {
              profileTemplate = speciesTemplate
              imgSrc = `${pagePath.replace('/species/', '')}.jpg`
              mapImgSrc = imgSrc.replace('.jpg', '_map.png')
            } else {
              // TODO: switch on habitatType
            }

            // create profile pages
            if (profileTemplate !== null) {
              createPage({
                path: `/test${pagePath}/`,
                context: { id, imgSrc, mapImgSrc },
                component: profileTemplate,
              })
            }

            // Create map pages
            if (bounds !== null && bounds !== undefined) {
              createPage({
                path: `${pagePath}/map`,
                context: { id },
                component: mapTemplate,
              })
            }
          }
        )
      })
    )
  })
}
