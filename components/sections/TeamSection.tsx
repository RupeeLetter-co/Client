import { Heart } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { TeamCard } from "@/components/ui/team-card";
import { TEAM_MEMBERS } from "@/constants/team";

export function TeamSection() {
  return (
    <section
      id="team"
      className="bg-white section-padding"
      aria-label="Our team"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <SectionHeader
          badge={{ icon: Heart, label: "Our Team" }}
          title={"Built by a Team Passionate About\nFinance & Technology"}
          align="center"
          className="max-w-3xl mx-auto mb-14"
          titleClassName="whitespace-pre-line text-center"
        />

        {/* Team cards grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          role="list"
          aria-label="Team members"
        >
          {TEAM_MEMBERS.map((member) => (
            <div key={member.id} role="listitem">
              <TeamCard member={member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
