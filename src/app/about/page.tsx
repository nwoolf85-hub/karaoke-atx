import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Karaoke ATX",
  description:
    "Meet Michaux Clopton — recording engineer, live sound professional, and the force behind Austin's best karaoke experience. Fourth-generation South Austin.",
};

const credentials = [
  { icon: "🎛️", label: "Recording Engineer" },
  { icon: "🔊", label: "Live Sound Engineer" },
  { icon: "🎤", label: "Recording Artist" },
  { icon: "🎵", label: "Singer & Songwriter" },
  { icon: "🎬", label: "Producer" },
  { icon: "📍", label: "4th Gen South Austin" },
];

const timeline = [
  {
    year: "The Roots",
    title: "Fourth-Generation South Austin",
    desc: "Born and raised in South Austin — music has been in the family for generations. Not a transplant, not a hobbyist. This is home.",
  },
  {
    year: "The Craft",
    title: "Recording & Sound Engineering",
    desc: "Years behind the board at Etta Lane Studios honed an ear that most karaoke operators simply don't have. Every event sounds like a professional concert.",
  },
  {
    year: "The Vision",
    title: "Karaoke ATX Is Born",
    desc: "What started as a love of music and community became Austin's most in-demand karaoke experience — professional sound, massive song library, and genuine vibes.",
  },
  {
    year: "Today",
    title: "Austin's Go-To Karaoke",
    desc: "From packed bar nights to private parties, corporate events to intimate gatherings — Karaoke ATX is the name Austin trusts when the mic drops.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-accent/8 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Meet{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-neon-pink">
              Michaux
            </span>
          </h1>
          <p className="text-white/60 text-lg sm:text-xl max-w-2xl mx-auto">
            The recording engineer, live sound professional, and karaoke
            visionary behind Austin&apos;s best nights out.
          </p>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-16 sm:py-24 bg-[#0F0D1A]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Michaux Hero Photo — shown as portrait */}
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="/michaux-hero.jpeg"
                alt="Michaux Clopton — Karaoke ATX"
                width={1125}
                height={2436}
                className="w-full h-auto rounded-2xl"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6">
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-1">
                  Michaux Clopton
                </h2>
                <p className="text-accent text-sm font-medium tracking-wider uppercase">
                  Founder — Karaoke ATX
                </p>
              </div>
            </div>

            {/* Bio text */}
            <div className="gradient-card rounded-2xl border border-white/5 p-8 sm:p-10">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-6">
                Not Your Average Karaoke DJ
              </h2>
              <div className="space-y-5 text-white/60 text-base leading-relaxed">
                <p>
                  Most karaoke setups are a laptop, a cheap speaker, and a prayer.
                  Michaux Clopton is different — and you&apos;ll hear it from
                  the first note.
                </p>
                <p>
                  As a professional recording and live sound engineer, Michaux
                  brings studio-quality expertise to every single event. Running{" "}
                  <span className="text-white/80 font-medium">
                    Etta Lane Studios
                  </span>{" "}
                  and performing as a recording artist under his own name, he
                  knows what great audio sounds like — and he delivers it every
                  time.
                </p>
                <p>
                  A{" "}
                  <span className="text-accent font-medium">
                    fourth-generation South Austin resident
                  </span>
                  , Michaux isn&apos;t just working in Austin — he&apos;s part of
                  its fabric. That deep-rooted community connection shows in
                  every event: regulars who come back weekly, venues that credit
                  him with transforming their business, and a reputation built on
                  genuine warmth and professionalism.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Grid */}
      <section className="py-16 sm:py-24 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white text-center mb-12">
            The Credentials
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {/* DJ station photo — portrait format */}
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="/michaux-dj.jpeg"
                alt="Michaux at the DJ station"
                width={980}
                height={1272}
                className="w-full h-auto rounded-2xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-5">
                <p className="text-white/80 text-sm font-medium">Behind the board — where the magic happens</p>
              </div>
            </div>

            {/* Credentials grid next to photo */}
            <div className="grid grid-cols-2 gap-4 content-start">
              {credentials.map(({ icon, label }) => (
                <div
                  key={label}
                  className="gradient-card rounded-xl p-6 border border-white/5 text-center"
                >
                  <span className="text-3xl block mb-3">{icon}</span>
                  <span className="text-sm text-white/70 font-medium">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 hidden">
            {credentials.map(({ icon, label }) => (
              <div
                key={label}
                className="gradient-card rounded-xl p-6 border border-white/5 text-center"
              >
                <span className="text-3xl block mb-3">{icon}</span>
                <span className="text-sm text-white/70 font-medium">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 sm:py-24 bg-[#0F0D1A]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white text-center mb-16">
            The Journey
          </h2>

          <div className="relative">
            {/* Line */}
            <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-neon-pink" />

            <div className="space-y-12">
              {timeline.map(({ year, title, desc }) => (
                <div key={year} className="relative pl-12 sm:pl-16">
                  {/* Dot */}
                  <div className="absolute left-2.5 sm:left-4.5 top-1 w-3 h-3 rounded-full bg-primary border-2 border-primary-light" />

                  <div className="text-xs font-semibold text-accent uppercase tracking-wider mb-1">
                    {year}
                  </div>
                  <h3 className="font-heading text-xl font-bold text-white mb-2" style={{ lineHeight: 1.5, paddingBottom: '0.15em' }}>
                    {title}
                  </h3>
                  <p className="text-white/50 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Also Find Michaux */}
      <section className="py-16 sm:py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-heading text-2xl font-bold text-white mb-8">
            Also Find Michaux At
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { label: "Etta Lane Studios", href: "https://ettalane.com" },
              { label: "Michaux Music", href: "https://michauxmusic.com" },
              { label: "Michaux TV", href: "https://michaux.tv" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full border border-white/10 text-white/60 hover:text-primary-light hover:border-primary/30 transition-all text-sm"
              >
                {label} ↗
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 gradient-hero">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-6">
            Let&apos;s Work Together
          </h2>
          <p className="text-white/60 text-lg mb-8">
            Ready to bring professional karaoke to your next event?
          </p>
          <Link
            href="/book"
            className="inline-flex px-8 py-4 rounded-full bg-accent text-black font-bold text-lg hover:bg-accent-light transition-all"
          >
            Book Michaux →
          </Link>
        </div>
      </section>
    </>
  );
}
