import { categories } from "./data";

/**
 * Top-level "univers" used for navigation and the home mosaic.
 * Each one resolves to one or more category slugs in the catalog.
 *
 * The visual identity (colors, typography, references) lives in
 * `univers-themes.ts`. This file only carries the data and routing-relevant
 * information.
 */

export type Univers = {
  id: string;
  label: string;
  tagline: string;
  hero: string;
  tile: string;
  rootCategorySlugs: string[];
  /** Loose name keywords used to fuzzily match products to this univers when
   *  category linkage is missing. */
  nameKeywords: string[];
  accent: "navy" | "terracotta" | "sage" | "gold" | "sky" | "ink" | "cyan" | "copper";
};

export const univers: Univers[] = [
  {
    id: "visage",
    label: "Visage",
    tagline: "Soins dermiques, démaquillants, masques",
    hero: "https://laboratoiresvenus.com/wp-content/uploads/2021/06/cute-girl-with-beautiful-face.jpg",
    tile: "https://laboratoiresvenus.com/wp-content/uploads/2021/06/Viderm-soin-logo.png",
    rootCategorySlugs: [
      "dermique",
      "nettoyant-visage",
      "lingette-demaquillante",
      "serums",
      "cremes-sans-rincage",
      "masques",
      "soins-acne",
      "soins-anti-age",
      "soins-anti-imperfections",
      "soins-hydratants",
      "peaux-sensibles",
    ],
    nameKeywords: ["visage", "viderm", "tonique", "sérum", "serum", "crème de jour", "crème de nuit", "patch", "démaquillant"],
    accent: "navy",
  },
  {
    id: "cheveux",
    label: "Cheveux",
    tagline: "Shampooings, masques, sérums, soins ciblés",
    hero: "https://laboratoiresvenus.com/wp-content/uploads/2026/04/Banniere_2001x674_Habba-saouda_01.jpg",
    tile: "https://laboratoiresvenus.com/wp-content/uploads/2026/04/Banniere_2001x674_Habba-saouda_01.jpg",
    rootCategorySlugs: [
      "cheveux",
      "cheveux-secs",
      "cheveux-gras",
      "cheveux-abimes",
      "cheveux-fragiles",
      "cheveux-fins-et-sensibles",
      "cheveux-frises",
      "cheveux-bruns-et-ternes",
      "cheveux-clairs-et-chatains",
      "cheveux-indisciplines",
      "cheveux-longs-et-pointes-fragiles",
      "cheveux-normaux-a-secs",
      "cheveux-reches-et-boucles-2",
      "cheveux-ternes",
      "tous-types-de-cheveux",
      "masques-capillaires",
      "sans-sulfates",
      "professional",
    ],
    nameKeywords: ["shampoo", "shampooing", "après-shampoo", "apres-shampoo", "masque cap", "soin cheveux", "habba", "hair glow", "kératine", "keratine", "démêlant"],
    accent: "copper",
  },
  {
    id: "corps",
    label: "Corps",
    tagline: "Gels douche, déodorants, brumes, soins",
    hero: "https://laboratoiresvenus.com/wp-content/uploads/2021/06/closeup-of-smiling-woman-making-frame-gesture.jpg",
    tile: "https://laboratoiresvenus.com/wp-content/uploads/2025/07/Deo_PURE_Clean.png",
    rootCategorySlugs: [
      "corps",
      "gel-douche",
      "gelees-de-douche",
      "mousses-de-douche",
      "savon-liquide",
      "deodorants",
      "deodorant",
      "deo-roll-on",
      "lait-de-corps",
      "hydrater-le-corps",
      "exfolier-le-corps",
      "epilation",
      "hygiene-des-mains",
    ],
    nameKeywords: ["gel douche", "déodorant", "deodorant", "deo", "lait corps", "savon", "main"],
    accent: "terracotta",
  },
  {
    id: "solaire",
    label: "Solaire",
    tagline: "Protection UV — Viderm Solaire S+",
    hero: "https://laboratoiresvenus.com/wp-content/uploads/2025/05/sun-protect.jpg",
    tile: "https://laboratoiresvenus.com/wp-content/uploads/2025/05/sun-protect.jpg",
    rootCategorySlugs: [
      "solaire",
      "viderm-solaire",
      "lait-solaire",
      "creme-solaire-visage",
      "bronzage",
    ],
    nameKeywords: ["solaire", "soleil", "uv", "spf", "bronzage", "ecran total"],
    accent: "cyan",
  },
  {
    id: "bebe",
    label: "Bébé",
    tagline: "Lingettes, shampooings, lait de toilette",
    hero: "https://laboratoiresvenus.com/wp-content/uploads/2021/06/Lingettes-Aloe-vera-1.png",
    tile: "https://laboratoiresvenus.com/wp-content/uploads/2023/11/lingette2.602-02.png",
    rootCategorySlugs: [
      "bebe",
      "lingettes-bebe",
      "shampoings-bebe",
      "lingettes",
      "soin-peau-sensible",
    ],
    nameKeywords: ["bébé", "bebe", "baby", "enfant", "nourrisson"],
    accent: "sky",
  },
  {
    id: "homme",
    label: "Homme",
    tagline: "Vénus Men — Gel douche, déodorant, sérum",
    hero: "https://laboratoiresvenus.com/wp-content/uploads/2025/07/DM461-BOOST-DEO-roll-on-3D-products-venus-02.png",
    tile: "https://laboratoiresvenus.com/wp-content/uploads/2025/07/DM461-BOOST-DEO-roll-on-3D-products-venus-02.png",
    rootCategorySlugs: [
      "venus-men",
      "gel-douche-homme",
      "corp",
    ],
    nameKeywords: ["men", "for men", "homme", "venus men", "energy"],
    accent: "copper",
  },
  {
    id: "parfums",
    label: "Parfums",
    tagline: "Nostalgie & Private Collection",
    hero: "https://laboratoiresvenus.com/wp-content/uploads/2021/06/Venus-Private-collection-logoswhit.png",
    tile: "https://laboratoiresvenus.com/wp-content/uploads/2021/06/Venus-Private-collection-logoswhit.png",
    rootCategorySlugs: [
      "brumes-parfumees",
      "eau-de-toilette",
      "eau-de-cologne",
      "parfums",
      "private-collection",
      "nostalgie",
      "parfumer-le-corps",
    ],
    nameKeywords: ["parfum", "eau de parfum", "eau de toilette", "eau de cologne", "fragrance", "nostalgie", "private collection", "brume parfumée"],
    accent: "gold",
  },
  {
    id: "buccodentaire",
    label: "Buccodentaire",
    tagline: "Buccowhite, Dentomint",
    hero: "https://laboratoiresvenus.com/wp-content/uploads/2022/02/Logo_Buccowhite.png",
    tile: "https://laboratoiresvenus.com/wp-content/uploads/2022/02/Logo_Buccowhite.png",
    rootCategorySlugs: [
      "buccodentaire",
      "buccowhite",
      "blancheur",
      "gencives",
    ],
    nameKeywords: ["dentifrice", "buccowhite", "dentomint", "dental", "gencive", "haleine", "sourire", "blancheur"],
    accent: "cyan",
  },
];

export function universById(id: string): Univers | undefined {
  return univers.find((u) => u.id === id);
}

export function categoriesForUnivers(u: Univers) {
  return categories.filter(
    (c) =>
      u.rootCategorySlugs.includes(c.slug) ||
      u.rootCategorySlugs.some((root) => c.slug.startsWith(root + "-"))
  );
}
