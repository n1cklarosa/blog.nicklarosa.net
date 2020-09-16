import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { PageWrapper, PageLeader, PageTitle, TypeWriterCss } from "../../styled"
import variables from "../../../../content/variables"
import { Flex, Box, Text } from "@chakra-ui/core"
import Typewriter from "typewriter-effect"

// import { rhythm } from "../../../utils/typography"

const HomePageLeader = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile.jpg/" }) {
        childImageSharp {
          fluid(maxWidth: 250, maxHeight: 250, cropFocus: CENTER) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <PageLeader>
      <PageWrapper>
        <Flex flexWrap={{base:"wrap",md:"nowrap"}} className={"wrapper-bit"} alignItems={"top"} w={"100%"}>
          <Box w={{ base: "100%", md: "60%" }} pr={"40px"}>
            <TypeWriterCss>
              <Typewriter
                onInit={typewriter => {
                  typewriter
                    .pauseFor(1500)
                    .typeString("Lead Web Developer")
                    .pauseFor(300)
                    .deleteAll()
                    .typeString("Contract Wordprss")
                    .pauseFor(100)
                    .changeDeleteSpeed(25)
                    .deleteChars(2)
                    .typeString("ess Engineer")
                    .changeDeleteSpeed("natural")
                    .pauseFor(300)
                    .deleteAll()
                    .typeString(
                      "<strong>Javascript</strong> and <strong>React enthusiast"
                    )
                    .pauseFor(500)
                    .changeDeleteSpeed("natural")
                    .pauseFor(300)
                    .deleteAll()
                    .typeString(
                      "Remote Gatsby Consultant"
                    )
                    .pauseFor(500)
                    .changeDeleteSpeed(45)
                    .deleteChars(2)
                    .changeDeleteSpeed("natural")
                    .deleteAll()
                    .typeString("Remote Web Consultant")
                    .pauseFor(450)
                    .deleteAll()
                    .typeString("Creatve")
                    .pauseFor(300)
                    .changeDeleteSpeed(45)
                    .deleteChars(2)
                    .typeString("ive Technologist")
                    .pauseFor(500)
                    .changeDeleteSpeed("natural")
                    .deleteAll()
                    .typeString("Full Stack Developer")
                    .pauseFor(700)
                    .deleteAll()
                    .typeString(
                      "Senior Html/Css/Js Dev"
                    )
                    .start()
                }}
                options={{ cursor: "_", loop: true }}
              />
            </TypeWriterCss>
            <Text>A Web Developers Blog</Text>
          </Box>
          <Box w={{ base: "100%", md: "40%" }}>
            <Image
              fluid={data.avatar.childImageSharp.fluid}
              style={{
                marginBottom: 0,
                minWidth: 250,
                borderRadius: `100%`,
              }}
              imgStyle={{
                borderRadius: `50%`,
              }}
            />
          </Box>
        </Flex>
      </PageWrapper>
    </PageLeader>
  )
}

export default HomePageLeader
