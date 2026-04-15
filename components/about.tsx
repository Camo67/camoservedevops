import { Crosshair } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function About() {
  return (
    <section id="about" className="scroll-mt-24 section-shell">
      <h2 className="section-heading">
        <Crosshair className="h-4 w-4" />
        Intel Brief
      </h2>
      
      {/* Infographic with HUD frame */}
      <div className="mb-8 relative hud-bracket p-2">
        <div className="panel-card overflow-hidden">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed%20%281%29.png-qYRUOQBwTI3Gxpq6dsBBtJKt6dnMR3.jpeg"
            alt="Cameron De Vries - Career Journey Infographic"
            width={1200}
            height={600}
            className="w-full"
          />
        </div>
      </div>

      <div className="panel-card-soft space-y-4 p-5 text-[15px] leading-7 text-muted-foreground">
        <p>
          Operating from my <span className="text-primary font-mono">Area of Operations (AO)</span> in Bonteheuwel, Cape Town, I engineer secure, scalable digital systems that sit at the intersection of physical risk management and operational technology.
        </p>
        <p>
          Under the CamodevOps and <Link href="https://79ratio.com" className="text-primary font-medium hover:underline transition-colors">79Ratio</Link> banner, I design platform engineering solutions for authentication, access control, data tracking, and SME enablement using TypeScript, Next.js, Python, Rust, and Supabase.
        </p>
        <p>
          I support local small businesses like <span className="text-foreground font-medium">Yong’s SecurieCam</span> and <span className="text-foreground font-medium">Ancestral Holistic Healing</span> to build secure digital presence and operational systems.
        </p>
        <p>
          My operational portfolio includes Buddies Worldwide, a P2P marketplace for South Africa's informal economy with integrated escrow and Paxi logistics; OpenClaw, an AI deployment arm powering local LLM orchestration; and The Vault, a hardware edge node initiative repurposing 5G outdoor CPE into resilient infrastructure.
        </p>
        <p>
          I also lead community impact through <Link href="#ventures" className="text-primary font-medium hover:underline transition-colors">OCIU</Link>, a Level 1 B-BBEE non-profit in Bonteheuwel centered on community empowerment and youth development. OCIU runs the <span className="text-foreground font-medium">WeCreate</span> series, delivering practical training in cloud computing, digital marketing, and video editing, guided by the motto <span className="text-primary font-mono">“Each One Teach One.”</span> I also manage a portfolio of 18+ white-label commerce and media platforms.
        </p>
        <p className="border-l-2 border-primary pl-4 font-mono italic text-foreground">
          &ldquo;Each One Teach One.&rdquo;
        </p>
      </div>
    </section>
  )
}
