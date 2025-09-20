import * as React from 'react'
import { cn } from '@/lib/utils'

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'subtle' | 'strong'
  blur?: 'sm' | 'md' | 'lg' | 'xl'
  children: React.ReactNode
}

const glassVariants = {
  default: 'bg-white/10 backdrop-blur-md border border-white/20',
  subtle: 'bg-white/5 backdrop-blur-sm border border-white/10',
  strong: 'bg-white/20 backdrop-blur-lg border border-white/30'
}

const blurVariants = {
  sm: 'backdrop-blur-sm',
  md: 'backdrop-blur-md',
  lg: 'backdrop-blur-lg',
  xl: 'backdrop-blur-xl'
}

export function GlassCard({ 
  className, 
  variant = 'default', 
  blur = 'md',
  children, 
  ...props 
}: GlassCardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl shadow-2xl transition-all duration-300 hover:shadow-3xl',
        'hover:scale-[1.02] hover:bg-white/15',
        glassVariants[variant],
        blurVariants[blur],
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export function GlassCardContent({ 
  className, 
  children, 
  ...props 
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('p-6', className)}
      {...props}
    >
      {children}
    </div>
  )
}

export function GlassCardHeader({ 
  className, 
  children, 
  ...props 
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('p-6 pb-4', className)}
      {...props}
    >
      {children}
    </div>
  )
}
