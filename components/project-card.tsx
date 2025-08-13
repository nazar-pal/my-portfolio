'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { env } from '@/env'
import { ExternalLink } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

interface ProjectCardProps {
  title: string
  description: string
  tech: string[]
  status: string
  type: 'mobile' | 'web'
  badges: string[]
  image: string
  details: string
  link?: string
  index: number
}

export function ProjectCard({
  title,
  description,
  tech,
  status,
  type,
  badges,
  image,
  details,
  link,
  index
}: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleTechStack = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <Card
      className={`project-card ${
        index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
      } animate-fade-in-scale flex flex-col overflow-hidden md:flex`}
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <CardContent className="flex-1 p-8">
        <div className="mb-4 flex items-center gap-3">
          <h3 className="text-foreground font-serif text-2xl font-bold md:text-3xl">
            {title}
          </h3>
          <Badge
            variant={status === 'Live' ? 'default' : 'secondary'}
            className={`${
              status === 'Live'
                ? 'bg-green-600 hover:bg-green-700'
                : 'bg-orange-600 hover:bg-orange-700'
            } transition-colors duration-200`}
          >
            {status}
          </Badge>
        </div>

        <div className="mb-4 flex flex-wrap gap-2">
          {badges.map(badge => (
            <Badge
              key={badge}
              variant="outline"
              className="border-primary/30 text-primary bg-primary/10 hover:bg-primary/20 transition-colors duration-200"
            >
              {badge}
            </Badge>
          ))}
        </div>

        <p className="text-muted-foreground mb-4 leading-relaxed">
          {description}
        </p>

        <p className="text-muted-foreground/80 mb-6 text-sm leading-relaxed">
          {details}
        </p>

        <div className="mb-6 flex flex-wrap gap-2">
          {(isExpanded ? tech : tech.slice(0, 8)).map(techItem => (
            <Badge key={techItem} className="tech-badge">
              {techItem}
            </Badge>
          ))}
          {tech.length > 8 && (
            <Badge
              className="tech-badge cursor-pointer hover:scale-105"
              onClick={toggleTechStack}
            >
              {isExpanded ? 'Show less' : `+${tech.length - 8} more`}
            </Badge>
          )}
        </div>

        {/* Full technology list present in DOM for LLMs and assistive tech */}
        <div className="sr-only">
          <p>Technologies used: {tech.join(', ')}</p>
        </div>

        {link && (
          <Button
            asChild
            className="btn-primary hover-lift transition-all duration-300"
          >
            <a href={link} target="_blank" rel="noopener noreferrer">
              Visit Site
              <ExternalLink className="ml-2" size={16} />
            </a>
          </Button>
        )}
      </CardContent>

      <div className="from-primary/10 to-primary/5 flex min-h-[300px] flex-1 items-center justify-center bg-gradient-to-br p-4">
        <div
          className={`hover-lift relative ${
            type === 'mobile'
              ? 'h-full max-h-[400px] w-[70%]'
              : 'h-full w-full max-w-md'
          }`}
        >
          <Image
            src={image}
            alt={`${title} screenshot`}
            fill
            className="rounded-lg object-contain shadow-lg"
          />
        </div>
      </div>

      {/* Per-project JSON-LD to help LLMs and search engines */}
      {(() => {
        const siteUrl = env.NEXT_PUBLIC_SITE_URL
        const imageUrl = `${siteUrl}${image}`
        const keywords = Array.from(
          new Set([...(tech || []), ...(badges || [])])
        )
        const category =
          type === 'mobile' ? 'MobileApplication' : 'WebApplication'
        const projectLd = {
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: title,
          description,
          applicationCategory: category,
          operatingSystem: type === 'mobile' ? 'iOS, Android' : 'Any',
          image: imageUrl,
          author: {
            '@type': 'Person',
            name: 'Nazar Palamarchuk',
            url: siteUrl
          },
          keywords: keywords.join(', '),
          ...(link ? { url: link } : {})
        }
        return (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(projectLd) }}
          />
        )
      })()}
    </Card>
  )
}
