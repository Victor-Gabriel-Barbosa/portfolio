import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Projects } from "@/components/sections/projects"
import { Skills } from "@/components/sections/skills"
import { Experience } from "@/components/sections/experience"
import { Contact } from "@/components/sections/contact"

export default function Page() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
