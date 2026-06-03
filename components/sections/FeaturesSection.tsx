import { Package } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { FeatureCard } from "@/components/ui/feature-card";
import { FEATURES } from "@/constants/features";

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="bg-surface section-padding"
      aria-label="Product features"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <SectionHeader
          badge={{ icon: Package, label: "Product" }}
          title={"Everything You Need\nto Stay Ahead"}
          subtitle="RupeeLetter brings together real-time news, AI analysis, and your personalized watchlist in one seamless experience."
          align="left"
          className="max-w-xl mb-12"
          titleClassName="whitespace-pre-line"
        />

        {/* Feature Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
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
