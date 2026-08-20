import { Card } from "@/components/ui/card"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { highlights, stats } from "@/lib/content"
import { Check } from "lucide-react"

export function About() {
  return (
    <section id="sobre" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <Reveal className="flex flex-col gap-6">
          <SectionHeading
            eyebrow="Sobre mim"
            title="Transformando ideias em software bem construído"
            description="Tenho paixão por resolver problemas reais com tecnologia. Combino uma base sólida em Sistemas de Informação com a prática constante de desenvolvimento full stack para entregar produtos que unem boa experiência de uso e código de qualidade."
          />
          <p className="text-pretty leading-relaxed text-muted-foreground">
            Estou sempre estudando novas tecnologias, com interesse especial em aplicações web
            escaláveis e inteligência artificial. Gosto de escrever código limpo, pensar em
            arquitetura e cuidar dos detalhes de interface.
          </p>
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-sm font-medium">
                <span className="flex size-5 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Check className="size-3" aria-hidden="true" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120}>
          <Card className="relative overflow-hidden p-8">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-primary/10 blur-2xl"
            />
            <div className="relative flex flex-col gap-8">
              <p className="text-sm font-medium text-muted-foreground">Em números</p>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div key={stat.label} className="flex flex-col gap-1">
                    <span className="text-4xl font-semibold tracking-tight text-primary">
                      {stat.value}
                    </span>
                    <span className="text-sm leading-snug text-muted-foreground">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
              <div className="rounded-lg border border-border bg-secondary/40 p-4">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  <span className="font-medium text-foreground">Foco atual:</span> aprofundar em
                  arquitetura de aplicações, IA aplicada e boas práticas de engenharia de software.
                </p>
              </div>
            </div>
          </Card>
        </Reveal>
      </div>
    </section>
  )
}
