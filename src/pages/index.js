import React from "react"
import { graphql } from "gatsby"
import { SimpleGrid } from "@chakra-ui/core"
// import Img from "gatsby-image"

import ArticleTile from "../components/article-tile"
import Layout from "../components/layout"
import SEO from "../components/seo"

import style from "./index.module.css"

const IndexPage = ({ data }) => {
  console.log(data.allMarkdownRemark.edges)
  const Posts = data.allMarkdownRemark.edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => (
      <ArticleTile key={edge.node.fields.slug} article={edge.node} />
    ))
  return (
    <Layout>
      <SEO title="Home" />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: "var(--content-w-regular)",
          width: "100%",
          padding: `1.45rem`,
          boxSizing: "border-box",
        }}
      >
        <div className={style.hero}>
          <p>Hey, I'm Nick</p>
          <p>
            A front end developer from Sydney specialising in Wordpress, React
            JS, Gatsy and SEO.
          </p>
        </div>
        <SimpleGrid columns={[1, null, 3]} spacing="30px">
          {Posts}
        </SimpleGrid>
      </div>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      limit: 12
      sort: { order: DESC, fields: [frontmatter___date] }
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
