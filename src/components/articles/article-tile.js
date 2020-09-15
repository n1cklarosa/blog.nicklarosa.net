import React from "react"
import { Box } from "@chakra-ui/core"
import { Link } from "gatsby"
import _ from "lodash"
import Img from "gatsby-image"
// import Zoom from "react-reveal/Zoom" 

import style from "./article-tile.module.css"

const ArticleTile = ({ article, index }) => (
  
    <Box
      className={style.tile}
      w={{sm:"100%",lg:"50%", xl: 1/3}}
      post={article}
      px={3}
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
      
      <Link to={article.fields.slug}>
        <h3 className={style.heading}>{article.frontmatter.title}</h3>
      </Link>
      <p>{article.excerpt}</p>
      <div className={style.meta__info}>
        {article.frontmatter.subject.map((subject, index) => [
          index > 0 && ", ",
          <Link key={index} to={`/subjects/${_.kebabCase(subject)}`}>
            {subject}
          </Link>,
        ])}
      </div>
    </Box>
   
)

export default ArticleTile
