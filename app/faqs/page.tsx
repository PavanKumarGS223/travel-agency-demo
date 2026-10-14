import React from 'react';
import type { Metadata } from 'next';
import { FaqPageClient } from '@/components/FaqPageClient';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Wayfarer Tours & Travels',
  description: 'Everything you need to know about our small-group departures, bespoke itineraries, payments, and mountain preparations.',
};

export default function FaqsPage() {
  return <FaqPageClient />;
}
