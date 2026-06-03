import { cn } from "@/lib/utils";
import { type TeamMember } from "@/types";
import { X, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface TeamCardProps {
  member: TeamMember;
  className?: string;
}

export function TeamCard({ member, className }: TeamCardProps) {
  const { name, role, avatar, bio, linkedin, twitter } = member;

  return (
    <div
      className={cn(
        "group flex flex-col items-center gap-4 rounded-2xl border border-border bg-card p-6 text-center",
        "transition-all duration-300 hover:shadow-md hover:-translate-y-0.5",
        className
      )}
    >
      {/* Avatar */}
      <div className="relative h-20 w-20 overflow-hidden rounded-full border-2 border-brand/20">
        <Image
          src={avatar}
          alt={`Photo of ${name}`}
          fill
          className="object-cover"
          sizes="80px"
        />
      </div>

      {/* Info */}
      <div className="flex flex-col gap-1">
        <h3 className="text-base font-semibold text-foreground">{name}</h3>
        <span className="text-sm font-medium text-brand">{role}</span>
      </div>

      {/* Bio */}
      {bio && (
        <p className="text-sm text-muted-foreground leading-relaxed">{bio}</p>
      )}

      {/* Social Links */}
      {(linkedin || twitter) && (
        <div className="flex items-center gap-3 mt-auto">
          {linkedin && (
            <Link
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${name} on LinkedIn`}
              className="text-muted-foreground hover:text-brand transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
            </Link>
          )}
          {twitter && (
            <Link
              href={twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${name} on X (Twitter)`}
              className="text-muted-foreground hover:text-brand transition-colors"
            >
              <X className="h-4 w-4" />
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
