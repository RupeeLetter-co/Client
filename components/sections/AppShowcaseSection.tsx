import Image from "next/image";
import { Smartphone } from "lucide-react";

const APP_SCREENS = [
  {
    id: "screen-news",
    src: "/assets/app-screenshot-hero.png",
    alt: "RupeeLetter news feed",
  },
  {
    id: "screen-portfolio",
    src: "/assets/app-screen-portfolio.png",
    alt: "RupeeLetter watchlist and portfolio tracker",
  },
  {
    id: "screen-ai",
    src: "/assets/app-screen-ai.png",
    alt: "RupeeLetter AI trading assistant",
  },
  {
    id: "screen-events",
    src: "/assets/app-screen-today's-event.png",
    alt: "RupeeLetter today's events",
  },
];

export function AppShowcaseSection() {
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
              <Smartphone className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true" />
              <span className="text-[11px] font-bold tracking-[0.12em] uppercase leading-none mt-[1px]">APP PREVIEW</span>
            </div>
          </div>
          
          <h2 className="text-[38px] md:text-[44px] lg:text-[48px] font-black text-white leading-[1.1] tracking-tight">
            See RupeeLetter in Action
          </h2>
          <p className="text-[15px] text-white/90 leading-[1.65] max-w-md mx-auto">
            A closer look at the screens that are changing how retail investors stay informed.
          </p>
        </div>

        {/* Screenshots layout */}
        <div
          className="flex flex-col md:flex-row items-center justify-center gap-6"
          role="list"
          aria-label="App screenshots"
        >
          {APP_SCREENS.map((screen) => (
            <div key={screen.id} role="listitem" className="relative w-[280px] h-[600px] flex-shrink-0">
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
    </section>
  );
}
