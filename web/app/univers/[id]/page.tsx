import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { univers, universById } from "@/lib/univers";
import { themeFor, themeStyleVars } from "@/lib/univers-themes";
import { products, productsByCategorySlug, categories } from "@/lib/data";
import type { Product } from "@/lib/data";
import { ProductCard } from "@/components/product-card";

export function generateStaticParams() {
  return univers.map((u) => ({ id: u.id }));
}

export function generateMetadata({ params }: { params: { id: string } }) {
  const u = universById(params.id);
  if (!u) return {};
  return {
    title: `${u.label} — ${u.tagline}`,
    description: `Soins ${u.label.toLowerCase()} signés Laboratoires Vénus.`,
  };
}

function collectProducts(universId: string): Product[] {
  const u = universById(universId)!;
  const seen = new Set<number>();
  const list: Product[] = [];

  // 1. Resolve by category slug (uses descendants of the category root id).
  for (const slug of u.rootCategorySlugs) {
    for (const p of productsByCategorySlug(slug)) {
      if (!seen.has(p.id) && p.image) {
        seen.add(p.id);
        list.push(p);
      }
    }
  }

  // 2. Resolve by category-name fuzzy match (word boundary, name only).
  for (const p of products) {
    if (seen.has(p.id) || !p.image) continue;
    const name = p.name.toLowerCase();
    const catNames = p.categories.map((c) => c.name.toLowerCase()).join(" | ");
    const hay = name + " || " + catNames;
    const hit = u.nameKeywords.some((kw) => {
      const k = kw.toLowerCase();
      // Word-bounded match — avoid "eau" matching inside "peau"
      const escaped = k.replace(/[\\^$*+?.()|[\]{}]/g, "\\$&");
      const re = new RegExp(`(^|[^a-zàâäéèêëïîôöùûüç])${escaped}([^a-zàâäéèêëïîôöùûüç]|$)`, "i");
      return re.test(hay);
    });
    if (hit) {
      seen.add(p.id);
      list.push(p);
    }
  }

  return list;
}

export default function UniversPage({ params }: { params: { id: string } }) {
  const u = universById(params.id);
  if (!u) return notFound();
  const theme = themeFor(u.id)!;

  const list = collectProducts(u.id);

  // Top sub-categories of this univers (for chips).
  const subCats = categories
    .filter(
      (c) =>
        u.rootCategorySlugs.some(
          (slug) => c.slug.startsWith(slug) || c.slug === slug
        ) && c.count > 0
    )
    .slice(0, 10);

  const isDark = theme.darkHero;
  const displayClass =
    theme.display === "serif-italic"
      ? "font-display italic font-light"
      : theme.display === "sans"
      ? "font-sans font-bold tracking-tight"
      : "font-display";

  return (
    <div
      data-univers={u.id}
      className="bg-univers text-univers"
      style={themeStyleVars(theme)}
    >
      {/* Hero */}
      <section className="relative h-[78vh] min-h-[560px] w-full overflow-hidden">
        <Image
          src={theme.hero || u.hero}
          alt={u.label}
          fill
          priority
          sizes="100vw"
          className="object-cover"
          unoptimized
        />
        {/* Top scrim for header legibility */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/30 to-transparent" />
        {/* Lateral gradient using theme deep color — guarantees text legibility on any image */}
        <div
          className="absolute inset-0"
          style={{
            background: isDark
              ? `linear-gradient(90deg, ${theme.palette.deep}F2 0%, ${theme.palette.deep}AA 35%, ${theme.palette.deep}33 70%, transparent 100%)`
              : `linear-gradient(90deg, ${theme.palette.deep}E6 0%, ${theme.palette.deep}99 35%, ${theme.palette.deep}33 65%, transparent 100%)`,
          }}
        />
        {/* Bottom subtle vignette */}
        <div
          className="absolute inset-x-0 bottom-0 h-2/3"
          style={{
            background: `linear-gradient(180deg, transparent 0%, ${theme.palette.deep}55 60%, ${theme.palette.deep}DD 100%)`,
          }}
        />
        <div className="relative h-full container-prose flex flex-col justify-end pb-20 max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-[11px] tracking-widest uppercase mb-5 flex items-center gap-3" style={{ color: "rgba(255,255,255,0.85)" }}>
              <span
                className="inline-block h-px w-12"
                style={{ background: theme.palette.accent2 }}
              />
              <span style={{ color: theme.palette.accent2, fontWeight: 500, letterSpacing: "0.18em" }}>
                {theme.mood}
              </span>
              <span className="opacity-50">·</span>
              <span>Univers {u.label}</span>
            </p>
            <h1
              className={`${displayClass} text-white leading-[0.92]`}
              style={{
                fontSize: "clamp(3.5rem, 9vw, 8rem)",
                textShadow: "0 2px 24px rgba(0,0,0,0.35)",
              }}
            >
              {u.label}.
            </h1>
            <p
              className="mt-6 max-w-[42rem] text-base md:text-lg leading-relaxed"
              style={{
                color: "rgba(255,255,255,0.92)",
                textShadow: "0 1px 12px rgba(0,0,0,0.4)",
              }}
            >
              {theme.blurb}
            </p>
            <div className="mt-8 flex flex-wrap gap-3 items-center">
              <span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[10px] tracking-widest uppercase"
                style={{
                  border: `1px solid ${theme.palette.accent2}66`,
                  color: theme.palette.accent2,
                  background: "rgba(0,0,0,0.15)",
                  backdropFilter: "blur(4px)",
                }}
              >
                <span
                  className="inline-block w-1.5 h-1.5 rounded-full"
                  style={{ background: theme.palette.accent2 }}
                />
                Maison Vénus · 1981
              </span>
              <span className="text-[11px] tracking-widest uppercase text-white/70">
                {list.length} références
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial intro band */}
      <section
        className="py-20 lg:py-28"
        style={{
          background: theme.palette.surface,
          color: theme.palette.text,
        }}
      >
        <div className="container-prose grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <p
              className="text-[11px] tracking-widest uppercase mb-5 flex items-center gap-3"
              style={{ color: theme.palette.accent }}
            >
              <span
                className="inline-block h-px w-12"
                style={{ background: theme.palette.accent }}
              />
              {theme.intent}
            </p>
            <h2
              className={`${displayClass}`}
              style={{
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                color: theme.palette.text,
                lineHeight: 1.05,
              }}
            >
              {u.tagline}
            </h2>
          </div>
          <div className="lg:col-span-5 space-y-3 text-sm">
            <p
              className="text-[10px] tracking-widest uppercase"
              style={{ color: theme.palette.accent }}
            >
              Inspirations
            </p>
            <ul
              className="flex flex-wrap gap-x-4 gap-y-1"
              style={{ color: theme.palette.text, opacity: 0.7 }}
            >
              {theme.references.map((ref) => (
                <li key={ref} className="italic">
                  {ref}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Sub-category chips */}
      {subCats.length > 0 && (
        <section
          className="py-10 border-y"
          style={{
            borderColor: theme.palette.muted ?? theme.palette.surface,
            background: theme.palette.background,
          }}
        >
          <div className="container-prose flex flex-wrap gap-2">
            {subCats.map((c) => (
              <Link
                key={c.id}
                href={`/categorie/${c.slug}`}
                className="px-4 py-2 text-[11px] uppercase tracking-widest border transition"
                style={{
                  borderColor: theme.palette.accent + "55",
                  color: theme.palette.accent,
                }}
              >
                {c.name}{" "}
                <span style={{ opacity: 0.55 }}>({c.count})</span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Product grid */}
      <section className="py-24" style={{ background: theme.palette.background }}>
        <div className="container-prose">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <p
              className="text-[11px] tracking-widest uppercase"
              style={{ color: theme.palette.accent }}
            >
              {list.length} références
            </p>
            <Link
              href="/boutique"
              className="text-[12px] uppercase tracking-widest font-medium border-b pb-1 transition inline-flex items-center gap-2"
              style={{
                color: theme.palette.accent,
                borderColor: theme.palette.accent + "55",
              }}
            >
              Voir toute la boutique <ArrowRight size={14} />
            </Link>
          </div>
          {list.length === 0 ? (
            <p style={{ color: theme.palette.text, opacity: 0.6 }}>
              Aucune référence indexée pour cet univers.
            </p>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {list.map((p) => (
                <ProductCard key={p.id} product={p} variant={isDark ? "dark" : "light"} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
