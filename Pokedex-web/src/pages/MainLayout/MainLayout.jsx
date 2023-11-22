import { Box } from '@chakra-ui/react'

import { Outlet } from 'react-router-dom'
import { Navbar } from 'components'

function MainLayout() {
  return (
    <Box
    //   sx={{
    //     '& > *': {
    //       px: 'var(--paddingX)',
    //     },
    //   }}
    >
      <Navbar />

      <Box pt="headerH">
        <Outlet />
      </Box>
    </Box>
  )
}
export default MainLayout
