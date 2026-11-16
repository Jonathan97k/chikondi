"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/music", label: "Music" },
  { href: "/writing", label: "Scriptwriting" },
  { href: "/production", label: "Film & Production" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-[#C9A54D]/30 bg-[#17251F] text-[#F5F2EA] shadow-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border border-[#D5B15D]/60 bg-[#D5B15D]/10 text-sm font-black tracking-tight text-[#E6C879]">
            TC
          </div>
          <div>
            <span className="block text-lg font-bold tracking-tight sm:text-xl">Tokha Creations</span>
            <span className="hidden text-[10px] uppercase tracking-[0.2em] text-[#E6C879] sm:block">Art • Talent • Culture</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={`py-1 transition-colors ${pathname === link.href ? "border-b-2 border-[#D5B15D] font-semibold text-[#E6C879]" : "text-[#F5F2EA] hover:text-[#E6C879]"}`}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link href="/hire" className="inline-flex rounded-md bg-[#D5B15D] px-5 py-2.5 text-sm font-bold text-[#17251F] transition hover:bg-[#E6C879]">Start a Project</Link>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <Link href="/hire" className="rounded bg-[#D5B15D] px-3 py-2 text-xs font-bold text-[#17251F]">Enquire</Link>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-expanded={mobileMenuOpen} aria-label="Toggle navigation menu" className="rounded p-2 text-[#F5F2EA] hover:text-[#E6C879]">
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav className="absolute left-0 right-0 top-full z-50 flex flex-col gap-1 border-t border-white/10 bg-[#17251F] p-4 shadow-xl md:hidden">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setMobileMenuOpen(false)} className={`rounded-lg px-4 py-3 text-base ${pathname === link.href ? "bg-[#D5B15D]/15 font-bold text-[#E6C879]" : "text-[#F5F2EA] hover:bg-white/5"}`}>
              {link.label}
            </Link>
          ))}
          <Link href="/hire" onClick={() => setMobileMenuOpen(false)} className="mt-2 rounded-lg bg-[#D5B15D] px-4 py-3 text-center font-bold text-[#17251F]">Start a Project</Link>
        </nav>
      )}
    </header>
  );
}