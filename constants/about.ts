import { CheckCircle2, Shield, Zap, Globe } from "lucide-react";
import { type InvestorFeature, type AboutStat } from "@/types";

export const INVESTOR_FEATURES: InvestorFeature[] = [
  {
    id: "always-updated",
    icon: Zap,
    iconColor: "text-red-500",
    title: "Always Up-to-Date",
    description:
      "News and analysis refreshed in real time so you're always working with the latest information.",
  },
  {
    id: "personalized",
    icon: CheckCircle2,
    iconColor: "text-emerald-500",
    title: "Fully Personalized",
    description:
      "Your watchlist, your sectors, your preferences—RupeeLetter adapts entirely to you.",
  },
  {
    id: "secure",
    icon: Shield,
    iconColor: "text-blue-500",
    title: "Private & Secure",
    description:
      "Your data stays yours. We never sell personal information or share trading behavior.",
  },
  {
    id: "multi-market",
    icon: Globe,
    iconColor: "text-amber-500",
    title: "NSE, BSE & Global",
    description:
      "Coverage across NSE, BSE, US markets, commodities, and forex—all in one place.",
  },
];

export const ABOUT_STATS: AboutStat[] = [
  {
    id: "news-sources",
    value: "50+",
    label: "News Sources",
    description: "Curated financial media outlets",
  },
  {
    id: "news-processed",
    value: "2,400+",
    label: "Articles/Day",
    description: "News processed every 24 hours",
  },
  {
    id: "analysis-speed",
    value: "5s",
    label: "AI Analysis Speed",
    description: "Average time to generate full analysis",
  },
  {
    id: "accuracy",
    value: "94%",
    label: "Sentiment Accuracy",
    description: "Validated against market movements",
  },
];
