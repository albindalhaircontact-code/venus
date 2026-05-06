import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Private Collection — Bientôt disponible",
  description:
    "Une nouvelle gamme cosmétique d'exception signée Laboratoires Venus. Édition limitée — bientôt disponible.",
};

/**
 * Private Collection — page éditoriale "Bientôt disponible".
 *
 * Reproduit la page officielle https://laboratoiresvenus.com/pr-page/
 * (qui annonce simplement "Bientôt disponible") en y ajoutant un teaser
 * éditorial avec les visuels Anti-Âge déjà fournis par la marque.
 *
 * Le logo Private Collection officiel est utilisé sur fond transparent.
 */
export default function PrivateCollectionPage() {
  return (
    <div data-univers="private-collection" className="bg-[#0A0908] text-[#E8C770]">
      {/* Hero — full-bleed marble + gold ambiance */}
      <section className="relative min-h-[88svh] w-full overflow-hidden">
        {/* Background — marble luxury composition supplied by Venus */}
        <div className="absolute inset-0">
          <Image
            src="/brand/private-collection/anti-age-luxury.webp"
            alt="Private Collection Venus — composition marbre"
            fill
            priority
            sizes="100vw"
            className="object-cover"
            unoptimized
          />
          {/* Gold-warm wash for legibility */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(115deg, rgba(8,5,3,0.78) 0%, rgba(8,5,3,0.55) 35%, rgba(8,5,3,0.10) 65%, rgba(8,5,3,0) 90%)",
            }}
          />
          <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#0A0908] via-[#0A0908]/40 to-transparent" />
        </div>

        <div className="relative h-full container-prose flex flex-col justify-center pt-32 pb-20 max-w-7xl">
          <div className="max-w-2xl">
            {/* Logo officiel Private Collection sur fond transparent */}
            <div className="mb-10">
              <Image
                src="/brand/private-collection-logo-transparent.png"
                alt="Laboratoires Venus — Private Collection"
                width={280}
                height={224}
                className="h-32 lg:h-44 w-auto"
                style={{ filter: "drop-shadow(0 2px 18px rgba(0,0,0,0.45))" }}
                unoptimized
              />
            </div>
            <p className="text-[11px] tracking-[0.32em] uppercase mb-7 flex items-center gap-3 text-[#C9A063]">
              <span className="inline-block h-px w-12 bg-[#C9A063]" />
              <span>Édition limitée · Bientôt disponible</span>
            </p>
            <h1
              className="font-display italic font-light text-[#E8C770] text-balance leading-[0.98]"
              style={{
                fontSize: "clamp(2.75rem, 7vw, 6rem)",
                textShadow: "0 2px 28px rgba(0,0,0,0.5)",
              }}
            >
              Une nouvelle gamme,
              <br />
              <span className="not-italic font-medium">une signature.</span>
            </h1>
            <p
              className="mt-7 max-w-[36rem] text-[#F4E4C1]/90 text-base md:text-lg leading-relaxed font-sans"
              style={{ textShadow: "0 1px 12px rgba(0,0,0,0.4)" }}
            >
              Une collection cosmétique d&apos;exception, formulée pour
              célébrer les rituels de soin les plus précieux. Disponible
              prochainement en pharmacies et parapharmacies sélectionnées.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 items-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3 bg-[#C9A063] text-[#0A0908] hover:bg-[#E8C770] transition-colors text-[11px] tracking-[0.22em] uppercase font-medium"
              >
                Être informé du lancement <ArrowRight size={14} />
              </Link>
              <Link
                href="/univers/parfums"
                className="text-[11px] tracking-[0.22em] uppercase text-[#E8C770]/70 hover:text-[#E8C770] transition border-b border-[#E8C770]/30 pb-1"
              >
                Découvrir nos parfums
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Manifeste */}
      <section className="py-32 lg:py-40 bg-[#0A0908]">
        <div className="container-prose grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <p className="text-[11px] tracking-[0.32em] uppercase mb-6 text-[#C9A063] flex items-center gap-3">
              <span className="inline-block h-px w-12 bg-[#C9A063]" />
              Manifeste
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-[#E8C770] leading-[1.05]">
              L&apos;exigence,
              <br />
              <span className="italic font-light">portée à son comble.</span>
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-6 text-[#F4E4C1]/85 text-base lg:text-lg leading-relaxed font-sans">
            <p>
              Au sein de Laboratoires Venus, la Private Collection rassemble
              les formulations les plus rares et les gestes de soin les plus
              précieux. Une signature de laboratoire, dans la tradition des
              maisons d&apos;exception.
            </p>
            <p className="text-[#F4E4C1]/65">
              Chaque référence est conçue à l&apos;échelle de l&apos;artisan&nbsp;:
              ingrédients sélectionnés un à un, formules longuement éprouvées,
              flacons dessinés pour traverser le temps.
            </p>
          </div>
        </div>
      </section>

      {/* Teaser produit — Anti-Âge */}
      <section className="py-24 bg-gradient-to-b from-[#0A0908] to-[#1A1208]">
        <div className="container-prose">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-square bg-[#F4E4C1]/5 border border-[#C9A063]/20 overflow-hidden">
              <Image
                src="/brand/private-collection/anti-age-clean.webp"
                alt="Private Collection — Gamme Anti-Âge à l'acide hyaluronique"
                fill
                sizes="(min-width:1024px) 50vw, 100vw"
                className="object-cover"
                unoptimized
              />
            </div>
            <div>
              <p className="text-[11px] tracking-[0.32em] uppercase mb-5 text-[#C9A063]">
                Premier opus
              </p>
              <h2 className="font-display italic font-light text-4xl lg:text-5xl text-[#E8C770] leading-[1.05]">
                Anti-Âge
                <br />
                <span className="not-italic">à l&apos;acide hyaluronique.</span>
              </h2>
              <p className="mt-6 text-[#F4E4C1]/80 leading-relaxed font-sans">
                Quatre gestes essentiels — purifier, démaquiller, traiter, hydrater —
                réunis dans un rituel anti-âge complet. Une formule signature
                à base d&apos;acide hyaluronique haute concentration.
              </p>
              <ul className="mt-8 space-y-4 text-[#F4E4C1]/75 text-sm">
                {[
                  ["Lotion Tonique Anti-Âge", "120 ml"],
                  ["Lait Démaquillant", "100 ml"],
                  ["Sérum Hydratant Anti-Âge", "à l'acide hyaluronique"],
                  ["Crème Hydratante Anti-Âge", "à l'acide hyaluronique"],
                ].map(([n, sub]) => (
                  <li key={n} className="flex items-baseline gap-3 border-b border-[#C9A063]/15 pb-3">
                    <span className="text-[#C9A063] font-medium tracking-wide">{n}</span>
                    <span className="text-[#F4E4C1]/45 text-[11px] uppercase tracking-widest">
                      {sub}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <span className="inline-flex items-center gap-2 px-4 py-2 border border-[#C9A063]/40 text-[10px] tracking-[0.28em] uppercase text-[#C9A063]">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#C9A063]" />
                  Bientôt disponible
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact teaser */}
      <section className="py-24 bg-[#0A0908] border-t border-[#C9A063]/15">
        <div className="container-prose text-center max-w-2xl mx-auto">
          <p className="text-[11px] tracking-[0.32em] uppercase mb-5 text-[#C9A063]">
            Restez informé
          </p>
          <h3 className="font-display italic font-light text-3xl md:text-4xl text-[#E8C770] leading-[1.1]">
            Soyez les premiers à découvrir
            <br />
            la Private Collection.
          </h3>
          <p className="mt-5 text-[#F4E4C1]/70 text-sm leading-relaxed">
            Pour toute information sur la disponibilité de la gamme, contactez
            directement notre service consommateurs.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:contact@labovenus.dz"
              className="text-[12px] tracking-[0.22em] uppercase text-[#C9A063] hover:text-[#E8C770] transition border-b border-[#C9A063]/40 pb-1"
            >
              contact@labovenus.dz
            </a>
            <span className="text-[#C9A063]/40 hidden sm:inline">·</span>
            <a
              href="tel:0770400040"
              className="text-[12px] tracking-[0.22em] uppercase text-[#C9A063] hover:text-[#E8C770] transition border-b border-[#C9A063]/40 pb-1"
            >
              0770 40 00 40
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
