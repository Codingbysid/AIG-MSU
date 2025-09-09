// Core types for AIG MSU website

export interface TeamMember {
  name: string;
  position: string;
  year: string;
  major: string;
  bio: string;
  image: string;
  achievements: string;
  email?: string;
  linkedin?: string;
}

export interface StatItem {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}

export interface NavItem {
  href: string;
  label: string;
}

export interface ContactInfo {
  email: string;
  location: string;
  meetingTimes: string;
  membership: string;
}

export interface Achievement {
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  label: string;
  description?: string;
}

export interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export interface GalleryItem {
  src: string;
  alt: string;
  title: string;
  description: string;
}

// Component prop types
export interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

// Animation types
export type AnimationDelay = 'delay-200' | 'delay-300' | 'delay-400' | 'delay-500' | 'delay-600' | 'delay-700' | 'delay-1000' | 'delay-2000' | 'delay-3000' | 'delay-4000';

export type AnimationType = 'fade-in-up' | 'fade-in-right' | 'fade-in' | 'float' | 'counter' | 'typewriter' | 'gradient-x' | 'spin-slow' | 'pulse-slow' | 'counter-up' | 'shimmer';

// Theme types
export interface ThemeColors {
  background: string;
  foreground: string;
  card: string;
  cardForeground: string;
  popover: string;
  popoverForeground: string;
  primary: string;
  primaryForeground: string;
  secondary: string;
  secondaryForeground: string;
  muted: string;
  mutedForeground: string;
  accent: string;
  accentForeground: string;
  destructive: string;
  destructiveForeground: string;
  border: string;
  input: string;
  ring: string;
}

// API types (for future use)
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}
