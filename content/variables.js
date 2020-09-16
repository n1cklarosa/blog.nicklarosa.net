  
import typography from "../src/utils/typography"

var primary = "#2b2d42"
var primaryLighter = "#9c9fbf"

export default {
    primary: primary,
    primaryLight:primaryLighter,
    inverse: "#fff",
    // colors
    bodyFont: "Georgia",
    headingFont: "Montserrat, Georgia, serif ",
    darkGrey: "#333447",
    black: "#000",
    lightGray: "#f4f4f4",
    backgroundGradient: `${primary} linear-gradient(147deg,${primary} ,${primary}  25%,${primaryLighter} ) no-repeat`,
    leaderTitleFontSizeDesktop:"65px", 
    leaderTitleFontSizeMobile:"35px",  
    // grid
    width: "96%",
    wrapperWidth: "960px",
    blogWidth: "560px", 
    gutter: "4%",
    breakpointPhone: "768px",
    breakpointTablet: "1024px",
    breakpointLaptop: "1200px",
    breakpointLarge: "60em" // 960px
  }