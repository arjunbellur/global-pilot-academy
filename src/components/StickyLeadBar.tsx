'use client';

import React, { useState } from 'react';
import { Phone, X, ChevronUp } from 'lucide-react';
import { trackRequestInfo } from '@/utils/analytics';

interface LeadFormData {
  name: string;
  email: string;
  phone: string;
  interest: string;
}

export default function StickyLeadBar() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState<LeadFormData>({
    name: '',
    email: '',
    phone: '',
    interest: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        trackRequestInfo('sticky_lead_bar');
        setFormData({ name: '', email: '', phone: '', interest: '' });
        setTimeout(() => setIsFormOpen(false), 2000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Lead submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <>
      {/* Sticky Lead Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:top-0 lg:bottom-auto">
        <div className="bg-primary-600 text-white shadow-lg">
          <div className="container-custom">
            <div className="flex items-center justify-between py-3">
              {/* Phone Number */}
              <a 
                href="tel:+18136004052" 
                className="flex items-center space-x-2 hover:text-accent-300 transition-colors duration-300"
                aria-label="Call Global Pilot Academy"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm font-medium">(813) 600-4052</span>
              </a>

              {/* CTA Button */}
              <button
                onClick={() => setIsFormOpen(true)}
                className="btn-accent text-sm px-4 py-2"
                aria-label="Request information about flight training"
              >
                Request Info
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Slide-over Form */}
      {isFormOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={() => setIsFormOpen(false)}
            aria-hidden="true"
          />
          
          {/* Form Panel */}
          <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Request Information</h2>
              <button
                onClick={() => setIsFormOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                aria-label="Close form"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-4 space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  aria-describedby="name-error"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  aria-describedby="email-error"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  aria-describedby="phone-error"
                />
              </div>

              <div>
                <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1">
                  Program Interest
                </label>
                <select
                  id="interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="">Select a program</option>
                  <option value="private-pilot">Private Pilot</option>
                  <option value="commercial-pilot">Commercial Pilot</option>
                  <option value="cfi">Certified Flight Instructor</option>
                  <option value="instrument-rating">Instrument Rating</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="p-3 bg-green-100 border border-green-400 text-green-700 rounded-md">
                  Thank you! We'll contact you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded-md">
                  Something went wrong. Please try again.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary py-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Request'}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
