"use client";

import { useState } from "react";

const eventTypes = [
  "Mobile Karaoke (Bar/Restaurant)",
  "Private Room Rental",
  "Corporate Event",
  "Birthday Party",
  "Wedding / Reception",
  "Quinceañera",
  "Other Private Event",
];

const guestRanges = [
  "1–15 guests",
  "16–30 guests",
  "31–50 guests",
  "51–100 guests",
  "100+ guests",
];

const hearAbout = [
  "Google Search",
  "Instagram",
  "Facebook",
  "TikTok",
  "Word of Mouth",
  "Saw us at a venue",
  "Other",
];

export default function BookPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: Wire up form submission (email, Supabase, etc.)
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <section className="gradient-hero min-h-[80vh] flex items-center justify-center">
        <div className="max-w-lg mx-auto px-4 text-center">
          <div className="text-6xl mb-6">🎉</div>
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
            Request Received!
          </h1>
          <p className="text-white/60 text-lg mb-8">
            Thanks for reaching out! Michaux will get back to you within 24
            hours with a custom quote for your event.
          </p>
          <a
            href="/"
            className="inline-flex px-6 py-3 rounded-full bg-primary text-white font-semibold hover:bg-primary-dark transition-all"
          >
            Back to Home
          </a>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="gradient-hero py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Book{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-neon-pink">
              Your Event
            </span>
          </h1>
          <p className="text-white/60 text-lg sm:text-xl max-w-2xl mx-auto">
            Tell us about your event and we&apos;ll send you a free, no-obligation
            quote within 24 hours.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 sm:py-24 bg-[#0F0D1A]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name + Phone */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-white/70 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Full name"
                  className="w-full px-4 py-3 rounded-xl bg-surface border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/70 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="(512) 555-0123"
                  className="w-full px-4 py-3 rounded-xl bg-surface border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-white/70 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                required
                placeholder="you@email.com"
                className="w-full px-4 py-3 rounded-xl bg-surface border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
              />
            </div>

            {/* Event Type */}
            <div>
              <label className="block text-sm font-medium text-white/70 mb-2">
                Event Type *
              </label>
              <select
                required
                defaultValue=""
                className="w-full px-4 py-3 rounded-xl bg-surface border border-white/10 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all appearance-none"
              >
                <option value="" disabled className="text-white/30">
                  Select event type...
                </option>
                {eventTypes.map((t) => (
                  <option key={t} value={t} className="bg-surface">
                    {t}
                  </option>
                ))}
              </select>
            </div>

            {/* Date + Guests */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-white/70 mb-2">
                  Preferred Date *
                </label>
                <input
                  type="date"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-surface border border-white/10 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/70 mb-2">
                  Guest Count
                </label>
                <select
                  defaultValue=""
                  className="w-full px-4 py-3 rounded-xl bg-surface border border-white/10 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all appearance-none"
                >
                  <option value="" disabled className="text-white/30">
                    Estimated guests...
                  </option>
                  {guestRanges.map((r) => (
                    <option key={r} value={r} className="bg-surface">
                      {r}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Venue / Location */}
            <div>
              <label className="block text-sm font-medium text-white/70 mb-2">
                Venue / Location
              </label>
              <input
                type="text"
                placeholder="Venue name or address (or 'TBD')"
                className="w-full px-4 py-3 rounded-xl bg-surface border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
              />
            </div>

            {/* Details */}
            <div>
              <label className="block text-sm font-medium text-white/70 mb-2">
                Tell Us About Your Event
              </label>
              <textarea
                rows={4}
                placeholder="Any special requests, themes, or details we should know about?"
                className="w-full px-4 py-3 rounded-xl bg-surface border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all resize-none"
              />
            </div>

            {/* How'd you hear */}
            <div>
              <label className="block text-sm font-medium text-white/70 mb-2">
                How&apos;d You Hear About Us?
              </label>
              <select
                defaultValue=""
                className="w-full px-4 py-3 rounded-xl bg-surface border border-white/10 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all appearance-none"
              >
                <option value="" disabled className="text-white/30">
                  Select one...
                </option>
                {hearAbout.map((h) => (
                  <option key={h} value={h} className="bg-surface">
                    {h}
                  </option>
                ))}
              </select>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-4 rounded-full bg-primary text-white font-bold text-lg hover:bg-primary-dark transition-all pulse-glow"
            >
              Request Free Quote
            </button>

            <p className="text-center text-white/30 text-sm">
              No commitment. We&apos;ll get back to you within 24 hours.
            </p>
          </form>

          {/* Or call */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10">
              <span className="text-white/40 text-sm">Prefer to talk?</span>
              <a
                href="tel:5123871885"
                className="text-accent font-semibold text-sm hover:text-accent-light transition-colors"
              >
                (512) 387-1885
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
