const config = require('./config/meta')

module.exports = {
  siteMetadata: {
    siteUrl: config.siteUrl,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `impacts`,
        path: `${__dirname}/src/pages/impacts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `strategies`,
        path: `${__dirname}/src/pages/strategies`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `species`,
        path: `${__dirname}/src/pages/species`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `habitats`,
        path: `${__dirname}/src/pages/habitats`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/config/data`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              showCaptions: true,
              linkImagesToOriginal: false,
              quality: 95,
              maxWidth: 960,
              withWebp: true,
            },
          },
          {
            resolve: `gatsby-remark-external-links`,
            options: {
              target: `_blank`,
              rel: `noopener noreferrer`,
            },
          },
          {
            resolve: `gatsby-remark-copy-linked-files`,
            options: {
              destinationDir: `media`,
            },
          },
          {
            resolve: `gatsby-remark-component`,
            options: {
              components: [
                `icon`,
                `content-header`,
                `fa-icon`,
                `profile-snippet`,
              ],
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: process.env.NODE_ENV !== `production`,
        fileName: false,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `./config/typography.js`,
      },
    },
    {
      resolve: `gatsby-plugin-lodash`,
      options: {
        disabledFeatures: [`shorthands`, `cloning`, `currying`],
      },
    },
    {
      resolve: `gatsby-transformer-json`,
      options: {
        typeName: `Json`,
      },
    },
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: config.googleAnalyticsId,
        anonymize: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.siteTitle,
        short_name: config.siteTitleShort,
        description: config.siteDescription,
        start_url: `/?utm_source=a2hs`,
        background_color: config.manifest.backgroundColor,
        theme_color: config.manifest.themeColor,
        display: `standalone`,
        icon: `src/images/favicon-32x32.png`,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /icons/,
        },
      },
    },
    {
      resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
      options: {
        // Fields to index
        fields: [`title`, `path`],
        // How to resolve each field`s value for a supported node type
        resolvers: {
          // For any node of type MarkdownRemark, list how to resolve the fields` values
          MarkdownRemark: {
            title: node => node.frontmatter.title,
            path: node => node.frontmatter.path,
          },
          Json: {
            title: ({ commonName, habitat, conservationAsset, ecosystem }) =>
              commonName ||
              habitat ||
              conservationAsset ||
              (ecosystem ? `${ecosystem} Ecosystems` : ''),
            path: node => node.path,
          },
        },
        // only include nodes that have a path defined
        filter: node => !!node.path,
      },
    },
  ],
}
