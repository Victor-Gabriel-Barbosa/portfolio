import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { timeline } from "@/lib/content"
import { cn } from "@/lib/utils"
import { GraduationCap, Layers, Rocket } from "lucide-react"

const typeConfig = {
  education: { icon: GraduationCap, label: "Formação" },
  experience: { icon: Layers, label: "Experiência" },
  project: { icon: Rocket, label: "Projeto" },
} as const

export function Experience() {
  return (
    <section id="experiencia" className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:py-28">
        <Reveal>
          <SectionHeading
            eyebrow="Trajetória"
            title="Experiência e formação"
            description="Minha jornada de aprendizado e os marcos mais relevantes até aqui."
            className="mb-12"
          />
        </Reveal>

        <ol className="relative flex flex-col">
          {timeline.map((item, index) => {
            const config = typeConfig[item.type]
            const Icon = config.icon
            const isLast = index === timeline.length - 1
            return (
              <Reveal key={`${item.title}-${index}`} as="li" delay={index * 80} className="relative flex gap-5 pb-10 last:pb-0">
                {!isLast ? (
                  <span
                    aria-hidden="true"
                    className="absolute left-5 top-11 h-[calc(100%-1rem)] w-px bg-border"
                  />
                ) : null}
                <span
                  className={cn(
                    "z-10 flex size-10 shrink-0 items-center justify-center rounded-full border border-border bg-card text-primary",
                  )}
                >
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <div className="flex flex-col gap-1.5 pt-1">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <span className="font-mono text-xs font-medium text-primary">{item.period}</span>
                    <span className="rounded-full bg-secondary px-2 py-0.5 text-xs text-secondary-foreground">
                      {config.label}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold">{item.title}</h3>
                  <p className="text-sm font-medium text-muted-foreground">{item.organization}</p>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              </Reveal>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
