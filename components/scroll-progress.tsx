"use client"

import { useScrollProgress } from '@/hooks/use-scroll-animation'
import { cn } from '@/lib/utils'

interface ScrollProgressProps {
  className?: string
  height?: number
  showPercentage?: boolean
}

export function ScrollProgress({ 
  className, 
  height = 4,
  showPercentage = false 
}: ScrollProgressProps) {
  const progress = useScrollProgress()

  return (
    <div className={cn('fixed top-0 left-0 right-0 z-50', className)}>
      <div
        className="bg-accent/20 transition-all duration-150 ease-out"
        style={{ height: `${height}px` }}
      >
        <div
          className="h-full bg-gradient-to-r from-accent via-green-400 to-accent transition-all duration-150 ease-out relative overflow-hidden"
          style={{ width: `${progress}%` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
        </div>
      </div>
      {showPercentage && (
        <div className="absolute top-2 right-4 text-xs text-accent font-medium">
          {Math.round(progress)}%
        </div>
      )}
    </div>
  )
}
