const axios = require("axios")
const path = require("path")
const i18nConfig = require("./i18n/config.json")
const { createRemoteFileNode } = require(`gatsby-source-filesystem`)
const config = require("./config")
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  createTypes(`
    type SubSite implements Node @dontInfer {
      id: ID!
      title: String!
      description: String!
      icon: File!
      locale: String!
      url: String!
      index: Int!
    }
  `)
}
exports.createResolvers = ({ createResolvers }) => {
  const resolvers = {
    SubSite: {
      icon: {
        resolve: (source, _, context, __) => {
          if (source.icon___NODE) {
            return context.nodeModel.getNodeById({
              id: source.icon___NODE,
            })
          }
        },
      },
    },
  }
  createResolvers(resolvers)
}
exports.sourceNodes = async ({
  actions,
  createContentDigest,
  createNodeId,
  store,
  cache,
}) => {
  const { createNode } = actions
  const sites = config.sites

  const apis = []
  const pinResults = i18nConfig.map(i18n => {
    let name = "How to spend every day"
    let description =
      "Community experiment based on value classification  by Buzzing"
    if (i18n.code.startsWith("zh")) {
      name = "如何度过每一天"
      description = "主动思考我该如何度过每一天，由Buzzing运营"
    }
    let site = "https://d.buzzing.cc/"
    return {
      name,
      lang: i18n.code,
      start_url: "/",
      description,
      site,
      icons: [
        {
          src: "pictrs/image/PuxdcKX8Pa.png",
        },
      ],
    }
  })
  sites.forEach(site => {
    i18nConfig.forEach(i18n => {
      let apiPath = "/manifest.webmanifest"
      if (i18n.code !== "zh") {
        apiPath = `/manifest_${i18n.code}.webmanifest`
      }
      apis.push({
        site: site,
        api: `${site}${apiPath}`,
      })
    })
  })
  const promises = apis.map(api => {
    return axios(api.api)
      .then(result => {
        return {
          ...result.data,
          site: api.site,
        }
      })
      .catch(e => {
        console.error(`api: ${api} error`)
        console.error(e)
        throw e
      })
  })

  let apiResults = await Promise.all(promises)
  let results = pinResults.concat(apiResults)

  for (let i = 0; i < results.length; i++) {
    const data = results[i]
    if (!data.name) {
      console.log("data", data)
    }
    const site = data.site
    const node = {
      index: i,
      id: `${data.site}/${data.lang}`,
      title: data.name,
      description: data.description,
      locale: data.lang,
      url: `${site}${data.start_url}`,
    }
    const iconUrl = `${site}/${data.icons[data.icons.length - 1].src}`
    // create a file node for image URLs
    const remoteFileNode = await createRemoteFileNode({
      url: iconUrl,
      parentNodeId: node.id,
      createNode,
      createNodeId,
      cache,
      store,
    }).catch(e => {
      console.error(`iconUrl: ${site} error`)
      console.error(e)
      throw e
    })
    // if the file was created, attach the new node to the parent node
    if (remoteFileNode) {
      node.icon___NODE = remoteFileNode.id
    }

    createNode({
      ...node,
      parent: null,
      children: [],
      internal: {
        type: `SubSite`,
        contentDigest: createContentDigest(node),
        content: JSON.stringify(node),
        description: `sub site`,
      },
    })
  }
}
