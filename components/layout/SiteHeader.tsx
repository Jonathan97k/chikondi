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
    { href: "/about", label: "About" },
    { href: "/music", label: "Music" },
    { href: "/writing", label: "Writing" },
    { href: "/production", label: "Production" },
    { href: "/community", label: "Community Care" },
    { href: "/press", label: "Press" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#20251F] text-[#E8E4D9] border-b border-[#C9A54D]/30 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-[#20251F] border border-[#C9A54D]/30 flex items-center justify-center overflow-hidden shadow">
            <img src="/logo.webp" alt="Chikondi Logo" className="w-8 h-8 object-contain" />
          </div>
          <div>
            <span className="text-lg sm:text-xl font-bold tracking-tight text-[#E8E4D9] group-hover:text-[#C9A54D] transition-colors">
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
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-md bg-[#C9A54D] text-[#20251F] font-semibold text-sm hover:bg-[#b8933e] transition-all shadow-sm"
          >
            Hire / Book
          </Link>
        </div>

        {/* Mobile Hamburger Trigger */}
        <div className="flex md:hidden items-center gap-3">
          <Link
            href="/hire"
            className="px-3 py-1.5 rounded bg-[#C9A54D] text-[#20251F] font-semibold text-xs"
          >
            Hire
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
            className="p-2 text-[#E8E4D9] hover:text-[#C9A54D] focus:outline-none focus:ring-2 focus:ring-[#C9A54D] rounded"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Solid Opaque Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden fixed inset-0 top-16 sm:top-20 bg-[#20251F] z-[100] p-6 flex flex-col justify-between overflow-y-auto shadow-2xl"
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
