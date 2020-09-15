import React from "react"
import { Box, Heading } from "@chakra-ui/core"

export const Repostory = ({ repo }) => {
  return (
    <Box p={2} mb={4} w={{ sm: "100%", lg: "50%" }}>
      <div>
        <a
          href={`https://github.com${repo.resourcePath}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Heading as={"h2"} size={"sm"} wordBreak={{base:"break-word", md:"normal"}}>
            {repo.name}
          </Heading>
        </a>
      </div>
      <div>{repo.description || "this repo didn't have any description"}</div>
    </Box>
  )
}

export default Repostory
