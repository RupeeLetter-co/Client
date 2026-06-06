"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { Smartphone, ChevronLeft, ChevronRight } from "lucide-react";

const APP_SCREENS = [
  {
    id: "screen-news",
    src: "/assets/app-screenshot-hero.png",
    alt: "RupeeLetter news feed",
    label: "News Feed",
  },
  {
    id: "screen-portfolio",
    src: "/assets/app-screen-portfolio.png",
    alt: "RupeeLetter watchlist and portfolio tracker",
    label: "Portfolio",
  },
  {
    id: "screen-ai",
    src: "/assets/app-screen-ai.png",
    alt: "RupeeLetter AI trading assistant",
    label: "AI Assistant",
  },
  {
    id: "screen-events",
    src: "/assets/app-screen-today's-event.png",
    alt: "RupeeLetter today's events",
    label: "Today's Events",
  },
];

export function AppShowcaseSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrev = useCallback(() => {
    setActiveIndex((prev) => (prev === 0 ? APP_SCREENS.length - 1 : prev - 1));
  }, []);

  const goToNext = useCallback(() => {
    setActiveIndex((prev) => (prev === APP_SCREENS.length - 1 ? 0 : prev + 1));
  }, []);

  return (
    <section
      id="showcase"
      className="relative overflow-hidden py-20"
      aria-label="See RupeeLetter in action"
      style={{ backgroundColor: "#E54350" }}
    >
      <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-5 max-w-2xl mx-auto mb-16">
          <div className="inline-flex">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/20 bg-white/10 text-white">
              <Smartphone className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
              <span className="text-[13px] font-bold tracking-[0.12em] uppercase leading-none mt-[1px]">APP PREVIEW</span>
            </div>
          </div>
          
          <h2 className="text-[38px] md:text-[44px] lg:text-[48px] font-black text-white leading-[1.1] tracking-tight">
            See RupeeLetter in Action
          </h2>
          <p className="text-[15px] text-white/90 leading-[1.65] max-w-md mx-auto">
            A closer look at the screens that are changing how retail investors stay informed.
          </p>
        </div>

        {/* Screenshots layout with navigation */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/35 hover:border-white/50 hover:scale-110 transition-all duration-200 shadow-lg shadow-black/10 -translate-x-2 md:-translate-x-4"
            aria-label="Previous screen"
          >
            <ChevronLeft className="w-6 h-6 md:w-7 md:h-7" strokeWidth={2.5} />
          </button>

          {/* Right Arrow */}
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/35 hover:border-white/50 hover:scale-110 transition-all duration-200 shadow-lg shadow-black/10 translate-x-2 md:translate-x-4"
            aria-label="Next screen"
          >
            <ChevronRight className="w-6 h-6 md:w-7 md:h-7" strokeWidth={2.5} />
          </button>

          {/* Screenshots */}
          <div
            className="flex flex-col md:flex-row items-center justify-center gap-6 px-10 md:px-16"
            role="list"
            aria-label="App screenshots"
          >
            {APP_SCREENS.map((screen, index) => (
              <div
                key={screen.id}
                role="listitem"
                className={`relative w-[280px] h-[600px] flex-shrink-0 transition-all duration-300 ${
                  index === activeIndex
                    ? "scale-105 z-10"
                    : "scale-95 opacity-70"
                }`}
                onMouseEnter={() => setActiveIndex(index)}
              >
                {/* Active highlight ring */}
                {index === activeIndex && (
                  <div className="absolute -inset-2 rounded-[2.5rem] border-2 border-white/40 pointer-events-none" />
                )}
                <Image
                  src={screen.src}
                  alt={screen.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 280px"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots + Labels */}
        <div className="flex flex-col items-center gap-3 mt-10">
          {/* Dots */}
          <div className="flex items-center gap-3">
            {APP_SCREENS.map((screen, index) => (
              <button
                key={screen.id}
                onMouseEnter={() => setActiveIndex(index)}
                className={`rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "w-8 h-3 bg-white"
                    : "w-3 h-3 bg-white/35 hover:bg-white/55"
                }`}
                aria-label={`View ${screen.label}`}
                aria-current={index === activeIndex ? "true" : undefined}
              />
            ))}
          </div>
          {/* Active Label */}
          <p className="text-sm font-semibold text-white/90 tracking-wide uppercase">
            {APP_SCREENS[activeIndex].label}
          </p>
        </div>
      </div>
    </section>
  );
}
