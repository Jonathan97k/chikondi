"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: "/music", label: "Music" },
    { href: "/writing", label: "Film & Writing" },
    { href: "/production", label: "Production" },
    { href: "/about", label: "About" },
    { href: "/community", label: "Community" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#171d18] text-[#f4efe4] border-b border-[#c9a96c]/30 shadow-md">
      <div className="mx-auto flex h-16 w-full max-w-[1440px] items-center justify-between gap-2 px-4 sm:h-20 sm:px-8 lg:px-20">
        <Link href="/" className="flex min-w-0 items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-lg bg-[#20251F] border border-[#C9A54D]/30 flex items-center justify-center overflow-hidden shadow">
            <img src="/logo.webp" alt="Chikondi Logo" className="w-8 h-8 object-contain" />
          </div>
          <div>
            <span className="whitespace-nowrap text-base font-bold tracking-tight text-[#f4efe4] transition-colors group-hover:text-[#c9a96c] sm:text-xl">
              Chikondi Official
            </span>
            <span className="hidden sm:block text-xs text-[#C9A54D] tracking-widest uppercase">
              Stories, Sound & Purpose
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7 font-medium text-sm">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors py-1 ${
                  isActive
                    ? "text-[#C9A54D] border-b-2 border-[#C9A54D] font-semibold"
                    : "text-[#E8E4D9] hover:text-[#C9A54D]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/hire"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-md bg-[#c9a96c] text-[#171d18] font-semibold text-sm hover:bg-[#e1c58e] transition-all shadow-sm"
          >
            Hire / Book
          </Link>
        </div>

        {/* Mobile Hamburger Trigger */}
        <div className="flex shrink-0 items-center gap-2 md:hidden">
          <Link
            href="/hire"
            className="rounded bg-[#C9A54D] px-3 py-2 text-xs font-semibold text-[#20251F] sm:px-4"
          >
            Hire
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="rounded p-2 text-[#E8E4D9] hover:text-[#C9A54D] focus:outline-none focus:ring-2 focus:ring-[#C9A54D]"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Solid Opaque Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 bottom-0 top-16 z-[100] flex flex-col justify-between overflow-y-auto bg-[#20251F] p-5 pb-[max(1.5rem,env(safe-area-inset-bottom))] shadow-2xl sm:top-20 sm:p-8 md:hidden"
        >
          <nav className="flex flex-col gap-3 py-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-lg font-medium px-4 py-3 rounded-lg transition-all ${
                    isActive
                      ? "bg-[#C9A54D]/20 text-[#C9A54D] border-l-4 border-[#C9A54D] font-bold"
                      : "text-[#E8E4D9] hover:bg-white/5 active:bg-white/10"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="pt-6 pb-12 border-t border-white/10">
            <Link
              href="/hire"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center w-full py-4 rounded-lg bg-[#C9A54D] text-[#20251F] font-bold text-base shadow-lg hover:bg-[#b8933e] transition-all"
            >
              Hire / Book
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
