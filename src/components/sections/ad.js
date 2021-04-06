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
import AdSense from "react-adsense"

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
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
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
    min-width: 15rem;
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
const Interests = () => {
  return (
    <StyledSection id="sources">
      <StyledContentWrapper>
        <AdSense.Google
          client="ca-pub-5211209136530011"
          slot="9469977903"
          style={{ display: "block" }}
          format="auto"
          responsive="true"
        />
      </StyledContentWrapper>
    </StyledSection>
  )
}

Interests.propTypes = {}

export default Interests
