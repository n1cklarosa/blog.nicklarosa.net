import React from "react"
import { Box } from "@chakra-ui/core"
import { Link } from "gatsby"
import _ from "lodash"
import Img from "gatsby-image"
import Zoom from "react-reveal/Zoom"

import style from "./article-tile.module.css"

const ArticleTile = ({ article, index }) => (
  <Zoom delay={index * 100}>
    <Box
      className={style.tile}
      maxW="450px"
      post={article}
      px={1}
      data-sal="slide-up"
      data-sal-easing="ease"
    >
      <Link to={article.fields.slug}>
        <Img
          fluid={article.frontmatter.featimg.childImageSharp.fluid}
          alt={article.frontmatter.title}
          className={style.tile__image}
        />
      </Link>
      <div className={style.meta__info}>
        {article.frontmatter.subject.map((subject, index) => [
          index > 0 && ", ",
          <Link key={index} to={`/subjects/${_.kebabCase(subject)}`}>
            {subject}
          </Link>,
        ])}
      </div>
      <Link to={article.fields.slug}>
        <h3 className={style.heading}>{article.frontmatter.title}</h3>
      </Link>
      <p>{article.excerpt}</p>
    </Box>
  </Zoom>
)

export default ArticleTile
