"use client"

import { Button } from "@/components/ui/button"
import { ReactNode } from "react"

interface AnimatedButtonProps {
  children: ReactNode
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  className?: string
  onClick?: () => void
  href?: string
  disabled?: boolean
  loading?: boolean
  animationType?: 'ripple' | 'shimmer' | 'glow' | 'bounce'
}

export default function AnimatedButton({
  children,
  variant = "default",
  size = "default",
  className = "",
  onClick,
  href,
  disabled = false,
  loading = false,
  animationType = 'ripple'
}: AnimatedButtonProps) {
  const baseClasses = "relative overflow-hidden transition-all duration-300"
  
  const animationClasses = {
    ripple: "animate-ripple",
    shimmer: "animate-shimmer",
    glow: "animate-pulse-glow",
    bounce: "hover:animate-bounce-in"
  }

  const buttonElement = (
    <Button
      variant={variant}
      size={size}
      className={`${baseClasses} ${animationClasses[animationType]} ${className}`}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-inherit">
          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <span className={loading ? "opacity-0" : "opacity-100 transition-opacity duration-300"}>
        {children}
      </span>
    </Button>
  )

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="inline-block">
        {buttonElement}
      </a>
    )
  }

  return buttonElement
}
