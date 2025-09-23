# Development Guide - AIG MSU Website

This guide provides detailed information for developers working on the AIG MSU website.

## 🏗️ Architecture Overview

The website is built using Next.js 14 with the App Router, providing:
- Server-side rendering (SSR)
- Static site generation (SSG)
- Client-side interactivity where needed
- Optimized performance and SEO

## 📂 File Organization

### Pages (`app/` directory)
- Each route is defined by a `page.tsx` file
- Layout components are in `layout.tsx`
- Global styles are in `globals.css`

### Components (`components/` directory)
- **UI Components** (`components/ui/`): Reusable, styled components
- **Layout Components**: Navigation, footer, sections
- **Feature Components**: Specific functionality (counters, galleries, etc.)

### Hooks (`hooks/` directory)
- Custom React hooks for reusable logic
- Scroll animations, motion preferences, etc.

### Utilities (`lib/` directory)
- Helper functions and utilities
- Animation configurations
- Type definitions

## 🎨 Styling Guidelines

### Tailwind CSS
- Use utility classes for styling
- Custom animations defined in `globals.css`
- MSU green (#18453B) as primary color
- Dark theme with glassmorphism effects

### Animation Classes
```css
/* Fade animations */
.animate-fade-in-up
.animate-fade-in-down

/* Scale animations */
.animate-scale-in
.animate-bounce

/* Glassmorphism */
.glass
.glass-dark
.glass-accent

/* Hover effects */
.hover-glow
.hover-lift
```

### Component Styling
```tsx
// Good: Use Tailwind utilities
<div className="bg-accent/10 hover:bg-accent/20 transition-colors duration-300">

// Good: Use custom animation classes
<div className="animate-fade-in-up delay-200">

// Good: Combine utilities for complex effects
<div className="glass hover:shadow-accent-strong transition-all-smooth">
```

## 🔧 Component Development

### Creating New Components

1. **Location**: Place in appropriate directory
   - `components/ui/` for reusable UI components
   - `components/` for page-specific components

2. **Structure**:
```tsx
"use client" // Only if using hooks or interactivity

import { cn } from '@/lib/utils'

interface ComponentProps {
  // Define props with TypeScript
  className?: string
  children: React.ReactNode
}

export function Component({ className, children, ...props }: ComponentProps) {
  return (
    <div 
      className={cn("base-classes", className)}
      {...props}
    >
      {children}
    </div>
  )
}
```

3. **Best Practices**:
   - Use TypeScript interfaces for props
   - Include `className` prop for customization
   - Use `cn()` utility for conditional classes
   - Add proper accessibility attributes

### Animation Integration

```tsx
// Using scroll animations
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

export function AnimatedComponent() {
  const { ref, isVisible } = useScrollAnimation({ 
    triggerOnce: true,
    delay: 200 
  })

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-500',
        isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
      )}
    >
      Content
    </div>
  )
}
```

## 🎯 Performance Guidelines

### Image Optimization
```tsx
import Image from 'next/image'

// Good: Use Next.js Image component
<Image
  src="/team-photo-1.jpeg"
  alt="Team meeting"
  width={400}
  height={300}
  className="rounded-lg"
/>
```

### Code Splitting
```tsx
// Good: Dynamic imports for heavy components
const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <LoadingSpinner />
})
```

### Bundle Optimization
- Remove unused imports
- Use tree-shaking friendly imports
- Avoid importing entire libraries when only using specific functions

## 🔍 SEO and Accessibility

### Meta Tags
```tsx
// In layout.tsx or page.tsx
export const metadata = {
  title: 'Page Title - AIG MSU',
  description: 'Page description for SEO',
  openGraph: {
    title: 'Page Title',
    description: 'Page description',
    images: ['/og-image.jpg']
  }
}
```

### Accessibility
```tsx
// Good: Proper semantic HTML and ARIA attributes
<button
  aria-label="Close modal"
  onClick={handleClose}
  className="sr-only focus:not-sr-only"
>
  <X className="h-6 w-6" />
</button>

// Good: Skip links for navigation
<a href="#main-content" className="skip-link">
  Skip to main content
</a>
```

## 🧪 Testing and Quality

### ESLint Rules
- Follow Next.js recommended rules
- Fix all TypeScript errors
- Use meaningful variable names
- Avoid unused imports

### Code Review Checklist
- [ ] TypeScript types are properly defined
- [ ] Components are accessible
- [ ] Images are optimized
- [ ] Animations respect reduced motion
- [ ] No console errors or warnings
- [ ] Responsive design works on all devices

## 🚀 Deployment Process

### Pre-deployment Checklist
1. Run `npm run lint` - fix all errors
2. Run `npm run type-check` - fix TypeScript errors
3. Run `npm run build` - ensure build succeeds
4. Test on multiple devices/browsers
5. Check accessibility with screen readers

### Environment Variables
```bash
# .env.local (for development)
NEXT_PUBLIC_ANALYTICS_ID=your-analytics-id

# .env.production (for production)
NEXT_PUBLIC_ANALYTICS_ID=your-production-analytics-id
```

## 🐛 Debugging

### Common Issues

1. **Build Errors**:
   - Check TypeScript types
   - Verify all imports are correct
   - Ensure all dependencies are installed

2. **Runtime Errors**:
   - Check browser console
   - Verify client/server component usage
   - Check for hydration mismatches

3. **Performance Issues**:
   - Use React DevTools Profiler
   - Check bundle size with `npm run analyze`
   - Optimize images and animations

### Debug Tools
```tsx
// Development-only logging
if (process.env.NODE_ENV === 'development') {
  console.log('Debug info:', data)
}
```

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React Documentation](https://react.dev/)
- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

## 🤝 Contributing Guidelines

1. **Branch Naming**: `feature/description` or `fix/description`
2. **Commit Messages**: Use conventional commits
3. **Pull Requests**: Include description and screenshots
4. **Testing**: Test on multiple devices and browsers

## 📞 Getting Help

- Check the [README.md](./README.md) for basic setup
- Review existing components for patterns
- Ask team members for guidance
- Create issues for bugs or feature requests

---

**Happy coding! 🚀**
