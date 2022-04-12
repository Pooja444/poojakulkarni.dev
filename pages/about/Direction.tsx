import { Box, Typography } from "@mui/material"

function Direction(props: {polygon: string, height?: string, width?: string, marginLeft: string, marginTop: string, text: string, textMarginLeft: string, textMarginTop?: string, textRotate ?: string}) {
    const defaultHeight: string = "8vh"
    const defaultWidth: string = "18vw"
    const defaultTextMarginTop = "0vw"
    const defaultTextRotate = "rotate(0deg)"
    const scale: string = "scale(1.2)"
    return <Box sx={{
        height: props.height == undefined ? defaultHeight: props.height,
        width: props.width == undefined ? defaultWidth : props.width,
        clipPath: props.polygon,
        backgroundColor: "#9DE3CB",
        marginLeft: props.marginLeft,
        marginTop: props.marginTop,
        position: "absolute" as "absolute",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }}> 
        <Typography sx={{
            marginLeft: props.textMarginLeft,
            fontSize: "25px",
            transform: props.textRotate == undefined ? defaultTextRotate : props.textRotate,
            marginTop: props.textMarginTop == undefined ? defaultTextMarginTop : props.textMarginTop,
            ":hover": {
                transform: props.textRotate == undefined ? `${defaultTextRotate} ${scale}` : `${props.textRotate} ${scale}`,
                transition: "all 0.2s ease-in-out 0.1s",
            }
        }} color="secondary.main">
            {props.text}
        </Typography>
    </Box>
}

export default Direction