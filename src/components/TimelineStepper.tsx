'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface TimelineStep {
  id: string;
  title: string;
  time: string;
  description: string;
  details: string[];
}

interface TimelineStepperProps {
  steps: TimelineStep[];
  className?: string;
}

export default function TimelineStepper({ steps, className = '' }: TimelineStepperProps) {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % steps.length);
  };

  const prevStep = () => {
    setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length);
  };

  const goToStep = (index: number) => {
    setCurrentStep(index);
  };

  const handleKeyDown = (e: React.KeyboardEvent, action: () => void) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      action();
    }
  };

  return (
    <section className={`py-8 bg-gray-50 ${className}`}>
      <div className="container-custom">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            A Typical Training Day
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See what your day looks like as a student pilot at Global Pilot Academy.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Step Navigation */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-2">
              <button
                onClick={prevStep}
                onKeyDown={(e) => handleKeyDown(e, prevStep)}
                className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
                aria-label="Previous step"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>

              <div className="flex space-x-2">
                {steps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToStep(index)}
                    onKeyDown={(e) => handleKeyDown(e, () => goToStep(index))}
                    className={`w-3 h-3 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                      index === currentStep 
                        ? 'bg-primary-600' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to step ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextStep}
                onKeyDown={(e) => handleKeyDown(e, nextStep)}
                className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
                aria-label="Next step"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Current Step Content */}
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
            <div className="text-center mb-6">
              <div className="inline-block bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium mb-3">
                Step {currentStep + 1} of {steps.length}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                {steps[currentStep].title}
              </h3>
              <p className="text-primary-600 font-medium">
                {steps[currentStep].time}
              </p>
            </div>

            <p className="text-gray-600 mb-6 text-center max-w-2xl mx-auto">
              {steps[currentStep].description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {steps[currentStep].details.map((detail, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                  <p className="text-sm text-gray-600">{detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="flex justify-between mt-6 md:hidden">
            <button
              onClick={prevStep}
              className="btn-outline"
              aria-label="Previous step"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Previous
            </button>
            <button
              onClick={nextStep}
              className="btn-primary"
              aria-label="Next step"
            >
              Next
              <ChevronRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
