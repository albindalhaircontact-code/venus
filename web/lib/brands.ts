/**
 * The 14 official Venus marques as listed on laboratoiresvenus.com (home page
 * "Découvrez nos marques" section). Each entry carries the official brand logo
 * scraped from the source site and a short editorial line + a link target.
 *
 * The list is curated to match the original site, in display order.
 */
export type Brand = {
  id: string;
  name: string;
  logo: string;
  href: string;
  blurb: string;
  group: "viderm" | "capillaire" | "soin" | "buccodentaire" | "homme" | "exception";
};

export const brands: Brand[] = [
  // 1. Viderm — 4 sub-brands
  {
    id: "viderm-reg",
    name: "Viderm Régulateur",
    logo: "/brand/viderm-reg.png",
    href: "/maison/viderm.html",
    blurb: "Régulateur sébum, anti-imperfections.",
    group: "viderm",
  },
  {
    id: "viderm-solaire",
    name: "Viderm Solaire S+",
    logo: "/brand/viderm-solaire.png",
    href: "/univers/solaire.html",
    blurb: "Protection UV haute tolérance.",
    group: "viderm",
  },
  {
    id: "viderm-soin",
    name: "Viderm Soin",
    logo: "/brand/viderm-soin.png",
    href: "/maison/viderm.html",
    blurb: "Soin dermatologique du quotidien.",
    group: "viderm",
  },
  {
    id: "viderm-purif",
    name: "Viderm Purifiant",
    logo: "/brand/viderm-purif.png",
    href: "/maison/viderm.html",
    blurb: "Purifiant peaux mixtes à grasses.",
    group: "viderm",
  },
  // 2. Capillaire pro
  {
    id: "coiffix",
    name: "Coiffix Professionnel",
    logo: "/brand/logos/001-02.png",
    href: "/univers/cheveux.html",
    blurb: "La signature professionnelle des salons.",
    group: "capillaire",
  },
  {
    id: "hair-excell",
    name: "Hair Excell",
    logo: "/brand/logos/002-02.png",
    href: "/univers/cheveux.html",
    blurb: "Soins capillaires d'excellence.",
    group: "capillaire",
  },
  {
    id: "mycolor",
    name: "MyColor",
    logo: "/brand/logos/006-02.png",
    href: "/univers/cheveux.html",
    blurb: "Coloration & nuances signature.",
    group: "capillaire",
  },
  {
    id: "iliov",
    name: "Iliov",
    logo: "/brand/logos/005-02.png",
    href: "/univers/cheveux.html",
    blurb: "Coloration veloutée & soin teinte.",
    group: "capillaire",
  },
  // 3. Soin & corps
  {
    id: "savon-liquide",
    name: "Savon Liquide",
    logo: "/brand/logos/004-02.png",
    href: "/univers/corps.html",
    blurb: "Le savon liquide, repensé.",
    group: "soin",
  },
  // 4. Buccodentaire
  {
    id: "buccowhite",
    name: "Buccowhite",
    logo: "/brand/logos/Logo_Buccowhite-1024x688.png",
    href: "/maison/buccodentaire.html",
    blurb: "Le sourire comme un soin.",
    group: "buccodentaire",
  },
  {
    id: "dentomint",
    name: "Dentomint",
    logo: "/brand/logos/007-02.png",
    href: "/univers/buccodentaire.html",
    blurb: "Fraîcheur menthe glaciale.",
    group: "buccodentaire",
  },
  // 5. Homme
  {
    id: "bronx",
    name: "Bronx",
    logo: "/brand/logos/008-02.png",
    href: "/univers/homme.html",
    blurb: "Déodorants & sprays masculins.",
    group: "homme",
  },
  {
    id: "venus-men",
    name: "Venus Men",
    logo: "/brand/logos/LOGO-MEN-AR-FR8-e1745415723444.png",
    href: "/maison/venus-men.html",
    blurb: "La maison masculine du laboratoire.",
    group: "homme",
  },
  // 6. Exception
  {
    id: "private-collection",
    name: "Private Collection",
    logo: "/brand/private-collection-logo-transparent.png",
    href: "/univers/private-collection.html",
    blurb: "Cosmétiques d'exception — Anti-âge.",
    group: "exception",
  },
];
