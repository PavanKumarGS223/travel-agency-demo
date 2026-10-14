import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import { TripPlannerForm } from '@/components/TripPlannerForm';

export const metadata: Metadata = {
  title: 'Plan Your Trip | Wayfarer Tours & Travels',
  description: 'Tell us about your ideal expedition. Receive a bespoke itinerary proposal and quote from our local specialists.',
};

export default function PlanYourTripPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#16382C]">
          Custom & Small-Group Inquiries
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mt-1">
          Plan Your Next Adventure
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
          Fill in your journey preferences below. Whether you want to join a scheduled departure or create a bespoke private route, our specialists will prepare a detailed proposal with zero booking obligation.
        </p>
      </div>

      <Suspense fallback={
        <div className="mx-auto max-w-md py-16 text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-[#16382C] border-r-transparent" />
          <p className="mt-3 text-xs text-stone-500">Loading trip planner...</p>
        </div>
      }>
        <TripPlannerForm />
      </Suspense>
    </div>
  );
}
