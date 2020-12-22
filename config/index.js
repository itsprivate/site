module.exports = {
  //-- SITE SETTINGS -----
  locale: "zh",
  author: "@theowenyoung",
  siteTitle: "Buzzing",
  siteShortTitle: "Buzzing", // Used as logo text in header, footer, and splash screen
  siteDescription: "用中文浏览国外社交媒体里的热门讨论",
  siteUrl: "https://www.buzzing.cc",
  keywords: ["Buzzing", "reddit", "国外社交媒体", "外网热议"],
  siteIcon: "content/favicon.png", // Relative to gatsby-config file
  seoTitleSuffix: "Buzzing", // SEO title syntax will be e.g. "Imprint - {seoTitleSuffix}"
  localize: [
    {
      locale: "en",
      description: "See hot discussions in your native language",
      keywords: ["Buzzing", "reddit", "social media", "native language"],
    },
  ],
  // -- THEME SETTINGS -----
  colors: {
    lightTheme: {
      primary: "#000000",
      secondary: "#FFF4D9",
      tertiary: "#F2F2F2",
      text: "#000000",
      subtext: "#555555",
      background: "#FFFFFF",
      card: "#FFFFFF",
      scrollBar: "rgba(0, 0, 0, 0.5)",
      boxShadow: "rgba(0, 0, 0, 0.16)",
      boxShadowHover: "rgba(0, 0, 0, 0.32)",
    },
    darkTheme: {
      primary: "#FAFAFA",
      secondary: "#2A2926",
      tertiary: "#252525",
      text: "rgba(255, 255, 255, 0.87)",
      subtext: "#AAAAAA",
      background: "#121212",
      card: "#1C1C1C",
      scrollBar: "rgba(255, 255, 255, 0.5)",
      boxShadow: "rgba(0, 0, 0, 0.16)",
      boxShadowHover: "rgba(0, 0, 0, 0.32)",
    },
  },
  fonts: {
    primary: "Roboto, Arial, sans-serif",
  },

  //-- ARTICLES SECTION SETTINGS -----
  // You can create your own Medium feed with this rss to json converter: https://rss2json.com/
  // To access your Medium RSS feed, just replace this url with your username: https://medium.com/feed/@{yourname}
  mediumRssFeed:
    "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40konstantinmuenster",
  // rssFeed: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.theguardian.com%2Finternational%2Frss",

  shownArticles: 3,

  //-- SOCIAL MEDIA SETTINGS -----
  // There are icons available for the following platforms:
  // Medium, GitHub, LinkedIn, XING, Behance
  socialMedia: [
    {
      name: "Twitter",
      url: "https://twitter.com/buzzingcc",
    },
  ],
  sites: [
    "https://reddit.buzzing.cc",
    "https://stocks.buzzing.cc",
    "https://ph.buzzing.cc",
    "https://hn.buzzing.cc",
  ],

  //-- NAVIGATION SETTINGS -----
  navLinks: {
    menu: [
      {
        name: "Subsites",
        url: "/#subsites",
      },
      {
        name: "Use Case",
        url: "/#usecase",
      },
      {
        name: "Sources",
        url: "/#sources",
      },
    ],
    button: {
      name: "Contact",
      url: "/#contact",
    },
  },
  footerLinks: [
    {
      name: "Privacy",
      url: "/privacy",
    },
    {
      name: "Terms of Service",
      url: "/terms",
    },
  ],
}
