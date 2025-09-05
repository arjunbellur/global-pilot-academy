'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  className?: string;
}

export default function Accordion({ items, allowMultiple = false, className = '' }: AccordionProps) {
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

  return (
    <div className={`space-y-2 ${className}`}>
      {items.map((item) => {
        const isOpen = openItems.includes(item.id);
        
        return (
          <div key={item.id} className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full px-4 py-3 text-left bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-inset transition-colors duration-200"
              aria-expanded={isOpen}
              aria-controls={`accordion-content-${item.id}`}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-gray-900">{item.title}</h3>
                {isOpen ? (
                  <ChevronUp className="w-4 h-4 text-gray-500" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-gray-500" />
                )}
              </div>
            </button>
            
            {isOpen && (
              <div
                id={`accordion-content-${item.id}`}
                className="px-4 py-3 bg-gray-50 border-t border-gray-200"
                role="region"
                aria-labelledby={`accordion-header-${item.id}`}
              >
                <div className="text-sm text-gray-700">
                  {item.content}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
