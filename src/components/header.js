import * as React from "react"
import { Link } from "gatsby"
// import { useStaticQuery, graphql } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

const Header = ({ location, title }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
//   const data = useStaticQuery(graphql`
//     query HeaderQuery {
//       site {
//         siteMetadata {
//           author {
//             name
//             summary
//           }
//           social {
//             twitter
//           }
//         }
//       }
//     }
//   `)
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading mb-0">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  // Set these values by editing "siteMetadata" in gatsby-config.js
//   const author = data.site.siteMetadata?.author
//   const social = data.site.siteMetadata?.social

  return (
    <div className="site-header text-center  py-6 lg:py-12">
      <header className="global-header">{header}</header>
    </div>
  )
}

export default Header
