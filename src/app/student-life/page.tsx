import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Home, Wrench, Users, BookOpen, Coffee, Car, Wifi, Shield, Heart, MapPin, DollarSign } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Student Life - Global Pilot Academy',
  description: 'Discover student life at Global Pilot Academy. Housing options, pilot tools, community events, and support services for flight training students.',
  keywords: ['flight student housing', 'pilot training life', 'student support', 'aviation community'],
  openGraph: {
    title: 'Student Life | Global Pilot Academy',
    description: 'Discover student life and support services at Global Pilot Academy.',
  },
}

const housingOptions = [
  {
    type: 'On-Campus Apartments',
    description: 'Modern apartments within walking distance of the academy',
    price: '$800-1,200/month',
    features: ['Fully furnished', 'Utilities included', 'Airport shuttle', '24/7 security'],
    image: '/images/housing-apartments.jpg'
  },
  {
    type: 'Student Housing Complex',
    description: 'Shared housing designed specifically for flight students',
    price: '$600-900/month',
    features: ['Study rooms', 'Flight planning areas', 'Laundry facilities', 'Community kitchen'],
    image: '/images/housing-student.jpg'
  },
  {
    type: 'Private Rentals',
    description: 'Local apartments and houses near the airport',
    price: '$700-1,500/month',
    features: ['Flexible terms', 'Pet-friendly options', 'Private parking', 'Various sizes'],
    image: '/images/housing-private.jpg'
  }
]

const pilotTools = [
  {
    category: 'Flight Planning',
    tools: [
      { name: 'ForeFlight', description: 'Professional flight planning and navigation app', cost: '$99/year' },
      { name: 'Garmin Pilot', description: 'Advanced aviation GPS and weather app', cost: '$99/year' },
      { name: 'FAR/AIM', description: 'Federal Aviation Regulations reference', cost: 'Free online' },
      { name: 'Aviation Weather', description: 'NOAA aviation weather services', cost: 'Free' }
    ]
  },
  {
    category: 'Study Materials',
    tools: [
      { name: 'ASA Training Manuals', description: 'Comprehensive training textbooks', cost: '$50-150 each' },
      { name: 'Online Ground School', description: 'Interactive learning platform', cost: '$200-400' },
      { name: 'Practice Test Software', description: 'FAA knowledge test preparation', cost: '$50-100' },
      { name: 'Logbook Software', description: 'Digital flight log maintenance', cost: '$20-50/year' }
    ]
  },
  {
    category: 'Equipment',
    tools: [
      { name: 'Aviation Headset', description: 'Noise-canceling communication headset', cost: '$200-1,000' },
      { name: 'Flight Bag', description: 'Professional flight bag and organizer', cost: '$50-200' },
      { name: 'Kneeboard', description: 'Pilot checklist and note organizer', cost: '$20-50' },
      { name: 'Plotter & Charts', description: 'Navigation plotter and sectional charts', cost: '$30-80' }
    ]
  }
]

const communityFeatures = [
  {
    icon: Users,
    title: 'Student Community',
    description: 'Connect with fellow students from around the world sharing the same aviation passion.'
  },
  {
    icon: Coffee,
    title: 'Study Groups',
    description: 'Regular study sessions and group discussions to enhance learning and build friendships.'
  },
  {
    icon: BookOpen,
    title: 'Mentorship Program',
    description: 'Learn from experienced pilots and CFIs who provide guidance throughout training.'
  },
  {
    icon: Heart,
    title: 'Wellness Support',
    description: 'Stress management resources, counseling services, and work-life balance support.'
  },
  {
    icon: MapPin,
    title: 'Local Events',
    description: 'Attend aviation events, airshows, and networking opportunities in the Tampa area.'
  },
  {
    icon: Shield,
    title: 'Safety Culture',
    description: 'Comprehensive safety training and a culture that prioritizes safe aviation practices.'
  }
]

const dailyLife = [
  {
    time: '7:00 AM',
    activity: 'Morning briefing and weather discussion',
    type: 'Academic'
  },
  {
    time: '8:00 AM - 12:00 PM',
    activity: 'Flight training sessions',
    type: 'Practical'
  },
  {
    time: '12:00 PM - 1:00 PM',
    activity: 'Lunch break and debriefing',
    type: 'Social'
  },
  {
    time: '1:00 PM - 5:00 PM',
    activity: 'Ground school and simulator training',
    type: 'Academic'
  },
  {
    time: '5:00 PM - 6:00 PM',
    activity: 'Study groups and flight planning',
    type: 'Academic'
  },
  {
    time: '6:00 PM - 8:00 PM',
    activity: 'Free time and community activities',
    type: 'Social'
  }
]

export default function StudentLifePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom text-center">
          <h1 className="h1 mb-6">Student Life</h1>
          <p className="p text-xl md:text-2xl max-w-3xl mx-auto text-gray-100">
            More than just flight training - experience a supportive community and comprehensive student support system.
          </p>
        </div>
      </section>

      {/* Housing Options */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="h2 mb-4">Housing Options</h2>
            <p className="p max-w-3xl mx-auto">
              Comfortable, convenient housing options designed for flight training students.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {housingOptions.map((option, index) => (
              <div key={index} className="card-hover">
                <div className="relative h-48 bg-gray-200 rounded-t-xl overflow-hidden">
                  <Image
                    src={option.image}
                    alt={option.type}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="h3 mb-2">{option.type}</h3>
                  <p className="text-gray-600 mb-4">{option.description}</p>
                  <div className="flex items-center space-x-2 mb-4">
                    <DollarSign className="w-4 h-4 text-primary-600" />
                    <span className="font-semibold text-primary-600">{option.price}</span>
                  </div>
                  <ul className="space-y-2">
                    {option.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/contact" className="btn-outline">
              Get Housing Assistance
            </Link>
          </div>
        </div>
      </section>

      {/* Daily Life */}
      <section className="section-sm bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="h2 mb-4">A Day in the Life</h2>
            <p className="p max-w-3xl mx-auto">
              Experience the structured yet balanced lifestyle of a flight training student.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {dailyLife.map((item, index) => (
                <div key={index} className="card flex items-center space-x-6 p-4">
                  <div className="w-20 text-center">
                    <span className="font-semibold text-gray-900">{item.time}</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{item.activity}</p>
                  </div>
                  <div className="w-20 text-center">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      item.type === 'Academic'
                        ? 'bg-blue-100 text-blue-800'
                        : item.type === 'Practical'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-purple-100 text-purple-800'
                    }`}>
                      {item.type}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pilot Tools */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="h2 mb-4">Pilot Tools & Resources</h2>
            <p className="p max-w-3xl mx-auto">
              Essential tools and resources to support your flight training journey.
            </p>
          </div>

          <div className="space-y-12">
            {pilotTools.map((category, index) => (
              <div key={index}>
                <h3 className="h3 mb-6 text-center">{category.category}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.tools.map((tool, toolIndex) => (
                    <div key={toolIndex} className="card-hover text-center">
                      <div className="p-6">
                        <h4 className="font-semibold text-gray-900 mb-2">{tool.name}</h4>
                        <p className="text-sm text-gray-600 mb-3">{tool.description}</p>
                        <div className="text-lg font-bold text-primary-600">{tool.cost}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Features */}
      <section className="section-sm bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="h2 mb-4">Community & Support</h2>
            <p className="p max-w-3xl mx-auto">
              Join a supportive community of aviation enthusiasts and professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {communityFeatures.map((feature, index) => (
              <div key={index} className="card-hover text-center">
                <div className="p-6">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="h3 mb-3">{feature.title}</h3>
                  <p className="p-sm text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transportation */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="h2 mb-4">Transportation</h2>
            <p className="p max-w-3xl mx-auto">
              Convenient transportation options to get you to and from the airport.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-hover text-center">
              <div className="p-6">
                <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Car className="w-8 h-8 text-accent-600" />
                </div>
                <h3 className="h3 mb-3">Airport Shuttle</h3>
                <p className="p-sm mb-4">Free shuttle service from recommended housing to the airport</p>
                <div className="text-sm text-gray-600">
                  <p>Mon-Fri: 6:30 AM - 7:00 PM</p>
                  <p>Sat-Sun: 7:30 AM - 6:00 PM</p>
                </div>
              </div>
            </div>

            <div className="card-hover text-center">
              <div className="p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wifi className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="h3 mb-3">Ride Sharing</h3>
                <p className="p-sm mb-4">Uber/Lyft services readily available in the Tampa area</p>
                <div className="text-sm text-gray-600">
                  <p>Average ride: $15-25</p>
                  <p>Travel time: 15-20 minutes</p>
                </div>
              </div>
            </div>

            <div className="card-hover text-center">
              <div className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="h3 mb-3">Parking</h3>
                <p className="p-sm mb-4">Free parking available for students at the airport</p>
                <div className="text-sm text-gray-600">
                  <p>24/7 access</p>
                  <p>Secure facility</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Services */}
      <section className="section-sm bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="h2 mb-4">Student Support Services</h2>
            <p className="p max-w-3xl mx-auto">
              Comprehensive support to ensure your success in flight training.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <div className="p-6">
                <h3 className="h3 mb-4">Academic Support</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent-500 rounded-full mt-2"></div>
                    <span className="text-gray-700">Tutoring services for ground school subjects</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent-500 rounded-full mt-2"></div>
                    <span className="text-gray-700">Study groups and peer learning opportunities</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent-500 rounded-full mt-2"></div>
                    <span className="text-gray-700">Test preparation and practice exams</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent-500 rounded-full mt-2"></div>
                    <span className="text-gray-700">Progress tracking and academic advising</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="card">
              <div className="p-6">
                <h3 className="h3 mb-4">Wellness & Counseling</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent-500 rounded-full mt-2"></div>
                    <span className="text-gray-700">Mental health counseling and support</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent-500 rounded-full mt-2"></div>
                    <span className="text-gray-700">Stress management workshops</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent-500 rounded-full mt-2"></div>
                    <span className="text-gray-700">Work-life balance guidance</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent-500 rounded-full mt-2"></div>
                    <span className="text-gray-700">Emergency support services</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-lg bg-gradient-accent text-white">
        <div className="container-custom text-center">
          <h2 className="h2 mb-6">Join Our Aviation Community</h2>
          <p className="p text-xl mb-8 max-w-3xl mx-auto text-gray-100">
            Experience comprehensive support and a vibrant community that will help you succeed in your aviation career.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/enroll" className="btn-primary text-lg px-8 py-4">
              Start Your Journey
            </Link>
            <Link href="/contact" className="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-accent-900">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
