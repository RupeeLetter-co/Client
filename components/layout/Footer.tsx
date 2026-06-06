import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { FOOTER_SECTIONS } from "@/constants/footer";

export function Footer() {
  return (
    <footer
      className="bg-gray-950 text-gray-300"
      role="contentinfo"
      id="footer"
    >
      <div className="mx-auto max-w-6xl px-8 pt-14 pb-8">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-1 flex flex-col gap-4">
            <Link
              href="#home"
              className="flex items-center w-fit hover:opacity-80 transition-opacity"
              aria-label="RupeeLetter homepage"
            >
              <Image
                src="/assets/RupeeLetter-logo.svg"
                alt="RupeeLetter Logo"
                width={140}
                height={36}
                className="flex-shrink-0 h-[28px] w-auto brightness-0 invert"
              />
            </Link>

            <p className="text-xs text-gray-400 leading-relaxed max-w-[220px]">
              AI-powered market intelligence for the modern retail investor.
              Smarter decisions start here.
            </p>
          </div>

          {/* Link columns */}
          {FOOTER_SECTIONS.map((section) => (
            <div key={section.id} className="flex flex-col gap-4">
              <h3 className="text-xs font-normal uppercase tracking-widest text-gray-400">
                {section.title}
              </h3>
              <ul className="flex flex-col gap-3" role="list">
                {section.links.map((link) => {
                  const isExternal = link.href.startsWith("http");
                  return (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-xs text-gray-400 hover:text-white transition-colors"
                        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <Separator className="mt-12 mb-5 bg-gray-800" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-2 text-xs text-gray-500">
          <p>
            © 2025 RupeeLetter AI. All rights reserved. Not SEBI registered.
            For informational purposes only.
          </p>
          <p className="text-gray-500">rupeeletter@gmail.com</p>
        </div>
      </div>
    </footer>
  );
}
