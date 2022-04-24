import type { NextPage } from 'next'
import NavBar from '../navbar'
import { Box, Typography } from '@mui/material'
import Road from './road'
import { Milestone } from './milestone'
import milestonesJson from './milestones.json'

const Milestones: NextPage = () => {

  const milestones: Milestone[] = milestonesJson as Milestone[]
  console.log(milestones)

  return (
    <Box>
      <NavBar></NavBar>
      <Box sx={{
        mt: "85px",
        textAlign: "center"
      }}>
        <Typography sx={{ fontSize: "2rem", paddingBottom: "30px" }}>
          My journey in a nutshell!
        </Typography>
      </Box>
      <Box sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}>
        <Road length={`${milestones.length * 25}`} width="4.5"></Road>
      </Box>
    </Box>
  )
}

export default Milestones