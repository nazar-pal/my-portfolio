'use client'
import { AboutSection } from '@/components/about-section'
import { BackToTop } from '@/components/back-to-top'
import { ContactSection } from '@/components/contact-section'
import { HeroSection } from '@/components/hero-section'
import { Navigation } from '@/components/navigation'
import { WorkSection } from '@/components/work-section'

export default function Portfolio() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="text-foreground relative min-h-screen overflow-hidden">
      <Navigation scrollToSection={scrollToSection} />
      <HeroSection scrollToSection={scrollToSection} />
      <WorkSection />
      <AboutSection />
      <ContactSection />
      <BackToTop />
    </div>
  )
}
