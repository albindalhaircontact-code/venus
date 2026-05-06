import Image from "next/image";
import Link from "next/link";
import { posts } from "@/lib/data";

export const metadata = {
  title: "Venus Mag — Le journal du Laboratoire",
  description: "Rituels, ingrédients et conseils signés Laboratoires Venus.",
};

export default function JournalPage() {
  const list = posts.filter((p) => !p.title.toLowerCase().includes("protection"));
  const [hero, ...rest] = list;

  return (
    <div className="pt-32 pb-32">
      <div className="container-prose">
        <header className="border-b border-ink/15 pb-12 mb-16">
          <p className="label-eyebrow mb-4">
            <span className="hairline inline-block align-middle mr-3" />
            Venus Mag
          </p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-navy leading-[1] max-w-4xl">
            Le journal du<br />
            <span className="italic font-light">Laboratoire.</span>
          </h1>
          <p className="mt-6 max-w-prose text-ink/70 leading-relaxed text-lg">
            Conseils du laboratoire, gestes du quotidien, rencontres avec nos formulateurs et
            mises en lumière des ingrédients clés.
          </p>
        </header>

        {hero && (
          <Link href={`/journal/${hero.slug}`} className="group block mb-20">
            <div className="relative aspect-[16/7] bg-ivory-dark/40 overflow-hidden mb-6">
              {hero.image ? (
                <Image
                  src={hero.image}
                  alt={hero.title}
                  fill
                  priority
                  sizes="(min-width: 1024px) 1100px, 100vw"
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-1000 ease-venus"
                />
              ) : (
                <div className="h-full w-full grid place-items-center bg-navy text-ivory font-display text-6xl">
                  {hero.title.slice(0, 1)}
                </div>
              )}
            </div>
            <p className="label-eyebrow">
              {new Date(hero.date).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}
            </p>
            <h2 className="font-display text-3xl md:text-5xl text-navy mt-3 group-hover:text-terracotta transition">
              {hero.title}
            </h2>
            <p className="text-ink/65 mt-3 max-w-prose">{hero.excerpt}</p>
          </Link>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {rest.map((post) => (
            <Link key={post.id} href={`/journal/${post.slug}`} className="group block">
              <div className="relative aspect-[4/3] bg-ivory-dark/40 overflow-hidden mb-5">
                {post.image ? (
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-1000 ease-venus"
                  />
                ) : (
                  <div className="h-full w-full grid place-items-center font-display text-4xl text-navy/30">
                    {post.title.slice(0, 1)}
                  </div>
                )}
              </div>
              <p className="label-eyebrow mb-2">
                {new Date(post.date).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}
              </p>
              <h3 className="font-display text-2xl text-navy group-hover:text-terracotta transition leading-tight">
                {post.title}
              </h3>
              <p className="text-ink/65 text-sm mt-2 line-clamp-2">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
