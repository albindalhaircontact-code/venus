import { products, type Product } from "./data";

export type Maison = {
  id: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  hero: string;
  signature: string;
  accent: "terracotta" | "navy" | "gold" | "sage" | "sky" | "ink";
  matchName?: string[];
  matchCategorySlug?: string[];
};

export const maisons: Maison[] = [
  {
    id: "habba-saouda",
    name: "Habba Saouda — Hair Glow",
    shortName: "Habba Saouda",
    tagline: "L'éclat des bruns par les graines de nigelle.",
    description:
      "Pensée pour les cheveux bruns assoiffés d'éclat, la gamme Hair Glow unit l'extrait pur de graines de nigelle — régénérateur ancestral — à un acide hyaluronique capillaire qui hydrate en profondeur sans alourdir.",
    hero: "https://laboratoiresvenus.com/wp-content/uploads/2026/04/Banniere_2001x674_Habba-saouda_01.jpg",
    signature: "Nigella sativa · Acide hyaluronique",
    accent: "terracotta",
    matchName: ["habba", "hair glow"],
  },
  {
    id: "viderm",
    name: "Viderm",
    shortName: "Viderm",
    tagline: "L'expertise dermatologique au quotidien.",
    description:
      "Formulée par notre département de recherche, la gamme Viderm répond à chaque préoccupation cutanée : Purifiant P+, Soin S+, Régulateur R+, Anti-âge A+, Solaire S+. Une pharmacopée moderne, testée sous contrôle dermatologique.",
    hero: "https://laboratoiresvenus.com/wp-content/uploads/2023/11/Mousse-1-02.png",
    signature: "Niacinamide · Vitamine B · Patch H₂O",
    accent: "navy",
    matchName: ["viderm"],
  },
  {
    id: "nostalgie",
    name: "Nostalgie",
    shortName: "Nostalgie",
    tagline: "La parfumerie d'hier pour les femmes d'aujourd'hui.",
    description:
      "Une collection de fragrances qui rendent hommage aux grandes maisons d'autrefois — eaux de parfum chaudes, sillages enveloppants, écrins inspirés du flacon classique.",
    hero: "https://laboratoiresvenus.com/wp-content/uploads/2021/05/LINK-P4-1024x748.jpeg",
    signature: "Eaux de parfum · Brumes parfumées",
    accent: "gold",
    matchName: ["nostalgie"],
  },
  {
    id: "private-collection",
    name: "Private Collection",
    shortName: "Private Collection",
    tagline: "Eaux de parfum d'exception.",
    description:
      "Notre laboratoire signe ses créations les plus précieuses — extraits concentrés, matières premières rares, flacons dessinés à la main.",
    hero: "https://laboratoiresvenus.com/wp-content/uploads/2021/06/Venus-Private-collection-logoswhit.png",
    signature: "Extraits de parfum",
    accent: "ink",
    matchName: ["private"],
  },
  {
    id: "venus-men",
    name: "Vénus Men",
    shortName: "Vénus Men",
    tagline: "Le rituel masculin, sans détour.",
    description:
      "Soins capillaires, gels douche, déodorants, body sprays et eaux de toilette. Pensés pour la peau et les cheveux d'homme — efficacité directe, sillages affirmés.",
    hero: "https://laboratoiresvenus.com/wp-content/uploads/2025/07/Deo_PURE_Clean.png",
    signature: "Gels douche · Déodorants · Body sprays",
    accent: "navy",
    matchCategorySlug: ["venus-men"],
  },
  {
    id: "buccodentaire",
    name: "Buccowhite & Dentomint",
    shortName: "Buccowhite",
    tagline: "Le sourire comme un soin.",
    description:
      "Buccowhite et Dentomint, deux signatures dédiées à l'éclat de l'émail et à la fraîcheur de l'haleine. Formules douces, technologies blanchissantes, rituels matin & soir.",
    hero: "https://laboratoiresvenus.com/wp-content/uploads/2021/06/denti-01-02.png",
    signature: "Soins buccodentaires",
    accent: "sky",
    matchCategorySlug: ["buccodentaire"],
  },
  {
    id: "venus-bebe",
    name: "Vénus Bébé",
    shortName: "Vénus Bébé",
    tagline: "Douceur première, depuis 1981.",
    description:
      "Lingettes, eau de cologne, eau de toilette, lait, shampooings — formules sans paraben, testées dermatologiquement, conçues pour la peau et les cheveux des tout-petits.",
    hero: "https://laboratoiresvenus.com/wp-content/uploads/2023/11/lingette2.602-02.png",
    signature: "Soins nourrisson",
    accent: "sage",
    matchCategorySlug: ["bebe"],
  },
];

export function maisonProducts(maison: Maison): Product[] {
  return products.filter((p) => {
    if (maison.matchName) {
      const name = p.name.toLowerCase();
      if (maison.matchName.some((kw) => name.includes(kw.toLowerCase()))) {
        return true;
      }
    }
    if (maison.matchCategorySlug) {
      if (
        p.categories.some((c) =>
          maison.matchCategorySlug?.some((slug) =>
            c.slug.toLowerCase().includes(slug.toLowerCase())
          )
        )
      ) {
        return true;
      }
    }
    return false;
  });
}

export function maisonById(id: string): Maison | undefined {
  return maisons.find((m) => m.id === id);
}
