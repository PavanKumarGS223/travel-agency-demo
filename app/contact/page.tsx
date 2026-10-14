import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, Mail, MessageCircle, MapPin, ExternalLink, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import { businessConfig } from '@/lib/data/config';
import { ContactForm } from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us | Wayfarer Tours & Travels',
  description: 'Reach our expedition desk via telephone, email, WhatsApp, or contact form for itinerary advice.',
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-3xl mb-12">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#16382C]">
          Expedition Desk
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mt-1">
          Get in Touch with Our Specialists
        </h1>
        <p className="mt-3 text-base text-slate-600 leading-relaxed">
          Whether you have a quick question about route difficulty or want to discuss tailoring a private departure for your group, we are here to assist.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        {/* Left Column: Direct Contact & Office Information (Col span 5) */}
        <div className="lg:col-span-5 space-y-8">
          {/* Direct Channels Card */}
          <div className="rounded-xl border border-stone-200/90 bg-white p-6 sm:p-7 shadow-xs">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-5">
              Direct Contact Channels
            </h2>

            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${businessConfig.phoneRaw}`}
                  className="flex items-center gap-3 group text-slate-700 hover:text-slate-950 transition-colors"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-[#16382C] group-hover:bg-[#16382C] group-hover:text-white transition-colors">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-2xs uppercase tracking-wider text-stone-500 block">Telephone</span>
                    <span className="text-sm font-semibold">{businessConfig.phone}</span>
                  </div>
                </a>
              </li>

              <li>
                <a
                  href={`mailto:${businessConfig.email}`}
                  className="flex items-center gap-3 group text-slate-700 hover:text-slate-950 transition-colors"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-[#16382C] group-hover:bg-[#16382C] group-hover:text-white transition-colors">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-2xs uppercase tracking-wider text-stone-500 block">Email Inquiries</span>
                    <span className="text-sm font-semibold break-all">{businessConfig.email}</span>
                  </div>
                </a>
              </li>

              <li>
                <a
                  href={`https://wa.me/${businessConfig.whatsappRaw}?text=${encodeURIComponent(businessConfig.whatsappPrefillText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group text-slate-700 hover:text-slate-950 transition-colors"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-[#16382C] group-hover:bg-[#16382C] group-hover:text-white transition-colors">
                    <MessageCircle className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-2xs uppercase tracking-wider text-stone-500 block">Instant Messaging</span>
                    <span className="text-sm font-semibold">WhatsApp Chat ↗</span>
                  </div>
                </a>
              </li>
            </ul>

            {/* Operating Hours */}
            <div className="mt-6 pt-5 border-t border-stone-100">
              <div className="flex items-start gap-2.5 text-xs text-slate-600">
                <Clock className="h-4 w-4 text-[#16382C] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="font-bold text-slate-900 block">Desk Business Hours</span>
                  {businessConfig.businessHours.map((bh, i) => (
                    <div key={i} className="text-stone-600">
                      <strong className="text-slate-800">{bh.days}:</strong> {bh.hours}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Office Address Card with REQUIRED External "View Location ↗" Link (No embedded iframe) */}
          <div className="rounded-xl border border-stone-200/90 bg-white p-6 sm:p-7 shadow-xs">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-3">
              Office Location
            </h2>

            <div className="flex items-start gap-3 text-sm text-slate-700">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-stone-100 text-[#16382C]">
                <MapPin className="h-4 w-4" />
              </div>
              <div className="space-y-1">
                <p className="font-semibold text-slate-900">{businessConfig.name}</p>
                <p>{businessConfig.address.street}</p>
                <p>
                  {businessConfig.address.city}, {businessConfig.address.state} {businessConfig.address.postalCode}
                </p>
                <p>{businessConfig.address.country}</p>

                {/* Mandated: View Location text link opening Google Maps search link in a new tab */}
                <div className="pt-3">
                  <a
                    href={businessConfig.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-[#16382C] hover:text-[#1f4a3b] hover:underline"
                  >
                    <span>View Location</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Enquiry Process Explanation */}
          <div className="rounded-xl border border-stone-200 bg-[#FAF9F5] p-5 text-xs text-slate-600 space-y-2">
            <h3 className="font-bold text-slate-900 uppercase tracking-wider text-2xs">
              How We Handle Enquiries
            </h3>
            <p className="leading-relaxed">
              When you send an enquiry or message, it is assigned directly to a specialist familiar with that specific destination. You will receive an initial response within 24 business hours with availability, gear guidance, and pricing details.
            </p>
          </div>
        </div>

        {/* Right Column: Contact Form (Col span 7) */}
        <div className="lg:col-span-7">
          <div className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-9 shadow-xs">
            <div className="border-b border-stone-100 pb-4 mb-6">
              <h2 className="text-lg font-bold text-slate-900">
                Send Us a Message
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Fill in the details below and we will get back to you promptly.
              </p>
            </div>

            <ContactForm />

            <div className="mt-8 pt-5 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-[#16382C]" />
                <span>We respect your privacy. No marketing lists or spam.</span>
              </div>
              <Link href="/plan-your-trip" className="text-[#16382C] font-semibold hover:underline">
                Trip planner form ↗
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
