import { ArrowUpRight, ExternalLink, Github, Layers } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "Agent Kyra",
    description:
      "Localized LLM orchestration system running Qwen3-0.6B-Q4_K_M.gguf on local hardware. Serves as a private, secure AI assistant for internal family and business operations.",
    technologies: ["Python", "LLM", "Qwen3", "Local AI"],
    github: "https://github.com/camodevops",
    live: null,
    status: "ACTIVE",
  },
  {
    title: "Buddies Worldwide",
    description:
      "P2P marketplace empowering South Africa's informal economy through escrow-secured transactions and integrated Paxi logistics.",
    technologies: ["TypeScript", "Next.js", "Escrow", "Paxi"],
    github: "https://github.com/camodevops",
    live: null,
    status: "ACTIVE",
  },
  {
    title: "The Vault",
    description:
      "Hardware edge node project repurposing Huawei N5368X 5G Outdoor CPE into resilient networking infrastructure for local processing and secure operations.",
    technologies: ["Linux", "Ubuntu", "5G", "Edge Computing"],
    github: "https://github.com/camodevops",
    live: null,
    status: "ACTIVE",
  },
  {
    title: "Cape FarmScan",
    description:
      "Agri-tech drone imaging and NDVI analytics for vineyards, delivering practical crop intelligence for the Western Cape.",
    technologies: ["Drone", "NDVI", "Agriculture", "Data Analytics"],
    github: "https://github.com/camodevops",
    live: null,
    status: "PROTOTYPE",
  },
  {
    title: "Zeta Cyber Shield",
    description:
      "Proposed collaborative defense model targeting financial ecosystem risk and community resilience through shared intelligence and training.",
    technologies: ["Cybersecurity", "Banking", "Defense", "Strategy"],
    github: null,
    live: null,
    status: "PROPOSAL",
  },
  {
    title: "White-Label Platform Portfolio",
    description:
      "Managing a suite of specialized commerce and media platforms with income-aligned operations, privacy-aware product delivery, and market-specific automation.",
    technologies: ["PlatformOps", "Commerce", "Automation", "Privacy"],
    github: null,
    live: null,
    status: "ACTIVE",
  },
  {
    title: "Unspoken-Truths Podcast",
    description:
      "Primary intelligence channel exploring themes like the \"Misguided War\" (redirecting community anger toward systemic poverty) and legal literacy. Building community intelligence and resilience.",
    technologies: ["Audio", "Community", "Social Justice"],
    github: null,
    live: "https://unspoken-truths.com",
    spotifyShow: "https://open.spotify.com/show/7cwfPZpCqL3L1T0gLsjkx0",
    spotifyEmbed: "https://open.spotify.com/embed/show/7cwfPZpCqL3L1T0gLsjkx0?utm_source=generator&theme=0",
    youtubeChannel: "https://www.youtube.com/@2cameyboy6",
    youtubeEmbed: "https://www.youtube.com/embed?listType=user_uploads&list=2cameyboy6",
    episodes: [
      {
        title: "Latest episode on Spotify",
        href: "https://open.spotify.com/episode/6uGQ255DFzKzKWZMeEmW2R?si=J78_JOIWSO-d8cQHPtFILQ",
      },
      {
        title: "New Spotify episode",
        href: "https://open.spotify.com/episode/3IFkweY13SSAzSgxHMMjHX?si=xECL5oGCSt-tisz4zcXZpQ",
      },
      {
        title: "Most recent Spotify episode",
        href: "https://open.spotify.com/episode/3aDu4VNpN9OumSYxFdF3N5?si=tzu0yz8BTRGX_6ZKZ7Cq5Q",
      },
      {
        title: "Latest YouTube video",
        href: "https://youtu.be/_D94aHfI_h0",
      },
    ],
    status: "LIVE",
  },
]

const statusColors: Record<string, string> = {
  ACTIVE: "bg-primary/20 text-primary border-primary/50",
  DEV: "bg-yellow-500/20 text-yellow-400 border-yellow-500/50",
  PROTOTYPE: "bg-blue-500/20 text-blue-400 border-blue-500/50",
  PROPOSAL: "bg-orange-500/20 text-orange-400 border-orange-500/50",
  LIVE: "bg-primary/20 text-primary border-primary/50",
}

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24">
      <h2 className="mb-8 flex items-center gap-3 text-sm font-mono uppercase tracking-widest text-primary">
        <Layers className="h-4 w-4" />
        Active Operations
      </h2>
      <div className="group/list">
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative grid gap-4 pb-1 transition-all lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
            >
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-sm border border-transparent transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:border-primary/30 lg:group-hover:bg-primary/5" />
              <div className="z-10">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-medium leading-snug text-foreground">
                    <span className="inline-flex items-baseline gap-1 text-base group-hover:text-primary transition-colors">
                      {project.title}
                      <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                    </span>
                  </h3>
                  <span className={`rounded-sm border px-2 py-0.5 text-xs font-mono ${statusColors[project.status]}`}>
                    {project.status}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-4">
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-mono text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github className="h-4 w-4" />
                      CODE
                    </Link>
                  )}
                  {project.live && (
                    <Link
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-mono text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                      VIEW
                    </Link>
                  )}
                  {project.spotifyShow && (
                    <Link
                      href={project.spotifyShow}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-mono text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                      SPOTIFY SHOW
                    </Link>
                  )}
                </div>
                {project.episodes?.length ? (
                  <div className="mt-4 space-y-2">
                    <div className="text-sm font-medium text-primary">Podcast episodes</div>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {project.episodes.map((episode) => (
                        <li key={episode.href}>
                          <Link
                            href={episode.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline"
                          >
                            {episode.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
                {project.spotifyEmbed ? (
                  <div className="mt-6 rounded-sm border border-primary/20 bg-card/30 p-4">
                    <div className="mb-3 text-sm font-medium text-primary">Spotify Podcast Embed</div>
                    <div className="overflow-hidden rounded-sm">
                      <iframe
                        src={project.spotifyEmbed}
                        width="100%"
                        height="152"
                        frameBorder="0"
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                        className="w-full"
                      />
                    </div>
                  </div>
                ) : null}
                {project.youtubeChannel ? (
                  <div className="mt-6 rounded-sm border border-primary/20 bg-card/30 p-4">
                    <div className="mb-3 text-sm font-medium text-primary">YouTube Channel</div>
                    <p className="text-sm text-muted-foreground mb-3">Subscribe and watch channel content from @2cameyboy6.</p>
                    <Link
                      href={project.youtubeChannel}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-sm border border-primary/50 bg-primary/5 px-4 py-2 text-sm font-mono text-primary hover:bg-primary/10"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Visit YouTube Channel
                    </Link>
                    {project.youtubeEmbed ? (
                      <div className="mt-4 overflow-hidden rounded-sm">
                        <iframe
                          src={project.youtubeEmbed}
                          width="100%"
                          height="220"
                          frameBorder="0"
                          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                          loading="lazy"
                          className="w-full"
                        />
                      </div>
                    ) : null}
                  </div>
                ) : null}
                <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies used">
                  {project.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-sm border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-mono text-primary"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* GitHub CTA */}
      <div className="mt-12">
        <Link
          href="https://github.com/camodevops"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 font-mono text-sm text-foreground hover:text-primary transition-colors"
        >
          [VIEW FULL PROJECT ARCHIVE]
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  )
}
