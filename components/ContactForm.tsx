'use client';

import React, { useState } from 'react';
import { CheckCircle2, AlertCircle, Loader2, Send } from 'lucide-react';
import { submitInquiry } from '@/lib/services/inquiry';

export function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required.';
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Valid email address is required.';
    }
    if (!formData.phone.trim()) errs.phone = 'Phone number is required.';
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please provide a message with at least 10 characters.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const res = await submitInquiry({
        fullName: formData.fullName.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        travelersCount: 1,
        travelStyle: 'flexible',
        specialRequests: `[Subject: ${formData.subject || 'General Inquiry'}] ${formData.message.trim()}`,
        source: 'contact-page',
      });

      if (res.success) {
        setSubmitted(true);
      } else {
        setErrorMsg(res.error || 'Failed to deliver message. Please retry.');
      }
    } catch {
      setErrorMsg('An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-xl border border-stone-200 bg-white p-8 text-center shadow-xs">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-[#16382C]">
          <CheckCircle2 className="h-6 w-6" />
        </div>
        <h3 className="mt-3 text-lg font-bold text-slate-900">Message Dispatched</h3>
        <p className="mt-1 text-sm text-slate-600">
          Thank you for getting in touch. One of our destination specialists will respond to your inquiry within 24 business hours.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setFormData({ fullName: '', email: '', phone: '', subject: '', message: '' });
          }}
          className="mt-6 inline-flex rounded-md border border-stone-300 px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-stone-50"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      {errorMsg && (
        <div className="flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 p-3 text-xs text-red-800">
          <AlertCircle className="h-4 w-4 shrink-0 text-red-600" />
          <span>{errorMsg}</span>
        </div>
      )}

      <div>
        <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-700 mb-1">
          Full Name *
        </label>
        <input
          type="text"
          id="contact-name"
          value={formData.fullName}
          onChange={(e) => {
            setFormData({ ...formData, fullName: e.target.value });
            if (errors.fullName) setErrors({ ...errors, fullName: '' });
          }}
          placeholder="Jane Doe"
          className={`w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:outline-hidden ${
            errors.fullName ? 'border-red-400 focus:border-red-500' : 'border-stone-300 focus:border-[#16382C]'
          }`}
        />
        {errors.fullName && <span className="text-2xs text-red-600 mt-1 block">{errors.fullName}</span>}
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-700 mb-1">
            Email Address *
          </label>
          <input
            type="email"
            id="contact-email"
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
              if (errors.email) setErrors({ ...errors, email: '' });
            }}
            placeholder="jane@example.com"
            className={`w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:outline-hidden ${
              errors.email ? 'border-red-400 focus:border-red-500' : 'border-stone-300 focus:border-[#16382C]'
            }`}
          />
          {errors.email && <span className="text-2xs text-red-600 mt-1 block">{errors.email}</span>}
        </div>

        <div>
          <label htmlFor="contact-phone" className="block text-xs font-semibold text-slate-700 mb-1">
            Phone Number *
          </label>
          <input
            type="tel"
            id="contact-phone"
            value={formData.phone}
            onChange={(e) => {
              setFormData({ ...formData, phone: e.target.value });
              if (errors.phone) setErrors({ ...errors, phone: '' });
            }}
            placeholder="+1 (555) 000-0000"
            className={`w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:outline-hidden ${
              errors.phone ? 'border-red-400 focus:border-red-500' : 'border-stone-300 focus:border-[#16382C]'
            }`}
          />
          {errors.phone && <span className="text-2xs text-red-600 mt-1 block">{errors.phone}</span>}
        </div>
      </div>

      <div>
        <label htmlFor="contact-subject" className="block text-xs font-semibold text-slate-700 mb-1">
          Subject <span className="text-stone-400 font-normal">(Optional)</span>
        </label>
        <input
          type="text"
          id="contact-subject"
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          placeholder="e.g. Question about High Atlas departure dates"
          className="w-full rounded-lg border border-stone-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-[#16382C] focus:ring-1 focus:ring-[#16382C] focus:outline-hidden"
        />
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-700 mb-1">
          Your Message *
        </label>
        <textarea
          id="contact-message"
          rows={4}
          value={formData.message}
          onChange={(e) => {
            setFormData({ ...formData, message: e.target.value });
            if (errors.message) setErrors({ ...errors, message: '' });
          }}
          placeholder="How can our expedition team help you?"
          className={`w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:outline-hidden ${
            errors.message ? 'border-red-400 focus:border-red-500' : 'border-stone-300 focus:border-[#16382C]'
          }`}
        />
        {errors.message && <span className="text-2xs text-red-600 mt-1 block">{errors.message}</span>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#16382C] py-3 px-5 text-sm font-semibold text-white shadow-xs transition-colors hover:bg-[#1f4a3b] disabled:opacity-60"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            <span>Sending...</span>
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            <span>Send Message</span>
          </>
        )}
      </button>
    </form>
  );
}
