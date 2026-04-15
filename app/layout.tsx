import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadataBase = new URL('https://camoservedevops.vercel.app')

export const metadata: Metadata = {
  title: 'CamOservDEVOPS | Mission Systems Online',
  description: 'Cameron "Camo" de Vries - Full-stack DevOps engineer bridging physical security and digital infrastructure. Based in Cape Town, South Africa.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/homecamoDownloadsCamoportfoliopubliclogo.png (Animated Logo).svg',
        type: 'image/svg+xml',
      },
    ],
  },
  openGraph: {
    title: 'CamOservDEVOPS | Mission Systems Online',
    description: 'Cameron "Camo" de Vries - Full-stack DevOps engineer bridging physical security and digital infrastructure.',
    type: 'website',
    url: 'https://camoservedevops.vercel.app',
    images: [
      {
        url: '/homecamoDownloadsCamoportfoliopubliclogo.png (Animated Logo).svg',
        alt: 'CamOservDEVOPS logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CamOservDEVOPS | Mission Systems Online',
    description: 'Cameron "Camo" de Vries - Full-stack DevOps engineer bridging physical security and digital infrastructure.',
    images: ['/homecamoDownloadsCamoportfoliopubliclogo.png (Animated Logo).svg'],
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
