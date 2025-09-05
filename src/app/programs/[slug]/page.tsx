import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Clock, DollarSign, CheckCircle, Plane, Users, Award, BookOpen } from 'lucide-react'

// Program data - in a real app, this would come from a CMS or database
const programs = {
  'airline-pilot': {
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
    popular: true,
    curriculum: [
      {
        phase: 'Phase 1: Private Pilot',
        duration: '2-3 months',
        hours: '40-60',
        description: 'Learn the fundamentals of flying and earn your Private Pilot Certificate.'
      },
      {
        phase: 'Phase 2: Instrument Rating',
        duration: '2-3 months',
        hours: '40+',
        description: 'Master instrument flying and earn your Instrument Rating.'
      },
      {
        phase: 'Phase 3: Commercial Pilot',
        duration: '3-4 months',
        hours: '100+',
        description: 'Build advanced flying skills and earn your Commercial Pilot License.'
      },
      {
        phase: 'Phase 4: CFI Training',
        duration: '2-3 months',
        hours: '25+',
        description: 'Learn to teach others and earn your Certified Flight Instructor rating.'
      }
    ]
  },
  'private-pilot': {
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
    image: '/images/private-pilot-program.jpg',
    popular: false,
    curriculum: [
      {
        phase: 'Phase 1: Ground School',
        duration: '2-4 weeks',
        hours: 'N/A',
        description: 'Complete ground school training covering aviation theory and regulations.'
      },
      {
        phase: 'Phase 2: Flight Training',
        duration: '2-4 months',
        hours: '40+',
        description: 'Hands-on flight training with certified instructors.'
      },
      {
        phase: 'Phase 3: Solo Flights',
        duration: '1-2 months',
        hours: '10+',
        description: 'Build confidence with supervised solo flights.'
      },
      {
        phase: 'Phase 4: Checkride Prep',
        duration: '2-4 weeks',
        hours: '5+',
        description: 'Final preparation for your Private Pilot checkride.'
      }
    ]
  },
  'instrument-rating': {
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
    image: '/images/instrument-rating-program.jpg',
    popular: false,
    curriculum: [
      {
        phase: 'Phase 1: IFR Theory',
        duration: '2-3 weeks',
        hours: 'N/A',
        description: 'Advanced ground school covering instrument flying theory and regulations.'
      },
      {
        phase: 'Phase 2: Basic IFR',
        duration: '1-2 months',
        hours: '20+',
        description: 'Learn basic instrument flying techniques and procedures.'
      },
      {
        phase: 'Phase 3: Advanced IFR',
        duration: '1-2 months',
        hours: '20+',
        description: 'Master advanced IFR operations and cross-country flying.'
      }
    ]
  },
  'cfi': {
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
    image: '/images/cfi-program.jpg',
    popular: false,
    curriculum: [
      {
        phase: 'Phase 1: CFI Ground School',
        duration: '3-4 weeks',
        hours: 'N/A',
        description: 'Comprehensive ground school covering teaching methods and aviation education.'
      },
      {
        phase: 'Phase 2: Teaching Practice',
        duration: '1-2 months',
        hours: '15+',
        description: 'Practice teaching techniques with experienced CFIs.'
      },
      {
        phase: 'Phase 3: Checkride Prep',
        duration: '2-3 weeks',
        hours: '10+',
        description: 'Final preparation for your CFI checkride.'
      }
    ]
  }
}

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const program = programs[params.slug as keyof typeof programs]
  
  if (!program) {
    return {
      title: 'Program Not Found',
      description: 'The requested flight training program could not be found.'
    }
  }

  return {
    title: `${program.title} | Global Pilot Academy`,
    description: program.description,
    keywords: [
      'flight training',
      program.title.toLowerCase(),
      'pilot training',
      'aviation academy',
      'Tampa FL'
    ],
    openGraph: {
      title: `${program.title} | Global Pilot Academy`,
      description: program.description,
      images: [program.image],
    },
  }
}

export async function generateStaticParams() {
  const programSlugs = Object.keys(programs)
  return programSlugs.map((slug) => ({
    slug: slug,
  }))
}

export default function ProgramDetailPage({ params }: Props) {
  const program = programs[params.slug as keyof typeof programs]

  if (!program) {
    notFound()
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom">
          <div className="mb-8">
            <Link href="/programs" className="inline-flex items-center text-accent-300 hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Programs
            </Link>
          </div>
          
          <div className="text-center">
            <h1 className="h1 mb-6">{program.title}</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-100 mb-8">
              {program.subtitle}
            </p>
            <p className="p text-lg max-w-4xl mx-auto text-gray-100">
              {program.description}
            </p>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Program Image */}
            <div className="relative h-96 bg-gray-200 rounded-xl overflow-hidden">
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
            
            {/* Program Details */}
            <div>
              <h2 className="h2 mb-6">Program Overview</h2>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Clock className="w-8 h-8 text-primary-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Duration</p>
                  <p className="text-xl font-bold text-gray-900">{program.duration}</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Plane className="w-8 h-8 text-accent-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Total Hours</p>
                  <p className="text-xl font-bold text-gray-900">{program.totalHours}</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <DollarSign className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Total Cost</p>
                  <p className="text-xl font-bold text-gray-900">{program.price}</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Max Class Size</p>
                  <p className="text-xl font-bold text-gray-900">8 Students</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="h3">What's Included</h3>
                <ul className="space-y-2">
                  {program.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-accent-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="section-sm bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="h2 mb-4">Training Curriculum</h2>
            <p className="p max-w-3xl mx-auto">
              Our structured curriculum ensures you progress systematically through each phase of training.
            </p>
          </div>
          
          <div className="space-y-6">
            {program.curriculum.map((phase, index) => (
              <div key={index} className="card-hover">
                <div className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xl font-bold text-primary-600">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="h3 mb-2">{phase.phase}</h3>
                      <div className="flex items-center space-x-6 mb-3 text-sm text-gray-600">
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {phase.duration}
                        </span>
                        {phase.hours !== 'N/A' && (
                          <span className="flex items-center">
                            <Plane className="w-4 h-4 mr-1" />
                            {phase.hours} hours
                          </span>
                        )}
                      </div>
                      <p className="text-gray-700">{phase.description}</p>
                    </div>
                  </div>
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
              Ensure you meet all requirements before enrolling in this program.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="card">
              <div className="p-8">
                <ul className="space-y-4">
                  {program.requirements.map((requirement, index) => (
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

      {/* Training Aircraft */}
      <section className="section-sm bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="h2 mb-4">Training Aircraft</h2>
            <p className="p max-w-3xl mx-auto">
              You'll train on these aircraft throughout your program.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {program.aircraft.map((aircraft, index) => (
              <div key={index} className="card-hover text-center">
                <div className="p-6">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Plane className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="font-semibold text-lg text-gray-900">{aircraft}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-lg bg-gradient-accent text-white">
        <div className="container-custom text-center">
          <h2 className="h2 mb-6">Ready to Start {program.title}?</h2>
          <p className="p text-xl mb-8 max-w-3xl mx-auto text-gray-100">
            Begin your aviation journey today with our comprehensive {program.title.toLowerCase()} program.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/enroll" className="btn-primary text-lg px-8 py-4">
              Enroll Now
            </Link>
            <Link href="/contact" className="btn btn-md btn-outline-white">
              Contact Us
            </Link>
          </div>
          <p className="text-sm text-gray-300 mt-6">
            Questions? Call us at (813) 555-1234
          </p>
        </div>
      </section>
    </>
  )
}
