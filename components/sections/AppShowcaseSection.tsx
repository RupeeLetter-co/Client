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
      className="relative overflow-hidden py-16 sm:py-20"
      aria-label="See RupeeLetter in action"
      style={{ backgroundColor: "#E54350" }}
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 sm:gap-5 max-w-2xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/20 bg-white/10 text-white">
              <Smartphone className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
              <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.12em] uppercase leading-none mt-[1px]">APP PREVIEW</span>
            </div>
          </div>
          
          <h2 className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[48px] font-black text-white leading-[1.1] tracking-tight">
            See RupeeLetter in Action
          </h2>
          <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[16px] text-white/90 leading-[1.65] max-w-md mx-auto">
            A closer look at the screens that are changing how retail investors stay informed.
          </p>
        </div>

        {/* Screenshots layout with navigation */}
        <div className="relative">

          {/* Screenshots visible on all devices */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-row items-center justify-items-center justify-center gap-8 sm:gap-12 lg:gap-6 px-10 sm:px-16 lg:px-4"
            role="list"
            aria-label="App screenshots"
          >
            {APP_SCREENS.map((screen, index) => (
              <div
                key={screen.id}
                role="listitem"
                className={`relative w-[200px] lg:w-[260px] xl:w-[280px] h-[440px] lg:h-[540px] xl:h-[600px] flex-shrink-0 transition-all duration-300 ${
                  index === activeIndex
                    ? "scale-105 z-10"
                    : "scale-95 opacity-70"
                }`}
                onMouseEnter={() => setActiveIndex(index)}
                onTouchStart={() => setActiveIndex(index)}
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
                  sizes="(max-width: 1024px) 200px, (max-width: 1280px) 260px, 280px"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots + Labels */}
        <div className="flex flex-col items-center gap-3 mt-8 sm:mt-10">
          {/* Dots */}
          <div className="flex items-center gap-2 sm:gap-3">
            {APP_SCREENS.map((screen, index) => (
              <button
                key={screen.id}
                onMouseEnter={() => setActiveIndex(index)}
                onTouchStart={() => setActiveIndex(index)}
                className={`rounded-full transition-all duration-300 outline-none ${
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
          <p className="text-xs sm:text-sm font-semibold text-white/90 tracking-wide uppercase">
            {APP_SCREENS[activeIndex].label}
          </p>
        </div>
      </div>
    </section>
  );
}
