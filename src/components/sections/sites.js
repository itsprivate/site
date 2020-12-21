import React, { useEffect, useContext } from "react"
import styled from "styled-components"
import { motion, useAnimation } from "framer-motion"
import PropTypes from "prop-types"
import Context from "../../context"
import ContentWrapper from "../../styles/contentWrapper"
import Underlining from "../../styles/underlining"
import Img from "gatsby-image"
import { lightTheme, darkTheme } from "../../styles/theme"
import { Trans } from "react-i18next"
import Icon from "../icons"

const StyledSection = motion.custom(styled.section`
  width: 100%;
  height: auto;
  background: ${({ theme }) => theme.colors.background};
`)

const StyledContentWrapper = styled(ContentWrapper)`
  && {
    width: 100%;
    height: 100%;
    padding-right: 0;
    padding-left: 0;
    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      padding-right: 2.5rem;
      padding-left: 2.5rem;
    }
    .section-title {
      padding-right: 2.5rem;
      padding-left: 2.5rem;
      @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        padding-right: 0;
        padding-left: 0;
      }
    }
    .articles {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));
      grid-gap: 3rem;
      margin: -2rem 0 0 0;
      padding: 0 2.5rem;
      @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        padding: 0 0rem;
      }
    }
    .card-wrapper {
      width: 100%;
    }
    .card-header {
      display: flex;
      align-item: center;
      padding: 0.5rem 0;
    }
    .icon {
      margin-right: 0.6rem;
      margin-top: -0.2rem;
    }
    .enter-icon {
      position: absolute;
      right: 2rem;
      top: 2rem;
      svg {
        width: 1.2rem;
        height: 1.2rem;
        transition: all 0.3s ease-out;
      }
    }
    .card {
      position: relative;
      min-height: 10rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0.5rem 1rem;
      box-shadow: 0 5px 15px ${({ theme }) => theme.colors.boxShadow};
      border-radius: ${({ theme }) => theme.borderRadius};
      background: ${({ theme }) => theme.colors.card};
      transition: box-shadow 0.3s ease-out;
      &:hover {
        box-shadow: 0 5px 15px ${({ theme }) => theme.colors.boxShadowHover};
        svg {
          fill: ${({ theme }) => theme.colors.primary};
        }
      }
      &:hover ${Underlining} {
        box-shadow: inset 0 -1rem 0 ${({ theme }) => theme.colors.secondary};
      }

      .category {
        color: ${({ theme }) => theme.colors.primary};
        text-transform: uppercase;
        letter-spacing: +1px;
        font-weight: 700;
        font-size: 1.5rem;
      }
      .title {
        color: ${({ theme }) => theme.colors.subtext};
        margin-top: 0.25rem;
        margin-bottom: 0.25rem;
      }
      .date {
        font-size: 0.75rem;
        color: ${({ theme }) => theme.colors.subtext};
        letter-spacing: +0.5px;
      }
    }
  }
`

const Sites = ({ content }) => {
  const articlesControls = useAnimation()
  let articles = content.map(item => item.node)
  const { isIntroDone, darkMode } = useContext(Context).state

  // Load and display articles after the splashScreen sequence is done
  useEffect(() => {
    const loadArticles = async () => {
      if (isIntroDone) {
        await articlesControls.start({
          opacity: 1,
          y: 0,
          transition: { delay: 1 },
        })
      }
    }
    loadArticles()
  }, [isIntroDone, articlesControls])
  return (
    <StyledSection
      id="sites"
      initial={{ opacity: 0, y: 20 }}
      animate={articlesControls}
    >
      <StyledContentWrapper>
        <h3 className="section-title">
          <Trans>Sites</Trans>
        </h3>
        <div className="articles">
          {articles.map(item => (
            <a
              href={item.url}
              target="_blank"
              rel="nofollow noopener noreferrer"
              title={item.title}
              aria-label={item.url}
              key={item.url}
              className="card-wrapper"
            >
              <div className="card">
                <div className="enter-icon">
                  <Icon
                    name="external"
                    color={lightTheme.colors.subtext}
                  ></Icon>
                </div>
                <div className="card-header">
                  <Img
                    className="icon"
                    fixed={item.icon.childImageSharp.fixed}
                  />
                  <span className="category">
                    <Underlining color="tertiary" hoverColor="secondary">
                      {item.title}
                    </Underlining>
                  </span>
                </div>

                <h4 className="title">{item.description}</h4>
                <span className="date">{item.url}</span>
              </div>
            </a>
          ))}
        </div>
      </StyledContentWrapper>
    </StyledSection>
  )
}
Sites.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        url: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        icon: PropTypes.object.isRequired,
        description: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired
  ).isRequired,
}

export default Sites
