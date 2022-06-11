import { Box } from "@mui/system"
import { buildStyles, CircularProgressbar } from "react-circular-progressbar"
import { SubmissionType, SubmissionNum, UserResponse } from "./leetprofile"
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
}

function LeetcodeProfile(props: { data: UserResponse }) {

    const initialObject: SubmissionDetails = { count: 0, total: 0, percentage: 0 }
    const [allSubmissions, setAllSubmissions] = useState<SubmissionDetails>(initialObject)
    const [easySubmissions, setEasySubmissions] = useState<SubmissionDetails>(initialObject)
    const [mediumSubmissions, setMediumSubmissions] = useState<SubmissionDetails>(initialObject)
    const [hardSubmissions, setHardSubmissions] = useState<SubmissionDetails>(initialObject)

    useEffect(() => {
        props.data.userProfile.submitStats.acSubmissionNum.forEach(submission => {
            const percentageSubmissions: number = (submission.count * 100) / submission.submissions
            switch (submission.difficulty) {
                case "All":
                    setAllSubmissions({ count: submission.count, total: submission.submissions, percentage: percentageSubmissions })
                    break
                case "Easy":
                    setEasySubmissions({ count: submission.count, total: submission.submissions, percentage: percentageSubmissions })
                    break
                case "Medium":
                    setMediumSubmissions({ count: submission.count, total: submission.submissions, percentage: percentageSubmissions })
                    break
                case "Hard":
                    setHardSubmissions({ count: submission.count, total: submission.submissions, percentage: percentageSubmissions })
                    break
                default: break
            }
        })
    }, [])

    return (
        <Box sx={{
            border: "0.15rem solid #EACDB3",
            borderRadius: "15px",
            mt: "40px",
            mb: "40px",
            p: "16px",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            // backgroundColor: "#E3F6F8",
            // color: "white"
        }}>

            <Box
                sx={{
                    flex: 1.5,
                    display: "flex",
                    flexDirection: "row"
                }}
            >
                <Box sx={{ flex: 0.7 }}>
                    <Box component="div" sx={{
                        borderRadius: "0.5rem",
                        overflow: 'hidden',
                        width: "100px", height:
                            "100px"
                    }}
                    >
                        <Link href="https://leetcode.com/poojakulkarni562/">
                            <Image src={props.data.userProfile.profile.userAvatar} width={100} height={100}></Image>
                        </Link>
                    </Box>
                </Box>
                <Box sx={{
                    flex: "1"
                }}>
                    <Typography fontSize="1.2rem">
                        <a href="https://leetcode.com/poojakulkarni562/">Pooja Kulkarni</a>
                    </Typography>
                    <Typography fontSize="0.8rem">
                        poojakulkarni562
                    </Typography>
                </Box>
            </Box>
            <Box sx={{ flex: 1 }}>
                <Box sx={{ mb: "20px" }}>
                    <Typography>
                        Solved Problems
                    </Typography>
                </Box>
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
            <Box sx={{ flex: 3 }}>
                <Box sx={{ m: "16px" }}>
                    <Typography>
                        Easy <Box component="span" sx={{ pl: "40px" }}>
                            {easySubmissions.count}/{easySubmissions.total}
                        </Box>
                    </Typography>
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
                    <Typography>
                        Medium <Box component="span" sx={{ pl: "40px" }}>
                            {mediumSubmissions.count}/{mediumSubmissions.total}
                        </Box>
                    </Typography>
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
                    <Typography>
                        Hard <Box component="span" sx={{ pl: "40px" }}>
                            {hardSubmissions.count}/{hardSubmissions.total}
                        </Box>
                    </Typography>
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