import NavBar from '../navbar'
import { Box, Typography } from '@mui/material'
import TechnicalSkills from './technicalSkills'
import { useEffect, useState } from 'react';
import Skills from '../../types/skills';
import skillsJson from './skills.json'
import { getViewport } from '../../util/util';
import LeetcodeProfile from './LeetcodeProfile';
import Leetcode from '../../types/Leetcode';
import { Questions, QuestionsResponse, User, UserResponse } from '../../types/Leetcode';
import Link from 'next/link';

function ForRecruiters(props: { data: Leetcode }) {

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
        width: "100vw",
        backgroundColor: "#427F8F",
        pt: "85px",
        pb: "15px",
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
          Hey there, I am so glad you&apos;re here! If you&apos;re a <b>recruiter</b>, you have landed on the perfect page. If not, you can anyway check out my profile here! :) This is where I showcase my profile, my skills and my overall experience! Go ahead and find out if I am a match for any Software Engineer position you&apos;re looking to fill :D
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
          fontSize: "1.3rem",
          textAlign: "center"
        }}>
          Want to have a better picture of my profile? Have a look at my resume!
        </Typography>
      </Box>
      <Box sx={{ textAlign: "center", mt: "20px", mb: "20px" }}>
        <pre>
          <Box sx={{ fontSize: "1.8rem", mb: "20px" }}>
            {"<"}Resume{" />"}
          </Box>
        </pre>
      </Box>
      <Box sx={{
        ml: `${sideMargins}vw`,
        mr: `${sideMargins}vw`,
        mt: "40px",
        mb: "40px",
      }}>
        <embed src="for-recruiters/Resume.pdf#toolbar=1" type="application/pdf" width="100%" height="600px" />
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
          fontSize: "1.2rem",
          textAlign: "center"
        }}>
          <i>&quot;It is a truth universally acknowledged, that a software engineer in possession of a good leetcode profile, must be in want of a job.&quot;</i> (Yeah I am a Jane Austen fan!)
          <hr />
          FYI, these are <u>real-time leetcode stats</u>, generated by a <u><a style={{ color: "blue" }} href="https://github.com/Pooja444/leetcode-profile-lib">project</a></u> I worked on, to extract leetcode public profile data using GraphQL
        </Typography>
      </Box>
      <Box sx={{ textAlign: "center", mt: "20px", mb: "20px" }}>
        <pre>
          <Box sx={{ fontSize: "1.8rem", mb: "20px" }}>
            {"<"}Leetcode{" />"}
          </Box>
        </pre>
      </Box>
      <Box sx={{
        ml: `${sideMargins}vw`,
        mr: `${sideMargins}vw`,
        mt: "40px",
        mb: "20px",
      }}>
        <LeetcodeProfile data={props.data} sideMargins={sideMargins}></LeetcodeProfile>
      </Box>
      <Box sx={{
        ml: `${sideMargins}vw`,
        mr: `${sideMargins}vw`,
        mb: "40px",
        display: "flex",
        justifyContent: "center"
      }}>
        <Typography>
          <Link href="https://leetcode.com/poojakulkarni562/" passHref>
            <a target="_blank" rel="noreferrer" style={{ color: "blue", cursor: "pointer" }}><u>View full leetcode profile</u></a>
          </Link>
        </Typography>
      </Box>
      <Box sx={{ textAlign: "center", mt: "40px", mb: "20px" }}>
        <pre>
          <Box sx={{ fontSize: "1.8rem", mb: "20px" }}>
            {"<"}Projects{" />"}
          </Box>
        </pre>
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
          fontSize: "1.2rem",
          textAlign: "center"
        }}>
          Want to have a look at all my projects? Checkout my <Link href="/projects"><span style={{color: "blue"}}><u>projects</u></span></Link> section or take a look at my <u><a style={{ color: "blue" }} href="https://github.com/Pooja444" target="_blank" rel="noreferrer">Github profile</a></u> for a more detailed view!
        </Typography>
      </Box>
    </Box>
  )
}

export const getServerSideProps = async () => {
  const userData = await fetch('https://leetprofileserver.herokuapp.com/profile/poojakulkarni562')
  const questionsData = await fetch('https://leetprofileserver.herokuapp.com/questions')
  const userResponse: UserResponse = (await userData.json()) as UserResponse
  const questionsResponse: QuestionsResponse = (await questionsData.json()) as QuestionsResponse
  const user: User = userResponse.userProfile
  const questions: Questions[] = questionsResponse.questions
  const data: Leetcode = {
    user: user,
    questions: questions
  }

  return {
    props: { data }
  }
}

export default ForRecruiters