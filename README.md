# AIG MSU - Alternative Investments Group at Michigan State University

A modern, responsive website for the Alternative Investments Group at Michigan State University, built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Glassmorphism effects, smooth animations, and MSU green branding
- **Responsive**: Fully responsive design that works on all devices
- **Performance Optimized**: Next.js 14 with image optimization, code splitting, and static generation
- **Accessible**: WCAG compliant with proper focus management and reduced motion support
- **Interactive**: Dynamic 3D backgrounds, animated counters, and interactive galleries
- **SEO Optimized**: Meta tags, structured data, and semantic HTML

## 🛠️ Tech Stack

- **Framework**: Next.js 14.2.33 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom animations
- **UI Components**: Custom components with Radix UI primitives
- **3D Graphics**: WebGL with OGL library
- **Icons**: Lucide React
- **Font**: Geist Sans

## 📁 Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── team/              # Team page
│   ├── globals.css        # Global styles and animations
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── navigation.tsx    # Main navigation
│   ├── footer.tsx        # Site footer
│   └── ...               # Other components
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── types/                # TypeScript type definitions
├── public/               # Static assets
└── styles/               # Additional stylesheets
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Codingbysid/AIG-MSU.git
cd AIG-MSU/Frontend
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors automatically
- `npm run type-check` - Run TypeScript type checking
- `npm run clean` - Clean build artifacts and cache

## 🎨 Design System

### Colors
- **Primary Green**: MSU Green (#18453B)
- **Accent**: Various shades of green
- **Background**: Dark theme with glassmorphism effects
- **Text**: High contrast for accessibility

### Animations
- Fade-in animations on scroll
- Hover effects with scale and glow
- Smooth transitions throughout
- Reduced motion support for accessibility

### Components
- **GlassCard**: Glassmorphism effect cards
- **CounterCard**: Animated number counters
- **InteractiveGallery**: Fullscreen image gallery
- **Prism**: 3D WebGL background component

## 🔧 Configuration

### Next.js Configuration
- Image optimization enabled with WebP/AVIF support
- Security headers configured
- ESLint and TypeScript error checking enabled
- Performance optimizations enabled

### ESLint Configuration
- Next.js recommended rules
- TypeScript support
- Custom rules for the project
- Flat config format (ESLint 9)

## 📱 Pages

### Homepage (`/`)
- Hero section with 3D background
- Statistics counters
- Feature highlights
- Interactive image gallery
- Call-to-action sections

### About (`/about`)
- Mission and vision
- Asset classes covered
- Achievement statistics
- Team overview

### Team (`/team`)
- Executive board members
- Member profiles with LinkedIn links
- Team statistics

### Contact (`/contact`)
- Meeting information
- Membership details
- Executive board contacts
- Contact forms

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure environment variables if needed
3. Deploy automatically on push to main branch

### Other Platforms
The app is built with Next.js and can be deployed to any platform that supports Node.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🔒 Security

- Security headers configured in Next.js
- No sensitive data in repository
- Proper .gitignore to prevent sensitive file commits
- Dependency vulnerability monitoring

## 🧪 Testing

The project uses:
- ESLint for code quality
- TypeScript for type safety
- Next.js built-in testing capabilities

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Run tests: `npm run lint && npm run type-check`
5. Commit your changes: `git commit -m 'Add feature'`
6. Push to the branch: `git push origin feature-name`
7. Submit a pull request

## 📄 License

This project is for the Alternative Investments Group at Michigan State University. All rights reserved.

## 📞 Contact

- **Email**: aigmsu@gmail.com
- **Instagram**: [@AIG_MSU](https://www.instagram.com/aig_msu/)
- **LinkedIn**: [AIG MSU](https://www.linkedin.com/company/aig-msu)

## 🙏 Acknowledgments

- Michigan State University for branding and support
- Next.js team for the excellent framework
- Tailwind CSS for the utility-first CSS framework
- All contributors and team members

---

**Built with ❤️ by the AIG MSU team**
