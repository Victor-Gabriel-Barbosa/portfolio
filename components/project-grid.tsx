"use client"

import { ProjectCard } from "@/components/project-card"
import { Reveal } from "@/components/reveal"
import type { Project } from "@/lib/types"

interface ProjectGridProps {
  projects: Project[]
  onOpen: (project: Project) => void
}

export function ProjectGrid({ projects, onOpen }: Readonly<ProjectGridProps>) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      {projects.map((project, index) => (
        <Reveal key={project.slug} delay={index * 80} className="flex">
          <div className="flex w-full">
            <ProjectCard project={project} onOpen={onOpen} />
          </div>
        </Reveal>
      ))}
    </div>
  )
}
