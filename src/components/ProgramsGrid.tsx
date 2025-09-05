import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface Program {
  slug: string;
  title: string;
  blurb: string;
  duration: string;
  price: string;
  href: string;
}

interface ProgramsGridProps {
  programs: Program[];
  className?: string;
}

export default function ProgramsGrid({ programs, className = '' }: ProgramsGridProps) {
  return (
    <section className={`py-8 ${className}`}>
      <div className="container-custom">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Flight Training Programs
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the program that fits your aviation goals and timeline.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program) => (
            <div 
              key={program.slug}
              className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 p-6 border border-gray-200"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {program.title}
              </h3>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {program.blurb}
              </p>

              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Duration:</span>
                  <span className="font-medium text-gray-900">{program.duration}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Starting at:</span>
                  <span className="font-semibold text-primary-600">{program.price}</span>
                </div>
              </div>

              <Link 
                href={program.href}
                className="btn-outline w-full text-center group"
                aria-label={`Learn more about ${program.title} program`}
              >
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link 
            href="/programs" 
            className="btn-primary"
            aria-label="View all flight training programs"
          >
            View All Programs
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
