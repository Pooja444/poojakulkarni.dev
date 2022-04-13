import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Parallax } from "react-parallax";
import { getViewport } from "../../util/util";
import DirectionSign from "./DirectionSign";

/**
 * Parallax view source: https://codesandbox.io/embed/r0yEkozrw?view=preview
 */

const image1 = "about/intro-image.jpg"
const image2 = "about/parallax-1.jpg";
const image3 = "about/direction-sign-bg.png"

function ParallaxView() {

    const [storyMargin, setStoryMargins] = useState("5vwx")

    useEffect(() => {
        (async () => {
            const data = await getViewport()
            setStoryMargins(data < 3 ? "4vw" : "15vw")
        })()
    }, [])

    return (
        <Box>
            <Parallax bgImage={image1}>
                <Box style={{ height: "100vh" }}>
                    <Box sx={{
                        background: "transparent",
                        padding: 20,
                        position: "absolute" as "absolute",
                        top: "15%",
                        left: "36%",
                        textShadow: "4px 4px 10px #000000",
                        justifyContent: "center",
                        textAlign: "center" as "center",
                    }}>
                        <Typography sx={{ fontSize: "70px", color: "white" }}>
                            Pooja Kulkarni
                        </Typography>
                        <Typography sx={{ fontSize: "25px", color: "white" }}>
                            Software Engineer. Traveler. Optimist. Happy soul.
                        </Typography>
                    </Box>
                </Box>
            </Parallax>
            <Box sx={{ textAlign: "center", pt: "30px", pb: "30px" }}>
                <Typography sx={{ fontSize: "2rem", paddingBottom: "30px" }}>
                    Who is Pooja Kulkarni?
                </Typography>
                <Typography sx={{ fontSize: "1rem", ml: storyMargin, mr: storyMargin }}>
                    <Typography sx={{
                        display: { xs: 'none', sm: 'block', md: 'block', lg: 'block' },
                        mb: "20px"
                    }}>
                        This is a question I have asked myself on many occasions. What is it that defines me? Do my ambitions or my dreams define me? Or does my journey leading up to them define me? I believe it's a bit of both. My ambitions and dreams drive me and the path I have taken toward achieving them has built me into the person I am today.
                    </Typography>
                    <Typography sx={{
                        display: { xs: 'block', sm: 'none', md: 'none', lg: 'none' },
                        mb: "20px"
                    }}>
                        This is a question I have asked myself on many occasions. I believe that, while my dreams and ambitions define me, the path I have taken toward achieving them has built me into the person I am today.
                    </Typography>
                    <Box component="p" sx={{ mb: "20px" }}>
                        I am a Software Engineer. I enjoy learning new technologies and experimenting with random project ideas. I have worked as a Software Development Engineer for 3 years and I am now pursuing a Master's degree in Computer Science. For at least the foreseeable future, I imagine myself growing in this field until I outgrow it :D
                    </Box>
                    <Box component="p" sx={{ mb: "20px" }}>
                        I have a fervent desire to travel the world. Cycling along the coasts of Hawaii, diving into the pristine waters of the Philippines or losing myself in the breathtaking beauty of the Amalfi coast is what I want to do in my life. And every passing moment, I make sure I am working hard enough so that I realize these dreams someday.
                    </Box>
                    <Box component="p" sx={{ mb: "20px" }}>
                        Whenever I am not working on a project or planning my next big trip, you'd often find me solving puzzles, shopping or reading a novel. Every person has tiny little hobbies and these are mine :)
                    </Box>
                    <Box component="p" sx={{ mb: "10px" }}>
                        That's who I am. That's Pooja Kulkarni.
                    </Box>
                </Typography>
            </Box>
            <Parallax bgImage={image2}>
                <Box style={{ height: "45vh" }}></Box>
            </Parallax>
            <Box sx={{ textAlign: "center", pt: "20px" }}>
                <Typography sx={{
                    fontSize: "1.7rem",
                    marginLeft: { xs: '5vw', sm: '5vw', md: '0vw', lg: '0vw', xl: '0vw' },
                    marginRight: { xs: '5vw', sm: '5vw', md: '0vw', lg: '0vw', xl: '0vw' }
                }}>
                    What would you like to know about me?
                </Typography>
                <Box sx={{
                    backgroundImage: `url('${image3}')`,
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