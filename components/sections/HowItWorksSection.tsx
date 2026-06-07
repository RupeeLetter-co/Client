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
              <SlidersHorizontal className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
              <span className="text-[13px] font-bold tracking-[0.12em] uppercase leading-none mt-[1px]">HOW IT WORKS</span>
            </div>
          </div>
          
          <h2 className="text-[32px] sm:text-[38px] md:text-[42px] font-black text-gray-900 leading-tight tracking-tight">
            Simple. Fast. Powerful.
          </h2>
          <p className="text-[14px] sm:text-[16px] md:text-[18px] text-gray-500 leading-relaxed">
            Four steps that transform how you make financial decisions.
          </p>
        </div>

        {/* Steps Timeline */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 md:flex md:flex-row justify-between w-full max-w-4xl mx-auto gap-10 md:gap-0">
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
                    "relative z-10 flex h-14 w-14 sm:h-16 sm:w-16 md:h-12 md:w-12 items-center justify-center rounded-full flex-shrink-0",
                    step.iconBg
                  )}
                >
                  <Icon className={cn("h-6 w-6 sm:h-7 sm:w-7 md:h-5 md:w-5", step.iconColor)} strokeWidth={2.25} aria-hidden="true" />
                </div>

                {/* Content */}
                <div className="flex flex-col items-center mt-5 sm:mt-6 md:mt-5 gap-2 px-2">
                  <h3 className="text-[16px] sm:text-[18px] md:text-[15px] font-bold text-gray-900 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-[14px] sm:text-[15px] md:text-[13px] text-gray-500 leading-relaxed max-w-[220px] sm:max-w-[260px] md:max-w-[190px]">
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
