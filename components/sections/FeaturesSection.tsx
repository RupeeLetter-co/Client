import Image from "next/image";
import { LayoutGrid } from "lucide-react";
import { FEATURES } from "@/constants/features";

export function FeaturesSection() {
  // Left: Stock Analysis (2), Real-Time Market News (0), AI-Powered Insights (1)
  // Right: AI Trading Assistant (5), Personalized Feed (4), Smart Alerts (3)
  const leftFeatures = [FEATURES[2], FEATURES[0], FEATURES[1]];
  const rightFeatures = [FEATURES[5], FEATURES[4], FEATURES[3]];

  return (
    <section
      id="features"
      className="py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ backgroundColor: "#F9F8F6" }}
      aria-label="Product features"
    >
      <div className="mx-auto max-w-[1200px]">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 max-w-3xl mx-auto mb-10 lg:mb-14">
          <div className="inline-flex">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-red-100 bg-red-50 text-[#E8393A]">
              <LayoutGrid className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
              <span className="text-[12px] font-bold tracking-[0.12em] uppercase leading-none mt-[1px]">PRODUCT</span>
            </div>
          </div>
          
          <h2 className="text-[28px] md:text-[36px] lg:text-[42px] font-bold text-[#1A1A1A] leading-[1.2] tracking-tight">
            Everything You Need to Stay Ahead
          </h2>
          
          <p className="text-[14px] sm:text-[15px] text-[#5A5A5A] leading-[1.6] max-w-[600px]">
            RupeeLetter brings together real-time news, AI analysis, and your
            personalized watchlist in one seamless experience.
          </p>
        </div>

        {/* Content Layout */}
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-6 lg:gap-8 xl:gap-12 relative">
          
          {/* Left Cards */}
          <div className="w-full lg:flex-1 max-w-[340px] flex flex-col justify-center gap-4 order-2 lg:order-1">
            {leftFeatures.map((feature) => (
              <div 
                key={feature.id} 
                className="bg-white rounded-[20px] p-6 shadow-[0px_4px_24px_rgba(0,0,0,0.02)] border border-[#E8E6E1]"
              >
                <h3 className="text-[16px] font-bold text-[#1A1A1A] mb-2">{feature.title}</h3>
                <p className="text-[13px] text-[#5A5A5A] leading-[1.5]">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Center Phone Mockup (SVG Frame) */}
          <div className="w-full lg:flex-none lg:w-[260px] xl:w-[280px] order-1 lg:order-2 flex justify-center items-center relative z-10 shrink-0">
            <div className="relative w-full max-w-[240px] lg:max-w-full aspect-[19.5/40] mx-auto">
              {/* iPhone SVG Frame */}
              <svg
                viewBox="0 0 300 615"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 w-full h-full z-20 pointer-events-none drop-shadow-2xl"
              >
                <rect x="2" y="2" width="296" height="611" rx="42" stroke="#1A1A1A" strokeWidth="4" fill="transparent" />
                <rect x="10" y="10" width="280" height="595" rx="34" stroke="#1A1A1A" strokeWidth="6" fill="transparent" />
                <rect x="90" y="15" width="120" height="24" rx="12" fill="#1A1A1A" />
                <path d="M0 120H2V160H0V120Z" fill="#1A1A1A" />
                <path d="M0 180H2V240H0V180Z" fill="#1A1A1A" />
                <path d="M0 260H2V320H0V260Z" fill="#1A1A1A" />
                <path d="M298 180H300V260H298V180Z" fill="#1A1A1A" />
              </svg>
              {/* Screen Content */}
              <div className="absolute inset-0 z-10 px-[13px] py-[13px] overflow-hidden rounded-[40px] bg-white">
                <Image
                  src="/assets/app-screen-portfolio.png"
                  alt="RupeeLetter App Interface"
                  fill
                  className="w-full h-full object-cover rounded-[28px]"
                  sizes="(max-width: 768px) 240px, 280px"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right Cards */}
          <div className="w-full lg:flex-1 max-w-[340px] flex flex-col justify-center gap-4 order-3">
            {rightFeatures.map((feature) => (
              <div 
                key={feature.id} 
                className="bg-white rounded-[20px] p-6 shadow-[0px_4px_24px_rgba(0,0,0,0.02)] border border-[#E8E6E1]"
              >
                <h3 className="text-[16px] font-bold text-[#1A1A1A] mb-2">{feature.title}</h3>
                <p className="text-[13px] text-[#5A5A5A] leading-[1.5]">{feature.description}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
