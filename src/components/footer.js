import React, { useContext } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import PropTypes from "prop-types"
import ContentWrapper from "../styles/contentWrapper"
import Context from "../context"
import Logo from "./logo"
import { lightTheme, darkTheme } from "../styles/theme"
import { footerLinks } from "../../config"
import { Trans } from "react-i18next"
import Language from "./language"

const StyledFooter = styled.footer`
  width: 100%;
  height: ${({ theme }) => theme.footerHeight};
  background: ${({ theme, darkMode }) =>
    darkMode ? theme.colors.background : theme.colors.primary};
  border-top: ${({ theme, darkMode }) =>
    darkMode ? `3px solid ${theme.colors.boxShadowHover}` : null};
  margin-top: 10rem;
`

const StyledContentWrapper = styled(ContentWrapper)`
  && {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    .footer-links {
      /* Adjust width of links wrapper accordingly */
      width: 10rem;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
        width: 15rem;
      }
    }
  }
`

const StyledLink = styled(Link)`
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  color: ${({ theme, $darkMode }) =>
    $darkMode ? theme.colors.primary : theme.colors.background};
  letter-spacing: 1px;
`

const Footer = ({ pageContext }) => {
  const { darkMode } = useContext(Context).state
  return (
    <StyledFooter darkMode={darkMode}>
      <StyledContentWrapper>
        <Link to="/" aria-label="home">
          <Logo
            size="1.5rem"
            color={
              darkMode ? darkTheme.colors.primary : lightTheme.colors.background
            }
          />
        </Link>
        <Language pageContext={pageContext}></Language>

        <div className="footer-links" data-testid="footer-links">
          {footerLinks.map(({ name, url }, key) => (
            <StyledLink key={key} to={url} $darkMode={darkMode}>
              <Trans>{name}</Trans>
            </StyledLink>
          ))}
        </div>
      </StyledContentWrapper>
    </StyledFooter>
  )
}
Footer.propTypes = {
  pageContext: PropTypes.object,
}
export default Footer
