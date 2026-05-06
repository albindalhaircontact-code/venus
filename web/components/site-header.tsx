"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, Search, X } from "lucide-react";
import { univers, mainMosaicUnivers } from "@/lib/univers";
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
          ? "bg-ivory/96 backdrop-blur-md border-b border-ink/8 shadow-[0_1px_0_rgba(15,42,68,0.04)]"
          : "bg-ivory/85 backdrop-blur-sm"
      }`}
    >
      {/* Utility bar — top */}
      <div className="hidden md:flex items-center justify-between text-[10px] tracking-widest uppercase text-navy/80 py-2 border-b border-ink/8 px-6 lg:px-10">
        <span className="flex-1 text-left">Une pharmacopée méditerranéenne — Depuis 1981 · Algérie</span>
        <div className="flex-1 flex items-center justify-end gap-5">
          <Link href="/journal" className="hover:text-terracotta transition">
            Journal
          </Link>
          <Link
            href="/univers/private-collection"
            className="text-[#0A0908] hover:text-[#C9A063] transition tracking-[0.2em]"
            style={{ fontWeight: 500 }}
          >
            Private Collection
          </Link>
          <button aria-label="Recherche" className="text-navy hover:text-terracotta transition">
            <Search size={14} />
          </button>
        </div>
      </div>

      {/* Main bar — 3-column grid keeps the logo perfectly centered */}
      <div className="container-prose grid grid-cols-[auto_1fr_auto] lg:grid-cols-3 items-center py-3 lg:py-5 gap-6">
        <button
          aria-label="Menu"
          onClick={() => setOpen(true)}
          className="lg:hidden text-navy"
        >
          <Menu size={22} />
        </button>

        <nav className="hidden lg:flex items-center gap-7 justify-start">
          {mainMosaicUnivers.slice(0, 4).map((u) => (
            <Link
              key={u.id}
              href={`/univers/${u.id}`}
              className="text-[11px] uppercase tracking-[0.18em] text-navy hover:text-terracotta transition"
            >
              {u.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/"
          className="flex items-center justify-center select-none"
          aria-label="Laboratoires Venus — depuis 1981"
        >
          <Image
            src="/brand/venus-master-logo.png"
            alt="Laboratoires Venus"
            width={200}
            height={110}
            priority
            className="h-12 lg:h-16 w-auto"
            unoptimized
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-7 justify-end">
          {mainMosaicUnivers.slice(4).map((u) => (
            <Link
              key={u.id}
              href={`/univers/${u.id}`}
              className="text-[11px] uppercase tracking-[0.18em] text-navy hover:text-terracotta transition"
            >
              {u.label}
            </Link>
          ))}
        </nav>

        <button aria-label="Recherche" className="lg:hidden text-navy justify-self-end">
          <Search size={20} />
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-50 bg-ivory">
          <div className="container-prose flex items-center justify-between py-5">
            <Image
              src="/brand/venus-master-logo.png"
              alt="Laboratoires Venus"
              width={150}
              height={76}
              className="h-12 w-auto"
              unoptimized
            />
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
