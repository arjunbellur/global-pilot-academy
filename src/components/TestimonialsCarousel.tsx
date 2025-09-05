'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  name: string;
  quote: string;
  avatarSrc?: string;
}

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
  className?: string;
}

export default function TestimonialsCarousel({ testimonials, className = '' }: TestimonialsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance carousel
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    setIsAutoPlaying(false); // Stop auto-play when user interacts
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false); // Stop auto-play when user interacts
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false); // Stop auto-play when user interacts
  };

  const handleKeyDown = (e: React.KeyboardEvent, action: () => void) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      action();
    }
  };

  // Touch/swipe support
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextTestimonial();
    } else if (isRightSwipe) {
      prevTestimonial();
    }
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <section className={`py-8 ${className}`}>
      <div className="container-custom">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            What Our Students Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real students. Real experiences. Hear from our community of pilots and aviation professionals.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Carousel Container */}
          <div 
            className="relative bg-white rounded-lg shadow-lg p-6 md:p-8"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              onKeyDown={(e) => handleKeyDown(e, prevTestimonial)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>

            <button
              onClick={nextTestimonial}
              onKeyDown={(e) => handleKeyDown(e, nextTestimonial)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>

            {/* Testimonial Content */}
            <div className="text-center px-8">
              {/* Stars */}
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-lg md:text-xl text-gray-700 italic mb-6 leading-relaxed">
                "{testimonials[currentIndex].quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-center space-x-4">
                <div className="bg-primary-500 rounded-full w-12 h-12 flex-shrink-0 flex items-center justify-center text-white font-bold">
                  {testimonials[currentIndex].avatarSrc ? (
                    <img 
                      src={testimonials[currentIndex].avatarSrc} 
                      alt={testimonials[currentIndex].name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  ) : (
                    getInitials(testimonials[currentIndex].name)
                  )}
                </div>
                <div className="text-left">
                  <p className="font-semibold text-gray-900">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-sm text-gray-600">
                    Student Pilot
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                onKeyDown={(e) => handleKeyDown(e, () => goToTestimonial(index))}
                className={`w-3 h-3 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                  index === currentIndex 
                    ? 'bg-primary-600' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Auto-play Toggle */}
          <div className="text-center mt-4">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="text-sm text-gray-500 hover:text-gray-700 transition-colors duration-200"
              aria-label={isAutoPlaying ? 'Pause auto-play' : 'Resume auto-play'}
            >
              {isAutoPlaying ? 'Pause' : 'Resume'} auto-play
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
