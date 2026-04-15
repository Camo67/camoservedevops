import { ArrowUpRight, Award, Building2, Globe, Shield, Target, Users } from "lucide-react"
import Link from "next/link"

const ventures = [
  {
    title: "Technical Engineering & Consulting",
    description:
      "CamodevOps and 79Ratio: secure platform engineering, SME support, authentication, access control, data tracking, and Ubuntu/Linux edge infrastructure.",
    icon: Building2,
    link: "https://79ratio.com",
    status: "HQ",
  },
  {
    title: "Commercial Marketplaces",
    description:
      "Buddies Worldwide: peer-to-peer marketplace for South Africa's informal economy with escrow security and Paxi logistics integration.",
    icon: Globe,
    link: "#",
    status: "ACTIVE",
  },
  {
    title: "AI & Emerging Technology",
    description:
      "OpenClaw: local LLM orchestration with Agent Kyra, Origin Quantum Cloud exploration, and Cape FarmScan drone analytics for vineyards.",
    icon: Globe,
    link: "#",
    status: "DEV",
  },
  {
    title: "Community & Social Impact",
    description:
      "OCIU: Level 1 B-BBEE non-profit in Bonteheuwel focused on community empowerment and youth development. WeCreate delivers hands-on training in cloud computing, digital marketing, and video editing, guided by the motto “Each One Teach One.”",
    icon: Users,
    link: "#",
    status: "ACTIVE",
  },
  {
    title: "Specialized & White-Label Projects",
    description:
      "Managing 18+ white-label commerce and media platforms with practical security, income-aligned operations, and discrete delivery.",
    icon: Shield,
    link: "#",
    status: "ACTIVE",
  },
]

const achievements = [
  {
    title: "FNB App Academy Certification",
    year: "2025",
    description: "Full Stack Development - validated mastery of complete SDLC",
    progress: 100,
  },
  {
    title: "Security Certifications",
    year: "2019-2020",
    description: "Physical Security Grades D through B",
    progress: 100,
  },
  {
    title: "Maritime STCW",
    year: "2020-2024",
    description: "Emergency Response, Crowd Management, Fire Prevention, Personal Survival",
    progress: 100,
  },
  {
    title: "CompTIA Security+",
    year: "In Progress",
    description: "Formalizing transition into specialized cybersecurity and DevSecOps roles",
    progress: 50,
  },
]

const statusColors: Record<string, string> = {
  HQ: "bg-primary/20 text-primary",
  ACTIVE: "bg-primary/20 text-primary",
  DEV: "bg-yellow-500/20 text-yellow-400",
  LIVE: "bg-primary/20 text-primary",
}

export function Ventures() {
  return (
    <section id="ventures" className="scroll-mt-24">
      <h2 className="mb-8 flex items-center gap-3 text-sm font-mono uppercase tracking-widest text-primary">
        <Target className="h-4 w-4" />
        Business Pillars
      </h2>
      
      {/* Ventures Grid */}
      <div className="grid gap-4 sm:grid-cols-2">
        {ventures.map((venture) => (
          <Link
            key={venture.title}
            href={venture.link}
            target={venture.link.startsWith("http") ? "_blank" : undefined}
            rel={venture.link.startsWith("http") ? "noopener noreferrer" : undefined}
            className="group relative rounded-sm border border-primary/20 bg-card/50 p-6 transition-all hover:border-primary/50 hover:bg-primary/5 hud-bracket"
          >
            <div className="mb-4 flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-sm border border-primary/30 bg-primary/10">
                <venture.icon className="h-5 w-5 text-primary" />
              </div>
              <div className="flex items-center gap-2">
                <span className={`rounded-sm px-2 py-0.5 text-xs font-mono ${statusColors[venture.status]}`}>
                  {venture.status}
                </span>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
              </div>
            </div>
            <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
              {venture.title}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              {venture.description}
            </p>
          </Link>
        ))}
      </div>

      {/* Achievements & Certifications */}
      <div className="mt-16">
        <h3 className="mb-6 flex items-center gap-3 text-sm font-mono uppercase tracking-widest text-primary">
          <Shield className="h-4 w-4" />
          Certifications & Validation
        </h3>
        <div className="grid gap-4 sm:grid-cols-2">
          {achievements.map((achievement) => (
            <div
              key={achievement.title}
              className="rounded-sm border border-primary/20 bg-card/30 p-4"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4 text-primary" />
                  <h4 className="font-medium text-foreground text-sm">{achievement.title}</h4>
                </div>
                <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded-sm">
                  {achievement.year}
                </span>
              </div>
              <p className="text-xs text-muted-foreground mb-3">{achievement.description}</p>
              {/* Progress bar */}
              <div className="h-1 w-full bg-secondary rounded-full overflow-hidden">
                <div 
                  className="h-full bg-primary transition-all duration-500"
                  style={{ width: `${achievement.progress}%` }}
                />
              </div>
              <span className="text-xs font-mono text-primary mt-1 block text-right">{achievement.progress}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
