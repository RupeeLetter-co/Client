import { cn } from "@/lib/utils";

interface GradientDividerProps {
  className?: string;
}

export function GradientDivider({ className }: GradientDividerProps) {
  return (
    <div
      role="presentation"
      aria-hidden="true"
      className={cn("h-1 w-full rounded-full", className)}
      style={{
        background:
          "linear-gradient(to right, #E8393A 0%, #3B82F6 33%, #10B981 66%, #F59E0B 100%)",
      }}
    />
  );
}
