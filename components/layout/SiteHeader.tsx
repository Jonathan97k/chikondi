"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 bg-[#20251F]/95 backdrop-blur-md text-[#E8E4D9] border-b border-[#C9A54D]/30 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-[72px] flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#C9A54D] flex items-center justify-center text-[#20251F] font-bold text-lg shadow">
            C
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
        <nav className="hidden md:flex items-center gap-8 font-medium text-sm">
          <Link href="/about" className="hover:text-[#C9A54D] transition-colors">
            About
          </Link>
          <Link href="/music" className="hover:text-[#C9A54D] transition-colors">
            Music
          </Link>
          <Link href="/writing" className="hover:text-[#C9A54D] transition-colors">
            Writing
          </Link>
          <Link href="/production" className="hover:text-[#C9A54D] transition-colors">
            Production
          </Link>
          <Link href="/community" className="hover:text-[#C9A54D] transition-colors">
            Community Care
          </Link>
          <Link href="/press" className="hover:text-[#C9A54D] transition-colors">
            Press
          </Link>
          <Link href="/contact" className="hover:text-[#C9A54D] transition-colors">
            Contact
          </Link>
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
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay / Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden fixed inset-0 top-14 sm:top-[72px] bg-[#20251F] border-t border-[#C9A54D]/20 p-6 flex flex-col justify-between z-50 animate-fadeIn"
        >
          <nav className="flex flex-col gap-6 text-lg font-medium">
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#C9A54D] transition-colors py-2 border-b border-[#E8E4D9]/10"
            >
              About
            </Link>
            <Link
              href="/music"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#C9A54D] transition-colors py-2 border-b border-[#E8E4D9]/10"
            >
              Music
            </Link>
            <Link
              href="/writing"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#C9A54D] transition-colors py-2 border-b border-[#E8E4D9]/10"
            >
              Writing
            </Link>
            <Link
              href="/production"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#C9A54D] transition-colors py-2 border-b border-[#E8E4D9]/10"
            >
              Production
            </Link>
            <Link
              href="/community"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#C9A54D] transition-colors py-2 border-b border-[#E8E4D9]/10"
            >
              Community Care
            </Link>
            <Link
              href="/press"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#C9A54D] transition-colors py-2 border-b border-[#E8E4D9]/10"
            >
              Press
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#C9A54D] transition-colors py-2 border-b border-[#E8E4D9]/10"
            >
              Contact
            </Link>
          </nav>

          <div className="pt-6 pb-12">
            <Link
              href="/hire"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center w-full py-3.5 rounded bg-[#C9A54D] text-[#20251F] font-bold text-base shadow-lg"
            >
              Hire / Book
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
