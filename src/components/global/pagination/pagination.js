import React from "react"
import { Link } from "gatsby"
import { SimpleGrid, Box } from "@chakra-ui/core"

import style from "./pagination.module.css"

const Pagination = ({ pageContext }) => {
  const { previousPagePath, nextPagePath } = pageContext
  return (
    <SimpleGrid columns={[1, null, 2]} className={style.pagenav}>
      <Box className={style.pagenav__item}>
        {previousPagePath && <Link to={previousPagePath}>← Newer Posts</Link>}
      </Box>

      <Box className={style.pagenav__item}>
        {nextPagePath && <Link to={nextPagePath}>Older Posts →</Link>}
      </Box>
    </SimpleGrid>
  )
}

export default Pagination
