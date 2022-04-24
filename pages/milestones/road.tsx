import { Box } from "@mui/material"

interface RoadProps {
    length: string
    width: string
}

function Road(props: RoadProps) {
    return (
        <Box sx={{
            height: `${props.length ?? 100}vh`,
            width: `${props.width ?? 10}vw`,
            backgroundColor: "#B4C2CC",
            borderRadius: "10px 10px 10px 10px"
        }}></Box>
    )
}

export default Road