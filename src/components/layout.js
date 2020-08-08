/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
          menuItems {
            title
            link
          }
        }
      }
    }
  `)

  return (
    <>
      <Header
        menuItems={data.site.siteMetadata.menuItems}
        siteTitle={data.site.siteMetadata.title}
      />
      <div
        style={{
          margin: `0 0`,
          maxWidth: "100%`",
          padding: `0 0 1.45rem`,
        }}
      >
        <main>{children}</main>
        <Footer
          menuItems={data.site.siteMetadata.menuItems}
          siteTitle={data.site.siteMetadata.title}
        />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
