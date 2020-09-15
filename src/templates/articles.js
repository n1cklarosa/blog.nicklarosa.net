import React from "react"
import { graphql } from "gatsby"
// import Img from "gatsby-image"
// import _ from "lodash"
import { Flex } from "@chakra-ui/core"
import SEO from "../components/seo"

import style from "./articles.module.css"
import Layout from "../components/layout/layout"
import Pagination from "../components/global/pagination/pagination"
import ArticleTile from "../components/articles/article-tile"

const ArticleIndex = ({ data, pageContext, location }) => {
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location}>
      <SEO
        title="Articles"
        description="All articles published by the Project"
        image="/logo.png"
        pathname="/articles"
        // Boolean indicating whether this is an article:
        // article
      />
      <section className={style.articlelist}>
        <h2 className={style.heading}>Articles</h2>
        <Flex flexWrap={'wrap'}>
          {posts.map(({ node }, index) => (
            <ArticleTile key={node.fields.slug} article={node} index={index} />
          ))}
        </Flex>
        <Pagination pageContext={pageContext} />
      </section>
    </Layout>
  )
}

export default ArticleIndex

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          excerpt
          id
          frontmatter {
            title
            date
            subject
            author
            featimg {
              childImageSharp {
                fluid(maxWidth: 300, maxHeight: 200, cropFocus: CENTER) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
