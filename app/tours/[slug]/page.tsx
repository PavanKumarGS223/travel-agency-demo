import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  Calendar,
  Users,
  MapPin,
  Clock,
  ArrowRight,
  Check,
  X,
  ShieldCheck,
  Mountain,
  Compass,
  AlertCircle,
  ChevronDown
} from 'lucide-react';
import { toursData, Tour } from '@/lib/data/tours';
import { TourCard } from '@/components/TourCard';
import { FaqAccordion } from '@/components/FaqAccordion';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return toursData.map((tour) => ({
    slug: tour.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const tour = toursData.find((t) => t.slug === slug);
  if (!tour) return { title: 'Tour Not Found | Wayfarer' };

  return {
    title: `${tour.title} | Wayfarer Tours & Travels`,
    description: tour.overview,
  };
}

export default async function TourDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const tour = toursData.find((t) => t.slug === slug);

  if (!tour) {
    notFound();
  }

  // Related tours (same category or different destination)
  const relatedTours = toursData
    .filter((t) => t.id !== tour.id)
    .slice(0, 3);

  return (
    <div className="pb-24">
      {/* Hero Header with Destination Photography */}
      <section className="relative h-[55vh] min-h-[420px] w-full overflow-hidden bg-stone-900">
        <Image
          src={tour.heroImage}
          alt={tour.title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/95 via-[#0F172A]/50 to-transparent" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-4 pb-12 sm:px-6 lg:px-8">
          {/* Breadcrumb & Unboxed Metadata */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-stone-300 mb-3">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/tours" className="hover:text-white transition-colors">Tours</Link>
            <span aria-hidden="true">/</span>
            <span className="text-emerald-400 font-medium">{tour.country}</span>
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl max-w-4xl text-balance">
            {tour.title}
          </h1>

          {/* Key Facts Strip */}
          <div className="mt-6 flex flex-wrap items-center gap-4 sm:gap-8 text-xs sm:text-sm text-stone-200">
            <div className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4 text-emerald-400" />
              <span>{tour.durationLabel}</span>
            </div>
            <span aria-hidden="true" className="text-stone-500">·</span>
            <div className="flex items-center gap-1.5">
              <Users className="h-4 w-4 text-emerald-400" />
              <span>{tour.groupSizeLabel}</span>
            </div>
            <span aria-hidden="true" className="text-stone-500">·</span>
            <div className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-emerald-400" />
              <span>{tour.destination}</span>
            </div>
            <span aria-hidden="true" className="text-stone-500">·</span>
            <div className="flex items-center gap-1.5">
              <Mountain className="h-4 w-4 text-emerald-400" />
              <span>Difficulty: {tour.difficulty}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout with Sticky Enquiry Box */}
      <div className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Left Main Column: Overview, Itinerary, Inclusions, Travel Info (Col span 8) */}
          <div className="lg:col-span-8 space-y-14">
            {/* Overview */}
            <section>
              <h2 className="text-xs font-semibold uppercase tracking-wider text-[#16382C]">
                Trip Overview
              </h2>
              <p className="mt-3 text-lg leading-relaxed text-slate-800 font-normal">
                {tour.overview}
              </p>

              {/* Highlights List */}
              <div className="mt-8 rounded-xl border border-stone-200/90 bg-white p-6 sm:p-7 shadow-xs">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-4">
                  Expedition Highlights
                </h3>
                <ul className="space-y-3">
                  {tour.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-[#16382C] mt-0.5">
                        <Check className="h-3.5 w-3.5" />
                      </div>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Day by Day Itinerary */}
            <section>
              <div className="border-b border-stone-200 pb-4 mb-8">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#16382C]">
                  Day-by-Day Route
                </span>
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 mt-1">
                  Full Expedition Itinerary
                </h2>
              </div>

              <div className="space-y-6">
                {tour.itinerary.map((day) => (
                  <div
                    key={day.day}
                    className="rounded-xl border border-stone-200/90 bg-white p-6 transition-all hover:border-stone-300"
                  >
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="rounded bg-stone-100 px-2 py-0.5 text-xs font-bold text-stone-700 font-mono">
                        Day {day.day}
                      </span>
                      <h3 className="text-base font-bold text-slate-900">
                        {day.title}
                      </h3>
                    </div>

                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {day.description}
                    </p>

                    <div className="mt-4 pt-3 border-t border-stone-100 flex flex-wrap items-center gap-4 text-xs text-stone-500">
                      <div>
                        <strong className="text-slate-700 font-medium">Meals:</strong> {day.meals}
                      </div>
                      <span aria-hidden="true">·</span>
                      <div>
                        <strong className="text-slate-700 font-medium">Stay:</strong> {day.accommodation}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Inclusions & Exclusions */}
            <section>
              <div className="border-b border-stone-200 pb-4 mb-8">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#16382C]">
                  Transparency
                </span>
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 mt-1">
                  What is Included & Excluded
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {/* Inclusions */}
                <div className="rounded-xl border border-emerald-200/80 bg-emerald-50/40 p-6">
                  <h3 className="text-sm font-bold text-emerald-950 uppercase tracking-wider flex items-center gap-2 mb-4">
                    <Check className="h-4 w-4 text-emerald-700" />
                    <span>Included in Tour Price</span>
                  </h3>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                    {tour.inclusions.map((inc, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-emerald-700 font-bold shrink-0">✓</span>
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Exclusions */}
                <div className="rounded-xl border border-stone-200 bg-stone-50/70 p-6">
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2 mb-4">
                    <X className="h-4 w-4 text-stone-500" />
                    <span>Not Included</span>
                  </h3>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                    {tour.exclusions.map((exc, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-stone-400 font-bold shrink-0">✕</span>
                        <span>{exc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Essential Travel Information */}
            <section>
              <div className="border-b border-stone-200 pb-4 mb-8">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#16382C]">
                  Preparation
                </span>
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 mt-1">
                  Essential Trip Information
                </h2>
              </div>

              <div className="rounded-xl border border-stone-200 bg-white p-6 sm:p-8 space-y-6">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-1">
                    Fitness & Stamina Expectations
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {tour.travelInfo.fitnessLevel}
                  </p>
                </div>

                <div className="border-t border-stone-100 pt-5">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-1">
                    Mountain Climate & Seasonality
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {tour.travelInfo.weather}
                  </p>
                </div>

                <div className="border-t border-stone-100 pt-5">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
                    Key Packing Checklist
                  </h3>
                  <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2 text-xs text-slate-700">
                    {tour.travelInfo.packingEssentials.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#16382C]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-stone-100 pt-5">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-1">
                    Passports & Visas
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {tour.travelInfo.entryAndVisas}
                  </p>
                </div>
              </div>
            </section>

            {/* Tour-Specific FAQs */}
            {tour.faqs.length > 0 && (
              <section>
                <div className="border-b border-stone-200 pb-4 mb-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#16382C]">
                    Common Questions
                  </span>
                  <h2 className="text-2xl font-bold tracking-tight text-slate-900 mt-1">
                    Tour FAQs
                  </h2>
                </div>
                <div className="space-y-4">
                  {tour.faqs.map((faq, i) => (
                    <div key={i} className="rounded-lg border border-stone-200 bg-white p-5">
                      <h3 className="text-sm font-bold text-slate-900 mb-2">
                        {faq.question}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Right Column: Sticky Booking / Departure Dates & Enquiry Box (Col span 4) */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 space-y-6">
              {/* Departure Dates & Pricing Card */}
              <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
                <div>
                  <span className="text-2xs font-semibold uppercase tracking-wider text-stone-500">
                    Pricing Guidance
                  </span>
                  <div className="mt-1 flex items-baseline gap-1.5">
                    <span className="text-3xl font-extrabold tracking-tight text-slate-900 tabular-nums">
                      ${tour.priceFrom.toLocaleString()}
                    </span>
                    <span className="text-xs text-stone-500">/ person</span>
                  </div>
                  <p className="mt-1 text-2xs text-stone-500">
                    {tour.priceNote}
                  </p>
                </div>

                {/* Scheduled Departures */}
                <div className="mt-6 border-t border-stone-100 pt-5">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
                    Scheduled Small-Group Departures
                  </h3>

                  <div className="space-y-2.5">
                    {tour.departures.map((dep) => (
                      <div
                        key={dep.id}
                        className="flex items-center justify-between rounded-lg border border-stone-200 p-3 text-xs"
                      >
                        <div>
                          <div className="font-semibold text-slate-900">
                            {dep.startDate} – {dep.endDate}
                          </div>
                          <span
                            className={`inline-block mt-0.5 text-2xs font-medium ${
                              dep.status === 'Guaranteed'
                                ? 'text-emerald-700'
                                : dep.status === 'Limited Spots'
                                ? 'text-amber-700'
                                : 'text-stone-600'
                            }`}
                          >
                            ● {dep.status}
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="font-bold text-slate-900 tabular-nums">
                            ${dep.price.toLocaleString()}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Primary Enquiry CTA */}
                <div className="mt-6 space-y-3">
                  <Link
                    href={`/plan-your-trip?tour=${tour.slug}`}
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#16382C] py-3.5 px-4 text-center text-sm font-semibold text-white shadow-xs transition-colors hover:bg-[#1f4a3b]"
                  >
                    <span>Enquire on this Departure</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href={`/plan-your-trip?tour=${tour.slug}&style=bespoke-private`}
                    className="flex w-full items-center justify-center rounded-lg border border-stone-300 py-2.5 px-4 text-center text-xs font-semibold text-slate-700 hover:bg-stone-50 transition-colors"
                  >
                    Request Private Departure Dates
                  </Link>
                </div>

                {/* Zero Commitment Guarantee */}
                <div className="mt-6 border-t border-stone-100 pt-4 flex items-start gap-2.5 text-2xs text-stone-500">
                  <ShieldCheck className="h-4 w-4 text-[#16382C] shrink-0 mt-0.5" />
                  <span>
                    Submitting an enquiry carries no obligation or instant charge. A travel specialist will confirm permit availability and review questions before any deposit is requested.
                  </span>
                </div>
              </div>

              {/* Direct Help Callout */}
              <div className="rounded-xl border border-stone-200/90 bg-[#FAF9F5] p-5 text-xs text-slate-600">
                <h4 className="font-bold text-slate-900 mb-1">Have a specific question about this route?</h4>
                <p className="leading-relaxed mb-3">
                  Our regional leaders can advise on gear, route suitability, or custom connections.
                </p>
                <Link
                  href="/contact"
                  className="font-semibold text-[#16382C] hover:underline"
                >
                  Contact our expedition desk ↗
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Expeditions Section */}
      <section className="mt-20 border-t border-stone-200 bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#16382C]">
                Explore More
              </span>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 mt-1">
                Other Departures You Might Like
              </h2>
            </div>
            <Link
              href="/tours"
              className="text-sm font-semibold text-[#16382C] hover:underline"
            >
              Browse all tours ↗
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {relatedTours.map((relTour) => (
              <TourCard key={relTour.id} tour={relTour} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
