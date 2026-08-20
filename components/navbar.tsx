"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { Menu } from "lucide-react"
import { useEffect, useState } from "react"
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler"

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Projetos", href: "#projetos" },
  { label: "Skills", href: "#skills" },
  { label: "Contato", href: "#contato" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("inicio")
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12)
    }

    onScroll()

    window.addEventListener("scroll", onScroll, { passive: true })

    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visibleSection) {
          setActiveSection(visibleSection.target.id)
        }
      },
      {
        rootMargin: "-30% 0px -50% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    )

    sections.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => {
      window.removeEventListener("scroll", onScroll)
      observer.disconnect()
    }
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        scrolled
          ? "border-b border-border/60 bg-background/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav
        aria-label="Navegação principal"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6"
      >
        <a
          href="#inicio"
          className="group inline-flex items-center gap-2 rounded-md font-semibold tracking-tight outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <span className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
            <img src="/icon0.svg" alt="Logo" />
          </span>

          <span>Victor Barbosa</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const sectionId = link.href.replace("#", "")
            const isActive = activeSection === sectionId

            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    "rounded-md px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    isActive
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {link.label}
                </a>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-1.5">
          <AnimatedThemeToggler />

          <Button
            variant="default"
            size="sm"
            nativeButton={false}
            className="hidden sm:inline-flex"
            render={<a href="#contato" />}
          >
            Entre em contato
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden"
                  aria-label="Abrir menu"
                />
              }
            >
              <Menu aria-hidden="true" />
            </SheetTrigger>

            <SheetContent side="right" className="w-72 gap-0 p-6">
              <SheetTitle className="mb-2">Menu</SheetTitle>

              <ul className="flex flex-col gap-1">
                {navLinks.map((link) => {
                  const sectionId = link.href.replace("#", "")
                  const isActive = activeSection === sectionId

                  return (
                    <li key={link.href}>
                      <SheetClose
                        nativeButton={false}
                        render={
                          <a
                            href={link.href}
                            className={cn(
                              "block rounded-md px-3 py-2.5 text-base font-medium transition-colors",
                              isActive
                                ? "bg-primary/10 text-primary"
                                : "text-muted-foreground hover:bg-muted hover:text-foreground",
                            )}
                          />
                        }
                      >
                        {link.label}
                      </SheetClose>
                    </li>
                  )
                })}
              </ul>

              <SheetClose
                nativeButton={false}
                render={
                  <Button
                    className="mt-6 w-full"
                    size="lg"
                    nativeButton={false}
                    render={<a href="#contato" />}
                  />
                }
              >
                Entre em contato
              </SheetClose>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}
