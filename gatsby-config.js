const path = require(`path`)

const siteConfig = require(`./siteConfig`)
let ghostConfig

const generateRSSFeed = require(`./src/utils/rss/generateRss`)

try {
  ghostConfig = require(`./.ghost`)
} catch (e) {
  ghostConfig = {
    production: {
      apiUrl: process.env.GHOST_API_URL,
      contentApiKey: process.env.GHOST_CONTENT_API_KEY,
    },
  }
} finally {
  const { apiUrl, contentApiKey } = process.env.NODE_ENV === `development` ? ghostConfig.development : ghostConfig.production

  if (!apiUrl || !contentApiKey || contentApiKey.match(/<key>/)) {
    throw new Error(`GHOST_API_URL and GHOST_CONTENT_API_KEY are required to build. Check the README.`) // eslint-disable-line
  }
}

/**
* This is the place where you can tell Gatsby which plugins to use
* and set them up the way you want.
*
* Further info 👉🏼 https://www.gatsbyjs.org/docs/gatsby-config/
*
*/
module.exports = {
  siteMetadata: siteConfig,
  plugins: [
    // Use Preact instead of React
    `gatsby-plugin-preact`,
    // Tracking with Ackee
    {
      resolve: "gatsby-plugin-ackee-tracker",
      options: {
        domainId: 'a0e87aec-7ab4-4c38-ae36-856690c0f227',
        server: 'https://analytics.shorttech.de',
        ignoreLocalhost: true,
        detailed: true
      },
    },
    // Animation/Transition plugins
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 0.1,
        once: true,
      }
    },
    `gatsby-plugin-transition-link`,
    // Source from file system
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.join(__dirname, `src`, `pages`),
        name: `pages`,
      },
    },
    // Setup for optimised images
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.join(__dirname, `src`, `images`),
        name: `images`,
      },
    },
    {
      resolve: `gatsby-plugin-ghost-images`,
      options: {
        lookup: [
          {
            type: `GhostAuthor`,
            imgTags: [`cover_image`, `profile_image`],
          },
          {
            type: `GhostTag`,
            imgTags: [`feature_image`],
          },
          {
            type: `GhostPost`,
            imgTags: [`feature_image`],
          },
          {
            type: `GhostPage`,
            imgTags: [`feature_image`],
          },
          {
            type: `GhostSettings`,
            imgTags: [`logo`, `icon`, `cover_image`],
          },
        ],
        exclude: node => (
          node.ghostId === undefined
        ),
        verbose: true,
        disable: false
      },
    }, {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: true,
        stripMetadata: true,
        defaultQuality: 80
      },
    }, {
      resolve: `gatsby-transformer-sharp`,
      options: {
        checkSupportedExtensions: true
      }
    },
    // Source from Ghost instance (<3 styxlab)
    {
      resolve: `jamify-source-ghost`,
      options: {
        ghostConfig: process.env.NODE_ENV === `development`
          ? ghostConfig.development
          : ghostConfig.production,
        cacheResponse: true,
        verbose: siteConfig.verbose,
        severity: siteConfig.severity,
      },
    },
    // Rehype (<3 styxlab)
    {
      resolve: `gatsby-transformer-rehype`,
      options: {
        filter: node => (
          node.internal.type === `GhostPost` ||
          node.internal.type === `GhostPage`
        ),
        plugins: [
          {
            resolve: `gatsby-rehype-ghost-links`
          }, {
            resolve: `gatsby-rehype-inline-images`
          },
        ],
      },
    },
    // Generate webmanifest for PWA
    {
      resolve: `gatsby-plugin-ghost-manifest`,
      options: {
        short_name: siteConfig.shortTitle,
        start_url: `/`,
        background_color: siteConfig.backgroundColor,
        theme_color: siteConfig.themeColor,
        display: `standalone`,
        icon: `static/${siteConfig.siteIcon}`,
        legacy: true,
        query: `
          {
            allGhostSettings {
              edges {
                node {
                  title
                  description
                }
              }
            }
          }
        `,
      },
    },
    // Auto generate RSS feed
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            allGhostSettings {
              edges {
                node {
                  title
                  description
                }
              }
            }
          }
        `,
        feeds: [
          generateRSSFeed(siteConfig),
        ],
      },
    },
    // Generate sitemap
    {
      resolve: `gatsby-plugin-advanced-sitemap`,
      options: {
        query: `
          {
            allGhostPost {
              edges {
                node {
                  id
                  slug
                  updated_at
                  created_at
                  feature_image
                }
              }
            }
            allGhostPage {
              edges {
                node {
                  id
                  slug
                  updated_at
                  created_at
                  feature_image
                }
              }
            }
            allGhostTag {
              edges {
                node {
                  id
                  slug
                  feature_image
                }
              }
            }
            allGhostAuthor {
              edges {
                node {
                  id
                  slug
                  profile_image
                }
              }
            }
          }`,
        mapping: {
          allGhostPost: {
            sitemap: `posts`,
          },
          allGhostTag: {
            sitemap: `tags`,
          },
          allGhostAuthor: {
            sitemap: `authors`,
          },
          allGhostPage: {
            sitemap: `pages`,
          },
        },
        exclude: [
          `/dev-404-page`,
          `/404`,
          `/404.html`,
          `/offline-plugin-app-shell-fallback`,
        ],
        createLinkInHead: true,
        addUncaughtPages: true,
      },
    },
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-force-trailing-slashes`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-sass`
  ],
}
