import Link from "next/link"

export default function PlatformPage() {
  return (
    <main className="min-h-screen relative grid-bg scanline">
      <div className="mx-auto max-w-6xl px-6 py-24 relative z-10">
        <div className="rounded-3xl border border-primary/15 bg-card/80 p-10 backdrop-blur-xl">
          <div className="max-w-3xl space-y-6">
            <p className="text-sm uppercase tracking-[0.4em] text-primary">Platform Intelligence</p>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground lg:text-5xl">
              Deep context for your infrastructure, uptime, and platform story
            </h1>
            <p className="text-base leading-8 text-muted-foreground">
              This page surfaces the operational narrative behind your dashboard graphic. It connects GitHub repo health, live uptime monitoring, and site systems into a single story for investors, partners, and developers.
            </p>
            <div className="rounded-3xl border border-primary/10 bg-black/10 p-6">
              <p className="text-sm uppercase tracking-[0.35em] text-primary/80">What you’ll find here</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-muted-foreground">
                <li>• GitHub repo health metrics and release cadence</li>
                <li>• Live uptime checks for your flagship sites</li>
                <li>• A visual infographic of platform flow and stack architecture</li>
                <li>• Clear service pathways for CamodevOps, OCIU, and WeCreate</li>
              </ul>
            </div>
            <div className="rounded-sm overflow-hidden border border-primary/10 bg-black/10">
              <img src="/infograph.png" alt="CamodevOps infrastructure and stack infographic" className="w-full object-cover" />
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-muted-foreground">
                Use this page as the bridge between your operational dashboard and the business narrative for every visitor.
              </p>
              <Link
                href="/#dashboard"
                className="rounded-full bg-primary px-5 py-3 text-sm font-semibold text-background transition hover:bg-primary/90"
              >
                Back to dashboard
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
