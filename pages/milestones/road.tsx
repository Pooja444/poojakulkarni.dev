import { Box } from "@mui/material"

interface RoadProps {
    length: number
}

function Road(props: RoadProps) {
    return (
        <Box sx={{
            width: "100%",
            margin: "auto"
        }}>
            <Box sx={{
                position: "absolute" as "absolute",
                height: `${props.length - 6 ?? 94}vh`,
                width: `0.15vw`,
                borderRadius: "10px 10px 10px 10px",
                left: "50.2vw",
                mt: "3vh",
                mb: "3vh",
                background: "repeating-linear-gradient(to bottom, white 0, white 50px, transparent 50px, transparent 70px)",
                zIndex: 9
            }}></Box>
            <Box sx={{
                position: "absolute",
                height: `${props.length ?? 100}vh`,
                width: `65px`,
                left: "48vw",
                backgroundColor: "#B4C2CC",
                borderRadius: "10px 10px 10px 10px"
            }}></Box>
        </Box>
    )
}

export default Road