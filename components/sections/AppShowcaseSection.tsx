import { Smartphone } from "lucide-react";
import { SectionBadge } from "@/components/ui/section-badge";
import { PhoneMockup } from "@/components/ui/phone-mockup";

const APP_SCREENS = [
  {
    id: "screen-news",
    src: "/assets/app-screenshot-hero.png",
    alt: "RupeeLetter news feed with AI sentiment analysis",
  },
  {
    id: "screen-portfolio",
    src: "/assets/app-screen-portfolio.png",
    alt: "RupeeLetter watchlist and portfolio tracker",
  },
  {
    id: "screen-ai",
    src: "/assets/app-screen-ai.png",
    alt: "RupeeLetter AI trading assistant chat interface",
  },
];

export function AppShowcaseSection() {
  return (
    <section
      id="showcase"
      className="relative overflow-hidden py-20"
      aria-label="See RupeeLetter in action"
      style={{ backgroundColor: "#E8393A" }}
    >
      {/* Background decorative elements */}
      <div
        className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, white 0%, transparent 60%), radial-gradient(circle at 80% 20%, white 0%, transparent 50%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <SectionBadge
            icon={Smartphone}
            label="Screenshots"
            className="text-white/80 mb-4 justify-center"
          />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            See RupeeLetter in Action
          </h2>
          <p className="mt-4 text-base md:text-lg text-white/75 max-w-xl mx-auto leading-relaxed">
            Beautifully designed for clarity. Powerfully built for speed.
          </p>
        </div>

        {/* Phone mockups */}
        <div
          className="flex items-end justify-center gap-6 md:gap-8 lg:gap-10"
          role="list"
          aria-label="App screenshots"
        >
          {APP_SCREENS.map((screen, index) => (
            <div
              key={screen.id}
              role="listitem"
              className={
                index === 1
                  ? "translate-y-0 z-10 scale-110 drop-shadow-2xl"
                  : "translate-y-8 opacity-90"
              }
              style={{ transition: "transform 0.3s ease" }}
            >
              <PhoneMockup src={screen.src} alt={screen.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
