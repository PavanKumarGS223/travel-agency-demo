import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import { ToursCatalog } from '@/components/ToursCatalog';

export const metadata: Metadata = {
  title: 'All Tours & Expeditions | Wayfarer Tours & Travels',
  description: 'Browse our complete catalog of small-group mountain traverses, fjord sea kayaking, and cultural pilgrimages.',
};

export default function ToursPage() {
  return (
    <Suspense fallback={
      <div className="mx-auto max-w-7xl px-4 py-20 text-center">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-[#16382C] border-r-transparent" />
        <p className="mt-4 text-sm text-stone-500">Loading tour catalog...</p>
      </div>
    }>
      <ToursCatalog />
    </Suspense>
  );
}
