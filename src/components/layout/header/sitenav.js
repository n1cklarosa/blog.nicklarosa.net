import React from "react"
import { Link } from "gatsby"

import style from "./sitenav.module.css"

const SiteNav = ({ menuItems }) => {
  return (
    <nav className={style.navigation}>
      <ul>
        {menuItems.map(props => (
          <li key={props.title}>
            <Link
              to={props.link}
              style={{
                fontSize: "14px",
                fontWeight: "700",
                textDecoration:"none",
                color: "white",
                textTransform: "uppercase",
              }}
            >
              {props.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default SiteNav
