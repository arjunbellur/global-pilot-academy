'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, X } from 'lucide-react';
import { trackFinancingCTA } from '@/utils/analytics';

export default function FinancingStrip() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFinancingClick = () => {
    trackFinancingCTA('home_financing_strip');
    setIsModalOpen(true);
  };

  const financingSteps = [
    {
      step: 1,
      title: "Check Your Eligibility",
      description: "Quick pre-qualification takes just 2 minutes"
    },
    {
      step: 2,
      title: "Choose Your Program",
      description: "Select the training path that fits your goals"
    },
    {
      step: 3,
      title: "Get Approved",
      description: "Receive funding decision within 24-48 hours"
    },
    {
      step: 4,
      title: "Start Training",
      description: "Begin your aviation journey immediately"
    }
  ];

  return (
    <>
      <section className="py-8 bg-gradient-to-r from-primary-600 to-accent-600 text-white">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Financing Available
            </h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Don't let cost hold you back from your aviation dreams. 
              We work with multiple lenders to make flight training accessible.
            </p>

            {/* Partner Logos Placeholder */}
            <div className="flex justify-center items-center space-x-8 mb-6 opacity-80">
              <div className="bg-white bg-opacity-20 rounded-lg px-4 py-2 text-sm font-medium">
                TBD_Lender_1
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg px-4 py-2 text-sm font-medium">
                TBD_Lender_2
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg px-4 py-2 text-sm font-medium">
                TBD_Lender_3
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleFinancingClick}
                className="btn-accent bg-white text-primary-600 hover:bg-gray-100"
                aria-label="Learn about financing options"
              >
                Check Your Options
                <ArrowRight className="w-4 h-4" />
              </button>
              <Link 
                href="/financing"
                className="btn-outline border-white text-white hover:bg-white hover:text-primary-600"
                aria-label="View detailed financing information"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Financing Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div 
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={() => setIsModalOpen(false)}
            aria-hidden="true"
          />
          
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900">
                  How Financing Works
                </h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6">
                <div className="space-y-6">
                  {financingSteps.map((step) => (
                    <div key={step.step} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                        {step.step}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {step.title}
                        </h4>
                        <p className="text-gray-600">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link 
                      href="/financing"
                      className="btn-primary flex-1 text-center"
                      onClick={() => setIsModalOpen(false)}
                    >
                      View Full Details
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <button
                      onClick={() => setIsModalOpen(false)}
                      className="btn-outline flex-1"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
