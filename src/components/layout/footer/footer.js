import React from "react"

import twitterLogo from "../../twitter.svg"
import linkedInLogo from "../../linkedin.svg"
import githubLogo from "../../github.svg"

import { OutboundLink } from "gatsby-plugin-google-analytics"
import variables from "../../../../content/variables"
import { PageWrapper } from "../../styled"

import style from "./footer.module.css"

const Footer = ({ siteTitle, footerItems }) => (
  <footer
    style={{
      paddingTop: `3em`,
      paddingBottom: `3em`,
      textAlign: "center",
      width: "100%",
      backgroundColor: variables.lightGray,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        width: "100%",
      }}
    >
      <PageWrapper>
        <ul className={style.footersocials}>
          <li>
            <OutboundLink
              href="https://twitter.com/nick_la_rosa"
              target="_blank"
              rel="noreferrer"
            >
              <img src={twitterLogo} alt="socials" />
            </OutboundLink>
          </li>
          <li>
            <OutboundLink
              href="https://www.linkedin.com/in/nick-la-rosa-67404733/?originalSubdomain=au"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedInLogo} alt="socials" />
            </OutboundLink>
          </li>
          <li>
            <OutboundLink
              href="https://github.com/n1cklarosa"
              target="_blank"
              rel="noreferrer"
            >
              <img src={githubLogo} alt="socials" />
            </OutboundLink>
          </li>
        </ul>
        © {new Date().getFullYear()} {siteTitle}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </PageWrapper>
    </div>
  </footer>
)

export default Footer
