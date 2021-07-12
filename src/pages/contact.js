import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { useForm } from "react-hook-form"
import Seo from "../components/seo"
import Bio from "../components/bio"
import { useGoogleReCaptcha } from "react-google-recaptcha-v3"

const formApi = process.env.GATSBY_FORM_API

const ContactPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { executeRecaptcha } = useGoogleReCaptcha()
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm()

  async function postData(data = {}) {
    const response = await fetch(formApi, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    return response.json()
  }

  const onSubmit = async data => {
    setLoading(true)
    const cap = await executeRecaptcha("contactus")
    const result = await postData({ ...data, token: cap })
    console.log("Reponse", result)
    setLoading(false)
  }
  const [loading, setLoading] = useState(false)
  return (
    <Layout location={location} title={siteTitle}>
      <Seo title={"Contact Me"} description={"Something on your mind?"} />
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">Contact Me</h1>
        </header>
        <section>
          <form onSubmit={handleSubmit(onSubmit)}  className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            {/* register your input into the hook by invoking the "register" function */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="username"
              >
                Name
              </label>
              <input
                {...register("name", { required: true })}
                placeholder="name"
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username"
              />
            </div>

            {/* include validation with required or other standard HTML validation rules */}
            <input
              {...register("email", { required: true })}
              placeholder="email"
              type="email"
            />
            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}
            <input
              type="submit"
              value={loading === true ? "loading" : "Submit"}
            />
          </form>
        </section>
        <hr />
        <footer>
          <Bio />
        </footer>
      </article>
    </Layout>
  )
}

export default ContactPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
