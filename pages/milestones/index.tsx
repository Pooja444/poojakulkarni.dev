import type { NextPage } from 'next'
import NavBar from '../navbar'
import { Box, Typography } from '@mui/material'
import Road from './road'
import Milestone, { MilestoneInfo } from './milestone'
import milestonesJson from './milestones.json'
import { useState } from 'react'

const Milestones: NextPage = () => {

  const [milestones] = useState<MilestoneInfo[]>(milestonesJson as MilestoneInfo[])

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
        justifyContent: "center",
      }}>
        <Road length={milestones.length * 23} key="road"></Road>
        <Box>
          {milestones.map((milestone, index) => (
            <Milestone
              id={index}
              date={milestone.date}
              alignment={index % 2 == 0 ? "right" : "left"}
              title={milestone.title}
              description={milestone.description}
              key={milestone.id}
            ></Milestone>
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default Milestones