import { categories } from "./data";

/**
 * Top-level "univers" used for navigation and the home mosaic.
 * Each one resolves to one or more category slugs in the catalog.
 */

export type Univers = {
  id: string;
  label: string;
  tagline: string;
  hero: string;
  rootCategorySlugs: string[];
  accent: "navy" | "terracotta" | "sage" | "gold" | "sky" | "ink";
};

export const univers: Univers[] = [
  {
    id: "visage",
    label: "Visage",
    tagline: "Soins dermiques, démaquillants, masques",
    hero: "https://laboratoiresvenus.com/wp-content/uploads/2021/06/cute-girl-with-beautiful-face-1.jpg",
    rootCategorySlugs: ["dermique", "nettoyant-visage", "demaquillant", "masques"],
    accent: "navy",
  },
  {
    id: "cheveux",
    label: "Cheveux",
    tagline: "Shampooings, masques, sérums, soins ciblés",
    hero: "https://laboratoiresvenus.com/wp-content/uploads/2026/04/Banniere_2001x674_Habba-saouda_01.jpg",
    rootCategorySlugs: ["cheveux"],
    accent: "terracotta",
  },
  {
    id: "corps",
    label: "Corps",
    tagline: "Gels douche, déodorants, brumes, soins",
    hero: "https://laboratoiresvenus.com/wp-content/uploads/2025/07/Deo_PURE_Clean.png",
    rootCategorySlugs: ["corps"],
    accent: "sage",
  },
  {
    id: "solaire",
    label: "Solaire",
    tagline: "Protection UV — Viderm Solaire S+",
    hero: "https://laboratoiresvenus.com/wp-content/uploads/2021/07/121888721582994865-512.png",
    rootCategorySlugs: ["solaire"],
    accent: "gold",
  },
  {
    id: "bebe",
    label: "Bébé",
    tagline: "Lingettes, shampooings, lait de toilette",
    hero: "https://laboratoiresvenus.com/wp-content/uploads/2023/11/lingette2.602-02.png",
    rootCategorySlugs: ["bebe"],
    accent: "sky",
  },
  {
    id: "homme",
    label: "Homme",
    tagline: "Vénus Men — Gel douche, déodorant, sérum",
    hero: "https://laboratoiresvenus.com/wp-content/uploads/2025/07/Deo_PURE_Clean.png",
    rootCategorySlugs: ["venus-men"],
    accent: "ink",
  },
  {
    id: "parfums",
    label: "Parfums",
    tagline: "Nostalgie & Private Collection",
    hero: "https://laboratoiresvenus.com/wp-content/uploads/2021/05/LINK-P4-1024x748.jpeg",
    rootCategorySlugs: ["parfums", "brume-parfumee", "private-collection"],
    accent: "gold",
  },
  {
    id: "buccodentaire",
    label: "Buccodentaire",
    tagline: "Buccowhite, Dentomint",
    hero: "https://laboratoiresvenus.com/wp-content/uploads/2021/06/denti-01-02.png",
    rootCategorySlugs: ["buccodentaire"],
    accent: "sky",
  },
];

export function universById(id: string): Univers | undefined {
  return univers.find((u) => u.id === id);
}

export function categoriesForUnivers(u: Univers) {
  return categories.filter((c) => u.rootCategorySlugs.includes(c.slug) || c.slug.startsWith(u.rootCategorySlugs[0]));
}
