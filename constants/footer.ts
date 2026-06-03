import { type FooterSection } from "@/types";

export const FOOTER_SECTIONS: FooterSection[] = [
  {
    id: "product",
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "Pricing", href: "#pricing" },
      { label: "Download App", href: "#download" },
    ],
  },
  {
    id: "company",
    title: "Company",
    links: [
      { label: "About Us", href: "#about" },
      { label: "Team", href: "#team" },
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    id: "legal",
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Disclaimer", href: "/disclaimer" },
      { label: "Cookie Policy", href: "/cookies" },
    ],
  },
];

export const SOCIAL_LINKS = {
  twitter: "https://twitter.com",
  linkedin: "https://linkedin.com",
  instagram: "https://instagram.com",
  youtube: "https://youtube.com",
};
