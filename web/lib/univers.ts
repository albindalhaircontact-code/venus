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
  /** Keywords to EXCLUDE from this univers (so private-collection products
   *  don't leak into general parfums, etc.). */
  excludeKeywords?: string[];
  accent: "navy" | "terracotta" | "sage" | "gold" | "sky" | "ink" | "cyan" | "copper";
  /** When true, the univers is shown in the main 8-tile mosaic on the home page.
   *  Special collections (Private Collection) are surfaced separately. */
  inMainMosaic?: boolean;
};

export const univers: Univers[] = [
  {
    id: "visage",
    label: "Visage",
    tagline: "Soins dermiques, démaquillants, masques",
    // Editorial portrait, fresh skin — read in journal article "10 conseils corps".
    hero: "https://laboratoiresvenus.com/wp-content/uploads/2021/06/close-up-of-woman-with-perfect-healthy-fresh-skin-sits-at-the-table-hands-crossed-and-touching-face-1.jpg",
    tile: "https://laboratoiresvenus.com/wp-content/uploads/2021/06/cute-girl-with-beautiful-face.jpg",
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
    inMainMosaic: true,
  },
  {
    id: "cheveux",
    label: "Cheveux",
    tagline: "Shampooings, masques, sérums, soins ciblés",
    // Editorial hair — clean shot, no baked-in product text.
    hero: "https://laboratoiresvenus.com/wp-content/uploads/2021/07/rear-view-of-combing-healthy-long-straight-female-hair-isolated-on-gray.jpg",
    tile: "https://laboratoiresvenus.com/wp-content/uploads/2021/07/rear-view-of-combing-healthy-long-straight-female-hair-isolated-on-gray.jpg",
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
    inMainMosaic: true,
  },
  {
    id: "corps",
    label: "Corps",
    tagline: "Gels douche, déodorants, brumes, soins",
    // Body care editorial — gommage / clean skin texture.
    hero: "https://laboratoiresvenus.com/wp-content/uploads/2021/06/gommage-corps-maison-1280x720-1.jpg",
    tile: "https://laboratoiresvenus.com/wp-content/uploads/2021/06/cute-girl-with-beautiful-face-1.jpg",
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
    inMainMosaic: true,
  },
  {
    id: "solaire",
    label: "Solaire",
    tagline: "Protection UV — Viderm Solaire S+",
    // Editorial — woman applying sun cream on the beach.
    hero: "https://laboratoiresvenus.com/wp-content/uploads/2021/06/young-beautiful-woman-applying-sun-cream-on-the-beach.jpg",
    tile: "https://laboratoiresvenus.com/wp-content/uploads/2021/06/young-beautiful-woman-applying-sun-cream-on-the-beach.jpg",
    rootCategorySlugs: [
      "solaire",
      "viderm-solaire",
      "lait-solaire",
      "creme-solaire-visage",
      "bronzage",
    ],
    nameKeywords: ["solaire", "soleil", "uv", "spf", "bronzage", "ecran total"],
    accent: "cyan",
    inMainMosaic: true,
  },
  {
    id: "bebe",
    label: "Bébé",
    tagline: "Lingettes, shampooings, lait de toilette",
    // Editorial baby photograph from journal.
    hero: "https://laboratoiresvenus.com/wp-content/uploads/2021/07/bb2-02-02-02.png",
    tile: "https://laboratoiresvenus.com/wp-content/uploads/2021/07/bb2-02-02-02.png",
    rootCategorySlugs: [
      "bebe",
      "lingettes-bebe",
      "shampoings-bebe",
      "lingettes",
      "soin-peau-sensible",
    ],
    nameKeywords: ["bébé", "bebe", "baby", "enfant", "nourrisson"],
    accent: "sky",
    inMainMosaic: true,
  },
  {
    id: "homme",
    label: "Homme",
    tagline: "Venus Men — Gel douche, déodorant, sérum",
    // Editorial — handsome man spraying perfume (from journal "Parfums pour homme").
    hero: "https://laboratoiresvenus.com/wp-content/uploads/2021/07/portrait-handsome-half-naked-man-spraying-perfume.png",
    tile: "https://laboratoiresvenus.com/wp-content/uploads/2021/07/portrait-handsome-half-naked-man-spraying-perfume.png",
    rootCategorySlugs: [
      "venus-men",
      "gel-douche-homme",
      "corp",
    ],
    nameKeywords: ["men", "for men", "homme", "venus men", "energy"],
    accent: "copper",
    inMainMosaic: true,
  },
  {
    id: "parfums",
    label: "Parfums",
    tagline: "Brumes parfumées, eaux fraîches",
    // Venus brume parfumée bottle — Mille et Une Nuit (oriental, from the brand).
    hero: "https://laboratoiresvenus.com/wp-content/uploads/2025/05/Brume_Mille-nuits.png",
    tile: "https://laboratoiresvenus.com/wp-content/uploads/2025/05/Brume_etoilel.png",
    rootCategorySlugs: [
      "brumes-parfumees",
      "eau-de-toilette",
      "eau-de-cologne",
      "parfums",
      "nostalgie",
      "parfumer-le-corps",
    ],
    nameKeywords: ["parfum", "eau de parfum", "eau de toilette", "eau de cologne", "fragrance", "nostalgie", "brume parfumée", "body spray", "eden"],
    accent: "gold",
    inMainMosaic: true,
  },
  {
    id: "buccodentaire",
    label: "Buccodentaire",
    tagline: "Buccowhite, Dentomint",
    // Editorial — closeup of smiling woman from journal "8 astuces beau sourire".
    hero: "https://laboratoiresvenus.com/wp-content/uploads/2021/07/closeup-of-smiling-woman-making-frame-gesture.jpg",
    tile: "https://laboratoiresvenus.com/wp-content/uploads/2021/07/closeup-of-smiling-woman-making-frame-gesture.jpg",
    rootCategorySlugs: [
      "buccodentaire",
      "buccowhite",
      "blancheur",
      "gencives",
    ],
    nameKeywords: ["dentifrice", "buccowhite", "dentomint", "dental", "gencive", "haleine", "sourire", "blancheur"],
    accent: "cyan",
    inMainMosaic: true,
  },
  {
    id: "private-collection",
    label: "Private Collection",
    tagline: "Une nouvelle gamme cosmétique d'exception — bientôt disponible.",
    // Luxury / oriental atmosphere — uses the official Private Collection
    // brand photo and the user-supplied Anti-Âge product set as teaser.
    hero: "/brand/private-collection/anti-age-clean.webp",
    tile: "/brand/private-collection-logo-transparent.png",
    rootCategorySlugs: [
      "private-collection",
    ],
    nameKeywords: ["private collection"],
    accent: "gold",
    inMainMosaic: false,
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

export const mainMosaicUnivers = univers.filter((u) => u.inMainMosaic !== false);
