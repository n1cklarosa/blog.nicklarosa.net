// import Typography from "typography"
// import lincolnTheme from "typography-theme-lincoln"

// // Wordpress2016.overrideThemeStyles = () => {
// //   return {
// //     "a.gatsby-resp-image-link": {
// //       boxShadow: `none`,
// //     },
// //   }
// // }

// // delete Wordpress2016.googleFonts

// const typography = new Typography(lincolnTheme)

// // Hot reload typography in development.
// if (process.env.NODE_ENV !== `production`) {
//   typography.injectStyles()
// }

// export default typography
// export const rhythm = typography.rhythm
// export const scale = typography.scale


import Typography from "typography"
const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  headerFontFamily: [
    "Avenir Next",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  bodyFontFamily: ["Georgia", "serif"],
})
export default typography