import React from 'react'
import { Section } from '@/components/section'
import { Linkedin, Mail, Crown, Users, Award, Target } from 'lucide-react'
import type { TeamMember } from '@/types'

const leadership: TeamMember[] = [
  {
    name: "Sarah Johnson",
    role: "President",
    image: "/placeholder-logo.png",
    bio: "Senior Finance major with 3 years of experience in alternative investments. Previously interned at Blackstone and KKR.",
    linkedin: "https://linkedin.com/in/sarahjohnson",
    email: "johnsons@msu.edu"
  },
  {
    name: "Michael Chen",
    role: "Vice President",
    image: "/placeholder-logo.png",
    bio: "Economics and Mathematics double major. Led the portfolio management team for 2 years and achieved 15% annual returns.",
    linkedin: "https://linkedin.com/in/michaelchen",
    email: "chenm@msu.edu"
  },
  {
    name: "Emily Rodriguez",
    role: "Treasurer",
    image: "/placeholder-logo.png",
    bio: "Accounting major with expertise in financial modeling and risk assessment. Manages AIG's $50,000 investment fund.",
    linkedin: "https://linkedin.com/in/emilyrodriguez",
    email: "rodrigueze@msu.edu"
  },
  {
    name: "David Kim",
    role: "Secretary",
    image: "/placeholder-logo.png",
    bio: "Supply Chain Management major with strong interest in private equity. Coordinates all AIG events and communications.",
    linkedin: "https://linkedin.com/in/davidkim",
    email: "kimd@msu.edu"
  }
]

const portfolioManagers: TeamMember[] = [
  {
    name: "Alex Thompson",
    role: "Portfolio Manager",
    image: "/placeholder-logo.png",
    bio: "Finance major specializing in hedge fund strategies. Manages the equity portfolio with focus on value investing.",
    linkedin: "https://linkedin.com/in/alexthompson",
    email: "thompsona@msu.edu"
  },
  {
    name: "Jessica Wang",
    role: "Portfolio Manager",
    image: "/placeholder-logo.png",
    bio: "Economics major with expertise in fixed income and alternative investments. Leads the bond portfolio management team.",
    linkedin: "https://linkedin.com/in/jessicawang",
    email: "wangj@msu.edu"
  },
  {
    name: "Ryan O'Connor",
    role: "Research Analyst",
    image: "/placeholder-logo.png",
    bio: "Finance and Data Science double major. Conducts fundamental analysis and market research for investment decisions.",
    linkedin: "https://linkedin.com/in/ryanoconnor",
    email: "oconnorr@msu.edu"
  },
  {
    name: "Maya Patel",
    role: "Research Analyst",
    image: "/placeholder-logo.png",
    bio: "Business major with focus on international markets. Specializes in emerging market investments and ESG analysis.",
    linkedin: "https://linkedin.com/in/mayapatel",
    email: "patelm@msu.edu"
  }
]

export default function TeamPage(): JSX.Element {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <Section className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Meet Our Team
            </h1>
            <p className="text-xl text-muted-foreground">
              The dedicated students leading AIG MSU
            </p>
          </div>
        </div>
      </Section>

      {/* Leadership Section */}
      <Section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Leadership Team</h2>
            <p className="text-lg text-muted-foreground">
              Our executive board members who guide AIG's vision and operations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((member, index) => (
              <div key={index} className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border/50 text-center">
                <div className="w-24 h-24 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                <div className="flex justify-center space-x-3">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  )}
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Portfolio Management Team */}
      <Section className="py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Portfolio Management Team</h2>
            <p className="text-lg text-muted-foreground">
              The students responsible for managing AIG's investment portfolios
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {portfolioManagers.map((member, index) => (
              <div key={index} className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border/50 text-center">
                <div className="w-20 h-20 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                <div className="flex justify-center space-x-3">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  )}
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Mail className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Team Stats */}
      <Section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Team Excellence</h2>
            <p className="text-lg text-muted-foreground">
              Our team's achievements and impact
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Crown className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">4</h3>
              <p className="text-muted-foreground">Executive Board Members</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">8</h3>
              <p className="text-muted-foreground">Portfolio Management Team</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">15%</h3>
              <p className="text-muted-foreground">Average Annual Returns</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Join Team CTA */}
      <Section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Want to Join Our Team?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            We're always looking for passionate students to join our leadership and portfolio management teams
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              <Target className="mr-2 h-4 w-4" />
              Apply Now
            </a>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-3 border border-border rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </Section>
    </div>
  )
}
