import { Box } from "@mui/material"

interface RoadProps {
    length: number
    viewport: number
}

function Road(props: RoadProps) {
    return (
        <Box sx={{
            width: "100%",
            margin: "auto",
            display: "flex",
            justifyContent: (props.viewport == 4 || props.viewport == 5) ? "center" : "left",
            ml: (props.viewport == 4 || props.viewport == 5) ? 0 : "20px"
        }}>

            {/* Dotted line for xs, sm and md screens */}
            <Box sx={{
                display: (props.viewport == 4 || props.viewport == 5) ? "none" : "block",
                position: "absolute" as "absolute",
                height: `${props.length - 6 ?? 94}vh`,
                width: `0.15vw`,
                borderRadius: "10px 10px 10px 10px",
                mt: "3vh",
                mb: "3vh",
                left: "52px",
                background: "repeating-linear-gradient(to bottom, white 0, white 35px, transparent 35px, transparent 55px)",
                zIndex: 9
            }}></Box>

            {/* Dotted line for lg and xl screens */}
            <Box sx={{
                display: (props.viewport == 4 || props.viewport == 5) ? "block" : "none",
                position: "absolute" as "absolute",
                height: `${props.length - 6 ?? 94}vh`,
                width: `0.15vw`,
                borderRadius: "10px 10px 10px 10px",
                mt: "3vh",
                mb: "3vh",
                background: "repeating-linear-gradient(to bottom, white 0, white 35px, transparent 35px, transparent 55px)",
                zIndex: 9
            }}></Box>

            {/* Road */}
            <Box sx={{
                position: "absolute",
                height: `${props.length ?? 100}vh`,
                width: `65px`,
                backgroundColor: "#B4C2CC",
                borderRadius: "10px 10px 10px 10px"
            }}></Box>
        </Box>
    )
}

export default Road