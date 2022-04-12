import { Box } from "@mui/material"
import Direction from "./Direction"

function DirectionSign() {
    return <Box sx={{
        marginTop: "5vh",
        height: "60vh",
        width: "0.75vw",
        marginLeft: "48%",
        backgroundColor: "#D9A07E",
        borderRadius: "5px 5px 0px 0px",
        border: "0.5px solid #9E745C",
        filter: "drop-shadow(2px 2px 3px rgba(50, 50, 0, 0.4))"
    }}>
        <Direction
            polygon="polygon(0% 0%, 80% 0%, 100% 50%, 80% 100%, 0% 100%)"
            marginLeft="0.75vw"
            marginTop="2vh"
            text="Milestones"
            textMarginLeft="-15%"
        ></Direction>
        <Direction
            polygon="polygon(20% 0%, 100% 0%, 100% 100%, 20% 100%, 0% 50%)"
            marginLeft="-15.05vw"
            marginTop="12vh"
            text="Travel"
            textMarginLeft="15%"
            width="15vw"
        ></Direction>
        <Direction
            polygon="polygon(0% 50%, 75% 32%, 100% 45%, 80% 75%, 0% 100%)"
            height="18vh"
            marginLeft="0.75vw"
            marginTop="12vh"
            text="For Recruiters"
            textMarginLeft="-15%"
            textMarginTop="5vh"
            textRotate="rotate(-10deg)"
        ></Direction>
    </Box>
}

export default DirectionSign