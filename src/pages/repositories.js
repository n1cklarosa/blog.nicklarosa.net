import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/layout"
import Repository from "../components/repositories/repository"
import { PageWrapper, PageTitle, PageLeader } from "../components/styled"
import SEO from "../components/seo"
import { Flex } from "@chakra-ui/core"

const Repositories = ({ data }) => {
  const { repositories } = data.githubData.data.viewer
  console.log("here", repositories)
  return (
    <Layout>
      <SEO
        title="Github Repositories"
        description="Some of my recent public work found on GitHUb.com"
      />
      <PageLeader>
        <PageWrapper>
          <PageTitle>GitHub Repositories</PageTitle>
        </PageWrapper>
      </PageLeader>
      <PageWrapper>
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
