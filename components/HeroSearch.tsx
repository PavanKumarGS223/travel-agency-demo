'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search, MapPin, Compass } from 'lucide-react';

export function HeroSearch() {
  const router = useRouter();
  const [destination, setDestination] = useState('');
  const [category, setCategory] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (destination) params.set('destination', destination);
    if (category) params.set('category', category);

    const query = params.toString();
    router.push(query ? `/tours?${query}` : '/tours');
  };

  return (
    <form
      onSubmit={handleSearch}
      className="mx-auto w-full max-w-4xl rounded-xl border border-stone-200/80 bg-white/95 p-3 sm:p-4 shadow-xl backdrop-blur-md"
    >
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-12 sm:items-center">
        {/* Destination Selector */}
        <div className="sm:col-span-5 flex items-center gap-2.5 rounded-lg border border-stone-200/80 px-3 py-2.5 transition-colors focus-within:border-[#16382C]">
          <MapPin className="h-4 w-4 text-[#16382C] shrink-0" />
          <div className="flex-1">
            <label htmlFor="search-destination" className="block text-2xs font-semibold uppercase tracking-wider text-stone-500">
              Destination
            </label>
            <select
              id="search-destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="w-full bg-transparent text-sm font-medium text-slate-900 focus:outline-hidden"
            >
              <option value="">Any Destination</option>
              <option value="Morocco">Morocco (High Atlas)</option>
              <option value="Italy">Italy (Dolomites)</option>
              <option value="Norway">Norway (Western Fjords)</option>
              <option value="Chile">Chile (Patagonia)</option>
              <option value="Japan">Japan (Kumano Kodo)</option>
              <option value="Iceland">Iceland (Highlands)</option>
            </select>
          </div>
        </div>

        {/* Tour Style Selector */}
        <div className="sm:col-span-4 flex items-center gap-2.5 rounded-lg border border-stone-200/80 px-3 py-2.5 transition-colors focus-within:border-[#16382C]">
          <Compass className="h-4 w-4 text-[#16382C] shrink-0" />
          <div className="flex-1">
            <label htmlFor="search-style" className="block text-2xs font-semibold uppercase tracking-wider text-stone-500">
              Expedition Style
            </label>
            <select
              id="search-style"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full bg-transparent text-sm font-medium text-slate-900 focus:outline-hidden"
            >
              <option value="">Any Experience</option>
              <option value="Alpine Trekking">Alpine Trekking</option>
              <option value="Coastal & Fjord">Coastal & Fjord Kayaking</option>
              <option value="Wilderness Expedition">Wilderness Expedition</option>
              <option value="Cultural Discovery">Cultural & Sacred Trails</option>
            </select>
          </div>
        </div>

        {/* Search Submit Action */}
        <div className="sm:col-span-3">
          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#16382C] py-3 px-4 text-sm font-semibold text-white shadow-xs transition-colors hover:bg-[#1f4a3b]"
          >
            <Search className="h-4 w-4" />
            <span>Discover Tours</span>
          </button>
        </div>
      </div>
    </form>
  );
}
