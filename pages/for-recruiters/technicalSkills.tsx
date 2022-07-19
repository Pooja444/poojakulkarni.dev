import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { getViewport } from "../../util/util"
import Skills from "../../types/skills"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface ResponsiveSetting {
    sideMargin: number
    skillFlexPercentage: number
}

function TechnicalSkills(props: Pick<Skills, "technicalSkills">) {

    const [responsiveSetting, setResponsiveSetting] = useState<ResponsiveSetting>({
        sideMargin: 15,
        skillFlexPercentage: 0
    })
    const [viewport, setViewport] = useState(5)

    useEffect(() => {
        (async () => {
            const viewport = await getViewport()
            setViewport(viewport)
        })()
    }, [])

    useEffect(() => {
        let responsiveSetting: ResponsiveSetting
        switch (viewport) {
            case 1:
                responsiveSetting = { sideMargin: 5, skillFlexPercentage: 21 }
                break
            case 2:
                responsiveSetting = { sideMargin: 10, skillFlexPercentage: 21 }
                break
            case 3:
                responsiveSetting = { sideMargin: 10, skillFlexPercentage: 10 }
                break
            case 4:
                responsiveSetting = { sideMargin: 15, skillFlexPercentage: 10 }
                break
            case 5:
            default:
                responsiveSetting = { sideMargin: 15, skillFlexPercentage: 0 }
                break
        }
        setResponsiveSetting(responsiveSetting)
    }, [viewport])

    return (
        <Box sx={{
            ml: `${responsiveSetting.sideMargin}vw`,
            mr: `${responsiveSetting.sideMargin}vw`,
        }}>
            {
                props.technicalSkills?.map((techSkill, index) => (
                    <Accordion disableGutters sx={{ boxShadow: "none" }} key={index}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            sx={{
                                backgroundColor: "#CFE7E9"
                            }}
                        >
                            <Typography
                                fontSize="1.1rem"
                            >{techSkill.skillName}</Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{
                            display: "flex",
                            justifyContent: "left",
                            flexDirection: "row",
                            flexWrap: "wrap",
                            padding: 0
                        }}>
                            {
                                techSkill.skillSet?.map((skill, index2) => (
                                    <Typography sx={{
                                        flex: `1 0 ${responsiveSetting.skillFlexPercentage}%`,
                                        border: "0.01rem solid #CFE7E9",
                                        pt: "10px",
                                        pb: "10px"
                                    }}
                                        key={index2}
                                    >{skill}</Typography>
                                ))
                            }
                        </AccordionDetails>
                    </Accordion>
                ))
            }
        </Box>
    )
}

export default TechnicalSkills