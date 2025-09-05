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
        <div className="relative z-10 container-custom text-center text-white box">
          <h1 className="h1 animate-fade-in">
            Your Journey to the
            <span className="block text-accent-400">Skies Begins Here</span>
          </h1>
          <p className="p text-responsive-lg max-w-3xl mx-auto text-gray-100 animate-slide-up">
            Professional flight training at KVDF Airport in Tampa, FL. From Private Pilot to Airline Captain,
            we provide comprehensive training with experienced instructors and a modern fleet.
          </p>
          <div className="flex-responsive animate-slide-up" style={{ justifyContent: 'center' }}>
            <Link href="/enroll" className="btn-accent">
              Start Your Training
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/discovery" className="btn-outline border-white text-white hover:bg-white hover:text-gray-900">
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
          <div className="grid-responsive-sm">
            {trustBadges.map((badge, index) => (
              <div key={index} className="text-center group stack">
                <div className="mx-auto bg-white rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300" style={{ width: '4em', height: '4em', marginBottom: '1em' }}>
                  <badge.icon className={`w-8 h-8 ${badge.color}`} />
                </div>
                <p className="text-responsive-sm font-medium text-gray-700">{badge.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Preview Section */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center stack">
            <h2 className="h2">Our Training Programs</h2>
            <p className="p max-w-3xl mx-auto">
              Choose from our comprehensive range of flight training programs, designed to take you from
              your first flight to your dream aviation career.
            </p>
          </div>

          <div className="grid-responsive">
            {programs.map((program) => (
              <div key={program.id} className="card card-hover group">
                <div className="relative bg-gray-200 rounded-t-xl overflow-hidden" style={{ height: '12em' }}>
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-primary-500 text-white rounded-full text-responsive-sm font-medium" style={{ padding: '0.25em 0.75em' }}>
                    {program.duration}
                  </div>
                </div>
                <div className="card-content">
                  <h3 className="h3">{program.title}</h3>
                  <p className="p-sm">{program.description}</p>
                  <div style={{ marginBottom: '1em' }}>
                    <p className="text-responsive-lg font-bold text-primary-600">{program.price}</p>
                  </div>
                  <ul className="stack-sm" style={{ marginBottom: '1.5em' }}>
                    {program.features.map((feature, index) => (
                      <li key={index} className="flex items-center" style={{ gap: '0.5em' }}>
                        <CheckCircle className="w-4 h-4 text-accent-500 flex-shrink-0" />
                        <span className="text-responsive-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={program.href} className="btn-primary w-full text-center group-hover:bg-primary-600">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center" style={{ marginTop: '3em' }}>
            <Link href="/programs" className="btn-outline">
              View All Programs
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Fleet Preview Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center stack">
            <h2 className="h2">Our Aircraft Fleet</h2>
            <p className="p max-w-3xl mx-auto">
              Train on modern, well-maintained aircraft equipped with the latest avionics.
              Our diverse fleet ensures you're prepared for any aviation career path.
            </p>
          </div>

          <div className="grid-responsive-lg">
            {fleet.map((aircraft, index) => (
              <div key={index} className="card card-hover text-center group">
                <div className="relative bg-gray-200 rounded-t-xl overflow-hidden" style={{ height: '10em' }}>
                  <Image
                    src={aircraft.image}
                    alt={aircraft.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="card-content">
                  <h3 className="text-responsive-lg font-semibold" style={{ marginBottom: '0.25em' }}>{aircraft.name}</h3>
                  <p className="text-responsive-sm text-gray-600" style={{ marginBottom: '0.5em' }}>{aircraft.tail}</p>
                  <p className="text-responsive-sm text-gray-500" style={{ marginBottom: '0.75em' }}>{aircraft.type}</p>
                  <p className="text-responsive-lg font-bold text-primary-600" style={{ marginBottom: '0.75em' }}>{aircraft.rate}</p>
                  <ul className="stack-sm text-responsive-sm text-gray-600">
                    {aircraft.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center" style={{ marginTop: '3em' }}>
            <Link href="/fleet" className="btn-outline">
              View Full Fleet
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center stack">
            <h2 className="h2">What Our Students Say</h2>
            <p className="p max-w-3xl mx-auto">
              Hear from our graduates who have successfully launched their aviation careers
              through our comprehensive training programs.
            </p>
          </div>

          <div className="grid-responsive">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card card-hover">
                <div className="card-content">
                  <div className="flex items-center" style={{ marginBottom: '1em', gap: '0.125em' }}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700" style={{ marginBottom: '1.5em', fontStyle: 'italic' }}>
                    "{testimonial.content}"
                  </blockquote>
                  <div className="flex items-center" style={{ gap: '0.75em' }}>
                    <div className="bg-gray-200 rounded-full overflow-hidden" style={{ width: '3em', height: '3em', flexShrink: 0 }}>
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-responsive-sm">{testimonial.name}</p>
                      <p className="text-responsive-sm text-gray-600">{testimonial.role}</p>
                      <p className="text-responsive-sm text-primary-600">{testimonial.company}</p>
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
        <div className="container-custom text-center stack">
          <h2 className="h2">Ready to Start Your Aviation Journey?</h2>
          <p className="p text-responsive-lg max-w-3xl mx-auto text-gray-100">
            Join hundreds of successful pilots who started their careers at Global Pilot Academy.
            Our expert instructors and comprehensive training programs will guide you every step of the way.
          </p>
          <div className="flex-responsive" style={{ justifyContent: 'center' }}>
            <Link href="/enroll" className="btn-accent">
              Enroll Now
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-gray-900">
              Contact Us
            </Link>
          </div>
          <p className="text-responsive-sm text-gray-300">
            Questions? Call us at (813) 555-1234 or email info@gpapilot.com
          </p>
        </div>
      </section>
    </>
  )
}
