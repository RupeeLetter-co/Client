import {
  Newspaper,
  Bot,
  TrendingUp,
  Bell,
  Bookmark,
  MessageSquare,
} from "lucide-react";
import { type FeatureItem } from "@/types";

export const FEATURES: FeatureItem[] = [
  {
    id: "real-time-news",
    icon: Newspaper,
    title: "Real-Time Market News",
    description:
      "Stay ahead with breaking market news curated from 50+ sources, summarized in 30 seconds or less.",
    iconBg: "bg-red-50",
    iconColor: "text-red-500",
  },
  {
    id: "ai-powered-insights",
    icon: Bot,
    title: "AI-Powered Insights",
    description:
      "Our AI explains the market impact of every news event in plain language—no financial jargon.",
    iconBg: "bg-teal-50",
    iconColor: "text-teal-500",
  },
  {
    id: "stock-analysis",
    icon: TrendingUp,
    title: "Stock Analysis",
    description:
      "Deep AI analysis for every stock in your watchlist—sentiment, technicals, and key events.",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-500",
  },
  {
    id: "smart-alerts",
    icon: Bell,
    title: "Smart Alerts",
    description:
      "Get notified about events that matter to your portfolio—before it's too late to act.",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-500",
  },
  {
    id: "personalized-feed",
    icon: Bookmark,
    title: "Personalized Feed",
    description:
      "Your feed adapts to your watchlist and interests. See only what matters to you.",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-500",
  },
  {
    id: "ai-trading-assistant",
    icon: MessageSquare,
    title: "AI Trading Assistant",
    description:
      "Ask any market question and get intelligent, context-aware answers instantly.",
    iconBg: "bg-rose-50",
    iconColor: "text-rose-500",
  },
];
