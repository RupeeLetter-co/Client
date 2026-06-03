"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, TrendingUp } from "lucide-react";
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
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      )}
      role="banner"
    >
      <nav
        className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 flex items-center justify-between h-16"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="#home"
          className="flex items-center gap-2 font-bold text-lg text-foreground hover:opacity-80 transition-opacity"
          aria-label="RupeeLetter — Go to homepage"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand">
            <TrendingUp className="h-4 w-4 text-white" aria-hidden="true" />
          </div>
          <span>
            Rupee<span className="text-brand">Letter</span>
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-1" role="list">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  "text-muted-foreground hover:text-foreground hover:bg-accent"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="#download"
            id="navbar-download-btn"
            className={cn(
              buttonVariants({ size: "sm" }),
              "bg-brand hover:bg-brand-dark text-white rounded-full px-5"
            )}
          >
            Download App
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
                <SheetTitle className="flex items-center gap-2 text-left">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand">
                    <TrendingUp className="h-3.5 w-3.5 text-white" />
                  </div>
                  Rupee<span className="text-brand">Letter</span>
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
                  href="#download"
                  id="mobile-download-btn"
                  className={cn(
                    buttonVariants(),
                    "w-full bg-brand hover:bg-brand-dark text-white rounded-full flex items-center justify-center"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  Download App
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
