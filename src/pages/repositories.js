import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout/layout"
import Repository from "../components/repositories/repository"
import { PageWrapper, Title } from "../components/styled"
import SEO from "../components/seo"
import { Flex } from "@chakra-ui/core"

const Repositories = ({ data }) => {
  const { name, avatarUrl, repositories } = data.githubData.data.viewer
  return (
    <Layout>
      <PageWrapper>
        <SEO
          title="Github Repositories"
          description="Some of my recent public work found on GitHUb.com"
        />
        <Title>GitHub Repositories</Title>
        <Flex wrap="wrap">
          {repositories.nodes
            .map((repo, index) => <Repository key={index} repo={repo} />)
            .reverse()}
        </Flex>
      </PageWrapper>
    </Layout>
  )
}

export default Repositories

export const gitHubQuery = graphql`
  {
    githubData {
      data {
        viewer {
          name
          avatarUrl
          repositories {
            nodes {
              name
              description
              homepageUrl
              resourcePath
              forkCount
              createdAt
              updatedAt
              languages {
                edges {
                  node {
                    name
                    color
                  }
                }
              }
              licenseInfo {
                name
              }
              stargazers {
                totalCount
              }
            }
          }
        }
      }
    }
  }
`
