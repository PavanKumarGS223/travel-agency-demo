'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { CheckCircle2, AlertCircle, Loader2, ArrowRight, Compass, ShieldCheck } from 'lucide-react';
import { toursData, Tour } from '@/lib/data/tours';
import { submitInquiry } from '@/lib/services/inquiry';

export function TripPlannerForm() {
  const searchParams = useSearchParams();
  const tourSlugParam = searchParams.get('tour');
  const destinationParam = searchParams.get('destination');

  const initialTour = tourSlugParam ? toursData.find((t) => t.slug === tourSlugParam) || null : null;
  const [selectedTour, setSelectedTour] = useState<Tour | null>(initialTour);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    tourSlug: initialTour ? initialTour.slug : '',
    tourTitle: initialTour ? initialTour.title : '',
    destination: initialTour ? initialTour.country : (destinationParam || ''),
    departureDate: '',
    returnDate: '',
    travelersCount: 2,
    travelStyle: 'small-group' as 'small-group' | 'bespoke-private' | 'flexible',
    specialRequests: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedInquiryId, setSubmittedInquiryId] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleTourSelectChange = (slug: string) => {
    if (!slug) {
      setSelectedTour(null);
      setFormData((prev) => ({
        ...prev,
        tourSlug: '',
        tourTitle: '',
      }));
      return;
    }
    const matched = toursData.find((t) => t.slug === slug);
    if (matched) {
      setSelectedTour(matched);
      setFormData((prev) => ({
        ...prev,
        tourSlug: matched.slug,
        tourTitle: matched.title,
        destination: matched.country,
      }));
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Full name is required (at least 2 characters).';
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'A valid email address is required.';
    }
    if (!formData.phone.trim() || formData.phone.trim().length < 6) {
      newErrors.phone = 'A valid contact phone number is required.';
    }
    if (formData.travelersCount < 1 || formData.travelersCount > 50) {
      newErrors.travelersCount = 'Number of travellers must be between 1 and 50.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await submitInquiry({
        fullName: formData.fullName.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        tourSlug: formData.tourSlug || undefined,
        tourTitle: formData.tourTitle || undefined,
        destination: formData.destination || undefined,
        departureDate: formData.departureDate || undefined,
        returnDate: formData.returnDate || undefined,
        travelersCount: Number(formData.travelersCount),
        travelStyle: formData.travelStyle,
        specialRequests: formData.specialRequests.trim() || undefined,
        source: 'trip-planner',
      });

      if (res.success && res.inquiryId) {
        setSubmittedInquiryId(res.inquiryId);
      } else {
        setSubmitError(res.error || 'Failed to record your enquiry. Please check your connection and retry.');
      }
    } catch (err) {
      setSubmitError('An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Success Confirmation View
  if (submittedInquiryId) {
    return (
      <div className="rounded-2xl border border-stone-200 bg-white p-8 sm:p-12 shadow-sm text-center max-w-2xl mx-auto">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-[#16382C]">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-900">
          Enquiry Received
        </h2>
        <p className="mt-2 text-sm text-slate-600 leading-relaxed">
          Thank you, <span className="font-semibold text-slate-900">{formData.fullName}</span>. Your enquiry reference is <span className="font-mono font-semibold text-[#16382C]">{submittedInquiryId}</span>.
        </p>

        <div className="mt-6 rounded-lg bg-stone-50 p-5 text-left text-xs text-slate-700 space-y-2 border border-stone-200/80">
          <div className="font-semibold text-slate-900 uppercase tracking-wider text-2xs">
            Summary of Requested Arrangements
          </div>
          {formData.tourTitle && (
            <div>
              <span className="text-stone-500">Selected Tour:</span> <span className="font-medium text-slate-900">{formData.tourTitle}</span>
            </div>
          )}
          {formData.destination && (
            <div>
              <span className="text-stone-500">Destination:</span> <span className="font-medium text-slate-900">{formData.destination}</span>
            </div>
          )}
          <div>
            <span className="text-stone-500">Party Size:</span> <span className="font-medium text-slate-900">{formData.travelersCount} traveller{formData.travelersCount > 1 ? 's' : ''}</span>
          </div>
          <div>
            <span className="text-stone-500">Travel Style:</span> <span className="font-medium text-slate-900 capitalize">{formData.travelStyle.replace('-', ' ')}</span>
          </div>
          {formData.departureDate && (
            <div>
              <span className="text-stone-500">Target Departure:</span> <span className="font-medium text-slate-900">{formData.departureDate}</span>
            </div>
          )}
        </div>

        <div className="mt-8 border-t border-stone-100 pt-6">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2">
            What Happens Next
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            A specialist will review current route conditions and availability and email you an itemized itinerary proposal within 24 business hours. No deposit or payment is due until you approve the route.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => {
              setSubmittedInquiryId(null);
              setFormData({
                fullName: '',
                email: '',
                phone: '',
                tourSlug: '',
                tourTitle: '',
                destination: '',
                departureDate: '',
                returnDate: '',
                travelersCount: 2,
                travelStyle: 'small-group',
                specialRequests: '',
              });
              setSelectedTour(null);
            }}
            className="rounded-md border border-stone-300 px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-stone-50"
          >
            Submit Another Enquiry
          </button>
          <Link
            href="/tours"
            className="inline-flex items-center gap-1.5 rounded-md bg-[#16382C] px-5 py-2 text-xs font-semibold text-white hover:bg-[#1f4a3b]"
          >
            <span>Browse More Expeditions</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-10 shadow-xs max-w-3xl mx-auto"
    >
      {/* Preselected Tour Banner if present */}
      {selectedTour && (
        <div className="mb-8 flex items-start justify-between gap-4 rounded-xl border border-emerald-200 bg-emerald-50/70 p-4">
          <div className="flex items-start gap-3">
            <Compass className="h-5 w-5 text-[#16382C] shrink-0 mt-0.5" />
            <div>
              <span className="text-2xs font-bold uppercase tracking-wider text-[#16382C]">
                Enquiring About Selected Tour
              </span>
              <h4 className="text-sm font-bold text-slate-900 mt-0.5">
                {selectedTour.title}
              </h4>
              <p className="text-xs text-stone-600 mt-0.5">
                {selectedTour.durationLabel} · {selectedTour.groupSizeLabel} · {selectedTour.country}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => handleTourSelectChange('')}
            className="text-xs font-semibold text-stone-500 hover:text-slate-900 shrink-0"
          >
            Change
          </button>
        </div>
      )}

      {submitError && (
        <div className="mb-6 flex items-center gap-3 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800">
          <AlertCircle className="h-5 w-5 shrink-0 text-red-600" />
          <p>{submitError}</p>
        </div>
      )}

      {/* Section 1: Trip Preferences */}
      <div className="space-y-6">
        <div className="border-b border-stone-100 pb-3">
          <h2 className="text-base font-bold text-slate-900">
            01. Journey Details
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Select an existing tour package or let us tailor a bespoke private route.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {/* Tour Package Select */}
          <div>
            <label htmlFor="tour-select" className="block text-xs font-semibold text-slate-700 mb-1.5">
              Tour Package of Interest <span className="text-stone-400 font-normal">(Optional)</span>
            </label>
            <select
              id="tour-select"
              value={formData.tourSlug}
              onChange={(e) => handleTourSelectChange(e.target.value)}
              className="w-full rounded-lg border border-stone-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-[#16382C] focus:ring-1 focus:ring-[#16382C] focus:outline-hidden"
            >
              <option value="">No specific tour — custom bespoke request</option>
              {toursData.map((t) => (
                <option key={t.slug} value={t.slug}>
                  {t.title} ({t.country})
                </option>
              ))}
            </select>
          </div>

          {/* Destination if custom */}
          <div>
            <label htmlFor="destination-input" className="block text-xs font-semibold text-slate-700 mb-1.5">
              Target Destination / Region
            </label>
            <input
              type="text"
              id="destination-input"
              value={formData.destination}
              onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
              placeholder="e.g. Morocco, Italian Alps, Patagonia, Japan"
              className="w-full rounded-lg border border-stone-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-stone-400 focus:border-[#16382C] focus:ring-1 focus:ring-[#16382C] focus:outline-hidden"
            />
          </div>

          {/* Travel Style */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Travel Arrangement Style
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setFormData({ ...formData, travelStyle: 'small-group' })}
                className={`rounded-lg border px-3 py-2 text-xs font-medium text-left transition-colors ${
                  formData.travelStyle === 'small-group'
                    ? 'border-[#16382C] bg-emerald-50/60 text-[#16382C] font-semibold'
                    : 'border-stone-300 text-slate-700 hover:bg-stone-50'
                }`}
              >
                Small-Group Departure
              </button>
              <button
                type="button"
                onClick={() => setFormData({ ...formData, travelStyle: 'bespoke-private' })}
                className={`rounded-lg border px-3 py-2 text-xs font-medium text-left transition-colors ${
                  formData.travelStyle === 'bespoke-private'
                    ? 'border-[#16382C] bg-emerald-50/60 text-[#16382C] font-semibold'
                    : 'border-stone-300 text-slate-700 hover:bg-stone-50'
                }`}
              >
                Bespoke Private Journey
              </button>
            </div>
          </div>

          {/* Number of Travellers */}
          <div>
            <label htmlFor="travelers-count" className="block text-xs font-semibold text-slate-700 mb-1.5">
              Number of Travellers
            </label>
            <input
              type="number"
              id="travelers-count"
              min={1}
              max={50}
              value={formData.travelersCount}
              onChange={(e) => setFormData({ ...formData, travelersCount: parseInt(e.target.value) || 1 })}
              className={`w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:outline-hidden ${
                errors.travelersCount
                  ? 'border-red-400 focus:border-red-500'
                  : 'border-stone-300 focus:border-[#16382C]'
              }`}
            />
            {errors.travelersCount && (
              <span className="text-2xs text-red-600 mt-1 block">{errors.travelersCount}</span>
            )}
          </div>

          {/* Departure Date */}
          <div>
            <label htmlFor="departure-date" className="block text-xs font-semibold text-slate-700 mb-1.5">
              Estimated Departure Date <span className="text-stone-400 font-normal">(Approximate is fine)</span>
            </label>
            <input
              type="date"
              id="departure-date"
              value={formData.departureDate}
              onChange={(e) => setFormData({ ...formData, departureDate: e.target.value })}
              className="w-full rounded-lg border border-stone-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-[#16382C] focus:ring-1 focus:ring-[#16382C] focus:outline-hidden"
            />
          </div>

          {/* Return Date */}
          <div>
            <label htmlFor="return-date" className="block text-xs font-semibold text-slate-700 mb-1.5">
              Target Return Date <span className="text-stone-400 font-normal">(Optional)</span>
            </label>
            <input
              type="date"
              id="return-date"
              value={formData.returnDate}
              onChange={(e) => setFormData({ ...formData, returnDate: e.target.value })}
              className="w-full rounded-lg border border-stone-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-[#16382C] focus:ring-1 focus:ring-[#16382C] focus:outline-hidden"
            />
          </div>
        </div>
      </div>

      {/* Section 2: Contact Information */}
      <div className="mt-8 space-y-6">
        <div className="border-b border-stone-100 pb-3">
          <h2 className="text-base font-bold text-slate-900">
            02. Your Contact Information
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Where should our specialist send your route proposal and quote?
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {/* Full Name */}
          <div className="sm:col-span-2">
            <label htmlFor="full-name" className="block text-xs font-semibold text-slate-700 mb-1.5">
              Full Name *
            </label>
            <input
              type="text"
              id="full-name"
              required
              value={formData.fullName}
              onChange={(e) => {
                setFormData({ ...formData, fullName: e.target.value });
                if (errors.fullName) setErrors({ ...errors, fullName: '' });
              }}
              placeholder="e.g. Eleanor Vance"
              className={`w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:outline-hidden ${
                errors.fullName
                  ? 'border-red-400 focus:border-red-500 ring-1 ring-red-400'
                  : 'border-stone-300 focus:border-[#16382C]'
              }`}
            />
            {errors.fullName && (
              <span className="text-2xs text-red-600 mt-1 block">{errors.fullName}</span>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-xs font-semibold text-slate-700 mb-1.5">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
                if (errors.email) setErrors({ ...errors, email: '' });
              }}
              placeholder="eleanor@example.com"
              className={`w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:outline-hidden ${
                errors.email
                  ? 'border-red-400 focus:border-red-500 ring-1 ring-red-400'
                  : 'border-stone-300 focus:border-[#16382C]'
              }`}
            />
            {errors.email && (
              <span className="text-2xs text-red-600 mt-1 block">{errors.email}</span>
            )}
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-xs font-semibold text-slate-700 mb-1.5">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              required
              value={formData.phone}
              onChange={(e) => {
                setFormData({ ...formData, phone: e.target.value });
                if (errors.phone) setErrors({ ...errors, phone: '' });
              }}
              placeholder="+1 (555) 000-0000"
              className={`w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:outline-hidden ${
                errors.phone
                  ? 'border-red-400 focus:border-red-500 ring-1 ring-red-400'
                  : 'border-stone-300 focus:border-[#16382C]'
              }`}
            />
            {errors.phone && (
              <span className="text-2xs text-red-600 mt-1 block">{errors.phone}</span>
            )}
          </div>

          {/* Additional Requirements / Special Requests */}
          <div className="sm:col-span-2">
            <label htmlFor="special-requests" className="block text-xs font-semibold text-slate-700 mb-1.5">
              Special Requests, Fitness Notes, or Dietary Preferences <span className="text-stone-400 font-normal">(Optional)</span>
            </label>
            <textarea
              id="special-requests"
              rows={3}
              value={formData.specialRequests}
              onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
              placeholder="Tell us about previous trekking experience, dietary preferences, rooming preferences, or any specific milestones you're celebrating."
              className="w-full rounded-lg border border-stone-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-[#16382C] focus:ring-1 focus:ring-[#16382C] focus:outline-hidden"
            />
          </div>
        </div>
      </div>

      {/* Trust & Submit */}
      <div className="mt-8 border-t border-stone-100 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-2 text-xs text-stone-500">
          <ShieldCheck className="h-4 w-4 text-[#16382C] shrink-0" />
          <span>Zero spam. No payment or booking obligation required to enquire.</span>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#16382C] px-7 py-3 text-sm font-semibold text-white shadow-xs transition-colors hover:bg-[#1f4a3b] disabled:opacity-60"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              <span>Submitting Enquiry...</span>
            </>
          ) : (
            <>
              <span>Send Enquiry</span>
              <ArrowRight className="h-4 w-4" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
