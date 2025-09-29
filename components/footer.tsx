"use client"

import Link from "next/link"
import { Mail, MapPin, Linkedin, Instagram, ArrowUp } from "lucide-react"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gradient-to-t from-muted via-background to-muted border-t border-border relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-accent/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-primary/15 rounded-full blur-3xl animate-pulse-slow delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4 animate-fade-in-up">
            <div className="flex items-center space-x-3">
              <img
                src="/Main logo.png"
                alt="AIG MSU Logo"
                width={50}
                height={50}
                className="rounded-lg"
              />
              <div className="text-2xl font-bold text-foreground">
                AIG<span className="text-gradient">MSU</span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              The Alternative Investments Group at Michigan State University. Empowering students with knowledge and
              experience in alternative investment strategies.
            </p>
                <div className="flex space-x-4">
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-accent transition-all-spring hover:scale-110 micro-interaction"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Link>
                  <Link
                    href="https://www.instagram.com/aig_msu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-accent transition-all-spring hover:scale-110 micro-interaction"
                  >
                    <Instagram className="h-5 w-5" />
                  </Link>
                  <p className="text-sm text-muted-foreground">Follow us @AIG_MSU</p>
                </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 animate-fade-in-up delay-200">
            <h3 className="text-lg font-semibold text-foreground">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground hover:text-accent transition-colors duration-300 group">
                <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                  <Mail className="h-4 w-4" />
                </div>
                <span className="text-sm">aigmsu@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground hover:text-accent transition-colors duration-300 group">
                <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                  <MapPin className="h-4 w-4" />
                </div>
                <span className="text-sm">East Lansing, MI 48823</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 animate-fade-in-up delay-400">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <div className="space-y-2">
              <Link 
                href="/about" 
                className="block text-muted-foreground hover:text-accent transition-colors duration-300 text-sm micro-interaction"
              >
                About AIG MSU
              </Link>
              <Link 
                href="/team" 
                className="block text-muted-foreground hover:text-accent transition-colors duration-300 text-sm micro-interaction"
              >
                Leadership Team
              </Link>
              <Link 
                href="/contact" 
                className="block text-muted-foreground hover:text-accent transition-colors duration-300 text-sm micro-interaction"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-center sm:text-left text-sm text-muted-foreground">
            © 2025 by The Alternative Investments Group at MSU. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 text-muted-foreground hover:text-accent transition-all-spring hover:scale-105 micro-interaction"
          >
            <span className="text-sm">Back to top</span>
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  )
}
