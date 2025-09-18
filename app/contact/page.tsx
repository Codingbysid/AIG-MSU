import React from 'react'
import { Section } from '@/components/section'
import { Mail, MapPin, Phone, Calendar, Users, MessageSquare } from 'lucide-react'

export default function ContactPage(): JSX.Element {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <Section className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground">
              Get in touch with the Alternative Investments Group
            </p>
          </div>
        </div>
      </Section>

      {/* Contact Information */}
      <Section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">Get In Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Email</h3>
                    <p className="text-muted-foreground">aig@msu.edu</p>
                    <p className="text-sm text-muted-foreground">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Location</h3>
                    <p className="text-muted-foreground">Michigan State University</p>
                    <p className="text-sm text-muted-foreground">East Lansing, MI 48824</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Meetings</h3>
                    <p className="text-muted-foreground">Every Tuesday at 7:00 PM</p>
                    <p className="text-sm text-muted-foreground">Room 120, Business College Complex</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Membership</h3>
                    <p className="text-muted-foreground">Open to all MSU students</p>
                    <p className="text-sm text-muted-foreground">No prior experience required</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-card/50 backdrop-blur-sm rounded-lg p-8 border border-border/50">
                <h3 className="text-2xl font-bold text-foreground mb-6">Send us a message</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                      placeholder="john.doe@msu.edu"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                      placeholder="Membership inquiry"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                      placeholder="Tell us about your interest in AIG..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors font-medium"
                  >
                    <MessageSquare className="inline h-4 w-4 mr-2" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">
              Common questions about joining AIG MSU
            </p>
          </div>
          <div className="space-y-6">
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border/50">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Do I need prior experience in finance or investments?
              </h3>
              <p className="text-muted-foreground">
                No prior experience is required! We welcome students from all majors and backgrounds. 
                Our programs are designed to teach you everything you need to know about alternative investments.
              </p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border/50">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                How often does AIG meet?
              </h3>
              <p className="text-muted-foreground">
                We meet every Tuesday at 7:00 PM in Room 120 of the Business College Complex. 
                Meetings typically last 1-2 hours and include educational content, guest speakers, and networking opportunities.
              </p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border/50">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                What are the membership requirements?
              </h3>
              <p className="text-muted-foreground">
                Membership is open to all Michigan State University students. We ask that members attend 
                meetings regularly and participate in our educational programs and portfolio management activities.
              </p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border/50">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                How can I get involved in portfolio management?
              </h3>
              <p className="text-muted-foreground">
                After joining AIG, you can apply to be part of our portfolio management team. We provide 
                training and mentorship to help you develop the skills needed to manage real investment portfolios.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
