"use client";

import { useState } from "react";
import type { Metadata } from "next";

const categories = ["All", "Bar Nights", "Private Events", "Corporate", "Private Room"] as const;

type Category = (typeof categories)[number];

interface GalleryItem {
  id: number;
  category: Category;
  caption: string;
  color: string;
}

// Placeholder gallery items — replace with real photos
const galleryItems: GalleryItem[] = [
  { id: 1, category: "Bar Nights", caption: "Deckhand Oyster Bar — Packed house karaoke night", color: "from-primary/30 to-neon-pink/20" },
  { id: 2, category: "Bar Nights", caption: "Manchaca Springs Saloon — Saturday night vibes", color: "from-accent/30 to-primary/20" },
  { id: 3, category: "Private Events", caption: "Birthday party — 30 guests singing their hearts out", color: "from-neon-blue/30 to-primary/20" },
  { id: 4, category: "Private Events", caption: "Quinceañera celebration with full sound setup", color: "from-neon-pink/30 to-accent/20" },
  { id: 5, category: "Corporate", caption: "Tech company holiday party — team building done right", color: "from-primary/30 to-neon-blue/20" },
  { id: 6, category: "Corporate", caption: "Product launch after-party karaoke", color: "from-accent/30 to-neon-green/20" },
  { id: 7, category: "Private Room", caption: "VIP room — intimate birthday celebration", color: "from-neon-pink/30 to-primary/20" },
  { id: 8, category: "Private Room", caption: "Date night in the soundproof suite", color: "from-primary/30 to-accent/20" },
  { id: 9, category: "Bar Nights", caption: "Lonestar Jack's BBQ — Bee Cave karaoke night", color: "from-neon-green/30 to-primary/20" },
  { id: 10, category: "Private Events", caption: "Wedding reception — first dance then karaoke", color: "from-accent/30 to-neon-pink/20" },
  { id: 11, category: "Bar Nights", caption: "Lago Vista lakeside venue — outdoor karaoke", color: "from-neon-blue/30 to-accent/20" },
  { id: 12, category: "Corporate", caption: "End of year celebration — 100+ employees", color: "from-primary/30 to-accent/20" },
];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState<Category>("All");

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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map(({ id, caption, color, category }) => (
              <div
                key={id}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/5 hover:border-primary/30 transition-all cursor-pointer"
              >
                {/* Placeholder gradient — replace with real images */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${color} flex items-center justify-center`}
                >
                  <span className="text-6xl opacity-30">🎤</span>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="text-xs text-accent font-medium mb-1">
                    {category}
                  </div>
                  <p className="text-white text-sm font-medium">{caption}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Note */}
          <div className="text-center mt-12">
            <p className="text-white/30 text-sm">
              Photo gallery coming soon — follow us on Instagram for the latest.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
