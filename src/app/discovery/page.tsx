import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle, Clock, DollarSign, Plane, Calendar, MapPin, Phone, Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Discovery Flight - $99 | Global Pilot Academy',
  description: 'Book your discovery flight for just $99. Experience the thrill of flying with a certified flight instructor at KVDF Airport in Tampa, FL.',
  keywords: ['discovery flight', 'intro flight', 'first flight', 'aviation experience', 'Tampa flight school'],
  openGraph: {
    title: 'Discovery Flight - $99 | Global Pilot Academy',
    description: 'Book your discovery flight and experience the thrill of flying.',
  },
}

const discoveryFlightDetails = {
  price: 99,
  duration: '30 minutes',
  aircraft: 'Cessna 152 or 172',
  instructor: 'Certified Flight Instructor',
  location: 'KVDF Airport, Tampa, FL',
  includes: [
    'Pre-flight briefing',
    '30 minutes of flight time',
    'Hands-on flying experience',
    'Post-flight debriefing',
    'Certificate of completion',
    'Photos of your flight'
  ],
  requirements: [
    'Must be 12+ years old',
    'Valid government ID',
    'Comfortable clothing',
    'Closed-toe shoes'
  ],
  whatToExpect: [
    'Meet your instructor and aircraft',
    'Learn basic pre-flight procedures',
    'Take the controls during flight',
    'Experience takeoff and landing',
    'Learn about aviation careers'
  ]
}

const availableTimes = [
  '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM',
  '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
]

export default function DiscoveryFlightPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom text-center">
          <h1 className="h1 mb-6">Discovery Flight</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-100 mb-8">
            Experience the thrill of flying for just $99
          </p>
          <div className="inline-flex items-center space-x-2 bg-accent-500 text-white px-6 py-3 rounded-full text-xl font-bold">
            <DollarSign className="w-6 h-6" />
            <span>Only $99</span>
          </div>
        </div>
      </section>

      {/* Flight Details */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Flight Image */}
            <div className="relative h-96 bg-gray-200 rounded-xl overflow-hidden">
              <Image
                src="/images/discovery-flight.jpg"
                alt="Discovery Flight"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Flight Details */}
            <div>
              <h2 className="h2 mb-6">Your First Flight Awaits</h2>
              <p className="p mb-6">
                Take the controls of a real aircraft and experience the magic of flight. 
                Our discovery flight is the perfect introduction to aviation and your first step 
                toward becoming a pilot.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Clock className="w-8 h-8 text-primary-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Duration</p>
                  <p className="font-semibold text-gray-900">{discoveryFlightDetails.duration}</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Plane className="w-8 h-8 text-accent-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Aircraft</p>
                  <p className="font-semibold text-gray-900">{discoveryFlightDetails.aircraft}</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="h3">What's Included</h3>
                <ul className="space-y-2">
                  {discoveryFlightDetails.includes.map((item, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-accent-500 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
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
              Your discovery flight will be an unforgettable experience that could change your life forever.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {discoveryFlightDetails.whatToExpect.map((expectation, index) => (
              <div key={index} className="card-hover text-center">
                <div className="p-6">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary-600">{index + 1}</span>
                  </div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">{expectation}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="h2 mb-4">Requirements</h2>
            <p className="p max-w-3xl mx-auto">
              Simple requirements to ensure a safe and enjoyable flight experience.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="card">
              <div className="p-8">
                <ul className="space-y-4">
                  {discoveryFlightDetails.requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-accent-500 mt-0.5 flex-shrink-0" />
                      <span className="text-lg text-gray-700">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="section-sm bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="h2 mb-4">Book Your Discovery Flight</h2>
            <p className="p max-w-3xl mx-auto">
              Choose your preferred date and time. We'll confirm your booking within 24 hours.
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
                    <label htmlFor="participants" className="form-label">Number of Participants *</label>
                    <select id="participants" name="participants" className="form-input" required>
                      <option value="">Select number</option>
                      <option value="1">1 Person</option>
                      <option value="2">2 People</option>
                      <option value="3">3 People</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="experience" className="form-label">Previous Aviation Experience</label>
                    <textarea id="experience" name="experience" rows={3} className="form-input" 
                      placeholder="Tell us about any previous flying experience, aviation background, or specific interests..."></textarea>
                  </div>
                  
                  <div>
                    <label htmlFor="goals" className="form-label">Aviation Goals</label>
                    <textarea id="goals" name="goals" rows={3} className="form-input" 
                      placeholder="What are your aviation goals? Recreational flying, career pilot, etc..."></textarea>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <input type="checkbox" id="agreement" name="agreement" className="mt-1" required />
                    <label htmlFor="agreement" className="text-sm text-gray-700">
                      I agree to the terms and conditions and understand that this is a discovery flight experience. 
                      I confirm that I meet all requirements and will arrive on time for my scheduled flight.
                    </label>
                  </div>
                  
                  <button type="submit" className="btn-primary w-full text-lg py-4">
                    Book Discovery Flight - $99
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="h2 mb-4">Location & Contact</h2>
            <p className="p max-w-3xl mx-auto">
              Find us at KVDF Airport in Tampa, Florida. Easy access from Tampa Bay area.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="card">
              <div className="p-8">
                <h3 className="h3 mb-6">Flight Location</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-6 h-6 text-primary-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">KVDF Airport</p>
                      <p className="text-gray-600">Tampa, FL 33619</p>
                      <p className="text-sm text-gray-500">Located in the Tampa Bay area</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Clock className="w-6 h-6 text-primary-600" />
                    <div>
                      <p className="font-semibold text-gray-900">Operating Hours</p>
                      <p className="text-gray-600">Mon-Sun: 7AM-7PM</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Plane className="w-6 h-6 text-primary-600" />
                    <div>
                      <p className="font-semibold text-gray-900">Weather Dependent</p>
                      <p className="text-gray-600">Flights subject to weather conditions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="card">
              <div className="p-8">
                <h3 className="h3 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-6 h-6 text-primary-600" />
                    <div>
                      <p className="font-semibold text-gray-900">Phone</p>
                      <a href="tel:+18135551234" className="text-accent-600 hover:text-accent-700">
                        (813) 555-1234
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail className="w-6 h-6 text-primary-600" />
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <a href="mailto:discovery@gpapilot.com" className="text-accent-600 hover:text-accent-700">
                        discovery@gpapilot.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-700">
                      <strong>Need to reschedule?</strong> Contact us at least 24 hours in advance 
                      to reschedule your discovery flight.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-sm bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="h2 mb-4">Frequently Asked Questions</h2>
            <p className="p max-w-3xl mx-auto">
              Common questions about discovery flights and what to expect.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="card">
              <div className="p-6">
                <h3 className="font-semibold text-lg text-gray-900 mb-3">Is it safe?</h3>
                <p className="text-gray-700">
                  Yes, absolutely! All flights are conducted with certified flight instructors in well-maintained aircraft. 
                  Safety is our top priority, and we only fly in good weather conditions.
                </p>
              </div>
            </div>
            
            <div className="card">
              <div className="p-6">
                <h3 className="font-semibold text-lg text-gray-900 mb-3">Can I bring guests?</h3>
                <p className="text-gray-700">
                  Yes! You can bring up to 2 additional passengers for an additional fee. 
                  Each person will get a chance to experience the controls during flight.
                </p>
              </div>
            </div>
            
            <div className="card">
              <div className="p-6">
                <h3 className="font-semibold text-lg text-gray-900 mb-3">What if the weather is bad?</h3>
                <p className="text-gray-700">
                  We'll reschedule your flight for the next available good weather day. 
                  Your safety is our priority, and we won't fly in unsafe conditions.
                </p>
              </div>
            </div>
            
            <div className="card">
              <div className="p-6">
                <h3 className="font-semibold text-lg text-gray-900 mb-3">Is this flight time loggable?</h3>
                <p className="text-gray-700">
                  Yes! Your discovery flight time counts toward your pilot certificate if you decide to continue training. 
                  It's a great way to start building your flight hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-lg bg-gradient-accent text-white">
        <div className="container-custom text-center">
          <h2 className="h2 mb-6">Ready to Take Flight?</h2>
          <p className="p text-xl mb-8 max-w-3xl mx-auto text-gray-100">
            Book your discovery flight today and experience the thrill of aviation. 
            This could be the beginning of your pilot journey!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#booking-form" className="btn-primary text-lg px-8 py-4">
              Book Now - $99
            </a>
            <a href="tel:+18135551234" className="btn btn-md btn-outline-white">
              Call to Book
            </a>
          </div>
          <p className="text-sm text-gray-300 mt-6">
            Questions? Call us at (813) 555-1234 or email discovery@gpapilot.com
          </p>
        </div>
      </section>
    </>
  )
}
