import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { PageWrapper, PageLeader, PageTitle, TypeWriterCss } from "../../styled"
import variables from "../../../../content/variables"
import { Flex, Box, Text } from "@chakra-ui/core"
import Typewriter from "typewriter-effect"
import Particles from "react-particles-js"

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
    <PageLeader style={{ position: "relative" }}>
      <Particles
        style={{ position: "absolute", left: 0, right: 0, top: 0, bottom: 0 }}
        className="snow"
        focusable="false"
        aria-hidden="true"
        params={{
          particles: {
            number: {
              value: 99,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: "#9bc4fd",
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#000",
              },
              polygon: {
                nb_sides: 10,
              },
              image: {
                width: 100,
                height: 100,
              },
            },
            opacity: {
              value: 0.5,
              random: false,
              anim: {
                enable: true,
                speed: 0.5,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 10,
              random: true,
              anim: {
                enable: true,
                speed: 0,
                size_min: 0,
                sync: false,
              },
            },
            line_linked: {
              enable: false,
              distance: 200,
              color: "#ffffff",
              opacity: 1,
              width: 2,
            },
            move: {
              enable: true,
              speed: 0.5,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: true,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: false,
                mode: "repulse",
              },
              onclick: {
                enable: false,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
        }}
      />
      <PageWrapper>
        <Flex
          flexWrap={{ base: "wrap", md: "nowrap" }}
          className={"wrapper-bit"}
          alignItems={"top"}
          w={"100%"}
        >
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
                    .typeString("Remote Gatsby Consultant")
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
                    .typeString("Senior Html/Css/Js Dev")
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
