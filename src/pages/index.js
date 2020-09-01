import React from "react"
import { graphql, Link } from "gatsby"
import { SimpleGrid } from "@chakra-ui/core"
// import Img from "gatsby-image"

import ArticleTile from "../components/article-tile"
import Layout from "../components/layout"
import SEO from "../components/seo"

import style from "./index.module.css"

const IndexPage = ({ data }) => {
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
          padding: `0 1.45rem`,
          boxSizing: "border-box",
        }}
      >
        <div className={style.hero}>
          <p>Hey, I'm Nick</p>
          <p>
            A full stack javascript and php developer from Sydney Australia.
          </p>
        </div>
        <SimpleGrid minChildWidth="250px" spacing="30px">
          {Posts}
        </SimpleGrid>

        <div className={style.footer}>
          <p style={{ textAlign: "center" }}>
            <Link to={"/articles"}>View Blog</Link>
          </p>
        </div>
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
