import { Code, Cpu, HardDrive, Shield, Wrench } from "lucide-react"

const skillCategories = [
  {
    title: "Languages & Frameworks",
    icon: Code,
    skills: [
      "TypeScript",
      "Python",
      "Rust",
      "Node.js",
      "Dart",
      "Next.js",
      "React",
      "Flutter",
      "Supabase",
    ],
  },
  {
    title: "Security & Infrastructure",
    icon: Shield,
    skills: [
      "Authentication Systems",
      "Access Control",
      "Physical Security (Grade B)",
      "STCW Maritime",
      "Linux/Ubuntu",
      "Network Edge Nodes",
      "Escrow & Logistics",
    ],
  },
  {
    title: "AI & Emerging Tech",
    icon: Cpu,
    skills: [
      "LLM Orchestration",
      "Qwen3 Models",
      "Origin Quantum Cloud",
      "Edge Computing",
      "5G Infrastructure",
      "NDVI/Drone Imaging",
      "Local AI Deployment",
    ],
  },
  {
    title: "Creative & Operations",
    icon: Wrench,
    skills: [
      "Live Sound (Soundcraft/JBL/Yamaha)",
      "SME Digital Enablement",
      "White-Label Platform Ops",
      "Podcast & Media",
      "Docker",
      "Wayland",
    ],
  },
]

const techStack = [
  { name: "TypeScript", level: 90 },
  { name: "Next.js", level: 85 },
  { name: "Python", level: 80 },
  { name: "Rust", level: 60 },
  { name: "Linux", level: 85 },
  { name: "React", level: 85 },
]

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 section-shell">
      <h2 className="section-heading">
        <Cpu className="h-4 w-4" />
        Technical Arsenal
      </h2>

      {/* Primary Stack with bars */}
      <div className="mb-8 space-y-3">
        {techStack.map((tech) => (
          <div key={tech.name} className="space-y-1">
            <div className="flex items-center justify-between text-sm">
              <span className="font-mono text-foreground">{tech.name}</span>
              <span className="font-mono text-primary text-xs">{tech.level}%</span>
            </div>
            <div className="h-2 w-full bg-secondary rounded-sm overflow-hidden">
              <div 
                className="h-full bg-primary transition-all duration-500"
                style={{ width: `${tech.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid gap-4 sm:grid-cols-2">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="panel-card p-6 transition-colors hover:border-primary/30"
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="panel-card-soft flex h-10 w-10 items-center justify-center">
                <category.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-mono text-sm font-semibold text-foreground uppercase tracking-[0.22em]">{category.title}</h3>
            </div>
            <ul className="space-y-2">
              {category.skills.map((skill) => (
                <li key={skill} className="flex items-center gap-2 text-sm leading-6 text-muted-foreground">
                  <span className="h-1 w-1 bg-primary rounded-full" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Hardware */}
      <div className="panel-card mt-8 p-6">
        <h3 className="mb-4 flex items-center gap-2 text-sm font-mono font-semibold uppercase tracking-[0.22em] text-foreground">
          <HardDrive className="h-4 w-4 text-primary" />
          Development Environment
        </h3>
        <div className="font-mono text-sm leading-7 text-muted-foreground space-y-1">
          <p><span className="text-primary">SYSTEM:</span> HP ProDesk 600 G3 MT</p>
          <p><span className="text-primary">OS:</span> Linux/Ubuntu | Kernel 6.17 | Wayland</p>
          <p><span className="text-primary">PURPOSE:</span> Infrastructure efficiency & local AI model deployment</p>
        </div>
      </div>
    </section>
  )
}
