import { Package } from "lucide-react";
import { SectionBadge } from "@/components/ui/section-badge";
import { FeatureCard } from "@/components/ui/feature-card";
import { FEATURES } from "@/constants/features";

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="bg-surface py-20 px-6 lg:px-8"
      aria-label="Product features"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="flex flex-col gap-4 max-w-xl mb-14">
          <SectionBadge icon={Package} label="Product" />
          <h2 className="text-[36px] md:text-[42px] font-extrabold text-gray-900 leading-tight tracking-tight">
            Everything You Need
            <br />
            to Stay Ahead
          </h2>
          <p className="text-[15px] text-gray-500 leading-relaxed max-w-md">
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
