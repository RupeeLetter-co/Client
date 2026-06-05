import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface SectionBadgeProps {
  icon: LucideIcon;
  label: string;
  className?: string;
  /** When true renders as a pill badge (hero style), otherwise renders as plain label (section style) */
  pill?: boolean;
}

export function SectionBadge({ icon: Icon, label, className, pill = false }: SectionBadgeProps) {
  if (pill) {
    return (
      <div
        className={cn(
          "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full",
          "bg-amber-50 border border-amber-200",
          "text-[11.5px] font-semibold text-amber-700",
          className
        )}
      >
        <Icon className="w-3.5 h-3.5 flex-shrink-0 text-amber-500" aria-hidden="true" />
        <span>{label}</span>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 text-[11px] font-bold tracking-[0.12em] uppercase",
        "text-brand",
        className
      )}
    >
      <Icon className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true" />
      <span>{label}</span>
    </div>
  );
}
