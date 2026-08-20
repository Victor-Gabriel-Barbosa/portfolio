import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ContactForm } from "@/components/contact-form"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { Github, Linkedin } from "@/components/brand-icons"
import { socials } from "@/lib/content"
import { Mail } from "lucide-react"

export function Contact() {
  return (
    <section id="contato" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal className="flex flex-col gap-8">
          <SectionHeading
            eyebrow="Contato"
            title="Vamos construir algo juntos?"
            description="Estou aberto a oportunidades, projetos e colaborações. Envie uma mensagem ou fale comigo pelas redes — respondo o mais rápido possível."
          />

          <div className="flex flex-col gap-3">
            <Button
              variant="outline"
              size="lg"
              nativeButton={false}
              className="justify-start"
              render={<a href={`mailto:${socials.email}`} />}
            >
              <Mail data-icon="inline-start" aria-hidden="true" />
              {socials.email}
            </Button>
            <div className="flex flex-wrap gap-3">
              <Button
                variant="outline"
                size="lg"
                nativeButton={false}
                render={<a href={socials.linkedin} target="_blank" rel="noopener noreferrer" />}
              >
                <Linkedin data-icon="inline-start" aria-hidden="true" />
                LinkedIn
              </Button>
              <Button
                variant="outline"
                size="lg"
                nativeButton={false}
                render={<a href={socials.github} target="_blank" rel="noopener noreferrer" />}
              >
                <Github data-icon="inline-start" aria-hidden="true" />
                GitHub
              </Button>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <Card className="p-6 sm:p-8">
            <ContactForm />
          </Card>
        </Reveal>
      </div>
    </section>
  )
}
