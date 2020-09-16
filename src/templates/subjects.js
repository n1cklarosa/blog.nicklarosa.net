import React from "react"
import { graphql } from "gatsby"
// import Img from "gatsby-image"
// import _ from "lodash"
import { Box } from "@chakra-ui/core"

import style from "./articles.module.css"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Pagination from "../components/global/pagination/pagination"
import ArticleTile from "../components/articles/article-tile"
import { PageWrapper, PageTitle, PageLeader } from "../components/styled"

const ArticleIndex = ({ data, pageContext }) => {
  const posts = data.allMarkdownRemark.edges
  const { subject } = pageContext
  console.log(pageContext)

  let pageHeader = `Articles`
  if (subject) {
    pageHeader = `Filed under ${subject}:`
  }

  return (
    <Layout>
      <SEO
        title={`All articles on the subject "${subject}"`}
        description="All articles filed under this subject."
        image="/logo.png"
        pathname={`/subjects/${subject}`}
        // Boolean indicating whether this is an article:
        // article
      />
      <PageLeader>
        <PageWrapper>
          <PageTitle>{pageHeader}</PageTitle>
        </PageWrapper>
      </PageLeader>
      <PageWrapper>
        <Box>
          {posts.map(({ node }, index) => (
            <ArticleTile article={node} key={index} />
          ))}
        </Box>
      </PageWrapper>
      <Pagination pageContext={pageContext} />
    </Layout>
  )
}

export default ArticleIndex

export const query = graphql`
  query($subject: String!, $skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      filter: { frontmatter: { subject: { in: [$subject] } } }
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
                fluid(maxWidth: 370, maxHeight: 370, cropFocus: ATTENTION) {
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
