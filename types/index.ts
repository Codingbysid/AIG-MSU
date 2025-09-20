import { LucideIcon } from 'lucide-react'

export interface Feature {
  title: string
  description: string
  icon: LucideIcon
}

export interface Achievement {
  value: string
  label: string
  icon: LucideIcon
}

export interface StatItem {
  value: string
  label: string
  icon: LucideIcon
}

export interface TeamMember {
  name: string
  role: string
  image: string
  bio: string
  linkedin?: string
  email?: string
}
