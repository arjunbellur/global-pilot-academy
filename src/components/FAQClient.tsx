'use client'

import { useState, useCallback, useMemo } from 'react'
import { ChevronDown, ChevronUp, Search } from 'lucide-react'

const faqCategories = [
  'All',
  'Programs & Training',
  'Enrollment & Requirements',
  'Pricing & Payment',
  'Aircraft & Fleet',
  'International Students',
  'Student Life',
  'Career & Employment'
]

const faqs = [
  {
    id: 1,
    category: 'Programs & Training',
    question: 'What flight training programs do you offer?',
    answer: 'We offer comprehensive FAA Part 141 and Part 61 certified programs including Private Pilot License (PPL), Instrument Rating (IR), Commercial Pilot License (CPL), Certified Flight Instructor (CFI/CFII/MEI), and our flagship Airline Pilot Program (Zero-to-Hero).'
  },
  {
    id: 2,
    category: 'Programs & Training',
    question: 'How long does it take to become a commercial pilot?',
    answer: 'Our Airline Pilot Program takes 10-14 months of full-time training. This includes Private Pilot, Instrument Rating, Commercial Pilot, CFI, and Multi-Engine ratings. Individual timelines vary based on student progress and weather conditions.'
  },
  {
    id: 3,
    category: 'Programs & Training',
    question: 'Do you offer part-time training?',
    answer: 'Yes, we offer flexible scheduling for most programs. Part-time students typically complete their training in 12-18 months depending on their availability. We also offer accelerated full-time programs for faster completion.'
  },
  {
    id: 4,
    category: 'Enrollment & Requirements',
    question: 'What are the age requirements for flight training?',
    answer: 'Students must be 17 years old for Private Pilot training and 18 years old for Commercial Pilot programs. There is no upper age limit for flight training. Medical requirements include passing an FAA medical examination (Class 1, 2, or 3 depending on your goals).'
  },
  {
    id: 5,
    category: 'Enrollment & Requirements',
    question: 'What educational background do I need?',
    answer: 'You need a high school diploma or GED equivalent. No college degree is required for Private Pilot training. Commercial Pilot programs require completion of high school. International students need equivalent documentation.'
  },
  {
    id: 6,
    category: 'Enrollment & Requirements',
    question: 'Do I need to be a U.S. citizen?',
    answer: 'No, we accept international students. U.S. citizenship is not required for flight training in the United States. International students need appropriate visas and meet English proficiency requirements.'
  },
  {
    id: 7,
    category: 'Pricing & Payment',
    question: 'What is the cost of flight training?',
    answer: 'Our programs range from $8,500 for Instrument Rating to $63,500 for the complete Airline Pilot Program. All prices are transparent with no hidden fees. We offer payment plans, financing options, and accept international students with slightly adjusted pricing.'
  },
  {
    id: 8,
    category: 'Pricing & Payment',
    question: 'Do you offer financing or payment plans?',
    answer: 'Yes, we offer flexible payment options including payment plans with no interest, third-party financing through approved lenders, and full payment discounts. We work with several financing partners to make flight training accessible.'
  },
  {
    id: 9,
    category: 'Pricing & Payment',
    question: 'Are there any additional costs?',
    answer: 'Additional costs include FAA medical certificate ($150-300), FAA knowledge tests ($150-200 each), checkride fees ($500-800 each), and personal equipment (headset $200-1000, iPad/EFB $500-1500). These costs are not included in the base program price.'
  },
  {
    id: 10,
    category: 'Aircraft & Fleet',
    question: 'What aircraft do you use for training?',
    answer: 'Our fleet includes Cessna 152s and 172s for primary training, Piper Arrows for complex aircraft training, and Piper Senecas for multi-engine training. All aircraft are IFR certified with modern avionics including glass cockpits.'
  },
  {
    id: 11,
    category: 'Aircraft & Fleet',
    question: 'Are your aircraft safe and well-maintained?',
    answer: 'Safety is our top priority. All aircraft undergo rigorous FAA-mandated maintenance schedules and pre-flight inspections. Our maintenance facility is on-site with certified mechanics. We only fly in safe weather conditions.'
  },
  {
    id: 12,
    category: 'Aircraft & Fleet',
    question: 'Can I choose which aircraft I train in?',
    answer: 'Aircraft assignments are based on your training requirements and progress. Instructors select the most appropriate aircraft for each lesson. Advanced students may have input on aircraft selection as they progress through the program.'
  },
  {
    id: 13,
    category: 'International Students',
    question: 'What visa do I need for flight training?',
    answer: 'International students need an F-1 student visa for flight training in the United States. We provide comprehensive visa application assistance including SEVIS form completion and embassy interview preparation.'
  },
  {
    id: 14,
    category: 'International Students',
    question: 'Do you help with housing for international students?',
    answer: 'Yes, we provide housing coordination services for international students. We have partnerships with local housing providers and can help you find safe, affordable accommodations near the airport. Housing assistance includes airport shuttles and cultural orientation.'
  },
  {
    id: 15,
    category: 'International Students',
    question: 'What English proficiency is required?',
    answer: 'International students must demonstrate English proficiency through TOEFL or IELTS scores, or through other approved methods. Aviation English requirements are more stringent than general English proficiency. We offer English language support if needed.'
  },
  {
    id: 16,
    category: 'Student Life',
    question: 'Where is Global Pilot Academy located?',
    answer: 'We are located at Tampa Executive Airport (KVDF) in Tampa, Florida. The airport is easily accessible from Tampa International Airport and major highways. We offer free airport shuttles for students staying in our recommended housing.'
  },
  {
    id: 17,
    category: 'Student Life',
    question: 'What facilities are available at the academy?',
    answer: 'Our facilities include modern classrooms, flight planning rooms, briefing areas, and a student lounge. We have partnerships with local restaurants and provide access to aviation libraries, weather briefing stations, and study areas.'
  },
  {
    id: 18,
    category: 'Student Life',
    question: 'How do you support student success?',
    answer: 'We provide academic advising, career counseling, and mentorship programs. Our instructors are experienced pilots who provide real-world aviation insights. We also offer tutoring, study groups, and stress management resources.'
  },
  {
    id: 19,
    category: 'Career & Employment',
    question: 'What job placement assistance do you provide?',
    answer: 'We offer comprehensive career services including resume building, interview preparation, and networking opportunities. Our airline partnerships provide direct hiring pathways. We also provide mentorship and career counseling throughout your training.'
  },
  {
    id: 20,
    category: 'Career & Employment',
    question: 'Do you guarantee job placement?',
    answer: 'While we cannot guarantee employment, our graduates have excellent job placement rates. We maintain relationships with regional airlines, charter companies, and flight schools. Our career services department provides ongoing support for job searching and career advancement.'
  }
]

export default function FAQClient() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [expandedItems, setExpandedItems] = useState<number[]>([])

  const toggleItem = useCallback((id: number) => {
    setExpandedItems(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }, [])

  const filteredFaqs = useMemo(() => {
    return faqs.filter(faq => {
      const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [searchTerm, selectedCategory])

  return (
    <>
      {/* JSON-LD FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />

      {/* Search and Filter */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Search Bar */}
            <div className="relative mb-8">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 icon-md" />
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="form-input pl-10"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 mb-8">
              {faqCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`btn btn-sm ${
                    selectedCategory === category
                      ? 'btn-primary'
                      : 'btn-ghost'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Results Count */}
            <div className="text-center mb-8">
              <p className="text-body">
                Showing {filteredFaqs.length} of {faqs.length} FAQs
                {selectedCategory !== 'All' && ` in ${selectedCategory}`}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="section-sm bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-stack">
            {filteredFaqs.map((faq) => (
              <div key={faq.id} className="card">
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  aria-expanded={expandedItems.includes(faq.id)}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  <div className="flex-1">
                    <div className="flex items-center space-x-inline mb-2">
                      <span className="badge badge-primary">
                        {faq.category}
                      </span>
                    </div>
                    <h3 className="text-subheading">
                      {faq.question}
                    </h3>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    {expandedItems.includes(faq.id) ? (
                      <ChevronUp className="icon-lg text-gray-400" />
                    ) : (
                      <ChevronDown className="icon-lg text-gray-400" />
                    )}
                  </div>
                </button>

                {expandedItems.includes(faq.id) && (
                  <div id={`faq-answer-${faq.id}`} className="px-6 pb-6">
                    <div className="pt-4 border-t border-gray-200">
                      <p className="text-body">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {filteredFaqs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-body">No FAQs found matching your search.</p>
              <p className="text-caption mt-2">Try adjusting your search terms or category filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="section">
        <div className="container text-center">
          <h2 className="text-heading mb-4">Still Have Questions?</h2>
          <p className="text-body max-w-3xl mx-auto mb-8">
            Can't find the answer you're looking for? Our team is here to help with any questions about flight training.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="tel:+18135551234" className="btn btn-md btn-primary">
              Call Us: (813) 555-1234
            </a>
            <a href="mailto:info@gpapilot.com" className="btn btn-md btn-outline">
              Email Us
            </a>
          </div>
        </div>
      </section>
    </>
  )
}