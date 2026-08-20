export interface ProjectImage {
  src: string
  alt: string
}

export interface Project {
  slug: string
  title: string
  description: string
  longDescription: string
  problem: string
  features: string[]
  technologies: string[]
  challenges: string[]
  solutions: string[]
  results: string[]
  image: string
  gallery: ProjectImage[]
  demoUrl: string
  githubUrl: string
  featured: boolean
  year: string
}

export interface SkillCategory {
  label: string
  skills: string[]
}

export interface TimelineItem {
  period: string
  title: string
  organization: string
  description: string
  type: "education" | "project" | "experience"
}
