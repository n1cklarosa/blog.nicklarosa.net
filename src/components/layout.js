import * as React from "react"
import Header from "./header"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  return ( 
      <div className="page-wrapper" data-is-root-path={isRootPath}>
        <Header location={location} title={title} />
        <main  className="container mx-auto px-8 mb-8">{children}</main>
        <footer  className="container mx-auto px-8 mb-8 text-center">
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div> 
  )
}

export default Layout
