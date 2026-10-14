import React from 'react';
import Link from 'next/link';
import { Compass, Phone, Mail, MessageCircle, MapPin, ExternalLink, Clock } from 'lucide-react';
import { businessConfig } from '@/lib/data/config';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-stone-200 bg-[#F4F3EE] text-slate-800">
      {/* Main Footer Container */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Brand & Overview (Col span 4) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5 group">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#16382C] text-[#FAF9F5]">
                <Compass className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">
                {businessConfig.name}
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-600 max-w-sm">
              {businessConfig.description}
            </p>
            <div className="pt-2">
              <span className="text-xs text-stone-500 block">
                {businessConfig.isDemoNotice}
              </span>
            </div>
          </div>

          {/* Navigation Links (Col span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-900">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-600">
              <li>
                <Link href="/" className="hover:text-slate-950 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/tours" className="hover:text-slate-950 transition-colors">
                  Tours Catalog
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-slate-950 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="hover:text-slate-950 transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-slate-950 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/plan-your-trip" className="text-[#16382C] font-semibold hover:underline">
                  Plan Your Trip ↗
                </Link>
              </li>
            </ul>
          </div>

          {/* Verified Contact Details (Col span 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-900">
              Direct Contact
            </h3>
            <ul className="space-y-3 text-sm text-slate-600">
              <li>
                <a
                  href={`tel:${businessConfig.phoneRaw}`}
                  className="inline-flex items-center gap-2 hover:text-slate-950 transition-colors"
                >
                  <Phone className="h-4 w-4 text-[#16382C] shrink-0" />
                  <span>{businessConfig.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${businessConfig.email}`}
                  className="inline-flex items-center gap-2 hover:text-slate-950 transition-colors"
                >
                  <Mail className="h-4 w-4 text-[#16382C] shrink-0" />
                  <span className="break-all">{businessConfig.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${businessConfig.whatsappRaw}?text=${encodeURIComponent(businessConfig.whatsappPrefillText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-slate-950 transition-colors"
                >
                  <MessageCircle className="h-4 w-4 text-[#16382C] shrink-0" />
                  <span>WhatsApp Chat</span>
                </a>
              </li>
              <li className="pt-1">
                <div className="flex items-start gap-2 text-xs text-slate-600">
                  <Clock className="h-4 w-4 text-[#16382C] shrink-0 mt-0.5" />
                  <div>
                    {businessConfig.businessHours.map((bh, i) => (
                      <div key={i} className="mb-0.5">
                        <span className="font-medium text-slate-700">{bh.days}:</span> {bh.hours}
                      </div>
                    ))}
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Office Location & Verification (Col span 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-900">
              Office Address
            </h3>
            <div className="space-y-2 text-sm text-slate-600">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-[#16382C] shrink-0 mt-1" />
                <div>
                  <p>{businessConfig.address.street}</p>
                  <p>
                    {businessConfig.address.city}, {businessConfig.address.state} {businessConfig.address.postalCode}
                  </p>
                  <p>{businessConfig.address.country}</p>
                </div>
              </div>

              {/* Requirement: View Location text link opening in a new tab */}
              <div className="pt-2">
                <a
                  href={businessConfig.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#16382C] hover:text-[#1f4a3b] hover:underline"
                >
                  <span>View Location</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="mt-12 border-t border-stone-300 pt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-xs text-slate-500">
          <p>© {currentYear} {businessConfig.name}. All rights reserved.</p>
          <div className="flex flex-wrap gap-6">
            <Link href="/privacy-policy" className="hover:text-slate-800 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-slate-800 transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/cancellation-policy" className="hover:text-slate-800 transition-colors">
              Cancellation Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
