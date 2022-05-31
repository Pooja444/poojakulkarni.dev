import type { NextPage } from 'next'
import NavBar from '../navbar'
import { Box, Typography } from '@mui/material'

const ForRecruiters: NextPage = () => {
  return (
    <Box>
      <NavBar></NavBar>
      <Box sx={{
        mt: "70px",
        textAlign: "center"
      }}>
        <Box sx={{
          width: "100vw",
          backgroundColor: "#427F8F",
          p: "15px"
        }}>
          <Typography fontSize="1.2rem" color="white">
            <b>Currently looking for roles:</b>
            <Box component="span" sx={{
              ml: "10px"
            }}>
              Software Engineer II (Full-Stack/Backend/API Development/Distributed Systems)
            </Box>
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default ForRecruiters