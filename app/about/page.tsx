import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Compass, ShieldCheck, HeartHandshake, Mountain, Footprints } from 'lucide-react';
import { businessConfig } from '@/lib/data/config';

export const metadata: Metadata = {
  title: 'About Us | Wayfarer Tours & Travels',
  description: 'Learn about our travel philosophy, small-group wilderness ethics, and local partnership model.',
};

export default function AboutPage() {
  return (
    <div className="pb-20 space-y-16 sm:space-y-24">
      {/* Editorial Header */}
      <section className="mx-auto max-w-4xl px-4 pt-14 text-center sm:px-6 lg:px-8">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#16382C]">
          Our Story & Approach
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mt-2 text-balance">
          Travel Designed for the Curious, Agile, and Respectful
        </h1>
        <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-600 max-w-2xl mx-auto">
          Wayfarer is an independent travel consultancy dedicated to small-group departures and bespoke wilderness journeys. We connect discerning travelers with the planet&apos;s wildest landscapes alongside verified local mountain leaders.
        </p>

        {/* Demo Notice Callout */}
        <div className="mt-8 rounded-lg border border-amber-200 bg-amber-50/70 p-4 text-xs text-amber-900 max-w-xl mx-auto">
          <strong className="font-semibold">Demonstration Profile Notice:</strong> Company credentials, founding story, and team bios presented here represent demonstration copy and can be customized in the central configuration file.
        </div>
      </section>

      {/* Philosophy Split */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6 relative aspect-4/3 w-full overflow-hidden rounded-2xl bg-stone-100 shadow-md">
            <Image
              src="/images/hero.jpg"
              alt="Two travelers on mountain crest"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Why We Keep Groups Small (Max 12)
            </h2>
            <p className="text-sm leading-relaxed text-slate-600">
              Large tourist coaches dictate where you can eat, where you sleep, and how long you can pause at a mountain pass. By capping our guided journeys at 8 to 12 guests, we preserve spontaneity and respect the communities we visit.
            </p>
            <p className="text-sm leading-relaxed text-slate-600">
              A 10-person party can dine at a family table in a Berber gîte, stay in high-altitude rifugi perched on sheer cliffs, and tread quietly along fragile alpine trails without trampling local ecosystems.
            </p>

            <div className="pt-2">
              <Link
                href="/tours"
                className="inline-flex items-center gap-2 rounded-lg bg-[#16382C] px-5 py-2.5 text-xs font-semibold text-white hover:bg-[#1f4a3b] transition-colors"
              >
                <span>View Small-Group Departures</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Values & Principles */}
      <section className="border-y border-stone-200/80 bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#16382C]">
              Guiding Principles
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mt-1">
              Our Core Operational Values
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Principle 1 */}
            <div className="rounded-xl border border-stone-200/90 bg-[#FAF9F5] p-7">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#16382C] text-white mb-4">
                <HeartHandshake className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Direct Local Partnership
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                We work directly with certified resident mountain guides, muleteers, and local family lodgings, ensuring that tourism revenue directly benefits the mountain communities hosting us.
              </p>
            </div>

            {/* Principle 2 */}
            <div className="rounded-xl border border-stone-200/90 bg-[#FAF9F5] p-7">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#16382C] text-white mb-4">
                <Footprints className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Leave-No-Trace Wilderness Ethics
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                From banning single-use trail plastics to supporting alpine refuge waste management initiatives, we protect the wild corridors that make our expeditions possible.
              </p>
            </div>

            {/* Principle 3 */}
            <div className="rounded-xl border border-stone-200/90 bg-[#FAF9F5] p-7">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#16382C] text-white mb-4">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Rigorous Safety Standards
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Every departure carries satellite SOS communication devices, wilderness first aid kits, emergency altitude contingency plans, and certified emergency leadership.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Service Approach */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">
          Our Customer Service Approach
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-slate-600 max-w-2xl mx-auto">
          We do not operate impersonal automated call centers. When you reach out to Wayfarer, you speak directly with experienced route coordinators who have walked the trails, tested the gear, and know the refuge hosts personally.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/plan-your-trip"
            className="inline-flex items-center gap-2 rounded-lg bg-[#16382C] px-6 py-3 text-xs font-semibold text-white hover:bg-[#1f4a3b]"
          >
            <span>Plan Your Trip</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg border border-stone-300 px-6 py-3 text-xs font-semibold text-slate-700 hover:bg-stone-50"
          >
            <span>Contact Our Team</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
