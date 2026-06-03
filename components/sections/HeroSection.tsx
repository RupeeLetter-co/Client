import Link from "next/link";
import Image from "next/image";
import { Play, TrendingUp, Cpu } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
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
        className="absolute top-20 left-[-100px] w-[400px] h-[400px] rounded-full bg-red-50 blur-3xl opacity-60 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-20 right-[-100px] w-[350px] h-[350px] rounded-full bg-blue-50 blur-3xl opacity-50 pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8 w-full py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* ── Left Column ── */}
          <div className="flex flex-col gap-8">
            {/* Badge */}
            <SectionBadge icon={Cpu} label="AI-Powered Market Intelligence" />

            {/* Headline */}
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground leading-[1.05] tracking-tight">
                Trade <span className="text-brand">Smarter</span>
                <br />
                with AI
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-md">
              Get real-time market news, AI-powered stock insights, and personalized
              analysis—all in one app.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link
                href="#download"
                id="hero-download-btn"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "bg-brand hover:bg-brand-dark text-white rounded-full px-7 h-12 text-base font-semibold",
                  "shadow-lg transition-all duration-300 hover:scale-[1.02]"
                )}
              >
                Download App
                <Play className="ml-2 h-4 w-4 fill-current" aria-hidden="true" />
              </Link>

              <Link
                href="#showcase"
                id="hero-demo-btn"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "rounded-full px-7 h-12 text-base font-medium border-foreground/20 hover:border-foreground/40 transition-all duration-300"
                )}
              >
                <Play className="mr-2 h-4 w-4" aria-hidden="true" />
                See it in action
              </Link>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 pt-4">
              {HERO_STATS.map((stat, index) => (
                <div key={stat.id} className="flex items-center gap-6">
                  <div className="flex flex-col">
                    <span className="text-2xl font-extrabold text-foreground">
                      {stat.value}
                    </span>
                    <span className="text-xs text-muted-foreground">{stat.label}</span>
                  </div>
                  {index < HERO_STATS.length - 1 && (
                    <div className="h-8 w-px bg-border" aria-hidden="true" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* ── Right Column — Phone Mockup ── */}
          <div className="relative flex items-center justify-center lg:justify-end">
            {/* Floating Nifty card — top right */}
            <div
              className="absolute top-0 right-0 lg:right-8 z-20 bg-white rounded-2xl shadow-lg border border-border p-3 min-w-[130px] animate-float"
              aria-label="Nifty 50 index card"
              style={{ animationDelay: "0s" }}
            >
              <p className="text-[10px] text-muted-foreground font-medium">Nifty 50</p>
              <p className="text-lg font-extrabold text-foreground">24,386.70</p>
              <div className="flex items-center gap-1 mt-0.5">
                <TrendingUp className="h-3 w-3 text-emerald-500" aria-hidden="true" />
                <span className="text-xs font-semibold text-emerald-500">+1.42%</span>
              </div>
            </div>

            {/* Main phone mockup */}
            <div className="relative z-10 w-[260px] md:w-[280px] lg:w-[300px] flex-shrink-0">
              <div className="relative rounded-[3rem] border-[8px] border-gray-900 bg-gray-900 shadow-2xl overflow-hidden aspect-[9/19]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10 w-28 h-6 bg-gray-900 rounded-b-2xl" />
                <div className="relative w-full h-full overflow-hidden rounded-[2.5rem]">
                  <Image
                    src="/assets/app-screenshot-hero.png"
                    alt="RupeeLetter app showing latest market news with AI sentiment analysis"
                    fill
                    className="object-cover object-top"
                    priority
                    sizes="(max-width: 768px) 260px, (max-width: 1024px) 280px, 300px"
                  />
                </div>
              </div>
            </div>

            {/* Floating News Processed card — bottom left */}
            <div
              className="absolute bottom-8 left-4 lg:left-0 z-20 bg-white rounded-2xl shadow-lg border border-border p-3 min-w-[140px] animate-float"
              aria-label="News processed today"
              style={{ animationDelay: "1.5s" }}
            >
              <p className="text-[10px] text-muted-foreground font-medium">News Processed</p>
              <p className="text-xl font-extrabold text-foreground">2,400+</p>
              <p className="text-[10px] text-muted-foreground">articles today</p>
            </div>

            {/* Floating AI Confidence card — bottom right */}
            <div
              className="absolute bottom-4 right-0 lg:-right-4 z-20 bg-white rounded-2xl shadow-lg border border-border p-3 min-w-[130px] animate-float"
              aria-label="AI confidence indicator"
              style={{ animationDelay: "0.75s" }}
            >
              <p className="text-[10px] text-muted-foreground font-medium">AI Confidence</p>
              <p className="text-base font-bold text-foreground">Bullish</p>
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
