import { ArrowUpRight, Mail, Radio } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 section-shell">
      <h2 className="section-heading">
        <Radio className="h-4 w-4" />
        Establish Comms
      </h2>
      <div className="space-y-6">
        <div className="panel-card p-6">
          <p className="max-w-lg font-mono text-sm leading-7 text-muted-foreground">
            {">"} Interested in collaborating on secure automation systems, community projects, 
            or discussing platform engineering? I&apos;m always open to connecting with 
            like-minded builders and security practitioners.
          </p>
        </div>
        <div className="panel-card p-6">
          <div className="mb-4 flex items-center gap-4">
            <div className="panel-card-soft relative h-16 w-16 overflow-hidden p-1">
              <Image
                src="/OCIU.png"
                alt="OCIU logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex items-center gap-2 text-sm font-mono uppercase tracking-[0.24em] text-primary">
              <span className="h-2 w-2 rounded-full bg-primary" />
              OCIU Program Inquiry
            </div>
          </div>
          <p className="max-w-lg font-mono text-sm leading-7 text-muted-foreground">
            For information on joining the WeCreate youth training series, connect with Our Community in Unity (OCIU) directly. The program centers on cloud computing, digital marketing, and video editing, guided by the philosophy "Each one teach one."
          </p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground font-mono">
            <li>
              <span className="font-semibold text-foreground">Website:</span>{" "}
              <Link href="https://ourcommunityinunity.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                ourcommunityinunity.org
              </Link>
            </li>
            <li>
              <span className="font-semibold text-foreground">Email:</span>{" "}
              <Link href="mailto:info@ourcommunityinunity.org" className="text-primary hover:underline">
                info@ourcommunityinunity.org
              </Link>
            </li>
            <li>
              <span className="font-semibold text-foreground">Linktree:</span>{" "}
              <Link href="https://linktr.ee/camoflage021" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                linktr.ee/camoflage021
              </Link>
            </li>
            <li><span className="font-semibold text-foreground">Social:</span> @camoflage021</li>
            <li><span className="font-semibold text-foreground">Location:</span> Bonteheuwel, Cape Town</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <Link
            href="mailto:camo@79ratio.com"
            className="action-primary px-6 py-3 text-sm font-mono"
          >
            <Mail className="h-4 w-4" />
            INITIATE CONTACT
          </Link>
          <Link
            href="https://github.com/camodevops"
            target="_blank"
            rel="noopener noreferrer"
            className="action-secondary group px-6 py-3 text-sm font-mono"
          >
            VIEW GITHUB PROFILE
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </Link>
          <Link
            href="https://wa.me/27604549405"
            target="_blank"
            rel="noopener noreferrer"
            className="action-secondary px-6 py-3 text-sm font-mono text-emerald-300"
          >
            <span className="h-4 w-4 rounded-full bg-emerald-400" />
            CONTACT ON WHATSAPP
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-24 border-t border-primary/20 pt-8">
        <div className="font-mono text-xs text-muted-foreground space-y-2">
          <p className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-primary animate-pulse" />
            SYSTEM STATUS: OPERATIONAL
          </p>
          <p>
            Built with{" "}
            <Link href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline transition-colors">
              Next.js
            </Link>{" "}
            +{" "}
            <Link href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline transition-colors">
              Tailwind
            </Link>
            {" "}| Deployed on{" "}
            <Link href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline transition-colors">
              Vercel
            </Link>
          </p>
          <p>
            © {new Date().getFullYear()} Cameron de Vries |{" "}
            <span className="text-foreground font-bold">CamO</span>
            <span className="text-primary font-bold">servDEVOPS</span>
          </p>
        </div>
      </footer>
    </section>
  )
}
