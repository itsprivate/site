import React from "react"
import { useLocalization } from "gatsby-theme-i18n"
import { withPrefix, navigate } from "gatsby"
import PropTypes from "prop-types"
import { join } from "path"
const Language = props => {
  const { pageContext } = props
  const { locale: currentLocale, config, defaultLang } = useLocalization()
  const handleChangeLocale = e => {
    const localeCode = e.target.value
    const targetUrl = withPrefix(
      join(
        `${localeCode === defaultLang ? "" : `/${localeCode}`}${
          pageContext.originalPath
        }`
      )
    )
    navigate(targetUrl)
  }
  return (
    <select
      style={{ minWidth: "6.5rem" }}
      value={currentLocale}
      onChange={handleChangeLocale}
    >
      {config.map(locale => {
        return (
          <option key={locale.code} value={locale.code}>
            {locale.localName}
          </option>
        )
      })}
    </select>
  )
}
Language.propTypes = {
  pageContext: PropTypes.object,
}
export default Language
