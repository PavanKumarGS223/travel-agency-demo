'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, HelpCircle } from 'lucide-react';
import { faqsData, FaqItem } from '@/lib/data/faqs';
import { FaqAccordion } from '@/components/FaqAccordion';

export function FaqPageClient() {
  const categories: FaqItem['category'][] = [
    'Tour Packages',
    'Enquiries & Quotes',
    'Payments & Booking',
    'Travel Prep & Gear',
    'Changes & Cancellations',
  ];

  const [activeCategory, setActiveCategory] = useState<FaqItem['category']>('Tour Packages');

  const filteredFaqs = faqsData.filter((f) => f.category === activeCategory);

  return (
    <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#16382C]">
          Knowledge Base & Support
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mt-1">
          Frequently Asked Questions
        </h1>
        <p className="mt-3 text-sm text-slate-600 leading-relaxed">
          Transparent answers about our small-group format, booking procedures, gear checklists, and flexible deposit protections.
        </p>

        {/* Demo Disclaimer */}
        <div className="mt-4 rounded border border-stone-200 bg-stone-50 p-2.5 text-2xs text-stone-500">
          Editable draft guidelines. Official policies will be finalized in consultation with the business owner.
        </div>
      </div>

      {/* Interactive Category Segmented Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {categories.map((cat) => {
          const isActive = cat === activeCategory;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`rounded-lg px-3.5 py-2 text-xs font-semibold transition-colors ${
                isActive
                  ? 'bg-[#16382C] text-white shadow-xs'
                  : 'bg-white border border-stone-200 text-slate-700 hover:bg-stone-50'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Accordion Block */}
      <div className="rounded-xl border border-stone-200/90 bg-white p-6 sm:p-8 shadow-xs">
        <div className="mb-4">
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900">
            {activeCategory}
          </h2>
        </div>
        <FaqAccordion items={filteredFaqs} defaultOpenIndex={0} />
      </div>

      {/* Still Have Questions CTA */}
      <div className="mt-12 rounded-xl border border-stone-200 bg-stone-50 p-8 text-center">
        <h3 className="text-base font-bold text-slate-900">
          Have a question that isn&apos;t covered here?
        </h3>
        <p className="mt-1 text-xs text-slate-600">
          Our route coordinators are ready to help with personalized advice for your party.
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 rounded-md bg-[#16382C] px-4 py-2 text-xs font-semibold text-white hover:bg-[#1f4a3b]"
          >
            <span>Contact Our Team</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
          <Link
            href="/plan-your-trip"
            className="inline-flex items-center rounded-md border border-stone-300 px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-white"
          >
            Plan Your Journey
          </Link>
        </div>
      </div>
    </div>
  );
}
