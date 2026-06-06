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
      <div className="relative mx-auto max-w-6xl px-6 lg:px-8 w-full py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[460px_1fr] gap-10 lg:gap-12 items-center">
          {/* ── Left Column ── */}
          <div className="flex flex-col gap-6">
            {/* Headline */}
            <h1 className="text-[52px] md:text-[58px] lg:text-[62px] font-black text-gray-900 leading-[1.06] tracking-[-0.02em] font-bold">
              Trade <span className="text-brand">Smarter</span>
              <br />
              with AI
            </h1>

            {/* Subtitle */}
            <p className="text-[16px] text-gray-500 leading-[1.65] max-w-[450px]">
              Get real-time market news, AI-powered stock insights, and
              personalized analysis - all in one app.
            </p>

            {/* CTAs */}
            <div className="flex flex-row items-center gap-3 flex-wrap">
              {/* Download App button */}
              <Link
                href="https://play.google.com/store/apps/details?id=com.rupeeletter.newsapp"
                target="_blank"
                rel="noopener noreferrer"
                id="hero-download-btn"
                className="inline-flex items-center gap-2.5 pl-6 pr-5 h-[50px] rounded-full bg-brand hover:bg-brand-dark text-white text-[15px] font-semibold transition-colors duration-200 shadow-sm"
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
                className="inline-flex items-center gap-2 px-5 h-[50px] rounded-full border border-gray-300 bg-white hover:bg-gray-50 text-gray-800 text-[15px] font-medium transition-colors duration-200"
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

            <div className="pt-2">
              <div className="border-t border-gray-200 pt-5">
                <div className="flex items-start justify-between">
                  {HERO_STATS.map((stat) => (
                    <div key={stat.id} className="flex flex-col gap-0.5">
                      <span className="text-[28px] font-black text-gray-900 leading-tight tracking-tight font-bold">
                        {stat.value}
                      </span>
                      <span className="text-[12.5px] text-gray-500 font-normal">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── Right Column — Phone Mockup + Floating Cards ── */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div
              className="relative"
              style={{ width: 500, height: 600 }}
              aria-hidden="false"
            >
              {/* ── Red rounded outline frame ── */}
              <div
                className="absolute z-0 rounded-[2.5rem] pointer-events-none"
                style={{
                  border: "1.5px solid #E5435026",
                  top: "70px",
                  left: "20px",
                  right: "20px",
                  bottom: "70px",
                }}
                aria-hidden="true"
              >
              </div>

              {/* ── Nifty 50 card — top-right, outside phone ── */}
              <div
                className="absolute top-28 right-[-45] z-20 bg-white rounded-2xl border border-[#E8E6E1] p-3 w-[115px] animate-float"
                style={{
                  animationDelay: "0s",
                }}
                aria-label="Nifty 50 index"
              >
                <p className="text-[10px] font-medium text-[#9A9A9A] tracking-wide">
                  Nifty 50
                </p>
                <p className="text-[18px] font-bold text-[#0D9B8A] leading-tight mt-0.5">
                  24,386.70
                </p>
                <div className="flex items-center gap-1 mt-1 bg-[#E6F5EC] rounded-full px-2 py-0.5 w-fit">
                  <TrendingUp
                    className="h-3 w-3 text-[#2A8C4E]"
                    aria-hidden="true"
                  />
                  <span className="text-[11px] font-semibold text-[#2A8C4E]">
                    +1.42%
                  </span>
                </div>
              </div>

              {/* ── Main phone image — centred ── */}
              <div
                className="absolute z-10"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <Image
                  src="/assets/app-screenshot-hero.png"
                  alt="RupeeLetter app showing AI-curated market news"
                  width={380}
                  height={560}
                  className="object-contain"
                  priority
                />
              </div>

              {/* ── News Processed card — bottom-left ── */}
              <div
                className="absolute bottom-30 left-[-65] z-20 bg-white rounded-2xl border border-[#E8E6E1] px-3 py-2.5 w-[120px] animate-float"
                style={{
                  animationDelay: "1.5s",
                }}
                aria-label="News processed today"
              >
                <p className="text-[10px] text-[#9A9A9A] tracking-wide">
                  News Processed
                </p>
                <p className="text-[20px] font-bold text-brand leading-tight mt-0.5">
                  2,400+
                </p>
                <p className="text-[10px] text-[#9A9A9A] mt-0.5">
                  articles today
                </p>
              </div>

              {/* ── AI Confidence card — right side, vertically centred ── */}
              <div
                className="absolute right-[-60] z-20 bg-white rounded-2xl border border-[#E8E6E1] px-3 py-2.5 w-[105px] animate-float"
                style={{
                  top: "65%",
                  animationDelay: "0.8s",
                }}
                aria-label="AI confidence indicator"
              >
                <p className="text-[10px] font-semibold text-[#9A9A9A] tracking-wide">
                  AI Confidence
                </p>
                <p className="text-[18px] font-bold text-gray-900 leading-tight mt-0.5">
                  Bullish
                </p>
                <div className="mt-1.5 inline-flex px-2 py-0.5 bg-[#FFF0F1] rounded-full">
                  <p className="text-[10px] font-bold text-brand">HDFC Bank</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
