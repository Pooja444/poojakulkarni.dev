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
        height: props.height ?? defaults.height,
        width: props.width ?? defaults.width,
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
            width: props.width ?? defaults.width
        }}>
            <Typography sx={{
                marginLeft: props.textMarginLeft,
                fontSize: "1.25rem",
                transform: props.textRotate ?? defaults.textRotate,
                marginTop: props.textMarginTop ?? defaults.textMarginTop,
                ":hover": {
                    transform: `${props.textRotate ?? defaults.textRotate} ${defaults.scale}`,
                    transition: "all 0.2s ease-in-out 0.1s",
                }
            }} color="white">
                {props.text}
            </Typography>
        </Button>
    </Box>
}


export default Direction