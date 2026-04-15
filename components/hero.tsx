"use client"

import { Github, Linkedin, Mail, MapPin, Podcast, Terminal } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/camodevops",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/camerondevries",
    icon: Linkedin,
  },
  {
    name: "Podcast",
    href: "https://open.spotify.com/show/7cwfPZpCqL3L1T0gLsjkx0",
    icon: Podcast,
  },
  {
    name: "Email",
    href: "mailto:camo@79ratio.com",
    icon: Mail,
  },
]

const navItems = [
  { label: "ABOUT", href: "#about" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "PROJECTS", href: "#projects" },
  { label: "VENTURES", href: "#ventures" },
  { label: "SKILLS", href: "#skills" },
  { label: "PLATFORM", href: "/platform" },
  { label: "AV EXPLORER", href: "/av-explorer" },
  { label: "CONTACT", href: "#contact" },
]

const navButtons = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Ventures", href: "#ventures" },
  { label: "Skills", href: "#skills" },
  { label: "Platform", href: "/platform" },
  { label: "AV Explorer", href: "/av-explorer" },
  { label: "Contact", href: "#contact" },
]

export function Hero() {
  return (
    <div className="space-y-8 lg:max-h-[calc(100vh-10rem)] lg:overflow-y-auto lg:pr-1">
      {/* Brand Banner */}
      <div className="relative w-full aspect-[16/9] max-w-md hud-bracket p-1 -ml-1">
        <div className="relative h-full w-full overflow-hidden rounded-sm border border-primary/30 glow-border bg-[#020202]">
          <Image
            src="/homecamoDownloadsCamoportfoliopubliclogo.png (Animated Logo).svg"
            alt="CamoServices logo"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* System Status HUD */}
      <div className="font-mono text-xs text-primary/70 space-y-1">
        <div className="flex items-center gap-2">
          <span className="inline-block h-2 w-2 rounded-full bg-primary animate-pulse" />
          <span>SYSTEM STATUS: OPERATIONAL</span>
        </div>
        <div>USER: COMMANDER</div>
        <div>ENCRYPTION: ACTIVE</div>
        <div>SESSION ID: 001-OPENING</div>
      </div>

      {/* Profile Photo with HUD frame */}
      <div className="relative h-36 w-36 hud-bracket p-1">
        <div className="relative h-full w-full overflow-hidden rounded-sm border border-primary/50 glow-border">
          <Image
            src="/homecamoDownloadsCamoportfoliopubliclogo.png (Animated Logo).svg"
            alt="Cameron de Vries"
            fill
            className="object-cover object-top"
            priority
          />
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Terminal className="h-5 w-5 text-primary" />
          <span className="font-mono text-sm tracking-widest">
            <span className="text-foreground font-bold">Camo</span>
            <span className="text-primary font-bold">Services</span>
          </span>
        </div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground lg:text-4xl text-balance">
            Cameron{" "}
            <span className="text-primary glow-text">&ldquo;Camo&rdquo;</span>{" "}
            De Vries
          </h1>
          <p className="text-lg font-medium text-primary font-mono cursor-blink">
            Hyperspace 4D command grid active
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Multi-disciplinary security and automation practitioner operating as CamoServices. I build secure, scalable platforms that merge physical risk management with digital infrastructure efficiency in a new 4D resolution.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Experience high-fidelity systems with holographic visuals, AI-driven orchestration, and live operational telemetry wrapped in futuristic site design.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            My stack spans TypeScript, Next.js, Python, Rust, Supabase, and local edge systems—from P2P marketplaces to AI orchestration and network edge nodes.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/platform"
              className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-3 text-sm font-semibold text-background transition duration-300 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-[0_10px_30px_rgba(56,189,248,0.18)]"
            >
              Explore platform intelligence
            </Link>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground font-mono">
            <MapPin className="h-4 w-4 text-primary" />
            <span>AO: Bonteheuwel, Cape Town, ZA</span>
          </div>
        </div>
        <div className="rounded-3xl border border-primary/20 bg-card/50 p-4">
          <p className="text-xs uppercase tracking-[0.4em] text-primary">Quick navigation</p>
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            {navButtons.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="inline-flex items-center justify-center rounded-full border border-primary/10 bg-white/5 px-3 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-primary transition duration-200 hover:border-primary/30 hover:bg-primary/10 hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

      {/* Social Links */}
      <div className="flex items-center gap-5 pt-4">
        {socialLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label={link.name}
          >
            <link.icon className="h-5 w-5" />
          </Link>
        ))}
      </div>
    </div>
  )
}
