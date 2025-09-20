"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/team", label: "Team" },
    { href: "/contact", label: "Contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-background/95 backdrop-blur-md shadow-glass border-b border-border/50' 
        : 'bg-background/80 backdrop-blur-sm border-b border-border/30'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
              AIG<span className="text-gradient">MSU</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-all duration-300 font-medium relative group micro-interaction"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
                <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdeZ2R8BlRbj3rS3LdnZTgmfgSbavyngUWLZQAY1MZyaHS8GQ/viewform?usp=preview" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-accent hover:bg-accent/90 text-accent-foreground transition-all-spring hover:scale-105 hover:shadow-accent-strong micro-interaction">
                    Join AIG
                  </Button>
                </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-foreground hover:bg-accent/10 transition-all-spring micro-interaction"
            >
              <div className="relative w-6 h-6">
                <Menu className={`h-6 w-6 transition-all duration-300 ${isOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'}`} />
                <X className={`h-6 w-6 absolute top-0 left-0 transition-all duration-300 ${isOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`} />
              </div>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 glass-accent border-t border-border/50">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-all duration-300 rounded-lg hover:bg-accent/10 micro-interaction"
                onClick={() => setIsOpen(false)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.label}
              </Link>
            ))}
                <div className="px-3 py-2">
                  <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdeZ2R8BlRbj3rS3LdnZTgmfgSbavyngUWLZQAY1MZyaHS8GQ/viewform?usp=preview" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground transition-all-spring hover:scale-105 micro-interaction">
                      Join AIG
                    </Button>
                  </Link>
                </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
