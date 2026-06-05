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
        "group flex flex-col gap-6 rounded-2xl border border-gray-100 bg-white p-7",
        "transition-all duration-300 hover:shadow-sm hover:-translate-y-0.5 hover:border-gray-200",
        "h-full",
        className
      )}
    >
      {/* Icon box */}
      <div
        className={cn(
          "inline-flex h-11 w-11 items-center justify-center rounded-[14px] flex-shrink-0",
          iconBg
        )}
        aria-hidden="true"
      >
        <Icon className={cn("h-5 w-5", iconColor)} strokeWidth={2.25} />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2">
        <h3 className="text-[16px] font-bold text-gray-900 leading-snug tracking-tight">{title}</h3>
        <p className="text-[14px] text-gray-500 leading-[1.6]">
          {description}
        </p>
      </div>
    </div>
  );
}
