import { SlidersHorizontal } from "lucide-react";
import { HOW_IT_WORKS_STEPS } from "@/constants/how-it-works";
import { cn } from "@/lib/utils";

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="bg-surface py-20 px-6 lg:px-8"
      aria-label="How RupeeLetter works"
    >
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 max-w-2xl mx-auto mb-16">
          <div className="inline-flex">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-red-100 bg-red-50 text-brand">
              <SlidersHorizontal className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true" />
              <span className="text-[11px] font-bold tracking-[0.12em] uppercase leading-none mt-[1px]">HOW IT WORKS</span>
            </div>
          </div>
          
          <h2 className="text-[32px] md:text-[36px] text-gray-900 leading-tight tracking-tight">
            Simple. Fast. Powerful.
          </h2>
          <p className="text-[14px] text-gray-500 leading-relaxed">
            Four steps that transform how you make financial decisions.
          </p>
        </div>

        {/* Steps Timeline */}
        <div className="relative flex flex-col md:flex-row justify-between w-full max-w-4xl mx-auto gap-8 md:gap-0">
          {HOW_IT_WORKS_STEPS.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === HOW_IT_WORKS_STEPS.length - 1;

            return (
              <div
                key={step.id}
                className="relative flex flex-col items-center flex-1 text-center"
              >
                {/* Connector line (desktop only) */}
                {!isLast && (
                  <div
                    className={cn(
                      "hidden md:block absolute top-6 left-[50%] w-full h-[1.5px] bg-gradient-to-r",
                      step.lineColor
                    )}
                    aria-hidden="true"
                  />
                )}

                {/* Step Icon Circle */}
                <div
                  className={cn(
                    "relative z-10 flex h-12 w-12 items-center justify-center rounded-full flex-shrink-0",
                    step.iconBg
                  )}
                >
                  <Icon className={cn("h-5 w-5", step.iconColor)} strokeWidth={2.25} aria-hidden="true" />
                </div>

                {/* Content */}
                <div className="flex flex-col items-center mt-5 gap-1.5 px-2">
                  <h3 className="text-[15px] font-bold text-gray-900 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-[13px] text-gray-500 leading-relaxed max-w-[190px]">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
