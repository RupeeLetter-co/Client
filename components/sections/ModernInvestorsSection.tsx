import { Users } from "lucide-react";
import { INVESTOR_FEATURES } from "@/constants/about";
import { cn } from "@/lib/utils";

export function ModernInvestorsSection() {
  return (
    <section
      id="investors"
      className="bg-white py-24 px-6 lg:px-8"
      aria-label="Built for modern investors"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-0 items-start">
          {/* Left: Header */}
          <div className="lg:col-span-5 flex flex-col items-start gap-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-red-100 bg-red-50 text-brand">
              <Users className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true" />
              <span className="text-[11px] font-bold tracking-[0.12em] uppercase leading-none mt-[1px]">FOR INVESTORS</span>
            </div>
            
            <h2 className="text-[40px] md:text-[46px] lg:text-[52px] text-gray-900 leading-[1.1] tracking-tight max-w-[420px]">
              Built for Modern Investors
            </h2>
            
            <p className="text-[16px] text-gray-500 leading-[1.7] max-w-[400px]">
              Whether you're a casual investor or a serious trader, RupeeLetter gives you the intelligence edge you need.
            </p>
          </div>

          {/* Right: Feature list */}
          <div
            className="lg:col-span-6 lg:col-start-7 flex flex-col gap-10 lg:pt-2"
            role="list"
            aria-label="Features for modern investors"
          >
            {INVESTOR_FEATURES.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.id}
                  role="listitem"
                  className="flex items-start gap-6"
                >
                  {/* Icon */}
                  <div
                    className={cn(
                      "flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-[16px]",
                      feature.iconBg
                    )}
                    aria-hidden="true"
                  >
                    <Icon className={cn("h-5 w-5", feature.iconColor)} strokeWidth={2.25} />
                  </div>

                  {/* Text */}
                  <div className="flex flex-col gap-2 pt-1">
                    <h3 className="text-[16px] font-bold text-gray-900 leading-snug">
                      {feature.title}
                    </h3>
                    <p className="text-[14.5px] text-gray-500 leading-[1.65]">
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
