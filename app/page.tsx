import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Compass, Shield, Users, Mountain, Sparkles, CheckCircle2 } from 'lucide-react';
import { toursData } from '@/lib/data/tours';
import { faqsData } from '@/lib/data/faqs';
import { TourCard } from '@/components/TourCard';
import { HeroSearch } from '@/components/HeroSearch';
import { FaqAccordion } from '@/components/FaqAccordion';

export default function HomePage() {
  const featuredTours = toursData.slice(0, 3);
  const previewFaqs = faqsData.slice(0, 4);

  const destinationHighlights = [
    {
      name: "High Atlas Mountains",
      country: "Morocco",
      tag: "Alpine & Cultural",
      image: "/images/morocco.jpg",
      href: "/tours?destination=Morocco",
      description: "Terraced Berber valleys and Toubkal's 4,167m peak.",
    },
    {
      name: "Italian Dolomites",
      country: "Italy",
      tag: "UNESCO Limestone Peaks",
      image: "/images/dolomites.jpg",
      href: "/tours?destination=Italy",
      description: "High rifugio traverses and pale limestone towers.",
    },
    {
      name: "Western Fjords",
      country: "Norway",
      tag: "Glacial Sea Kayaking",
      image: "/images/norway.jpg",
      href: "/tours?destination=Norway",
      description: "Deep glacial waters, cliffside farms, and fjord saunas.",
    },
    {
      name: "Patagonia Wilderness",
      country: "Chile",
      tag: "Ice Hike & W-Trek",
      image: "/images/patagonia.jpg",
      href: "/tours?destination=Chile",
      description: "Granite spires of Torres del Paine and Grey Glacier ice hike.",
    },
  ];

  return (
    <div className="flex flex-col space-y-20 sm:space-y-28 pb-20">
      {/* 2. Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-24 sm:pt-20 sm:pb-32">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.jpg"
            alt="Hikers atop alpine mountain ridge at sunrise"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
            referrerPolicy="no-referrer"
          />
          {/* Measured gradient scrim for legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/50 to-[#0F172A]/30" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-stone-200 backdrop-blur-xs mb-6">
            <span>Guaranteed Small-Group Departures</span>
            <span aria-hidden="true">·</span>
            <span>Max 12 Travellers</span>
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl text-balance">
            Exceptional Journeys in Wild and Untamed Places
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base text-stone-200 sm:text-lg leading-relaxed">
            Led by verified local mountain leaders, our small-group departures and bespoke tailor-made itineraries unlock the world&apos;s most inspiring trails without the hassle of commercial group tours.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/tours"
              className="inline-flex items-center gap-2 rounded-lg bg-[#16382C] px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-[#1f4a3b]"
            >
              <span>Explore All Tours</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/plan-your-trip"
              className="inline-flex items-center gap-2 rounded-lg border border-white/40 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-xs transition-colors hover:bg-white/20"
            >
              <span>Plan a Custom Journey</span>
            </Link>
          </div>

          {/* 3. Compact Search & Discovery Bar */}
          <div className="mt-12 sm:mt-16">
            <HeroSearch />
          </div>
        </div>
      </section>

      {/* 4. Featured Tours Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#16382C]">
              Curated Departures
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mt-1">
              Featured Small-Group Expeditions
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Hand-picked journeys with verified routes, local mountain huts, and guaranteed departure dates.
            </p>
          </div>
          <Link
            href="/tours"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#16382C] hover:text-[#1f4a3b] hover:underline shrink-0"
          >
            <span>View all 6 departures</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredTours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      </section>

      {/* 5. Short "Why Travel With Us?" Section */}
      <section className="border-y border-stone-200/80 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#16382C]">
              The Wayfarer Standard
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mt-1 text-balance">
              Why Travellers Choose Our Expeditions
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              We design purposeful itineraries built around respect for local environments and authentic wilderness discovery.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Reason 1 */}
            <div className="rounded-xl border border-stone-200/90 bg-[#FAF9F5] p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#16382C] text-white mb-4">
                <Users className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Strict Small Groups (Max 12)
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                No 40-person tour buses. We travel in agile, intimate cohorts to stay in family-run gîtes, access remote valleys, and leave light footprints.
              </p>
            </div>

            {/* Reason 2 */}
            <div className="rounded-xl border border-stone-200/90 bg-[#FAF9F5] p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#16382C] text-white mb-4">
                <Mountain className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Verified Local Mountain Guides
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Led by UIAGM/IFMGA certified guides and wilderness first responders who live in the mountains they lead you through.
              </p>
            </div>

            {/* Reason 3 */}
            <div className="rounded-xl border border-stone-200/90 bg-[#FAF9F5] p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#16382C] text-white mb-4">
                <Shield className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Guaranteed Departures
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Once confirmed, our scheduled departures are guaranteed to run. We do not cancel trips at the eleventh hour due to commercial margins.
              </p>
            </div>

            {/* Reason 4 */}
            <div className="rounded-xl border border-stone-200/90 bg-[#FAF9F5] p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#16382C] text-white mb-4">
                <Sparkles className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Transparent All-Inclusive Value
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Refuges, park permits, pack mules, hot trail meals, and emergency protocols are clearly detailed up front with no hidden local fees.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Simple 3-Step Enquiry & Booking Process */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#16382C]">
            How It Works
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mt-1">
            Three Steps to the Trailhead
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            No convoluted checkout forms or instant card charges. We coordinate each trip directly with you.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Step 1 */}
          <div className="relative rounded-xl border border-stone-200 bg-white p-7">
            <span className="text-3xl font-bold text-[#16382C]/20 block mb-2 font-mono">
              01
            </span>
            <h3 className="text-lg font-bold text-slate-900">
              Discover & Enquire
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-600">
              Select an existing small-group itinerary or tell us your dream destination through our quick trip planner. No booking fee or payment is required to enquire.
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative rounded-xl border border-stone-200 bg-white p-7">
            <span className="text-3xl font-bold text-[#16382C]/20 block mb-2 font-mono">
              02
            </span>
            <h3 className="text-lg font-bold text-slate-900">
              Specialist Consultation
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-600">
              A regional specialist reviews your fitness background, dates, and preferences. Within 24 hours, you receive a detailed briefing and transparent quotation.
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative rounded-xl border border-stone-200 bg-white p-7">
            <span className="text-3xl font-bold text-[#16382C]/20 block mb-2 font-mono">
              03
            </span>
            <h3 className="text-lg font-bold text-slate-900">
              Lock Dates & Pack
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-600">
              Approve your itinerary, secure permits with a 20% flexible deposit, and receive our complete packing list and pre-trip preparation guide.
            </p>
          </div>
        </div>
      </section>

      {/* 7. Destination Highlights Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#16382C]">
            Regions & Terrains
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mt-1">
            Featured Expedition Terrains
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {destinationHighlights.map((dest) => (
            <Link
              key={dest.name}
              href={dest.href}
              className="group relative flex aspect-4/3 flex-col justify-end overflow-hidden rounded-xl bg-stone-900 p-5 transition-all hover:shadow-lg"
            >
              <Image
                src={dest.image}
                alt={dest.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-80"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
              <div className="relative z-10 text-white">
                <span className="text-2xs font-medium uppercase tracking-wider text-stone-300">
                  {dest.tag}
                </span>
                <h3 className="text-base font-bold text-white mt-0.5 group-hover:text-emerald-300 transition-colors">
                  {dest.name}
                </h3>
                <p className="text-xs text-stone-300 mt-1 line-clamp-1">
                  {dest.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 8. Genuine / Demonstration Traveller Voices */}
      <section className="border-y border-stone-200/80 bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#16382C]">
                Guest Experiences
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mt-1">
                Demonstration Traveller Feedback
              </h2>
            </div>
            <span className="text-xs text-stone-500 border border-stone-200 rounded px-2.5 py-1">
              Demonstration Content — Real reviews to be added upon launch
            </span>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Feedback 1 */}
            <div className="rounded-xl border border-stone-200/90 bg-[#FAF9F5] p-6">
              <p className="text-xs italic text-slate-700 leading-relaxed">
                &ldquo;Summiting Toubkal at dawn with Omar our Berber guide was one of the most rewarding mountain days of my life. The small group format meant we moved at a natural pace without feeling rushed.&rdquo;
              </p>
              <div className="mt-4 pt-4 border-t border-stone-200 flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-900">Sarah & Mark T.</span>
                <span className="text-stone-500">High Atlas Trek</span>
              </div>
            </div>

            {/* Feedback 2 */}
            <div className="rounded-xl border border-stone-200/90 bg-[#FAF9F5] p-6">
              <p className="text-xs italic text-slate-700 leading-relaxed">
                &ldquo;Paddling the Nærøyfjord and staying in the restored cliff farm was pure magic. The food cooked by our guide over campfire was restaurant-quality. Outstanding logistics.&rdquo;
              </p>
              <div className="mt-4 pt-4 border-t border-stone-200 flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-900">Julian D.</span>
                <span className="text-stone-500">Norway Fjords</span>
              </div>
            </div>

            {/* Feedback 3 */}
            <div className="rounded-xl border border-stone-200/90 bg-[#FAF9F5] p-6">
              <p className="text-xs italic text-slate-700 leading-relaxed">
                &ldquo;Walking the Kumano Kodo was sublime. Every night in a traditional onsen ryokan with our bags waiting for us made a demanding trail feel wonderfully restorative.&rdquo;
              </p>
              <div className="mt-4 pt-4 border-t border-stone-200 flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-900">Dr. Rachel K.</span>
                <span className="text-stone-500">Japan Pilgrimage</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Concise FAQ Preview */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#16382C]">
            Common Inquiries
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mt-1">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Answers to common questions about group sizes, bespoke dates, and booking security.
          </p>
        </div>

        <FaqAccordion items={previewFaqs} defaultOpenIndex={0} />

        <div className="mt-8 text-center">
          <Link
            href="/faqs"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#16382C] hover:text-[#1f4a3b] hover:underline"
          >
            <span>View all questions and answers</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* 10. Final Plan Your Trip CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-[#16382C] px-6 py-14 text-center text-white sm:px-12 sm:py-16 shadow-xl">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white text-balance">
              Ready to Plan Your Next Wilderness Departure?
            </h2>
            <p className="mt-4 text-sm sm:text-base text-stone-200 leading-relaxed">
              Tell us your preferred destination or dates. Our regional specialists will formulate a comprehensive itinerary and transparent quotation with zero booking obligation.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/plan-your-trip"
                className="inline-flex items-center gap-2 rounded-lg bg-[#FAF9F5] px-6 py-3.5 text-sm font-semibold text-[#16382C] shadow-md transition-colors hover:bg-white"
              >
                <span>Plan Your Trip</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/20"
              >
                <span>Speak to a Specialist</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
