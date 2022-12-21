export type SubmissionType = "All" | "Easy" | "Medium" | "Hard"

export interface ErrorResponse {
    errorCode: number
    errorMessage: string
}

export interface Profile {
    realName: string
    websites: string[]
    countryName: string
    skillTags: string[]
    company: string
    school: string
    starRating: number
    aboutMe: string
    userAvatar: string
    ranking: number
}

export interface ProfileResponse {
    isError: boolean
    error?: ErrorResponse
    profile: Profile
}

export interface SubmissionNum {
    difficulty: SubmissionType
    count: number
    submissions: number
}

export interface AcSubmissionNum {
    acSubmissionNum: SubmissionNum[]
}

export interface SubmitStatsResponse {
    isError: boolean
    error?: ErrorResponse
    submitStats: AcSubmissionNum
}

export interface BeatsStats {
    difficulty: SubmissionType
    percentage: number
}

export interface ProblemsSolvedBeatsStatsResponse {
    isError: boolean
    error?: ErrorResponse
    problemsSolvedBeatsStats: BeatsStats[]
}

export interface User {
    username: string
    profile: Profile
    submitStats: AcSubmissionNum
    problemsSolvedBeatsStats: BeatsStats[]
}

export interface Questions {
    difficulty: SubmissionType
    count: number
}

export interface QuestionsResponse {
    isError: boolean
    error?: ErrorResponse
    questions: Questions[]
}

interface Leetcode {
    user: User
    questions: Questions[]
}

export default Leetcode