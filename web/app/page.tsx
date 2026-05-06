import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { products, posts } from "@/lib/data";
import { mainMosaicUnivers } from "@/lib/univers";
import { universThemes } from "@/lib/univers-themes";
import { maisons, maisonProducts } from "@/lib/maisons";
import { brands } from "@/lib/brands";
import { ProductCard } from "@/components/product-card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { HeroSlideshow } from "@/components/hero-slideshow";

export default function HomePage() {
  const habba = maisonProducts(maisons[0]).slice(0, 3);
  const featuredPosts = posts
    .filter((p) => !p.title.toLowerCase().includes("protection"))
    .slice(0, 3);

  return (
    <>
      {/* 1. Hero slideshow — 6 visuels officiels avec fondu enchaîné */}
      <HeroSlideshow />

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
              Né en Algérie, le Laboratoire Venus formule depuis quatre décennies les rituels du
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
            eyebrow="L'univers Venus"
            title={
              <>
                Huit territoires de soin,<br />
                <span className="italic font-light">une seule signature.</span>
              </>
            }
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-14">
            {mainMosaicUnivers.map((u, i) => {
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
            intro="Chaque maison Venus exprime une promesse — dermique, capillaire, parfumée, masculine, infantile. Toutes naissent du même savoir-faire, depuis 1981."
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
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink/65" />
                  {m.logo && (
                    <div className="absolute inset-x-0 bottom-0 p-6 flex items-end justify-start">
                      <div className="bg-ivory/95 backdrop-blur-sm px-4 py-3 inline-flex items-center justify-center max-w-[60%]">
                        <Image
                          src={m.logo}
                          alt={`Logo ${m.shortName}`}
                          width={140}
                          height={70}
                          className="max-h-[44px] w-auto object-contain"
                          unoptimized
                        />
                      </div>
                    </div>
                  )}
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

      {/* 5b. Private Collection — collection à part, dorée et précieuse */}
      <section className="relative py-28 lg:py-36 overflow-hidden bg-[#0A0908] text-[#F5E9D0]">
        <div className="absolute inset-0 opacity-25">
          <Image
            src="https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&fit=crop&w=2400&q=80"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
            unoptimized
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 75% 50%, rgba(212,162,78,0.18) 0%, rgba(10,9,8,0.92) 60%)",
            }}
          />
        </div>
        <div className="relative container-prose grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            {/* Logo officiel Private Collection sur fond transparent */}
            <Image
              src="/brand/private-collection-logo-transparent.png"
              alt="Laboratoires Venus — Private Collection"
              width={240}
              height={192}
              className="mb-8 h-24 lg:h-28 w-auto"
              style={{ filter: "drop-shadow(0 2px 18px rgba(0,0,0,0.45))" }}
              unoptimized
            />
            <p
              className="label-eyebrow mb-4 flex items-center gap-3"
              style={{ color: "#D4A24E" }}
            >
              <span className="inline-block h-px w-10" style={{ background: "#D4A24E" }} />
              Une collection à part — Bientôt disponible
            </p>
            <h2
              className="font-display text-balance"
              style={{
                color: "#F5E9D0",
                fontSize: "clamp(2.5rem, 5vw, 4.25rem)",
                lineHeight: 1.04,
              }}
            >
              Anti-âge,
              <br />
              <span className="italic font-light" style={{ color: "#E8C770" }}>
                à l&apos;acide hyaluronique.
              </span>
            </h2>
            <p
              className="mt-6 text-base md:text-lg leading-relaxed font-sans max-w-xl"
              style={{ color: "rgba(245,233,208,0.82)" }}
            >
              Lotion Tonique, Lait Démaquillant, Sérum Hydratant, Crème Hydratante.
              La signature anti-âge Private Collection — précision dermatologique,
              écrin doré, rituel d&apos;exception.
            </p>
            <p
              className="mt-3 text-sm leading-relaxed font-sans italic max-w-xl"
              style={{ color: "rgba(232,199,112,0.85)" }}
            >
              « Luxury that defies the years. »
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/univers/private-collection"
                className="btn-primary"
                style={{
                  background: "#D4A24E",
                  color: "#0A0908",
                  borderColor: "#D4A24E",
                }}
              >
                Découvrir la collection <ArrowRight size={14} />
              </Link>
            </div>
          </div>
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative aspect-[4/5] lg:aspect-[5/6] overflow-hidden">
              <Image
                src="/brand/private-collection/anti-age-luxury.webp"
                alt="Private Collection — Anti-âge à l'acide hyaluronique"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5c. Découvrez nos marques — 14 signatures officielles */}
      <section className="py-28 bg-ivory-dark/30 border-y border-ink/8">
        <div className="container-prose">
          <div className="max-w-2xl">
            <p className="label-eyebrow mb-5">
              <span className="hairline inline-block align-middle mr-3" />
              Découvrez nos marques
            </p>
            <h2 className="font-display text-4xl lg:text-5xl text-navy">
              Quatorze signatures,
              <br />
              <span className="italic font-light">un héritage commun.</span>
            </h2>
            <p className="mt-5 text-ink/70 text-base leading-relaxed font-sans max-w-xl">
              Du soin dermatologique Viderm aux parfumeries d&apos;exception
              Private Collection — chaque marque Venus exprime un savoir-faire
              spécifique du Laboratoire.
            </p>
          </div>
          <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 md:gap-4">
            {brands.map((b) => (
              <Link
                key={b.id}
                href={b.href}
                title={b.name}
                className="group bg-ivory border border-ink/8 hover:border-navy/30 hover:shadow-md transition-all duration-500 aspect-square flex items-center justify-center p-6 relative overflow-hidden"
              >
                <Image
                  src={b.logo}
                  alt={b.name}
                  width={140}
                  height={140}
                  className="max-w-full max-h-full object-contain transition-transform duration-700 ease-venus group-hover:scale-105"
                  unoptimized
                />
                <span className="absolute inset-0 bg-navy/95 text-ivory opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-3 text-center">
                  <span className="font-display text-base">{b.name}</span>
                  <span className="text-[10px] uppercase tracking-widest text-gold-soft mt-2">
                    {b.blurb}
                  </span>
                </span>
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

      {/* 6b. Vidéo signature — film de marque */}
      <section className="py-28 bg-ivory-dark/30">
        <div className="container-prose">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-4">
              <p className="label-eyebrow mb-4">
                <span className="hairline inline-block align-middle mr-3 bg-terracotta" />
                Le film
              </p>
              <h2 className="font-display text-3xl lg:text-4xl text-navy leading-tight">
                Habba Saouda<br />
                <span className="italic font-light">— en mouvement.</span>
              </h2>
              <p className="mt-5 text-ink/70 text-base leading-relaxed">
                Le film publicitaire signé Laboratoires Venus pour la nouvelle
                gamme capillaire. La graine de nigelle, l&apos;éclat des bruns,
                le geste précis du Laboratoire.
              </p>
            </div>
            <div className="lg:col-span-8">
              <div className="relative aspect-video bg-ink overflow-hidden border border-ink/10">
                <iframe
                  src="https://www.youtube.com/embed/_O3HFFBG8Ns?autoplay=1&mute=1&loop=1&playlist=_O3HFFBG8Ns&controls=1&rel=0&modestbranding=1&playsinline=1"
                  title="Habba Saouda — Hair Glow · Film publicitaire Venus"
                  className="absolute inset-0 h-full w-full"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="mt-3 grid grid-cols-2 gap-3">
                <div className="relative aspect-video bg-ink overflow-hidden border border-ink/10">
                  <iframe
                    src="https://www.youtube.com/embed/chm0eCfrMtY?autoplay=1&mute=1&loop=1&playlist=chm0eCfrMtY&controls=1&rel=0&modestbranding=1&playsinline=1"
                    title="Venus — Film de marque"
                    className="absolute inset-0 h-full w-full"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <Link
                  href="https://www.youtube.com/channel/UCcIIPIHz8Zp197_XyEQStdg"
                  className="aspect-video bg-navy text-ivory flex items-center justify-center px-6 hover:bg-navy/90 transition-colors text-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>
                    <p className="font-display text-xl">YouTube Venus</p>
                    <p className="text-[11px] uppercase tracking-widest text-gold-soft mt-2">
                      Toute la chaîne →
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6c. Certifications & reconnaissances — exactement 3 */}
      <section className="py-24 bg-ivory border-y border-ink/8">
        <div className="container-prose">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <p className="label-eyebrow mb-4">
                <span className="hairline inline-block align-middle mr-3 bg-gold" />
                Reconnaissances
              </p>
              <h2 className="font-display text-3xl lg:text-4xl text-navy">
                Trois certifications,<br />
                <span className="italic font-light">une exigence.</span>
              </h2>
            </div>
            <p className="text-ink/65 text-sm max-w-md">
              Laboratoires Venus est membre de l&apos;AFAO et de la PDA Algérie,
              et signataire de la charte Ikhtiyari.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 items-stretch">
            {[
              { src: "/brand/certifications/PDA_ALGERIE_2023-834x1024.jpg", alt: "PDA Algérie 2023", caption: "PDA Algérie · 2023" },
              { src: "/brand/certifications/logo-afao-03-887x1024.png", alt: "AFAO", caption: "AFAO" },
              { src: "/brand/certifications/Logo-Ikhtiyari-1000.png", alt: "Ikhtiyari", caption: "Ikhtiyari" },
            ].map((c) => (
              <div
                key={c.alt}
                className="bg-ivory-dark/30 border border-ink/8 p-10 flex flex-col items-center justify-center gap-5 aspect-[4/3]"
                title={c.alt}
              >
                <div className="flex-1 flex items-center justify-center w-full">
                  <Image
                    src={c.src}
                    alt={c.alt}
                    width={240}
                    height={240}
                    className="max-w-[180px] max-h-[160px] object-contain"
                    unoptimized
                  />
                </div>
                <p className="text-[10px] tracking-[0.22em] uppercase text-navy/70">
                  {c.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6d. Call-center — bannière officielle */}
      <section className="py-20 bg-navy text-ivory">
        <div className="container-prose grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="label-eyebrow !text-gold-soft mb-4">
              <span className="hairline inline-block align-middle mr-3 bg-gold" />
              Service Consommateur
            </p>
            <h2 className="font-display text-3xl lg:text-5xl leading-[1.05]">
              Une question ?<br />
              <span className="italic font-light">Notre équipe vous répond.</span>
            </h2>
            <p className="mt-6 text-ivory/75 text-base leading-relaxed max-w-md">
              Du dimanche au jeudi, 8h&nbsp;–&nbsp;17h. Nos conseillers vous
              accompagnent pour les recommandations de soin et le suivi des
              commandes.
            </p>
            <div className="mt-7 flex flex-col gap-2 text-sm text-ivory/85">
              <a href="tel:0770400040" className="hover:text-gold transition">
                <span className="font-display text-2xl lg:text-3xl tracking-wider">0770 40 00 40</span>
              </a>
              <a href="mailto:contact@labovenus.dz" className="text-ivory/70 hover:text-gold transition">
                contact@labovenus.dz
              </a>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/brand/banners/Call-center-01-1024x232.png"
              alt="Service Consommateur Laboratoires Venus — 0770 40 00 40"
              width={1024}
              height={232}
              className="w-full h-auto"
              unoptimized
            />
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

      {/* 8. Venus Mag — journal */}
      <section className="py-32 bg-ivory-dark/40">
        <div className="container-prose">
          <SectionHeading
            eyebrow="Venus Mag"
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
                t: "Personnellement j'adore les produits Venus. Je tiens à vous remercier pour la qualité ainsi que les prix des produits.",
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

      {/* 9b. Disponibles aussi sur — Jumia / Kadisse */}
      <section className="py-20 bg-ivory border-t border-ink/8">
        <div className="container-prose">
          <p className="label-eyebrow mb-6 justify-center text-center">
            <span className="hairline inline-block align-middle mr-3" />
            Disponibles aussi sur
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
            <Link
              href="https://www.jumia.dz/venus/"
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-ivory-dark/40 hover:bg-ivory-dark/60 transition-all duration-500 border border-ink/10 hover:border-navy/30"
            >
              <div className="relative aspect-[4/1] flex items-center justify-center px-6">
                <Image
                  src="/brand/banners/BannerJumia4-22.png"
                  alt="Boutique Venus officielle sur Jumia Algérie"
                  width={520}
                  height={130}
                  className="max-w-full max-h-full object-contain"
                  unoptimized
                />
              </div>
            </Link>
            <Link
              href="https://kadisse.com/?s=laboratoire+venus&post_type=product&lang=fr"
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-ivory-dark/40 hover:bg-ivory-dark/60 transition-all duration-500 border border-ink/10 hover:border-navy/30"
            >
              <div className="relative aspect-[4/1] flex items-center justify-center px-6">
                <Image
                  src="/brand/banners/kadisse-banner.jpg"
                  alt="Boutique Venus officielle sur Kadisse Algérie"
                  width={520}
                  height={130}
                  className="max-w-full max-h-full object-contain"
                  unoptimized
                />
              </div>
            </Link>
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
              La lettre Venus,<br />
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
            <div className="relative aspect-[4/3] overflow-hidden bg-ivory-dark/40 border border-ink/10">
              <Image
                src="/brand/banners/We-export_1120x700px_1-1024x640.png"
                alt="Nous exportons — Venus dans le monde"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
                unoptimized
              />
            </div>
            <p className="label-eyebrow mt-6 mb-3">
              <span className="hairline inline-block align-middle mr-3 bg-gold" />
              Exports
            </p>
            <ul className="space-y-1 text-ink/70 text-sm">
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
