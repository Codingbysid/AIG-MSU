import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Section } from "@/components/section"
import { FeatureCard } from "@/components/feature-card"
import { AchievementCard } from "@/components/achievement-card"
import { Target, Eye, Award, Users, TrendingUp, Building2, Calendar } from "lucide-react"
import Image from "next/image"
import type { Achievement, Feature } from "@/types"

// Data constants
const STATS = [
  { value: "150+", label: "Members" },
  { value: "4+", label: "Years Active" },
  { value: "25+", label: "Industry Partners" },
] as const;

const ACHIEVEMENTS: Achievement[] = [
  {
    icon: TrendingUp,
    value: "95%",
    label: "Job Placement Rate",
  },
  {
    icon: Building2,
    value: "50+",
    label: "Events Hosted",
  },
  {
    icon: Users,
    value: "25+",
    label: "Industry Partners",
  },
  {
    icon: Award,
    value: "10+",
    label: "Awards Won",
  },
];

const FEATURES: Feature[] = [
  {
    icon: Award,
    title: "Weekly Meetings",
    description: "AIG meets weekly and utilizes the alumni network to host bi-weekly presentations from industry professionals which contributes to networking and internship opportunities.",
  },
  {
    icon: Users,
    title: "Alumni Network",
    description: "Strong connections with alumni working at top-tier investment firms, providing valuable career insights, networking opportunities, and internship placements.",
  },
  {
    icon: Target,
    title: "Five Asset Classes",
    description: "Comprehensive education covering the five main alternative asset classes: private equity, private credit, hedge funds, venture capital, and real estate.",
  },
  {
    icon: Calendar,
    title: "Social Events",
    description: "Annual NYC Roadshow visiting top investment firms, seasonal hayride events, and regular networking mixers that build lasting relationships and create memorable experiences.",
  },
  {
    icon: Building2,
    title: "Guest Speakers",
    description: "Bi-weekly presentations from industry professionals and alumni working at leading financial institutions, providing real-world insights and career guidance.",
  },
  {
    icon: TrendingUp,
    title: "Professional Development",
    description: "Hands-on learning opportunities, investment competitions, and workshops designed to prepare members for successful careers in alternative investments.",
  },
];

export default function AboutPage(): JSX.Element {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-muted to-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-64 h-64 bg-accent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 left-20 w-80 h-80 bg-primary rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
                About{" "}
                <span className="text-accent bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent">
                  AIG MSU
                </span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty">
                The Alternative Investments Group (AIG) is a premiere student organization focused on educating underclassmen about the five main alternative asset classes in high finance: private equity, private credit, hedge funds, venture capital, and real estate.
              </p>
              <div className="flex items-center gap-8 pt-4">
                {STATS.map((stat, index) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl font-bold text-accent">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative animate-fade-in-right delay-300">
              <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/Minskoff-Pavilion-tile.jpg"
                  alt="Minskoff Pavilion at MSU"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="border-border hover:shadow-xl hover:shadow-accent/5 transition-all duration-500 hover:-translate-y-2 animate-fade-in-up">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center hover:bg-accent/20 transition-colors duration-300">
                    <Target className="h-5 w-5 text-accent" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Our Mission</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  AIG seeks to empower members by giving them the tools and network to succeed in a career in alternative investment classes, including private credit, private equity, venture capital, hedge funds, and real estate.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-xl hover:shadow-accent/5 transition-all duration-500 hover:-translate-y-2 animate-fade-in-up delay-200">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center hover:bg-accent/20 transition-colors duration-300">
                    <Eye className="h-5 w-5 text-accent" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Our Vision</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  The organization is working towards weekly newsletters that include sector updates within alternative finance investment opportunities. The main goal is to disperse information throughout Broad and spark interest amongst non-current members.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-muted/50 relative">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fillOpacity='1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-4 mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">What We Do</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Our comprehensive approach to alternative investments education
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURES.map((feature, index) => (
              <FeatureCard key={feature.title} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Achievement Stats */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">Our Achievements</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Measurable impact and success in alternative investments education
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {ACHIEVEMENTS.map((achievement, index) => (
              <AchievementCard key={achievement.label} achievement={achievement} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">Our History</h2>
          </div>

          <Card className="border-border hover:shadow-xl hover:shadow-accent/5 transition-all duration-500 animate-fade-in-up delay-200">
            <CardContent className="p-8 space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                The Alternative Investments Group at Michigan State University has established itself as a premiere student organization focused on educating underclassmen about alternative investments. Our members have secured internships and positions at top-tier firms including Deloitte, Merrill Lynch, and other leading financial institutions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Through our weekly meetings and bi-weekly industry professional presentations, we provide members with direct access to alumni networks and real-world insights into the alternative investment landscape. Our focus on the five main asset classes - private equity, private credit, hedge funds, venture capital, and real estate - ensures comprehensive coverage of the industry.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, AIG MSU continues to bridge the gap between academic learning and practical industry experience, preparing our members for successful careers in alternative investments and high finance.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>


      <Footer />
    </div>
  )
}
