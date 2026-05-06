"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

/**
 * Editorial hero slideshow used on the home page.
 *
 * Plays the 6 official Venus key-visuals (3 web-banner + 3 Habba Saouda
 * campaign banners with the brand muse) in a slow cross-fade rotation.
 * The banners are full-bleed at 100svh, with a single editorial title +
 * CTA pair anchored on the left — title rotates with the slide.
 */
type Slide = {
  /** Background image (full-bleed). Should be ≥1920×1080 for retina-clean rendering. */
  image: string;
  /** Headline French, two lines. */
  title: string;
  italic: string;
  blurb: string;
  /** Eyebrow label above title. */
  eyebrow: string;
  /** CTA label + href. */
  ctaLabel: string;
  ctaHref: string;
};

const slides: Slide[] = [
  {
    image: "/brand/banners/Banniere_2001x674_Habba-saouda_04.jpg",
    eyebrow: "Habba Saouda — Hair Glow",
    title: "L'éclat des bruns,",
    italic: "par les graines de nigelle.",
    blurb:
      "La nouvelle gamme capillaire signée Laboratoires Venus — formule à l'acide hyaluronique et extrait pur de graines de nigelle.",
    ctaLabel: "Découvrir la gamme",
    ctaHref: "/maison/habba-saouda",
  },
  {
    image: "/brand/banners/Banniere_2001x674_Habba-saouda_02.jpg",
    eyebrow: "Habba Saouda — Hair Glow",
    title: "Proven care,",
    italic: "new potential.",
    blurb:
      "Shampooing sublimateur enrichi en huile de nigelle. Formulé pour révéler la profondeur des cheveux bruns.",
    ctaLabel: "Voir le shampooing",
    ctaHref: "/produit/shampooing-sublimateur-hair-glow-a-lacide-hyaluronique-habba-saouda",
  },
  {
    image: "/brand/banners/Banniere_2001x674_Habba-saouda_01.jpg",
    eyebrow: "Habba Saouda — Hair Glow",
    title: "Une promesse,",
    italic: "trois gestes.",
    blurb:
      "Shampooing, après-shampooing, masque. Le rituel complet pour les chevelures brunes assoiffées d'éclat.",
    ctaLabel: "Le rituel complet",
    ctaHref: "/maison/habba-saouda",
  },
  {
    image: "/brand/banners/web-banner-1-VENUS-_1_11zon-scaled.png",
    eyebrow: "Vos essentiels du quotidien",
    title: "Hair Glow,",
    italic: "your daily essentials.",
    blurb:
      "Soins capillaires Hair Glow — la signature Venus pour des cheveux nourris en profondeur.",
    ctaLabel: "Toute la gamme",
    ctaHref: "/maison/habba-saouda",
  },
  {
    image: "/brand/banners/web-banner-2-VENUS-_2_11zon-scaled.png",
    eyebrow: "Hair Conditioner Glow",
    title: "Proven nourishment,",
    italic: "effortless shine.",
    blurb:
      "Après-shampooing à l'acide hyaluronique — démêle, nourrit, fait briller sans alourdir.",
    ctaLabel: "Voir l'après-shampooing",
    ctaHref: "/produit/apres-shampooing-sublimateur-hair-glow-a-lacide-hyaluronique-habba-saouda",
  },
  {
    image: "/brand/banners/web-banner-3-VENUS-_3_11zon-scaled.png",
    eyebrow: "Hair Mask Glow",
    title: "Le masque,",
    italic: "intensité reconstituée.",
    blurb:
      "Le masque sublimateur pour cheveux bruns — concentration maximale en actifs nigelle + acide hyaluronique.",
    ctaLabel: "Voir le masque",
    ctaHref: "/produit/masque-sublimateur-hair-glow-a-lacide-hyaluronique-habba-saouda",
  },
];

export function HeroSlideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-[#1A0F1A]">
      {/* Layered slides — cross-fade */}
      {slides.map((s, i) => (
        <div
          key={s.image}
          className="absolute inset-0 transition-opacity duration-[1800ms] ease-in-out"
          style={{ opacity: i === index ? 1 : 0 }}
          aria-hidden={i !== index}
        >
          <Image
            src={s.image}
            alt={s.title + " " + s.italic}
            fill
            priority={i === 0}
            sizes="100vw"
            className="object-cover"
            unoptimized
          />
          {/* Left-side darker wash for legibility of editorial copy */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(110deg, rgba(15,5,15,0.72) 0%, rgba(15,5,15,0.55) 30%, rgba(15,5,15,0.10) 55%, rgba(15,5,15,0) 70%)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0E0E10]/55" />
        </div>
      ))}

      {/* Foreground copy */}
      <div className="relative h-full container-prose flex flex-col justify-center max-w-7xl">
        {slides.map((s, i) => (
          <div
            key={s.image + "-copy"}
            className={`absolute inset-0 container-prose flex flex-col justify-center transition-opacity duration-[1200ms] ${
              i === index ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <div className="max-w-2xl lg:max-w-3xl text-ivory">
              <p className="label-eyebrow !text-ivory/85 mb-7 flex items-center gap-3">
                <span className="inline-block h-px w-12 bg-gold" />
                <span className="text-gold-soft">{s.eyebrow}</span>
              </p>
              <h1
                className="font-display text-ivory text-balance leading-[0.98]"
                style={{
                  fontSize: "clamp(2.5rem, 6.5vw, 6rem)",
                  textShadow: "0 2px 28px rgba(0,0,0,0.45)",
                }}
              >
                {s.title}
                <br />
                <span className="italic font-light">{s.italic}</span>
              </h1>
              <p
                className="mt-7 max-w-[36rem] text-ivory/90 text-base md:text-lg leading-relaxed font-sans"
                style={{ textShadow: "0 1px 12px rgba(0,0,0,0.4)" }}
              >
                {s.blurb}
              </p>
              <div className="mt-10 flex flex-wrap gap-4 items-center">
                <Link
                  href={s.ctaHref}
                  className="btn-primary !bg-gold !text-[#1A0F1A] hover:!bg-ivory"
                >
                  {s.ctaLabel} <ArrowRight size={14} />
                </Link>
                <Link href="/boutique" className="btn-link !text-ivory !border-ivory/40">
                  Toute la boutique
                </Link>
              </div>
            </div>
          </div>
        ))}

        {/* Bottom row — heritage stamp + slide indicators */}
        <div className="absolute bottom-10 left-0 right-0 container-prose flex flex-col md:flex-row md:items-center md:justify-between gap-5 max-w-7xl">
          <div className="flex items-center gap-5 opacity-90">
            <span className="vintage-stamp text-ivory/70 border-ivory/30">
              Laboratoires Venus · Algérie · 1981
            </span>
            <span className="text-[10px] tracking-widest uppercase text-gold-soft hidden md:inline">
              79 récompenses · 44 ans
            </span>
          </div>
          <div className="flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                aria-label={`Visuel ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-px w-8 lg:w-12 transition-all duration-500 ${
                  i === index ? "bg-gold opacity-100" : "bg-ivory opacity-30"
                }`}
                style={i === index ? { height: 2 } : undefined}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
