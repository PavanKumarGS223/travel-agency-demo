import React from 'react';
import Link from 'next/link';
import { Compass, ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-stone-200/80 text-[#16382C]">
        <Compass className="h-8 w-8" />
      </div>

      <span className="mt-6 text-xs font-semibold uppercase tracking-wider text-[#16382C]">
        Route Off the Map · 404
      </span>

      <h1 className="mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
        We Couldn&apos;t Find That Departure
      </h1>

      <p className="mt-3 text-sm text-slate-600 leading-relaxed max-w-md">
        The expedition or destination page you are looking for may have been rescheduled, archived, or entered with an incorrect trail URL.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/"
          className="rounded-md border border-stone-300 bg-white px-4 py-2.5 text-xs font-semibold text-slate-700 hover:bg-stone-50 transition-colors"
        >
          Return to Homepage
        </Link>
        <Link
          href="/tours"
          className="inline-flex items-center gap-1.5 rounded-md bg-[#16382C] px-5 py-2.5 text-xs font-semibold text-white hover:bg-[#1f4a3b] transition-colors"
        >
          <span>Explore All Tours</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  );
}
