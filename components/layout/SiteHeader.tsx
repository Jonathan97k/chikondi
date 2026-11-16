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
    <header className="sticky top-0 z-50 border-b border-[#C9A54D]/25 bg-[#20251F] text-[#E8E4D9] shadow-sm">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link href="/" className="group flex items-center gap-3">
          <span className="relative flex h-11 w-11 items-center justify-center border border-[#C9A54D]/60 font-serif text-lg font-bold text-[#C9A54D]">
            T<span className="absolute bottom-1 right-1 h-1.5 w-1.5 rounded-full bg-[#496348]" />
          </span>
          <span>
            <span className="block font-serif text-xl font-semibold tracking-tight transition group-hover:text-[#C9A54D]">Tokha Creations</span>
            <span className="mt-0.5 hidden text-[9px] font-semibold uppercase tracking-[0.23em] text-[#C9A54D] sm:block">Art · Talent · Culture</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 text-[13px] font-medium md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={`border-b py-2 transition-colors ${pathname === link.href ? "border-[#C9A54D] text-[#C9A54D]" : "border-transparent text-[#E8E4D9]/80 hover:text-[#C9A54D]"}`}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link href="/hire" className="inline-flex items-center gap-2 border border-[#C9A54D]/70 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.12em] text-[#C9A54D] transition hover:bg-[#C9A54D] hover:text-[#20251F]">Start a project <span aria-hidden="true">↗</span></Link>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <Link href="/hire" className="bg-[#C9A54D] px-3 py-2 text-xs font-bold text-[#20251F]">Enquire</Link>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-expanded={mobileMenuOpen} aria-label="Toggle navigation menu" className="rounded p-2 text-[#E8E4D9] hover:text-[#C9A54D]">
            {mobileMenuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav className="absolute left-0 right-0 top-full z-50 flex flex-col gap-1 border-t border-[#C9A54D]/20 bg-[#20251F] p-4 shadow-xl md:hidden">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setMobileMenuOpen(false)} className={`px-4 py-3 text-sm ${pathname === link.href ? "bg-[#C9A54D]/10 font-bold text-[#C9A54D]" : "text-[#E8E4D9] hover:bg-white/5"}`}>
              {link.label}
            </Link>
          ))}
          <Link href="/hire" onClick={() => setMobileMenuOpen(false)} className="mt-2 bg-[#C9A54D] px-4 py-3 text-center text-sm font-bold text-[#20251F]">Start a project</Link>
        </nav>
      )}
    </header>
  );
}
