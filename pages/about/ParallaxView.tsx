import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Parallax } from "react-parallax";
import { getViewport, Viewport } from "../../util/util";
import DirectionSign from "./DirectionSign";

/**
 * Parallax view source: https://codesandbox.io/embed/r0yEkozrw?view=preview
 */


const baseIntroImage = "about/intro-images/"
const parallax1 = "about/parallax-1.jpg";
const directionSignImage = "about/direction-sign-bg.png"


function ParallaxView() {

    const [storyMargin, setStoryMargins] = useState("5vwx")
    const [introHeight, setIntroHeight] = useState(100)
    const [introLeft, setIntroLeft] = useState(0)
    const [introPaddingLeft, setIntroPaddingLeft] = useState(0)
    const [introFontSize, setIntroFontSize] = useState(1)
    const [introDescrFontSize, setIntroDescrFontSize] = useState(1)
    const [introImage, setIntroImage] = useState("")
    const [introMaxBlur, setIntroMaxBlur] = useState(0)

    useEffect(() => {
        (async () => {
            const viewport = await getViewport()
            const viewportName = Viewport[viewport]
            setIntroImage(`${baseIntroImage}${viewportName}.jpg`)
            switch (viewport) {
                case 1:   // xs
                    setIntroHeight(90)
                    setIntroFontSize(3.5)
                    setIntroDescrFontSize(1.3)
                    setIntroMaxBlur(5)
                    break
                case 2:   // sm
                    setIntroHeight(90)
                    setIntroFontSize(4)
                    setIntroDescrFontSize(1.3)
                    setIntroLeft(10)
                    setIntroPaddingLeft(10)
                    setIntroMaxBlur(5)
                    break
                case 3:   // md
                    setIntroHeight(95)
                    setIntroLeft(16)
                    setIntroPaddingLeft(10)
                    setIntroFontSize(4.5)
                    setIntroDescrFontSize(1.5)
                    setIntroMaxBlur(3)
                    break
                case 4:   // lg
                    setIntroHeight(95)
                    setIntroLeft(36)
                    setIntroPaddingLeft(10)
                    setIntroFontSize(4.5)
                    setIntroDescrFontSize(1.5)
                    setIntroMaxBlur(1)
                    break
                case 5:   // xl
                    setIntroHeight(100)
                    setIntroLeft(36)
                    setIntroPaddingLeft(20)
                    setIntroFontSize(4.5)
                    setIntroDescrFontSize(1.5)
                    setIntroMaxBlur(1)
                    break
            }
            setStoryMargins(viewport < 3 ? "4vw" : "15vw")
        })()
    }, [])

    return (
        <Box>
            <Parallax bgImage={introImage} blur={{ min: -1, max: introMaxBlur }}>
                <Box style={{ height: `${introHeight}vh` }}>
                    <Box sx={{
                        background: "transparent",
                        pl: introPaddingLeft,
                        pt: 20,
                        position: "absolute" as "absolute",
                        top: "15%",
                        left: `${introLeft}%`,
                        textShadow: "4px 4px 10px #000000",
                        justifyContent: "center",
                        textAlign: "center" as "center",
                    }}>
                        <Typography sx={{ fontSize: `${introFontSize}rem`, color: "white" }}>
                            Pooja Kulkarni
                        </Typography>
                        <Typography sx={{ fontSize: `${introDescrFontSize}rem`, color: "white" }}>
                            Software Engineer. Traveler. Optimist. A Happy Soul.
                        </Typography>
                    </Box>
                </Box>
            </Parallax>
            <Box sx={{ textAlign: "center", pt: "30px", pb: "30px" }}>
                <Typography sx={{ fontSize: "2rem", paddingBottom: "30px" }}>
                    Who is Pooja Kulkarni?
                </Typography>
                <Box sx={{ fontSize: "1rem", ml: storyMargin, mr: storyMargin }}>
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
            <Parallax bgImage={parallax1}>
                <Box style={{ height: "45vh" }}></Box>
            </Parallax>
            <Box sx={{ textAlign: "center", pt: "20px" }}>
                <Typography sx={{
                    fontSize: "1.7rem",
                    marginLeft: { xs: '5vw', sm: '5vw', md: '0vw', lg: '0vw', xl: '0vw' },
                    marginRight: { xs: '5vw', sm: '5vw', md: '0vw', lg: '0vw', xl: '0vw' }
                }}>
                    Want to more about me? Where would you like to go next?
                </Typography>
                <Box sx={{
                    backgroundImage: `url('${directionSignImage}')`,
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
    )

}

export default ParallaxView