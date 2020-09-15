import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { Flex, Box, Button, MenuItem, Collapse } from "@chakra-ui/core"
import { PageWrapper } from "../../styled"
import data from "../../../../content/data"

import Logo from "../../global/logo/logo"
import SiteNav from "./sitenav"

import "./header.scss"

const Header = ({ siteTitle, menuItems }) => {
  const [mobileOpen, setMobileOpen] = useState(false)
  return (
    <>
      <header
        style={{
          marginBottom: `1.45rem`,
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
            <Box d={{ base: "none", lg: "block" }}>
              <SiteNav menuItems={data.siteMenu} />
            </Box>
            <Box d={{ base: "block", lg: "none" }}>
              <Button
                aria-label={"Toggle Mobile Menu"}
                onClick={() => setMobileOpen(!mobileOpen)}
                variant="ghost"
                variantColor="black"
              >
                <svg
                  fill="black"
                  width="25px"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
              </Button>
            </Box>
          </Flex>
        </PageWrapper>
      </header>
      <Collapse
        isOpen={mobileOpen}
      >
        <PageWrapper>
          <Box w="100%">
            <ul
              style={{ listStyleType: "none", paddingLeft: 0, marginLeft: 0 }}
            >
              {data.siteMenu.map(props => (
                <li key={props.title}>
                  <Link to={props.link}>{props.title}</Link>
                </li>
              ))}
            </ul>
          </Box>
        </PageWrapper>
      </Collapse>
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
