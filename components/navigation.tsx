'use client'

import { Menu, X } from 'lucide-react'
import { useState } from 'react'

interface NavigationProps {
  scrollToSection: (id: string) => void
}

export function Navigation({ scrollToSection }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = ['work', 'about', 'contact']

  const handleNavClick = (item: string) => {
    scrollToSection(item)
    setIsMenuOpen(false)
  }

  return (
    <nav className="glass fixed top-0 z-50 w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <div className="gradient-text font-serif text-2xl font-bold">NP</div>

          {/* Desktop Navigation */}
          <div className="hidden space-x-8 md:flex">
            {navItems.map(item => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="nav-link text-muted-foreground hover:text-foreground capitalize transition-colors duration-300"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="hover:bg-accent rounded-lg p-2 transition-colors duration-200 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="glass border-border border-t md:hidden">
          <div className="space-y-4 px-4 py-4">
            {navItems.map(item => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className="text-muted-foreground hover:text-foreground block w-full text-left capitalize transition-colors duration-300"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
