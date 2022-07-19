export interface ProjectType {
    key:  "personal" | "academic" | "openSourceContributions"
    heading: string
}

interface Project {
    title: string
    type: ProjectType
    description: string
    links: {
        title: string
        url: string
    }[]
    techStack: string[]
}

export default Project