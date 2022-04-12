import { Box, Button, Typography } from "@mui/material"

interface DirectionProps {
    link: string,
    polygon: string,
    bgColor: string,
    height?: string,
    width?: string,
    marginLeft: string,
    marginTop: string,
    text: string,
    textMarginLeft: string,
    textMarginTop?: string,
    textRotate?: string
}

const defaults = {
    height: "7vh",
    width: "225.2px",
    textMarginTop: "0vh",
    textRotate: "rotate(0deg)",
    scale: "scale(1.15)"
}

function Direction(props: DirectionProps) {

    return <Box sx={{
        height: props.height == undefined ? defaults.height : props.height,
        width: props.width == undefined ? defaults.width : props.width,
        clipPath: props.polygon,
        backgroundColor: props.bgColor,
        marginLeft: props.marginLeft,
        marginTop: props.marginTop,
        position: "absolute" as "absolute",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }}>
        <Button href={`/${props.link}`} sx={{
            textTransform: "none",
            width: props.width == undefined ? defaults.width : props.width
        }}>
            <Typography sx={{
                marginLeft: props.textMarginLeft,
                fontSize: "1.25rem",
                transform: props.textRotate == undefined ? defaults.textRotate : props.textRotate,
                marginTop: props.textMarginTop == undefined ? defaults.textMarginTop : props.textMarginTop,
                ":hover": {
                    transform: props.textRotate == undefined ? `${defaults.textRotate} ${defaults.scale}` : `${props.textRotate} ${defaults.scale}`,
                    transition: "all 0.2s ease-in-out 0.1s",
                }
            }} color="white">
                {props.text}
            </Typography>
        </Button>
    </Box>
}

export default Direction