import { cn } from "@/lib/utils";
import { type FeatureItem } from "@/types";

interface FeatureCardProps {
  feature: FeatureItem;
  className?: string;
}

export function FeatureCard({ feature, className }: FeatureCardProps) {
  const { icon: Icon, title, description, iconBg, iconColor } = feature;

  return (
    <div
      className={cn(
        "group flex flex-col gap-4 rounded-2xl border border-border bg-card p-6",
        "transition-all duration-300 hover:shadow-md hover:-translate-y-0.5",
        className
      )}
    >
      {/* Icon box */}
      <div
        className={cn(
          "inline-flex h-11 w-11 items-center justify-center rounded-xl",
          iconBg
        )}
        aria-hidden="true"
      >
        <Icon className={cn("h-5 w-5", iconColor)} />
      </div>

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
