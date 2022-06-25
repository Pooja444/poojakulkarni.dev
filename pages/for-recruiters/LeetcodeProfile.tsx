import { Box } from "@mui/system"
import { buildStyles, CircularProgressbar } from "react-circular-progressbar"
import { SubmissionType, SubmissionNum, UserResponse, Leetcode } from "./Leetcode"
import 'react-circular-progressbar/dist/styles.css';
import { LinearProgress, linearProgressClasses, Link, styled, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Image from "next/image";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5
}));

interface SubmissionDetails {
    count: number
    total: number
    percentage: number
    beats: number
}

function LeetcodeProfile(props: { data: Leetcode, sideMargins: number }) {

    const initialObject: SubmissionDetails = { count: 0, total: 0, percentage: 0, beats: 0 }
    const [allSubmissions, setAllSubmissions] = useState<SubmissionDetails>(initialObject)
    const [easySubmissions, setEasySubmissions] = useState<SubmissionDetails>(initialObject)
    const [mediumSubmissions, setMediumSubmissions] = useState<SubmissionDetails>(initialObject)
    const [hardSubmissions, setHardSubmissions] = useState<SubmissionDetails>(initialObject)

    useEffect(() => {
        let difficultyBeatsMap: Map<SubmissionType, number> = new Map<SubmissionType, number>()
        let totalQuestionsMap: Map<SubmissionType, number> = new Map<SubmissionType, number>()
        props.data.user.problemsSolvedBeatsStats.forEach(quesionType => {
            difficultyBeatsMap.set(quesionType.difficulty, quesionType.percentage)
        })
        props.data.questions.forEach(quesionType => {
            totalQuestionsMap.set(quesionType.difficulty, quesionType.count)
        })
        props.data.user.submitStats.acSubmissionNum.forEach(submission => {
            const totalQuestions: number = totalQuestionsMap.get(submission.difficulty) ?? 0
            const percentageSubmissions: number = (submission.count * 100) / totalQuestions
            let submissions: SubmissionDetails = {
                count: submission.count,
                total: totalQuestions,
                percentage: percentageSubmissions,
                beats: Math.round(difficultyBeatsMap.get(submission.difficulty) ?? 0)
            }
            switch (submission.difficulty) {
                case "All":
                    setAllSubmissions(submissions)
                    break
                case "Easy":
                    setEasySubmissions(submissions)
                    break
                case "Medium":
                    setMediumSubmissions(submissions)
                    break
                case "Hard":
                    setHardSubmissions(submissions)
                    break
                default: break
            }
        })
    }, [])

    return (
        <Box sx={{
            border: "0.1rem solid #EACDB3",
            borderRadius: "15px",
            mt: `${props.sideMargins}px`,
            mb: `${props.sideMargins}px`,
            p: "32px",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            backgroundColor: "#FBF3E9"
        }}>

            <Box
                sx={{
                    flex: 0.8,
                    display: "flex",
                    flexDirection: "row",
                    minWidth: "300px",
                    mt: "10px",
                    mb: "10px"
                }}
            >
                <Box sx={{ flex: 0.7 }}>
                    <Box component="div" sx={{
                        borderRadius: "0.5rem",
                        overflow: 'hidden',
                        width: "100px",
                        height: "100px"
                    }}
                    >
                        <Image src={props.data.user.profile.userAvatar} width={250} height={250}></Image><Link href="https://leetcode.com/poojakulkarni562/">
                        </Link>
                    </Box>
                </Box>
                <Box sx={{ flex: 1 }}>
                    <Typography fontSize="1.2rem">
                        Pooja Kulkarni
                    </Typography>
                    <Typography fontSize="0.8rem">
                        poojakulkarni562
                    </Typography>
                    <Typography fontSize="1.2rem" sx={{ mt: "16px" }}>
                        Rank {props.data.user.profile.ranking.toLocaleString()}
                    </Typography>
                </Box>
            </Box>
            <Box sx={{ flex: 0.7, minWidth: "300px", mt: "10px", mb: "10px" }}>
                <Box sx={{ mb: "20px", display: "flex", justifyContent: "center" }}>
                    <Typography fontSize="1.3rem">
                        Solved Problems
                    </Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Box sx={{
                        maxWidth: "110px",
                        maxHeight: "110px"
                    }}>
                        <CircularProgressbar
                            value={allSubmissions.percentage ?? 0}
                            text={`${allSubmissions.count ?? 0}`}
                            styles={buildStyles({
                                pathColor: 'rgb(255 161 22)',
                                textColor: 'rgb(255 161 22)'
                            })}
                        />
                    </Box>
                </Box>
            </Box>
            <Box sx={{ flex: 1.5, minWidth: "300px", mt: "10px", mb: "10px" }}>
                <Box sx={{ m: "16px" }}>
                    <Box sx={{ display: "flex" }}>
                        <Typography sx={{ flex: 1 }}>Easy</Typography>
                        <Typography sx={{ flex: 1 }}>{easySubmissions.count}/{easySubmissions.total}</Typography>
                        <Typography sx={{ flex: 1 }}>Beats {easySubmissions.beats}%</Typography>
                    </Box>
                    <BorderLinearProgress
                        variant="determinate"
                        value={easySubmissions.percentage ?? 0}
                        sx={{
                            backgroundColor: "rgba(44,187,93,.25)",
                            [`& .${linearProgressClasses.bar}`]: {
                                borderRadius: 5,
                                backgroundColor: "rgb(0 184 163)"
                            }
                        }}
                    />
                </Box>
                <Box sx={{ m: "16px" }}>
                    <Box sx={{ display: "flex" }}>
                        <Typography sx={{ flex: 1 }}>Medium</Typography>
                        <Typography sx={{ flex: 1 }}>{mediumSubmissions.count}/{mediumSubmissions.total}</Typography>
                        <Typography sx={{ flex: 1 }}>Beats {mediumSubmissions.beats}%</Typography>
                    </Box>
                    <BorderLinearProgress
                        variant="determinate"
                        value={mediumSubmissions.percentage ?? 0}
                        sx={{
                            backgroundColor: "rgba(255,192,30,.25)",
                            [`& .${linearProgressClasses.bar}`]: {
                                borderRadius: 5,
                                backgroundColor: "rgb(255 192 30)"
                            }
                        }}
                    />
                </Box>
                <Box sx={{ m: "16px" }}>
                    <Box sx={{ display: "flex" }}>
                        <Typography sx={{ flex: 1 }}>Hard</Typography>
                        <Typography sx={{ flex: 1 }}>{hardSubmissions.count}/{hardSubmissions.total}</Typography>
                        <Typography sx={{ flex: 1 }}>Beats {hardSubmissions.beats}%</Typography>
                    </Box>
                    <BorderLinearProgress
                        variant="determinate"
                        value={hardSubmissions.percentage ?? 0}
                        sx={{
                            backgroundColor: "rgba(239,71,67,.25)",
                            [`& .${linearProgressClasses.bar}`]: {
                                borderRadius: 5,
                                backgroundColor: "rgba(239,71,67)"
                            }
                        }}
                    />
                </Box>
            </Box>
        </Box>
    )
}


export default LeetcodeProfile