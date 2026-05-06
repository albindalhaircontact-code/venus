import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { products, posts } from "@/lib/data";
import { univers } from "@/lib/univers";
import { universThemes } from "@/lib/univers-themes";
import { maisons, maisonProducts } from "@/lib/maisons";
import { ProductCard } from "@/components/product-card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export default function HomePage() {
  const habba = maisonProducts(maisons[0]).slice(0, 3);
  const featuredPosts = posts
    .filter((p) => !p.title.toLowerCase().includes("protection"))
    .slice(0, 3);

  return (
    <>
      {/* 1. Hero — Habba Saouda campaign */}
      <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-[#1A0F1A]">
        <div className="absolute inset-0">
          <Image
            src="https://laboratoiresvenus.com/wp-content/uploads/2026/04/Banniere_2001x674_Habba-saouda_01.jpg"
            alt="Gamme Habba Saouda — Hair Glow"
            fill
            priority
            sizes="100vw"
            className="object-cover object-right md:object-center"
            unoptimized
          />
          {/* Lateral gradient — keeps the left side dark for legibility on every screen */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A0F1A]/95 via-[#1A0F1A]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0E0E10]/65" />
        </div>

        <div className="relative h-full container-prose flex flex-col justify-end pb-20 lg:pb-28">
          <div className="max-w-2xl text-ivory animate-fade-up">
            <p className="label-eyebrow !text-ivory/80 mb-6 flex items-center gap-3">
              <span className="inline-block h-px w-12 bg-gold" />
              <span className="text-gold-soft">Habba Saouda · Hair Glow</span>
            </p>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[0.95] text-ivory text-balance">
              L&apos;éclat des bruns,<br />
              <span className="italic font-light">par les graines de nigelle.</span>
            </h1>
            <p className="mt-6 max-w-prose text-ivory/85 text-base md:text-lg leading-relaxed">
              La gamme <em className="not-italic font-medium">Habba Saouda — Hair Glow</em> unit
              l&apos;extrait pur de <em>Nigella sativa</em>, régénérateur ancestral, à un acide
              hyaluronique capillaire qui hydrate en profondeur sans alourdir.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/maison/habba-saouda" className="btn-primary !bg-gold !text-[#1A0F1A] hover:!bg-ivory">
                Découvrir la gamme <ArrowRight size={14} />
              </Link>
              <Link href="/boutique" className="btn-link !text-ivory !border-ivory/40">
                Toute la boutique
              </Link>
            </div>
            <div className="mt-10">
              <span className="vintage-stamp text-ivory/70 border-ivory/30">
                Maison Vénus · 1981
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Manifesto — 44 ans */}
      <section className="py-32 lg:py-40">
        <div className="container-prose grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <Reveal className="lg:col-span-5">
            <p className="label-eyebrow mb-5">
              <span className="hairline inline-block align-middle mr-3" />
              Depuis 1981
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-navy leading-[1.05]">
              Quarante-quatre ans<br />
              <span className="italic font-light">d&apos;une science familière.</span>
            </h2>
          </Reveal>
          <Reveal delay={150} className="lg:col-span-6 lg:col-start-7">
            <p className="text-ink/75 text-lg leading-[1.7] font-sans">
              Né en Algérie, le Laboratoire Vénus formule depuis quatre décennies les rituels du
              quotidien — soin du cheveu, soin de la peau, parfumerie, hygiène familiale.
            </p>
            <p className="text-ink/75 text-lg leading-[1.7] mt-5 font-sans">
              Notre conviction n&apos;a pas changé : la qualité d&apos;une formule se mesure à sa
              fidélité. Trois de nos innovations ont été élues
              <em className="italic"> Produit de l&apos;année</em>. Chaque saison, notre département
              recherche signe de nouvelles gammes — testées sur place, conditionnées sur place,
              accessibles à tous.
            </p>
            <Link href="/laboratoire" className="btn-link mt-8">
              Le mot du Président <ArrowRight size={14} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 3. Univers mosaic */}
      <section className="py-24 lg:py-32 bg-ivory-dark/40">
        <div className="container-prose">
          <SectionHeading
            eyebrow="L'univers Vénus"
            title={
              <>
                Huit territoires de soin,<br />
                <span className="italic font-light">une seule signature.</span>
              </>
            }
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-14">
            {univers.map((u, i) => {
              const theme = universThemes[u.id];
              const isDarkTile = !!theme?.darkHero;
              const surface = theme?.palette.surface ?? "#EAE2D2";
              const accent = theme?.palette.accent ?? "#0F2A44";
              return (
                <Reveal key={u.id} delay={i * 60}>
                  <Link
                    href={`/univers/${u.id}`}
                    className="group block relative aspect-[4/5] overflow-hidden"
                    style={{ background: surface }}
                  >
                    <div className="absolute inset-0 transition-transform duration-1000 ease-venus group-hover:scale-105">
                      <Image
                        src={u.tile}
                        alt={u.label}
                        fill
                        sizes="(min-width: 1024px) 25vw, 50vw"
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                    {/* Themed colour wash so each univers reads its own identity */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background: isDarkTile
                          ? `linear-gradient(180deg, ${accent}55 0%, ${theme!.palette.deep ?? accent}E0 100%)`
                          : `linear-gradient(180deg, ${surface}33 0%, ${accent}D0 100%)`,
                      }}
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <p
                        className="text-[10px] tracking-widest uppercase font-medium mb-1"
                        style={{ color: theme?.palette.accent2 ?? "#C9A063" }}
                      >
                        {theme?.mood ?? "Univers"}
                      </p>
                      <h3
                        className={`text-2xl leading-tight ${
                          theme?.display === "sans" ? "font-sans font-bold" : "font-display"
                        }`}
                        style={{ color: "#F4EFE6" }}
                      >
                        {u.label}
                      </h3>
                      <p className="text-[11px] mt-1 leading-snug" style={{ color: "#F4EFE6", opacity: 0.7 }}>
                        {u.tagline}
                      </p>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Habba Saouda capsule focus */}
      <section className="py-32 bg-terracotta/8">
        <div className="container-prose">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-5">
              <p className="label-eyebrow !text-terracotta mb-4">
                <span className="hairline inline-block align-middle mr-3 bg-terracotta" />
                Capsule du moment
              </p>
              <h2 className="font-display text-4xl lg:text-5xl text-navy">
                Hair Glow,<br />
                <span className="italic font-light">l&apos;ingrédient ancestral réactualisé.</span>
              </h2>
              <p className="text-ink/70 mt-5 text-base leading-relaxed font-sans">
                Trois gestes — shampooing, masque, après-shampooing — pour révéler les nuances
                profondes des cheveux bruns. Un duo signature : <em>Nigella sativa</em> en extrait
                pur, et acide hyaluronique capillaire.
              </p>
              <Link href="/maison/habba-saouda" className="btn-ghost mt-8">
                Voir la gamme complète
              </Link>
            </div>
            <div className="lg:col-span-7">
              <div className="grid grid-cols-3 gap-4">
                {habba.map((p) => (
                  <ProductCard key={p.id} product={p} size="lg" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Nos maisons — slider horizontal */}
      <section className="py-32">
        <div className="container-prose">
          <SectionHeading
            eyebrow="Nos maisons"
            title={
              <>
                Sept signatures,<br />
                <span className="italic font-light">un seul laboratoire.</span>
              </>
            }
            intro="Chaque maison Vénus exprime une promesse — dermique, capillaire, parfumée, masculine, infantile. Toutes naissent du même savoir-faire, depuis 1981."
          />
        </div>
        <div className="mt-14 overflow-x-auto scrollbar-hide">
          <div className="flex gap-5 px-6 lg:px-10 pb-2">
            {maisons.map((m) => (
              <Link
                key={m.id}
                href={`/maison/${m.id}`}
                className="group flex-shrink-0 w-[78vw] md:w-[42vw] lg:w-[28vw] xl:w-[22vw]"
              >
                <div className="relative aspect-[3/4] bg-ivory-dark/40 overflow-hidden">
                  <Image
                    src={m.hero}
                    alt={m.name}
                    fill
                    sizes="(min-width: 1024px) 28vw, 78vw"
                    className="object-cover transition-transform duration-1000 ease-venus group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink/55" />
                </div>
                <div className="pt-5">
                  <p className="label-eyebrow mb-1">{m.signature}</p>
                  <h3 className="font-display text-2xl text-navy">{m.shortName}</h3>
                  <p className="text-ink/65 text-sm mt-1 italic">{m.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Engagement — 3 piliers */}
      <section className="py-32 bg-navy text-ivory">
        <div className="container-prose">
          <p className="label-eyebrow !text-ivory/60 mb-5">
            <span className="hairline inline-block align-middle mr-3 bg-gold" />
            Notre engagement
          </p>
          <h2 className="font-display text-4xl lg:text-5xl text-ivory max-w-2xl">
            Trois principes,<br />
            <span className="italic font-light">vérifiables au quotidien.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
            {[
              {
                num: "01",
                title: "Recyclable",
                body: "Nos packagings privilégient les matières recyclées et recyclables. Un geste après chaque rituel : trier, réintégrer la matière à la chaîne.",
              },
              {
                num: "02",
                title: "Qualité-prix",
                body: "Formuler en Algérie, conditionner en Algérie : un savoir-faire complet sous un même toit, et une maîtrise totale de la chaîne de valeur.",
              },
              {
                num: "03",
                title: "Savoir-faire",
                body: "44 ans de recherche, trois gammes élues Produit de l'année, un département R&D qui signe chaque saison de nouvelles innovations.",
              },
            ].map((p, i) => (
              <Reveal key={p.num} delay={i * 100}>
                <div>
                  <span className="font-display text-7xl text-gold/70 leading-none">{p.num}</span>
                  <h3 className="font-display text-3xl text-ivory mt-4">{p.title}</h3>
                  <p className="text-ivory/70 text-base leading-relaxed mt-4 font-sans">
                    {p.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Best-sellers grid */}
      <section className="py-32">
        <div className="container-prose">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
            <SectionHeading
              eyebrow="Sélection"
              title={
                <>
                  Les rituels<br />
                  <span className="italic font-light">les plus aimés.</span>
                </>
              }
            />
            <Link href="/boutique" className="btn-link self-start md:self-end">
              Toute la boutique <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {curatedSelection().map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* 8. Vénus Mag — journal */}
      <section className="py-32 bg-ivory-dark/40">
        <div className="container-prose">
          <SectionHeading
            eyebrow="Vénus Mag"
            title={
              <>
                Conseils,<br />
                <span className="italic font-light">rituels & ingrédients.</span>
              </>
            }
            intro="Le journal du Laboratoire — sélections, gestes, et la science derrière chaque formule."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-14">
            {featuredPosts.map((post, i) => (
              <Reveal key={post.id} delay={i * 80}>
                <Link href={`/journal/${post.slug}`} className="group block">
                  <div className="relative aspect-[4/3] bg-ivory-dark/40 overflow-hidden mb-5">
                    {post.image ? (
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        sizes="(min-width: 1024px) 33vw, 100vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-venus"
                      />
                    ) : (
                      <div className="h-full w-full grid place-items-center font-display text-4xl text-navy/30">
                        {post.title.slice(0, 1)}
                      </div>
                    )}
                  </div>
                  <p className="label-eyebrow mb-2">
                    {new Date(post.date).toLocaleDateString("fr-FR", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                  <h3 className="font-display text-2xl text-navy group-hover:text-terracotta transition leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-ink/65 text-sm mt-2 line-clamp-2">{post.excerpt}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Testimonials */}
      <section className="py-32">
        <div className="container-prose">
          <div className="max-w-3xl mx-auto text-center">
            <p className="label-eyebrow justify-center mb-5">
              <span className="hairline inline-block align-middle mr-3" />
              Voix clientes
            </p>
            <blockquote className="font-display text-3xl md:text-4xl lg:text-5xl text-navy leading-[1.15] italic">
              « Une qualité exceptionnelle, des résultats qui durent —
              c&apos;est devenu mon rituel. »
            </blockquote>
            <p className="mt-6 text-ink/60 text-sm uppercase tracking-widest">
              Nina M. · Cliente fidèle depuis 2014
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            {[
              {
                t: "Personnellement j'adore les produits Vénus. Je tiens à vous remercier pour la qualité ainsi que les prix des produits.",
                a: "Samah B.",
              },
              {
                t: "Je recommande vivement, c'est extraordinaire — le déodorant, la cire, les shampooings.",
                a: "Soumia B.",
              },
              {
                t: "Franchement, produits au top. Je recommande vivement, c'est pas cher, c'est algérien, bref c'est une fierté.",
                a: "Soumia",
              },
            ].map((q) => (
              <div key={q.a} className="border-t border-ink/15 pt-6">
                <p className="text-ink/75 text-base leading-relaxed">« {q.t} »</p>
                <p className="mt-4 label-eyebrow">— {q.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Newsletter + Exports */}
      <section className="py-32 bg-ivory-dark/40 border-t border-ink/8">
        <div className="container-prose grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            <p className="label-eyebrow mb-4">
              <span className="hairline inline-block align-middle mr-3" />
              Restez connecté
            </p>
            <h2 className="font-display text-4xl lg:text-5xl text-navy">
              La lettre Vénus,<br />
              <span className="italic font-light">une fois par saison.</span>
            </h2>
            <p className="mt-5 text-ink/70 max-w-prose">
              Lancements de gamme, conseils du laboratoire, archives Nostalgie.
              Inscription libre, désabonnement immédiat.
            </p>
            <form className="mt-8 flex flex-col sm:flex-row gap-3 max-w-lg">
              <input
                type="email"
                required
                placeholder="votre@email.com"
                className="flex-1 bg-ivory border border-ink/20 px-5 py-3 text-sm focus:outline-none focus:border-navy"
              />
              <button type="submit" className="btn-primary justify-center">
                S&apos;inscrire
              </button>
            </form>
          </div>
          <div className="lg:col-span-5">
            <p className="label-eyebrow mb-4">
              <span className="hairline inline-block align-middle mr-3 bg-gold" />
              Exports
            </p>
            <h3 className="font-display text-2xl lg:text-3xl text-navy">
              Nous formulons depuis Alger,<br />
              <span className="italic font-light">nous expédions partout.</span>
            </h3>
            <ul className="mt-6 space-y-1 text-ink/70 text-sm">
              <li>Maroc · Tunisie · Mauritanie</li>
              <li>France · Belgique · Allemagne</li>
              <li>Émirats Arabes Unis · Arabie Saoudite</li>
              <li>Côte d&apos;Ivoire · Sénégal</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

function curatedSelection() {
  // pick 8 representative products across maisons
  const buckets = [
    "habba",
    "viderm",
    "buccowhite",
    "private",
    "nostalgie",
    "venus men",
    "shampooing",
    "déodorant",
  ];
  const picked: typeof products = [];
  const seen = new Set<number>();
  for (const kw of buckets) {
    const found = products.find(
      (p) =>
        !seen.has(p.id) &&
        p.image &&
        p.name.toLowerCase().includes(kw.toLowerCase())
    );
    if (found) {
      picked.push(found);
      seen.add(found.id);
    }
  }
  while (picked.length < 8) {
    const next = products.find((p) => !seen.has(p.id) && p.image);
    if (!next) break;
    picked.push(next);
    seen.add(next.id);
  }
  return picked.slice(0, 8);
}
