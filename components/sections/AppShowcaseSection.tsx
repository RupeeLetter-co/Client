"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import { Smartphone } from "lucide-react";

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
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    if (!carouselRef.current || window.innerWidth >= 640) return;
    const container = carouselRef.current;
    const scrollLeft = container.scrollLeft;
    const center = scrollLeft + container.clientWidth / 2;
    
    let closestIndex = activeIndex;
    let minDistance = Infinity;
    
    Array.from(container.children).forEach((child, index) => {
      const childCenter = (child as HTMLElement).offsetLeft + (child as HTMLElement).offsetWidth / 2;
      const distance = Math.abs(childCenter - center);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });
    
    if (closestIndex !== activeIndex) {
      setActiveIndex(closestIndex);
    }
  }, [activeIndex]);

  useEffect(() => {
    const isMobile = window.innerWidth < 640;
    if (!isMobile) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        const next = prev === APP_SCREENS.length - 1 ? 0 : prev + 1;
        if (carouselRef.current) {
           const container = carouselRef.current;
           const targetChild = container.children[next] as HTMLElement;
           if (targetChild) {
             const scrollTarget = targetChild.offsetLeft - container.clientWidth / 2 + targetChild.offsetWidth / 2;
             container.scrollTo({ left: scrollTarget, behavior: "smooth" });
           }
        }
        return next;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  const handleSelectIndex = (index: number) => {
    setActiveIndex(index);
    if (window.innerWidth < 640 && carouselRef.current) {
      const container = carouselRef.current;
      const targetChild = container.children[index] as HTMLElement;
      if (targetChild) {
        const scrollTarget = targetChild.offsetLeft - container.clientWidth / 2 + targetChild.offsetWidth / 2;
        container.scrollTo({ left: scrollTarget, behavior: "smooth" });
      }
    }
  };

  return (
    <section
      id="showcase"
      className="relative overflow-hidden py-10 sm:py-16 lg:py-20"
      aria-label="See RupeeLetter in action"
      style={{ backgroundColor: "#E54350" }}
    >
      <div className="relative mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 sm:gap-5 max-w-2xl mx-auto mb-10 sm:mb-16 px-4">
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
            ref={carouselRef}
            onScroll={handleScroll}
            className="flex sm:grid sm:grid-cols-2 lg:flex lg:flex-row items-center sm:justify-items-center justify-start sm:justify-center gap-6 sm:gap-12 lg:gap-6 px-[calc(50vw-100px)] sm:px-16 lg:px-4 py-8 overflow-x-auto sm:overflow-visible snap-x snap-mandatory scroll-smooth no-scrollbar w-full"
            role="list"
            aria-label="App screenshots"
          >
            {APP_SCREENS.map((screen, index) => (
              <div
                key={screen.id}
                role="listitem"
                className={`relative w-[200px] sm:w-[240px] lg:w-[260px] xl:w-[280px] h-[440px] sm:h-[480px] lg:h-[540px] xl:h-[600px] flex-shrink-0 snap-center transition-all duration-300 ${
                  index === activeIndex
                    ? "scale-105 z-10 opacity-100"
                    : "scale-95 opacity-50 sm:opacity-70"
                }`}
                onMouseEnter={() => window.innerWidth >= 640 && setActiveIndex(index)}
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
        <div className="flex flex-col items-center gap-3 mt-8 sm:mt-10 px-4">
          {/* Dots */}
          <div className="flex items-center gap-2 sm:gap-3">
            {APP_SCREENS.map((screen, index) => (
              <button
                key={screen.id}
                onMouseEnter={() => window.innerWidth >= 640 && setActiveIndex(index)}
                onClick={() => handleSelectIndex(index)}
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
      
      {/* Custom style to hide scrollbar */}
      <style dangerouslySetInnerHTML={{__html: `
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </section>
  );
}
