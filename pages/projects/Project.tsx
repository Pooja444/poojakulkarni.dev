export interface ProjectType {
    key:  "personal" | "academic" | "openSourceContributions"
    heading: string
}

export interface Project {
    title: string
    type: ProjectType
    description: string
    links: {
        title: string
        url: string
    }[]
    techStack: string[]
}