'use client'

import { Button } from '@/components/ui/button'
import { ChevronUp } from 'lucide-react'
import { useEffect, useState } from 'react'

export function BackToTop() {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!showBackToTop) return null

  return (
    <Button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="btn-primary animate-pulse-glow fixed right-8 bottom-8 z-50 rounded-full p-3 shadow-lg"
      aria-label="Back to top"
    >
      <ChevronUp size={24} />
    </Button>
  )
}
