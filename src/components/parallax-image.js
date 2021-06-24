/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Parallax } from "react-scroll-parallax"

const ParallaxImage = () => {
  return (
    <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure">
      <StaticImage
        layout="fullWidth"
        formats={["AUTO", "WEBP", "AVIF"]}
        src="../images/profile.jpg"
         
        quality={95}
        alt="Profile picture"
      />
    </Parallax>
  )
}

export default ParallaxImage
