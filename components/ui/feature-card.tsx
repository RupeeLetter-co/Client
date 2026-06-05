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
        "group flex flex-col gap-5 rounded-2xl border border-gray-200 bg-white p-6",
        "transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 hover:border-gray-300",
        "min-h-[180px]",
        className
      )}
    >
      {/* Icon box */}
      <div
        className={cn(
          "inline-flex h-10 w-10 items-center justify-center rounded-xl flex-shrink-0",
          iconBg
        )}
        aria-hidden="true"
      >
        <Icon className={cn("h-5 w-5", iconColor)} />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-1.5">
        <h3 className="text-[15px] font-semibold text-gray-900 leading-snug">{title}</h3>
        <p className="text-[13.5px] text-gray-500 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
