import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { maisons, maisonById, maisonProducts } from "@/lib/maisons";
import { ProductCard } from "@/components/product-card";

export function generateStaticParams() {
  return maisons.map((m) => ({ id: m.id }));
}

export function generateMetadata({ params }: { params: { id: string } }) {
  const m = maisonById(params.id);
  if (!m) return {};
  return {
    title: `${m.name} — Une maison Vénus`,
    description: m.description,
  };
}

const accentBg: Record<string, string> = {
  terracotta: "bg-terracotta",
  navy: "bg-navy",
  gold: "bg-gold",
  sage: "bg-sage",
  sky: "bg-sky",
  ink: "bg-ink",
};

export default function MaisonPage({ params }: { params: { id: string } }) {
  const m = maisonById(params.id);
  if (!m) return notFound();
  const list = maisonProducts(m).filter((p) => p.image).slice(0, 24);

  return (
    <>
      {/* Maison hero */}
      <section className="relative h-[80vh] min-h-[560px] w-full overflow-hidden">
        <Image src={m.hero} alt={m.name} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/10 via-ink/15 to-ink/65" />
        <div className="relative h-full container-prose flex flex-col justify-end pb-20">
          <div className="max-w-3xl">
            <p className="label-eyebrow !text-ivory/70 mb-4">
              <span className={`hairline inline-block align-middle mr-3 ${accentBg[m.accent]}`} />
              Une maison Vénus
            </p>
            <h1 className="font-display text-6xl md:text-7xl lg:text-8xl text-ivory leading-[0.95]">
              {m.shortName}
            </h1>
            <p className="mt-6 text-ivory/85 text-xl italic font-display">{m.tagline}</p>
            <p className="mt-3 text-ivory/65 text-sm uppercase tracking-widest">{m.signature}</p>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-32">
        <div className="container-prose grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <p className="label-eyebrow mb-4">
              <span className={`hairline inline-block align-middle mr-3 ${accentBg[m.accent]}`} />
              La maison
            </p>
            <h2 className="font-display text-4xl lg:text-5xl text-navy leading-tight">
              {m.shortName},<br />
              <span className="italic font-light">la promesse d&apos;un rituel.</span>
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="text-ink/75 text-lg leading-[1.7]">{m.description}</p>
            <Link href="/laboratoire" className="btn-link mt-8">
              Le savoir-faire Vénus
            </Link>
          </div>
        </div>
      </section>

      {/* Products grid */}
      <section className="py-24 bg-ivory-dark/40">
        <div className="container-prose">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <h3 className="font-display text-3xl text-navy">
              La gamme
            </h3>
            <p className="label-eyebrow">{list.length} références</p>
          </div>
          {list.length === 0 ? (
            <p className="text-ink/60">Le catalogue de cette maison est en cours de référencement.</p>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {list.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Cross-maison link */}
      <section className="py-24">
        <div className="container-prose">
          <p className="label-eyebrow mb-6">Découvrir une autre maison</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {maisons.filter((x) => x.id !== m.id).map((other) => (
              <Link
                key={other.id}
                href={`/maison/${other.id}`}
                className="group relative aspect-square bg-ivory-dark/40 overflow-hidden"
              >
                <Image
                  src={other.hero}
                  alt={other.shortName}
                  fill
                  sizes="(min-width: 1024px) 16vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-ink/40 group-hover:bg-ink/60 transition" />
                <span className="absolute inset-0 grid place-items-center font-display text-xl text-ivory text-center px-2">
                  {other.shortName}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
