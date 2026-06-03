import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface SectionBadgeProps {
  icon: LucideIcon;
  label: string;
  className?: string;
}

export function SectionBadge({ icon: Icon, label, className }: SectionBadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase",
        "text-brand",
        className
      )}
    >
      <Icon className="w-3.5 h-3.5" aria-hidden="true" />
      <span>{label}</span>
    </div>
  );
}
