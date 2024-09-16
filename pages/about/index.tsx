import NavBar from '../navbar'
import { Box, Typography } from '@mui/material'
import { useState, useEffect } from 'react'
import { getViewport, Viewport } from '../../util/util'
import { Parallax } from 'react-parallax'
import DirectionSign from './DirectionSign'

/**
 * Parallax view source: https://codesandbox.io/embed/r0yEkozrw?view=preview
 */

interface ResponsiveSetting {
  storyMargin: string
  introHeight: number
  introLeft: number
  introPaddingLeft: number
  introFontSize: number
  introDescrFontSize: number
  introImage: string
  introMaxBlur: number
}


function About() {

  const [responsiveSetting, setResponsiveSetting] = useState<ResponsiveSetting>({
    storyMargin: "5vw",
    introHeight: 100,
    introLeft: 0,
    introPaddingLeft: 0,
    introFontSize: 1,
    introDescrFontSize: 1,
    introImage: "",
    introMaxBlur: 0
  })

  const [introImage, setIntroImage] = useState<string>(`about/intro-images/xl.jpg`)
  const [viewport, setViewport] = useState<number>(1)

  useEffect(() => {
    (async () => {
      const viewport = await getViewport()
      setViewport(viewport)
    })()
  }, [])

  useEffect(() => {
    let currentResponsiveSetting: ResponsiveSetting = {...responsiveSetting}
    const viewportName = Viewport[viewport]
    setIntroImage(`about/intro-images/${viewportName}.jpg`)
    switch (viewport) {
      case 1:   // xs
        currentResponsiveSetting.introHeight = 90
        currentResponsiveSetting.introFontSize = 3.5
        currentResponsiveSetting.introDescrFontSize = 1.3
        currentResponsiveSetting.introMaxBlur = 5
        break
      case 2:   // sm
        currentResponsiveSetting.introHeight = 90
        currentResponsiveSetting.introFontSize = 4
        currentResponsiveSetting.introDescrFontSize = 1.3
        currentResponsiveSetting.introLeft = 10
        currentResponsiveSetting.introPaddingLeft = 10
        currentResponsiveSetting.introMaxBlur = 5
        break
      case 3:   // md
        currentResponsiveSetting.introHeight = 95
        currentResponsiveSetting.introLeft = 16
        currentResponsiveSetting.introPaddingLeft = 10
        currentResponsiveSetting.introFontSize = 4.5
        currentResponsiveSetting.introDescrFontSize = 1.5
        currentResponsiveSetting.introMaxBlur = 3
        break
      case 4:   // lg
        currentResponsiveSetting.introHeight = 95
        currentResponsiveSetting.introLeft = 36
        currentResponsiveSetting.introPaddingLeft = 10
        currentResponsiveSetting.introFontSize = 4.5
        currentResponsiveSetting.introDescrFontSize = 1.5
        currentResponsiveSetting.introMaxBlur = 1
        break
      case 5:   // xl
        currentResponsiveSetting.introHeight = 100
        currentResponsiveSetting.introLeft = 36
        currentResponsiveSetting.introPaddingLeft = 20
        currentResponsiveSetting.introFontSize = 4.5
        currentResponsiveSetting.introDescrFontSize = 1.5
        currentResponsiveSetting.introMaxBlur = 1
        break
    }
    currentResponsiveSetting.storyMargin = viewport < 3 ? "4vw" : "15vw"
    setResponsiveSetting(currentResponsiveSetting)
  }, [viewport])

  return (
    <Box>
      <NavBar></NavBar>
      <Box>
        <Parallax bgImage={introImage} blur={{ min: -1, max: responsiveSetting.introMaxBlur }}>
          <Box style={{ height: `${responsiveSetting.introHeight}vh` }}>
            <Box sx={{
              background: "transparent",
              pl: responsiveSetting.introPaddingLeft,
              pt: 20,
              position: "absolute" as "absolute",
              top: "15%",
              left: `${responsiveSetting.introLeft}%`,
              textShadow: "4px 4px 10px #000000",
              justifyContent: "center",
              textAlign: "center" as "center",
            }}>
              <Typography sx={{ fontSize: `${responsiveSetting.introFontSize}rem`, color: "white" }}>
                Pooja Kulkarni
              </Typography>
              <Typography sx={{ fontSize: `${responsiveSetting.introDescrFontSize}rem`, color: "white" }}>
                Software Engineer. Traveler. Optimist. A Happy Soul.
              </Typography>
            </Box>
          </Box>
        </Parallax>
        <Box sx={{ textAlign: "center", pt: "30px", pb: "30px" }}>
          <Typography sx={{ fontSize: "2rem", paddingBottom: "30px" }}>
            Who is Pooja Kulkarni?
          </Typography>
          <Box sx={{
            fontSize: "1rem",
            ml: responsiveSetting.storyMargin,
            mr: responsiveSetting.storyMargin
          }}>
            <Typography sx={{
              display: { xs: 'none', sm: 'block', md: 'block', lg: 'block' },
              mb: "20px"
            }}>
              This is a question I have asked myself on many occasions. What is it that defines me? Do my ambitions or my dreams define me? Or does my journey leading up to them define me? I believe it&apos;s a bit of both. My ambitions and dreams drive me and the path I have taken toward achieving them has built me into the person I am today.
            </Typography>
            <Typography sx={{
              display: { xs: 'block', sm: 'none', md: 'none', lg: 'none' },
              mb: "20px"
            }}>
              This is a question I have asked myself on many occasions. I believe that, while my dreams and ambitions define me, the path I have taken toward achieving them has built me into the person I am today.
            </Typography>
            <Typography sx={{ mb: "20px" }}>
              I am a Software Engineer. I enjoy learning new technologies and experimenting with random project ideas. I have worked as a Software Development Engineer for 3+ years and I am now pursuing a Master&apos;s degree in Computer Science. For at least the foreseeable future, I imagine myself growing in this field until I outgrow it :D
            </Typography>
            <Typography sx={{ mb: "20px" }}>
              I have a fervent desire to travel the world. Cycling along the coasts of Hawaii, diving into the pristine waters of the Philippines or losing myself in the breathtaking beauty of the Amalfi coast is what I want to do in my life. And every passing moment, I make sure I am working hard enough so that I realize these dreams someday.
            </Typography>
            <Typography sx={{ mb: "20px" }}>
              Whenever I am not working on a project or planning my next big trip, you would often find me solving puzzles, shopping or reading a novel. Every person has tiny little hobbies and these are mine :)
            </Typography>
            <Typography sx={{ mb: "20px" }}>
              That&apos;s who I am. That&apos;s Pooja Kulkarni.
            </Typography>
          </Box>
        </Box>
        <Parallax bgImage="about/parallax-1.jpg">
          <Box style={{ height: "45vh" }}></Box>
        </Parallax>
        <Box sx={{ textAlign: "center", pt: "20px" }}>
          <Typography sx={{
            fontSize: "1.7rem",
            marginLeft: { xs: '5vw', sm: '5vw', md: '0vw', lg: '0vw', xl: '0vw' },
            marginRight: { xs: '5vw', sm: '5vw', md: '0vw', lg: '0vw', xl: '0vw' }
          }}>
            Want to know more about me? Where would you like to go next?
          </Typography>
          <Box sx={{
            backgroundImage: `url('about/direction-sign-bg.png')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            mt: "20px",
            mb: "30px",
            pt: "20px",
            pb: "20px",
          }}>
            <DirectionSign></DirectionSign>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default About