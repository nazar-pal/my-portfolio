'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export function AboutSection() {
  const [cvUrl, setCvUrl] = useState<string | null>(null)
  useEffect(() => {
    let cancelled = false
    const probe = async () => {
      try {
        const cv = await fetch('/CV.pdf', { method: 'HEAD' })
        if (!cancelled && cv.ok) return setCvUrl('/CV.pdf')
      } catch {}
      try {
        const cv = await fetch('/CV.json', { method: 'HEAD' })
        if (!cancelled && cv.ok) return setCvUrl('/CV.json')
      } catch {}
      if (!cancelled) setCvUrl(null)
    }
    probe()
    return () => {
      cancelled = true
    }
  }, [])
  const skills = [
    'TypeScript',
    'React/Next.js',
    'React Native',
    'AI Integration',
    'SaaS Development'
  ]

  return (
    <section id="about" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="gradient-text mb-4 font-serif text-4xl font-bold md:text-5xl">
            About Me
          </h2>
          <div className="bg-primary animate-shimmer mx-auto h-1 w-24 rounded-full" />
        </div>

        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="text-muted-foreground space-y-6 leading-relaxed">
            <p className="text-lg">
              I&apos;m a{' '}
              <strong className="text-foreground">
                Full Stack Web & Mobile Developer with AI Expertise
              </strong>{' '}
              based in Lviv, Ukraine. I specialize in building SaaS applications
              from MVP to production deployment, with a focus on{' '}
              <strong className="text-foreground">
                TypeScript-first architecture
              </strong>{' '}
              and{' '}
              <strong className="text-foreground">AI-powered features</strong>,
              delivering exceptional user experiences.
            </p>

            <p className="text-lg">
              Currently, I work as a Stress Analyst{' '}
              <strong className="text-foreground">at Boeing</strong>, supporting
              737 NG and 737 MAX programs in an{' '}
              <strong className="text-foreground">international team</strong> of
              ~50 engineers across{' '}
              <strong className="text-foreground">
                Poland, India, the U.S., and Australia
              </strong>
              . This role has strengthened my presentation, communication, and
              collaboration skills while delivering high-quality work
              <strong className="text-foreground">
                {' '}
                under tight deadlines
              </strong>{' '}
              and high-pressure conditions.
            </p>

            <p className="text-lg">
              My core expertise includes React, Next.js, React Native,
              TypeScript, and integrating AI features into both web and mobile
              applications. I&apos;m passionate about creating solutions that
              solve real-world problems and delight users.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              {skills.map(skill => (
                <Badge key={skill} className="tech-badge">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="from-primary to-primary/60 animate-pulse-glow hover-lift h-80 w-80 rounded-full bg-gradient-to-br p-1">
                <div className="bg-card h-full w-full overflow-hidden rounded-full">
                  <Image
                    src="/images/nazar-profile.webp"
                    alt="Nazar Palamarchuk"
                    width={320}
                    height={320}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="mt-6 text-center">
                {cvUrl && (
                  <Button
                    asChild
                    className="btn-primary hover-lift transition-all duration-300"
                  >
                    <a href={cvUrl} target="_blank" rel="noopener noreferrer">
                      View CV
                      <ExternalLink className="ml-2" size={16} />
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
