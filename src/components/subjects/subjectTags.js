import React from "react" 
import _ from "lodash"
import { Flex, Text } from "@chakra-ui/core"
import { useStaticQuery, Link, graphql } from "gatsby"

const SubjectTags = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___subject) {
          fieldValue
          totalCount
        }
      }
    }
  `)

  return (
    <Flex justifyContent={"space-around"} flexWrap={"wrap"} mb={4}>
      {data.allMarkdownRemark.group.map(tag => (
        <Link key={tag.fieldValue} to={`/subjects/${_.kebabCase(tag.fieldValue)}`}>
          <Text mr={4}>
            {tag.fieldValue} {tag.totalCount}{" "}
          </Text>
        </Link>
      ))}
    </Flex>
  )
}

export default SubjectTags
