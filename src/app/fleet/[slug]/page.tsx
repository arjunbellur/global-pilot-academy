import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Plane, Clock, DollarSign, CheckCircle, Navigation, Wifi, Radio } from 'lucide-react'

// Aircraft data - in a real app, this would come from a CMS or database
const aircraft = {
  'c152': {
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
      ceiling: '14,700 ft',
      length: '24 ft 1 in',
      wingspan: '33 ft 4 in',
      height: '8 ft 6 in'
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
    nextMaintenance: '2024-04-15',
    availability: 'Mon-Sun 7AM-7PM',
    instructorRequired: true,
    soloEligible: true
  },
  'c172': {
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
      ceiling: '13,500 ft',
      length: '27 ft 2 in',
      wingspan: '36 ft 1 in',
      height: '8 ft 11 in'
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
    nextMaintenance: '2024-04-20',
    availability: 'Mon-Sun 7AM-7PM',
    instructorRequired: false,
    soloEligible: true
  },
  'arrow': {
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
      ceiling: '15,000 ft',
      length: '24 ft 7 in',
      wingspan: '35 ft 6 in',
      height: '8 ft 3 in'
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
    nextMaintenance: '2024-04-10',
    availability: 'Mon-Sun 7AM-7PM',
    instructorRequired: true,
    soloEligible: false
  },
  'seneca': {
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
      ceiling: '18,000 ft',
      length: '28 ft 6 in',
      wingspan: '38 ft 10 in',
      height: '9 ft 3 in'
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
    nextMaintenance: '2024-04-05',
    availability: 'Mon-Sun 7AM-7PM',
    instructorRequired: true,
    soloEligible: false
  }
}

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const plane = aircraft[params.slug as keyof typeof aircraft]
  
  if (!plane) {
    return {
      title: 'Aircraft Not Found',
      description: 'The requested aircraft could not be found.'
    }
  }

  return {
    title: `${plane.name} - ${plane.tail} | Global Pilot Academy`,
    description: `${plane.name} training aircraft with ${plane.specs.horsepower} engine. Available for ${plane.trainingUses.join(', ').toLowerCase()} training.`,
    keywords: [
      'training aircraft',
      plane.name.toLowerCase(),
      'flight training',
      'aviation academy',
      'Tampa FL'
    ],
    openGraph: {
      title: `${plane.name} - ${plane.tail} | Global Pilot Academy`,
      description: `${plane.name} training aircraft available for flight training.`,
      images: [plane.image],
    },
  }
}

export async function generateStaticParams() {
  const aircraftSlugs = Object.keys(aircraft)
  return aircraftSlugs.map((slug) => ({
    slug: slug,
  }))
}

export default function AircraftDetailPage({ params }: Props) {
  const plane = aircraft[params.slug as keyof typeof aircraft]

  if (!plane) {
    notFound()
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom">
          <div className="mb-8">
            <Link href="/fleet" className="inline-flex items-center text-accent-300 hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Fleet
            </Link>
          </div>
          
          <div className="text-center">
            <h1 className="h1 mb-6">{plane.name}</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-100 mb-8">
              {plane.tail} • {plane.type} • {plane.category}
            </p>
            <div className="inline-flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full">
              <DollarSign className="w-5 h-5" />
              <span className="text-xl font-bold">{plane.hourlyRate}/hr</span>
            </div>
          </div>
        </div>
      </section>

      {/* Aircraft Overview */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Aircraft Image */}
            <div className="relative h-96 bg-gray-200 rounded-xl overflow-hidden">
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
            
            {/* Aircraft Details */}
            <div>
              <h2 className="h2 mb-6">Aircraft Overview</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="h3 mb-3">Training Applications</h3>
                  <div className="flex flex-wrap gap-2">
                    {plane.trainingUses.map((use, index) => (
                      <span key={index} className="px-3 py-1 bg-accent-100 text-accent-700 rounded-full text-sm">
                        {use}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="h3 mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    {plane.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-accent-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600">Availability</p>
                    <p className="font-semibold text-gray-900">{plane.availability}</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600">Instructor Required</p>
                    <p className="font-semibold text-gray-900">{plane.instructorRequired ? 'Yes' : 'No'}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="section-sm bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="h2 mb-4">Technical Specifications</h2>
            <p className="p max-w-3xl mx-auto">
              Detailed specifications and performance data for the {plane.name}.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="card">
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Engine & Performance</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Engine:</span>
                        <span className="font-medium">{plane.specs.engine}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Horsepower:</span>
                        <span className="font-medium">{plane.specs.horsepower}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Cruise Speed:</span>
                        <span className="font-medium">{plane.specs.cruiseSpeed}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Ceiling:</span>
                        <span className="font-medium">{plane.specs.ceiling}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Dimensions & Weight</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Length:</span>
                        <span className="font-medium">{plane.specs.length}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Wingspan:</span>
                        <span className="font-medium">{plane.specs.wingspan}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Height:</span>
                        <span className="font-medium">{plane.specs.height}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Max Weight:</span>
                        <span className="font-medium">{plane.specs.maxWeight}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Range & Fuel</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Range:</span>
                        <span className="font-medium">{plane.specs.range}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Fuel Capacity:</span>
                        <span className="font-medium">{plane.specs.fuelCapacity}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Avionics */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="h2 mb-4">Avionics Suite</h2>
            <p className="p max-w-3xl mx-auto">
              State-of-the-art avionics and navigation equipment for safe, efficient training.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="card">
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {plane.avionics.map((avionic, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{avionic}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance & Availability */}
      <section className="section-sm bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="h2 mb-4">Maintenance & Availability</h2>
            <p className="p max-w-3xl mx-auto">
              Current maintenance status and availability information.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card">
                <div className="p-6">
                  <h3 className="h3 mb-4">Maintenance Schedule</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Last Maintenance:</span>
                      <span className="font-medium">{plane.lastMaintenance}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Next Maintenance:</span>
                      <span className="font-medium">{plane.nextMaintenance}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="card">
                <div className="p-6">
                  <h3 className="h3 mb-4">Availability</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Status:</span>
                      <span className="font-medium text-green-600">{plane.status}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Hours:</span>
                      <span className="font-medium">{plane.availability}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Solo Eligible:</span>
                      <span className="font-medium">{plane.soloEligible ? 'Yes' : 'No'}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="section-lg bg-gradient-accent text-white">
        <div className="container-custom text-center">
          <h2 className="h2 mb-6">Ready to Train on the {plane.name}?</h2>
          <p className="p text-xl mb-8 max-w-3xl mx-auto text-gray-100">
            Book your training session on this {plane.type.toLowerCase()} aircraft today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="tel:+18135551234" className="btn-primary text-lg px-8 py-4">
              Call to Book
            </a>
            <Link href="/contact" className="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-accent-900">
              Contact Us
            </Link>
          </div>
          <p className="text-sm text-gray-300 mt-6">
            Current rate: ${plane.hourlyRate}/hour • Aircraft availability varies
          </p>
        </div>
      </section>
    </>
  )
}
