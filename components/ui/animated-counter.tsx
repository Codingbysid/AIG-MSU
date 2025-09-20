"use client"

import { useAnimatedCounter } from '@/hooks/use-scroll-animation'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { cn } from '@/lib/utils'

interface AnimatedCounterProps {
  end: number
  duration?: number
  start?: number
  suffix?: string
  prefix?: string
  className?: string
  delay?: number
}

export function AnimatedCounter({ 
  end, 
  duration = 2000, 
  start = 0, 
  suffix = '', 
  prefix = '',
  className,
  delay = 0
}: AnimatedCounterProps) {
  const { ref, isVisible } = useScrollAnimation({ 
    triggerOnce: true, 
    delay 
  })
  const { count } = useAnimatedCounter(end, duration, start, isVisible)

  return (
    <span
      ref={ref}
      className={cn(
        'inline-block transition-all duration-300',
        isVisible ? 'animate-counter-up' : 'opacity-0 scale-90',
        className
      )}
    >
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  )
}

interface CounterCardProps {
  value: number
  label: string
  icon?: React.ReactNode
  delay?: number
  className?: string
}

export function CounterCard({ 
  value, 
  label, 
  icon, 
  delay = 0,
  className 
}: CounterCardProps) {
  const { ref, isVisible } = useScrollAnimation({ 
    triggerOnce: true, 
    delay 
  })

  return (
    <div
      ref={ref}
      className={cn(
        'text-center group transition-all duration-500',
        'hover:scale-110 cursor-pointer p-6 rounded-xl',
        'hover:bg-accent/5 hover:shadow-lg hover:shadow-accent/10',
        isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8',
        className
      )}
    >
      {icon && (
        <div className="w-12 h-12 mx-auto mb-4 text-accent group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
      )}
      <div className="text-3xl md:text-4xl font-bold text-accent mb-2 group-hover:animate-bounce">
        <AnimatedCounter end={value} delay={delay} />
      </div>
      <p className="text-sm text-muted-foreground group-hover:text-accent transition-colors duration-300">
        {label}
      </p>
      <div className="w-0 group-hover:w-full h-0.5 bg-accent mx-auto mt-2 transition-all duration-500"></div>
    </div>
  )
}
