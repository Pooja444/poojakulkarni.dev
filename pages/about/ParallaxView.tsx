import { Box, Typography } from "@mui/material";
import React from "react";
import { Parallax } from "react-parallax";
import DirectionSign from "./DirectionSign";

/**
 * https://codesandbox.io/embed/r0yEkozrw?view=preview
 */

const styles = {
    insideStyles: {
        background: "transparent",
        padding: 20,
        position: "absolute" as "absolute",
        top: "40%",
        left: "44%",
        textShadow: "4px 4px 10px #000000",
        justifyContent: "center",
        textAlign: "center" as "center"
    }
};
const image1 = "about-main.jpg"
const image2 = "about-images/about-1.jpg";
const image3 = "https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5297440765001_5280261645001-vs.jpg?pubId=5104226627001&videoId=5280261645001";
const image4 = "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/empire-state-building-black-and-white-square-format-john-farnan.jpg";

function ParallaxView() {
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
                        <Typography sx={{
                            fontSize: "70px",
                            color: "white"
                        }}>
                            Pooja Kulkarni
                        </Typography>
                        <Typography sx={{
                            fontSize: "25px",
                            color: "white"
                        }}>
                            Software Engineer. Traveler. Optimist. Happy soul.
                        </Typography>
                    </Box>
                </Box>
            </Parallax>
            <Box sx={{
                textAlign: "center",
                paddingTop: "30px",
                paddingBottom: "30px"
            }}>
                <Typography sx={{ fontSize: "30px", paddingBottom: "30px" }}>
                    Who is Pooja Kulkarni?
                </Typography>
                <Typography sx={{
                    fontSize: "17px",
                    marginLeft: "15%",
                    marginRight: "15%"
                }}>
                    This is a question I have asked myself on many occasions. What is it that defines me? Do my ambitions or my dreams define me? Or does my journey leading up to them define me? I believe it's a bit of both. My ambitions and dreams drive me and the path I have taken toward achieving them has built me into the person I am today.
                    <br></br>
                    <br></br>
                    I am a Software Engineer. I enjoy learning new technologies and experimenting with random project ideas. I have worked as a Software Development Engineer for 3 years and I am now pursuing a Master's degree in Computer Science. For at least the foreseeable future, I imagine myself growing in this field until I outgrow it :D
                    <br></br>
                    <br></br>
                    I have a fervent desire to travel the world. Cycling along the coasts of Hawaii, diving into the pristine waters of the Philippines or losing myself in the breathtaking beauty of the Amalfi coast is what I want to do in my life. And every passing moment, I make sure I am working hard enough so that I realize these dreams someday.
                    <br></br>
                    <br></br>
                    Whenever I am not working on a project or planning my next big trip, you'd often find me solving puzzles, shopping or reading a novel. Every person has tiny little hobbies and these are mine :)
                    <br></br>
                    <br></br>
                    That's who I am. That's Pooja Kulkarni.
                </Typography>
            </Box>
            {/* <Parallax bgImage={image2} blur={{ min: -1, max: 3 }}> */}
            <Parallax bgImage={image2}>
                <Box style={{ height: "45vh" }}></Box>
            </Parallax>
            <Box sx={{
                height: "80vh",
                textAlign: "center",
                paddingTop: "30px"
            }}>
                <Typography sx={{ fontSize: "30px"}}>
                    Pick your path and get to know me better!
                </Typography>
                <DirectionSign></DirectionSign>
            </Box>
            <Parallax bgImage={image3} strength={-100}>
                <Box style={{ height: "30vh" }}></Box>
            </Parallax>
            <h2>| | |</h2>
            <Parallax
                bgImage={image4}
                strength={200}
                renderLayer={(percentage) => (
                    <Box>
                        <Box
                            style={{
                                position: "absolute",
                                background: `rgba(255, 125, 0, ${percentage * 1})`,
                                left: "50%",
                                top: "50%",
                                borderRadius: "50%",
                                transform: "translate(-50%,-50%)",
                                width: percentage * 500,
                                height: percentage * 500
                            }}
                        />
                    </Box>
                )}
            >
                <Box style={{ height: 500 }}>
                    <Box style={styles.insideStyles}>renderProp</Box>
                </Box>
            </Parallax>
        </Box>
    )

}

export default ParallaxView