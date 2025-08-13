import { env } from '@/env'
import type { Metadata, Viewport } from 'next'
import { DM_Sans, Space_Grotesk } from 'next/font/google'

import { Analytics } from '@vercel/analytics/next'
import type React from 'react'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk'
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-sans'
})

const siteUrl = env.NEXT_PUBLIC_SITE_URL

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Nazar Palamarchuk | Full Stack Developer',
    template: '%s | Nazar Palamarchuk'
  },
  description:
    'Full Stack Web and Mobile Developer with AI Expertise based in Lviv, Ukraine. Specializing in React, Next.js, React Native, TypeScript, and AI integration.',
  keywords: [
    'Full Stack Developer',
    'React',
    'Next.js',
    'React Native',
    'TypeScript',
    'Tailwind CSS',
    'SaaS',
    'AI Integration',
    'Web Development',
    'Mobile Development'
  ],
  authors: [{ name: 'Nazar Palamarchuk', url: env.NEXT_PUBLIC_LINKEDIN_URL }],
  creator: 'Nazar Palamarchuk',
  publisher: 'Nazar Palamarchuk',
  applicationName: 'Nazar Palamarchuk Portfolio',
  referrer: 'strict-origin-when-cross-origin',
  alternates: { canonical: '/' },
  other: {
    'link:alternate': [`${siteUrl}/cv.json`, `${siteUrl}/cv.pdf`]
  },
  category: 'technology',
  openGraph: {
    title: 'Nazar Palamarchuk | Full Stack Developer',
    description:
      'Full Stack Web and Mobile Developer with AI Expertise based in Lviv, Ukraine',
    url: siteUrl,
    siteName: 'Nazar Palamarchuk',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `${siteUrl}/opengraph-image`,
        alt: 'Nazar Palamarchuk — Full Stack Web and Mobile Developer with AI Expertise',
        width: 1200,
        height: 630,
        type: 'image/png'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nazar Palamarchuk | Full Stack Developer',
    description:
      'Full Stack Web and Mobile Developer with AI Expertise based in Lviv, Ukraine',
    images: [
      {
        url: `${siteUrl}/opengraph-image`,
        alt: 'Nazar Palamarchuk — Full Stack Web and Mobile Developer with AI Expertise',
        width: 1200,
        height: 630
      }
    ]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1
    }
  }
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#141320' }
  ]
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const personLdJson = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Nazar Palamarchuk',
    url: siteUrl,
    image: `${siteUrl}/images/nazar-profile.webp`,
    sameAs: [env.NEXT_PUBLIC_GITHUB_URL, env.NEXT_PUBLIC_LINKEDIN_URL],
    email: `mailto:${env.NEXT_PUBLIC_CONTACT_EMAIL}`,
    telephone: env.NEXT_PUBLIC_CONTACT_PHONE_E164,
    jobTitle: 'Full Stack Developer',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lviv',
      addressCountry: 'UA'
    },
    knowsAbout: [
      'React',
      'Next.js',
      'React Native',
      'TypeScript',
      'Tailwind CSS',
      'AI Integration'
    ]
  }

  const websiteLdJson = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Nazar Palamarchuk | Full Stack Developer',
    url: siteUrl,
    inLanguage: 'en',
    potentialAction: [
      {
        '@type': 'ViewAction',
        target: [`${siteUrl}/cv.json`],
        name: 'View CV (JSON)'
      },
      {
        '@type': 'ViewAction',
        target: [`${siteUrl}/cv.pdf`],
        name: 'View CV (PDF)'
      },
      {
        '@type': 'ContactAction',
        target: [`${siteUrl}/#contact`]
      }
    ]
  }

  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${dmSans.variable} dark antialiased`}
      suppressHydrationWarning
    >
      <body className="bg-background min-h-screen">
        {children}
        <Analytics />
        <script
          id="ld-json-person"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personLdJson) }}
        />
        <script
          id="ld-json-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLdJson) }}
        />
      </body>
    </html>
  )
}
