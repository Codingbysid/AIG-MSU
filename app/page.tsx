"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { GlassCard, GlassCardContent } from "@/components/ui/glass-card"
import { AnimatedCounter, CounterCard } from "@/components/ui/animated-counter"
import CircularGallery from "@/components/ui/circular-gallery"
import DarkVeil from "@/components/ui/dark-veil"
import { TrendingUp, Users, BookOpen, Calendar, ArrowRight, Award } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  const galleryItems = [
    {
      image: "/team-photo-1.jpeg",
      text: "Weekly Meetings"
    },
    {
      image: "/team-photo-4.jpeg",
      text: "Professional Networking"
    },
    {
      image: "/social-event-dinner.png",
      text: "Social Events"
    },
    {
      image: "/team-photo-2.jpeg",
      text: "Educational Workshops"
    },
    {
      image: "/team-photo-3.jpeg",
      text: "Industry Connections"
    },
    {
      image: "/team-photo-5.jpeg",
      text: "Team Building"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main id="main-content">

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-20 h-20 border border-accent/30 rounded-full animate-float delay-1000"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-accent/20 rounded-full animate-pulse-slow delay-500"></div>
          <div className="absolute bottom-32 left-1/4 w-24 h-24 border border-accent/20 rotate-45 animate-spin-slow delay-2000"></div>
          <div className="absolute top-1/2 right-10 w-12 h-12 bg-gradient-to-r from-accent/30 to-primary/30 rounded-full animate-bounce delay-3000"></div>
        </div>

        {/* DarkVeil Background */}
        <div className="absolute inset-0 w-full h-full">
          <DarkVeil
            hueShift={0}
            noiseIntensity={0.02}
            scanlineIntensity={0.1}
            speed={0.3}
            scanlineFrequency={2.0}
            warpAmount={0.3}
            resolutionScale={1}
          />
        </div>
        

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-4">
                <p className="text-sm font-medium text-accent uppercase tracking-wide animate-fade-in delay-200">
                  Michigan State University
                </p>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white text-balance animate-fade-in-up delay-300">
                  Alternative <span className="text-accent font-bold">Investments</span> Group
                </h1>
              </div>
              <p className="text-xl text-white/90 max-w-2xl text-pretty animate-fade-in-up delay-500">
                    Empowering students with knowledge and experience in alternative investment strategies that are not open to the public and require a large pool of private capital.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-700">
                    <Link href="/about">
                <Button
                  size="lg"
                        className="bg-accent hover:bg-accent/90 text-accent-foreground group transition-all-spring hover:scale-105 hover:shadow-accent-strong relative overflow-hidden micro-interaction"
                >
                  <span className="relative z-10">Learn More About AIG</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </Button>
                    </Link>
                    <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdeZ2R8BlRbj3rS3LdnZTgmfgSbavyngUWLZQAY1MZyaHS8GQ/viewform?usp=preview" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  variant="outline"
                        className="hover:scale-105 transition-all-spring bg-transparent hover:bg-accent/5 hover:border-accent/50 hover:shadow-lg micro-interaction border-gradient-accent text-white border-white/30 hover:text-white hover:border-white/50"
                >
                  Join Our Community
                </Button>
                    </Link>
              </div>
            </div>

            <div className="relative animate-fade-in-right delay-500">
              <div className="relative w-full h-96 lg:h-[400px] rounded-2xl overflow-hidden shadow-accent-strong hover:shadow-accent-strong transition-all-spring group">
                <Image
                      src="/team-photo-1.jpeg"
                      alt="AIG MSU members at weekly meeting"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                      priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/30 transition-all duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="text-white text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-xl font-bold mb-2">Real-World Experience</h3>
                    <p className="text-sm">Hands-on learning with industry tools</p>
                  </div>
                </div>
              </div>

                  {/* Enhanced floating cards with glassmorphism */}

              <GlassCard className="absolute -top-6 -right-6 p-4 animate-float delay-1000 hover:shadow-accent-strong transition-all-spring cursor-pointer micro-interaction">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center animate-pulse-slow delay-500">
                    <Users className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Active Members</p>
                        <p className="text-lg font-bold text-accent">
                          <AnimatedCounter end={50} suffix="+" delay={1500} />
                        </p>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-card via-background to-card border-y border-border relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-accent/10 animate-gradient-x"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <CounterCard
                  value={50}
                  label="Active Members"
                  icon={<Users className="h-8 w-8" />}
                  delay={0}
                  suffix="+"
                  className="glass-accent hover:shadow-accent-strong"
                />
                <CounterCard
                  value={20}
                  label="Events Hosted"
                  icon={<Calendar className="h-8 w-8" />}
                  delay={200}
                  suffix="+"
                  className="glass-accent hover:shadow-accent-strong"
                />
                <CounterCard
                  value={10}
                  label="Industry Partners"
                  icon={<Award className="h-8 w-8" />}
                  delay={400}
                  suffix="+"
                  className="glass-accent hover:shadow-accent-strong"
                />
          </div>
              </div>
      </section>

      {/* AIG Expectations Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance text-gradient">
              AIG Expectations
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              Join us for weekly meetings and educational sessions to advance your knowledge in alternative investments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <GlassCard className="hover:shadow-accent-strong transition-all-spring hover:-translate-y-2 animate-fade-in-up hover-lift hover-glow-effect">
              <GlassCardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Calendar className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Meeting Schedule</h3>
                </div>
                <div className="space-y-2">
                  <p className="text-muted-foreground"><strong>Thursdays 5PM-6PM</strong></p>
                  <p className="text-muted-foreground">Room M235, Minskoff Pavillion</p>
                  <p className="text-sm text-muted-foreground">Weekly attendance required for sector heads and analysts</p>
                </div>
              </GlassCardContent>
            </GlassCard>

            <GlassCard className="hover:shadow-accent-strong transition-all-spring hover:-translate-y-2 animate-fade-in-up delay-100 hover-lift hover-glow-effect">
              <GlassCardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <BookOpen className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Educational Series</h3>
                </div>
                <div className="space-y-2">
                  <p className="text-muted-foreground">Sector head and analyst groups lead presentations</p>
                  <p className="text-muted-foreground">Overview of specific asset classes</p>
                  <p className="text-sm text-muted-foreground">Guest speakers from industry professionals</p>
                </div>
              </GlassCardContent>
            </GlassCard>

            <GlassCard className="hover:shadow-accent-strong transition-all-spring hover:-translate-y-2 animate-fade-in-up delay-200 hover-lift hover-glow-effect">
              <GlassCardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Users className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Professional Development</h3>
                </div>
                <div className="space-y-2">
                  <p className="text-muted-foreground">Resume workshops</p>
                  <p className="text-muted-foreground">Case studies and technical sessions</p>
                  <p className="text-sm text-muted-foreground">Social events to strengthen community</p>
                </div>
              </GlassCardContent>
            </GlassCard>
            </div>
              </div>
      </section>

      {/* Membership & Activities Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance text-gradient">
              Membership & Activities
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              Join AIG MSU and participate in our exciting activities and professional development opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Membership Fees */}
            <GlassCard className="hover:shadow-accent-strong transition-all-spring hover:-translate-y-2 animate-fade-in-up hover-lift hover-glow-effect">
              <GlassCardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Award className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Membership Fees</h3>
                </div>
                <div className="space-y-3">
                  <div className="text-center p-4 bg-accent/5 rounded-lg">
                    <p className="text-2xl font-bold text-accent">$40</p>
                    <p className="text-sm text-muted-foreground">Per Semester</p>
                  </div>
                  <div className="text-center p-4 bg-accent/5 rounded-lg">
                    <p className="text-2xl font-bold text-accent">$65</p>
                    <p className="text-sm text-muted-foreground">Yearly Membership</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-foreground">Fees go towards:</p>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• Social events</li>
                      <li>• Merchandise</li>
                    </ul>
                  </div>
                </div>
              </GlassCardContent>
            </GlassCard>

            {/* Roadshow */}
            <GlassCard className="hover:shadow-accent-strong transition-all-spring hover:-translate-y-2 animate-fade-in-up delay-100 hover-lift hover-glow-effect">
              <GlassCardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-accent" />
            </div>
                  <h3 className="text-xl font-semibold text-foreground">Roadshow</h3>
              </div>
                <div className="space-y-3">
                  <p className="text-muted-foreground text-sm">
                    AIG is organizing its own roadshow with dedicated members to provide great opportunities for professional development and networking.
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-foreground">Roadshow includes:</p>
                    <p className="text-sm text-muted-foreground">• Professional networking opportunities</p>
                    <p className="text-sm text-muted-foreground">• Industry visits and presentations</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-foreground">Participation includes:</p>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• Members holding positions within AIG</li>
                      <li>• Select dedicated freshmen with strong interest in FMI</li>
                      <li>• Depends on member engagement</li>
                    </ul>
                  </div>
                </div>
              </GlassCardContent>
            </GlassCard>

            {/* Social Events */}
            <GlassCard className="hover:shadow-accent-strong transition-all-spring hover:-translate-y-2 animate-fade-in-up delay-200 hover-lift hover-glow-effect">
              <GlassCardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Users className="h-5 w-5 text-accent" />
            </div>
                  <h3 className="text-xl font-semibold text-foreground">Social Events</h3>
              </div>
                <div className="space-y-3">
                  <p className="text-muted-foreground text-sm">
                    Build meaningful connections and maintain engagement through our social activities.
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-foreground">Upcoming Events:</p>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• Hayride</li>
                      <li>• Community Outreach/Volunteering</li>
                      <li>• Cultural Enhancement Training</li>
                      <li>• Group Dinners</li>
                      <li>• March Madness Gathering</li>
                      <li>• MSU Basketball Game</li>
                    </ul>
                  </div>
            </div>
              </GlassCardContent>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-20 h-20 border border-accent/10 rounded-full animate-spin-slow"></div>
          <div className="absolute bottom-32 right-16 w-16 h-16 border border-accent/10 rotate-45 animate-pulse-slow"></div>
          <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-accent/5 rounded-full animate-float delay-2000"></div>
          
          {/* Enhanced background elements */}
          <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-gradient-to-r from-accent/5 to-primary/5 rounded-full blur-2xl animate-pulse-slow delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-2xl animate-pulse-slow delay-3000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-4 mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance text-gradient">
              What We Offer
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Comprehensive learning opportunities in alternative investments and financial markets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <GlassCard className="hover:shadow-accent-strong transition-all-spring hover:-translate-y-4 group animate-fade-in-up relative overflow-hidden micro-interaction">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <GlassCardContent className="p-6 text-center space-y-4 relative z-10">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto group-hover:bg-accent/20 transition-all-spring group-hover:scale-125 group-hover:rotate-12">
                  <TrendingUp className="h-6 w-6 text-accent group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                  Investment Analysis
                </h3>
                <p className="text-sm text-muted-foreground text-pretty group-hover:text-foreground transition-colors duration-300">
                  Learn to analyze and evaluate alternative investment opportunities across various asset classes.
                </p>
              </GlassCardContent>
            </GlassCard>

            <GlassCard className="hover:shadow-accent-strong transition-all-spring hover:-translate-y-4 group animate-fade-in-up delay-200 relative overflow-hidden micro-interaction">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <GlassCardContent className="p-6 text-center space-y-4 relative z-10">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto group-hover:bg-accent/20 transition-all-spring group-hover:scale-125 group-hover:rotate-12">
                  <Users className="h-6 w-6 text-accent group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                  Networking
                </h3>
                <p className="text-sm text-muted-foreground text-pretty group-hover:text-foreground transition-colors duration-300">
                  Connect with industry professionals, alumni, and peers passionate about finance.
                </p>
              </GlassCardContent>
            </GlassCard>

            <GlassCard className="hover:shadow-accent-strong transition-all-spring hover:-translate-y-4 group animate-fade-in-up delay-400 relative overflow-hidden micro-interaction">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <GlassCardContent className="p-6 text-center space-y-4 relative z-10">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto group-hover:bg-accent/20 transition-all-spring group-hover:scale-125 group-hover:rotate-12">
                  <BookOpen className="h-6 w-6 text-accent group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                  Education
                </h3>
                <p className="text-sm text-muted-foreground text-pretty group-hover:text-foreground transition-colors duration-300">
                  Participate in workshops, seminars, and hands-on learning experiences.
                </p>
              </GlassCardContent>
            </GlassCard>

            <GlassCard className="hover:shadow-accent-strong transition-all-spring hover:-translate-y-4 group animate-fade-in-up delay-600 relative overflow-hidden micro-interaction">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <GlassCardContent className="p-6 text-center space-y-4 relative z-10">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto group-hover:bg-accent/20 transition-all-spring group-hover:scale-125 group-hover:rotate-12">
                  <Calendar className="h-6 w-6 text-accent group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                  Events
                </h3>
                <p className="text-sm text-muted-foreground text-pretty group-hover:text-foreground transition-colors duration-300">
                  Attend guest speaker events, company visits, and investment competitions.
                </p>
              </GlassCardContent>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-20 bg-gradient-to-br from-muted/30 via-background to-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-accent/20 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-accent/15 rounded-full blur-3xl animate-pulse-slow delay-2000"></div>
          
          {/* Enhanced background elements */}
          <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-4 mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance text-gradient">
              Experience AIG MSU
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Scroll through our interactive gallery to see our events, workshops, and community activities
            </p>
          </div>

          {/* Circular Gallery Container */}
          <div className="h-96 md:h-[500px] lg:h-[600px] w-full rounded-2xl overflow-hidden border border-border/20 shadow-2xl">
            <CircularGallery 
              items={galleryItems}
              bend={3}
              textColor="#ffffff"
              borderRadius={0.05}
              font="bold 24px Inter, sans-serif"
              scrollSpeed={2}
              scrollEase={0.05}
            />
          </div>
          
          {/* Instructions */}
          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground">
              Use your mouse wheel or drag to scroll through the gallery
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        {/* DarkVeil Background */}
        <div className="absolute inset-0 w-full h-full">
          <DarkVeil
            hueShift={180}
            noiseIntensity={0.03}
            scanlineIntensity={0.15}
            speed={0.4}
            scanlineFrequency={1.5}
            warpAmount={0.4}
            resolutionScale={1}
          />
        </div>
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-muted/40 via-background/20 to-muted/40"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10 animate-fade-in-up">
          {/* AIG MSU Logo */}
          <div className="flex justify-center mb-4">
            <img
              src="/logo-simple.jpg"
              alt="AIG MSU Logo"
              width={120}
              height={120}
              className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              onError={(e) => {
                console.log('Logo failed to load, trying fallback');
                e.currentTarget.src = '/logo.jpg';
              }}
            />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-balance">
            Ready to Join AIG MSU?
          </h2>
          <p className="text-lg text-white/90 text-pretty">
            Take the first step towards expanding your knowledge in alternative investments and building valuable
            connections in the finance industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdeZ2R8BlRbj3rS3LdnZTgmfgSbavyngUWLZQAY1MZyaHS8GQ/viewform?usp=preview" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground group transition-all-spring hover:scale-105 hover:shadow-accent-strong relative overflow-hidden micro-interaction"
              >
                <span className="relative z-10">Apply Now</span>
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </Button>
            </Link>
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfTPhtpw9HuYTP9bj3_CuZftJb0SBogYUqToXACE58Alj2RDA/viewform?usp=preview" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="outline"
                className="hover:scale-105 transition-all-spring bg-transparent hover:bg-accent/5 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 micro-interaction border-gradient-accent text-white border-white/30 hover:text-white hover:border-white/50"
              >
                Sector Head/Analyst Form
              </Button>
            </Link>
          </div>
        </div>
      </section>

      </main>
      <Footer />
    </div>
  )
}
