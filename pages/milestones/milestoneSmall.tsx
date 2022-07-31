import { Box, Typography } from "@mui/material"
import MilestoneInfo from "../../types/milestoneInfo";
import MilestoneText from "./MilestoneText";

function MilestoneSmall(props: MilestoneInfo & {viewport: number}) {
    let milestoneGap = 0
    switch(props.viewport) {
        case 1:
            milestoneGap = 180
            break
        case 2:
            milestoneGap = 120
            break
        case 3:
        default:
            milestoneGap = 100
    }
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "row",
            mb: `${milestoneGap}px`,
            ml: props.viewport == 1 ? "50px" : "70px"
        }}>
            <Box sx={{ flex: "1", height: "120px" }}>
                <Box sx={{
                    position: "absolute" as "absolute",
                    height: "45px",
                    width: "75px",
                    backgroundColor: "#FCC256",
                    borderRadius: "7vh 7vh 0vh 0vh",
                    textAlign: "center",
                    zIndex: 10
                }}>
                </Box>
                <Box sx={{
                    position: "absolute" as "absolute",
                    height: "120px",
                    width: "75px",
                    backgroundColor: "#ffffff",
                    boxShadow: "-3px 3px 12px #888888",
                    borderRadius: "7vh 7vh 1vh 1vh",
                    textAlign: "center",
                }}>
                    <Typography sx={{ fontSize: "19px", zIndex: 100, mt: "70%" }}>
                        {props.date}
                    </Typography>
                </Box>
            </Box>
            <Box sx={{
                flex: props.viewport == 1 ? "4" : "6",
                height: "120px"
            }}>
                <MilestoneText
                    title={props.title}
                    description={props.description}
                    key={"text" + props.id}
                ></MilestoneText>
            </Box>
        </Box>
    )
}

export default MilestoneSmall