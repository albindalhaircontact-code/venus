import { notFound } from "next/navigation";
import Link from "next/link";
import { categories, categoryBySlug, productsByCategorySlug } from "@/lib/data";
import { ProductCard } from "@/components/product-card";

export function generateStaticParams() {
  return categories.filter((c) => c.count > 0).map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const c = categoryBySlug(params.slug);
  return {
    title: c ? `${c.name} — Laboratoires Venus` : "Catégorie",
  };
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const cat = categoryBySlug(params.slug);
  if (!cat) return notFound();
  const list = productsByCategorySlug(params.slug).filter((p) => p.image);

  // sister categories (same parent)
  const siblings = categories.filter(
    (c) => c.parent === cat.parent && c.id !== cat.id && c.count > 0
  );

  return (
    <div className="pt-32 pb-24">
      <div className="container-prose">
        <header className="border-b border-ink/15 pb-12 mb-12">
          <Link href="/boutique" className="label-eyebrow hover:text-terracotta transition">
            ← Boutique
          </Link>
          <h1 className="font-display text-5xl md:text-6xl text-navy leading-[1.05] mt-6">
            {cat.name}
          </h1>
          <p className="mt-4 text-ink/65">{list.length} références</p>
          {cat.description && (
            <p className="mt-4 max-w-prose text-ink/70">{cat.description}</p>
          )}
        </header>

        {siblings.length > 0 && (
          <nav className="flex flex-wrap gap-2 mb-12">
            {siblings.map((s) => (
              <Link
                key={s.id}
                href={`/categorie/${s.slug}`}
                className="px-3 py-1.5 text-[11px] uppercase tracking-widest border border-navy/30 text-navy hover:border-navy hover:bg-navy hover:text-ivory transition"
              >
                {s.name}
              </Link>
            ))}
          </nav>
        )}

        {list.length === 0 ? (
          <p className="text-ink/60">Aucune référence pour le moment.</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {list.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
