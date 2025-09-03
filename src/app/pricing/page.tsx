import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, DollarSign, Calendar, Users, Globe, CreditCard, Info } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Flight Training Pricing - Domestic & International Programs',
  description: 'Transparent pricing for all flight training programs at Global Pilot Academy. Domestic and international student pricing with financing options and payment plans.',
  keywords: ['flight training pricing', 'pilot school cost', 'aviation training prices', 'flight academy fees', 'international student pricing'],
  openGraph: {
    title: 'Flight Training Pricing | Global Pilot Academy',
    description: 'Transparent pricing for domestic and international flight training programs.',
  },
}

const domesticPrograms = [
  {
    name: 'Private Pilot License',
    price: '$12,500',
    duration: '3-6 months',
    aircraft: 'C-152/C-172',
    hours: '40-60',
    includes: [
      'Ground School Training',
      'Flight Training (40+ hours)',
      'Study Materials',
      'Checkride Preparation',
      'FAA Test Fees Assistance'
    ]
  },
  {
    name: 'Instrument Rating',
    price: '$8,500',
    duration: '2-4 months',
    aircraft: 'C-172/Arrow',
    hours: '40+',
    includes: [
      'IFR Training',
      'Instrument Flying',
      'Cross-Country IFR',
      'Approach Training',
      'Emergency Procedures'
    ]
  },
  {
    name: 'Commercial Pilot License',
    price: '$18,500',
    duration: '4-6 months',
    aircraft: 'Arrow/Seneca',
    hours: '100+',
    includes: [
      'Commercial Ground School',
      'Flight Training',
      'Complex Aircraft',
      'Cross-Country Training',
      'Checkride Preparation'
    ]
  },
  {
    name: 'Airline Pilot Program',
    price: '$63,500',
    duration: '10-14 months',
    aircraft: 'Full Fleet',
    hours: '250+',
    includes: [
      'Complete Zero-to-Hero Training',
      'Private Pilot License',
      'Instrument Rating',
      'Commercial Pilot License',
      'CFI Rating',
      'Multi-Engine Rating'
    ]
  }
]

const internationalPricing = {
  title: 'International Student Pricing',
  description: 'Special pricing and support for international students pursuing aviation careers in the United States.',
  programs: [
    {
      name: 'International Private Pilot',
      price: '$13,500',
      domesticPrice: '$12,500'
    },
    {
      name: 'International Airline Track',
      price: '$68,500',
      domesticPrice: '$63,500'
    }
  ],
  additionalFees: [
    { name: 'SEVIS Fee', amount: '$350' },
    { name: 'Visa Application', amount: '$160' },
    { name: 'Housing Deposit', amount: '$500' },
    { name: 'International Student Fee', amount: '$1,000' }
  ]
}

const paymentOptions = [
  {
    name: 'Full Payment',
    discount: '5% off',
    description: 'Pay the full amount upfront and receive a 5% discount.',
    benefits: ['Best value', 'Immediate start', 'No monthly payments'],
    icon: DollarSign
  },
  {
    name: 'Payment Plan',
    discount: '0% interest',
    description: 'Spread your payments over the duration of your training.',
    benefits: ['Flexible payments', 'No interest', 'Easy budgeting'],
    icon: Calendar
  },
  {
    name: 'Financing',
    discount: 'Competitive rates',
    description: 'Third-party financing options available through our partners.',
    benefits: ['Credit check required', 'Extended terms', 'Professional financing'],
    icon: CreditCard
  }
]

export default function PricingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom text-center">
          <h1 className="h1 mb-6">Flight Training Pricing</h1>
          <p className="p text-xl md:text-2xl max-w-3xl mx-auto text-gray-100">
            Transparent, competitive pricing for all our flight training programs.
            No hidden fees, just clear costs to help you plan your aviation career.
          </p>
        </div>
      </section>

      {/* Domestic Programs */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="h2 mb-4">Domestic Programs</h2>
            <p className="p max-w-3xl mx-auto">
              Comprehensive flight training programs for U.S. citizens and permanent residents.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {domesticPrograms.map((program, index) => (
              <div key={index} className={`card-hover ${program.name === 'Airline Pilot Program' ? 'ring-2 ring-accent-500' : ''}`}>
                <div className="p-6">
                  {program.name === 'Airline Pilot Program' && (
                    <div className="text-center mb-4">
                      <span className="inline-block bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <h3 className="h3 mb-2">{program.name}</h3>
                    <div className="text-3xl font-bold text-primary-600 mb-2">{program.price}</div>
                    <p className="text-gray-600 text-sm">{program.duration}</p>
                  </div>

                  <div className="space-y-3 mb-6 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Aircraft:</span>
                      <span className="font-medium">{program.aircraft}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Hours:</span>
                      <span className="font-medium">{program.hours}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Includes:</h4>
                    <ul className="space-y-2">
                      {program.includes.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-accent-500 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link href={`/programs/${program.name.toLowerCase().replace(/\s+/g, '-')}`} className="btn-primary w-full text-center">
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* International Pricing */}
      <section className="section-sm bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="h2 mb-4">{internationalPricing.title}</h2>
            <p className="p max-w-3xl mx-auto">
              {internationalPricing.description}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="card">
              <div className="p-6">
                <h3 className="h3 mb-6">Program Pricing</h3>
                <div className="space-y-4">
                  {internationalPricing.programs.map((program, index) => (
                    <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-gray-900">{program.name}</h4>
                        <div className="text-right">
                          <div className="text-xl font-bold text-primary-600">{program.price}</div>
                          <div className="text-sm text-gray-500 line-through">{program.domesticPrice}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="card">
              <div className="p-6">
                <h3 className="h3 mb-6">Additional Fees</h3>
                <div className="space-y-3">
                  {internationalPricing.additionalFees.map((fee, index) => (
                    <div key={index} className="flex justify-between">
                      <span className="text-gray-700">{fee.name}</span>
                      <span className="font-semibold text-primary-600">{fee.amount}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <Info className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <div className="text-sm text-blue-700">
                      <p className="font-medium">Visa & Immigration Support</p>
                      <p>We provide comprehensive support for visa applications and immigration requirements.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Options */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="h2 mb-4">Payment Options</h2>
            <p className="p max-w-3xl mx-auto">
              Flexible payment options to make your aviation dreams accessible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {paymentOptions.map((option, index) => (
              <div key={index} className="card-hover text-center">
                <div className="p-6">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <option.icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="h3 mb-2">{option.name}</h3>
                  <div className="text-lg font-bold text-accent-600 mb-4">{option.discount}</div>
                  <p className="p-sm mb-6">{option.description}</p>

                  <ul className="space-y-2 mb-6 text-left">
                    {option.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-accent-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href="/enroll" className="btn-outline w-full">
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-sm bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="h2 mb-4">What's Included</h2>
            <p className="p max-w-3xl mx-auto">
              Clear breakdown of what's included in your training package and what additional costs you should expect.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <div className="p-6">
                <h3 className="h3 mb-4 text-green-700">✅ Included in Your Package</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">All flight instruction time</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Ground school and study materials</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Aircraft rental fees</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Checkride preparation</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Career guidance and mentoring</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="card">
              <div className="p-6">
                <h3 className="h3 mb-4 text-red-700">❌ Not Included</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0">•</div>
                    <span className="text-gray-700">FAA medical certificate</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0">•</div>
                    <span className="text-gray-700">FAA knowledge and practical test fees</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0">•</div>
                    <span className="text-gray-700">Personal equipment (headset, iPad, etc.)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0">•</div>
                    <span className="text-gray-700">Housing and living expenses</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0">•</div>
                    <span className="text-gray-700">Transportation to/from airport</span>
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
          <h2 className="h2 mb-6">Ready to Start Your Training?</h2>
          <p className="p text-xl mb-8 max-w-3xl mx-auto text-gray-100">
            Our pricing is transparent and competitive. Contact us today to discuss your goals
            and get a personalized quote for your training program.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/enroll" className="btn-primary text-lg px-8 py-4">
              Enroll Now
            </Link>
            <Link href="/contact" className="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-accent-900">
              Request Quote
            </Link>
          </div>
          <p className="text-sm text-gray-300 mt-6">
            Questions about pricing? Call us at (813) 555-1234
          </p>
        </div>
      </section>
    </>
  )
}