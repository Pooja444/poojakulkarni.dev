import type { NextPage } from 'next'
import NavBar from '../navbar'
import { Box } from '@mui/system'
import Image from 'next/image'
import { Typography } from '@mui/material'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { getViewport } from '../../util/util'

const Blogs: NextPage = () => {

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
        mt: "110px",
        border: "0.05rem solid #217070",
        borderRadius: "15px",
        ml: `${sideMargins}vw`,
        mr: `${sideMargins}vw`,
        padding: "16px"
      }}>
        <Typography sx={{
          fontSize: "1.2rem",
          textAlign: "center"
        }}>
          Hey there! So sorry, but this page is still in progress. Meanwhile, you can check out the blogs I have written on <a href="https://medium.com/@poojakulkarni562" target="_blank" rel="noreferrer" style={{ color: "blue", cursor: "pointer" }}><u>medium</u></a>
        </Typography>
      </Box>
      <Box sx={{
        mt: "50px",
        textAlign: "center",
      }}>
        <Image src="/blogs/coming-soon-sign.jpg" width="400" height="250" alt={'coming-soon-sign'}></Image>
        <Link
          href="https://www.freepik.com/free-vector/coming-soon-construction-illustration-design_13732339.htm#query=under%20construction&position=2&from_view=keyword"
          passHref
          target="_blank"
          rel="noreferrer">

          <Typography fontSize="10px">
            <u>Author credit</u>
          </Typography>

        </Link>
      </Box>
    </Box>
  );
}

export default Blogs