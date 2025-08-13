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
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div
        className="fixed inset-0 opacity-30 pointer-events-none transition-all duration-1000 ease-out"
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-slide-in-up">
          <div className="flex items-center justify-center mb-6">
            <Sparkles
              className="text-primary mr-3 animate-bounce-subtle"
              size={32}
            />
            <span className="text-primary font-medium">
              Crafting Digital Solutions with Precision & Passion
            </span>
          </div>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className="gradient-text">Nazar</span>
            <br />
            <span className="text-foreground">Palamarchuk</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Full Stack Web & Mobile Developer with AI Expertise
          </p>

          <p className="text-lg text-muted-foreground mb-8">
            Lviv, Ukraine • Remote & Relocation Available
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => scrollToSection('contact')}
              className="btn-primary px-8 py-3 rounded-full text-lg font-medium animate-pulse-glow"
            >
              Get in touch
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollToSection('work')}
              className="border-border hover:bg-accent px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 hover-lift"
            >
              View my work
            </Button>
          </div>
        </div>
      </div>

      <div
        className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full animate-float blur-sm"
        style={{ animationDelay: '0s' }}
      />
      <div
        className="absolute top-40 right-20 w-16 h-16 bg-primary/30 rounded-full animate-float blur-sm"
        style={{ animationDelay: '2s' }}
      />
      <div
        className="absolute bottom-40 left-20 w-12 h-12 bg-primary/25 rounded-full animate-float blur-sm"
        style={{ animationDelay: '4s' }}
      />
      <div
        className="absolute top-1/2 right-10 w-8 h-8 bg-primary/20 rounded-full animate-float blur-sm"
        style={{ animationDelay: '1s' }}
      />
    </section>
  )
}
