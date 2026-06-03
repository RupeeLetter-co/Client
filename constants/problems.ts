import { BarChart3, Zap, MessageSquare, Bell } from "lucide-react";
import { type ProblemItem, type SolutionPill } from "@/types";

export const PROBLEMS: ProblemItem[] = [
  {
    id: "information-overload",
    number: "01",
    title: "Information Overload",
    description:
      "Hundreds of news articles daily pour in from dozens of sources. It's impossible to read everything that matters to your portfolio.",
  },
  {
    id: "slow-research",
    number: "02",
    title: "Slow Research",
    description:
      "Analyzing company updates, earnings reports, and market developments takes hours of manual effort every single day.",
  },
  {
    id: "missed-opportunities",
    number: "03",
    title: "Missed Opportunities",
    description:
      "Important market events often go unnoticed until it's too late. By the time you hear the news, the market has already moved.",
  },
];

export const SOLUTION_PILLS: SolutionPill[] = [
  {
    id: "ai-stock-analysis",
    icon: BarChart3,
    title: "AI Stock Analysis",
    description: "Deep, instant analysis of any stock you follow.",
  },
  {
    id: "fast-news-summaries",
    icon: Zap,
    title: "Fast News Summaries",
    description: "Get the key points in 30 seconds, not 30 minutes.",
  },
  {
    id: "ai-trading-assistant",
    icon: MessageSquare,
    title: "AI Trading Assistant",
    description: "Your intelligent market companion, available 24/7.",
  },
  {
    id: "smart-alerts",
    icon: Bell,
    title: "Smart Alerts",
    description: "Personalized alerts so you never miss what matters.",
  },
];
