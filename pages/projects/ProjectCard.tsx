import { CardContent, Typography, CardActions, Button, Card, Chip } from "@mui/material"
import { Box } from "@mui/system"
import React from "react"
import { Project } from "./Project"

function ProjectCard(props: { project: Project }) {
    return (
        <Card sx={{
            border: "0.05rem solid rgba(0, 0, 0, 0.32)",
            boxShadow: "none"
        }}>
            <React.Fragment>
                <CardContent>
                    <Typography fontSize="1.4rem">
                        {props.project.title}
                    </Typography>
                    <Typography variant="body2" sx={{
                        textAlign: "justify",
                        mt: "15px",
                        mb: "10px"
                    }}>
                        {props.project.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    {props.project.links.map(link => (
                        <Button variant="contained" href={link.url} target="_blank" key={link.title} sx={{
                            backgroundColor: "#0DCBD7",
                            color: "white",
                            fontSize: "12px"
                        }}>
                            {link.title}
                        </Button>
                    ))}
                </CardActions>
                <Box sx={{
                    borderTop: "0.05rem solid rgba(0, 0, 0, 0.32)",
                    mt: "10px",
                    pt: "10px"
                }}>
                    {props.project.techStack.map(tech => (
                        <Chip key={tech} label={tech} size="small" sx={{ margin: "5px" }}></Chip>
                    ))}
                </Box>
            </React.Fragment>
        </Card>
    )
}

export default ProjectCard