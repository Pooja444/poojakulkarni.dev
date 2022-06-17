export type SubmissionType = "All" | "Easy" | "Medium" | "Hard"

export interface ErrorResponse {
    errorCode: number
    errorMessage: string
}

export interface UserResponse {
    isError: boolean
    error?: ErrorResponse
    userProfile: User
}

export interface Contributions {
    points: number,
    questionCount: number,
    testcaseCount: number,
}

export interface Profile {
    realName: string
    websites: string[]
    countryName: string
    skillTags: string[],
    company: string
    school: string
    starRating: number
    aboutMe: string
    userAvatar: string
    reputation: number
    ranking: number
}

export interface SubmissionNum {
    difficulty: SubmissionType
    count: number
    submissions: number
}

export interface SubmitStats {
    acSubmissionNum: SubmissionNum[]
    totalSubmissionNum: SubmissionNum[]
}

export interface ProblemsSolvedBeatsStats {
    difficulty: SubmissionType
    percentage: number
}

export interface User {
    username: string
    socialAccounts: string
    githubUrl: string
    contributions: Contributions[]
    profile: Profile
    submitStats: SubmitStats
    problemsSolvedBeatsStats: ProblemsSolvedBeatsStats[]
}