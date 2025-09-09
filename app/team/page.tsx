import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { StatsCard } from "@/components/stats-card"
import { TeamMemberCard } from "@/components/team-member-card"
import { Mail, Linkedin, Award, Users, TrendingUp } from "lucide-react"
import type { TeamMember, StatItem } from "@/types"

const teamMembers: TeamMember[] = [
    {
      name: "Matthew Walper",
      position: "President",
      year: "Senior",
      major: "Finance",
      bio: "Leading AIG MSU with a passion for private equity and venture capital investments. Matthew brings extensive experience in alternative investments and is committed to providing members with real-world insights into the finance industry.",
      image: "/President.jpg",
      achievements: "Dean's List, Investment Banking Intern",
    },
    {
      name: "Lilia",
      position: "Vice President",
      year: "Junior",
      major: "Finance & Economics",
      bio: "Specializing in hedge fund strategies and quantitative analysis methods. Lilia plays a crucial role in organizing events and ensuring smooth operations of the organization.",
      image: "/Vice-President.jpg",
      achievements: "CFA Level 1, Goldman Sachs Future Intern",
    },
    {
      name: "Adam",
      position: "Business Development Head",
      year: "Junior",
      major: "Finance",
      bio: "Managing club partnerships and business development initiatives while focusing on real estate investment trusts and commodities. Adam is responsible for building relationships with industry professionals and alumni.",
      image: "/Business-Development-Head.jpg",
      achievements: "Accounting Society President",
    },
    {
      name: "Sid",
      position: "Director of Education",
      year: "Sophomore",
      major: "Business Administration",
      bio: "Coordinating educational content and curriculum with expertise in cryptocurrency and digital assets. Sid ensures that members receive comprehensive education about all five alternative asset classes.",
      image: "/Director-of-Education.jpg",
      achievements: "Blockchain Research Assistant",
    },
    {
      name: "Siddharth Gupta",
      position: "Director of Marketing",
      year: "Junior",
      major: "Computer Science",
      bio: "Leading marketing initiatives and digital presence for AIG MSU, managing brand development and outreach strategies.",
      image: "",
      achievements: "Digital Marketing Certification",
    },
    {
      name: "Aryash Sampat",
      position: "Social Media Chair",
      year: "Freshman",
      major: "Computer Science",
      bio: "Managing social media presence and digital communications to engage members and promote AIG MSU activities.",
      image: "",
      achievements: "Social Media Management",
    },
  ];

const stats: StatItem[] = [
  { icon: Users, label: "Active Members", value: "150+" },
  { icon: Award, label: "Industry Partners", value: "25+" },
  { icon: TrendingUp, label: "Average ROI", value: "12.5%" },
];

export default function TeamPage(): JSX.Element {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-muted to-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-20 h-20 bg-primary rounded-full animate-float"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-accent rounded-full animate-float delay-500"></div>
          <div className="absolute bottom-20 left-1/3 w-12 h-12 bg-primary rounded-full animate-float delay-1000"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground text-balance animate-fade-in-up">
            Meet Our <span className="gradient-text">Leadership Team</span>
          </h1>
          <p className="text-xl text-muted-foreground text-pretty animate-fade-in-up delay-200">
            The dedicated leaders driving AIG MSU forward and creating opportunities for all our members to succeed in
            alternative investments.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 animate-fade-in-up delay-400">
            {stats.map((stat, index) => (
              <StatsCard key={stat.label} stat={stat} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={member.name}
                className="border-border hover-lift group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <TeamMemberCard member={member} index={index} />
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-accent/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_var(--primary)_1px,_transparent_1px)] bg-[length:50px_50px] animate-pulse"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance animate-fade-in-up">
            Want to Join Our <span className="gradient-text">Leadership Team?</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty animate-fade-in-up delay-200">
            We're always looking for passionate and dedicated students to help lead AIG MSU. This semester, we have exciting opportunities for sector heads and sector analysts.
          </p>
          <div className="space-y-4 animate-fade-in-up delay-400">
            <div className="bg-card/80 backdrop-blur-sm rounded-lg p-6 border border-border/50 max-w-2xl mx-auto">
              <p className="text-muted-foreground mb-4">
                Applications for sector head and sector analyst positions are now open for this semester.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="bg-primary/10 rounded-lg p-4 flex-1">
                  <h4 className="font-semibold text-primary mb-2">Leadership Benefits</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Professional development</li>
                    <li>• Industry networking</li>
                    <li>• Resume enhancement</li>
                  </ul>
                </div>
                <div className="bg-accent/10 rounded-lg p-4 flex-1">
                  <h4 className="font-semibold text-accent mb-2">Current Openings</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Sector Head positions</li>
                    <li>• Sector Analyst roles</li>
                    <li>• Strong academic standing required</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
