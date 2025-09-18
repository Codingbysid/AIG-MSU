import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Award, Users, TrendingUp, Building2 } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
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
                The Alternative Investments Group at Michigan State University is dedicated to educating students about
                alternative investment strategies and building the next generation of finance professionals.
              </p>
              <div className="flex items-center gap-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">150+</div>
                  <div className="text-sm text-muted-foreground">Members</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">4+</div>
                  <div className="text-sm text-muted-foreground">Years Active</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">25+</div>
                  <div className="text-sm text-muted-foreground">Industry Partners</div>
                </div>
              </div>
            </div>

            <div className="relative animate-fade-in-right delay-300">
              <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/placeholder.svg?height=400&width=600&text=AIG+MSU+Team+Meeting"
                  alt="AIG MSU team meeting and collaboration"
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
                  To provide Michigan State University students with comprehensive education, practical experience, and
                  networking opportunities in alternative investments. We strive to bridge the gap between academic
                  theory and real-world application in the finance industry.
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
                  To become the premier student organization for alternative investments education at MSU, fostering a
                  community of knowledgeable and skilled finance professionals who will make meaningful contributions to
                  the investment industry.
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4 group hover:scale-105 transition-transform duration-300 animate-fade-in-up">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-accent/20 transition-colors duration-300 group-hover:scale-110">
                <Award className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Educational Workshops</h3>
              <p className="text-muted-foreground text-pretty">
                Regular workshops covering hedge funds, private equity, real estate, commodities, and other alternative
                investment vehicles.
              </p>
            </div>

            <div className="text-center space-y-4 group hover:scale-105 transition-transform duration-300 animate-fade-in-up delay-200">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-accent/20 transition-colors duration-300 group-hover:scale-110">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Industry Connections</h3>
              <p className="text-muted-foreground text-pretty">
                Networking events with alumni and industry professionals, providing valuable career insights and
                opportunities.
              </p>
            </div>

            <div className="text-center space-y-4 group hover:scale-105 transition-transform duration-300 animate-fade-in-up delay-400">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-accent/20 transition-colors duration-300 group-hover:scale-110">
                <Target className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Practical Experience</h3>
              <p className="text-muted-foreground text-pretty">
                Hands-on investment analysis projects, case competitions, and portfolio management simulations.
              </p>
            </div>
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
            <div className="text-center space-y-3 animate-fade-in-up">
              <div className="relative w-20 h-20 mx-auto">
                <div className="w-full h-full bg-accent/10 rounded-full flex items-center justify-center">
                  <TrendingUp className="h-8 w-8 text-accent" />
                </div>
              </div>
              <div className="text-2xl font-bold text-accent animate-counter">95%</div>
              <p className="text-sm text-muted-foreground">Job Placement Rate</p>
            </div>

            <div className="text-center space-y-3 animate-fade-in-up delay-200">
              <div className="relative w-20 h-20 mx-auto">
                <div className="w-full h-full bg-accent/10 rounded-full flex items-center justify-center">
                  <Building2 className="h-8 w-8 text-accent" />
                </div>
              </div>
              <div className="text-2xl font-bold text-accent animate-counter">50+</div>
              <p className="text-sm text-muted-foreground">Events Hosted</p>
            </div>

            <div className="text-center space-y-3 animate-fade-in-up delay-400">
              <div className="relative w-20 h-20 mx-auto">
                <div className="w-full h-full bg-accent/10 rounded-full flex items-center justify-center">
                  <Users className="h-8 w-8 text-accent" />
                </div>
              </div>
              <div className="text-2xl font-bold text-accent animate-counter">25+</div>
              <p className="text-sm text-muted-foreground">Industry Partners</p>
            </div>

            <div className="text-center space-y-3 animate-fade-in-up delay-600">
              <div className="relative w-20 h-20 mx-auto">
                <div className="w-full h-full bg-accent/10 rounded-full flex items-center justify-center">
                  <Award className="h-8 w-8 text-accent" />
                </div>
              </div>
              <div className="text-2xl font-bold text-accent animate-counter">10+</div>
              <p className="text-sm text-muted-foreground">Awards Won</p>
            </div>
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
                Founded in 2020, the Alternative Investments Group at Michigan State University emerged from a growing
                need to provide students with specialized knowledge in alternative investment strategies. What started
                as a small group of finance enthusiasts has grown into one of MSU's most active and respected student
                organizations.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Over the years, we have built strong relationships with industry professionals, alumni working in
                top-tier investment firms, and faculty members who share our passion for alternative investments. Our
                members have gone on to secure positions at leading investment banks, hedge funds, private equity firms,
                and asset management companies.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, AIG MSU continues to evolve and adapt to the changing landscape of alternative investments,
                ensuring our members are well-prepared for successful careers in finance and investment management.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
