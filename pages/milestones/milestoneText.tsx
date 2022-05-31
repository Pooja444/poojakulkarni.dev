import { Card, CardContent, Typography } from "@mui/material"
import { MilestoneInfo } from "./milestoneInfo"

function MilestoneText(props: Pick<MilestoneInfo, "title" | "description" | "alignment">) {
    return (
        <Card sx={{
            width: props.alignment == undefined ? "65vw" : "27.7vw",
            ml: props.alignment == undefined ? "2vw" : (props.alignment == "right" ? "26vw" : "13vw"),
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