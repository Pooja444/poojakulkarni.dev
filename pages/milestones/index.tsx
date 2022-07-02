import type { NextPage } from 'next'
import NavBar from '../navbar'
import { Box, Typography } from '@mui/material'
import Road from './road'
import MilestoneBig from './milestoneBig'
import milestonesJson from './milestones.json'
import { getViewport } from "../../util/util";
import { useEffect, useState } from 'react'
import { MilestoneInfo } from './milestoneInfo'
import MilestoneSmall from './milestoneSmall'

const Milestones: NextPage = () => {

  const [milestones] = useState<MilestoneInfo[]>(milestonesJson as MilestoneInfo[])
  const [viewport, setViewport] = useState(5)
  const [roadLength, setRoadLength] = useState(0)

  useEffect(() => {
    (async () => {
      // xl and lg ==> left & right alignments
      // sm, md and xs ==> only right alignment
      const viewport = await getViewport()
      setViewport(viewport)
    })()
  }, [])

  useEffect(() => {
    let roadLengthFactor = 0
    switch(viewport) {
      case 1:
        roadLengthFactor = 35
        break
      case 2:
        roadLengthFactor = 24
        break
      case 3:
        roadLengthFactor = 19
        break
      case 4:
        roadLengthFactor = 19
        break
      case 5:
      default:
        roadLengthFactor = 23
    }
    setRoadLength(milestones.length * roadLengthFactor)
  }, [[], [milestones]])


  return (
    <Box>
      <NavBar></NavBar>
      <Box sx={{
        mt: "85px",
        textAlign: "center"
      }}>
        <Typography sx={{ fontSize: "2.3rem", paddingBottom: "30px" }}>
          My career milestones
        </Typography>
      </Box>
      <Box sx={{
        width: "100%",
        justifyContent: "center",
      }}>
        <Road
          length={roadLength}
          key="road"
          viewport={viewport}></Road>
        <Box>
          {
            milestones.filter(() => viewport == 4 || viewport == 5)
              .map((milestone, index) => (
                <MilestoneBig
                  id={index}
                  date={milestone.date}
                  alignment={index % 2 == 0 ? "right" : "left"}
                  title={milestone.title}
                  description={milestone.description}
                  key={index}
                ></MilestoneBig>
              ))
          }
          {
            milestones.filter(() => viewport == 1 || viewport == 2 || viewport == 3)
              .map((milestone, index) => (
                <MilestoneSmall
                  id={index}
                  date={milestone.date}
                  title={milestone.title}
                  description={milestone.description}
                  key={index}
                  viewport={viewport}
                ></MilestoneSmall>
              ))
          }
        </Box>
      </Box>
      {/*  TODO: Add a small car at the end of the road */}
    </Box>
  )
}

export default Milestones