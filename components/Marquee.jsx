"use client";

import { useRef } from "react";

const items = [
  "SEARCH",
  "ANALYTICS",
  "TRACKING",
  "REAL-TIME",
  "LEADS",
  "CONVERSIONS",
  "SCROLL DEPTH",
  "HEATMAPS",
];

export default function MarqueeGlider({ className, id }) {
  const marqueeRef = useRef(null);

  return (
    <section
      // id="marquee-section"
      // className="relative h-[10vh] w-full bg-black overflow-hidden"
    >
      {/* THIS IS THE DIV THAT WILL BE PINNED */}
      <div
        // id="marquee-wrapper"
        id={id}
        ref={marqueeRef}
        className={className}
      >
        <div
          id="marquee-track"
          className="flex gap-24 text-4xl font-bold whitespace-nowrap px-10"
        >
          {[...items, ...items, ...items].map((item, i) => (
            <div
              key={i}
              className="text-cyan-400"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}