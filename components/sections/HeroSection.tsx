import Link from "next/link";
import Image from "next/image";
import { TrendingUp } from "lucide-react";
import { HERO_STATS } from "@/constants/stats";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-white"
      aria-label="Hero — Trade Smarter with AI"
    >
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 w-full pt-16 pb-6 sm:pt-28 sm:pb-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[460px_1fr] gap-8 lg:gap-12 items-center">
          {/* ── Left Column ── */}
          <div className="flex flex-col gap-5 sm:gap-6 text-center lg:text-left items-center lg:items-start mt-2 sm:mt-12 lg:mt-0">
            {/* Headline */}
            <h1 className="text-[40px] sm:text-[48px] md:text-[54px] lg:text-[62px] font-black text-gray-900 leading-[1.06] tracking-[-0.02em]">
              Trade <span className="text-brand">Smarter</span>
              <br />
              with AI
            </h1>

            {/* Subtitle */}
            <p className="text-[15px] sm:text-[16px] text-gray-500 leading-[1.65] max-w-[450px]">
              Get real-time market news, AI-powered stock insights, and
              personalized analysis - all in one app.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
              {/* Download App button */}
              <Link
                href="https://play.google.com/store/apps/details?id=com.rupeeletter.newsapp"
                target="_blank"
                rel="noopener noreferrer"
                id="hero-download-btn"
                className="inline-flex items-center gap-2.5 pl-6 pr-5 h-[50px] rounded-full bg-brand hover:bg-brand-dark text-white text-[15px] font-semibold transition-colors duration-200 shadow-sm w-full sm:w-auto justify-center"
              >
                Download App
                <Image
                  src="/assets/GooglePlayButton.svg"
                  alt=""
                  width={14}
                  height={16}
                  aria-hidden="true"
                />
              </Link>

              <Link
                href="#showcase"
                id="hero-demo-btn"
                className="inline-flex items-center gap-2 px-5 h-[50px] rounded-full border border-gray-300 bg-white hover:bg-gray-50 text-gray-800 text-[15px] font-medium transition-colors duration-200 w-full sm:w-auto justify-center"
              >
                <Image
                  src="/assets/play_circle.svg"
                  alt=""
                  width={20}
                  height={20}
                  aria-hidden="true"
                />
                See it in action
              </Link>
            </div>

            <div className="pt-2 w-full max-w-[450px]">
              <div className="border-t border-gray-200 pt-5">
                <div className="flex items-start justify-between gap-4">
                  {HERO_STATS.map((stat) => (
                    <div key={stat.id} className="flex flex-col gap-0.5 items-center lg:items-start">
                      <span className="text-[22px] sm:text-[26px] md:text-[28px] font-black text-gray-900 leading-tight tracking-tight">
                        {stat.value}
                      </span>
                      <span className="text-[11px] sm:text-[12.5px] text-gray-500 font-normal">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── Right Column — Phone Mockup + Floating Cards ── */}
          <div className="relative flex items-center justify-center lg:justify-end mt-4 sm:mt-8 lg:mt-0">
            <div
              className="relative w-[300px] h-[460px] sm:w-[400px] sm:h-[520px] md:w-[460px] md:h-[560px] lg:w-[500px] lg:h-[600px]"
              aria-hidden="false"
            >
              {/* ── Red rounded outline frame ── */}
              <div
                className="absolute z-0 rounded-[2.5rem] pointer-events-none inset-x-2 sm:inset-x-5 top-[30px] sm:top-[60px] lg:top-[70px] bottom-[30px] sm:bottom-[60px] lg:bottom-[70px]"
                style={{
                  border: "1.5px solid #E5435026",
                }}
                aria-hidden="true"
              >
              </div>

              {/* ── Nifty 50 card — top-right, outside phone ── */}
              <div
                className="absolute top-10 sm:top-28 -right-2 sm:-right-6 md:-right-8 lg:right-[-45px] z-20 bg-white rounded-xl sm:rounded-2xl border border-[#E8E6E1] p-2 sm:p-3 w-[95px] sm:w-[115px] animate-float"
                style={{
                  animationDelay: "0s",
                }}
                aria-label="Nifty 50 index"
              >
                <p className="text-[8px] sm:text-[10px] font-medium text-[#9A9A9A] tracking-wide">
                  Nifty 50
                </p>
                <p className="text-[14px] sm:text-[18px] font-bold text-[#0D9B8A] leading-tight mt-0.5">
                  24,386.70
                </p>
                <div className="flex items-center gap-1 mt-1 bg-[#E6F5EC] rounded-full px-2 py-0.5 w-fit">
                  <TrendingUp
                    className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-[#2A8C4E]"
                    aria-hidden="true"
                  />
                  <span className="text-[9px] sm:text-[11px] font-semibold text-[#2A8C4E]">
                    +1.42%
                  </span>
                </div>
              </div>

              {/* ── Main phone image — centred ── */}
              <div
                className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[400px] sm:w-[300px] sm:h-[460px] md:w-[340px] md:h-[510px] lg:w-[380px] lg:h-[560px]"
              >
                <Image
                  src="/assets/app-screenshot-hero.png"
                  alt="RupeeLetter app showing AI-curated market news"
                  className="object-contain"
                  fill
                  sizes="(max-width: 640px) 250px, (max-width: 768px) 300px, (max-width: 1024px) 340px, 380px"
                  priority
                  loading="eager"
                />
              </div>

              {/* ── News Processed card — bottom-left ── */}
              <div
                className="absolute bottom-20 sm:bottom-28 lg:bottom-30 -left-2 sm:-left-8 md:-left-12 lg:left-[-65px] z-20 bg-white rounded-xl sm:rounded-2xl border border-[#E8E6E1] px-2 sm:px-3 py-1.5 sm:py-2.5 w-[95px] sm:w-[120px] animate-float"
                style={{
                  animationDelay: "1.5s",
                }}
                aria-label="News processed today"
              >
                <p className="text-[8px] sm:text-[10px] text-[#9A9A9A] tracking-wide">
                  News Processed
                </p>
                <p className="text-[16px] sm:text-[20px] font-bold text-brand leading-tight mt-0.5">
                  2,400+
                </p>
                <p className="text-[8px] sm:text-[10px] text-[#9A9A9A] mt-0.5">
                  articles today
                </p>
              </div>

              {/* ── AI Confidence card — right side, vertically centred ── */}
              <div
                className="absolute top-[60%] sm:top-[65%] -right-2 sm:-right-6 md:-right-10 lg:right-[-60px] z-20 bg-white rounded-xl sm:rounded-2xl border border-[#E8E6E1] px-2 sm:px-3 py-1.5 sm:py-2.5 w-[85px] sm:w-[105px] animate-float"
                style={{
                  animationDelay: "0.8s",
                }}
                aria-label="AI confidence indicator"
              >
                <p className="text-[8px] sm:text-[10px] font-semibold text-[#9A9A9A] tracking-wide">
                  AI Confidence
                </p>
                <p className="text-[14px] sm:text-[18px] font-bold text-gray-900 leading-tight mt-0.5">
                  Bullish
                </p>
                <div className="mt-1.5 inline-flex px-1.5 sm:px-2 py-0.5 bg-[#FFF0F1] rounded-full">
                  <p className="text-[8px] sm:text-[10px] font-bold text-brand">HDFC Bank</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
