"use client"

import { Github, Linkedin, Mail, MapPin, Podcast, Terminal, RotateCcw } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const logoSrc = "/homecamoDownloadsCamoportfoliopubliclogo.png%20(Animated%20Logo).svg"
const profileSrc = "/logo(11%20x%208.5%20in).svg"

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
    href: "mailto:devries.cameron20@gmail.com",
    icon: Mail,
  },
]

export function Hero() {
  const [isPlatformMode, setIsPlatformMode] = useState(false);

  const togglePlatformMode = () => {
    setIsPlatformMode(!isPlatformMode);
  };

  return (
    <div className="w-full">
      {/* Top Identity Panel */}
      <div className="section-shell space-y-6">
        {/* Brand Banner and System Status */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="flex flex-col sm:flex-row items-start gap-4">
              {/* Brand Banner */}
              <div className="relative w-full max-w-xs aspect-[16/9] lg:w-64 hud-bracket p-1">
                <div className="relative h-full w-full overflow-hidden rounded-sm border border-primary/30 glow-border bg-[#020202]">
                  <Image
                    src={logoSrc}
                    alt="CamoServDevops logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>

              {/* System Status HUD */}
              <div className="panel-card-soft flex-1 p-4 font-mono text-xs text-muted-foreground">
                <div className="flex items-center gap-2 text-foreground">
                  <span className="inline-block h-2 w-2 rounded-full bg-primary animate-pulse" />
                  <span>SYSTEM STATUS: OPERATIONAL</span>
                </div>
                <div>USER: COMMANDER</div>
                <div>ENCRYPTION: ACTIVE</div>
                <div>SESSION ID: 001-OPENING</div>
              </div>
            </div>
          </div>

          {/* Identity Info */}
          <div className="panel-card p-5">
            <div className="flex items-center gap-3">
              <Terminal className="h-5 w-5 text-primary" />
              <span className="font-mono text-sm tracking-widest">
                <span className="text-foreground font-bold">Camo</span>
                <span className="text-primary font-bold">ServDevops</span>
              </span>
            </div>
            <div className="mt-3 space-y-2">
              <h1 className="text-lg font-bold tracking-tight text-foreground">
                Cameron{" "}
                <span className="text-primary glow-text">&ldquo;Camo&rdquo;</span>{" "}
                De Vries
              </h1>
              <p className="text-sm font-medium text-primary font-mono cursor-blink">
                Hyperspace 4D command grid active
              </p>
            </div>
            <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground font-mono">
              <MapPin className="h-4 w-4 text-primary" />
              <span>AO: Bonteheuwel, Cape Town, ZA</span>
            </div>
          </div>
        </div>

        {/* Navigation Bar (Desktop) - Hidden on Mobile */}
        <div className="hidden lg:flex flex-wrap gap-2">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="action-secondary px-3 py-2 text-xs uppercase tracking-[0.15em]"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Profile Photo and Identity Copy */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 flex justify-center">
            <div className="relative h-36 w-36 hud-bracket p-1">
              <div className="relative h-full w-full overflow-hidden rounded-sm border border-primary/50 glow-border">
                <Image
                  src={profileSrc}
                  alt="Cameron de Vries"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="space-y-4 text-[15px] leading-7 text-muted-foreground">
              <p>
                Multi-disciplinary security and automation practitioner operating as CamoServDevops. I build secure, scalable platforms that merge physical risk management with digital infrastructure efficiency in a new 4D resolution.
              </p>
              <p>
                Experience high-fidelity systems with holographic visuals, AI-driven orchestration, and live operational telemetry wrapped in futuristic site design.
              </p>
              <p>
                My stack spans TypeScript, Next.js, Python, Rust, Supabase, and local edge systems, from P2P marketplaces to AI orchestration and network edge nodes.
              </p>
            </div>
            
            <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3">
              <button
                onClick={togglePlatformMode}
                className={`px-6 py-3 text-sm ${
                  isPlatformMode 
                    ? "action-primary bg-primary text-white" 
                    : "action-primary"
                }`}
              >
                {isPlatformMode ? "Identity Mode Active" : "Explore platform intelligence"}
              </button>
            </div>
          </div>
        </div>

        {/* Platform Media Area - Conditionally renders based on state */}
        <div className="transition-all duration-500 ease-in-out">
          {isPlatformMode ? (
            <div className="panel-card-soft overflow-hidden">
              <div className="text-center mb-4">
                <h2 className="text-xl font-bold text-foreground">Explore platform intelligence</h2>
                <p className="text-muted-foreground">Deep context for your infrastructure, uptime, and platform story</p>
              </div>
              <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                <iframe
                  src="https://www.youtube.com/embed/_D94aHfI_h0"
                  title="Platform Intelligence Video"
                  className="absolute top-0 left-0 w-full h-full border-0"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <div className="p-4 text-sm text-muted-foreground">
                <p>Platform intelligence video showing infrastructure and capabilities.</p>
                <button
                  onClick={togglePlatformMode}
                  className="mt-2 micro-button inline-flex items-center gap-2"
                >
                  <RotateCcw className="h-4 w-4" /> Return to Identity View
                </button>
              </div>
            </div>
          ) : (
            <div className="panel-card-soft p-4 text-sm text-muted-foreground text-center">
              <p>Engage platform intelligence to view operational dashboard</p>
            </div>
          )}
        </div>

        {/* Social Links */}
        <div className="panel-card-soft flex items-center justify-center gap-5 p-4">
          {socialLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label={link.name}
            >
              <link.icon className="h-5 w-5" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

      {/* Social Links */}
      <div className="panel-card-soft flex items-center justify-center gap-5 p-4">
        {socialLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label={link.name}
          >
            <link.icon className="h-5 w-5" />
          </Link>
        ))}
      </div>
    </div>
  )
}