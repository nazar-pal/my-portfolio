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
    <nav className="fixed top-0 w-full z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="font-serif text-2xl font-bold gradient-text">NP</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map(item => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="capitalize nav-link text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-accent transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden glass border-t border-border">
          <div className="px-4 py-4 space-y-4">
            {navItems.map(item => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className="block w-full text-left capitalize text-muted-foreground hover:text-foreground transition-colors duration-300"
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
