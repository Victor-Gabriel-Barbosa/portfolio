"use client"

import { Button } from "@/components/ui/button"
import { MagicCard } from "@/components/ui/magic-card"
import { TechBadge } from "@/components/tech-badge"
import type { Project } from "@/lib/types"
import { Github } from "@/components/brand-icons"
import { ArrowUpRight, Star } from "lucide-react"

interface ProjectCardProps {
  project: Project
  onOpen: (project: Project) => void
}

export function ProjectCard({ project, onOpen }: Readonly<ProjectCardProps>) {
  return (
    <MagicCard
      gradientSize={350}
      gradientColor="var(--accent)"
      className="group flex h-full flex-col overflow-hidden p-0 transition-all duration-300 rounded-xl"
    >
      <button
        type="button"
        onClick={() => onOpen(project)}
        aria-label={`Ver detalhes do projeto ${project.title}`}
        className="relative aspect-16/10 w-full overflow-hidden bg-muted outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        <img
          src={project.image || "/placeholder.svg"}
          alt={`Preview da interface do projeto ${project.title}`}
          className="size-full object-contain transition-transform duration-500 ease-out group-hover:scale-105"
          loading="lazy"
        />
        {project.featured ? (
          <span className="absolute left-3 bottom-3 inline-flex items-center gap-1 rounded-full border border-primary/30 bg-background/80 px-2.5 py-1 text-xs font-medium text-primary backdrop-blur">
            <Star className="size-3 fill-current" aria-hidden="true" />
            Destaque
          </span>
        ) : null}
        <span className="absolute bottom-3 right-3 flex size-9 translate-y-2 items-center justify-center rounded-full bg-primary text-primary-foreground opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </span>
      </button>

      <div className="flex flex-1 flex-col gap-4 p-5">
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
            <span className="font-mono text-xs text-muted-foreground">{project.year}</span>
          </div>
          <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((tech) => (
            <TechBadge key={tech} label={tech} />
          ))}
          {project.technologies.length > 4 ? (
            <TechBadge label={`+${project.technologies.length - 4}`} />
          ) : null}
        </div>

        <div className="mt-auto flex items-center gap-2 pt-1">
          <Button size="sm" onClick={() => onOpen(project)}>
            Ver projeto
          </Button>
          <Button
            size="sm"
            variant="outline"
            nativeButton={false}
            render={<a href={project.githubUrl} target="_blank" rel="noopener noreferrer" />}
          >
            <Github data-icon="inline-start" aria-hidden="true" />
            Código
          </Button>
        </div>
      </div>
    </MagicCard>
  )
}
