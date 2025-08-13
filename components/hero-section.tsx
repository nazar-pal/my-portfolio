'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles } from 'lucide-react'
import { useEffect, useState } from 'react'

interface HeroSectionProps {
  scrollToSection: (id: string) => void
}

export function HeroSection({ scrollToSection }: HeroSectionProps) {
  const [scrollY, setScrollY] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div
        className="pointer-events-none fixed inset-0 opacity-30 transition-all duration-1000 ease-out"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, oklch(0.65 0.25 264 / 0.15), transparent 40%)`
        }}
      />

      <div
        className="absolute inset-0 opacity-20"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
          background:
            'radial-gradient(circle at 20% 80%, oklch(0.65 0.25 264 / 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, oklch(0.7 0.2 280 / 0.3) 0%, transparent 50%)'
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <div className="animate-slide-in-up">
          <div className="mb-6 flex items-center justify-center">
            <Sparkles
              className="text-primary animate-bounce-subtle mr-3"
              size={32}
            />
            <span className="text-primary font-medium">
              Crafting Digital Solutions with Precision & Passion
            </span>
          </div>

          <h1 className="mb-6 font-serif text-5xl font-bold md:text-7xl lg:text-8xl">
            <span className="gradient-text">Nazar</span>
            <br />
            <span className="text-foreground">Palamarchuk</span>
          </h1>

          <p className="text-muted-foreground mx-auto mb-8 max-w-3xl text-xl leading-relaxed md:text-2xl">
            Full Stack Web & Mobile Developer with AI Expertise
          </p>

          <p className="text-muted-foreground mb-8 text-lg">
            Lviv, Ukraine • Remote & Relocation Available
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              onClick={() => scrollToSection('contact')}
              className="btn-primary animate-pulse-glow rounded-full px-8 py-3 text-lg font-medium"
            >
              Get in touch
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollToSection('work')}
              className="border-border hover:bg-accent hover-lift rounded-full px-8 py-3 text-lg font-medium transition-all duration-300"
            >
              View my work
            </Button>
          </div>
        </div>
      </div>

      <div
        className="bg-primary/20 animate-float absolute top-20 left-10 h-20 w-20 rounded-full blur-sm"
        style={{ animationDelay: '0s' }}
      />
      <div
        className="bg-primary/30 animate-float absolute top-40 right-20 h-16 w-16 rounded-full blur-sm"
        style={{ animationDelay: '2s' }}
      />
      <div
        className="bg-primary/25 animate-float absolute bottom-40 left-20 h-12 w-12 rounded-full blur-sm"
        style={{ animationDelay: '4s' }}
      />
      <div
        className="bg-primary/20 animate-float absolute top-1/2 right-10 h-8 w-8 rounded-full blur-sm"
        style={{ animationDelay: '1s' }}
      />
    </section>
  )
}
