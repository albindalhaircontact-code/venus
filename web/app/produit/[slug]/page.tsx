import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { products, productBySlug } from "@/lib/data";
import { ProductCard, prettyName } from "@/components/product-card";

export function generateStaticParams() {
  return products.filter((p) => p.image).map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const p = productBySlug(params.slug);
  if (!p) return {};
  return {
    title: prettyName(p.name),
    description: p.short || p.intro?.slice(0, 160),
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const p = productBySlug(params.slug);
  if (!p) return notFound();
  const cat = p.categories[0];
  const related = products
    .filter(
      (q) =>
        q.id !== p.id &&
        q.image &&
        q.categories.some((c) => p.categories.some((pc) => pc.id === c.id))
    )
    .slice(0, 4);

  return (
    <div className="pt-28 pb-32">
      <div className="container-prose">
        <Link href="/boutique" className="label-eyebrow hover:text-terracotta transition">
          ← Boutique
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-8">
          {/* Gallery */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {p.images.slice(0, 4).map((img, i) => (
                <div
                  key={i}
                  className={`relative bg-ivory-dark/40 ${
                    i === 0 && p.images.length === 1 ? "md:col-span-2 aspect-[4/5]" : "aspect-[4/5]"
                  }`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt || p.name}
                    fill
                    sizes="(min-width: 1024px) 35vw, 50vw"
                    className="object-contain p-8"
                  />
                </div>
              ))}
              {p.images.length === 0 && (
                <div className="aspect-[4/5] bg-ivory-dark grid place-items-center text-navy/30 font-display text-3xl md:col-span-2">
                  Vénus
                </div>
              )}
            </div>
          </div>

          {/* Info */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 self-start">
            {cat && (
              <p className="label-eyebrow mb-4">
                <Link href={`/categorie/${cat.slug}`} className="hover:text-terracotta">
                  {cat.name}
                </Link>
              </p>
            )}
            <h1 className="font-display text-4xl md:text-5xl text-navy leading-tight">
              {prettyName(p.name)}
            </h1>
            {p.short && (
              <p className="mt-4 text-ink/70 leading-relaxed">{p.short}</p>
            )}

            {p.claims.length > 0 && (
              <ul className="flex flex-wrap gap-2 mt-6">
                {p.claims.map((c) => (
                  <li
                    key={c}
                    className="px-3 py-1 text-[11px] uppercase tracking-widest border border-sage text-navy bg-sage/10"
                  >
                    {c}
                  </li>
                ))}
              </ul>
            )}

            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href={p.permalink || "#"}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                Trouver en pharmacie
              </a>
              <button className="btn-ghost">Ajouter à ma routine</button>
            </div>

            {p.intro && (
              <div className="mt-12 pt-8 border-t border-ink/15">
                <p className="text-ink/75 leading-[1.7]">{p.intro}</p>
              </div>
            )}

            <Accordion p={p} />

            <div className="mt-12 pt-8 border-t border-ink/15">
              <p className="label-eyebrow mb-3">Le mot du Laboratoire</p>
              <p className="text-ink/70 italic font-display text-lg leading-relaxed">
                « Formulé, conditionné et testé en Algérie depuis 1981 — la fidélité
                de nos consommateurs reste notre repère le plus précieux. »
              </p>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <section className="mt-32">
            <h2 className="font-display text-3xl md:text-4xl text-navy mb-10">
              Compléter le rituel
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {related.map((r) => (
                <ProductCard key={r.id} product={r} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

function Accordion({ p }: { p: ReturnType<typeof productBySlug> }) {
  if (!p) return null;
  const items = [
    { key: "Application", value: p.application },
    { key: "Résultats", value: p.resultats },
    { key: "Ingrédients (INCI)", value: p.ingredients },
  ].filter((x) => x.value);
  if (items.length === 0) return null;
  return (
    <div className="mt-10 border-t border-ink/15">
      {items.map((it) => (
        <details key={it.key} className="group border-b border-ink/15 py-5">
          <summary className="flex items-center justify-between cursor-pointer list-none font-display text-xl text-navy">
            <span>{it.key}</span>
            <span className="text-2xl text-navy/50 group-open:rotate-45 transition-transform">+</span>
          </summary>
          <p className="text-ink/70 mt-3 leading-relaxed text-sm whitespace-pre-line">
            {it.value}
          </p>
        </details>
      ))}
    </div>
  );
}
