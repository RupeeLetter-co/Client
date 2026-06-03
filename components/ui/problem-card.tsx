import { cn } from "@/lib/utils";
import { type ProblemItem } from "@/types";

interface ProblemCardProps {
  problem: ProblemItem;
  className?: string;
}

export function ProblemCard({ problem, className }: ProblemCardProps) {
  const { number, title, description } = problem;

  return (
    <div
      className={cn(
        "group flex flex-col gap-4 rounded-2xl border border-border bg-card p-6",
        "transition-all duration-300 hover:shadow-md hover:-translate-y-0.5",
        className
      )}
    >
      {/* Number */}
      <span
        className="text-5xl font-extrabold text-brand leading-none"
        aria-label={`Problem ${number}`}
      >
        {number}
      </span>

      {/* Divider */}
      <div className="h-px w-full bg-border" aria-hidden="true" />

      {/* Content */}
      <div className="flex flex-col gap-2">
        <h3 className="text-base font-semibold text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
