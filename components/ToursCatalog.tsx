'use client';

import React, { useState, useMemo } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Search, RotateCcw, Filter, MapPin, Compass } from 'lucide-react';
import { toursData, Tour } from '@/lib/data/tours';
import { TourCard } from '@/components/TourCard';

export function ToursCatalog() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const initialDestination = searchParams.get('destination') || '';
  const initialCategory = searchParams.get('category') || '';

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDestination, setSelectedDestination] = useState(initialDestination);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedDifficulty, setSelectedDifficulty] = useState('');

  // Extract unique filter options from centralized data
  const destinations = useMemo(() => {
    return Array.from(new Set(toursData.map((t) => t.country))).sort();
  }, []);

  const categories = useMemo(() => {
    return Array.from(new Set(toursData.map((t) => t.category))).sort();
  }, []);

  const difficulties = ['Moderate', 'Challenging'];

  const filteredTours = useMemo(() => {
    return toursData.filter((tour) => {
      // Search text match
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = tour.title.toLowerCase().includes(q);
        const matchesDest = tour.destination.toLowerCase().includes(q);
        const matchesCountry = tour.country.toLowerCase().includes(q);
        const matchesHighlights = tour.highlights.some((h) => h.toLowerCase().includes(q));
        if (!matchesTitle && !matchesDest && !matchesCountry && !matchesHighlights) {
          return false;
        }
      }

      // Destination match
      if (selectedDestination && tour.country.toLowerCase() !== selectedDestination.toLowerCase()) {
        return false;
      }

      // Category match
      if (selectedCategory && tour.category.toLowerCase() !== selectedCategory.toLowerCase()) {
        return false;
      }

      // Difficulty match
      if (selectedDifficulty && tour.difficulty !== selectedDifficulty) {
        return false;
      }

      return true;
    });
  }, [searchQuery, selectedDestination, selectedCategory, selectedDifficulty]);

  const hasActiveFilters = Boolean(
    searchQuery || selectedDestination || selectedCategory || selectedDifficulty
  );

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedDestination('');
    setSelectedCategory('');
    setSelectedDifficulty('');
    router.push('/tours');
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Header & Overview */}
      <div className="max-w-3xl mb-10">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#16382C]">
          Expedition Catalog
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mt-1">
          Small-Group Tours & Private Departures
        </h1>
        <p className="mt-3 text-base text-slate-600 leading-relaxed">
          Explore all guided wilderness routes and cultural traverses. Every trip is capped at 8 to 12 travellers, accompanied by certified local mountain leaders, and available for private bespoke tailoring.
        </p>
      </div>

      {/* Clean, Simple Filter Bar (No bloated sidebar) */}
      <div className="rounded-xl border border-stone-200/90 bg-white p-4 sm:p-5 shadow-xs mb-10">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12 items-center">
          {/* Search Query */}
          <div className="lg:col-span-4 relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by tour name, region, or trail..."
              className="w-full rounded-lg border border-stone-200 pl-9 pr-3.5 py-2.5 text-sm text-slate-900 placeholder:text-stone-400 focus:border-[#16382C] focus:ring-1 focus:ring-[#16382C] focus:outline-hidden"
            />
          </div>

          {/* Destination Dropdown */}
          <div className="lg:col-span-3">
            <select
              value={selectedDestination}
              onChange={(e) => setSelectedDestination(e.target.value)}
              aria-label="Filter by destination"
              className="w-full rounded-lg border border-stone-200 px-3 py-2.5 text-sm text-slate-800 focus:border-[#16382C] focus:ring-1 focus:ring-[#16382C] focus:outline-hidden bg-white"
            >
              <option value="">All Destinations</option>
              {destinations.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </div>

          {/* Tour Style Dropdown */}
          <div className="lg:col-span-3">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              aria-label="Filter by tour category"
              className="w-full rounded-lg border border-stone-200 px-3 py-2.5 text-sm text-slate-800 focus:border-[#16382C] focus:ring-1 focus:ring-[#16382C] focus:outline-hidden bg-white"
            >
              <option value="">All Tour Styles</option>
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          {/* Reset Filters */}
          <div className="lg:col-span-2 flex items-center justify-end">
            {hasActiveFilters ? (
              <button
                type="button"
                onClick={resetFilters}
                className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg border border-stone-300 py-2.5 px-3 text-xs font-semibold text-slate-700 hover:bg-stone-50 transition-colors"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                <span>Reset Filters</span>
              </button>
            ) : (
              <span className="text-xs text-stone-500 font-medium hidden lg:inline">
                Showing all {toursData.length} tours
              </span>
            )}
          </div>
        </div>

        {/* Active Filter Indicators & Results Count */}
        <div className="mt-4 pt-3 border-t border-stone-100 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
          <div>
            Showing <span className="font-semibold text-slate-900">{filteredTours.length}</span> of {toursData.length} expeditions
            {selectedDestination && <span> in <strong className="text-slate-900">{selectedDestination}</strong></span>}
            {selectedCategory && <span> ({selectedCategory})</span>}
          </div>

          <div className="text-stone-400">
            * All prices shown are transparent demonstration departure rates.
          </div>
        </div>
      </div>

      {/* Tour Grid */}
      {filteredTours.length > 0 ? (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredTours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-stone-300 bg-white p-12 text-center max-w-lg mx-auto">
          <Compass className="h-10 w-10 text-stone-400 mx-auto mb-3" />
          <h3 className="text-base font-bold text-slate-900">No matching expeditions found</h3>
          <p className="mt-1 text-xs text-slate-600 leading-relaxed">
            Try adjusting your search criteria or resetting filters to see all available journeys.
          </p>
          <button
            type="button"
            onClick={resetFilters}
            className="mt-5 inline-flex items-center gap-1.5 rounded-md bg-[#16382C] px-4 py-2 text-xs font-semibold text-white hover:bg-[#1f4a3b]"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            <span>Reset All Filters</span>
          </button>
        </div>
      )}
    </div>
  );
}
