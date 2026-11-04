"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoOpen, setLogoOpen] = useState(false);
  const [headerVariant, setHeaderVariant] = useState("rasta-header-one");
  const pathname = usePathname();

  useEffect(() => {
    const variants = ["rasta-header-one", "rasta-header-two", "rasta-header-three"];
    setHeaderVariant(variants[Math.floor(Math.random() * variants.length)]);
  }, []);

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
    { href: "/play", label: "Listen / Watch" },
    { href: "/music", label: "Music" },
    { href: "/writing", label: "Film & Writing" },
    { href: "/production", label: "Production" },
    { href: "/about", label: "About" },
    { href: "/community", label: "Community" },
  ];

  return (
    <header className={`rasta-site-header ${headerVariant} sticky top-0 z-50 text-[#171d18] shadow-md`}>
      <div className="mx-auto flex h-16 w-full max-w-[1440px] items-center justify-between gap-2 px-4 sm:h-20 sm:px-8 lg:px-20">
        <button
          type="button"
          onClick={() => setLogoOpen(true)}
          aria-label="View Chikondi logo enlarged"
          className="group flex min-w-0 items-center gap-2.5 rounded-lg text-left focus:outline-none focus:ring-2 focus:ring-[#171d18] focus:ring-offset-2 focus:ring-offset-[#F2C230]"
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-[#171d18] bg-[#171d18] shadow-lg transition-transform duration-300 group-hover:scale-105 sm:h-12 sm:w-12">
            <svg viewBox="0 0 64 64" role="img" aria-label="Chikondi lion emblem" className="h-9 w-9 sm:h-10 sm:w-10">
              <defs>
                <linearGradient id="chikondiLionGold" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#F9D66B" />
                  <stop offset="100%" stopColor="#C99728" />
                </linearGradient>
              </defs>
              <path d="M32 4 38 11 48 9 49 19 58 25 52 34 55 45 44 48 39 58 29 53 19 58 16 47 6 42 12 32 7 22 18 17 21 7 32 11Z" fill="url(#chikondiLionGold)" />
              <path d="M38 16c-8-3-18 2-20 11-2 7 1 14 7 18l-2 7 9-4c9 1 17-5 18-14 1-8-4-15-12-18Z" fill="#171d18" />
              <path d="M28 23c5-4 12-2 14 3l-5 2 4 4-5 2 2 5-7-1-4 5-3-7c-5-4-4-10 4-13Z" fill="url(#chikondiLionGold)" />
              <path d="m37 28 5 1-3 3m-8-1 3 2-3 2m-4 1 4 2" fill="none" stroke="#171d18" strokeWidth="1.8" strokeLinecap="round" />
              <path d="M24 18 18 13m19 3 7-5m-24 18-7-2m28 12 7 4" stroke="#F2C230" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </span>
          <span className="min-w-0">
            <span className="block whitespace-nowrap text-base font-black tracking-[0.08em] text-[#171d18] sm:text-xl">CHIKONDI</span>
            <span className="hidden text-[9px] font-bold uppercase tracking-[0.19em] text-[#171d18] sm:block">Music · Art · Purpose</span>
          </span>
        </button>

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


      {logoOpen && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/85 p-5 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Chikondi logo enlarged"
          onClick={() => setLogoOpen(false)}
        >
          <button
            type="button"
            onClick={() => setLogoOpen(false)}
            aria-label="Close enlarged logo"
            className="absolute right-5 top-5 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20"
          >
            <X size={24} />
          </button>
          <div className="flex max-w-[min(90vw,680px)] flex-col items-center rounded-3xl border border-[#F2C230]/40 bg-[#171d18] p-8 shadow-2xl sm:p-12" onClick={(event) => event.stopPropagation()}>
            <svg viewBox="0 0 160 160" role="img" aria-label="Chikondi lion emblem" className="h-40 w-40 sm:h-56 sm:w-56">
              <defs>
                <linearGradient id="chikondiLionGoldLarge" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#F9D66B" />
                  <stop offset="100%" stopColor="#C99728" />
                </linearGradient>
              </defs>
              <circle cx="80" cy="80" r="75" fill="#171d18" stroke="url(#chikondiLionGoldLarge)" strokeWidth="4" />
              <path d="M80 18 94 32 115 28 118 49 137 62 125 81 131 103 109 110 98 132 77 122 57 134 49 111 28 101 40 81 30 60 52 49 58 27 80 36Z" fill="url(#chikondiLionGoldLarge)" />
              <path d="M95 45c-21-8-43 5-47 27-4 17 3 34 17 43l-5 19 21-11c22 2 40-13 43-34 2-19-9-37-29-44Z" fill="#171d18" />
              <path d="M72 61c11-9 28-5 33 7l-12 5 9 9-12 5 5 12-16-2-9 12-7-16c-12-9-10-24 9-32Z" fill="url(#chikondiLionGoldLarge)" />
              <path d="m91 72 12 2-7 7m-18-5 7 5-7 5m-8 4 8 5" fill="none" stroke="#171d18" strokeWidth="4" strokeLinecap="round" />
              <path d="m57 48-16-13m49 10 19-13m-60 48-18-5m61 49 17 12" stroke="#F2C230" strokeWidth="5" strokeLinecap="round" />
            </svg>
            <div className="mt-5 text-center">
              <div className="text-3xl font-black tracking-[0.18em] text-[#F4EFE4] sm:text-5xl">CHIKONDI</div>
              <div className="mt-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#F2C230] sm:text-sm">Music · Art · Purpose</div>
            </div>
          </div>
        </div>
      )}

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
