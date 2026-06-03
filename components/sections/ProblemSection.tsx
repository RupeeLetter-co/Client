import { AlertTriangle } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { ProblemCard } from "@/components/ui/problem-card";
import { PROBLEMS, SOLUTION_PILLS } from "@/constants/problems";
import { cn } from "@/lib/utils";

export function ProblemSection() {
  return (
    <section
      id="problem"
      className="bg-white section-padding"
      aria-label="The problem with retail trading"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <SectionHeader
          badge={{ icon: AlertTriangle, label: "The Problem" }}
          title={"Why Most Retail Traders Lose\nTime and Opportunities"}
          align="center"
          className="max-w-2xl mx-auto mb-14"
          titleClassName="whitespace-pre-line text-center"
        />

        {/* Problem cards grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          role="list"
          aria-label="Problems retail traders face"
        >
          {PROBLEMS.map((problem) => (
            <div key={problem.id} role="listitem">
              <ProblemCard problem={problem} />
            </div>
          ))}
        </div>

        {/* Solution pills */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          role="list"
          aria-label="How RupeeLetter solves these problems"
        >
          {SOLUTION_PILLS.map((pill) => {
            const Icon = pill.icon;
            return (
              <div
                key={pill.id}
                role="listitem"
                className={cn(
                  "flex flex-col items-center gap-3 rounded-2xl border border-border bg-surface p-5 text-center",
                  "transition-all duration-300 hover:shadow-sm hover:-translate-y-0.5"
                )}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10">
                  <Icon className="h-5 w-5 text-brand" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">{pill.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                    {pill.description}
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
