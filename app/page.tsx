import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Dashboard } from "@/components/dashboard";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Ventures } from "@/components/ventures";
import { Skills } from "@/components/skills";
import { Contact } from "@/components/contact";
import { GitHubProjects } from "@/components/github-projects";
import { MobileNav } from "@/components/mobile-nav";

export default function Page() {
  return (
    <main className="min-h-screen relative grid-bg scanline bg-4d">
      <div className="fixed inset-0 pointer-events-none bg-[rgba(3,7,4,0.28)] z-0" />
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.01)_0%,rgba(0,0,0,0.28)_100%)] z-0" />
      <div className="mx-auto max-w-6xl px-6 py-6 lg:py-8 relative z-10 w-full">
        {/* Top Navigation Bar */}
        <header className="flex justify-between items-center mb-6 lg:mb-8">
          <div className="flex items-center gap-2">
            <span className="font-mono text-sm tracking-widest font-bold text-primary">
              CAMOSERVDEVOPS
            </span>
          </div>
          <MobileNav />
          {/* Desktop Navigation - Hidden on Mobile */}
          <nav className="hidden lg:flex gap-4">
            {[
              { label: 'About', href: '#about' },
              { label: 'Experience', href: '#experience' },
              { label: 'Projects', href: '#projects' },
              { label: 'Ventures', href: '#ventures' },
              { label: 'Skills', href: '#skills' },
              { label: 'Platform', href: '/platform' },
              { label: 'AV Explorer', href: '/av-explorer' },
              { label: 'Contact', href: '#contact' },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </header>
        
        <div className="space-y-8">
          <Hero />
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