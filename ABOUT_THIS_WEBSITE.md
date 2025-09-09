# About This Website

A high-performance Next.js application that showcases AIG MSU's purpose, members, and events using a modern UI system, custom animations, and reusable components.

## Project Purpose

- Promote AIG MSU and its focus on alternative investments education
- Provide clear paths to learn about the mission, team, and how to get involved
- Offer a polished, accessible experience with responsive design and motion

## Tech Stack

- **Next.js 14** (App Router), React 18, TypeScript
- **Tailwind CSS v4** with custom design tokens and animations
- **Radix UI primitives** + shadcn-inspired components, Lucide Icons
- **Vercel Analytics** for privacy-aware metrics

## Key Pages & Layout

### Core Pages
- `app/layout.tsx`: Global layout, fonts, Suspense, and `@vercel/analytics`
- `app/page.tsx`: Home page with hero, stats, features, gallery, and CTAs
- `app/about/page.tsx`: About page with mission, vision, activities, achievements, history, and technical overview
- `app/team/page.tsx`: Leadership grid and team statistics
- `app/contact/page.tsx`: Contact details and form UI

## Core Components

### Navigation & Layout
- `components/navigation.tsx`: Responsive navbar with mobile drawer behavior and CTA
- `components/footer.tsx`: Contact info, social links, and copyright

### UI Components
- `components/ui/*`: Reusable UI primitives including:
  - `button`, `card`, `dialog`, `select`, `toast`
  - `input`, `textarea`, `label`, `form`
  - `accordion`, `alert`, `badge`, `breadcrumb`
  - `calendar`, `carousel`, `chart`, `checkbox`
  - `collapsible`, `command`, `context-menu`
  - `drawer`, `dropdown-menu`, `hover-card`
  - `menubar`, `navigation-menu`, `pagination`
  - `popover`, `progress`, `radio-group`
  - `scroll-area`, `separator`, `sheet`
  - `sidebar`, `skeleton`, `slider`
  - `switch`, `table`, `tabs`
  - `toggle`, `tooltip`

## Hooks & Utilities

### Custom Hooks
- `hooks/use-mobile.ts` → `useIsMobile()`: Media-query hook to detect mobile viewports
- `hooks/use-toast.ts` / `components/ui/use-toast.ts`: Centralized toast state management and helpers

### Utilities
- `lib/utils.ts` → `cn(...)`: Classname composition via `clsx` and `tailwind-merge`

## Styling & Configuration

### Styles
- `app/globals.css` / `styles/globals.css`: Design tokens, dark mode, animation utilities, and base styles
- Custom animations: fade-in-up, fade-in-right, float, counter, typewriter, gradient-x, spin-slow, pulse-slow, counter-up, shimmer
- Hover effects: hover-lift, hover-glow, interactive-card, text-shimmer

### Configuration
- `next.config.mjs`: Build settings, image config, and relaxed lint/type checks during builds
- `package.json`: Next.js, React, Radix UI, Lucide, Tailwind v4, and supporting libraries
- `public/*`: Optimized images for hero, gallery, and team sections

## How It Works

`app/layout.tsx` sets global fonts and analytics. Each page renders a shared `Navigation` and `Footer` and composes UI primitives for accessible, responsive sections. Styles and motion come from Tailwind tokens in `app/globals.css` and utility classes. Images are served from `/public` with a design that prioritizes performance and clarity.

## Key Features

- **Responsive Design**: Mobile-first approach with breakpoint-specific layouts
- **Accessibility**: ARIA-compliant components with keyboard navigation
- **Performance**: Optimized images, lazy loading, and efficient bundle splitting
- **Animations**: Custom CSS animations and transitions for enhanced UX
- **Type Safety**: Full TypeScript implementation with strict type checking
- **Modern UI**: Clean, professional design with consistent spacing and typography

## Development

The website is built with modern web development practices:
- Component-based architecture
- Server-side rendering with Next.js App Router
- CSS-in-JS with Tailwind CSS
- Type-safe development with TypeScript
- Automated linting and formatting
- Optimized for production deployment
