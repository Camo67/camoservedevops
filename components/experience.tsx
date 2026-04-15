import { ArrowUpRight, Briefcase } from "lucide-react"
import Link from "next/link"

const experiences = [
  {
    period: "2024 — PRESENT",
    title: "Engineering Lead & Platform Architect",
    company: "79Ratio / CamodevOps",
    description:
      "Leading secure platform engineering and automation across SMEs, marketplaces, and AI systems. I focus on authentication, access control, data tracking, edge infrastructure, and durable income-aligned operations.",
    technologies: ["TypeScript", "Next.js", "Python", "Rust", "Supabase", "Edge Computing"],
    link: "https://79ratio.com",
  },
  {
    period: "2024 — PRESENT",
    title: "Commanding Officer",
    company: "OCIU (Our Community in Unity)",
    description:
      "Directing a Level 1 B-BBEE non-profit. Leading the \"WeCreate\" training series empowering youth with cloud computing, digital marketing, and video editing skills. Acting as a stabilizing force in Cape Town's high-pressure environment.",
    technologies: ["Leadership", "Community", "Training", "B-BBEE Level 1"],
    link: "#ventures",
  },
  {
    period: "2025",
    title: "Full Stack Development Certification",
    company: "FNB App Academy",
    description:
      "Validated mastery of the complete SDLC—from UI/UX design to robust backend API integration. Formalized proficiency in TypeScript, React, Node.js, and modern development practices.",
    technologies: ["Full Stack", "SDLC", "UI/UX", "API Integration"],
    link: "#",
  },
  {
    period: "2020 — 2024",
    title: "Theater Engineer & Sound Technician",
    company: "Saga Cruises & MSC Cruises",
    description:
      "Operated within strict STCW maritime safety protocols and passenger management frameworks. Deployed complex PA setups and theater-grade audio systems. Certified in Emergency Response, Crowd Management, Fire Prevention, and Personal Survival.",
    technologies: ["Soundcraft", "JBL", "Yamaha", "STCW", "Maritime Safety"],
    link: "#",
  },
  {
    period: "2019 — 2020",
    title: "Physical Security Operations",
    company: "Field Security",
    description:
      "Completed structured physical security training, achieving Grades D through B. Developed procedural discipline, situational awareness, and accountability that now informs my digital security approach.",
    technologies: ["Security Grade B", "Access Control", "Risk Management"],
    link: "#",
  },
]

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 section-shell">
      <h2 className="section-heading">
        <Briefcase className="h-4 w-4" />
        Service Record
      </h2>
      <div className="group/list space-y-8">
        {experiences.map((exp, index) => (
          <Link
            key={index}
            href={exp.link}
            className="panel-card group grid gap-4 p-5 transition-colors hover:border-primary/30 hover:bg-[rgba(6,24,8,0.9)] sm:grid-cols-8 sm:gap-8 md:gap-4"
          >
            <header className="text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground sm:col-span-2">
              {exp.period}
            </header>
            <div className="sm:col-span-6">
              <h3 className="font-semibold leading-snug text-foreground">
                <div className="inline-flex items-baseline gap-1 text-lg group-hover:text-primary transition-colors">
                  {exp.title} <span className="text-primary">·</span> {exp.company}
                  <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </div>
              </h3>
              <p className="mt-3 text-[15px] leading-7 text-muted-foreground">
                {exp.description}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies used">
                {exp.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="tag-chip px-3 py-1"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
