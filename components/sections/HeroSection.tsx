import Link from "next/link";
import Image from "next/image";
import { Play, Cpu, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionBadge } from "@/components/ui/section-badge";
import { HERO_STATS } from "@/constants/stats";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-white pt-16"
      aria-label="Hero — Trade Smarter with AI"
    >
      {/* Subtle background blobs */}
      <div
        className="absolute top-20 left-[-100px] w-[400px] h-[400px] rounded-full bg-red-50 blur-3xl opacity-50 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-20 right-[-80px] w-[350px] h-[350px] rounded-full bg-blue-50 blur-3xl opacity-40 pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8 w-full py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-16 items-center">
          {/* ── Left Column ── */}
          <div className="flex flex-col gap-7 max-w-[560px]">
            {/* Badge */}
            <div>
              <SectionBadge icon={Cpu} label="AI-Powered Market Intelligence" pill />
            </div>

            {/* Headline */}
            <div>
              <h1 className="text-[52px] md:text-[60px] lg:text-[64px] font-extrabold text-gray-900 leading-[1.08] tracking-tight">
                Trade <span className="text-brand">Smarter</span>
                <br />
                with AI
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-[16px] md:text-[17px] text-gray-500 leading-relaxed max-w-[420px]">
              Get real-time market news, AI-powered stock insights, and personalized
              analysis—all in one app.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
              <Link
                href="#download"
                id="hero-download-btn"
                className={cn(
                  "inline-flex items-center gap-2.5 px-6 h-[48px] rounded-full text-[15px] font-semibold text-white bg-brand hover:bg-brand-dark transition-all duration-200 shadow-md hover:shadow-lg hover:scale-[1.02]"
                )}
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
                className={cn(
                  "inline-flex items-center gap-2 px-5 h-[48px] rounded-full text-[15px] font-medium text-gray-700 border border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-all duration-200"
                )}
              >
                <div className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center flex-shrink-0">
                  <Play className="h-3 w-3 text-gray-600 fill-gray-600 ml-0.5" aria-hidden="true" />
                </div>
                See it in action
              </Link>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-0 pt-2">
              {HERO_STATS.map((stat, index) => (
                <div key={stat.id} className="flex items-center">
                  <div className="flex flex-col pr-6 first:pl-0">
                    <span className="text-[26px] font-extrabold text-gray-900 leading-tight">
                      {stat.value}
                    </span>
                    <span className="text-[12px] text-gray-500 mt-0.5">{stat.label}</span>
                  </div>
                  {index < HERO_STATS.length - 1 && (
                    <div className="h-10 w-px bg-gray-200 mr-6" aria-hidden="true" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* ── Right Column — Phone Mockup ── */}
          <div className="relative flex items-center justify-center lg:justify-end flex-shrink-0">
            {/* Floating Nifty card — top right */}
            <div
              className="absolute top-4 right-0 lg:-right-2 z-20 bg-white rounded-2xl shadow-lg border border-gray-100 p-3 min-w-[120px] animate-float"
              aria-label="Nifty 50 index card"
              style={{ animationDelay: "0s" }}
            >
              <p className="text-[9px] text-gray-500 font-medium tracking-wide uppercase">Nifty 50</p>
              <p className="text-[18px] font-extrabold text-gray-900 leading-tight">24,386.70</p>
              <div className="flex items-center gap-1 mt-0.5">
                <TrendingUp className="h-3 w-3 text-emerald-500" aria-hidden="true" />
                <span className="text-[11px] font-semibold text-emerald-500">+1.42%</span>
              </div>
            </div>

            {/* Main phone mockup */}
            <div className="relative z-10 w-[270px] md:w-[290px] lg:w-[310px] flex-shrink-0">
              <div className="relative rounded-[2.8rem] border-[7px] border-gray-900 bg-gray-900 shadow-2xl overflow-hidden aspect-[9/19]">
                {/* Dynamic island */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10 w-24 h-6 bg-gray-900 rounded-b-2xl" />
                <div className="relative w-full h-full overflow-hidden rounded-[2.4rem]">
                  <Image
                    src="/assets/app-screenshot-hero.png"
                    alt="RupeeLetter app showing latest market news with AI sentiment analysis"
                    fill
                    className="object-cover object-top"
                    priority
                    sizes="(max-width: 768px) 270px, (max-width: 1024px) 290px, 310px"
                  />
                </div>
              </div>
            </div>

            {/* Floating News Processed card — bottom left of phone */}
            <div
              className="absolute bottom-10 left-0 lg:-left-4 z-20 bg-white rounded-2xl shadow-lg border border-gray-100 p-3 min-w-[130px] animate-float"
              aria-label="News processed today"
              style={{ animationDelay: "1.5s" }}
            >
              <p className="text-[9px] text-gray-500 font-medium tracking-wide uppercase">News Processed</p>
              <p className="text-[20px] font-extrabold text-gray-900 leading-tight">2,400+</p>
              <p className="text-[10px] text-gray-400">articles today</p>
            </div>

            {/* Floating AI Confidence card — bottom right */}
            <div
              className="absolute bottom-4 right-0 lg:-right-2 z-20 bg-white rounded-2xl shadow-lg border border-gray-100 p-3 min-w-[120px] animate-float"
              aria-label="AI confidence indicator"
              style={{ animationDelay: "0.75s" }}
            >
              <p className="text-[9px] text-gray-500 font-medium tracking-wide uppercase">AI Confidence</p>
              <p className="text-[15px] font-bold text-gray-900">Bullish</p>
              <div className="mt-1 px-2 py-0.5 bg-red-100 rounded-full inline-block">
                <p className="text-[10px] font-semibold text-brand">HDFC Bank</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
