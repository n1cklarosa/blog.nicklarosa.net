import React from "react"
import { graphql } from "gatsby" 
// import SubjectTags from "../components/subjects/subjectTags"
import { Box } from "@chakra-ui/core"
import SEO from "../components/seo"

// import style from "./articles.module.css"
import Layout from "../components/layout/layout"
import Pagination from "../components/global/pagination/pagination"
import ArticleTile from "../components/articles/article-tile"
import { PageWrapper, PageTitle, PageLeader } from "../components/styled"

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
        article={false}
      />
      <PageLeader>
        <PageWrapper>
          <PageTitle>Articles</PageTitle>
        </PageWrapper>
      </PageLeader>
      <PageWrapper>
        {/* <SubjectTags /> */}
        <Box backgroundColor={"white"} p={0} zIndex={12}>
          {posts.map(({ node }, index) => (
            <ArticleTile key={node.fields.slug} article={node} index={index} />
          ))}
        </Box>
        <Pagination pageContext={pageContext} />
      </PageWrapper>
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
