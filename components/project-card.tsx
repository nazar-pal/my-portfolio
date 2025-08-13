'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
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
      } flex flex-col md:flex overflow-hidden animate-fade-in-scale`}
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <CardContent className="p-8 flex-1">
        <div className="flex items-center gap-3 mb-4">
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
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

        <div className="flex flex-wrap gap-2 mb-4">
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

        <p className="text-muted-foreground/80 text-sm mb-6 leading-relaxed">
          {details}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
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

        {link && (
          <Button
            asChild
            className="btn-primary transition-all duration-300 hover-lift"
          >
            <a href={link} target="_blank" rel="noopener noreferrer">
              Visit Site
              <ExternalLink className="ml-2" size={16} />
            </a>
          </Button>
        )}
      </CardContent>

      <div className="flex-1 min-h-[300px] bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center p-4">
        <div
          className={`relative hover-lift ${
            type === 'mobile'
              ? 'w-[70%] h-full max-h-[400px]'
              : 'w-full h-full max-w-md'
          }`}
        >
          <Image
            src={image}
            alt={`${title} screenshot`}
            fill
            className="object-contain rounded-lg shadow-lg"
          />
        </div>
      </div>
    </Card>
  )
}
