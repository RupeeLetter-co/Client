import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionBadge } from "@/components/ui/section-badge";

interface SectionHeaderProps {
  badge?: {
    icon: LucideIcon;
    label: string;
  };
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

export function SectionHeader({
  badge,
  title,
  subtitle,
  align = "left",
  className,
  titleClassName,
  subtitleClassName,
}: SectionHeaderProps) {
  const alignClass = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  }[align];

  return (
    <div className={cn("flex flex-col gap-4", alignClass, className)}>
      {badge && <SectionBadge icon={badge.icon} label={badge.label} />}
      <h2
        className={cn(
          "text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight",
          titleClassName
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed",
            align === "center" && "mx-auto",
            subtitleClassName
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
