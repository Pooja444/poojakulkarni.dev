import { Box } from "@mui/system"
import { buildStyles, CircularProgressbarWithChildren } from "react-circular-progressbar"
import { Questions, QuestionsResponse, SubmissionType, User, UserResponse } from "../../types/Leetcode"
import Leetcode from "../../types/Leetcode";
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgress, LinearProgress, linearProgressClasses, styled, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from 'next/link'

const BorderLinearProgress = styled(LinearProgress)(() => ({
    height: 10,
    borderRadius: 5
}));

interface SubmissionDetails {
    count: number
    total: number
    percentage: number
    beats: number
}

function LeetcodeProfile(props: { sideMargins: number }) {

    const [leetcodeData, setLeetcodeData] = useState<Leetcode>()
    const [isLoading, setLoading] = useState(false)
    const initialObject: SubmissionDetails = { count: 0, total: 0, percentage: 0, beats: 0 }
    const [allSubmissions, setAllSubmissions] = useState<SubmissionDetails>(initialObject)
    const [easySubmissions, setEasySubmissions] = useState<SubmissionDetails>(initialObject)
    const [mediumSubmissions, setMediumSubmissions] = useState<SubmissionDetails>(initialObject)
    const [hardSubmissions, setHardSubmissions] = useState<SubmissionDetails>(initialObject)
    const [totalSolved, setTotalSolved] = useState<string>()

    const handleSolvedProblemsMouseEnter = () => {
        setTotalSolved(Math.round(allSubmissions.percentage) + "%")
    }

    const handleSolvedProblemsMouseLeave = () => {
        setTotalSolved(`${allSubmissions.count}`)
    }

    useEffect(() => {
        (async () => {
            setLoading(true)
            const userData = await fetch('https://leetprofileserver.herokuapp.com/profile/poojakulkarni562')
            const questionsData = await fetch('https://leetprofileserver.herokuapp.com/questions')
            const userResponse: UserResponse = (await userData.json()) as UserResponse
            const questionsResponse: QuestionsResponse = (await questionsData.json()) as QuestionsResponse
            const user: User = userResponse.userProfile
            const questions: Questions[] = questionsResponse.questions
            const leetcodeData: Leetcode = {
                user: user,
                questions: questions
            }
            setLeetcodeData(leetcodeData)
            setLoading(false)
        })()
    }, [])

    useEffect(() => {
        let difficultyBeatsMap: Map<SubmissionType, number> = new Map<SubmissionType, number>()
        let totalQuestionsMap: Map<SubmissionType, number> = new Map<SubmissionType, number>()
        if (leetcodeData) {
            leetcodeData.user.problemsSolvedBeatsStats.forEach(quesionType => {
                difficultyBeatsMap.set(quesionType.difficulty, quesionType.percentage)
            })
            leetcodeData.questions.forEach(quesionType => {
                totalQuestionsMap.set(quesionType.difficulty, quesionType.count)
            })
            leetcodeData.user.submitStats.acSubmissionNum.forEach(submission => {
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
                        setTotalSolved(`${submissions.count}`)
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
        }
    }, [leetcodeData])

    return (
        <Box sx={{
            border: "0.075rem solid #EACDB3",
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
                    <Box sx={{
                        borderRadius: "0.5rem",
                        overflow: 'hidden',
                        width: "100px",
                        height: "100px"
                    }}
                    >
                        <Link href="https://leetcode.com/poojakulkarni562/" passHref>
                            <a target="_blank" rel="noreferrer">
                                <Image src={leetcodeData?.user.profile.userAvatar ?? "/"} width={250} height={250}></Image>
                            </a>
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
                        Rank {leetcodeData?.user.profile.ranking.toLocaleString()}
                    </Typography>
                </Box>
            </Box>
            <Box sx={{
                flex: 0.7,
                minWidth: "300px",
                mt: "10px",
                mb: "10px"
            }}>
                <Box sx={{
                    mb: "20px",
                    display: "flex",
                    justifyContent: "center"
                }}>
                    <Typography fontSize="1.3rem">
                        Solved Problems
                    </Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Box sx={{ maxWidth: "110px", maxHeight: "110px" }}
                        onMouseEnter={handleSolvedProblemsMouseEnter}
                        onMouseLeave={handleSolvedProblemsMouseLeave}
                    >
                        {!isLoading &&
                            <CircularProgressbarWithChildren
                                value={allSubmissions.percentage ?? 0}
                                text={`${totalSolved}`}
                                styles={buildStyles({
                                    pathColor: 'rgb(255 161 22)',
                                    textColor: 'rgb(255 161 22)'
                                })}
                                strokeWidth={5}
                            >
                                <Typography sx={{ marginTop: "45px" }} fontSize="0.8rem">
                                    Solved
                                </Typography>
                            </CircularProgressbarWithChildren>
                        }
                        {
                            isLoading &&
                            <CircularProgress color="success" />
                        }
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
                        variant={isLoading ? 'indeterminate' : 'determinate'}
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
                        variant={isLoading ? 'indeterminate' : 'determinate'}
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
                        variant={isLoading ? 'indeterminate' : 'determinate'}
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