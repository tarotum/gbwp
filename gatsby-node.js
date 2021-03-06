const path = require("path")
const slash = require("slash")
const sharp = require("sharp")

sharp.cache(false)
sharp.simd(false)

const generatePath = require("./src/utils/generatePath")

exports.onCreateWebpackConfig = ({ getConfig, stage }) => {
  const config = getConfig()

  config.resolve.alias = {
    ...config.resolve.alias,
    "~components": path.resolve(__dirname, "src/components"),
  }

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
      pages: allWordpressPage(sort: { order: ASC, fields: date }) {
        edges {
          node {
            id
            slug
            status
            lang: polylang_current_lang
          }
        }
      }
      posts: allWordpressPost(sort: { order: ASC, fields: date }) {
        edges {
          node {
            id
            slug
            status
            lang: polylang_current_lang
          }
        }
      }
      works: allWordpressWpWork(sort: { fields: acf___order, order: DESC }) {
        edges {
          node {
            id
            slug
            status
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
  const { pages, posts, works } = result.data

  const pageTemplateUK = path.resolve(`./src/templates/page/index.uk.js`)
  const pageTemplateRU = path.resolve(`./src/templates/page/index.ru.js`)
  const pageTemplateEN = path.resolve(`./src/templates/page/index.en.js`)

  const pagesUK = pages.edges.filter(({ node }) => node.lang === "uk")
  pagesUK.forEach(({ node }) => {
    const nodePath = generatePath(node.lang, node.slug)
    createPage({
      path: nodePath,
      component: slash(pageTemplateUK),
      context: {
        id: node.id,
      },
    })
  })

  const pagesRU = pages.edges.filter(({ node }) => node.lang === "ru")
  pagesRU.forEach(({ node }) => {
    const nodePath = generatePath(node.lang, node.slug)
    createPage({
      path: nodePath,
      component: slash(pageTemplateRU),
      context: {
        id: node.id,
      },
    })
  })

  const pagesEN = pages.edges.filter(({ node }) => node.lang === "en")
  pagesEN.forEach(({ node }) => {
    const nodePath = generatePath(node.lang, node.slug)
    createPage({
      path: nodePath,
      component: slash(pageTemplateEN),
      context: {
        id: node.id,
      },
    })
  })

  const postTemplate = path.resolve(`./src/templates/post.js`)
  // We want to create a detailed page for each
  // post node. We'll just use the WordPress Slug for the slug.
  // The Post ID is prefixed with 'POST_'

  posts.edges.forEach(edge => {
    const nodePath = generatePath(edge.node.lang, edge.node.slug)
    createPage({
      path: nodePath,
      component: slash(postTemplate),
      context: {
        id: edge.node.id,
      },
    })
  })

  const workUKTemplate = path.resolve(`./src/templates/work/work.uk.js`)
  const worksUK = works.edges.filter(({ node }) => node.lang === "uk")
  worksUK.forEach(({ node }, index) => {
    const nodePath = generatePath(node.lang, node.slug, "works")
    createPage({
      path: nodePath,
      component: slash(workUKTemplate),
      context: {
        id: node.id,
        prev: index === 0 ? null : worksUK[index - 1].node,
        next: index === worksUK.length - 1 ? null : worksUK[index + 1].node,
      },
    })
  })
  const workRUTemplate = path.resolve(`./src/templates/work/work.ru.js`)
  const worksRU = works.edges.filter(({ node }) => node.lang === "ru")
  worksRU.forEach(({ node }, index) => {
    const nodePath = generatePath(node.lang, node.slug, "works")
    createPage({
      path: nodePath,
      component: slash(workRUTemplate),
      context: {
        id: node.id,
        prev: index === 0 ? null : worksRU[index - 1].node,
        next: index === worksRU.length - 1 ? null : worksRU[index + 1].node,
      },
    })
  })
  const workENTemplate = path.resolve(`./src/templates/work/work.en.js`)
  const worksEN = works.edges.filter(({ node }) => node.lang === "en")
  worksEN.forEach(({ node }, index) => {
    const nodePath = generatePath(node.lang, node.slug, "works")
    createPage({
      path: nodePath,
      component: slash(workENTemplate),
      context: {
        id: node.id,
        prev: index === 0 ? null : worksEN[index - 1].node,
        next: index === worksEN.length - 1 ? null : worksEN[index + 1].node,
      },
    })
  })
}
