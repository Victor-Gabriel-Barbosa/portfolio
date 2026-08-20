import { Button } from "@/components/ui/button"
import { CodeWindow } from "@/components/code-window"
import { Meteors } from "@/components/ui/meteors"
import { TypingAnimation } from "@/components/ui/typing-animation"
import { Backlight } from "@/components/ui/backlight"
import { Reveal } from "@/components/reveal"
import { socials } from "@/lib/content"
import { Github, Linkedin } from "@/components/brand-icons"
import { ArrowDown, ArrowRight, Sparkles } from "lucide-react"

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_0%,color-mix(in_oklch,var(--primary)_12%,transparent),transparent)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-0 h-128 overflow-hidden mask-[linear-gradient(to_bottom,black,transparent)]"
      >
        <Meteors
          number={18}
          minDelay={0.2}
          maxDelay={2.4}
          minDuration={3}
          maxDuration={7}
          angle={215}
          className="bg-primary shadow-[0_0_0_1px_color-mix(in_oklch,var(--primary)_20%,transparent)]"
        />
      </div>
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-12 px-4 pb-8 pt-28 sm:px-6 lg:flex-row lg:items-center lg:gap-8 lg:pb-12 lg:pt-36">
        <div className="flex max-w-2xl flex-col items-start gap-6 lg:flex-1">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-sm font-medium text-muted-foreground">
              <Sparkles className="size-3.5 text-primary" aria-hidden="true" />
              Desenvolvedor Full Stack em formação
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="text-balance font-semibold leading-[1.1] tracking-tight text-4xl sm:text-5xl lg:text-6xl">
              Transformando <br /> ideias em <br />
              <TypingAnimation
                words={["produtos.", "código.", "experiências.", "soluções."]}
                pauseDelay={2000}
                loop
                className="text-primary leading-0"
              />
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
              Sou estudante de Sistemas de Informação e desenvolvedor focado em criar
              aplicações modernas, performáticas e escaláveis — do front-end à infraestrutura.
            </p>
          </Reveal>

          <Reveal delay={240} className="w-full">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button size="lg" nativeButton={false} render={<a href="#projetos" />}>
                Ver projetos
                <ArrowRight data-icon="inline-end" aria-hidden="true" />
              </Button>
              <Button size="lg" variant="outline" nativeButton={false} render={<a href="#contato" />}>
                Entrar em contato
              </Button>
              <div className="flex items-center gap-1 sm:ml-2">
                <Button
                  variant="ghost"
                  size="icon"
                  nativeButton={false}
                  aria-label="GitHub"
                  render={<a href={socials.github} target="_blank" rel="noopener noreferrer" />}
                >
                  <Github aria-hidden="true" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  nativeButton={false}
                  aria-label="LinkedIn"
                  render={<a href={socials.linkedin} target="_blank" rel="noopener noreferrer" />}
                >
                  <Linkedin aria-hidden="true" />
                </Button>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="w-full lg:flex-1">
          <Backlight>
            <div className="flex flex-col items-center gap-2">
              <img className="rounded-full border" src="/foto_perfil.jpg" alt="Foto perfil" width={250} />
              <CodeWindow />
            </div>
          </Backlight>
        </Reveal>
      </div>

      <div className="flex justify-center pb-10">
        <a
          href="#sobre"
          aria-label="Rolar para a seção sobre"
          className="flex flex-col items-center gap-1 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          Role para explorar
          <ArrowDown className="size-4 animate-scroll-hint" aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}
