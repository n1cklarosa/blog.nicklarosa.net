import * as React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Share from "../components/share"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data
  const image = getImage(post.frontmatter.featimg)
  const twitter = data.site.siteMetadata.social.twitter
  const url = data.site.siteMetadata.siteUrl

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article
        className="blog-post w-full"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline" className={"text-center mt-0 mb-8 lg:mb-12"}>
            {post.frontmatter.title}
          </h1>
          <p className={"text-center mb-4 text-small text-md"}>
            <strong>published: </strong>
            {post.frontmatter.date}
          </p>
          {post.frontmatter.time && (
            <p className={"text-center text-md"}>
              <strong>read time: </strong>
              {post.frontmatter.time}
            </p>
          )}
        </header>
        <div className={"text-center  w-full lg:w-1/2 mx-auto"}>
          <GatsbyImage
            className={"mx-auto"}
            style={{ marginBottom: "30px" }}
            image={image}
            alt={post.title}
          />
        </div>
        <section
          className={"article-content  w-full lg:w-1/2 mx-auto"}
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
        <footer className={" w-full lg:w-1/2 mx-auto"}>
          <Share
            socialConfig={{
              twitter,
              config: {
                url: `${url}${post.fields.slug}`,
                title: post.frontmatter.title,
              },
            }}
            tags={post.frontmatter.subject}
          />
          <Bio />
        </footer>
      </article>
      <nav className="blog-post-nav  w-full lg:w-1/2 mx-auto">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
        siteUrl
        social {
          twitter
        }
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        subject
        time
        featimg {
          childImageSharp {
            gatsbyImageData(
              width: 800
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
