import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, AlertCircle } from 'lucide-react';
import { termsAndConditionsContent, policyNotice } from '@/lib/data/policies';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Wayfarer Tours & Travels',
  description: 'Booking conditions, deposit requirements, and traveller responsibilities.',
};

export default function TermsAndConditionsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#16382C] hover:underline mb-8"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        <span>Return to Homepage</span>
      </Link>

      <div className="mb-8">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#16382C]">
          Legal Documentation
        </span>
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 mt-1">
          {termsAndConditionsContent.title}
        </h1>
        <p className="text-xs text-stone-500 mt-1">
          Last revised: {termsAndConditionsContent.lastUpdated}
        </p>
      </div>

      {/* Draft Disclaimer Notice */}
      <div className="mb-8 flex items-start gap-3 rounded-lg border border-amber-300 bg-amber-50 p-4 text-xs text-amber-900">
        <AlertCircle className="h-4 w-4 shrink-0 text-amber-700 mt-0.5" />
        <p>{policyNotice}</p>
      </div>

      <div className="rounded-xl border border-stone-200 bg-white p-6 sm:p-10 shadow-xs space-y-8 text-sm leading-relaxed text-slate-700">
        {termsAndConditionsContent.sections.map((section, idx) => (
          <div key={idx} className="space-y-2">
            <h2 className="text-base font-bold text-slate-900">
              {section.title}
            </h2>
            <p className="text-slate-600 whitespace-pre-line leading-relaxed">
              {section.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
