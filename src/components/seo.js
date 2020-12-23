import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql, withPrefix } from "gatsby"
import { useLocalization } from "gatsby-theme-i18n"
import urlJoin from "url-join"
import { lightTheme } from "../styles/theme"
import { t } from "../utils"
const SEO = ({ description, meta, title, imageSource, imageAlt }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
            author
            keywords
            localize {
              locale
              keywords
              description
            }
          }
        }
      }
    `
  )
  const { locale } = useLocalization()
  const siteUrl = site.siteMetadata.siteUrl
  const keywords = t(
    "keywords",
    site.siteMetadata.localize,
    site.siteMetadata.keywords || [],
    locale
  )
  const siteDescription = t(
    "description",
    site.siteMetadata.localize,
    site.siteMetadata.description,
    locale
  )
  const metaDescription = description || siteDescription

  const getImagePath = imageURI => {
    if (
      !imageURI.match(
        `(https?|ftp|file)://[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]`
      )
    )
      return urlJoin(siteUrl, withPrefix(imageURI))

    return imageURI
  }
  const image = imageSource ? getImagePath(imageSource) : null
  const imageAltText = imageAlt || metaDescription
  return (
    <Helmet
      htmlAttributes={{
        lang: locale,
      }}
      title={title}
      titleTemplate={`%s`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `keywords`,
          content: keywords.join(`,`),
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:site_name`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `og:image`,
          content: image,
        },
        {
          name: `og:image:alt`,
          content: imageAltText,
        },
        {
          name: `twitter:image`,
          content: image,
        },
        {
          name: `twitter:image:alt`,
          content: imageAltText,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `msapplication-TileColor`,
          content: lightTheme.colors.primary,
        },
        {
          name: `theme-color`,
          content: lightTheme.colors.primary,
        },
      ].concat(meta)}
    />
  )
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  meta: PropTypes.array,
  lang: PropTypes.string,
  imageAlt: PropTypes.string,
  imageSource: PropTypes.string,
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

export default SEO
