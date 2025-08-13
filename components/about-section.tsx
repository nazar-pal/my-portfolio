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
        const resume = await fetch('/Resume.pdf', { method: 'HEAD' })
        if (!cancelled && resume.ok) return setCvUrl('/Resume.pdf')
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
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 gradient-text">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full animate-shimmer" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-muted-foreground leading-relaxed">
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
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary to-primary/60 p-1 animate-pulse-glow hover-lift">
                <div className="w-full h-full rounded-full overflow-hidden bg-card">
                  <Image
                    src="/images/nazar-profile.jpg"
                    alt="Nazar Palamarchuk"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="mt-6 text-center">
                {cvUrl && (
                  <Button
                    asChild
                    className="btn-primary transition-all duration-300 hover-lift"
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
