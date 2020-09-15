import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import _ from "lodash"
import SEO from "../components/seo"

import Layout from "../components/layout/layout"
import style from "./article.module.css"

export default ({ data }) => {
  console.log("data", data)
  const article = data.markdownRemark
  
  return (
    <Layout>
      <article className={style.article}>
        <SEO
          title={article.frontmatter.title}
          description={article.excerpt}
          image="/logo.png"
          pathname={article.slug}
          // Boolean indicating whether this is an article:
          article
        />
        <div className={style.article__content_wrapper}>
          <h1 className={style.article__title}>{article.frontmatter.title}</h1>
          <div className={style.article__meta}>
            by {article.frontmatter.author}. Published{" "}
            {new Date(article.frontmatter.date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}{" "}
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
        </div>
        {article.frontmatter.featimg && (
          <figure className={style.featimg}>
            <Img
              fluid={article.frontmatter.featimg.childImageSharp.fluid}
              alt={article.frontmatter.title}
            />
          </figure>
        )}
        <div className={style.article__content_wrapper}>
          <div
            className={style.article__content}
            dangerouslySetInnerHTML={{ __html: article.html }}
          />
        </div>

        <div className={style.article__nav_wrapper}>
       
        </div>

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
            fluid(maxWidth: 1500, maxHeight: 550, cropFocus: CENTER) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`
