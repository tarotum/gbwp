const languages = require("./src/utils/languages")
const siteMenu = require("./src/utils/siteMenu.js")
const siteSocialLinks = require("./src/utils/siteSocialLinks.js")
const normalizer = require("./src/utils/normalizeData.js")

module.exports = {
  siteMetadata: {
    title: `VP Production `,
    description: `Мы – команда людей, которые создают музыку, звуки и продюсируют дикторское озвучивание на грани чистого творчества и функциональности.`,
    languages,
    author: `@tarotum`,
    navMenu: siteMenu,
    socialLinks: siteSocialLinks,
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        baseUrl: "gb.vp-production.com",
        debug: true,
        hostingWPCOM: false,
        protocol: "https",
        useACF: false,
        concurrentRequests: 10,
        includedRoutes: [
          "**/client_review",
          "**/work",
          "**/team",
          "**/media",
          "**/pages",
          "**/posts",
          "**/work_category",
          "**/work_platform",
          "**/work_authors",
          "**/work_developer",
          "**/work_genre",
          "**/work_service",
          "**/media",
        ],
        normalizer,
      },
    },
    {
      resolve: "gatsby-plugin-i18n",
      options: {
        langKeyForNull: "any",
        langKeyDefault: languages.defaultLangKey,
        useLangKeyLayout: true,
        prefixDefault: false,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://gmail.us5.list-manage.com/subscribe/post?u=8732b4c1da6a45c651f346f66&amp;id=2d067d850a", // add your MC list endpoint here; see instructions below
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
