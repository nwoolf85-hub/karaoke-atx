"use client";

import { useState } from "react";
import Image from "next/image";

const categories = ["All", "Live Events", "Performers", "Setup"] as const;

type Category = (typeof categories)[number];

interface GalleryItem {
  id: number;
  src: string;
  category: Category;
  caption: string;
}

const galleryItems: GalleryItem[] = [
  { id: 1, src: "/gallery/img-3424.jpg", category: "Live Events", caption: "Packed house karaoke night" },
  { id: 2, src: "/gallery/img-3432.jpg", category: "Live Events", caption: "The crowd goes wild" },
  { id: 3, src: "/gallery/img-3433.jpg", category: "Setup", caption: "Professional sound setup" },
  { id: 4, src: "/gallery/img-3447.jpg", category: "Performers", caption: "Owning the stage" },
  { id: 5, src: "/gallery/img-3448.jpg", category: "Performers", caption: "Giving it everything" },
  { id: 6, src: "/gallery/img-3449.jpg", category: "Live Events", caption: "Austin energy" },
  { id: 7, src: "/gallery/img-3452.jpg", category: "Live Events", caption: "Karaoke ATX live" },
  { id: 8, src: "/gallery/img-3484.jpg", category: "Performers", caption: "Star of the show" },
  { id: 9, src: "/gallery/img-3485.jpg", category: "Live Events", caption: "Friday night vibes" },
  { id: 10, src: "/gallery/img-3486.jpg", category: "Setup", caption: "Sound check ready" },
  { id: 11, src: "/gallery/img-3487.jpg", category: "Performers", caption: "Singing their heart out" },
  { id: 12, src: "/gallery/img-3488.jpg", category: "Performers", caption: "The performer" },
  { id: 13, src: "/gallery/img-3489.jpg", category: "Live Events", caption: "Duet night" },
  { id: 14, src: "/gallery/img-3490.jpg", category: "Live Events", caption: "The whole room singing" },
  { id: 15, src: "/gallery/img-3491.jpg", category: "Setup", caption: "Lights and sound" },
  { id: 16, src: "/gallery/img-3492.jpg", category: "Live Events", caption: "Another unforgettable night" },
];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState<Category>("All");
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  const filtered =
    activeFilter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <>
      {/* Hero */}
      <section className="gradient-hero py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            The{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-neon-pink">
              Gallery
            </span>
          </h1>
          <p className="text-white/60 text-lg sm:text-xl max-w-2xl mx-auto">
            A look at the nights, the energy, and the moments that make Karaoke
            ATX unforgettable.
          </p>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-16 sm:py-24 bg-[#0F0D1A]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === cat
                    ? "bg-primary text-white"
                    : "bg-white/5 text-white/50 hover:text-white hover:bg-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {filtered.map((item) => (
              <div
                key={item.id}
                onClick={() => setLightbox(item)}
                className="group relative aspect-[3/4] rounded-xl overflow-hidden border border-white/5 hover:border-primary/30 transition-all cursor-pointer"
              >
                <Image
                  src={item.src}
                  alt={item.caption}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Caption on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="text-[10px] text-accent font-medium mb-0.5 uppercase tracking-wider">
                    {item.category}
                  </div>
                  <p className="text-white text-xs font-medium">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section className="py-16 sm:py-24 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
              See Michaux in Action
            </h2>
            <p className="text-white/50 max-w-xl mx-auto text-lg">
              Live music, professional sound, and the energy that makes every
              event unforgettable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                id: "vgOIpwW81HQ",
                title: "Deckhand Oyster Bar",
                desc: "Mobile Karaoke Night",
              },
              {
                id: "ykq1LVT9KOU",
                title: "Manchaca Springs Saloon",
                desc: "Mobile Karaoke Night",
              },
              {
                id: "fOufcpJjn5U",
                title: "Lonestar Jack's Grand Opening",
                desc: "Mobile Karaoke — Bee Cave",
              },
              {
                id: "q4kHWynAWH8",
                title: "Unity of Wimberley",
                desc: "Private Event Karaoke",
              },
              {
                id: "kMF40um7p7Y",
                title: "Private Birthday Party",
                desc: "Mobile Karaoke — Private Event",
              },
              {
                id: "UwDlQfsaLAo",
                title: "Private Karaoke Party Room",
                desc: "Austin, Texas",
              },
            ].map(({ id, title, desc }) => (
              <div
                key={id}
                className="gradient-card rounded-2xl border border-white/5 overflow-hidden"
              >
                <div className="relative aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${id}`}
                    title={title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-heading text-sm font-bold text-white mb-1">
                    {title}
                  </h3>
                  <p className="text-white/40 text-xs">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href="https://www.youtube.com/channel/UCZM7xxSm_3U4uhp9sjuZwnQ"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex px-6 py-3 rounded-full border border-white/10 text-white/60 hover:text-primary-light hover:border-primary/30 transition-all text-sm"
            >
              Watch More on YouTube ↗
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 text-white/60 hover:text-white text-3xl z-50"
          >
            &times;
          </button>
          <div className="relative max-w-lg w-full max-h-[85vh]" onClick={(e) => e.stopPropagation()}>
            <Image
              src={lightbox.src}
              alt={lightbox.caption}
              width={960}
              height={2079}
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
            />
            <div className="text-center mt-3">
              <p className="text-white text-sm font-medium">{lightbox.caption}</p>
              <p className="text-white/40 text-xs mt-1">{lightbox.category}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
