import { type FooterSection } from "@/types";

export const FOOTER_SECTIONS: FooterSection[] = [
  {
    id: "product",
    title: "PRODUCT",
    links: [
      { label: "Features", href: "#features" },
      { label: "App Screenshots", href: "#screenshots" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "Why RupeeLetter", href: "#why-rupee-letter" },
    ],
  },
  {
    id: "company",
    title: "COMPANY",
    links: [
      { label: "About Us", href: "#about" },
      { label: "Team", href: "#team" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    id: "legal",
    title: "LEGAL",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Disclaimer", href: "/disclaimer" },
    ],
  },
];
