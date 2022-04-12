import { Box } from "@mui/material"
import { useState, useEffect } from "react"
import { getViewport } from "../../util/util"
import Direction from "./Direction"

function DirectionSign() {

    const [scale, setScale] = useState("1")
    
    useEffect(() => {
        const viewport = async () => {
            const data = await getViewport()
            setScale(data < 3 ? "0.9": "1")
        }
        viewport()
    }, [])

    return <Box sx={{
        marginTop: "5vh",
        height: "65vh",
        width: "8.64px",
        marginLeft: "48%",
        backgroundColor: "#D9A07E",
        borderRadius: "5px 5px 0px 0px",
        border: "0.5px solid #9E745C",
        filter: "drop-shadow(2px 2px 3px rgba(50, 50, 0, 0.4))",
        transform: `scale(${scale})`
    }}>
        <Direction
            link="milestones"
            polygon="polygon(0% 0%, 85% 0%, 96% 50%, 85% 100%, 0% 100%)"
            bgColor="#337A6C"
            marginLeft="-14.4px"
            marginTop="1.5vh"
            text="Milestones"
            textMarginLeft="-15%"
            key="milestones"
            width="200px"
        ></Direction>
        <Direction
            link="travel"
            polygon="polygon(15% 0%, 100% 0%, 100% 100%, 15% 100%, 0% 50%)"
            bgColor="#3C8F7E"
            marginLeft="-162.72px"
            marginTop="9.5vh"
            text="Travel"
            textMarginLeft="15%"
            width="187.2px"
            key="travel"
        ></Direction>
        <Direction
            link="for-recruiters"
            polygon="polygon(0% 50%, 75% 32%, 90% 50%, 80% 75%, 3% 97%)"
            bgColor="#43A18E"
            height="16vh"
            marginLeft="-21.6px"
            marginTop="10vh"
            text="For Recruiters"
            textMarginLeft="-15%"
            textMarginTop="4vh"
            textRotate="rotate(-7deg)"
            key="for-recruiters"
        ></Direction>
        <Direction
            link="projects-hobbies"
            polygon="polygon(10% 0%, 100% 32%, 97% 96%, 10% 64%, 0% 30%)"
            bgColor="#4BB39E"
            height="12vh"
            marginLeft="-196px"
            marginTop="23vh"
            text="Projects/Hobbies"
            textMarginLeft="5%"
            textRotate="rotate(6deg)"
            textMarginTop="-1vh"
            width="220.8px"
            key="projects-hobbies"
        ></Direction>
        <Direction
            link="blogs"
            polygon="polygon(0% 0%, 85% 0%, 96% 50%, 85% 100%, 0% 100%)"
            bgColor="#52C4AE"
            marginLeft="-14.4px"
            marginTop="35vh"
            text="Blogs"
            textMarginLeft="-15%"
            width="172.8px"
            key="blogs"
        ></Direction>
        <Direction
            link="contact"
            polygon="polygon(12% 0%, 100% 0%, 100% 100%, 12% 100%, 0% 50%)"
            bgColor="#58D1B9"
            marginLeft="-191.52px"
            marginTop="43vh"
            text="Contact Me"
            textMarginLeft="15%"
            width="216px"
            key="contact-me"
        ></Direction>
    </Box>
}

export default DirectionSign