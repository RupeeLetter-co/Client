"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { NAV_LINKS } from "@/constants/navigation";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white",
        isScrolled ? "shadow-sm border-b border-gray-100" : "border-b border-gray-100"
      )}
      role="banner"
    >
      <nav
        className="mx-auto max-w-6xl px-6 lg:px-8 flex items-center justify-between h-[64px]"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="#home"
          className="flex items-center hover:opacity-80 transition-opacity flex-shrink-0"
          aria-label="RupeeLetter - Go to homepage"
        >
          <Image
            src="/assets/Link.svg"
            alt="RupeeLetter"
            width={180}
            height={46}
            className="flex-shrink-0 h-[36px] w-[36px] md:h-[44px] md:w-auto object-cover object-left"
            priority
          />
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-0" role="list">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "px-4 py-2 text-[13.5px] font-medium transition-colors",
                  "text-gray-600 hover:text-gray-900"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <Link
            href="https://play.google.com/store/apps/details?id=com.rupeeletter.newsapp"
            target="_blank"
            rel="noopener noreferrer"
            id="navbar-download-btn"
            className={cn(
              "inline-flex items-center gap-2 px-5 py-2 rounded-full text-[13.5px] font-semibold text-white bg-brand hover:bg-brand-dark transition-colors duration-200"
            )}
          >
            Download App
            <Image
              src="/assets/GooglePlayButton.svg"
              alt=""
              width={13}
              height={15}
              aria-hidden="true"
            />
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger>
              <span
                className={cn(
                  buttonVariants({ variant: "ghost", size: "icon" }),
                  "cursor-pointer"
                )}
                aria-label="Open navigation menu"
                id="mobile-menu-trigger"
              >
                <Menu className="h-5 w-5" aria-hidden="true" />
              </span>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetHeader>
                <SheetTitle className="flex items-center text-left">
                  <Image
                    src="/assets/Link.svg"
                    alt="RupeeLetter"
                    width={160}
                    height={40}
                    className="flex-shrink-0 h-[36px] w-[36px] md:w-auto object-cover object-left"
                  />
                </SheetTitle>
              </SheetHeader>

              <nav className="flex flex-col gap-1 mt-6 px-4" aria-label="Mobile navigation">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "px-4 py-3 text-sm font-medium rounded-md transition-colors",
                      "text-muted-foreground hover:text-foreground hover:bg-accent"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-6 px-4">
                <Link
                  href="https://play.google.com/store/apps/details?id=com.rupeeletter.newsapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="mobile-download-btn"
                  className={cn(
                    "w-full flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-brand hover:bg-brand-dark transition-colors"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  Download App
                  <Image
                    src="/assets/GooglePlayButton.svg"
                    alt=""
                    width={13}
                    height={15}
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
