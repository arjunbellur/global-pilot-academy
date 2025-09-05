'use client';

import React, { useState } from 'react';
import { trackRequestInfo } from '@/utils/analytics';

interface LeadFormData {
  name: string;
  email: string;
  phone: string;
}

export default function MicroLeadForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState<LeadFormData>({
    name: '',
    email: '',
    phone: ''
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
        trackRequestInfo('hero_micro_form');
        setFormData({ name: '', email: '', phone: '' });
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
      <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
        Get Started Today
      </h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="micro-name" className="sr-only">
            Full Name
          </label>
          <input
            type="text"
            id="micro-name"
            name="name"
            required
            placeholder="Full Name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            aria-describedby="micro-name-error"
          />
        </div>

        <div>
          <label htmlFor="micro-email" className="sr-only">
            Email Address
          </label>
          <input
            type="email"
            id="micro-email"
            name="email"
            required
            placeholder="Email Address"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            aria-describedby="micro-email-error"
          />
        </div>

        <div>
          <label htmlFor="micro-phone" className="sr-only">
            Phone Number
          </label>
          <input
            type="tel"
            id="micro-phone"
            name="phone"
            required
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            aria-describedby="micro-phone-error"
          />
        </div>

        {/* Status Messages */}
        {submitStatus === 'success' && (
          <div className="p-3 bg-green-100 border border-green-400 text-green-700 rounded-md text-sm">
            Thank you! We'll contact you soon.
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded-md text-sm">
            Something went wrong. Please try again.
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn-primary py-3 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Submitting...' : 'Request Information'}
        </button>
      </form>
    </div>
  );
}
