import type { NextPage } from 'next'
import NavBar from '../navbar'
import { Box, Typography } from '@mui/material'
import TechnicalSkills from './technicalSkills'
import { useEffect, useState } from 'react';
import { Skills } from './skills';
import skillsJson from './skills.json'
import { getViewport } from '../../util/util';

const ForRecruiters: NextPage = () => {

  const [skills] = useState<Skills>(skillsJson as Skills)
  const [sideMargins, setSideMargins] = useState(15)
  const [viewport, setViewport] = useState(5)

  useEffect(() => {
    (async () => {
        const viewport = await getViewport()
        setViewport(viewport)
    })()
}, [])

useEffect(() => {
    let sideMargins: number
    switch (viewport) {
        case 1:
            sideMargins = 5
            break
        case 2:
            sideMargins = 10
            break
        case 3:
            sideMargins = 10
            break
        case 4:
            sideMargins = 15
            break
        case 5:
        default:
            sideMargins = 15
            break
    }
    setSideMargins(sideMargins)
}, [viewport])

  return (
    <Box>
      <NavBar></NavBar>
      <Box sx={{
        mt: "70px",
        width: "100vw",
        backgroundColor: "#427F8F",
        p: "15px",
        textAlign: "center"
      }}
      >
        <Typography fontSize="1.2rem" color="white">
          {"<<< "}<b>Currently looking for roles:</b>
          <Box component="span" sx={{ ml: "10px" }}>
            Software Engineer II (Full-Stack/Backend/API Development/Distributed Systems) {" >>>"}
          </Box>
        </Typography>
      </Box>
      <Box sx={{
        border: "0.05rem solid #217070",
        borderRadius: "15px",
        ml: `${sideMargins}vw`,
        mr: `${sideMargins}vw`,
        mt: "40px",
        mb: "40px",
        padding: "16px"
      }}>
        <Typography sx={{
          fontSize: "1.1rem",
          textAlign: "center"
        }}>
          Hey there, I am so glad you're here! If you're a <b>recruiter</b>, you've landed on the perfect page. If not, you can anyway check out my profile here! :) This is where I showcase my profile, my skills and my overall experience! Go ahead and find out if I am a match for any Software Engineer position you're looking to fill :D
        </Typography>
      </Box>
      <Box sx={{ textAlign: "center", mt: "20px", mb: "20px" }}>
        <pre>
          <Box sx={{ fontSize: "1.8rem", mb: "20px" }}>
            {"<"}Technical Skills{" />"}
          </Box>
        </pre>
        <TechnicalSkills technicalSkills={skills.technicalSkills}></TechnicalSkills>
      </Box>
    </Box>
  )
}

export default ForRecruiters