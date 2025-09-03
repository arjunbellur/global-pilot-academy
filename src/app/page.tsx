import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Star, Award, Users, Clock, MapPin, CheckCircle } from 'lucide-react'

// Trust badges data
const trustBadges = [
  { icon: Award, text: 'FAA Part 141 & 61 Certified', color: 'text-primary-500' },
  { icon: Users, text: '500+ Graduates', color: 'text-accent-500' },
  { icon: Clock, text: '15+ Years Experience', color: 'text-primary-600' },
  { icon: MapPin, text: 'KVDF Airport, Tampa', color: 'text-accent-600' },
]

// Programs preview data
const programs = [
  {
    id: 'airline-pilot',
    title: 'Airline Pilot Program',
    description: 'Zero to Commercial Pilot with CFI rating. Your path to the airlines.',
    duration: '10-14 months',
    price: 'From $63,500',
    features: ['Private Pilot', 'Instrument Rating', 'Commercial Pilot', 'CFI Rating'],
    image: '/images/airline-pilot.jpg',
    href: '/programs#airline-pilot'
  },
  {
    id: 'private-pilot',
    title: 'Private Pilot License',
    description: 'Learn to fly and earn your Private Pilot Certificate.',
    duration: '3-6 months',
    price: 'From $12,500',
    features: ['Ground School', 'Flight Training', 'Solo Flights', 'Checkride Prep'],
    image: '/images/private-pilot.jpg',
    href: '/programs#private-pilot'
  },
  {
    id: 'instrument-rating',
    title: 'Instrument Rating',
    description: 'Fly in all weather conditions with confidence.',
    duration: '2-4 months',
    price: 'From $8,500',
    features: ['IFR Training', 'Instrument Flying', 'Cross-Country', 'Checkride Prep'],
    image: '/images/instrument-rating.jpg',
    href: '/programs#instrument-rating'
  }
]

// Fleet preview data
const fleet = [
  {
    name: 'Cessna 152',
    tail: 'N12345',
    type: 'Single Engine',
    rate: '$150/hr',
    image: '/images/c152.jpg',
    features: ['IFR Certified', 'Perfect for Training', 'Fuel Efficient']
  },
  {
    name: 'Cessna 172',
    tail: 'N67890',
    type: 'Single Engine',
    rate: '$175/hr',
    image: '/images/c172.jpg',
    features: ['IFR Certified', 'Spacious Cabin', 'Great for Cross-Country']
  },
  {
    name: 'Piper Arrow',
    tail: 'N11111',
    type: 'Complex Single',
    rate: '$225/hr',
    image: '/images/arrow.jpg',
    features: ['Retractable Gear', 'Complex Aircraft', 'IFR Certified']
  },
  {
    name: 'Piper Seneca',
    tail: 'N22222',
    type: 'Multi-Engine',
    rate: '$350/hr',
    image: '/images/seneca.jpg',
    features: ['Multi-Engine', 'IFR Certified', 'Professional Training']
  }
]

// Testimonials data
const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Commercial Pilot',
    company: 'Southwest Airlines',
    content: 'Global Pilot Academy gave me the skills and confidence to pursue my dream career. The instructors are exceptional and the training is world-class.',
    rating: 5,
    image: '/images/testimonial-1.jpg'
  },
  {
    name: 'Michael Chen',
    role: 'Flight Instructor',
    company: 'GPA Alumni',
    content: 'The structured approach and experienced instructors made all the difference. I went from zero flight experience to CFI in just 14 months.',
    rating: 5,
    image: '/images/testimonial-2.jpg'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Private Pilot',
    company: 'Recreational Flyer',
    content: 'Amazing experience learning to fly here. The staff is professional, the aircraft are well-maintained, and the training is comprehensive.',
    rating: 5,
    image: '/images/testimonial-3.jpg'
  }
]

export default function HomePage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "FlightSchool",
                "@id": "https://www.gpapilot.com/#organization",
                "name": "Global Pilot Academy",
                "description": "FAA Part 141 & 61 certified flight school at Tampa Executive Airport offering comprehensive pilot training programs",
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
                  "Monday 07:00-19:00",
                  "Tuesday 07:00-19:00",
                  "Wednesday 07:00-19:00",
                  "Thursday 07:00-19:00",
                  "Friday 07:00-19:00",
                  "Saturday 08:00-18:00",
                  "Sunday 08:00-18:00"
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
                      "@id": "https://www.gpapilot.com/programs/airline-pilot",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Airline Pilot Program",
                        "description": "Complete zero-to-hero pilot training program"
                      },
                      "price": "63500",
                      "priceCurrency": "USD",
                      "priceValidUntil": "2025-12-31"
                    },
                    {
                      "@type": "Offer",
                      "@id": "https://www.gpapilot.com/programs/private-pilot",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Private Pilot License",
                        "description": "Learn to fly with our Private Pilot training program"
                      },
                      "price": "12500",
                      "priceCurrency": "USD",
                      "priceValidUntil": "2025-12-31"
                    },
                    {
                      "@type": "Offer",
                      "@id": "https://www.gpapilot.com/programs/instrument-rating",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Instrument Rating",
                        "description": "Fly in all weather conditions with instrument training"
                      },
                      "price": "8500",
                      "priceCurrency": "USD",
                      "priceValidUntil": "2025-12-31"
                    }
                  ]
                },
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.8",
                  "reviewCount": "127",
                  "bestRating": "5",
                  "worstRating": "1"
                },
                "priceRange": "$$$",
                "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
                "currenciesAccepted": "USD"
              },
              {
                "@type": "LocalBusiness",
                "@id": "https://www.gpapilot.com/#localbusiness",
                "name": "Global Pilot Academy",
                "description": "Professional flight school and aviation training center",
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
                "openingHoursSpecification": [
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                    "opens": "07:00",
                    "closes": "19:00"
                  },
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Saturday", "Sunday"],
                    "opens": "08:00",
                    "closes": "18:00"
                  }
                ],
                "sameAs": [
                  "https://www.facebook.com/globalpilotacademy",
                  "https://www.instagram.com/globalpilotacademy",
                  "https://www.linkedin.com/company/globalpilotacademy"
                ]
              }
            ]
          })
        }}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/80 via-primary-800/70 to-accent-800/60"></div>
          <Image
            src="/images/hero-bg.jpg"
            alt="Aircraft flying over Tampa Bay"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 container-custom text-center text-white">
          <h1 className="h1 mb-6 animate-fade-in">
            Your Journey to the
            <span className="block text-accent-400">Skies Begins Here</span>
          </h1>
          <p className="p text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-100 animate-slide-up">
            Professional flight training at KVDF Airport in Tampa, FL. From Private Pilot to Airline Captain, 
            we provide comprehensive training with experienced instructors and a modern fleet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <Link href="/enroll" className="btn-accent text-lg px-8 py-4">
              Start Your Training
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link href="/discovery" className="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-gray-900">
              Book Discovery Flight
            </Link>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="section-sm bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustBadges.map((badge, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <badge.icon className={`w-8 h-8 ${badge.color}`} />
                </div>
                <p className="text-sm font-medium text-gray-700">{badge.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Preview Section */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="h2 mb-4">Our Training Programs</h2>
            <p className="p max-w-3xl mx-auto">
              Choose from our comprehensive range of flight training programs, designed to take you from 
              your first flight to your dream aviation career.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program) => (
              <div key={program.id} className="card-hover group">
                <div className="relative h-48 bg-gray-200 rounded-t-xl overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {program.duration}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="h3 mb-3">{program.title}</h3>
                  <p className="p-sm mb-4">{program.description}</p>
                  <div className="mb-4">
                    <p className="text-2xl font-bold text-primary-600">{program.price}</p>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {program.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-accent-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={program.href} className="btn-primary w-full text-center group-hover:bg-primary-600">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/programs" className="btn-outline text-lg px-8 py-4">
              View All Programs
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Fleet Preview Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="h2 mb-4">Our Aircraft Fleet</h2>
            <p className="p max-w-3xl mx-auto">
              Train on modern, well-maintained aircraft equipped with the latest avionics. 
              Our diverse fleet ensures you're prepared for any aviation career path.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fleet.map((aircraft, index) => (
              <div key={index} className="card-hover text-center group">
                <div className="relative h-40 bg-gray-200 rounded-t-xl overflow-hidden">
                  <Image
                    src={aircraft.image}
                    alt={aircraft.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1">{aircraft.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{aircraft.tail}</p>
                  <p className="text-sm text-gray-500 mb-3">{aircraft.type}</p>
                  <p className="text-lg font-bold text-primary-600 mb-3">{aircraft.rate}</p>
                  <ul className="space-y-1 text-xs text-gray-600">
                    {aircraft.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/fleet" className="btn-outline text-lg px-8 py-4">
              View Full Fleet
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="h2 mb-4">What Our Students Say</h2>
            <p className="p max-w-3xl mx-auto">
              Hear from our graduates who have successfully launched their aviation careers 
              through our comprehensive training programs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card-hover">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-6 italic">
                    "{testimonial.content}"
                  </blockquote>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                      <p className="text-sm text-primary-600">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-lg bg-gradient-hero text-white">
        <div className="container-custom text-center">
          <h2 className="h2 mb-6">Ready to Start Your Aviation Journey?</h2>
          <p className="p text-xl mb-8 max-w-3xl mx-auto text-gray-100">
            Join hundreds of successful pilots who started their careers at Global Pilot Academy. 
            Our expert instructors and comprehensive training programs will guide you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/enroll" className="btn-accent text-lg px-8 py-4">
              Enroll Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link href="/contact" className="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-gray-900">
              Contact Us
            </Link>
          </div>
          <p className="text-sm text-gray-300 mt-6">
            Questions? Call us at (813) 555-1234 or email info@gpapilot.com
          </p>
        </div>
      </section>
    </>
  )
}
