import { Card } from "@/components/ui/card"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { TechBadge } from "@/components/tech-badge"
import { skillCategories } from "@/lib/content"
import { Database, Layers, Server, Wrench, Smartphone, CodeXml } from "lucide-react"

const categoryIcons: Record<string, typeof Layers> = {
  Frontend: Layers,
  "Backend & Dados": Server,
  Mobile: Smartphone,
  "Familiaridade adicional": CodeXml,
  "Banco de dados": Database,
  Ferramentas: Wrench,
}

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
      <Reveal>
        <SectionHeading
          eyebrow="Skills"
          title="Tecnologias que utilizo"
          description="Ferramentas e linguagens com as quais trabalho no dia a dia, organizadas por área de atuação."
          className="mb-12"
        />
      </Reveal>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, index) => {
          const Icon = categoryIcons[category.label] ?? Layers
          return (
            <Reveal key={category.label} delay={index * 80} className="flex">
              <Card className="flex w-full flex-col gap-4 p-6 transition-colors hover:border-primary/40">
                <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="text-base font-semibold">{category.label}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill) => (
                    <TechBadge key={skill} label={skill} />
                  ))}
                </div>
              </Card>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
