import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Clock, DollarSign, Award, CheckCircle, BookOpen, Plane, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Flight Training Programs',
  description: 'Comprehensive flight training programs at Global Pilot Academy. From Private Pilot to Airline Captain, we offer PPL, IR, CFI, and Zero-to-Hero programs with expert instruction.',
  keywords: ['flight training programs', 'private pilot license', 'instrument rating', 'CFI training', 'airline pilot program', 'zero to hero'],
  openGraph: {
    title: 'Flight Training Programs | Global Pilot Academy',
    description: 'Comprehensive flight training programs from Private Pilot to Airline Captain.',
  },
}

const programs = [
  {
    id: 'airline-pilot',
    title: 'Airline Pilot Program',
    subtitle: 'Zero to Commercial Pilot with CFI',
    description: 'Our flagship program designed to take you from zero flight experience to a commercial pilot with CFI rating, ready for airline interviews.',
    duration: '10-14 months',
    totalHours: '250+',
    price: '$63,500',
    requirements: ['18+ years old', 'High school diploma', 'FAA medical certificate', 'English proficiency'],
    features: [
      'Private Pilot License (PPL)',
      'Instrument Rating (IR)',
      'Commercial Pilot License (CPL)',
      'Certified Flight Instructor (CFI)',
      'Multi-Engine Rating',
      'Complex Aircraft Training',
      'Ground School & Test Prep',
      'Career Guidance & Mentoring'
    ],
    aircraft: ['Cessna 152', 'Cessna 172', 'Piper Arrow', 'Piper Seneca'],
    image: '/images/airline-pilot-program.jpg',
    popular: true
  },
  {
    id: 'private-pilot',
    title: 'Private Pilot License',
    subtitle: 'Learn to Fly',
    description: 'Start your aviation journey with our Private Pilot License program. Learn the fundamentals of flying and earn your wings.',
    duration: '3-6 months',
    totalHours: '40-60',
    price: '$12,500',
    requirements: ['17+ years old', 'FAA medical certificate', 'English proficiency'],
    features: [
      'Ground School Training',
      'Flight Training (40+ hours)',
      'Solo Flight Experience',
      'Cross-Country Training',
      'Emergency Procedures',
      'Checkride Preparation',
      'Study Materials Included'
    ],
    aircraft: ['Cessna 152', 'Cessna 172'],
    image: '/images/private-pilot-program.jpg'
  },
  {
    id: 'instrument-rating',
    title: 'Instrument Rating',
    subtitle: 'Fly in All Weather',
    description: 'Learn to fly by instruments and navigate in challenging weather conditions. Essential for serious pilots.',
    duration: '2-4 months',
    totalHours: '40+',
    price: '$8,500',
    requirements: ['Private Pilot License', 'FAA medical certificate', '50 hours cross-country PIC time'],
    features: [
      'Instrument Flying Techniques',
      'IFR Navigation & Procedures',
      'Approach & Landing Training',
      'Emergency IFR Operations',
      'Cross-Country IFR Flights',
      'Checkride Preparation',
      'Advanced Avionics Training'
    ],
    aircraft: ['Cessna 172', 'Piper Arrow'],
    image: '/images/instrument-rating-program.jpg'
  },
  {
    id: 'cfi',
    title: 'Certified Flight Instructor',
    subtitle: 'Teach Others to Fly',
    description: 'Become a certified flight instructor and start building hours while teaching others. Perfect for building flight time.',
    duration: '2-3 months',
    totalHours: '25+',
    price: '$6,500',
    requirements: ['Commercial Pilot License', 'Instrument Rating', '250 hours total time', 'FAA medical certificate'],
    features: [
      'Flight Instructor Ground School',
      'Teaching Techniques & Methods',
      'Student Evaluation Training',
      'Emergency Procedure Instruction',
      'Checkride Preparation',
      'Teaching Practice Flights',
      'CFI Test Prep Materials'
    ],
    aircraft: ['Cessna 152', 'Cessna 172'],
    image: '/images/cfi-program.jpg'
  }
]

const programTypes = [
  {
    title: 'Part 141 Training',
    description: 'Structured, FAA-approved curriculum with guaranteed completion times and potential financial aid options.',
    benefits: ['Structured curriculum', 'Guaranteed completion', 'Financial aid eligible', 'FAA oversight']
  },
  {
    title: 'Part 61 Training',
    description: 'Flexible, personalized training that adapts to your schedule and learning pace.',
    benefits: ['Flexible scheduling', 'Personalized training', 'Self-paced learning', 'Cost-effective']
  }
]

export default function ProgramsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-16 lg:py-20 bg-white">
        <div className="container-custom text-center">
          <h1 className="h1 mb-4">Flight Training Programs</h1>
          <p className="p text-lg max-w-3xl mx-auto text-gray-700">
            Choose the perfect flight training program for your aviation goals. From your first flight 
            to airline captain, we have the expertise and resources to get you there.
          </p>
        </div>
      </section>

      {/* Program Types */}
      <section className="section-sm bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="h2 mb-4">Training Options</h2>
            <p className="p max-w-3xl mx-auto">
              We offer both Part 141 and Part 61 training programs to suit your learning style and schedule.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programTypes.map((type, index) => (
              <div key={index} className="card-hover">
                <div className="p-8">
                  <h3 className="h3 mb-4">{type.title}</h3>
                  <p className="p mb-6">{type.description}</p>
                  <ul className="space-y-2">
                    {type.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-accent-500 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Programs */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="h2 mb-4">Our Training Programs</h2>
            <p className="p max-w-3xl mx-auto">
              Comprehensive flight training designed to meet your specific aviation goals and timeline.
            </p>
          </div>
          
          <div className="space-y-12">
            {programs.map((program, index) => (
              <div key={program.id} className={`card-hover ${program.popular ? 'ring-2 ring-accent-500' : ''}`}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Program Image */}
                  <div className="relative h-64 lg:h-full bg-gray-200 rounded-xl overflow-hidden">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className="object-cover"
                    />
                    {program.popular && (
                      <div className="absolute top-4 left-4 bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </div>
                    )}
                  </div>
                  
                  {/* Program Content */}
                  <div className="p-6 lg:p-8">
                    <div className="mb-6">
                      <h3 className="h3 mb-2">{program.title}</h3>
                      <p className="text-lg text-accent-600 font-medium mb-4">{program.subtitle}</p>
                      <p className="p mb-6">{program.description}</p>
                    </div>
                    
                    {/* Program Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center">
                        <div className="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg mx-auto mb-2">
                          <Clock className="w-6 h-6 text-primary-600" />
                        </div>
                        <p className="text-sm text-gray-600">Duration</p>
                        <p className="font-semibold text-gray-900">{program.duration}</p>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center w-12 h-12 bg-accent-100 rounded-lg mx-auto mb-2">
                          <Plane className="w-6 h-6 text-accent-600" />
                        </div>
                        <p className="text-sm text-gray-600">Total Hours</p>
                        <p className="font-semibold text-gray-900">{program.totalHours}</p>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mx-auto mb-2">
                          <DollarSign className="w-6 h-6 text-green-600" />
                        </div>
                        <p className="text-sm text-gray-600">Total Cost</p>
                        <p className="font-semibold text-gray-900">{program.price}</p>
                      </div>
                    </div>
                    
                    {/* Requirements */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Requirements</h4>
                      <ul className="space-y-2">
                        {program.requirements.map((requirement, reqIndex) => (
                          <li key={reqIndex} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-accent-500 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{requirement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">What's Included</h4>
                      <ul className="space-y-2">
                        {program.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-accent-500 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Aircraft */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Training Aircraft</h4>
                      <div className="flex flex-wrap gap-2">
                        {program.aircraft.map((aircraft, aircraftIndex) => (
                          <span key={aircraftIndex} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                            {aircraft}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* CTA */}
                    <div className="flex flex-col sm:flex-row gap-3">
                                          <Link href={`/programs/${program.id}`} className="btn-primary flex-1 text-center">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                      <Link href="/contact" className="btn-outline flex-1 text-center">
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-lg bg-white">
        <div className="container-custom text-center">
          <h2 className="h2 mb-6">Ready to Start Your Training?</h2>
          <p className="p text-xl mb-8 max-w-3xl mx-auto text-gray-700">
            Our experienced instructors are ready to guide you through your aviation journey. 
            Contact us today to discuss your goals and get started.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/enroll" className="btn-primary text-lg px-8 py-4">
              Enroll Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link href="/contact" className="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-gray-900">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
