import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, MapPin, Users, Car, Coffee, Plane, CheckCircle, Phone, Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Schedule a Campus Tour - Global Pilot Academy',
  description: 'Book a personalized campus tour of Global Pilot Academy at Tampa Executive Airport. Meet our team, see our facilities, and experience flight training firsthand.',
  keywords: ['campus tour', 'flight school visit', 'aviation academy tour', 'Tampa airport tour'],
  openGraph: {
    title: 'Schedule a Campus Tour | Global Pilot Academy',
    description: 'Book a personalized campus tour and experience our flight training facilities.',
  },
}

const tourHighlights = [
  {
    icon: Plane,
    title: 'Aircraft Fleet',
    description: 'See our modern Cessna 152s, 172s, Piper Arrows, and Senecas with glass cockpits'
  },
  {
    icon: Users,
    title: 'Meet Instructors',
    description: 'Connect with our experienced CFIs and learn about our teaching philosophy'
  },
  {
    icon: Coffee,
    title: 'Student Lounge',
    description: 'Visit our student areas and see the community atmosphere'
  },
  {
    icon: Car,
    title: 'Flight Operations',
    description: 'Observe pre-flight preparations and safety procedures'
  }
]

const tourTypes = [
  {
    name: 'Standard Tour',
    duration: '60 minutes',
    price: 'Free',
    includes: [
      'Facility walkthrough',
      'Aircraft viewing',
      'Program overview',
      'Q&A session'
    ],
    description: 'Perfect introduction to our facilities and training programs'
  },
  {
    name: 'Extended Tour',
    duration: '90 minutes',
    price: 'Free',
    includes: [
      'All standard tour features',
      'Classroom observation',
      'Flight simulation demo',
      'Lunch with students (optional)'
    ],
    description: 'In-depth experience with additional demonstrations and interactions'
  },
  {
    name: 'VIP Tour',
    duration: '2 hours',
    price: '$50 per person',
    includes: [
      'All extended tour features',
      'Personal instructor meeting',
      'Customized program consultation',
      'Transportation from hotel',
      'Refreshments provided'
    ],
    description: 'Premium experience for serious prospects and families'
  }
]

const availableTimes = [
  '9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'
]

const testimonials = [
  {
    name: 'Jennifer Martinez',
    text: 'The campus tour was incredible! Seeing the aircraft and meeting the instructors made me confident this was the right place for my training.',
    type: 'Prospective Student'
  },
  {
    name: 'Robert Chen',
    text: 'The VIP tour was worth every penny. We got to see everything and had personalized attention from the director himself.',
    type: 'Parent of Student'
  },
  {
    name: 'Maria Rodriguez',
    text: 'The tour showed me how professional and well-equipped the academy is. The safety focus was very reassuring.',
    type: 'International Student'
  }
]

export default function TourPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom text-center">
          <h1 className="h1 mb-6">Schedule Your Campus Tour</h1>
          <p className="p text-xl md:text-2xl max-w-3xl mx-auto text-gray-100">
            Experience Global Pilot Academy firsthand. Book a personalized tour of our facilities
            at Tampa Executive Airport and meet our aviation professionals.
          </p>
        </div>
      </section>

      {/* Tour Highlights */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="h2 mb-4">What You'll Experience</h2>
            <p className="p max-w-3xl mx-auto">
              Our comprehensive tours give you a complete view of life at Global Pilot Academy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tourHighlights.map((highlight, index) => (
              <div key={index} className="card-hover text-center">
                <div className="p-6">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <highlight.icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="h3 mb-3">{highlight.title}</h3>
                  <p className="p-sm text-gray-600">{highlight.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tour Options */}
      <section className="section-sm bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="h2 mb-4">Tour Options</h2>
            <p className="p max-w-3xl mx-auto">
              Choose the tour experience that best fits your needs and interests.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tourTypes.map((tour, index) => (
              <div key={index} className={`card-hover ${tour.name === 'VIP Tour' ? 'ring-2 ring-accent-500' : ''}`}>
                <div className="p-6">
                  {tour.name === 'VIP Tour' && (
                    <div className="text-center mb-4">
                      <span className="inline-block bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Premium Experience
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <h3 className="h3 mb-2">{tour.name}</h3>
                    <div className="flex items-center justify-center space-x-4 mb-2">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-600">{tour.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <span className="text-lg font-bold text-primary-600">{tour.price}</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">{tour.description}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Includes:</h4>
                    <ul className="space-y-2">
                      {tour.includes.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-accent-500 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="btn-primary w-full">
                    Select This Tour
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="h2 mb-4">Book Your Tour</h2>
            <p className="p max-w-3xl mx-auto">
              Fill out the form below to schedule your personalized campus tour.
              We'll confirm your appointment within 24 hours.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="card">
              <div className="p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="form-label">First Name *</label>
                      <input type="text" id="firstName" name="firstName" className="form-input" required />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="form-label">Last Name *</label>
                      <input type="text" id="lastName" name="lastName" className="form-input" required />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="form-label">Email Address *</label>
                      <input type="email" id="email" name="email" className="form-input" required />
                    </div>
                    <div>
                      <label htmlFor="phone" className="form-label">Phone Number *</label>
                      <input type="tel" id="phone" name="phone" className="form-input" required />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="tourType" className="form-label">Tour Type *</label>
                    <select id="tourType" name="tourType" className="form-input" required>
                      <option value="">Select a tour type</option>
                      <option value="standard">Standard Tour (60 min, Free)</option>
                      <option value="extended">Extended Tour (90 min, Free)</option>
                      <option value="vip">VIP Tour (2 hours, $50)</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="preferredDate" className="form-label">Preferred Date *</label>
                      <input type="date" id="preferredDate" name="preferredDate" className="form-input" required />
                    </div>
                    <div>
                      <label htmlFor="preferredTime" className="form-label">Preferred Time *</label>
                      <select id="preferredTime" name="preferredTime" className="form-input" required>
                        <option value="">Select a time</option>
                        {availableTimes.map((time, index) => (
                          <option key={index} value={time}>{time}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="guests" className="form-label">Number of Guests *</label>
                    <select id="guests" name="guests" className="form-input" required>
                      <option value="">Select number</option>
                      <option value="1">1 Person</option>
                      <option value="2">2 People</option>
                      <option value="3">3 People</option>
                      <option value="4">4 People</option>
                      <option value="5+">5+ People</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="interest" className="form-label">Primary Interest</label>
                    <select id="interest" name="interest" className="form-input">
                      <option value="">Select your primary interest</option>
                      <option value="private-pilot">Private Pilot Training</option>
                      <option value="commercial-pilot">Commercial Pilot Training</option>
                      <option value="airline-track">Airline Pilot Program</option>
                      <option value="instrument-rating">Instrument Rating</option>
                      <option value="cfi">Flight Instructor Training</option>
                      <option value="discovery">Discovery Flight</option>
                      <option value="general">General Aviation Interest</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="comments" className="form-label">Additional Comments or Questions</label>
                    <textarea id="comments" name="comments" rows={4} className="form-input"
                      placeholder="Tell us about your aviation goals or any specific areas you'd like to focus on during the tour..."></textarea>
                  </div>

                  <div className="flex items-start space-x-3">
                    <input type="checkbox" id="terms" name="terms" className="mt-1" required />
                    <label htmlFor="terms" className="text-sm text-gray-700">
                      I agree to the tour terms and conditions and understand that tours are weather dependent.
                      I confirm that all participants will follow safety guidelines during the visit.
                    </label>
                  </div>

                  <button type="submit" className="btn-primary w-full text-lg py-4">
                    Book My Tour
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="section-sm bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="h2 mb-4">What to Expect</h2>
            <p className="p max-w-3xl mx-auto">
              Your campus tour includes personalized attention and a comprehensive look at our facilities.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card">
                <div className="p-6">
                  <h3 className="h3 mb-4">Before Your Tour</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Confirmation call 24 hours before</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Parking instructions provided</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Weather check and backup plans</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Dress code reminder (comfortable, closed-toe shoes)</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="card">
                <div className="p-6">
                  <h3 className="h3 mb-4">During Your Tour</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Personal tour guide</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Aircraft viewing and explanations</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Q&A with instructors and staff</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Program information and enrollment discussion</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="h2 mb-4">What Tour Visitors Say</h2>
            <p className="p max-w-3xl mx-auto">
              Recent visitors share their campus tour experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card">
                <div className="p-6">
                  <div className="mb-4">
                    <Quote className="w-8 h-8 text-gray-300" />
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-primary-600">{testimonial.type}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-sm bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="h2 mb-4">Questions About Tours?</h2>
            <p className="p max-w-3xl mx-auto">
              Have questions or need to make changes to your tour? Contact us directly.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card text-center">
                <div className="p-6">
                  <Phone className="w-8 h-8 text-primary-600 mx-auto mb-4" />
                  <h3 className="h3 mb-2">Call Us</h3>
                  <p className="text-gray-600 mb-2">(813) 555-1234</p>
                  <p className="text-sm text-gray-500">Mon-Fri 7AM-7PM</p>
                </div>
              </div>

              <div className="card text-center">
                <div className="p-6">
                  <Mail className="w-8 h-8 text-primary-600 mx-auto mb-4" />
                  <h3 className="h3 mb-2">Email Us</h3>
                  <a href="mailto:tours@gpapilot.com" className="text-accent-600 hover:text-accent-700">
                    tours@gpapilot.com
                  </a>
                  <p className="text-sm text-gray-500 mt-2">Response within 24 hours</p>
                </div>
              </div>

              <div className="card text-center">
                <div className="p-6">
                  <MapPin className="w-8 h-8 text-primary-600 mx-auto mb-4" />
                  <h3 className="h3 mb-2">Visit Us</h3>
                  <p className="text-gray-600">Tampa Executive Airport (KVDF)</p>
                  <p className="text-sm text-gray-500">Tampa, FL 33619</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-lg bg-gradient-accent text-white">
        <div className="container-custom text-center">
          <h2 className="h2 mb-6">Experience Global Pilot Academy</h2>
          <p className="p text-xl mb-8 max-w-3xl mx-auto text-gray-100">
            Book your campus tour today and discover why we're Tampa's premier flight school.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="#booking-form" className="btn-primary text-lg px-8 py-4">
              Book Your Tour
            </Link>
            <Link href="/discovery" className="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-accent-900">
              Try Discovery Flight
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
