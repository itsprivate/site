import React, { useState, useEffect, useRef } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Img from "gatsby-image"
import { motion, useAnimation } from "framer-motion"
import { openChat, detectMobileAndTablet, isSSR } from "../../utils"
import { useOnScreen } from "../../hooks/"
import ContentWrapper from "../../styles/contentWrapper"
import Button from "../../styles/button"
import { Trans } from "react-i18next"
const StyledSection = styled.section`
  width: 100%;
  height: auto;
  background: ${({ theme }) => theme.colors.background};
  margin-top: 6rem;
`

const StyledContentWrapper = styled(ContentWrapper)`
  && {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-right: 0;
    padding-left: 0;
    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      padding-right: 2.5rem;
      padding-left: 2.5rem;
    }
    .section-title {
      padding-right: 2.5rem;
      padding-left: 2.5rem;
      @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        padding-right: 0;
        padding-left: 0;
      }
    }
  }
`

const StyledInterests = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
  grid-gap: 1rem;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-right: 0;
    padding-left: 0;
  }
  padding-right: 2.5rem;
  padding-left: 2.5rem;
  .interest-wrapper {
    width: 100%;
    &:hover {
      transform: scale(1.01);
    }
  }
  .interest {
    min-width: 15.625rem;
    height: 3rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 1rem;
    border: 0.125rem solid ${({ theme }) => theme.colors.primary};
    border-radius: ${({ theme }) => theme.borderRadius};
    background: ${({ theme }) => theme.colors.card};
    .icon {
      margin-right: 0.5rem;
    }
  }
`

const StyledNote = styled.div`
  padding: 1rem 2.5rem;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-right: 0;
    padding-left: 0;
  }
`
const StyledNoteText = styled.span`
  color: ${({ theme }) => theme.colors.subtext};
`
const StyledNoteButton = styled.a`
  color: ${({ theme }) => theme.colors.primary};
`
const Interests = ({ content }) => {
  const { exports, frontmatter } = content[0].node
  const { interests } = exports

  const ref = useRef()
  const onScreen = useOnScreen(ref)

  const iControls = useAnimation()
  const bControls = useAnimation()

  useEffect(() => {
    const sequence = async () => {
      // i receives the value of the custom prop - can be used to stagger
      // the animation of each "interest" element
      await iControls.start(i => ({
        opacity: 1,
        scaleY: 1,
        transition: { delay: i * 0.1 },
      }))
      await bControls.start({ opacity: 1, scaleY: 1 })
    }
    sequence()
  }, [iControls, bControls])

  const handleIssue = () => {
    openChat()
  }

  return (
    <StyledSection id="sources">
      <StyledContentWrapper>
        <h3 className="section-title">{frontmatter.title}</h3>
        <StyledInterests itemCount={interests.length} ref={ref}>
          {interests.map(({ name, icon, url }, key) => (
            <a
              href={url}
              key={name}
              title={name}
              className="interest-wrapper"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              <motion.div
                className="interest"
                custom={key}
                initial={{ opacity: 0, scaleY: 0 }}
                animate={iControls}
              >
                <Img className="icon" fixed={icon.childImageSharp.fixed} />{" "}
                {name}
              </motion.div>
            </a>
          ))}
        </StyledInterests>
        <StyledNote>
          <StyledNoteText>
            <Trans>Want more sources?</Trans>
          </StyledNoteText>{" "}
          <StyledNoteButton onClick={handleIssue}>
            <Trans>Let us know.</Trans>
          </StyledNoteButton>
        </StyledNote>
      </StyledContentWrapper>
    </StyledSection>
  )
}

Interests.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        exports: PropTypes.shape({
          interests: PropTypes.array.isRequired,
        }).isRequired,
        frontmatter: PropTypes.object.isRequired,
      }).isRequired,
    }).isRequired
  ).isRequired,
}

export default Interests
