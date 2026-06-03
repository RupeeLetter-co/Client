import { BarChart2 } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { GradientDivider } from "@/components/ui/gradient-divider";
import { HOW_IT_WORKS_STEPS } from "@/constants/how-it-works";
import { cn } from "@/lib/utils";

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="bg-surface section-padding"
      aria-label="How RupeeLetter works"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <SectionHeader
          badge={{ icon: BarChart2, label: "How It Works" }}
          title="Simple. Fast. Powerful."
          subtitle="Four steps that transform how you make financial decisions."
          align="center"
          className="max-w-2xl mx-auto mb-12"
          titleClassName="text-center"
        />

        {/* Gradient divider */}
        <GradientDivider className="mb-16 max-w-3xl mx-auto" />

        {/* Steps */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          role="list"
          aria-label="Steps to get started with RupeeLetter"
        >
          {HOW_IT_WORKS_STEPS.map((step, index) => (
            <div
              key={step.id}
              role="listitem"
              className="relative flex flex-col gap-4"
            >
              {/* Step number */}
              <div className="flex items-center gap-4">
                <span
                  className="text-4xl font-extrabold leading-none"
                  style={{ color: step.color }}
                  aria-label={`Step ${step.number}`}
                >
                  {step.number}
                </span>

                {/* Connector line (desktop only) */}
                {index < HOW_IT_WORKS_STEPS.length - 1 && (
                  <div
                    className="hidden lg:block flex-1 h-px bg-border"
                    aria-hidden="true"
                  />
                )}
              </div>

              {/* Content */}
              <div className="flex flex-col gap-2">
                <h3 className="text-base font-semibold text-foreground">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Color accent line */}
              <div
                className={cn("h-0.5 w-10 rounded-full")}
                style={{ backgroundColor: step.color }}
                aria-hidden="true"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
