import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Users, BookOpen, Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-muted to-background overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent/20 rounded-full animate-float"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-accent/30 rounded-full animate-float delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-accent/10 rounded-full animate-float delay-2000"></div>
          <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 bg-accent/25 rounded-full animate-float delay-3000"></div>
          <div className="absolute bottom-1/3 right-2/3 w-2.5 h-2.5 bg-accent/15 rounded-full animate-float delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-4">
                <p className="text-sm font-medium text-accent uppercase tracking-wide animate-fade-in delay-200">
                  Michigan State University
                </p>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground text-balance animate-fade-in-up delay-300">
                  <span className="animate-typewriter">Alternative</span>
                  <br />
                  <span className="animate-typewriter delay-1000">Investments</span>
                  <br />
                  <span className="text-accent bg-gradient-to-r from-accent via-green-400 to-accent bg-clip-text text-transparent animate-gradient-x animate-typewriter delay-2000">
                    Group
                  </span>
                </h1>
              </div>
              <p className="text-xl text-muted-foreground max-w-2xl text-pretty animate-fade-in-up delay-500">
                Empowering students with knowledge and experience in alternative investment strategies, portfolio
                management, and financial analysis.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-700">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground group transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/25 relative overflow-hidden"
                >
                  <span className="relative z-10">Learn More About AIG</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="hover:scale-105 transition-all duration-300 bg-transparent hover:bg-accent/5 hover:border-accent/50 hover:shadow-lg"
                >
                  Join Our Community
                </Button>
              </div>
            </div>

            <div className="relative animate-fade-in-right delay-500">
              <div className="relative w-full h-96 lg:h-[400px] rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 group">
                <Image
                  src="/modern-financial-trading-floor-with-students-analy.jpg"
                  alt="Students analyzing investment data"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/30 transition-all duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="text-white text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-xl font-bold mb-2">Real-World Experience</h3>
                    <p className="text-sm">Hands-on learning with industry tools</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-lg p-4 shadow-lg animate-float hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center animate-pulse-slow">
                    <TrendingUp className="h-5 w-5 text-green-500" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Portfolio Growth</p>
                    <p className="text-lg font-bold text-green-500 animate-counter-up">+24.5%</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 bg-card border border-border rounded-lg p-4 shadow-lg animate-float delay-1000 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center animate-pulse-slow delay-500">
                    <Users className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Active Members</p>
                    <p className="text-lg font-bold text-accent animate-counter-up delay-500">150+</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card border-y border-border relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-accent/10 animate-gradient-x"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group hover:scale-110 transition-all duration-500 cursor-pointer p-4 rounded-lg hover:bg-accent/5">
              <div
                className="text-3xl md:text-4xl font-bold text-accent mb-2 animate-counter-up hover:animate-bounce"
                data-target="150"
              >
                150+
              </div>
              <p className="text-sm text-muted-foreground group-hover:text-accent transition-colors duration-300">
                Active Members
              </p>
              <div className="w-0 group-hover:w-full h-0.5 bg-accent mx-auto mt-2 transition-all duration-500"></div>
            </div>
            <div className="text-center group hover:scale-110 transition-all duration-500 cursor-pointer p-4 rounded-lg hover:bg-accent/5">
              <div
                className="text-3xl md:text-4xl font-bold text-accent mb-2 animate-counter-up delay-200 hover:animate-bounce"
                data-target="50"
              >
                50+
              </div>
              <p className="text-sm text-muted-foreground group-hover:text-accent transition-colors duration-300">
                Events Hosted
              </p>
              <div className="w-0 group-hover:w-full h-0.5 bg-accent mx-auto mt-2 transition-all duration-500"></div>
            </div>
            <div className="text-center group hover:scale-110 transition-all duration-500 cursor-pointer p-4 rounded-lg hover:bg-accent/5">
              <div
                className="text-3xl md:text-4xl font-bold text-accent mb-2 animate-counter-up delay-400 hover:animate-bounce"
                data-target="25"
              >
                25+
              </div>
              <p className="text-sm text-muted-foreground group-hover:text-accent transition-colors duration-300">
                Industry Partners
              </p>
              <div className="w-0 group-hover:w-full h-0.5 bg-accent mx-auto mt-2 transition-all duration-500"></div>
            </div>
            <div className="text-center group hover:scale-110 transition-all duration-500 cursor-pointer p-4 rounded-lg hover:bg-accent/5">
              <div
                className="text-3xl md:text-4xl font-bold text-accent mb-2 animate-counter-up delay-600 hover:animate-bounce"
                data-target="95"
              >
                95%
              </div>
              <p className="text-sm text-muted-foreground group-hover:text-accent transition-colors duration-300">
                Job Placement Rate
              </p>
              <div className="w-0 group-hover:w-full h-0.5 bg-accent mx-auto mt-2 transition-all duration-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-20 h-20 border border-accent/10 rounded-full animate-spin-slow"></div>
          <div className="absolute bottom-32 right-16 w-16 h-16 border border-accent/10 rotate-45 animate-pulse-slow"></div>
          <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-accent/5 rounded-full animate-float delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-4 mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">What We Offer</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Comprehensive learning opportunities in alternative investments and financial markets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-border hover:shadow-2xl hover:shadow-accent/10 transition-all duration-700 hover:-translate-y-4 group animate-fade-in-up relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-6 text-center space-y-4 relative z-10">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto group-hover:bg-accent/20 transition-all duration-500 group-hover:scale-125 group-hover:rotate-12">
                  <TrendingUp className="h-6 w-6 text-accent group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                  Investment Analysis
                </h3>
                <p className="text-sm text-muted-foreground text-pretty group-hover:text-foreground transition-colors duration-300">
                  Learn to analyze and evaluate alternative investment opportunities across various asset classes.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-2xl hover:shadow-accent/10 transition-all duration-700 hover:-translate-y-4 group animate-fade-in-up delay-200 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-6 text-center space-y-4 relative z-10">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto group-hover:bg-accent/20 transition-all duration-500 group-hover:scale-125 group-hover:rotate-12">
                  <Users className="h-6 w-6 text-accent group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                  Networking
                </h3>
                <p className="text-sm text-muted-foreground text-pretty group-hover:text-foreground transition-colors duration-300">
                  Connect with industry professionals, alumni, and peers passionate about finance.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-2xl hover:shadow-accent/10 transition-all duration-700 hover:-translate-y-4 group animate-fade-in-up delay-400 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-6 text-center space-y-4 relative z-10">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto group-hover:bg-accent/20 transition-all duration-500 group-hover:scale-125 group-hover:rotate-12">
                  <BookOpen className="h-6 w-6 text-accent group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                  Education
                </h3>
                <p className="text-sm text-muted-foreground text-pretty group-hover:text-foreground transition-colors duration-300">
                  Participate in workshops, seminars, and hands-on learning experiences.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-2xl hover:shadow-accent/10 transition-all duration-700 hover:-translate-y-4 group animate-fade-in-up delay-600 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-6 text-center space-y-4 relative z-10">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto group-hover:bg-accent/20 transition-all duration-500 group-hover:scale-125 group-hover:rotate-12">
                  <Calendar className="h-6 w-6 text-accent group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                  Events
                </h3>
                <p className="text-sm text-muted-foreground text-pretty group-hover:text-foreground transition-colors duration-300">
                  Attend guest speaker events, company visits, and investment competitions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-20 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-accent/20 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-accent/15 rounded-full blur-3xl animate-pulse-slow delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-4 mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">Experience AIG MSU</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Get a glimpse into our events, workshops, and community activities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative h-64 rounded-xl overflow-hidden group animate-fade-in-up cursor-pointer">
              <Image
                src="/students-in-business-attire-presenting-investment-.jpg"
                alt="Investment Competition"
                fill
                className="object-cover group-hover:scale-125 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 transition-all duration-500"></div>
              <div className="absolute bottom-4 left-4 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="font-semibold text-lg group-hover:text-accent transition-colors duration-300">
                  Investment Competition
                </h3>
                <p className="text-sm opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                  Annual portfolio challenge
                </p>
              </div>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <ArrowRight className="h-4 w-4 text-white" />
                </div>
              </div>
            </div>

            <div className="relative h-64 rounded-xl overflow-hidden group animate-fade-in-up delay-200 cursor-pointer">
              <Image
                src="/professional-guest-speaker-presenting-to-engaged-u.jpg"
                alt="Guest Speaker Event"
                fill
                className="object-cover group-hover:scale-125 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 transition-all duration-500"></div>
              <div className="absolute bottom-4 left-4 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="font-semibold text-lg group-hover:text-accent transition-colors duration-300">
                  Guest Speakers
                </h3>
                <p className="text-sm opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                  Industry expert sessions
                </p>
              </div>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <ArrowRight className="h-4 w-4 text-white" />
                </div>
              </div>
            </div>

            <div className="relative h-64 rounded-xl overflow-hidden group animate-fade-in-up delay-400 cursor-pointer">
              <Image
                src="/diverse-group-of-university-students-networking-at.jpg"
                alt="Networking Event"
                fill
                className="object-cover group-hover:scale-125 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 transition-all duration-500"></div>
              <div className="absolute bottom-4 left-4 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="font-semibold text-lg group-hover:text-accent transition-colors duration-300">
                  Networking Events
                </h3>
                <p className="text-sm opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                  Connect with professionals
                </p>
              </div>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <ArrowRight className="h-4 w-4 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0 animate-pulse-slow"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">Ready to Join AIG MSU?</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Take the first step towards expanding your knowledge in alternative investments and building valuable
            connections in the finance industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground group transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-accent/25 relative overflow-hidden"
              >
                <span className="relative z-10">Get In Touch</span>
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </Button>
            </Link>
            <Link href="/about">
              <Button
                size="lg"
                variant="outline"
                className="hover:scale-105 transition-all duration-300 bg-transparent hover:bg-accent/5 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
