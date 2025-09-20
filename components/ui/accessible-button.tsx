"use client"

import { forwardRef, useRef, useEffect } from 'react'
import { Button, buttonVariants } from './button'
import { cn } from '@/lib/utils'
import { useReducedMotion } from '@/hooks/use-reduced-motion'

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
  size?: 'default' | 'sm' | 'lg' | 'icon'
  asChild?: boolean
  focusRing?: boolean
  announceChanges?: boolean
}

export const AccessibleButton = forwardRef<HTMLButtonElement, AccessibleButtonProps>(
  ({ 
    className, 
    variant = 'default', 
    size = 'default', 
    asChild = false, 
    focusRing = true,
    announceChanges = false,
    children,
    ...props 
  }, ref) => {
    const buttonRef = useRef<HTMLButtonElement>(null)
    const prefersReducedMotion = useReducedMotion()
    
    // Combine refs
    useEffect(() => {
      if (typeof ref === 'function') {
        ref(buttonRef.current)
      } else if (ref) {
        ref.current = buttonRef.current
      }
    }, [ref])

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (announceChanges) {
        // Announce changes to screen readers
        const announcement = document.createElement('div')
        announcement.setAttribute('aria-live', 'polite')
        announcement.setAttribute('aria-atomic', 'true')
        announcement.className = 'sr-only'
        announcement.textContent = 'Button activated'
        document.body.appendChild(announcement)
        
        setTimeout(() => {
          document.body.removeChild(announcement)
        }, 1000)
      }
      
      props.onClick?.(e)
    }

    return (
      <Button
        ref={buttonRef}
        className={cn(
          focusRing && 'focus-ring',
          prefersReducedMotion && 'transition-none',
          className
        )}
        variant={variant}
        size={size}
        asChild={asChild}
        onClick={handleClick}
        {...props}
      >
        {children}
      </Button>
    )
  }
)

AccessibleButton.displayName = 'AccessibleButton'
