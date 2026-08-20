import { Button } from "@/components/ui/button"
import { socials } from "@/lib/content"
import { Github, Linkedin } from "@/components/brand-icons"
import { Code2, Mail } from "lucide-react"

const footerLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Projetos", href: "#projetos" },
  { label: "Skills", href: "#skills" },
  { label: "Contato", href: "#contato" },
]

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <a href="#inicio" className="inline-flex items-center gap-2 font-semibold tracking-tight">
            <span className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <img src="/icon0.svg" alt="Logo" />
            </span>
            <span>Victor Barbosa</span>
          </a>

          <nav aria-label="Rodapé" className="flex flex-wrap items-center gap-1">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-1">
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
            <Button
              variant="ghost"
              size="icon"
              nativeButton={false}
              aria-label="Email"
              render={<a href={`mailto:${socials.email}`} />}
            >
              <Mail aria-hidden="true" />
            </Button>
          </div>
        </div>

        <p className="border-t border-border pt-6 text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Victor Barbosa. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
