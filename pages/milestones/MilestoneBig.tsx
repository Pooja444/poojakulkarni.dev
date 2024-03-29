import { Box, Typography } from "@mui/material";
import MilestoneInfo from "../../types/milestoneInfo";
import MilestoneText from "./MilestoneDisplay";

function MilestoneBig(props: MilestoneInfo) {
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "row",
        }}>
            {
                props.alignment == "left" &&
                <Box sx={{
                    flex: "2",
                    height: "120px",
                    mt: "20px",
                }}>
                    <MilestoneText
                        title={props.title}
                        description={props.description}
                        alignment={props.alignment}
                        key={"text" + props.id}
                    ></MilestoneText>
                </Box>
            }
            <Box sx={{ flex: "1", height: "120px" }}>
                <Box sx={{
                    position: "absolute" as "absolute",
                    left: props.alignment == "left" ? "41.5vw" : "53.2vw",
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
                    left: props.alignment == "left" ? "41.5vw" : "53.2vw",
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
            {
                props.alignment == "right" &&
                <Box sx={{
                    flex: "2",
                    height: "120px",
                    mt: "20px"
                }}>
                    <MilestoneText
                        title={props.title}
                        description={props.description}
                        alignment={props.alignment}
                        key={"text" + props.id}
                    ></MilestoneText>
                </Box>
            }
        </Box>
    )
}

export default MilestoneBig