"use client"

import { ProjectDetails } from "@/components/project-details"
import { ProjectGrid } from "@/components/project-grid"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { projects } from "@/lib/projects"
import type { Project } from "@/lib/types"
import { useState } from "react"

export function Projects() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const open = activeIndex !== null
  const activeProject: Project | null = activeIndex !== null ? projects[activeIndex] : null

  const handleOpen = (project: Project) => {
    setActiveIndex(projects.findIndex((p) => p.slug === project.slug))
  }

  const handlePrev = () => {
    setActiveIndex((current) =>
      current === null ? null : (current - 1 + projects.length) % projects.length,
    )
  }

  const handleNext = () => {
    setActiveIndex((current) => (current === null ? null : (current + 1) % projects.length))
  }

  return (
    <section id="projetos" className="border-y border-border bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <Reveal>
          <SectionHeading
            eyebrow="Portfólio"
            title="Projetos em destaque"
            description="Uma seleção de projetos que representam meu trabalho com desenvolvimento full stack. Clique em qualquer um para explorar o case study completo."
            className="mb-12 max-w-3xl"
          />
        </Reveal>

        <ProjectGrid projects={projects} onOpen={handleOpen} />
      </div>

      <ProjectDetails
        project={activeProject}
        open={open}
        onOpenChange={(next) => {
          if (!next) setActiveIndex(null)
        }}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  )
}
