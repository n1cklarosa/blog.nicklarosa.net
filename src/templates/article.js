import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import _ from "lodash"
import { PageTitle, PageLeader } from "../components/styled"
import SEO from "../components/seo"
import { Flex, Box } from "@chakra-ui/core"

import Layout from "../components/layout/layout"
import style from "./article.module.css"

export default ({ data }) => {
  const article = data.markdownRemark

  return (
    <Layout>
      <article>
        <SEO
          title={article.frontmatter.title}
          description={article.excerpt}
          image="/logo.png"
          pathname={article.slug}
          // Boolean indicating whether this is an article:
          article
        />
        <PageLeader className={"no-margin"}>
          <Flex
            px={{ base: "12px", md: "100px" }}
            w={"100%"}
            justifyContent={{ base: "center", sm: "space-between" }}
            flexWrap={{ base: "wrap", sm: "nowrap" }}
            alignItems={"center"}
          >
            <Box w={{ base: "100%", sm: "70%", lg: "60%" }}>
              <PageTitle className={"text-left"}>
                {article.frontmatter.title}
              </PageTitle>
              <div className={style.article__meta}>
                by {article.frontmatter.author}. Published{" "}
                {new Date(article.frontmatter.date).toLocaleDateString(
                  "en-US",
                  {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  }
                )} 
              </div>
              <div className={style.article__tax}>
                Filed under:{" "}
                {article.frontmatter.subject.map((subject, index) => [
                  index > 0 && ", ",
                  <Link key={index} to={`/subjects/${_.kebabCase(subject)}`}>
                    {subject}
                  </Link>,
                ])}
              </div>
            </Box>
            <Box
              px={{ base: "15px", lg: "0%" }}
              boxSizing={"border-box"}
              w={{ base: "100%", sm: "30%", lg: "25%" }}
            >
              {article.frontmatter.featimg && (
                <figure>
                  <Img
                    fluid={article.frontmatter.featimg.childImageSharp.fluid}
                    alt={article.frontmatter.title}
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </figure>
              )}
            </Box>
          </Flex>
        </PageLeader>

        <Box
          px={{ base: "15px", lg: "none" }}
          className={style.article__content_wrapper}
        >
          <div
            className={style.article__content}
            dangerouslySetInnerHTML={{ __html: article.html }}
          />
        </Box>

        <div className={style.article__nav_wrapper}></div>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        subject
        author
        featimg {
          childImageSharp {
            fluid(maxWidth: 500, maxHeight: 500, cropFocus: CENTER) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`
