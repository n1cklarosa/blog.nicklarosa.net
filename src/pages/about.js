import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import { PageWrapper, Title } from "../components/styled"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <PageWrapper>
      <SEO title="Page two" />
      <Title>Hi from the second page</Title>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </PageWrapper>
  </Layout>
)

export default SecondPage
