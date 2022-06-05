import type { NextPage } from 'next'
import NavBar from '../navbar'
import { Box, Typography } from '@mui/material'
import TechnicalSkills from './technicalSkills'
import { useState } from 'react';
import { Skills } from './skills';
import skillsJson from './skills.json'

const ForRecruiters: NextPage = () => {

  const [skills] = useState<Skills>(skillsJson as Skills)

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
          <b>Currently looking for roles:</b>
          <Box component="span" sx={{ ml: "10px" }}>
            Software Engineer II (Full-Stack/Backend/API Development/Distributed Systems)
          </Box>
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