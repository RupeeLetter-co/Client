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
        "group relative flex flex-col gap-6 rounded-3xl border border-gray-100 bg-[#FAFAFA] p-7 pt-8 overflow-hidden",
        "transition-all duration-300 hover:shadow-sm hover:-translate-y-0.5",
        "h-full",
        className
      )}
    >
      {/* Top Accent */}
      <div className="absolute top-0 inset-x-0 h-[3px] bg-[#E8393A]" aria-hidden="true" />

      {/* Number */}
      <span
        className="text-[42px] font-black text-[#E8393A] leading-none tracking-tight"
        aria-label={`Problem ${number}`}
      >
        {number}
      </span>

      {/* Content */}
      <div className="flex flex-col gap-2.5">
        <h3 className="text-[17px] font-bold text-gray-900 leading-snug tracking-tight">{title}</h3>
        <p className="text-[14px] text-gray-500 leading-[1.65]">
          {description}
        </p>
      </div>
    </div>
  );
}
