import React from "react"
import { Link } from "gatsby"
import { Flex, Box } from "@chakra-ui/core"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  console.log(data.allMarkdownRemark.edges)
  const Posts = data.allMarkdownRemark.edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => (
      <Box
        width={["100%", "100%", 0.5, 0.33]}
        key={edge.node.fields.slug}
        post={edge.node}
        px={1}
      >
        <Link to={edge.node.fields.slug}>
          <Img
            fluid={edge.node.frontmatter.featimg.childImageSharp.fluid}
            alt={edge.node.frontmatter.title}
          />
        </Link>
        <Link to={edge.node.fields.slug}>
          <h2>{edge.node.frontmatter.title}</h2>
        </Link>
      </Box>
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
        <Flex w="100%" justify="space-between" flexWrap="wrap">
          {Posts}
        </Flex>
      </div>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      limit: 3
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
                fluid(maxWidth: 300, cropFocus: ATTENTION) {
                  ...GatsbyImageSharpFluid
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
