import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { univers, universById } from "@/lib/univers";
import { products, productsByCategorySlug, categories } from "@/lib/data";
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

export default function UniversPage({ params }: { params: { id: string } }) {
  const u = universById(params.id);
  if (!u) return notFound();

  const seen = new Set<number>();
  const list: typeof products = [];
  for (const slug of u.rootCategorySlugs) {
    for (const p of productsByCategorySlug(slug)) {
      if (!seen.has(p.id) && p.image) {
        seen.add(p.id);
        list.push(p);
      }
    }
  }
  // also include products whose category name fuzzily matches the univers id
  if (list.length < 8) {
    for (const p of products) {
      if (seen.has(p.id) || !p.image) continue;
      const catNames = p.categories.map((c) => c.slug.toLowerCase()).join(" ");
      if (catNames.includes(u.id) || catNames.includes(u.label.toLowerCase())) {
        seen.add(p.id);
        list.push(p);
      }
    }
  }

  // top sub-categories of this univers
  const subCats = categories
    .filter((c) =>
      u.rootCategorySlugs.some((slug) =>
        c.slug.startsWith(slug) || c.slug === slug
      ) && c.count > 0
    )
    .slice(0, 8);

  return (
    <>
      <section className="relative h-[58vh] min-h-[420px] w-full overflow-hidden">
        <Image
          src={u.hero}
          alt={u.label}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/15 to-ink/65" />
        <div className="relative h-full container-prose flex flex-col justify-end pb-16">
          <p className="label-eyebrow !text-ivory/70 mb-4">
            <span className="hairline inline-block align-middle mr-3 bg-gold" />
            Univers
          </p>
          <h1 className="font-display text-6xl md:text-7xl lg:text-8xl text-ivory leading-none">
            {u.label}
          </h1>
          <p className="mt-4 text-ivory/85 text-lg max-w-prose">{u.tagline}</p>
        </div>
      </section>

      {subCats.length > 0 && (
        <section className="py-16 bg-ivory-dark/40 border-y border-ink/8">
          <div className="container-prose flex flex-wrap gap-2">
            {subCats.map((c) => (
              <Link
                key={c.id}
                href={`/categorie/${c.slug}`}
                className="px-4 py-2 text-[12px] uppercase tracking-widest border border-navy/30 text-navy hover:border-navy hover:bg-navy hover:text-ivory transition"
              >
                {c.name} <span className="opacity-50 ml-1">({c.count})</span>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="py-24">
        <div className="container-prose">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <p className="label-eyebrow">{list.length} références</p>
            <Link href="/boutique" className="btn-link">Voir toute la boutique</Link>
          </div>
          {list.length === 0 ? (
            <p className="text-ink/60">Aucune référence indexée pour cet univers.</p>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {list.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
