const {
  author,
  siteTitle,
  siteShortTitle,
  siteDescription,
  siteIcon,
  siteUrl,
  colors,
  keywords,
  localize,
} = require(`./config`)
let plugins = []
if (process.env.NODE_ENV !== "development") {
  console.log("push source gatsby-source-git")

  plugins.push({
    resolve: `@theowenyoung/gatsby-source-git`,
    options: {
      name: `RedditTop`,
      remote: `https://github.com/itsprivate/ts-new.git`,
      branch: `main`,
      // Only import the docs folder from a codebase.
      patterns: ["none/text.txt"],
    },
  })
}
plugins = plugins.concat([
  `gatsby-plugin-react-helmet`,
  `gatsby-plugin-sitemap`,
  `gatsby-plugin-robots-txt`,
  `gatsby-plugin-styled-components`,
  `gatsby-plugin-sharp`,
  `gatsby-transformer-sharp`,
  // `gatsby-plugin-offline`,
  `gatsby-plugin-netlify`,
  // {
  //   resolve: `gatsby-plugin-gtag`,
  //   options: {
  //     trackingId: `UA-XXXXXXXX-X`,
  //     head: false,
  //     anonymize: true,
  //   },
  // },
  {
    resolve: "gatsby-plugin-crisp-chat",
    options: {
      websiteId: "0dadfe07-d44b-477a-ba38-33253d92011e",
      // enableDuringDevelop: false, // Optional. Disables Crisp Chat during gatsby develop. Defaults to true.
      // defer: true, // Optional. Sets the Crisp loading script to defer instead of async. Defaults to false.
      enableImprovedAccessibility: false, // Optional. Sets aria-label attribute on pop-up icon for screen readers. Defaults to true.
    },
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: siteTitle,
      short_name: siteShortTitle,
      start_url: `/`,
      background_color: colors.lightTheme.background,
      theme_color: colors.lightTheme.primary,
      display: `minimal-ui`,
      icon: siteIcon, // This path is relative to the root of the site.
    },
  },
  {
    resolve: `gatsby-plugin-mdx`,
    options: {
      extensions: [`.mdx`, `.md`],
      gatsbyRemarkPlugins: [
        {
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 1000,
            quality: 80,
          },
        },
      ],
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/content`,
      name: `content`,
    },
  },
  {
    resolve: `gatsby-plugin-eslint`,
    options: {
      test: /\.js$|\.jsx$/,
      exclude: /(node_modules|.cache|public)/,
      stages: [`develop`],
      options: {
        emitWarning: true,
        failOnError: false,
      },
    },
  },
  {
    resolve: `gatsby-theme-i18n`,
    options: {
      defaultLang: `zh`,
      configPath: require.resolve(`./i18n/config.json`),
    },
  },

  {
    resolve: `gatsby-plugin-google-adsense`,
    options: {
      publisherId: `ca-pub-5211209136530011`,
    },
  },
  {
    resolve: `gatsby-plugin-google-gtag`,
    options: {
      // You can add multiple tracking ids and a pageview event will be fired for all of them.
      trackingIds: [
        "G-6Y58K64XXC", // Google Analytics / GA
      ],
    },
  },
])
if (process.env.NODE_ENV !== "development") {
  plugins.push({
    resolve: `gatsby-theme-i18n-react-i18next`,
    options: {
      locales: `.cache/gatsby-source-git/itsprivate/ts-new/RedditTop/i18n/i18next`,
      i18nextOptions: {
        debug: process.env.NODE_ENV === "development" ? true : false,
        ns: ["translation", "translation-tag"],
        fallbackLng: {
          "zh-Hant": ["zh", "en"],
          default: ["en"],
        },
        keySeparator: "__::__",
        nsSeparator: "__::::__",
      },
    },
  })
}
module.exports = {
  siteMetadata: {
    author: author,
    title: siteTitle,
    description: siteDescription,
    siteUrl: siteUrl,
    keywords,
    localize,
  },
  plugins,
}
