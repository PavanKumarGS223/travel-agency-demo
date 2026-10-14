'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar, Users, MapPin } from 'lucide-react';
import { Tour } from '@/lib/data/tours';

interface TourCardProps {
  tour: Tour;
}

export function TourCard({ tour }: TourCardProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="group flex flex-col overflow-hidden rounded-xl border border-stone-200/90 bg-white transition-all duration-300 hover:border-stone-300 hover:shadow-md">
      {/* 4:3 Aspect Ratio Photography Slot */}
      <Link href={`/tours/${tour.slug}`} className="relative aspect-4/3 w-full overflow-hidden bg-stone-100">
        {!imgError ? (
          <Image
            src={tour.heroImage}
            alt={tour.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            onError={() => setImgError(true)}
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-stone-100 p-6 text-center text-stone-500">
            <span className="text-sm font-medium">{tour.destination}</span>
          </div>
        )}

        {/* Clean subtle category indicator (quiet contrast, no candy pill) */}
        <div className="absolute top-3 left-3 bg-stone-900/80 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-xs rounded-sm">
          {tour.category}
        </div>
      </Link>

      {/* Card Content Body */}
      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          {/* Zero-Pill Unboxed Metadata with Typographic Separators */}
          <div className="flex flex-wrap items-center gap-1.5 text-xs text-stone-600 mb-2">
            <span className="inline-flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5 text-stone-400" />
              {tour.durationLabel}
            </span>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <span className="inline-flex items-center gap-1">
              <Users className="h-3.5 w-3.5 text-stone-400" />
              {tour.groupSizeLabel}
            </span>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <span className="inline-flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5 text-stone-400" />
              {tour.country}
            </span>
          </div>

          {/* Tour Title */}
          <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#16382C] transition-colors leading-snug">
            <Link href={`/tours/${tour.slug}`}>
              {tour.title}
            </Link>
          </h3>

          {/* Short description */}
          <p className="mt-2 text-sm leading-relaxed text-slate-600 line-clamp-2">
            {tour.overview}
          </p>
        </div>

        {/* Pricing & Actions */}
        <div className="mt-6 pt-4 border-t border-stone-100 flex items-end justify-between gap-4">
          <div>
            <span className="block text-xs text-stone-500 uppercase tracking-wider">
              From (Demo rate)
            </span>
            <div className="flex items-baseline gap-1">
              <span className="text-xl font-bold tracking-tight text-slate-900 tabular-nums">
                ${tour.priceFrom.toLocaleString()}
              </span>
              <span className="text-xs text-stone-500">/ person</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Link
              href={`/tours/${tour.slug}`}
              className="inline-flex items-center justify-center rounded-md border border-stone-300 px-3 py-1.5 text-xs font-semibold text-slate-700 transition-colors hover:bg-stone-50 hover:text-slate-900"
            >
              View Tour
            </Link>
            <Link
              href={`/plan-your-trip?tour=${tour.slug}`}
              className="inline-flex items-center justify-center rounded-md bg-[#16382C] px-3.5 py-1.5 text-xs font-semibold text-white shadow-xs transition-colors hover:bg-[#1f4a3b]"
            >
              Enquire
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
