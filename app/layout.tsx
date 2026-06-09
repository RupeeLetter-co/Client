import type { Metadata, Viewport } from "next";
import { Inter, Fraunces, DM_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  axes: ["SOFT", "WONK", "opsz"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rupeeletter.com"),
  title: "RupeeLetter - AI-Powered Market Intelligence for Indian Investors",
  description:
    "Get real-time market news, AI-powered stock insights, and personalized analysis for the Indian stock market. NSE, BSE, and global markets - all in one app.",
  keywords: [
    "stock market app india",
    "AI stock analysis",
    "NSE BSE news",
    "market intelligence",
    "stock analysis app",
    "Indian investor app",
    "RupeeLetter",
  ],
  authors: [{ name: "RupeeLetter Technologies Pvt. Ltd." }],
  creator: "RupeeLetter",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://rupeeletter.com",
    siteName: "RupeeLetter",
    title: "RupeeLetter - AI-Powered Market Intelligence",
    description:
      "Get real-time market news, AI-powered stock insights, and personalized analysis. Join 10K+ active investors.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "RupeeLetter - Trade Smarter with AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RupeeLetter - AI-Powered Market Intelligence",
    description:
      "Real-time market news, AI stock insights, and personalized analysis for Indian investors.",
    creator: "@rupeeletter",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#E8393A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} ${dmSans.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
