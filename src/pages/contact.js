import React, { useState } from "react"
import Layout from "../components/layout"
import { useForm } from "react-hook-form"
import Seo from "../components/seo"
import Bio from "../components/bio"
import Reaptcha from 'reaptcha'

const formApi = process.env.GATSBY_FORM_API

const ContactPage = ({ location }) => {
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
    const result = await postData(data)
    console.log("Reponse", result)
    setLoading(false)
  }
  const [loading, setLoading] = useState(false)
  return (
    <Layout location={location} title={"Contact Me"}>
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
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <input
              {...register("name", { required: true })}
              placeholder="name"
              type="text"
            />

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
