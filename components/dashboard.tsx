import { Github, BarChart3, Cpu, Globe, Server } from "lucide-react"
import Link from "next/link"

export const revalidate = 60

const GITHUB_OWNER = process.env.GITHUB_OWNER || "camodevops"
const GITHUB_REPO = process.env.GITHUB_REPO || "Camoportfolio"
const GITHUB_TOKEN = process.env.GITHUB_TOKEN

const stackUsage = [
  { name: "TypeScript", level: 92 },
  { name: "Next.js", level: 88 },
  { name: "Python", level: 80 },
  { name: "Rust", level: 70 },
  { name: "Supabase", level: 76 },
]

const monitoredSites = [
  { name: "79Ratio", href: "https://79ratio.com" },
  { name: "Unspoken Truths", href: "https://unspoken-truths.com" },
  { name: "OCIU", href: "https://ourcommunityinunity.org" },
]

async function fetchGitHubRepo() {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
  }
  if (GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${GITHUB_TOKEN}`
  }

  const repoResponse = await fetch(
    `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}`,
    { headers, next: { revalidate: 60 } } as any
  )

  if (!repoResponse.ok) {
    return null
  }

  return repoResponse.json()
}

async function checkSiteStatus(url: string) {
  const start = Date.now()

  try {
    const response = await fetch(
      url,
      { method: "HEAD", next: { revalidate: 60 } } as any
    )

    if (response.ok) {
      return {
        status: "ONLINE",
        statusText: `${response.status} ${response.statusText}`,
        responseTime: `${Date.now() - start}ms`,
      }
    }

    return {
      status: "OFFLINE",
      statusText: `${response.status} ${response.statusText}`,
      responseTime: `${Date.now() - start}ms`,
    }
  } catch (error) {
    return {
      status: "OFFLINE",
      statusText: "Request failed",
      responseTime: `${Date.now() - start}ms`,
    }
  }
}

export async function Dashboard() {
  const repoData = await fetchGitHubRepo()
  const siteStatuses = await Promise.all(
    monitoredSites.map(async (site) => ({
      ...site,
      ...(await checkSiteStatus(site.href)),
    }))
  )

  const repoStats = repoData
    ? [
        { label: "Stars", value: repoData.stargazers_count.toLocaleString(), icon: Github },
        { label: "Forks", value: repoData.forks_count.toLocaleString(), icon: BarChart3 },
        { label: "Watchers", value: repoData.watchers_count.toLocaleString(), icon: Cpu },
      ]
    : [
        { label: "Stars", value: "—", icon: Github },
        { label: "Forks", value: "—", icon: BarChart3 },
        { label: "Issues", value: "—", icon: Cpu },
      ]

  const repoOverview = repoData?.description ??
    "A wrapped presentation of your repository inside the site UI, including live metrics, repo actions, and progress details.";

  return (
    <section id="dashboard" className="scroll-mt-24 section-shell">
      <h2 className="section-heading">
        <Server className="h-4 w-4" />
        System Dashboard
      </h2>

      <div className="grid gap-4 xl:grid-cols-[1.45fr_1fr]">
        <div className="space-y-4">
          <div className="panel-card p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="eyebrow text-primary">GitHub Repo Pulse</p>
                <h3 className="mt-3 text-2xl font-semibold text-foreground">
                  {repoData ? `${repoData.full_name}` : `${GITHUB_OWNER}/${GITHUB_REPO}`}
                </h3>
              </div>
              <Github className="h-6 w-6 text-primary" />
            </div>
            <p className="mt-4 text-[15px] leading-7 text-muted-foreground">
              Live GitHub repository metrics for your configured project. Data refreshes from GitHub every minute.
            </p>
            <div className="panel-card-soft mt-6 flex flex-col gap-4 p-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="eyebrow">Repo snapshot</p>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">{repoOverview}</p>
              </div>
              <Link
                href={repoData?.html_url ?? `https://github.com/${GITHUB_OWNER}/${GITHUB_REPO}`}
                target="_blank"
                rel="noopener noreferrer"
                className="action-primary w-full px-4 py-3 text-sm sm:w-auto"
              >
                Open repository on GitHub
              </Link>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {repoStats.map((stat) => {
                const Icon = stat.icon
                return (
                  <div key={stat.label} className="panel-card-soft p-4">
                    <div className="flex items-center gap-2 text-primary">
                      <Icon className="h-4 w-4" />
                      <p className="eyebrow">{stat.label}</p>
                    </div>
                    <p className="mt-3 text-xl font-semibold text-foreground">{stat.value}</p>
                  </div>
                )
              })}
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 text-sm text-muted-foreground">
              <div className="panel-card-soft p-4">
                <p className="eyebrow">Last pushed</p>
                <p className="mt-2 font-medium text-foreground">
                  {repoData ? new Date(repoData.pushed_at).toLocaleString() : "Unavailable"}
                </p>
              </div>
              <div className="panel-card-soft p-4">
                <p className="eyebrow">License</p>
                <p className="mt-2 font-medium text-foreground">{repoData?.license?.name ?? "Unknown"}</p>
              </div>
            </div>
          </div>

          <div className="panel-card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="eyebrow text-primary">Info Graphic</p>
                <h3 className="mt-3 text-xl font-semibold text-foreground">Platform intelligence</h3>
              </div>
            </div>
            <div className="panel-card-soft mt-6 overflow-hidden">
              <img
                src="/infograph.png"
                alt="CamodevOps infrastructure and stack infographic"
                className="w-full object-cover"
              />
            </div>
            <p className="mt-4 text-[15px] leading-7 text-muted-foreground">
              Visual summary of GitHub, site uptime, and platform flow — embedded directly from your shared infographic asset.
            </p>
            <div className="mt-4 text-sm text-muted-foreground">
              <p>For deeper context, explore the platform architecture and delivery model in the next section.</p>
              <Link href="/platform" className="mt-3 inline-flex text-primary underline-offset-4 hover:underline">
                Explore the platform intelligence page
              </Link>
            </div>
          </div>

          <div className="panel-card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="eyebrow text-primary">Tech Stack</p>
                <h3 className="mt-3 text-xl font-semibold text-foreground">Stack usage</h3>
              </div>
              <BarChart3 className="h-5 w-5 text-primary" />
            </div>
            <div className="mt-6 space-y-4">
              {stackUsage.map((stack) => (
                <div key={stack.name}>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{stack.name}</span>
                    <span>{stack.level}%</span>
                  </div>
                  <div className="mt-2 h-2 w-full rounded-full bg-secondary">
                    <div className="h-full rounded-full bg-primary" style={{ width: `${stack.level}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="panel-card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="eyebrow text-primary">System Info</p>
                <h3 className="mt-3 text-xl font-semibold text-foreground">Dashboard health</h3>
              </div>
              <Cpu className="h-5 w-5 text-primary" />
            </div>
            <div className="mt-6 space-y-3">
              <div className="panel-card-soft flex items-center justify-between px-4 py-3 text-sm text-muted-foreground">
                <span>Platform</span>
                <span className="font-medium text-foreground">Ubuntu Linux</span>
              </div>
              <div className="panel-card-soft flex items-center justify-between px-4 py-3 text-sm text-muted-foreground">
                <span>Theme</span>
                <span className="font-medium text-foreground">Neon / Dark</span>
              </div>
              <div className="panel-card-soft flex items-center justify-between px-4 py-3 text-sm text-muted-foreground">
                <span>Status</span>
                <span className="font-medium text-foreground">Operational</span>
              </div>
              <div className="panel-card-soft flex items-center justify-between px-4 py-3 text-sm text-muted-foreground">
                <span>Deployment</span>
                <span className="font-medium text-foreground">Vercel</span>
              </div>
            </div>
          </div>

          <div className="panel-card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="eyebrow text-primary">Sites Online</p>
                <h3 className="mt-3 text-xl font-semibold text-foreground">Uptime checks</h3>
              </div>
              <Globe className="h-5 w-5 text-primary" />
            </div>
            <div className="mt-6 space-y-3">
              {siteStatuses.map((site) => (
                <Link
                  key={site.name}
                  href={site.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="panel-card-soft flex items-center justify-between px-4 py-3 text-sm text-muted-foreground transition-colors hover:border-primary/25 hover:bg-[rgba(8,28,10,0.88)]"
                >
                  <div>
                    <p className="font-semibold text-foreground">{site.name}</p>
                    <p className="text-[11px] text-muted-foreground">{site.statusText}</p>
                  </div>
                  <div className="text-right">
                    <span className={`status-badge inline-flex px-2 py-1 text-[11px] ${
                      site.status === "ONLINE" ? "status-badge-live" : "status-badge-proposal"
                    }`}>
                      {site.status}
                    </span>
                    <p className="text-[11px] text-muted-foreground">{site.responseTime}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
