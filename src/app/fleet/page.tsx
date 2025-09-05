import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Plane, Clock, DollarSign, CheckCircle, MapPin, Wifi, Radio, Navigation } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Aircraft Fleet',
  description: 'Our modern fleet of training aircraft at Global Pilot Academy. Cessna 152, 172, Piper Arrow, and Seneca with IFR certification and advanced avionics.',
  keywords: ['training aircraft', 'Cessna 152', 'Cessna 172', 'Piper Arrow', 'Piper Seneca', 'flight training fleet'],
  openGraph: {
    title: 'Aircraft Fleet | Global Pilot Academy',
    description: 'Modern training aircraft with IFR certification and advanced avionics.',
  },
}

const aircraft = [
  {
    id: 'c152',
    name: 'Cessna 152',
    tail: 'N12345',
    type: 'Single Engine',
    category: 'Trainer',
    hourlyRate: 150,
    image: '/images/c152.jpg',
    specs: {
      engine: 'Lycoming O-235-L2C',
      horsepower: '110 HP',
      maxWeight: '1,675 lbs',
      fuelCapacity: '26 gallons',
      range: '415 nm',
      cruiseSpeed: '107 knots',
      ceiling: '14,700 ft'
    },
    avionics: [
      'Garmin G5 Electronic Flight Instrument',
      'Garmin GTN 650 GPS/NAV/COM',
      'Garmin GMA 340 Audio Panel',
      'Garmin GTX 335 Transponder',
      'Dual VHF Radios',
      'IFR Certified'
    ],
    features: [
      'Perfect for primary training',
      'Fuel efficient',
      'Easy to fly',
      'Great visibility',
      'IFR certified',
      'Modern avionics suite'
    ],
    trainingUses: ['Private Pilot', 'Instrument Rating', 'Primary Training'],
    status: 'Available',
    lastMaintenance: '2024-01-15',
    nextMaintenance: '2024-04-15'
  },
  {
    id: 'c172',
    name: 'Cessna 172',
    tail: 'N67890',
    type: 'Single Engine',
    category: 'Trainer',
    hourlyRate: 175,
    image: '/images/c172.jpg',
    specs: {
      engine: 'Lycoming O-320-D2J',
      horsepower: '150 HP',
      maxWeight: '2,450 lbs',
      fuelCapacity: '56 gallons',
      range: '575 nm',
      cruiseSpeed: '122 knots',
      ceiling: '13,500 ft'
    },
    avionics: [
      'Garmin G1000 NXi Glass Cockpit',
      'Garmin GTN 750 GPS/NAV/COM',
      'Garmin GMA 1340 Audio Panel',
      'Garmin GTX 345 Transponder',
      'Dual VHF Radios',
      'IFR Certified',
      'Autopilot'
    ],
    features: [
      'Spacious cabin',
      'Excellent cross-country aircraft',
      'Advanced glass cockpit',
      'IFR certified',
      'Autopilot equipped',
      'Great for instrument training'
    ],
    trainingUses: ['Private Pilot', 'Instrument Rating', 'Cross-Country', 'Complex Training'],
    status: 'Available',
    lastMaintenance: '2024-01-20',
    nextMaintenance: '2024-04-20'
  },
  {
    id: 'arrow',
    name: 'Piper Arrow',
    tail: 'N11111',
    type: 'Complex Single',
    category: 'Advanced',
    hourlyRate: 225,
    image: '/images/arrow.jpg',
    specs: {
      engine: 'Lycoming IO-360-C1C6',
      horsepower: '200 HP',
      maxWeight: '2,750 lbs',
      fuelCapacity: '84 gallons',
      range: '700 nm',
      cruiseSpeed: '140 knots',
      ceiling: '15,000 ft'
    },
    avionics: [
      'Garmin G1000 NXi Glass Cockpit',
      'Garmin GTN 750 GPS/NAV/COM',
      'Garmin GMA 1340 Audio Panel',
      'Garmin GTX 345 Transponder',
      'Dual VHF Radios',
      'IFR Certified',
      'Autopilot',
      'Retractable Gear'
    ],
    features: [
      'Retractable landing gear',
      'Constant speed propeller',
      'Complex aircraft training',
      'High performance',
      'IFR certified',
      'Advanced avionics'
    ],
    trainingUses: ['Complex Aircraft', 'Instrument Rating', 'Commercial Pilot', 'Advanced Training'],
    status: 'Available',
    lastMaintenance: '2024-01-10',
    nextMaintenance: '2024-04-10'
  },
  {
    id: 'seneca',
    name: 'Piper Seneca',
    tail: 'N22222',
    type: 'Multi-Engine',
    category: 'Professional',
    hourlyRate: 350,
    image: '/images/seneca.jpg',
    specs: {
      engine: 'Lycoming IO-360-C1E6 (2x)',
      horsepower: '200 HP each',
      maxWeight: '4,000 lbs',
      fuelCapacity: '120 gallons',
      range: '800 nm',
      cruiseSpeed: '160 knots',
      ceiling: '18,000 ft'
    },
    avionics: [
      'Garmin G1000 NXi Glass Cockpit',
      'Garmin GTN 750 GPS/NAV/COM',
      'Garmin GMA 1340 Audio Panel',
      'Garmin GTX 345 Transponder',
      'Dual VHF Radios',
      'IFR Certified',
      'Autopilot',
      'Multi-Engine Systems'
    ],
    features: [
      'Twin-engine safety',
      'Professional training aircraft',
      'IFR certified',
      'Advanced glass cockpit',
      'Autopilot equipped',
      'Multi-engine systems training'
    ],
    trainingUses: ['Multi-Engine Rating', 'Commercial Pilot', 'Professional Training', 'IFR Operations'],
    status: 'Available',
    lastMaintenance: '2024-01-05',
    nextMaintenance: '2024-04-05'
  }
]

const fleetStats = [
  { label: 'Total Aircraft', value: '4', icon: Plane },
  { label: 'IFR Certified', value: '100%', icon: CheckCircle },
  { label: 'Glass Cockpit', value: '75%', icon: Navigation },
  { label: 'Multi-Engine', value: '1', icon: Plane }
]

export default function FleetPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom text-center">
          <h1 className="h1 mb-6">Our Aircraft Fleet</h1>
          <p className="p text-xl md:text-2xl max-w-3xl mx-auto text-gray-100">
            Train on modern, well-maintained aircraft equipped with the latest avionics. 
            Our diverse fleet ensures you're prepared for any aviation career path.
          </p>
        </div>
      </section>

      {/* Fleet Stats */}
      <section className="section-sm bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {fleetStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <stat.icon className="w-8 h-8 text-primary-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aircraft Details */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="h2 mb-4">Training Aircraft</h2>
            <p className="p max-w-3xl mx-auto">
              Each aircraft in our fleet is carefully maintained and equipped with modern avionics 
              to provide the best training experience possible.
            </p>
          </div>
          
          <div className="space-y-16">
            {aircraft.map((plane, index) => (
              <div key={plane.id} className="card-hover">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Aircraft Image */}
                  <div className="relative h-80 lg:h-96 bg-gray-200 rounded-xl overflow-hidden">
                    <Image
                      src={plane.image}
                      alt={plane.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {plane.status}
                    </div>
                    <div className="absolute top-4 right-4 bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      ${plane.hourlyRate}/hr
                    </div>
                  </div>
                  
                  {/* Aircraft Information */}
                  <div className="p-6 lg:p-8">
                    <div className="mb-6">
                      <h3 className="h3 mb-2">{plane.name}</h3>
                      <p className="text-lg text-accent-600 font-medium mb-2">{plane.tail}</p>
                      <p className="text-gray-600 mb-4">{plane.type} • {plane.category}</p>
                      <p className="p">{plane.name} is perfect for {plane.trainingUses.join(', ').toLowerCase()} training.</p>
                    </div>
                    
                    {/* Key Specs */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <p className="text-sm text-gray-600">Engine</p>
                        <p className="font-semibold">{plane.specs.engine}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Horsepower</p>
                        <p className="font-semibold">{plane.specs.horsepower}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Cruise Speed</p>
                        <p className="font-semibold">{plane.specs.cruiseSpeed}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Range</p>
                        <p className="font-semibold">{plane.specs.range}</p>
                      </div>
                    </div>
                    
                    {/* Avionics */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <Navigation className="w-5 h-5 text-primary-600 mr-2" />
                        Avionics Suite
                      </h4>
                      <ul className="space-y-2">
                        {plane.avionics.map((avionic, avionicIndex) => (
                          <li key={avionicIndex} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-accent-500 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{avionic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                      <div className="flex flex-wrap gap-2">
                        {plane.features.map((feature, featureIndex) => (
                          <span key={featureIndex} className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* CTA */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link href={`/fleet/${plane.id}`} className="btn-primary flex-1 text-center">
                        View Details
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                      <a href="tel:+18135551234" className="btn-outline flex-1 text-center">
                        Call to Book
                      </a>
                    </div>
                    
                    {/* Training Uses */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Training Applications</h4>
                      <div className="flex flex-wrap gap-2">
                        {plane.trainingUses.map((use, useIndex) => (
                          <span key={useIndex} className="px-3 py-1 bg-accent-100 text-accent-700 rounded-full text-sm">
                            {use}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Maintenance Info */}
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-gray-600">Last Maintenance</p>
                          <p className="font-medium">{plane.lastMaintenance}</p>
                        </div>
                        <div>
                          <p className="text-gray-600">Next Maintenance</p>
                          <p className="font-medium">{plane.nextMaintenance}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Comparison */}
      <section className="section-sm bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="h2 mb-4">Fleet Comparison</h2>
            <p className="p max-w-3xl mx-auto">
              Compare our aircraft to find the perfect training platform for your needs.
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left p-4 font-semibold text-gray-900">Aircraft</th>
                  <th className="text-left p-4 font-semibold text-gray-900">Type</th>
                  <th className="text-left p-4 font-semibold text-gray-900">Rate/Hour</th>
                  <th className="text-left p-4 font-semibold text-gray-900">Best For</th>
                  <th className="text-left p-4 font-semibold text-gray-900">IFR</th>
                </tr>
              </thead>
              <tbody>
                {aircraft.map((plane, index) => (
                  <tr key={plane.id} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="p-4">
                      <div>
                        <p className="font-semibold text-gray-900">{plane.name}</p>
                        <p className="text-sm text-gray-600">{plane.tail}</p>
                      </div>
                    </td>
                    <td className="p-4 text-gray-700">{plane.type}</td>
                    <td className="p-4">
                      <span className="font-semibold text-primary-600">${plane.hourlyRate}</span>
                    </td>
                    <td className="p-4 text-gray-700">{plane.trainingUses[0]}</td>
                    <td className="p-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Yes
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Safety & Maintenance */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="h2 mb-4">Safety & Maintenance</h2>
            <p className="p max-w-3xl mx-auto">
              Your safety is our top priority. All aircraft undergo rigorous maintenance schedules 
              and pre-flight inspections to ensure safe, reliable training.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-hover text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="h3 mb-3">Pre-Flight Inspections</h3>
              <p className="p-sm">Every aircraft undergoes thorough pre-flight inspections by certified mechanics and instructors.</p>
            </div>
            
            <div className="card-hover text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-accent-100 rounded-full flex items-center justify-center">
                <Clock className="w-8 h-8 text-accent-600" />
              </div>
              <h3 className="h3 mb-3">Regular Maintenance</h3>
              <p className="p-sm">Scheduled maintenance following manufacturer recommendations and FAA requirements.</p>
            </div>
            
            <div className="card-hover text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                <Plane className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="h3 mb-3">Modern Equipment</h3>
              <p className="p-sm">Latest avionics and safety equipment to enhance training and safety.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-lg bg-gradient-accent text-white">
        <div className="container-custom text-center">
          <h2 className="h2 mb-6">Ready to Train on Our Fleet?</h2>
          <p className="p text-xl mb-8 max-w-3xl mx-auto text-gray-100">
            Experience the difference of training on modern, well-maintained aircraft with advanced avionics. 
            Contact us to schedule your first flight.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="tel:+18135551234" className="btn-primary text-lg px-8 py-4">
              Call to Book
            </a>
            <a href="/contact" className="btn btn-md btn-outline-white">
              Contact Us
            </a>
          </div>
          <p className="text-sm text-gray-300 mt-6">
            Aircraft availability varies. Call (813) 555-1234 for current scheduling.
          </p>
        </div>
      </section>
    </>
  )
}
