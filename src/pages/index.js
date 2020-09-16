import React from "react"
import { graphql, Link } from "gatsby"
import { Flex } from "@chakra-ui/core" 

import ArticleTile from "../components/articles/article-tile"
import HomePageLeader from "../components/global/homepageLeader"
import Layout from "../components/layout/layout"
import { PageWrapper, Title } from "../components/styled"
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
      <HomePageLeader />
      <PageWrapper>
        <Title>Latest Blog Posts</Title>
        <Flex flexWrap={'wrap'}>
          {Posts}
        </Flex>

        <div className={style.footer}>
          <p style={{ textAlign: "center" }}>
            <Link to={"/blog"}>View Blog</Link>
          </p>
        </div>
      </PageWrapper>
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
                fluid(maxWidth: 370, maxHeight: 370, cropFocus: CENTER) {
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
