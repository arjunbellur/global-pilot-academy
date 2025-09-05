import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Award, Users, Clock, Star, Quote, Target, Heart, Shield, BookOpen, Plane } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Global Pilot Academy - FAA Certified Flight School',
  description: 'Learn about Global Pilot Academy, a leading FAA Part 141 & 61 certified flight school at Tampa Executive Airport. Our experienced team, modern facilities, and proven track record.',
  keywords: ['about flight school', 'pilot academy history', 'FAA certified training', 'aviation education'],
  openGraph: {
    title: 'About Global Pilot Academy | FAA Certified Flight School',
    description: 'Learn about our FAA certified flight school and experienced aviation professionals.',
  },
}

const stats = [
  { label: 'Students Trained', value: '500+', icon: Users },
  { label: 'Years of Excellence', value: '15+', icon: Clock },
  { label: 'Aircraft Fleet', value: '4', icon: Plane },
  { label: 'Job Placement Rate', value: '95%', icon: Award }
]

const teamMembers = [
  {
    name: 'Captain Sarah Johnson',
    title: 'Chief Flight Instructor',
    experience: '20+ years',
    certifications: ['ATP', 'CFI', 'MEI', 'Airline Captain'],
    bio: 'Former Southwest Airlines captain with extensive experience in pilot training and airline operations.',
    image: '/images/team-sarah.jpg'
  },
  {
    name: 'Captain Michael Chen',
    title: 'Director of Operations',
    experience: '18+ years',
    certifications: ['ATP', 'CFI', 'A&P Mechanic'],
    bio: 'Former military pilot and aircraft maintenance expert ensuring the highest standards of safety and training.',
    image: '/images/team-michael.jpg'
  },
  {
    name: 'Dr. Emily Rodriguez',
    title: 'Academic Director',
    experience: '12+ years',
    certifications: ['PhD Aviation Education', 'CFII', 'AGI'],
    bio: 'Aviation education specialist focused on innovative teaching methods and student success.',
    image: '/images/team-emily.jpg'
  },
  {
    name: 'Captain James Wilson',
    title: 'International Programs Director',
    experience: '15+ years',
    certifications: ['ATP', 'CFI', 'Visa Processing Expert'],
    bio: 'Specializes in international student support and FAA visa processing for foreign pilots.',
    image: '/images/team-james.jpg'
  }
]

const reviews = [
  {
    name: 'Alex Thompson',
    location: 'Commercial Pilot, JetBlue Airways',
    rating: 5,
    text: 'GPA gave me the foundation I needed to succeed as a commercial pilot. The instructors were exceptional and the training was world-class.',
    program: 'Airline Pilot Program'
  },
  {
    name: 'Maria Garcia',
    location: 'Private Pilot, Miami, FL',
    rating: 5,
    text: 'The personalized attention and modern facilities made learning to fly an incredible experience. Highly recommend!',
    program: 'Private Pilot License'
  },
  {
    name: 'David Kim',
    location: 'Flight Instructor, GPA Alumni',
    rating: 5,
    text: 'Outstanding training that prepared me for a successful career in aviation. The mentorship program was invaluable.',
    program: 'CFI Training'
  },
  {
    name: 'Lisa Chen',
    location: 'Commercial Pilot, United Airlines',
    rating: 5,
    text: 'From zero experience to airline captain in just 14 months. The comprehensive curriculum and experienced instructors made it possible.',
    program: 'Airline Pilot Program'
  },
  {
    name: 'Robert Martinez',
    location: 'Instrument Rated Private Pilot',
    rating: 5,
    text: 'The instrument rating course was thorough and well-structured. I feel confident flying in all weather conditions.',
    program: 'Instrument Rating'
  },
  {
    name: 'Sofia Patel',
    location: 'International Student, Mumbai, India',
    rating: 5,
    text: 'Exceptional support for international students. The visa process was smooth and the cultural adaptation support was outstanding.',
    program: 'International Airline Program'
  }
]

const values = [
  {
    icon: Target,
    title: 'Excellence',
    description: 'We strive for excellence in every aspect of flight training, from safety to instruction quality.'
  },
  {
    icon: Shield,
    title: 'Safety First',
    description: 'Safety is our top priority. We maintain the highest standards in aviation training.'
  },
  {
    icon: Heart,
    title: 'Student-Centered',
    description: 'Every student is unique. We provide personalized attention and support throughout training.'
  },
  {
    icon: BookOpen,
    title: 'Innovation',
    description: 'We embrace new technologies and teaching methods to enhance the learning experience.'
  }
]

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-16 lg:py-20 bg-white">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
            alt="Pilot in uniform with aircraft"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container-custom text-center relative z-10">
          <h1 className="h1 mb-4">About Global Pilot Academy</h1>
          <p className="p text-lg max-w-3xl mx-auto text-gray-700">
            FAA Part 141 & 61 certified flight school committed to excellence in aviation education
            and pilot training at Tampa Executive Airport.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-sm bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <stat.icon className="w-8 h-8 text-primary-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h2 className="h2 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Founded in 2009, Global Pilot Academy has been a leader in aviation education,
                  providing FAA Part 141 and Part 61 certified flight training to students from around the world.
                </p>
                <p>
                  Located at Tampa Executive Airport (KVDF), our modern facilities and experienced instructors
                  ensure that every student receives the highest quality training in a safe, supportive environment.
                </p>
                <p>
                  We believe that aviation education should be accessible, comprehensive, and focused on
                  real-world application. Our graduates have gone on to successful careers as commercial pilots,
                  flight instructors, and aviation professionals worldwide.
                </p>
                <p>
                  With over 500 graduates and a 95% job placement rate, we're proud of our track record
                  of turning aviation dreams into reality.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="relative h-96 bg-gray-200 rounded-xl overflow-hidden">
              <Image
                src="/images/academy-exterior.jpg"
                alt="Global Pilot Academy exterior"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-sm bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="h2 mb-4">Our Values</h2>
            <p className="p max-w-3xl mx-auto">
              The principles that guide everything we do at Global Pilot Academy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card-hover text-center">
                <div className="p-6">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="h3 mb-3">{value.title}</h3>
                  <p className="p-sm text-gray-600">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="h2 mb-4">Meet Our Team</h2>
            <p className="p max-w-3xl mx-auto">
              Experienced aviation professionals dedicated to your success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="card-hover">
                <div className="flex flex-col sm:flex-row">
                  <div className="relative w-full sm:w-48 h-48 bg-gray-200 rounded-t-xl sm:rounded-l-xl sm:rounded-t-none overflow-hidden flex-shrink-0">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 flex-1">
                    <h3 className="h3 mb-1">{member.name}</h3>
                    <p className="text-primary-600 font-medium mb-2">{member.title}</p>
                    <p className="text-sm text-gray-600 mb-3">{member.experience} experience</p>
                    <p className="text-gray-700 mb-4">{member.bio}</p>
                    <div className="flex flex-wrap gap-2">
                      {member.certifications.map((cert, certIndex) => (
                        <span key={certIndex} className="px-3 py-1 bg-accent-100 text-accent-700 rounded-full text-sm">
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Reviews */}
      <section className="section-sm bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="h2 mb-4">What Our Students Say</h2>
            <p className="p max-w-3xl mx-auto">
              Real experiences from our graduates and current students.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="card">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-gray-300 mb-4" />
                  <p className="text-gray-700 mb-4 italic">"{review.text}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">{review.name}</p>
                    <p className="text-sm text-gray-600">{review.location}</p>
                    <p className="text-xs text-primary-600 mt-1">{review.program}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/contact" className="btn-outline">
              Read More Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* Accreditation */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="h2 mb-4">FAA Certification & Accreditation</h2>
            <p className="p max-w-3xl mx-auto">
              We maintain the highest standards in aviation education and training.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-hover text-center">
              <div className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="h3 mb-3">FAA Part 141</h3>
                <p className="p-sm text-gray-600">
                  Certified under FAA Part 141 for structured, approved flight training programs.
                </p>
              </div>
            </div>

            <div className="card-hover text-center">
              <div className="p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="h3 mb-3">FAA Part 61</h3>
                <p className="p-sm text-gray-600">
                  Additional certification for flexible, personalized flight instruction.
                </p>
              </div>
            </div>

            <div className="card-hover text-center">
              <div className="p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="h3 mb-3">Professional Staff</h3>
                <p className="p-sm text-gray-600">
                  Experienced CFIs, former airline pilots, and aviation industry professionals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-lg bg-white">
        <div className="container-custom text-center">
          <h2 className="h2 mb-6">Join Our Aviation Family</h2>
          <p className="p text-xl mb-8 max-w-3xl mx-auto text-gray-700">
            Experience world-class flight training with experienced instructors and modern facilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/enroll" className="btn-primary text-lg px-8 py-4">
              Start Your Training
            </Link>
            <Link href="/contact" className="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-accent-900">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
