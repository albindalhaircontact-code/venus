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

/**
 * Each maison carries an editorial "brand portrait" photograph in `hero`,
 * meant to express the brand identity (not just a product shot).
 * Optional `logo` overlays the brand's wordmark/icon on top of the hero
 * for the maison cards on the home page.
 */
export const maisons: Maison[] = [
  {
    id: "habba-saouda",
    name: "Habba Saouda — Hair Glow",
    shortName: "Habba Saouda",
    tagline: "L'éclat des bruns par les graines de nigelle.",
    description:
      "Pensée pour les cheveux bruns assoiffés d'éclat, la gamme Hair Glow unit l'extrait pur de graines de nigelle — régénérateur ancestral — à un acide hyaluronique capillaire qui hydrate en profondeur sans alourdir.",
    // Brand essence — editorial portrait of dark hair / nigelle territory.
    hero: "https://laboratoiresvenus.com/wp-content/uploads/2021/07/rear-view-of-combing-healthy-long-straight-female-hair-isolated-on-gray.jpg",
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
    // Editorial — fresh-skin portrait, dermatological territory.
    hero: "https://laboratoiresvenus.com/wp-content/uploads/2021/06/close-up-of-woman-with-perfect-healthy-fresh-skin-sits-at-the-table-hands-crossed-and-touching-face-1.jpg",
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
    // Brand archive — vintage perfume photograph from the maison.
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
    // Luxe editorial — gold/marble atmosphere (placeholder until user-supplied photo).
    hero: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&fit=crop&w=2400&q=80",
    signature: "Extraits de parfum · Eden Stars · Eden Lovely · Eden Flower",
    accent: "ink",
    matchName: ["private", "eden stars", "eden lovely", "eden flower", "eden garden"],
  },
  {
    id: "venus-men",
    name: "Venus Men",
    shortName: "Venus Men",
    tagline: "Le rituel masculin, sans détour.",
    description:
      "Soins capillaires, gels douche, déodorants, body sprays et eaux de toilette. Pensés pour la peau et les cheveux d'homme — efficacité directe, sillages affirmés.",
    // Editorial — handsome man spraying perfume.
    hero: "https://laboratoiresvenus.com/wp-content/uploads/2021/07/portrait-handsome-half-naked-man-spraying-perfume.png",
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
    // Editorial — closeup smile, frame gesture.
    hero: "https://laboratoiresvenus.com/wp-content/uploads/2021/07/closeup-of-smiling-woman-making-frame-gesture.jpg",
    signature: "Soins buccodentaires",
    accent: "sky",
    matchCategorySlug: ["buccodentaire"],
  },
  {
    id: "venus-bebe",
    name: "Venus Bébé",
    shortName: "Venus Bébé",
    tagline: "Douceur première, depuis 1981.",
    description:
      "Lingettes, eau de cologne, eau de toilette, lait, shampooings — formules sans paraben, testées dermatologiquement, conçues pour la peau et les cheveux des tout-petits.",
    // Editorial — baby photograph from journal.
    hero: "https://laboratoiresvenus.com/wp-content/uploads/2021/07/bb2-02-02-02.png",
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
