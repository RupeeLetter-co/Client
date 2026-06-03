import { cn } from "@/lib/utils";
import Image from "next/image";

interface PhoneMockupProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

export function PhoneMockup({ src, alt, className, priority = false }: PhoneMockupProps) {
  return (
    <div
      className={cn(
        "relative flex-shrink-0",
        "w-[200px] md:w-[220px] lg:w-[240px]",
        className
      )}
      aria-label={alt}
    >
      {/* Phone frame */}
      <div
        className={cn(
          "relative rounded-[2.5rem] border-[6px] border-gray-800 bg-gray-800",
          "shadow-2xl overflow-hidden",
          "aspect-[9/19]"
        )}
      >
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10 w-24 h-5 bg-gray-800 rounded-b-2xl" />

        {/* Screen content */}
        <div className="relative w-full h-full overflow-hidden rounded-[2rem]">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 200px, (max-width: 1024px) 220px, 240px"
            priority={priority}
          />
        </div>
      </div>
    </div>
  );
}
