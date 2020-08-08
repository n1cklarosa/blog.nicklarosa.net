import React from "react"

import twitterLogo from "./twitter.svg"
import linkedInLogo from "./linkedin.svg"
import githubLogo from "./github.svg"

import style from "./footer.module.css"

const Footer = ({ siteTitle, footerItems }) => (
  <footer
    style={{
      paddingTop: `3em`,
      paddingBottom: `3em`,
      textAlign: "center",
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: "var(--content-w-regular)",
        width: "100%",
      }}
    >
      <ul className={style.footersocials}>
        <li>
          <a
            href="http://github.com/nick_la_rosa"
            target="_blank"
            rel="noreferrer"
          >
            <img src={twitterLogo} alt="socials" />
          </a>
        </li>
        <li>
          <a
            href="http://github.com/nick_la_rosa"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedInLogo} alt="socials" />
          </a>
        </li>
        <li>
          <a
            href="http://github.com/nick_la_rosa"
            target="_blank"
            rel="noreferrer"
          >
            <img src={githubLogo} alt="socials" />
          </a>
        </li>
      </ul>
      © {new Date().getFullYear()} {siteTitle}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </div>
  </footer>
)

export default Footer
