import React from "react"
import { graphql } from "gatsby"
// import Img from "gatsby-image"
// import _ from "lodash"
import { SimpleGrid } from "@chakra-ui/core"

import style from "./articles.module.css"
import Layout from "../components/layout"
import Pagination from "../components/pagination"
import ArticleTile from "../components/article-tile"

const ArticleIndex = ({ data, pageContext, location }) => {
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location}>
      <section className={style.articlelist}>
        <h2 className={style.heading}>Articles</h2>
        <SimpleGrid minChildWidth="250px" spacing="30px">
          {posts.map(({ node }, index) => (
            <ArticleTile key={node.fields.slug} article={node} index={index} />
          ))}
        </SimpleGrid>
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
                fluid(maxWidth: 300, maxHeight: 200, cropFocus: ATTENTION) {
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
