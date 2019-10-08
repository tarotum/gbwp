const path = require(`path`)
const slash = require(`slash`)

const langs = {
  uk: {
    default: true,
    code: "uk",
  },
  en_GB: {
    default: false,
    code: "en",
  },
  ru_RU: {
    default: false,
    code: "ru",
  },
}

const generatePath = (langCode, slug) => {
  const lang = langs[langCode]
  if (!lang || lang.default) return slug
  return `/${lang.code}/${slug}/`
}

exports.onCreateWebpackConfig = ({ getConfig, stage }) => {
  const config = getConfig()
  if (stage.startsWith("develop") && config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias,
      "react-dom": "@hot-loader/react-dom",
    }
  }
}

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
// Will create pages for WordPress pages (route : /{slug})
// Will create pages for WordPress posts (route : /post/{slug})
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // The “graphql” function allows us to run arbitrary
  // queries against the local Gatsby GraphQL schema. Think of
  // it like the site has a built-in database constructed
  // from the fetched data that you can run queries against.
  const result = await graphql(`
    {
      allWordpressPage {
        edges {
          node {
            id
            slug
            status
            template
            lang: polylang_current_lang
          }
        }
      }
      allWordpressPost {
        edges {
          node {
            id
            slug
            status
            template
            format
            lang: polylang_current_lang
          }
        }
      }
    }
  `)

  // Check for any errors
  if (result.errors) {
    throw new Error(result.errors)
  }

  // Access query results via object destructuring
  const { allWordpressPage, allWordpressPost } = result.data

  const pageTemplate = path.resolve(`./src/templates/page.js`)
  // We want to create a detailed page for each
  // page node. We'll just use the WordPress Slug for the slug.
  // The Page ID is prefixed with 'PAGE_'
  allWordpressPage.edges.forEach(edge => {
    // Gatsby uses Redux to manage its internal state.
    // Plugins and sites can use functions like "createPage"
    // to interact with Gatsby.
    const nodePath = generatePath(edge.node.lang, edge.node.slug)
    createPage({
      // Each page is required to have a `path` as well
      // as a template component. The `context` is
      // optional but is often necessary so the template
      // can query data specific to each page.
      path: nodePath,
      component: slash(pageTemplate),
      context: {
        id: edge.node.id,
      },
    })
  })

  const postTemplate = path.resolve(`./src/templates/post.js`)
  // We want to create a detailed page for each
  // post node. We'll just use the WordPress Slug for the slug.
  // The Post ID is prefixed with 'POST_'

  allWordpressPost.edges.forEach(edge => {
    const nodePath = generatePath(edge.node.lang, edge.node.slug)
    createPage({
      path: nodePath,
      component: slash(postTemplate),
      context: {
        id: edge.node.id,
      },
    })
  })
}