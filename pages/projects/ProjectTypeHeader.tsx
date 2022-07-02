import { Box, Typography } from "@mui/material"

function ProjectTypeHeader(props: {name: string, midFlex: number, projectHeaderIndex: number}) {
    return (
        <Box sx={{
            position: "relative",
            mt: props.projectHeaderIndex == 0 ? "100px" : "8vh",
            height: "10vh",
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
          }}>
            <Box sx={{
              flex: `${(10 - props.midFlex)/2}`,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center"
            }}>
              <Box sx={{ height: "0.08rem", backgroundColor: "#76A1A4" }}></Box>
            </Box>
            <Box sx={{
              flex: props.midFlex,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              border: "0.08rem solid #76A1A4",
              borderRadius: "12px",
              backgroundColor: "#FBF3E9"
            }}>
              <Typography fontSize="1.4rem">
                {props.name}
              </Typography>
            </Box>
            <Box sx={{
              flex: `${(10 - props.midFlex)/2}`,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center"
            }}>
              <Box sx={{ height: "0.08rem", backgroundColor: "#76A1A4" }}></Box>
            </Box>
          </Box>
    )
}

export default ProjectTypeHeader