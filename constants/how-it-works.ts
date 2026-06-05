import { type ReactNode } from "react";
import { Eye, Newspaper, BrainCircuit, Check } from "lucide-react";
import { type HowItWorksStep } from "@/types";

export const HOW_IT_WORKS_STEPS = [
  {
    id: "track-stocks",
    icon: Eye,
    title: "Track Stocks",
    description:
      "Add stocks to your personal watchlist and tell us what you care about.",
    iconBg: "bg-red-50",
    iconColor: "text-brand",
    lineColor: "from-brand to-amber-500",
  },
  {
    id: "get-news",
    icon: Newspaper,
    title: "Get News",
    description:
      "We aggregate and summarize news relevant to your portfolio in real time.",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-500",
    lineColor: "from-amber-500 to-teal-500",
  },
  {
    id: "ai-analyzes",
    icon: BrainCircuit,
    title: "AI Analyzes Impact",
    description:
      "Our AI evaluates the news and explains what it means for your specific holdings.",
    iconBg: "bg-teal-50",
    iconColor: "text-teal-500",
    lineColor: "from-teal-500 to-emerald-500",
  },
  {
    id: "make-decisions",
    icon: Check,
    title: "Make Better Decisions",
    description:
      "Act confidently with AI-backed clarity instead of gut feel or incomplete data.",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-500",
    lineColor: "",
  },
];
