// custom typefaces
import "typeface-montserrat"
import "typeface-merriweather"
// normalize CSS across browsers
import "./src/normalize.css"
// custom CSS styles
import "./src/style.css" 
// Highlighting for code blocks
// import "prismjs/themes/prism.css"
// import "prismjs/plugins/line-numbers/prism-line-numbers.css"
import "prismjs/themes/prism-coy.css"
import "prismjs/plugins/command-line/prism-command-line.css"

import React from "react"

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3"
export const wrapRootElement = ({ element }) => {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={`${process.env.GATSBY_GOOGLE_RECAPTCHA_KEY}`}
    >
      {element}
    </GoogleReCaptchaProvider>
  )
}
