import React from 'react'
import { Section } from '@/components/section'
import { BookOpen, Users, Target, Award } from 'lucide-react'

export default function AboutPage(): JSX.Element {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <Section className="pt-16 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About AIG MSU
            </h1>
            <p className="text-xl text-muted-foreground">
              Empowering students with knowledge and experience in alternative investments
            </p>
          </div>
        </div>
      </Section>

      {/* Mission Section */}
      <Section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                The Alternative Investments Group at Michigan State University is dedicated to providing 
                students with comprehensive education and hands-on experience in alternative investments, 
                including private equity, hedge funds, real estate, and other non-traditional investment vehicles.
              </p>
              <p className="text-lg text-muted-foreground">
                We aim to bridge the gap between academic learning and real-world application, preparing 
                our members for successful careers in the investment industry.
              </p>
            </div>
            <div className="bg-muted/30 rounded-lg p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Education</h3>
                  <p className="text-sm text-muted-foreground">Comprehensive learning programs</p>
                </div>
                <div className="text-center">
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Community</h3>
                  <p className="text-sm text-muted-foreground">Strong alumni network</p>
                </div>
                <div className="text-center">
                  <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Experience</h3>
                  <p className="text-sm text-muted-foreground">Hands-on portfolio management</p>
                </div>
                <div className="text-center">
                  <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Excellence</h3>
                  <p className="text-sm text-muted-foreground">Proven track record</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Values Section */}
      <Section className="py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Knowledge</h3>
              <p className="text-muted-foreground">
                We believe in continuous learning and staying current with industry trends and best practices.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Collaboration</h3>
              <p className="text-muted-foreground">
                We foster an environment where members learn from each other and work together towards common goals.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Excellence</h3>
              <p className="text-muted-foreground">
                We strive for the highest standards in everything we do, from education to portfolio management.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* History Section */}
      <Section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our History</h2>
            <p className="text-lg text-muted-foreground">
              A journey of growth and excellence
            </p>
          </div>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="mb-6">
              Founded in 2008, the Alternative Investments Group at Michigan State University has grown 
              from a small group of finance students into one of the most respected student organizations 
              on campus. Over the years, we have consistently provided our members with opportunities 
              to learn about and engage with alternative investments.
            </p>
            <p className="mb-6">
              Our alumni have gone on to successful careers at top investment firms, including private 
              equity funds, hedge funds, investment banks, and other financial institutions. This strong 
              alumni network continues to support current members through mentorship and career opportunities.
            </p>
            <p>
              Today, AIG MSU continues to evolve and adapt to the changing landscape of alternative 
              investments, ensuring our members are well-prepared for the challenges and opportunities 
              of the modern investment world.
            </p>
          </div>
        </div>
      </Section>
    </div>
  )
}
