import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Dashboard } from "@/components/dashboard"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Ventures } from "@/components/ventures"
import { Skills } from "@/components/skills"
import { Contact } from "@/components/contact"

export default function Page() {
  return (
    <main className="min-h-screen relative grid-bg scanline bg-4d">
      {/* Vignette overlay */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] z-0" />
      <div className="mx-auto max-w-6xl px-6 py-12 lg:py-24 relative z-10">
        <div className="grid gap-24 lg:grid-cols-[300px_1fr] lg:gap-12">
          {/* Left Sidebar - Fixed on desktop */}
          <aside className="lg:sticky lg:top-24 lg:h-fit">
            <Hero />
          </aside>
          
          {/* Main Content */}
          <div className="space-y-24">
            <About />
            <Dashboard />
            <Experience />
            <Projects />
            <Ventures />
            <Skills />
            <Contact />
          </div>
        </div>
      </div>
    </main>
  )
}
