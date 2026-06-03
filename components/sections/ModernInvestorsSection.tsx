import { Users } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { INVESTOR_FEATURES } from "@/constants/about";
import { cn } from "@/lib/utils";

export function ModernInvestorsSection() {
  return (
    <section
      id="investors"
      className="bg-white section-padding"
      aria-label="Built for modern investors"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Header */}
          <SectionHeader
            badge={{ icon: Users, label: "For Investors" }}
            title="Built for Modern Investors"
            subtitle="Whether you're a casual investor or a serious trader, RupeeLetter gives you the intelligence edge you need."
            align="left"
            className="max-w-md"
          />

          {/* Right: Feature list */}
          <div
            className="flex flex-col gap-6"
            role="list"
            aria-label="Features for modern investors"
          >
            {INVESTOR_FEATURES.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.id}
                  role="listitem"
                  className={cn(
                    "group flex items-start gap-4 p-4 rounded-2xl",
                    "transition-all duration-200 hover:bg-surface"
                  )}
                >
                  {/* Icon */}
                  <div
                    className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-xl bg-surface group-hover:scale-105 transition-transform duration-200"
                    aria-hidden="true"
                  >
                    <Icon className={cn("h-5 w-5", feature.iconColor)} />
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="text-sm font-semibold text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
