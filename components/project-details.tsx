"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog"
import { Separator } from "@/components/ui/separator"
import { TechBadge } from "@/components/tech-badge"
import type { Project } from "@/lib/types"
import { Github } from "@/components/brand-icons"
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Lightbulb,
  Star,
  Target,
  TrendingUp,
  Wrench,
} from "lucide-react"

interface ProjectDetailsProps {
  project: Project | null
  open: boolean
  onOpenChange: (open: boolean) => void
  onPrev: () => void
  onNext: () => void
}

function DetailBlock({
  icon: Icon,
  title,
  children,
}: Readonly<{
  icon: typeof Target
  title: string
  children: React.ReactNode
}>) {
  return (
    <div className="flex flex-col gap-3">
      <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
        <Icon className="size-4 text-primary" aria-hidden="true" />
        {title}
      </h4>
      {children}
    </div>
  )
}

function BulletList({ items }: Readonly<{ items: string[] }>) {
  return (
    <ul className="flex flex-col gap-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground">
          <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export function ProjectDetails({ project, open, onOpenChange, onPrev, onNext }: Readonly<ProjectDetailsProps>) {
  const [selectedShot, setSelectedShot] = useState<{ src: string; alt: string } | null>(null)

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton
        className="max-h-[92vh] w-full max-w-3xl gap-0 overflow-y-auto p-0 lg:max-w-4xl"
      >
        {project ? (
          <>
            <div className="relative aspect-video w-full overflow-hidden bg-muted">
              <img
                src={project.image || "/placeholder.svg"}
                alt={`Preview da aplicação ${project.title}`}
                className="size-full object-contain"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-linear-to-t from-card via-card/20 to-transparent"
              />
              {project.featured ? (
                <span className="absolute left-4 bottom-4 inline-flex items-center gap-1 rounded-full border border-primary/30 bg-background/80 px-2.5 py-1 text-xs font-medium text-primary backdrop-blur">
                  <Star className="size-3 fill-current" aria-hidden="true" />
                  Projeto em destaque
                </span>
              ) : null}
            </div>

            <div className="flex flex-col gap-8 p-6 sm:p-8">
              <header className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <DialogTitle className="text-2xl font-semibold tracking-tight sm:text-3xl">
                    {project.title}
                  </DialogTitle>
                  <span className="font-mono text-sm text-muted-foreground">{project.year}</span>
                </div>
                <DialogDescription className="text-base leading-relaxed">
                  {project.longDescription}
                </DialogDescription>
                <div className="flex flex-wrap gap-2 pt-1">
                  <Button size="sm" nativeButton={false} render={<a href={project.demoUrl} target="_blank" rel="noopener noreferrer" />}>
                    <ExternalLink data-icon="inline-start" aria-hidden="true" />
                    Ver demonstração
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    nativeButton={false}
                    render={<a href={project.githubUrl} target="_blank" rel="noopener noreferrer" />}
                  >
                    <Github data-icon="inline-start" aria-hidden="true" />
                    Ver código
                  </Button>
                </div>
              </header>

              <Separator />

              <DetailBlock icon={Target} title="Problema">
                <p className="text-sm leading-relaxed text-muted-foreground">{project.problem}</p>
              </DetailBlock>

              <DetailBlock icon={CheckCircle2} title="Principais funcionalidades">
                <BulletList items={project.features} />
              </DetailBlock>

              <div className="grid gap-8 sm:grid-cols-2">
                <DetailBlock icon={Wrench} title="Desafios técnicos">
                  <BulletList items={project.challenges} />
                </DetailBlock>
                <DetailBlock icon={Lightbulb} title="Soluções implementadas">
                  <BulletList items={project.solutions} />
                </DetailBlock>
              </div>

              <DetailBlock icon={TrendingUp} title="Resultados">
                <BulletList items={project.results} />
              </DetailBlock>

              <DetailBlock icon={Wrench} title="Tecnologias utilizadas">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <TechBadge key={tech} label={tech} />
                  ))}
                </div>
              </DetailBlock>

              <div className="flex flex-col gap-3">
                <h4 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                  Galeria
                </h4>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {project.gallery.map((shot) => (
                    <button
                      key={shot.src}
                      type="button"
                      aria-label={`Ampliar imagem: ${shot.alt}`}
                      onClick={() => setSelectedShot({ src: shot.src || "/placeholder.svg", alt: shot.alt })}
                      className="group overflow-hidden rounded-lg border border-border bg-muted text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <img
                        src={shot.src || "/placeholder.svg"}
                        alt={shot.alt}
                        className="aspect-4/3 size-full object-contain transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                    </button>
                  ))}
                </div>
              </div>

              <Separator />

              <nav
                aria-label="Navegação entre projetos"
                className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between"
              >
                <Button variant="ghost" onClick={onPrev}>
                  <ArrowLeft data-icon="inline-start" aria-hidden="true" />
                  Projeto anterior
                </Button>
                <Button variant="outline" onClick={() => onOpenChange(false)}>
                  Voltar para projetos
                </Button>
                <Button variant="ghost" onClick={onNext}>
                  Próximo projeto
                  <ArrowRight data-icon="inline-end" aria-hidden="true" />
                </Button>
              </nav>
            </div>
          </>
        ) : null}
      </DialogContent>
      </Dialog>

      <Dialog
        open={Boolean(selectedShot)}
        onOpenChange={(isOpen) => {
          if (!isOpen) setSelectedShot(null)
        }}
      >
        <DialogContent className="flex h-[92vh] w-[calc(100vw-2rem)] max-w-7xl items-center justify-center border-border/60 bg-background/95 p-4 backdrop-blur-xl sm:p-8">
          <DialogTitle className="sr-only">
            {selectedShot?.alt ?? "Imagem ampliada"}
          </DialogTitle>
          <DialogDescription className="sr-only">
            Visualização em tela cheia da imagem selecionada.
          </DialogDescription>
          {selectedShot ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={selectedShot.src}
              alt={selectedShot.alt}
              className="max-h-full max-w-full rounded-lg object-contain"
            />
          ) : null}
        </DialogContent>
      </Dialog>
    </>
  )
}
