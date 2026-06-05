import { AlertTriangle } from "lucide-react";
import { ProblemCard } from "@/components/ui/problem-card";
import { PROBLEMS, SOLUTION_PILLS } from "@/constants/problems";
import { cn } from "@/lib/utils";

export function ProblemSection() {
  return (
    <section
      id="problem"
      className="bg-white py-20 px-6 lg:px-8"
      aria-label="The problem with retail trading"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-5 max-w-3xl mx-auto mb-16">
          <div className="inline-flex">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-red-100 bg-red-50 text-brand">
              <AlertTriangle className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true" />
              <span className="text-[11px] font-bold tracking-[0.12em] uppercase leading-none mt-[1px]">THE PROBLEM</span>
            </div>
          </div>
          
          <h2 className="text-[38px] md:text-[42px] lg:text-[46px] text-gray-900 leading-[1.1] tracking-tight whitespace-pre-line">
            {"Why Most Retail Traders Lose\nTime and Opportunities"}
          </h2>
        </div>

        {/* Problem cards grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
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
                  "flex flex-col items-center gap-4 rounded-2xl border border-gray-100 bg-[#FAFAFA] p-6 text-center",
                  "transition-all duration-300 hover:shadow-sm hover:-translate-y-0.5",
                  "h-full"
                )}
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-[14px] bg-red-50 flex-shrink-0">
                  <Icon className="h-5 w-5 text-[#E8393A]" strokeWidth={2.25} aria-hidden="true" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-[15px] font-bold text-gray-900 leading-snug tracking-tight">{pill.title}</h3>
                  <p className="text-[13px] text-gray-500 leading-relaxed">
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
