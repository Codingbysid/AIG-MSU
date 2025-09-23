"use client"

import { useEffect, useRef, useState } from 'react'

interface UseAdvancedScrollAnimationOptions {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
  animationType?: 'fadeIn' | 'slideInLeft' | 'slideInRight' | 'slideInUp' | 'slideInDown' | 'scaleIn' | 'rotateIn' | 'bounceIn'
  delay?: number
  duration?: number
}

export function useAdvancedScrollAnimation({
  threshold = 0.1,
  rootMargin = '0px 0px -100px 0px',
  triggerOnce = true,
  animationType = 'fadeIn',
  delay = 0,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  duration = 0.6
}: UseAdvancedScrollAnimationOptions = {}) {
  const [isVisible, setIsVisible] = useState(false)
  const [hasTriggered, setHasTriggered] = useState(false)
  const elementRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && (!triggerOnce || !hasTriggered)) {
          setTimeout(() => {
            setIsVisible(true)
            setHasTriggered(true)
          }, delay)
        } else if (!triggerOnce && !entry.isIntersecting) {
          setIsVisible(false)
        }
      },
      {
        threshold,
        rootMargin
      }
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [threshold, rootMargin, triggerOnce, hasTriggered, delay])

  const getAnimationClass = () => {
    if (!isVisible) {
      const baseClasses = 'opacity-0 transition-all duration-700 ease-out'
      
      switch (animationType) {
        case 'fadeIn':
          return `${baseClasses}`
        case 'slideInLeft':
          return `${baseClasses} -translate-x-10`
        case 'slideInRight':
          return `${baseClasses} translate-x-10`
        case 'slideInUp':
          return `${baseClasses} translate-y-10`
        case 'slideInDown':
          return `${baseClasses} -translate-y-10`
        case 'scaleIn':
          return `${baseClasses} scale-95`
        case 'rotateIn':
          return `${baseClasses} rotate-12 scale-95`
        case 'bounceIn':
          return `${baseClasses} scale-75`
        default:
          return baseClasses
      }
    }

    const visibleClasses = 'opacity-100 transition-all duration-700 ease-out'
    
    switch (animationType) {
      case 'fadeIn':
        return `${visibleClasses}`
      case 'slideInLeft':
        return `${visibleClasses} translate-x-0`
      case 'slideInRight':
        return `${visibleClasses} translate-x-0`
      case 'slideInUp':
        return `${visibleClasses} translate-y-0`
      case 'slideInDown':
        return `${visibleClasses} translate-y-0`
      case 'scaleIn':
        return `${visibleClasses} scale-100`
      case 'rotateIn':
        return `${visibleClasses} rotate-0 scale-100`
      case 'bounceIn':
        return `${visibleClasses} scale-100 animate-bounce-in`
      default:
        return visibleClasses
    }
  }

  return {
    ref: elementRef,
    isVisible,
    animationClass: getAnimationClass()
  }
}
