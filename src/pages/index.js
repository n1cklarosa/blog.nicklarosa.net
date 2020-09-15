import React from "react"
import { graphql, Link } from "gatsby"
import { Flex } from "@chakra-ui/core" 

import ArticleTile from "../components/articles/article-tile"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"

import style from "./index.module.css"

const IndexPage = ({ data }) => {
  const Posts = data.allMarkdownRemark.edges
    .filter(edge => !!edge.node.frontmatter.date) 
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
        <Flex flexWrap={'wrap'}>
          {Posts}
        </Flex>

        <div className={style.footer}>
          <p style={{ textAlign: "center" }}>
            <Link to={"/blog"}>View Blog</Link>
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
