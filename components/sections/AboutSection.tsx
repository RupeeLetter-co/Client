import Link from "next/link";
import { Info } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
import { ABOUT_STATS } from "@/constants/about";

export function AboutSection() {
  return (
    <section
      id="about"
      className="bg-surface section-padding"
      aria-label="About RupeeLetter AI"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left column */}
          <div className="flex flex-col gap-8">
            <SectionHeader
              badge={{ icon: Info, label: "About Us" }}
              title="About RupeeLetter AI"
              subtitle="Simplifying financial information for every Indian investor."
              align="left"
              className="max-w-md"
            />

            <p className="text-base text-muted-foreground leading-relaxed">
              RupeeLetter was born from a simple frustration: investing in the Indian
              stock market shouldn't require hours of daily research. We built an AI
              system that reads thousands of news articles, earnings reports, and market
              updates—so you don't have to.
            </p>

            <p className="text-base text-muted-foreground leading-relaxed">
              Our platform uses large language models fine-tuned specifically for Indian
              financial markets to deliver accurate, timely, and actionable intelligence
              directly to your phone.
            </p>

            <Link
              href="#download"
              id="about-download-btn"
              className={cn(
                buttonVariants(),
                "w-fit bg-brand hover:bg-brand-dark text-white rounded-full px-7"
              )}
            >
              Download the App
            </Link>
          </div>

          {/* Right column — stat cards */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
            role="list"
            aria-label="RupeeLetter statistics"
          >
            {ABOUT_STATS.map((stat) => (
              <div
                key={stat.id}
                role="listitem"
                className="flex flex-col gap-2 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
              >
                <span className="text-3xl font-extrabold text-brand">{stat.value}</span>
                <span className="text-sm font-semibold text-foreground">{stat.label}</span>
                {stat.description && (
                  <span className="text-xs text-muted-foreground">{stat.description}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
