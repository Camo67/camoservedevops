import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const siteUrl = 'https://camoservedevops.vercel.app'
const logoAsset = '/homecamoDownloadsCamoportfoliopubliclogo.png%20(Animated%20Logo).svg'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'CamOservDEVOPS | Mission Systems Online',
  description: 'Cameron "Camo" de Vries - Full-stack DevOps engineer bridging physical security and digital infrastructure. Based in Cape Town, South Africa.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      },
    ],
  },
  openGraph: {
    title: 'CamOservDEVOPS | Mission Systems Online',
    description: 'Cameron "Camo" de Vries - Full-stack DevOps engineer bridging physical security and digital infrastructure.',
    type: 'website',
    url: siteUrl,
    siteName: 'CamOservDEVOPS',
    images: [
      {
        url: logoAsset,
        alt: 'CamOservDEVOPS logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CamOservDEVOPS | Mission Systems Online',
    description: 'Cameron "Camo" de Vries - Full-stack DevOps engineer bridging physical security and digital infrastructure.',
    images: [logoAsset],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}