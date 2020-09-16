import React from "react"
// import { graphql } from "gatsby"

import Layout from "../components/layout/layout"
import ContactForm from "../components/global/contactForm/contactForm"
// import Repository from "../components/repositories/repository"
import { PageWrapper, PageTitle, PageLeader } from "../components/styled"
import SEO from "../components/seo"
// import { Flex } from "@chakra-ui/core"

const Contact = ( ) => { 
  return (
    <Layout>
      <SEO
        title="Contact Me"
        description="Looking for a developer? Hit me up!"
      />
      <PageLeader>
        <PageWrapper>
          <PageTitle>Contact</PageTitle>
        </PageWrapper>
      </PageLeader>
      <PageWrapper>
        <ContactForm />
      </PageWrapper>
    </Layout>
  )
}

export default Contact
 