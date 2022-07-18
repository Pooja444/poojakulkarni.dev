import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { getViewport } from '../../util/util'
import NavBar from '../navbar'

function Contact() {
  const [viewport, setViewport] = useState(5)
  const [cardWidth, setCardWidth] = useState(0)
  const [cardHeight, setCardHeight] = useState(0)
  const [cardMarginTop, setCardMarginTop] = useState(0)
  const [cardTitleFontSize, setCardTitleFontSize] = useState(2.4)
  const [cardSubTitleFontSize, setCardSubTitleFontSize] = useState(1)
  const [cardGaps, setCardGaps] = useState(20)
  const [iconDimensions, setIconDimensions] = useState(0)

  useEffect(() => {
    (async () => {
      const viewport = await getViewport()
      setViewport(viewport)
      const viewWidth = window.outerWidth
      const viewHeight = window.outerHeight
      if (viewWidth > viewHeight) {
        setCardWidth(0.5 * viewWidth)
        setCardHeight(0.45 * viewHeight)
      } else {
        setCardWidth(0.85 * viewWidth)
        setCardHeight(0.35 * viewHeight)
      }
    })()
  }, [])

  useEffect(() => {
    console.log(viewport)
    switch (viewport) {
      case 1:
        setCardMarginTop(60)
        setCardTitleFontSize(1.6)
        setCardSubTitleFontSize(0.8)
        setCardGaps(10)
        setIconDimensions(20)
        break
      case 2:
        setCardMarginTop(50)
        setCardTitleFontSize(1.8)
        setCardSubTitleFontSize(0.9)
        setCardGaps(15)
        setIconDimensions(22)
        break
      case 3:
        setCardMarginTop(40)
        setCardTitleFontSize(2)
        setCardSubTitleFontSize(0.9)
        setCardGaps(15)
        setIconDimensions(22)
        break
      case 4:
        setCardMarginTop(30)
        setCardTitleFontSize(2.2)
        setCardSubTitleFontSize(1)
        setCardGaps(20)
        setIconDimensions(26)
        break
      case 5:
        setCardMarginTop(20)
        setCardTitleFontSize(2.4)
        setCardSubTitleFontSize(1)
        setCardGaps(20)
        setIconDimensions(28)
        break
    }
  }, [viewport])

  return (
    <Box>
      <NavBar></NavBar>
      <Box sx={{
        mt: "90px",
        width: "100%",
        display: "flex",
        justifyContent: "center"
      }}>
        <Typography sx={{
          fontSize: "30px",
          mt: "30px",
          mb: "30px"
        }}>
          Let's start a conversation!
        </Typography>
      </Box>
      <Box sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center"
      }}>
        <Box sx={{
          width: `${cardWidth}px`,
          height: `${cardHeight}px`,
          border: "0.05rem solid #D8D8D8",
          boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
          background: "#15819D1F",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          mt: `${cardMarginTop}px`
        }}>
          <Typography fontSize={cardTitleFontSize + "rem"}>
            POOJA KULKARNI
          </Typography>
          <Typography fontSize={cardSubTitleFontSize + "rem"} sx={{ mt: `${cardGaps}px` }}>
            <Link href="https://mailto@poojakulkarni562@gmail.com" passHref>
              <a target="_blank">poojakulkarni562@gmail.com</a>
            </Link>
            <span style={{ padding: `${cardGaps / 2}px` }}>|</span> San Francisco, California
          </Typography>
          <Box sx={{
            display: "flex",
            flexFlow: "row wrap",
            justifyContent: "center",
            width: "80%",
            mt: `${cardGaps}px`
          }}>
            <Box sx={{ padding: `${cardGaps}px` }}>
              <Link href="https://www.linkedin.com/in/poojakulkarni562/" passHref>
                <a target="_blank">
                  <Image src="/contact/social-media-icons/linkedin.png"
                    width={iconDimensions + "px"}
                    height={iconDimensions + "px"}
                  ></Image>
                </a>
              </Link>
            </Box>
            <Box sx={{ padding: `${cardGaps}px` }}>
              <Link href="https://www.facebook.com/pooja.kulkarni.18400/" passHref>
                <a target="_blank">
                  <Image src="/contact/social-media-icons/facebook.png"
                    width={iconDimensions + "px"}
                    height={iconDimensions + "px"}
                  ></Image>
                </a>
              </Link>
            </Box>
            <Box sx={{ padding: `${cardGaps}px` }}>
              <Link href="https://www.instagram.com/the.happy.soul444/" passHref>
                <a target="_blank">
                  <Image src="/contact/social-media-icons/instagram.png"
                    width={iconDimensions + "px"}
                    height={iconDimensions + "px"}
                  ></Image>
                </a>
              </Link>
            </Box>
            <Box sx={{ padding: `${cardGaps}px` }}>
              <Link href="https://medium.com/@poojakulkarni562" passHref>
                <a target="_blank">
                  <Image src="/contact/social-media-icons/medium.png"
                    width={iconDimensions + "px"}
                    height={iconDimensions + "px"}
                  ></Image>
                </a>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Contact