'use client';

import React, { useEffect, useRef, useState } from 'react';

interface Metric {
  label: string;
  value: string;
}

interface MetricsBarProps {
  metrics: Metric[];
  className?: string;
}

export default function MetricsBar({ metrics, className = '' }: MetricsBarProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState<string[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (isVisible) {
      // Check for reduced motion preference
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      
      if (prefersReducedMotion) {
        // Show final values immediately
        setAnimatedValues(metrics.map(metric => metric.value));
      } else {
        // Animate count-up effect for numeric values
        const animateValues = () => {
          metrics.forEach((metric, index) => {
            const numericValue = metric.value.match(/\d+/);
            if (numericValue) {
              const targetValue = parseInt(numericValue[0]);
              const duration = 2000; // 2 seconds
              const steps = 60; // 60fps
              const increment = targetValue / steps;
              let currentValue = 0;

              const timer = setInterval(() => {
                currentValue += increment;
                if (currentValue >= targetValue) {
                  currentValue = targetValue;
                  clearInterval(timer);
                }
                
                setAnimatedValues(prev => {
                  const newValues = [...prev];
                  newValues[index] = metric.value.replace(/\d+/, Math.floor(currentValue).toString());
                  return newValues;
                });
              }, duration / steps);
            } else {
              // Non-numeric values show immediately
              setAnimatedValues(prev => {
                const newValues = [...prev];
                newValues[index] = metric.value;
                return newValues;
              });
            }
          });
        };

        // Small delay to ensure smooth animation
        setTimeout(animateValues, 100);
      }
    }
  }, [isVisible, metrics]);

  return (
    <section 
      ref={sectionRef}
      className={`py-8 bg-gray-50 ${className}`}
      aria-label="Key statistics"
    >
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <div 
              key={index}
              className="text-center"
              role="img"
              aria-label={`${metric.label}: ${metric.value}`}
            >
              <div className="text-2xl md:text-3xl font-bold text-primary-600 mb-2">
                {isVisible ? (animatedValues[index] || metric.value) : '0'}
              </div>
              <div className="text-sm text-gray-600 font-medium">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
