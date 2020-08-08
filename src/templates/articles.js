import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import _ from "lodash"
import { Flex, Box } from "@chakra-ui/core"

import style from "./articles.module.css"
import Layout from "../components/layout"
import Pagination from "../components/pagination"

const ArticleIndex = ({ data, pageContext, location }) => {
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location}>
      <section className={style.articlelist}>
        <h2>Articles</h2>
        <ul>
          {posts.map(({ node }, index) => (
            <Flex
              direction="row-reverse"
              justify="space-between"
              flexWrap="wrap"
              w="100%"
              mb={"2rem"}
            >
              {node.frontmatter.featimg && (
                <Box pl={"10px"} width={["100%", "100%", 0.5, 0.25]}>
                  <figure className={style.featimg}>
                    <Link to={node.fields.slug}>
                      <Img
                        fluid={node.frontmatter.featimg.childImageSharp.fluid}
                        alt={node.frontmatter.title}
                      />
                    </Link>
                  </figure>
                </Box>
              )}

              <Box pl={"10px"} width={["100%", "100%", 0.5, 0.75]}>
                {" "}
                <Link to={node.fields.slug}>
                  <h1 className={style.article__title}>
                    {node.frontmatter.title}
                  </h1>
                </Link>
                <div className={style.article__meta}>
                  by {node.frontmatter.author}. Published{" "}
                  {new Date(node.frontmatter.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}{" "}
                </div>
                <div
                  className={style.article__content}
                  dangerouslySetInnerHTML={{ __html: node.excerpt }}
                />
                <div className={style.article__tax}>
                  Filed under:{" "}
                  {node.frontmatter.subject.map((subject, index) => [
                    index > 0 && ", ",
                    <Link key={index} to={`/subjects/${_.kebabCase(subject)}`}>
                      {subject}
                    </Link>,
                  ])}
                </div>
              </Box>
            </Flex>
          ))}
        </ul>
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
                fluid(maxWidth: 300, maxHeight: 300, cropFocus: ATTENTION) {
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
