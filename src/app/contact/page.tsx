import type { Metadata } from 'next'
import Image from 'next/image'
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us - Global Pilot Academy',
  description: 'Contact Global Pilot Academy at Tampa Executive Airport (KVDF). Get directions, call us, or send an inquiry about flight training programs.',
  keywords: ['contact flight school', 'Tampa airport directions', 'pilot training contact', 'KVDF airport'],
  openGraph: {
    title: 'Contact Us | Global Pilot Academy',
    description: 'Contact Global Pilot Academy for flight training information.',
  },
}

const contactInfo = {
  address: {
    name: 'Global Pilot Academy',
    street: 'Tampa Executive Airport (KVDF)',
    city: 'Tampa, FL 33619',
    coordinates: { lat: 27.9506, lng: -82.4572 }
  },
  phone: {
    primary: '(813) 555-1234',
    whatsapp: '+1 (813) 555-1234'
  },
  email: {
    general: 'info@gpapilot.com',
    enrollment: 'enrollment@gpapilot.com',
    international: 'international@gpapilot.com'
  },
  hours: {
    monday: '7:00 AM - 7:00 PM',
    tuesday: '7:00 AM - 7:00 PM',
    wednesday: '7:00 AM - 7:00 PM',
    thursday: '7:00 AM - 7:00 PM',
    friday: '7:00 AM - 7:00 PM',
    saturday: '8:00 AM - 6:00 PM',
    sunday: '8:00 AM - 6:00 PM'
  }
}

const teamMembers = [
  {
    name: 'Captain Sarah Johnson',
    title: 'Chief Flight Instructor',
    email: 'sarah.johnson@gpapilot.com',
    phone: '(813) 555-1235',
    specialty: 'Commercial Pilot Training'
  },
  {
    name: 'Captain Michael Chen',
    title: 'Director of Operations',
    email: 'michael.chen@gpapilot.com',
    phone: '(813) 555-1236',
    specialty: 'Flight Operations'
  },
  {
    name: 'Dr. Emily Rodriguez',
    title: 'Academic Director',
    email: 'emily.rodriguez@gpapilot.com',
    phone: '(813) 555-1237',
    specialty: 'Ground School & Theory'
  },
  {
    name: 'Captain James Wilson',
    title: 'International Student Coordinator',
    email: 'james.wilson@gpapilot.com',
    phone: '(813) 555-1238',
    specialty: 'International Programs'
  }
]

export default function ContactPage() {
  return (
    <>
      {/* JSON-LD LocalBusiness Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FlightSchool",
            "name": "Global Pilot Academy",
            "description": "FAA Part 141 & 61 certified flight school at Tampa Executive Airport",
            "url": "https://www.gpapilot.com",
            "telephone": "+1-813-555-1234",
            "email": "info@gpapilot.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Tampa Executive Airport (KVDF)",
              "addressLocality": "Tampa",
              "addressRegion": "FL",
              "postalCode": "33619",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "27.9506",
              "longitude": "-82.4572"
            },
            "openingHours": [
              "Mo-Fr 07:00-19:00",
              "Sa-Su 08:00-18:00"
            ],
            "sameAs": [
              "https://www.facebook.com/globalpilotacademy",
              "https://www.instagram.com/globalpilotacademy",
              "https://www.linkedin.com/company/globalpilotacademy"
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Flight Training Programs",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Airline Pilot Program",
                    "description": "Complete flight training from zero to commercial pilot"
                  }
                }
              ]
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "127"
            }
          })
        }}
      />

      {/* Hero Section */}
      <section className="relative py-16 lg:py-20 bg-white">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1588614959060-4d144f28a207?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Aircraft on tarmac at airport"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container-custom text-center relative z-10">
          <h1 className="h1 mb-4">Contact Us</h1>
          <p className="p text-lg max-w-3xl mx-auto text-gray-700">
            Ready to start your aviation journey? Get in touch with our team today.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Details */}
            <div>
              <h2 className="h2 mb-8">Get In Touch</h2>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-700">{contactInfo.address.name}</p>
                    <p className="text-gray-700">{contactInfo.address.street}</p>
                    <p className="text-gray-700">{contactInfo.address.city}</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-700">{contactInfo.phone.primary}</p>
                    <div className="flex items-center space-x-2 mt-2">
                      <MessageCircle className="w-4 h-4 text-green-600" />
                      <a href={`https://wa.me/${contactInfo.phone.whatsapp.replace(/\D/g, '')}`}
                         className="text-green-600 hover:text-green-700">
                        WhatsApp: {contactInfo.phone.whatsapp}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-700">
                      <a href={`mailto:${contactInfo.email.general}`} className="hover:text-primary-600">
                        {contactInfo.email.general}
                      </a>
                    </p>
                    <p className="text-sm text-gray-600 mt-1">General inquiries and information</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Operating Hours</h3>
                    <div className="space-y-1 text-sm text-gray-700">
                      <div className="flex justify-between">
                        <span>Monday - Friday:</span>
                        <span>{contactInfo.hours.monday}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday - Sunday:</span>
                        <span>{contactInfo.hours.saturday}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="h2 mb-8">Send Us a Message</h2>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="form-label">First Name *</label>
                    <input type="text" id="firstName" name="firstName" className="form-input" required />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="form-label">Last Name *</label>
                    <input type="text" id="lastName" name="lastName" className="form-input" required />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="form-label">Email Address *</label>
                  <input type="email" id="email" name="email" className="form-input" required />
                </div>

                <div>
                  <label htmlFor="phone" className="form-label">Phone Number</label>
                  <input type="tel" id="phone" name="phone" className="form-input" />
                </div>

                <div>
                  <label htmlFor="subject" className="form-label">Subject *</label>
                  <select id="subject" name="subject" className="form-input" required>
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="enrollment">Enrollment Information</option>
                    <option value="programs">Program Details</option>
                    <option value="pricing">Pricing & Payment</option>
                    <option value="international">International Students</option>
                    <option value="visit">Schedule a Visit</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="form-label">Message *</label>
                  <textarea id="message" name="message" rows={5} className="form-input" required
                    placeholder="Tell us about your aviation goals or questions..."></textarea>
                </div>

                <button type="submit" className="btn-primary w-full flex items-center justify-center">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="section-sm bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="h2 mb-4">Contact Our Team</h2>
            <p className="p max-w-3xl mx-auto">
              Get in touch with our experienced team members for specific inquiries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="card-hover text-center">
                <div className="p-6">
                  <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary-600">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>

                  <h3 className="font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-sm text-primary-600 mb-2">{member.title}</p>
                  <p className="text-xs text-gray-600 mb-4">{member.specialty}</p>

                  <div className="space-y-2 text-sm">
                    <a href={`mailto:${member.email}`} className="block text-accent-600 hover:text-accent-700">
                      {member.email}
                    </a>
                    <a href={`tel:${member.phone}`} className="block text-gray-700 hover:text-gray-900">
                      {member.phone}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="h2 mb-4">Visit Us</h2>
            <p className="p max-w-3xl mx-auto">
              Located at Tampa Executive Airport (KVDF) for easy access and convenience.
            </p>
          </div>

          {/* Embedded Map Placeholder */}
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video bg-gray-200 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">Interactive Map</p>
                <p className="text-sm text-gray-500">Tampa Executive Airport (KVDF)</p>
                <p className="text-sm text-gray-500">Tampa, FL 33619</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600">
              <strong>Directions:</strong> From Tampa International Airport, take I-275 S to Exit 45A for Hillsborough Ave.
              Turn right onto N 40th St, then left onto E Hillsborough Ave. Follow signs for KVDF.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="section-sm bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="h2 mb-6">Ready to Start Flying?</h2>
          <p className="p text-xl mb-8 max-w-3xl mx-auto text-white">
            Take the next step in your aviation journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="/discovery" className="btn-accent text-lg px-8 py-4">
              Book Discovery Flight
            </a>
            <a href="/tour" className="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary-900">
              Schedule Campus Tour
            </a>
            <a href="/enroll" className="btn-primary text-lg px-8 py-4">
              Enroll Now
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
