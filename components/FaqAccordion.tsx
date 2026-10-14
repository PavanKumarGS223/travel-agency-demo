'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FaqItem } from '@/lib/data/faqs';

interface FaqAccordionProps {
  items: FaqItem[];
  defaultOpenIndex?: number;
}

export function FaqAccordion({ items, defaultOpenIndex }: FaqAccordionProps) {
  const [openIds, setOpenIds] = useState<string[]>(
    defaultOpenIndex !== undefined && items[defaultOpenIndex] ? [items[defaultOpenIndex].id] : []
  );

  const toggle = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="divide-y divide-stone-200 border-y border-stone-200">
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        return (
          <div key={item.id} className="py-4">
            <button
              type="button"
              onClick={() => toggle(item.id)}
              aria-expanded={isOpen}
              className="flex w-full items-start justify-between gap-4 text-left group focus:outline-hidden"
            >
              <span className="text-base font-semibold text-slate-900 group-hover:text-[#16382C] transition-colors">
                {item.question}
              </span>
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-stone-100 text-slate-600 transition-transform duration-200 group-hover:bg-stone-200">
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-[#16382C]' : ''
                  }`}
                />
              </span>
            </button>
            {isOpen && (
              <div className="mt-3 pr-8 text-sm leading-relaxed text-slate-600">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
