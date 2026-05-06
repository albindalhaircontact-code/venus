import { products } from "@/lib/data";
import { ProductCard } from "@/components/product-card";
import { univers } from "@/lib/univers";
import Link from "next/link";

export const metadata = {
  title: "Boutique — Tous les rituels Venus",
  description: "L'intégralité du catalogue Laboratoires Venus — soin, parfumerie, hygiène quotidienne.",
};

export default function BoutiquePage() {
  const filtered = products.filter((p) => p.image);
  // group by main top-level category for navigation rail
  return (
    <div className="pt-32 pb-32">
      <div className="container-prose">
        <header className="border-b border-ink/15 pb-12 mb-12">
          <p className="label-eyebrow mb-4">
            <span className="hairline inline-block align-middle mr-3" />
            Boutique
          </p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-navy leading-[1] max-w-4xl">
            Le catalogue complet,<br />
            <span className="italic font-light">en un seul lieu.</span>
          </h1>
          <p className="mt-6 max-w-prose text-ink/70 leading-relaxed text-lg">
            {filtered.length} références — soin du visage, du corps et du cheveu, parfumerie,
            hygiène familiale et soins solaires. Filtrez par univers, par maison, ou explorez
            librement.
          </p>
        </header>

        {/* Filter rail by univers */}
        <nav className="flex flex-wrap gap-2 mb-12">
          <Link
            href="/boutique"
            className="px-4 py-2 text-[12px] uppercase tracking-widest border border-navy bg-navy text-ivory"
          >
            Tout
          </Link>
          {univers.map((u) => (
            <Link
              key={u.id}
              href={`/univers/${u.id}`}
              className="px-4 py-2 text-[12px] uppercase tracking-widest border border-navy/30 text-navy hover:border-navy hover:bg-navy hover:text-ivory transition"
            >
              {u.label}
            </Link>
          ))}
        </nav>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
