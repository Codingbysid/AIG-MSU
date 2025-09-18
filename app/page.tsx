import React from 'react'
import Link from 'next/link'
import { ArrowRight, Users, TrendingUp, BookOpen, Target, Award, BarChart3 } from 'lucide-react'
import { FeatureCard } from '@/components/feature-card'
import { AchievementCard } from '@/components/achievement-card'
import { StatsCard } from '@/components/stats-card'
import { Section } from '@/components/section'
import type { Feature, Achievement, StatItem } from '@/types'

const features: Feature[] = [
  {
    title: "Investment Education",
    description: "Learn about alternative investments through comprehensive courses and workshops.",
    icon: BookOpen
  },
  {
    title: "Portfolio Management",
    description: "Gain hands-on experience managing real investment portfolios.",
    icon: BarChart3
  },
  {
    title: "Industry Networking",
    description: "Connect with professionals and alumni in the investment industry.",
    icon: Users
  },
  {
    title: "Career Development",
    description: "Build skills and knowledge to launch your career in finance.",
    icon: Target
  }
]

const achievements: Achievement[] = [
  {
    value: "500+",
    label: "Active Members",
    icon: Users
  },
  {
    value: "50+",
    label: "Alumni in Finance",
    icon: TrendingUp
  },
  {
    value: "15+",
    label: "Years of Excellence",
    icon: Award
  }
]

const stats: StatItem[] = [
  {
    value: "95%",
    label: "Members in Finance Careers",
    icon: TrendingUp
  },
  {
    value: "$2M+",
    label: "Portfolio Value Managed",
    icon: BarChart3
  },
  {
    value: "100+",
    label: "Companies Visited",
    icon: Target
  }
]

export default function HomePage(): JSX.Element {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <Section className="pt-16 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Alternative Investments Group
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Michigan State University's premier student organization for alternative investments education and career development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/about"
                className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3 border border-border rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                Join Us
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* Features Section */}
      <Section className="py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What We Offer
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive education and hands-on experience in alternative investments
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </Section>

      {/* Stats Section */}
      <Section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Impact
            </h2>
            <p className="text-lg text-muted-foreground">
              Numbers that speak to our success and growth
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <StatsCard key={index} stat={stat} index={index} />
            ))}
          </div>
        </div>
      </Section>

      {/* Achievements Section */}
      <Section className="py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Achievements
            </h2>
            <p className="text-lg text-muted-foreground">
              Celebrating our milestones and member success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <AchievementCard key={index} achievement={achievement} index={index} />
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Join AIG?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Take the first step towards a career in alternative investments
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/team"
              className="inline-flex items-center px-8 py-3 border border-border rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Meet the Team
            </Link>
          </div>
        </div>
      </Section>
    </div>
  )
}
