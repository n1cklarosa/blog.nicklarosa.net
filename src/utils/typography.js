import Typography from "typography"
import wordpress2016Theme from "typography-theme-wordpress-2016"

wordpress2016Theme.overrideThemeStyles = () => {
  return {
    a: {
      boxShadow: `none`,
    },
    h1: {
      fontFamily: "Montserrat",
    },
    h2: {
      fontFamily: "Montserrat",
    },
  }
}

// delete Wordpress2016.googleFonts

const typography = new Typography(wordpress2016Theme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export const rhythm = typography.rhythm
export const scale = typography.scale

export const headerFontFamily = typography.headerFontFamily
export const bodyFontFamily = typography.options.bodyFontFamily
export default typography

// import Typography from "typography"
// const typography = new Typography({
//   baseFontSize: "18px",
//   baseLineHeight: 1.666,
//   headerFontFamily: [
//     "Avenir Next",
//     "Helvetica Neue",
//     "Segoe UI",
//     "Helvetica",
//     "Arial",
//     "sans-serif",
//   ],
//   bodyFontFamily: ["Georgia", "serif"],
// })
// export default typography
