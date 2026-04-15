import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Dashboard } from "@/components/dashboard"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Ventures } from "@/components/ventures"
import { Skills } from "@/components/skills"
import { Contact } from "@/components/contact"
import { GitHubProjects } from "@/components/github-projects"

export default function Page() {
  return (
    <main className="min-h-screen relative grid-bg scanline bg-4d">
      <div className="fixed inset-0 pointer-events-none bg-[rgba(3,7,4,0.28)] z-0" />
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.01)_0%,rgba(0,0,0,0.28)_100%)] z-0" />
      <div className="mx-auto max-w-6xl px-6 py-12 lg:py-24 relative z-10">
        <div className="grid gap-10 lg:grid-cols-[320px_1fr] lg:gap-10">
          {/* Left Sidebar - Fixed on desktop */}
          <aside className="lg:sticky lg:top-24 lg:h-fit">
            <Hero />
          </aside>
          
          {/* Main Content */}
          <div className="space-y-10">
            <About />
            <Dashboard />
            <Experience />
            <Projects />
            <GitHubProjects />
            <Ventures />
            <Skills />
            <Contact />
          </div>
        </div>
      </div>
    </main>
  )
}