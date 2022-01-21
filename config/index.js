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
    {
      locale: "zh-Hant",
      description: "用中文瀏覽國外社交媒體裡的熱門討論",
      keywords: ["Buzzing", "reddit", "國外社交媒體", "外網熱議"],
    },
    {
      locale: "ja",
      description: "母国語で熱い議論を見る",
      keywords: ["Buzzing", "reddit", "ソーシャルメディア", "母国語"],
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
      nickname: "推特：Buzzing",
    },

    {
      name: "Twitter",
      url: "https://twitter.com/HackerNewsZh",
      nickname: "Hacker News 中文精选",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/AskRedditZh",
      nickname: "问Reddit",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/NewsBotZh",
      nickname: "国外新闻Bot",
    },
    {
      name: "Telegram",
      url: "https://t.me/buzzingcc",
      nickname: "Telegram频道: @Buzzing",
    },
    {
      name: "Telegram",
      url: "https://t.me/joinchat/GVK5UiDwPUAwMjkx",
      nickname: "加入Telegram Buzzing讨论群",
    },
  ],
  sites: [
    "https://hn.buzzing.cc",
    "https://news.buzzing.cc",
    "https://reddit.buzzing.cc",
    "https://ph.buzzing.cc",
    "https://ask.buzzing.cc",
    "https://stocks.buzzing.cc",
    "https://quora.buzzing.cc",
    "https://showhn.buzzing.cc",
    "https://askhn.buzzing.cc",
    "https://sideproject.buzzing.cc",
    "https://dev.buzzing.cc",
    "https://depth.buzzing.cc",
    // "https://100.buzzing.cc",
    // "https://books.buzzing.cc",
    "https://nytimes.buzzing.cc",
    "https://wsj.buzzing.cc",
    "https://economist.buzzing.cc",
    // "https://know.buzzing.cc",
    // "https://data.buzzing.cc",
    // "https://youtube.buzzing.cc",
    "https://crypto.buzzing.cc",
    // "https://changemyview.buzzing.cc",
  ],

  //-- NAVIGATION SETTINGS -----
  navLinks: {
    menu: [
      {
        name: "Subsites",
        url: "#subsites",
      },
      {
        name: "Use Case",
        url: "#usecase",
      },
      {
        name: "Contact",
        url: "#contact",
      },
    ],
    button: {
      name: "Contact",
      url: "#contact",
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
