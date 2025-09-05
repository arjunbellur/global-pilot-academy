'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQItem[];
  allowMultiple?: boolean;
  className?: string;
}

export default function FAQAccordion({ faqs, allowMultiple = false, className = '' }: FAQAccordionProps) {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (itemId: string) => {
    setOpenItems(prev => {
      if (allowMultiple) {
        return prev.includes(itemId) 
          ? prev.filter(id => id !== itemId)
          : [...prev, itemId];
      } else {
        return prev.includes(itemId) ? [] : [itemId];
      }
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent, itemId: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleItem(itemId);
    }
  };

  return (
    <section className={`py-8 ${className}`}>
      <div className="container-custom">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get answers to common questions about flight training at Global Pilot Academy.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <dl className="space-y-4">
            {faqs.map((faq) => {
              const isOpen = openItems.includes(faq.id);
              
              return (
                <div key={faq.id} className="bg-white rounded-lg shadow-sm border border-gray-200">
                  <dt>
                    <button
                      onClick={() => toggleItem(faq.id)}
                      onKeyDown={(e) => handleKeyDown(e, faq.id)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-inset rounded-lg transition-colors duration-200"
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${faq.id}`}
                    >
                      <span className="font-semibold text-gray-900 pr-4">
                        {faq.question}
                      </span>
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-primary-600 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                      )}
                    </button>
                  </dt>
                  <dd>
                    <div
                      id={`faq-answer-${faq.id}`}
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="px-6 pb-4">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600 mb-4">
            Still have questions? We're here to help.
          </p>
          <a 
            href="/contact" 
            className="btn-primary"
            aria-label="Contact us for more information"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
