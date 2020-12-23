import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import GlobalStateProvider from "../context/provider"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/sections/hero"
import Articles from "../components/sections/articles"
import About from "../components/sections/about"
import Interests from "../components/sections/interests"
import Projects from "../components/sections/projects"
import Contact from "../components/sections/contact"
import { seoTitleSuffix } from "../../config"
import Sites from "../components/sections/sites"
const IndexPage = ({ data, pageContext }) => {
  const { cover: avatar } = data
  const { frontmatter } = data.index.edges[0].node
  const { seoTitle, useSeoTitleSuffix, useSplashScreen } = frontmatter

  const globalState = {
    // if useSplashScreen=false, we skip the intro by setting isIntroDone=true
    isIntroDone: useSplashScreen ? false : true,
    // darkMode is initially disabled, a hook inside the Layout component
    // will check the user's preferences and switch to dark mode if needed
    darkMode: false,
  }
  const avatarImage =
    avatar &&
    avatar.childImageSharp &&
    avatar.childImageSharp.fixed &&
    avatar.childImageSharp.fixed.src
  return (
    <GlobalStateProvider initialState={globalState}>
      <Layout pageContext={pageContext}>
        <SEO
          imageSource={avatarImage}
          imageAlt={seoTitle}
          title={
            useSeoTitleSuffix
              ? `${seoTitle} - ${seoTitleSuffix}`
              : `${seoTitle}`
          }
        />
        <Hero content={data.hero.edges} />
        <Sites content={data.allSubSite.edges}></Sites>
        {/* Articles is populated via Medium RSS Feed fetch */}
        {/* <Articles /> */}
        <About content={data.about.edges} />
        <Interests content={data.interests.edges} />
        {/* <Projects content={data.projects.edges} pageContext={pageContext} /> */}
        <Contact content={data.contact.edges} />
      </Layout>
    </GlobalStateProvider>
  )
}

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
}

export default IndexPage

export const pageQuery = graphql`
  query($locale: String!) {
    cover: file(absolutePath: { regex: "/cover.(jpeg|jpg|gif|png)/" }) {
      childImageSharp {
        fixed(width: 600, height: 314) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    index: allMdx(
      sort: { fields: fields___isDefault, order: ASC }
      filter: {
        fields: { locale: { in: [$locale, "zh"] } }
        fileAbsolutePath: { regex: "/index/index/" }
      }
    ) {
      edges {
        node {
          frontmatter {
            seoTitle
            useSeoTitleSuffix
            useSplashScreen
          }
        }
      }
    }
    hero: allMdx(
      sort: { fields: fields___isDefault, order: ASC }
      filter: {
        fields: { locale: { in: [$locale, "zh"] } }
        fileAbsolutePath: { regex: "/index/hero/" }
      }
    ) {
      edges {
        node {
          body
          frontmatter {
            greetings
            title
            subtitlePrefix
            subtitle
            icon {
              childImageSharp {
                fluid(maxWidth: 60, quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
    about: allMdx(
      sort: { fields: fields___isDefault, order: ASC }
      filter: {
        fields: { locale: { in: [$locale, "zh"] } }
        fileAbsolutePath: { regex: "/index/about/" }
      }
    ) {
      edges {
        node {
          body
          frontmatter {
            title
            image {
              childImageSharp {
                fluid(maxWidth: 400, quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
    allSubSite(filter: { locale: { eq: $locale } }) {
      edges {
        node {
          id
          title
          url
          description
          locale
          icon {
            childImageSharp {
              fixed(width: 30, height: 30, quality: 90) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
    interests: allMdx(
      sort: { fields: fields___isDefault, order: ASC }
      filter: {
        fields: { locale: { in: [$locale, "zh"] } }
        fileAbsolutePath: { regex: "/index/interests/" }
      }
    ) {
      edges {
        node {
          exports {
            interests {
              url
              name
              icon {
                childImageSharp {
                  fixed(width: 20, height: 20, quality: 90) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
          }
          frontmatter {
            title
          }
        }
      }
    }
    projects: allMdx(
      filter: {
        fields: { locale: { in: [$locale, "zh"] } }
        fileAbsolutePath: { regex: "/index/projects/" }
        frontmatter: { visible: { eq: true } }
      }
      sort: { fields: [frontmatter___position], order: ASC }
    ) {
      edges {
        node {
          fields {
            locale
          }
          body
          frontmatter {
            title
            category
            emoji
            external
            github
            screenshot {
              childImageSharp {
                fluid(maxWidth: 400, quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            tags
            position
            buttonVisible
            buttonUrl
            buttonText
          }
        }
      }
    }
    contact: allMdx(
      sort: { fields: fields___isDefault, order: ASC }
      filter: {
        fields: { locale: { in: [$locale, "zh"] } }
        fileAbsolutePath: { regex: "/index/contact/" }
      }
    ) {
      edges {
        node {
          body
          frontmatter {
            title
            name
            email
            profileImage {
              childImageSharp {
                fluid(maxWidth: 400, quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
