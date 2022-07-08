import { Box, Typography } from "@mui/material"

function PlaceHeader(props: {placeName: string, midFlex: number, titleFontSize: number}) {
    return (
        <Box sx={{
            mt: "5px",
            mb: "5px",
            position: "relative",
            height: "10vh",
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
        }}>
            <Box sx={{
                flex: `${(10 - props.midFlex) / 2}`,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center"
            }}>
                <Box sx={{ height: "0.08rem", backgroundColor: "#76A1A4" }}></Box>
            </Box>
            <Box sx={{
                flex: `${props.midFlex}`,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center"
            }}>
                <Typography fontSize={props.titleFontSize + "rem"}>
                    {props.placeName}
                </Typography>
            </Box>
            <Box sx={{
                flex: `${(10 - props.midFlex) / 2}`,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center"
            }}>
                <Box sx={{ height: "0.08rem", backgroundColor: "#76A1A4" }}></Box>
            </Box>
        </Box>
    )
}

export default PlaceHeader