import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, MapPin, Clock, Users } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-muted to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
            Get In <span className="text-accent">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground text-pretty">
            Ready to join AIG MSU or have questions about alternative investments? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-foreground">
                        First Name
                      </Label>
                      <Input
                        id="firstName"
                        placeholder="Enter your first name"
                        className="border-border focus:ring-accent"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-foreground">
                        Last Name
                      </Label>
                      <Input
                        id="lastName"
                        placeholder="Enter your last name"
                        className="border-border focus:ring-accent"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email address"
                      className="border-border focus:ring-accent"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="year" className="text-foreground">
                      Academic Year
                    </Label>
                    <Input
                      id="year"
                      placeholder="e.g., Sophomore, Junior, Senior"
                      className="border-border focus:ring-accent"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your interest in AIG MSU or ask any questions..."
                      rows={5}
                      className="border-border focus:ring-accent"
                    />
                  </div>

                  <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">Send Message</Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="border-border">
                <CardContent className="p-6 space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">Email Us</h3>
                      <p className="text-muted-foreground">aigmsu@gmail.com</p>
                      <p className="text-sm text-muted-foreground mt-1">We typically respond within 24-48 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">Location</h3>
                      <p className="text-muted-foreground">Michigan State University</p>
                      <p className="text-muted-foreground">East Lansing, MI 48823</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">Meeting Times</h3>
                      <p className="text-muted-foreground">Wednesdays at 7:00 PM</p>
                      <p className="text-sm text-muted-foreground mt-1">Location details sent via email</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">Membership</h3>
                      <p className="text-muted-foreground">Open to all MSU students</p>
                      <p className="text-sm text-muted-foreground mt-1">All majors and experience levels welcome</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border bg-muted">
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">Ready to Join?</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Interested in learning more about alternative investments? Come to one of our weekly meetings or
                    reach out via email. We welcome students from all backgrounds and experience levels.
                  </p>
                  <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    Join AIG MSU Today
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
