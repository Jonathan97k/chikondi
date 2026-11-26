"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/play", label: "Listen / Watch" },
  { href: "/music", label: "Music" },
  { href: "/writing", label: "Film & Writing" },
  { href: "/production", label: "Production" },
  { href: "/about", label: "About" },
  { href: "/community", label: "Community" },
];

export default function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoOpen, setLogoOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
        setLogoOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header className="rasta-site-header sticky top-0 z-50 text-[#171d18] shadow-md">
      <div className="mx-auto flex h-20 w-full max-w-[1440px] items-center justify-between gap-3 px-4 sm:h-24 sm:px-8 lg:px-20">
        <button type="button" onClick={() => setLogoOpen(true)} aria-label="View TOKHA CREATIONS official logo" className="group flex min-w-0 items-center rounded-lg text-left focus:outline-none focus:ring-2 focus:ring-[#171d18] focus:ring-offset-2 focus:ring-offset-[#F2C230]">
          <span className="flex h-16 w-28 shrink-0 items-center justify-start sm:h-20 sm:w-40">
            <Image src="/images/tokha-creations-logo.webp" alt="TOKHA CREATIONS official logo" width={320} height={214} priority className="max-h-16 w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-105 sm:max-h-20" />
          </span>
        </button>

        <nav aria-label="Main navigation" className="hidden items-center gap-5 font-medium text-sm lg:flex xl:gap-7">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return <Link key={link.href} href={link.href} aria-current={isActive ? "page" : undefined} className={`border-b-2 py-1 transition-colors ${isActive ? "border-[#C9A54D] font-semibold text-[#C9A54D]" : "border-transparent text-[#E8E4D9] hover:text-[#C9A54D]"}`}>{link.label}</Link>;
          })}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <Link href="/hire" className="inline-flex items-center justify-center rounded-md bg-[#c9a96c] px-5 py-2.5 text-sm font-semibold text-[#171d18] shadow-sm transition hover:bg-[#e1c58e]">Hire / Book</Link>
        </div>

        <div className="flex shrink-0 items-center gap-2 lg:hidden">
          <Link href="/hire" className="rounded bg-[#C9A54D] px-3 py-2 text-xs font-semibold text-[#20251F] sm:px-4">Hire</Link>
          <button type="button" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-expanded={mobileMenuOpen} aria-controls="mobile-menu" aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"} className="rounded p-2 text-[#E8E4D9] hover:text-[#C9A54D] focus:outline-none focus:ring-2 focus:ring-[#C9A54D]">
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {logoOpen && <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/85 p-5 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label="TOKHA CREATIONS official logo" onClick={() => setLogoOpen(false)}>
        <button type="button" onClick={() => setLogoOpen(false)} aria-label="Close enlarged logo" className="absolute right-5 top-5 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20"><X size={24} /></button>
        <div className="flex max-w-[min(90vw,760px)] flex-col items-center rounded-3xl border border-[#F2C230]/40 bg-[#171d18] p-8 shadow-2xl sm:p-12" onClick={(event) => event.stopPropagation()}>
          <Image src="/images/tokha-creations-logo.png" alt="Official TOKHA CREATIONS logo" width={900} height={600} className="max-h-[60vh] w-auto max-w-full object-contain" />
        </div>
      </div>}

      {mobileMenuOpen && <div id="mobile-menu" className="fixed inset-x-0 bottom-0 top-20 z-[100] flex flex-col justify-between overflow-y-auto bg-[#20251F] p-5 pb-[max(1.5rem,env(safe-area-inset-bottom))] shadow-2xl sm:top-24 sm:p-8 lg:hidden">
        <nav aria-label="Mobile navigation" className="flex flex-col gap-3 py-4">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return <Link key={link.href} href={link.href} onClick={() => setMobileMenuOpen(false)} aria-current={isActive ? "page" : undefined} className={`rounded-lg px-4 py-3 text-lg font-medium transition-all ${isActive ? "border-l-4 border-[#C9A54D] bg-[#C9A54D]/20 font-bold text-[#C9A54D]" : "text-[#E8E4D9] hover:bg-white/5 active:bg-white/10"}`}>{link.label}</Link>;
          })}
        </nav>
        <div className="border-t border-white/10 pb-12 pt-6">
          <Link href="/hire" onClick={() => setMobileMenuOpen(false)} className="block w-full rounded-lg bg-[#C9A54D] py-4 text-center text-base font-bold text-[#20251F] shadow-lg transition-all hover:bg-[#b8933e]">Hire / Book</Link>
        </div>
      </div>}
    </header>
  );
}
