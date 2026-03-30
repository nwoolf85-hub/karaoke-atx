"use client";

import { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    q: "How far in advance should I book?",
    a: "We recommend booking at least 2 weeks in advance for private events and 1 month for corporate events. For regular bar/venue nights, reach out anytime to discuss recurring schedules.",
  },
  {
    q: "What area do you serve?",
    a: "We serve the entire Austin metro area including Round Rock, Cedar Park, Georgetown, San Marcos, Bee Cave, Lago Vista, Wimberley, and surrounding areas.",
  },
  {
    q: "Do you provide food and drinks?",
    a: "We offer catering coordination for events. For bar and restaurant gigs, the venue handles food and drinks while we handle all the karaoke entertainment.",
  },
  {
    q: "How many songs do you have?",
    a: "Our library has 50,000+ songs across every genre — pop, rock, country, hip-hop, R&B, reggaeton, K-pop, classic rock, and more. We update it daily and take requests.",
  },
  {
    q: "What equipment do you use?",
    a: "Professional-grade PA systems, wireless microphones, disco and ambient lighting, and a dedicated sound engineer at every event. This isn't a laptop and a Bluetooth speaker.",
  },
  {
    q: "Can I book recurring karaoke nights for my bar?",
    a: "Absolutely — that's one of our specialties. We work with several Austin venues on weekly and bi-weekly karaoke nights. Let's talk about what works for your schedule.",
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="gradient-hero py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Get In{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-accent">
              Touch
            </span>
          </h1>
          <p className="text-white/60 text-lg sm:text-xl max-w-2xl mx-auto">
            Questions? Ideas? Ready to book? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-16 sm:py-24 bg-[#0F0D1A]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Contact Details */}
            <div className="lg:col-span-2 space-y-6">
              <div className="gradient-card rounded-2xl border border-white/5 p-6">
                <h3 className="font-heading text-lg font-bold text-white mb-4">
                  Contact Info
                </h3>
                <div className="space-y-4">
                  <a
                    href="tel:5123871885"
                    className="flex items-center gap-3 text-white/60 hover:text-accent transition-colors"
                  >
                    <span className="text-xl">📞</span>
                    <div>
                      <div className="text-sm text-white/40">
                        Call or Text
                      </div>
                      <div className="font-medium text-white/80">
                        (512) 387-1885
                      </div>
                    </div>
                  </a>
                  <a
                    href="mailto:info@karaokeatx.com"
                    className="flex items-center gap-3 text-white/60 hover:text-accent transition-colors"
                  >
                    <span className="text-xl">✉️</span>
                    <div>
                      <div className="text-sm text-white/40">Email</div>
                      <div className="font-medium text-white/80">
                        info@karaokeatx.com
                      </div>
                    </div>
                  </a>
                  <div className="flex items-center gap-3 text-white/60">
                    <span className="text-xl">📍</span>
                    <div>
                      <div className="text-sm text-white/40">Based In</div>
                      <div className="font-medium text-white/80">
                        Austin, Texas
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="gradient-card rounded-2xl border border-white/5 p-6">
                <h3 className="font-heading text-lg font-bold text-white mb-2">
                  Want to Book an Event?
                </h3>
                <p className="text-white/50 text-sm mb-4">
                  Head to our booking page for a detailed event form and free
                  quote.
                </p>
                <Link
                  href="/book"
                  className="inline-flex px-5 py-2.5 rounded-full bg-primary text-white text-sm font-semibold hover:bg-primary-dark transition-all"
                >
                  Book Now →
                </Link>
              </div>

              <div className="gradient-card rounded-2xl border border-white/5 p-6">
                <h3 className="font-heading text-lg font-bold text-white mb-3">
                  Business Hours
                </h3>
                <div className="text-sm text-white/50 space-y-1">
                  <p>
                    <span className="text-white/70">Events:</span> 7 days a
                    week, evenings
                  </p>
                  <p>
                    <span className="text-white/70">Inquiries:</span> Mon–Sat,
                    10am–8pm
                  </p>
                  <p className="text-accent text-xs mt-2">
                    We respond within 24 hours
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="gradient-card rounded-2xl border border-white/5 p-10 text-center">
                  <div className="text-5xl mb-4">✨</div>
                  <h3 className="font-heading text-2xl font-bold text-white mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-white/60">
                    We&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="gradient-card rounded-2xl border border-white/5 p-6 sm:p-8 space-y-5"
                >
                  <h3 className="font-heading text-xl font-bold text-white mb-2">
                    Send a Message
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-white/70 mb-1.5">
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-xl bg-[#0F0D1A] border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white/70 mb-1.5">
                        Phone
                      </label>
                      <input
                        type="tel"
                        placeholder="(512) 555-0123"
                        className="w-full px-4 py-3 rounded-xl bg-[#0F0D1A] border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-1.5">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@email.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#0F0D1A] border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-1.5">
                      Subject *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="What's this about?"
                      className="w-full px-4 py-3 rounded-xl bg-[#0F0D1A] border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tell us what's on your mind..."
                      className="w-full px-4 py-3 rounded-xl bg-[#0F0D1A] border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full bg-primary text-white font-bold text-base hover:bg-primary-dark transition-all"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-24 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-3">
            {faqs.map(({ q, a }, i) => (
              <div
                key={i}
                className="gradient-card rounded-xl border border-white/5 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left"
                >
                  <span className="font-medium text-white/90 pr-4">{q}</span>
                  <span
                    className={`text-primary-light text-xl transition-transform ${
                      openFaq === i ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-4">
                    <p className="text-white/50 text-sm leading-relaxed">
                      {a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
