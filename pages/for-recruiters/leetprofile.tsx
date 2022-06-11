interface SubmissionNum {
    difficulty: string
    count: number
    submissions: number
}

export interface UserResponse {
    isError: boolean
    error?: {
        errorCode: number
        errorMessage: string
    }
    userProfile: {
        username: string
        socialAccounts: string
        githubUrl: string
        contributions: {
            points: number,
            questionCount: number,
            testcaseCount: number,
        }[]
        profile: {
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
        submitStats: {
            acSubmissionNum: SubmissionNum[]
            totalSubmissionNum: SubmissionNum[]
        }
    }
}