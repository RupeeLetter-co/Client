import Link from "next/link";
import { TrendingUp, X, ExternalLink } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { FOOTER_SECTIONS } from "@/constants/footer";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-gray-950 text-gray-300"
      role="contentinfo"
      id="footer"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-16">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <Link
              href="#home"
              className="flex items-center gap-2 font-bold text-lg text-white hover:opacity-80 transition-opacity w-fit"
              aria-label="RupeeLetter homepage"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand">
                <TrendingUp className="h-4 w-4 text-white" aria-hidden="true" />
              </div>
              Rupee<span className="text-brand">Letter</span>
            </Link>

            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              AI-powered market intelligence for every Indian investor. Real-time news,
              deep analysis, and personalized insights—all in one app.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-4 mt-2">
              {[
                { Icon: X, href: "https://twitter.com", label: "Twitter / X" },
                { Icon: ExternalLink, href: "https://linkedin.com", label: "LinkedIn" },
                { Icon: ExternalLink, href: "https://instagram.com", label: "Instagram" },
                { Icon: ExternalLink, href: "https://youtube.com", label: "YouTube" },
              ].map(({ Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`RupeeLetter on ${label}`}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 text-gray-400 hover:bg-brand hover:text-white transition-all duration-200"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {FOOTER_SECTIONS.map((section) => (
            <div key={section.id} className="flex flex-col gap-4">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-white">
                {section.title}
              </h3>
              <ul className="flex flex-col gap-3" role="list">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <Separator className="mt-12 mb-6 bg-gray-800" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>
            © {currentYear} RupeeLetter Technologies Pvt. Ltd. All rights reserved.
          </p>
          <p className="text-xs">
            Not SEBI registered. For informational purposes only. Not investment advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
