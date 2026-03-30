import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — Karaoke ATX",
  description:
    "Mobile karaoke for bars & restaurants, private karaoke room, corporate events, and private party packages in Austin, TX.",
};

const services = [
  {
    id: "mobile",
    icon: "🎶",
    title: "Mobile Karaoke",
    tagline: "We Bring the Party to You",
    description:
      "Transform any venue into the hottest karaoke spot in Austin. Our professional mobile setup includes state-of-the-art sound equipment, wireless microphones, disco lighting, and a dedicated sound engineer — everything needed for an incredible karaoke experience.",
    features: [
      "Professional PA system & wireless mics",
      "50,000+ song library (updated daily)",
      "Dedicated sound engineer / KJ",
      "Disco & ambient lighting package",
      "Custom song request system",
      "Setup & teardown included",
    ],
    ideal: "Bars, restaurants, breweries, and outdoor venues looking to pack the house on slow nights.",
    cta: "Book Mobile Karaoke",
  },
  {
    id: "private-room",
    icon: "🎙️",
    title: "Private Karaoke Room",
    tagline: "Your Own Stage, Your Own Rules",
    description:
      "Step into our soundproof karaoke suite — a state-of-the-art private room that seats up to 50 guests. Premium sound system, disco lighting, and a massive song library make this the ultimate private karaoke experience in Austin.",
    features: [
      "Soundproof studio-quality room",
      "Seating for up to 50 guests",
      "Professional sound system",
      "Disco & mood lighting",
      "50,000+ song library",
      "Sound engineer on-site",
    ],
    ideal: "Friend groups, date nights, birthday parties, and anyone who wants the VIP karaoke experience.",
    cta: "Book the Room",
  },
  {
    id: "corporate",
    icon: "🏢",
    title: "Corporate Events",
    tagline: "Team Building That Actually Doesn't Suck",
    description:
      "Forget trust falls and awkward icebreakers. Karaoke breaks down walls faster than any team-building exercise on the market. We handle everything so your team can focus on having the time of their lives.",
    features: [
      "Full event coordination",
      "Custom song lists & themes",
      "Professional MC/host available",
      "On-site or at your venue",
      "Catering coordination available",
      "Audio/visual packages for presentations",
    ],
    ideal: "Company parties, holiday events, product launches, team offsites, and celebrations.",
    cta: "Plan Your Corporate Event",
  },
  {
    id: "parties",
    icon: "🎉",
    title: "Private Parties",
    tagline: "Make It a Night to Remember",
    description:
      "Birthdays, weddings, quinceañeras, graduations, retirement parties — whatever the occasion, karaoke makes it unforgettable. We bring professional sound and energy to your celebration, anywhere in the Austin area.",
    features: [
      "Flexible packages for any budget",
      "Indoor or outdoor events",
      "Professional sound & lighting",
      "Bilingual song library",
      "Customizable playlists",
      "Food catering available",
    ],
    ideal: "Birthdays, weddings, quinceañeras, graduations, anniversaries, and any celebration worth singing about.",
    cta: "Plan Your Party",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-accent">
              Services
            </span>
          </h1>
          <p className="text-white/60 text-lg sm:text-xl max-w-2xl mx-auto">
            From packed bar nights to intimate private sessions — we bring
            professional karaoke entertainment wherever Austin needs it.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 sm:py-24 bg-[#0F0D1A]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {services.map(({ id, icon, title, tagline, description, features, ideal, cta }, i) => (
            <div
              key={id}
              id={id}
              className="scroll-mt-24 gradient-card rounded-2xl border border-white/5 overflow-hidden"
            >
              <div className="p-8 sm:p-10 lg:p-12">
                <div className="flex items-start gap-4 mb-6">
                  <span className="text-5xl">{icon}</span>
                  <div>
                    <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white">
                      {title}
                    </h2>
                    <p className="text-primary-light text-sm font-medium mt-1">
                      {tagline}
                    </p>
                  </div>
                </div>

                <p className="text-white/60 text-lg leading-relaxed mb-8">
                  {description}
                </p>

                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3 mb-8">
                  {features.map((f) => (
                    <div key={f} className="flex items-start gap-2">
                      <span className="text-accent mt-0.5">✦</span>
                      <span className="text-white/70 text-sm">{f}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-white/5 rounded-xl p-5 mb-8">
                  <p className="text-sm text-white/50">
                    <span className="font-semibold text-white/70">
                      Ideal for:{" "}
                    </span>
                    {ideal}
                  </p>
                </div>

                <Link
                  href="/book"
                  className="inline-flex px-6 py-3 rounded-full bg-primary text-white font-semibold hover:bg-primary-dark transition-all"
                >
                  {cta} →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Song Library Callout */}
      <section className="py-16 sm:py-24 bg-surface">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="animated-border p-10 sm:p-14">
            <div className="text-6xl mb-6">🎵</div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
              50,000+ Songs & Counting
            </h2>
            <p className="text-white/60 text-lg max-w-xl mx-auto mb-2">
              From classic rock to reggaeton, country to K-pop — our library has
              something for everyone and gets updated daily.
            </p>
            <p className="text-accent text-sm font-medium">
              Can&apos;t find your song? Request it and we&apos;ll add it.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 gradient-hero">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-6">
            Let&apos;s Make It Happen
          </h2>
          <p className="text-white/60 text-lg mb-8">
            Get a free quote for your event — no commitment, no pressure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="px-8 py-4 rounded-full bg-accent text-black font-bold text-lg hover:bg-accent-light transition-all"
            >
              Get a Free Quote
            </Link>
            <a
              href="tel:5123871885"
              className="px-8 py-4 rounded-full border border-white/20 text-white font-semibold text-lg hover:bg-white/5 transition-all"
            >
              (512) 387-1885
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
