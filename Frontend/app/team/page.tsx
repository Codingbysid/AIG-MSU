import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Linkedin, Award, Users, TrendingUp } from "lucide-react"

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      position: "President",
      year: "Senior",
      major: "Finance",
      bio: "Leading AIG MSU with a passion for private equity and venture capital investments.",
      image: "/professional-headshot-of-young-woman-in-business-a.jpg",
      achievements: "Dean's List, Investment Banking Intern",
    },
    {
      name: "Michael Chen",
      position: "Vice President",
      year: "Junior",
      major: "Economics",
      bio: "Specializing in hedge fund strategies and quantitative analysis methods.",
      image: "/professional-headshot-of-young-man-in-business-sui.jpg",
      achievements: "CFA Level 1, Goldman Sachs Intern",
    },
    {
      name: "Emily Rodriguez",
      position: "Treasurer",
      year: "Junior",
      major: "Finance",
      bio: "Managing club finances while focusing on real estate investment trusts and commodities.",
      image: "/client-avatar-1.png",
      achievements: "Accounting Society President",
    },
    {
      name: "David Kim",
      position: "Secretary",
      year: "Sophomore",
      major: "Business Administration",
      bio: "Coordinating events and communications with expertise in cryptocurrency and digital assets.",
      image: "/professional-headshot-of-young-asian-man.jpg",
      achievements: "Blockchain Research Assistant",
    },
    {
      name: "Jessica Thompson",
      position: "Events Coordinator",
      year: "Junior",
      major: "Finance",
      bio: "Organizing networking events and guest speaker sessions focused on alternative investments.",
      image: "/professional-headshot-of-young-blonde-woman.jpg",
      achievements: "Event Management Certification",
    },
    {
      name: "Alex Martinez",
      position: "Research Director",
      year: "Senior",
      major: "Economics",
      bio: "Leading research initiatives in emerging alternative investment opportunities.",
      image: "/professional-headshot-of-young-hispanic-man.jpg",
      achievements: "Published Research, Honors Program",
    },
  ]

  const stats = [
    { icon: Users, label: "Active Members", value: "150+" },
    { icon: Award, label: "Industry Partners", value: "25+" },
    { icon: TrendingUp, label: "Average ROI", value: "12.5%" },
  ]

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
              <div key={index} className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border/50">
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
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
                key={index}
                className="border-border hover-lift group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="relative w-32 h-32 mx-auto">
                    <div className="w-full h-full rounded-full overflow-hidden bg-muted ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full font-medium">
                      {member.year}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                      {member.name}
                    </h3>
                    <p className="text-primary font-medium">{member.position}</p>
                    <p className="text-sm text-muted-foreground font-medium">{member.major}</p>
                    <div className="bg-muted/50 rounded-lg p-2 mt-2">
                      <p className="text-xs text-muted-foreground font-medium">{member.achievements}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground text-pretty leading-relaxed">{member.bio}</p>
                  <div className="flex justify-center space-x-3 pt-2">
                    <button className="text-muted-foreground hover:text-primary transition-colors duration-200 p-2 rounded-full hover:bg-primary/10">
                      <Mail className="h-4 w-4" />
                    </button>
                    <button className="text-muted-foreground hover:text-primary transition-colors duration-200 p-2 rounded-full hover:bg-primary/10">
                      <Linkedin className="h-4 w-4" />
                    </button>
                  </div>
                </CardContent>
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
            We're always looking for passionate and dedicated students to help lead AIG MSU. Leadership positions become
            available each academic year.
          </p>
          <div className="space-y-4 animate-fade-in-up delay-400">
            <div className="bg-card/80 backdrop-blur-sm rounded-lg p-6 border border-border/50 max-w-2xl mx-auto">
              <p className="text-muted-foreground mb-4">
                Applications typically open in the spring semester for the following academic year.
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
                  <h4 className="font-semibold text-accent mb-2">Requirements</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Active member for 1+ semester</li>
                    <li>• Strong academic standing</li>
                    <li>• Leadership experience</li>
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
