import React from "react"
import { Flex, Box, Heading } from "@chakra-ui/core"
import { Link } from "gatsby"
import _ from "lodash"
import Img from "gatsby-image"
// import Zoom from "react-reveal/Zoom"

import style from "./article-tile.module.css"

const ArticleTile = ({ article, index }) => (
  <Flex
    w={{ base: "100%" }}
    flexWrap={{ base: "wrap", md: "nowrap" }}
    mb={"40px"}
    alignItems={"center"}
    boxShadow=" 0px 7px 30px -3px rgba(0,0,0,0.3)" 
    backgroundColor={"white"}
  >
    <Box w={{ base: "100%", md: "40%" }}>
      <Link to={article.fields.slug}>
        <Img
          fluid={article.frontmatter.featimg.childImageSharp.fluid}
          alt={article.frontmatter.title}
        />
      </Link>
    </Box>
    <Box
      
      w={{ base: "100%", md: "60%" }} 
      p={"30px"}
    >
      <Link to={article.fields.slug}>
        <Heading as="h2" size={"md"} mt={0}>
          {article.frontmatter.title}
        </Heading>
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
  </Flex>
)

export default ArticleTile
