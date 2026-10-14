'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Compass, Menu, X, ArrowUpRight } from 'lucide-react';
import { businessConfig } from '@/lib/data/config';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Tours', href: '/tours' },
    { label: 'About Us', href: '/about' },
    { label: 'FAQs', href: '/faqs' },
    { label: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-stone-200/80 bg-[#FAF9F5]/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Brand Wordmark (Single text element in display face, no pills/taglines) */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 text-slate-900 transition-opacity hover:opacity-90 shrink-0"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#16382C] text-[#FAF9F5] shadow-xs">
            <Compass className="h-5 w-5 transition-transform duration-300 group-hover:rotate-45" />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900 whitespace-nowrap">
            {businessConfig.shortName}
          </span>
        </Link>

        {/* Zone 2: Navigation Links (Clean single-line text with subtle underline hover) */}
        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-1 text-sm font-medium whitespace-nowrap transition-colors ${
                  active
                    ? 'text-[#16382C] font-semibold'
                    : 'text-slate-600 hover:text-slate-950'
                }`}
              >
                {link.label}
                {active && (
                  <span className="absolute bottom-0 left-0 h-0.5 w-full bg-[#16382C] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Zone 3: 1 Primary Distinct Action Button */}
        <div className="hidden items-center gap-4 sm:flex shrink-0">
          <Link
            href="/plan-your-trip"
            className="inline-flex items-center justify-center rounded-md bg-[#16382C] px-5 py-2.5 text-sm font-semibold text-[#FAF9F5] shadow-xs transition-all duration-200 hover:bg-[#1f4a3b] hover:shadow-sm active:scale-[0.98] whitespace-nowrap"
          >
            Plan Your Trip
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-3 md:hidden">
          <Link
            href="/plan-your-trip"
            className="rounded-md bg-[#16382C] px-3.5 py-1.5 text-xs font-semibold text-white shadow-xs"
          >
            Plan Trip
          </Link>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-stone-200/60 focus:outline-hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-stone-200 bg-[#FAF9F5] px-4 pt-3 pb-6 md:hidden">
          <div className="space-y-1">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between rounded-md px-3 py-2.5 text-base font-medium transition-colors ${
                    active
                      ? 'bg-stone-200/70 text-[#16382C] font-semibold'
                      : 'text-slate-700 hover:bg-stone-200/40 hover:text-slate-900'
                  }`}
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="h-4 w-4 opacity-50" />
                </Link>
              );
            })}
          </div>

          <div className="mt-5 pt-4 border-t border-stone-200">
            <Link
              href="/plan-your-trip"
              onClick={() => setMobileMenuOpen(false)}
              className="flex w-full items-center justify-center rounded-md bg-[#16382C] py-3 text-center text-sm font-semibold text-white shadow-xs"
            >
              Plan Your Trip
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
