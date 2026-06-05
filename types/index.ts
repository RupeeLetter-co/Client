import { type LucideIcon } from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
}

export interface FeatureItem {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  iconBg: string;
  iconColor: string;
}

export interface ProblemItem {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface SolutionPill {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface HowItWorksStep {
  id: string;
  number: string;
  title: string;
  description: string;
  color: string;
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
}

export interface FloatingStatCard {
  id: string;
  label: string;
  value: string;
  subValue?: string;
  badge?: string;
  badgeColor?: string;
}

export interface InvestorFeature {
  id: string;
  icon: LucideIcon;
  iconColor: string;
  iconBg?: string;
  title: string;
  description: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
  bio?: string;
  linkedin?: string;
  twitter?: string;
}

export interface AboutStat {
  id: string;
  value: string;
  label: string;
  description?: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  id: string;
  title: string;
  links: FooterLink[];
}

export interface SectionHeaderProps {
  badge?: {
    icon: LucideIcon;
    label: string;
  };
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
  titleClassName?: string;
}
