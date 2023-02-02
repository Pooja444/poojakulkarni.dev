import { Card, CardContent, Typography } from "@mui/material"
import MilestoneInfo from "../../types/milestoneInfo"

function MilestoneText(props: Pick<MilestoneInfo, "title" | "description" | "alignment">) {
    return (
        <Card sx={{
            width: props.alignment == undefined ? "65vw" : "27.7vw",
            ml: props.alignment == undefined ? "5vw" : (props.alignment == "right" ? "27.2vw" : "11.5vw"),
            backgroundColor: "#FBF3E9"
            }}>
            <CardContent sx={{ padding: 0 }}>
                <Typography
                    sx={{
                        backgroundColor: "#57A8BD",
                        color: "white",
                        padding: "10px",
                        fontSize: "18px"
                    }}
                >
                    {props.title}
                </Typography>
                <Typography variant="body2" sx={{ padding: "10px" }}>
                    {props.description}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default MilestoneText