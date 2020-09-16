import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import {
  Flex,
  Box,
  Button,
  Collapse,
  useColorMode,
  Switch,
} from "@chakra-ui/core"
import { PageWrapper, StyledBurger, StyledMenu } from "../../styled"
import data from "../../../../content/data"
import variables from "../../../../content/variables"

import Logo from "../../global/logo/logo"
import SiteNav from "./sitenav"

import "./header.scss"

const Header = ({ siteTitle, menuItems }) => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <>
      <header
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: "transparent",
          zIndex: 11,
        }}
      >
        <PageWrapper>
          <Flex py={2} alignItems={"center"} justifyContent={"space-between"}>
            <Box w={{ base: "120px", md: "145px", lg: "200px" }}>
              <Link
                to="/"
                style={{
                  color: `white`,
                  textDecoration: `none`,
                }}
              >
                <Logo />
              </Link>
              <h1 style={{ margin: 0 }}>
                <Link
                  to="/"
                  style={{
                    position: "absolute",
                    left: "-10000px",
                    top: "auto",
                    width: "1px",
                    height: "1px",
                    overflow: "hidden",
                  }}
                >
                  {siteTitle}
                </Link>
              </h1>
            </Box>
            <Flex d={{ base: "none", lg: "flex" }} alignItems={"center"}>
              <SiteNav menuItems={data.siteMenu} />
            </Flex>
            <Box d={{ base: "block", lg: "none" }}>
               
              <StyledBurger
                open={mobileOpen}
                aria-label={"Toggle Mobile Menu"}
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                <div />
                <div />
                <div />
              </StyledBurger>
            </Box>
          </Flex>
        </PageWrapper>
      </header>
      <StyledMenu  open={mobileOpen}>
        <ul style={{ listStyleType: "none", paddingLeft: 0, marginLeft: 0 }}>
          {data.siteMenu.map(props => (
            <li key={props.title}>
              <Link style={{fontFamily:variables.headingFont}} to={props.link}>{props.title}</Link>
            </li>
          ))}
        </ul>
      </StyledMenu>
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
