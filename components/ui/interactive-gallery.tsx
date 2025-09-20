"use client"

import { useState, useRef, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { ArrowRight, X, ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface GalleryItem {
  src: string
  alt: string
  title: string
  description: string
}

interface InteractiveGalleryProps {
  items: GalleryItem[]
  className?: string
}

export function InteractiveGallery({ items, className }: InteractiveGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const galleryRef = useRef<HTMLDivElement>(null)

  const openModal = (index: number) => {
    setSelectedIndex(index)
    setIsFullscreen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = useCallback(() => {
    setSelectedIndex(null)
    setIsFullscreen(false)
    document.body.style.overflow = 'unset'
  }, [])

  const nextImage = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % items.length)
    }
  }, [selectedIndex, items.length])

  const prevImage = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? items.length - 1 : selectedIndex - 1)
    }
  }, [selectedIndex, items.length])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isFullscreen) return
      
      switch (e.key) {
        case 'Escape':
          closeModal()
          break
        case 'ArrowRight':
          nextImage()
          break
        case 'ArrowLeft':
          prevImage()
          break
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isFullscreen, selectedIndex, nextImage, prevImage, closeModal])

  return (
    <>
      <div ref={galleryRef} className={cn("grid grid-cols-1 md:grid-cols-3 gap-6", className)}>
        {items.map((item, index) => (
          <div
            key={index}
            className="relative h-64 rounded-xl overflow-hidden group cursor-pointer micro-interaction"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => openModal(index)}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover group-hover:scale-125 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 transition-all duration-500"></div>
            
            {/* Content overlay */}
            <div className="absolute bottom-4 left-4 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
              <h3 className="font-semibold text-lg group-hover:text-accent transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-sm opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                {item.description}
              </p>
            </div>
            
            {/* Hover indicator */}
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:bg-accent/30 transition-colors duration-300">
                <ArrowRight className="h-4 w-4 text-white group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>
            
            {/* Border effect */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent/30 rounded-xl transition-all duration-500"></div>
            
            {/* Shimmer effect */}
            {hoveredIndex === index && (
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
            )}
          </div>
        ))}
      </div>

      {/* Fullscreen Modal */}
      {isFullscreen && selectedIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl max-h-[90vh] bg-card rounded-2xl overflow-hidden shadow-2xl">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-all duration-300 micro-interaction"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Navigation buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-all duration-300 micro-interaction"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-all duration-300 micro-interaction"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* Image */}
            <div className="relative w-full h-96 md:h-[500px]">
              <Image
                src={items[selectedIndex].src}
                alt={items[selectedIndex].alt}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                {items[selectedIndex].title}
              </h3>
              <p className="text-muted-foreground">
                {items[selectedIndex].description}
              </p>
              
              {/* Image counter */}
              <div className="mt-4 text-sm text-muted-foreground">
                {selectedIndex + 1} of {items.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
