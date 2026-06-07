import { LayoutGrid } from "lucide-react";
import { FeatureCard } from "@/components/ui/feature-card";
import { FEATURES } from "@/constants/features";

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="bg-surface py-12 sm:py-16 lg:py-20 px-6 lg:px-8"
      aria-label="Product features"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="flex flex-col gap-5 max-w-2xl mb-16">
          <div className="inline-flex">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-red-100 bg-red-50 text-brand">
              <LayoutGrid className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
              <span className="text-[13px] font-bold tracking-[0.12em] uppercase leading-none mt-[1px]">PRODUCT</span>
            </div>
          </div>
          
          <h2 className="text-[38px] md:text-[44px] lg:text-[48px] font-bold text-gray-900 leading-[1.1] tracking-tight">
            Everything You Need
            <br />
            to Stay Ahead
          </h2>
          
          <p className="text-[15px] text-gray-500 leading-[1.65] max-w-[480px]">
            RupeeLetter brings together real-time news, AI analysis, and your
            personalized watchlist in one seamless experience.
          </p>
        </div>

        {/* Feature Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          role="list"
          aria-label="Product features list"
        >
          {FEATURES.map((feature) => (
            <div key={feature.id} role="listitem">
              <FeatureCard feature={feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
