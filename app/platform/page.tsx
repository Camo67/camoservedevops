import Link from "next/link"

export default function PlatformPage() {
  return (
    <main className="min-h-screen relative grid-bg scanline">
      <div className="fixed inset-0 pointer-events-none bg-[rgba(3,7,4,0.28)] z-0" />
      <div className="mx-auto max-w-6xl px-6 py-24 relative z-10">
        <div className="section-shell">
          <div className="max-w-3xl space-y-6">
            <p className="eyebrow text-primary">Platform Intelligence</p>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground lg:text-5xl">
              Deep context for your infrastructure, uptime, and platform story
            </h1>
            <p className="text-base leading-8 text-muted-foreground">
              This page surfaces the operational narrative behind your dashboard graphic. It connects GitHub repo health, live uptime monitoring, and site systems into a single story for investors, partners, and developers.
            </p>
            <div className="panel-card-soft p-6">
              <p className="eyebrow">What you’ll find here</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-muted-foreground">
                <li>• GitHub repo health metrics and release cadence</li>
                <li>• Live uptime checks for your flagship sites</li>
                <li>• A visual infographic of platform flow and stack architecture</li>
                <li>• Clear service pathways for CamodevOps, OCIU, and WeCreate</li>
              </ul>
            </div>
            <div className="panel-card-soft overflow-hidden">
              <div className="relative w-full overflow-hidden pt-[100%]">
                <iframe
                  loading="lazy"
                  className="absolute inset-0 h-full w-full border-0"
                  src="https://www.canva.com/design/DAHG5FcHeJU/OoV11568Ur1zwprrvYORPQ/view?embed"
                  allowFullScreen
                />
              </div>
            </div>
            <div className="panel-card-soft p-4 text-sm text-muted-foreground">
              <p>This Canva embed displays the visual overview for your platform story.</p>
              <p className="mt-2">
                View directly on Canva:{' '}
                <Link
                  href="https://www.canva.com/design/DAHG5FcHeJU/OoV11568Ur1zwprrvYORPQ/view?utm_content=DAHG5FcHeJU&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Canva design
                </Link>
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-muted-foreground">
                Use this page as the bridge between your operational dashboard and the business narrative for every visitor.
              </p>
              <Link
                href="/#dashboard"
                className="action-primary px-5 py-3 text-sm"
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
