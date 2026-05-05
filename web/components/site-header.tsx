"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, Search, X } from "lucide-react";
import { univers } from "@/lib/univers";
import { maisons } from "@/lib/maisons";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-700 ease-venus ${
        scrolled
          ? "bg-ivory/95 backdrop-blur-md border-b border-ink/8"
          : "bg-transparent"
      }`}
    >
      <div className="hidden md:flex items-center justify-center text-[10px] tracking-widest uppercase text-navy/80 py-2 border-b border-ink/8">
        <span>Une pharmacopée méditerranéenne — Depuis 1981 · Algérie</span>
      </div>

      <div className="container-prose flex items-center justify-between py-4 lg:py-5">
        <button
          aria-label="Menu"
          onClick={() => setOpen(true)}
          className="lg:hidden text-navy"
        >
          <Menu size={22} />
        </button>

        <nav className="hidden lg:flex items-center gap-8 flex-1">
          {univers.slice(0, 5).map((u) => (
            <Link
              key={u.id}
              href={`/univers/${u.id}`}
              className="text-[12px] uppercase tracking-widest text-navy hover:text-terracotta transition"
            >
              {u.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/"
          className="font-display text-2xl lg:text-3xl text-navy text-center select-none"
          aria-label="Laboratoires Vénus"
        >
          <span className="block leading-none">Laboratoires</span>
          <span className="block leading-none italic font-light tracking-wide">Vénus</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8 flex-1 justify-end">
          {univers.slice(5).map((u) => (
            <Link
              key={u.id}
              href={`/univers/${u.id}`}
              className="text-[12px] uppercase tracking-widest text-navy hover:text-terracotta transition"
            >
              {u.label}
            </Link>
          ))}
          <Link
            href="/journal"
            className="text-[12px] uppercase tracking-widest text-navy hover:text-terracotta transition"
          >
            Journal
          </Link>
          <button aria-label="Recherche" className="text-navy">
            <Search size={18} />
          </button>
        </nav>

        <button aria-label="Recherche" className="lg:hidden text-navy">
          <Search size={20} />
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-50 bg-ivory">
          <div className="container-prose flex items-center justify-between py-5">
            <span className="font-display text-2xl text-navy">Laboratoires Vénus</span>
            <button onClick={() => setOpen(false)} aria-label="Fermer" className="text-navy">
              <X size={22} />
            </button>
          </div>
          <div className="container-prose pt-6 pb-20 space-y-10">
            <div>
              <p className="label-eyebrow mb-4">Univers</p>
              <ul className="space-y-3">
                {univers.map((u) => (
                  <li key={u.id}>
                    <Link
                      href={`/univers/${u.id}`}
                      onClick={() => setOpen(false)}
                      className="font-display text-3xl text-navy hover:text-terracotta transition"
                    >
                      {u.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="label-eyebrow mb-4">Maisons</p>
              <ul className="space-y-2 text-navy/80">
                {maisons.map((m) => (
                  <li key={m.id}>
                    <Link href={`/maison/${m.id}`} onClick={() => setOpen(false)}>
                      {m.shortName}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <ul className="space-y-2 text-navy/80">
                <li><Link href="/boutique" onClick={() => setOpen(false)}>Boutique</Link></li>
                <li><Link href="/journal" onClick={() => setOpen(false)}>Journal</Link></li>
                <li><Link href="/laboratoire" onClick={() => setOpen(false)}>Le Laboratoire</Link></li>
                <li><Link href="/engagement" onClick={() => setOpen(false)}>Engagement</Link></li>
                <li><Link href="/contact" onClick={() => setOpen(false)}>Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
