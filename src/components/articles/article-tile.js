import React from "react"
import { Flex, Box } from "@chakra-ui/core"
import typography from "../../utils/typography"
import { TileTitle, TileP } from "../../components/styled"
import { Link } from "gatsby"
import _ from "lodash"
import Img from "gatsby-image" 
// import Zoom from "react-reveal/Zoom"


import variables from "../../../content/variables"

import style from "./article-tile.module.css"
console.log("here", typography)
const ArticleTile = ({ article, index }) => (
  <Flex
    w={{ base: "100%" }}
    flexWrap={{ base: "wrap", sm: "nowrap" }}
    mb={"60px"}
    alignItems={"center"}
    boxShadow={`0px 7px 30px -3px ${variables.primary}`}
    backgroundColor={"white"}
  >
    <Box w={{ base: "100%", sm:"30%", md: "40%" }}>
      <Link to={article.fields.slug}>
        <Img
          fluid={article.frontmatter.featimg.childImageSharp.fluid}
          alt={article.frontmatter.title}
        />
      </Link>
    </Box>
    <Box
      
      w={{ base: "100%",sm:"70%", md: "60%" }} 
      px={{base:"12px",md:"30px"}} py={{base:"20px", sm:"0px", md:"30px"}}
    >
      <Link to={article.fields.slug} color={variables.primary} style={{textDecoration:"none"}} >
        <TileTitle  color={variables.primary}>
          {article.frontmatter.title}
        </TileTitle>
      </Link>
      <TileP>{article.excerpt}</TileP>
      <div className={style.meta__info}>
        {article.frontmatter.subject.map((subject, index) => [
          index > 0 && ", ",
          <Link key={index} to={`/subjects/${_.kebabCase(subject)}`} styles={{color:variables.primary}}>
            {subject}
          </Link>,
        ])}
      </div>
    </Box>
  </Flex>
)

export default ArticleTile
