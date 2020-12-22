import { sharedPreferences } from "../styles/theme"

// breakpoints.lg needs to be cleaned and parsed since it is a string like '1200px'
export const detectMobileAndTablet = windowWidth =>
  windowWidth <
  parseInt(sharedPreferences.breakpoints.lg.match(/\d+/gi).join(""))

// detect server-side-rendering to fix bugs while gatsby build
export const isSSR = typeof window === "undefined"

// used to parse the publication date of medium articles
export const parseDate = date => {
  const year = date.substring(0, 4)
  const month = date.substring(5, 7)
  const day = date.substring(8, 10)

  switch (month) {
    case "01":
      return day + " January " + year
    case "02":
      return day + " February " + year
    case "03":
      return day + " March " + year
    case "04":
      return day + " April " + year
    case "05":
      return day + " May " + year
    case "06":
      return day + " June " + year
    case "07":
      return day + " July " + year
    case "08":
      return day + " August " + year
    case "09":
      return day + " September " + year
    case "10":
      return day + " October " + year
    case "11":
      return day + " November " + year
    case "12":
      return day + " December " + year
    default:
      return "No publication date"
  }
}
export const openChat = () => {
  if (typeof $crisp !== undefined) {
    $crisp.push(["do", "chat:open"])
  }
}
export const t = (key, localize, defaultValue, locale = "zh") => {
  let value = defaultValue
  if (localize && Array.isArray(localize)) {
    for (let i = 0; i < localize.length; i++) {
      const localeItem = localize[i]
      const currentLocale = localeItem.locale
      if (locale === currentLocale) {
        if (localeItem[key]) {
          value = localeItem[key]
          return value
        }
      }
    }
  }
  return value
}
