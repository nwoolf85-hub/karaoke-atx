import Link from "next/link";

const services = [
  {
    icon: "🎶",
    title: "Mobile Karaoke",
    desc: "We bring the party to your bar, restaurant, or venue with professional sound and 50,000+ songs.",
    href: "/services#mobile",
  },
  {
    icon: "🎙️",
    title: "Private Room",
    desc: "Our soundproof karaoke suite fits up to 50 guests with state-of-the-art sound and disco lighting.",
    href: "/services#private-room",
  },
  {
    icon: "🏢",
    title: "Corporate Events",
    desc: "Team building, holiday parties, and company celebrations your employees will actually enjoy.",
    href: "/services#corporate",
  },
  {
    icon: "🎉",
    title: "Private Parties",
    desc: "Birthdays, weddings, quinceañeras — any occasion is better with karaoke.",
    href: "/services#parties",
  },
];

const testimonials = [
  {
    quote:
      "Michaux turned our slowest night into our busiest night of the week. The crowd loves karaoke night and keeps coming back for more.",
    name: "Deckhand Oyster Bar",
    role: "Venue Partner",
  },
  {
    quote:
      "Professional setup, incredible sound quality, and Michaux made everyone feel comfortable getting on stage. Our church event was unforgettable.",
    name: "Unity of Wimberley",
    role: "Event Organizer",
  },
  {
    quote:
      "We've been running karaoke nights with Karaoke ATX for months and attendance just keeps growing. True professionalism and a great vibe every time.",
    name: "South Austin Singles",
    role: "Community Group",
  },
];

const stats = [
  { value: "50,000+", label: "Songs" },
  { value: "500+", label: "Events" },
  { value: "4th Gen", label: "South Austin" },
  { value: "Pro", label: "Sound Engineer" },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative gradient-hero min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-neon-pink/8 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/60 mb-8">
            <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
            Now booking events for 2026
          </div>

          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] tracking-tight mb-6">
            YOUR STAGE.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light via-neon-pink to-accent">
              YOUR SONG.
            </span>
            <br />
            YOUR NIGHT.
          </h1>

          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-white/60 leading-relaxed mb-10">
            Austin&apos;s premier karaoke experience — professional sound,
            50,000+ songs, and a vibe that keeps crowds coming back. At your
            venue or ours.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="px-8 py-4 rounded-full bg-primary text-white font-semibold text-lg hover:bg-primary-dark transition-all pulse-glow"
            >
              Book Your Event
            </Link>
            <Link
              href="/services"
              className="px-8 py-4 rounded-full border border-white/20 text-white font-semibold text-lg hover:bg-white/5 transition-all"
            >
              Explore Services
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-surface border-y border-white/5">
        <div className="max-w-5xl mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map(({ value, label }) => (
            <div key={label}>
              <div className="font-heading text-2xl sm:text-3xl font-bold text-accent">
                {value}
              </div>
              <div className="text-xs sm:text-sm text-white/40 mt-1 uppercase tracking-wider">
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-20 sm:py-28 bg-[#0F0D1A]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              What We Do
            </h2>
            <p className="text-white/50 max-w-xl mx-auto text-lg">
              From intimate private rooms to packed bar nights — we&apos;ve got
              the setup and the songs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map(({ icon, title, desc, href }) => (
              <Link
                key={title}
                href={href}
                className="group gradient-card rounded-2xl p-8 border border-white/5 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
              >
                <span className="text-4xl block mb-4">{icon}</span>
                <h3 className="font-heading text-xl font-bold text-white mb-2 group-hover:text-primary-light transition-colors">
                  {title}
                </h3>
                <p className="text-white/50 leading-relaxed">{desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 sm:py-28 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              What People Say
            </h2>
            <p className="text-white/50 max-w-xl mx-auto text-lg">
              Don&apos;t just take our word for it — hear from the venues and
              organizers we&apos;ve worked with.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map(({ quote, name, role }) => (
              <div
                key={name}
                className="gradient-card rounded-2xl p-8 border border-white/5 flex flex-col"
              >
                <div className="text-primary text-3xl mb-4">&ldquo;</div>
                <p className="text-white/70 leading-relaxed flex-1 italic">
                  {quote}
                </p>
                <div className="mt-6 pt-4 border-t border-white/5">
                  <div className="font-semibold text-white">{name}</div>
                  <div className="text-sm text-white/40">{role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/8 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Bring the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-neon-pink">
              House Down?
            </span>
          </h2>
          <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
            Whether it&apos;s a Tuesday bar night or a 200-person corporate
            blowout — let&apos;s make it legendary.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="px-8 py-4 rounded-full bg-accent text-black font-bold text-lg hover:bg-accent-light transition-all"
            >
              Book Now — Free Quote
            </Link>
            <a
              href="tel:5123871885"
              className="px-8 py-4 rounded-full border border-white/20 text-white font-semibold text-lg hover:bg-white/5 transition-all"
            >
              Call (512) 387-1885
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
