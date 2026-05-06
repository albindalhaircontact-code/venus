/**
 * Per-univers theme tokens.
 * Each univers exposes:
 *   - palette (hex strings used both for CSS variables and inline styles)
 *   - hero / tile imagery
 *   - mood label (short editorial line)
 *   - display weight & italic flag
 *
 * The CSS variables are emitted in app/globals.css under
 *   [data-univers="<id>"] { --bg: …; --surface: …; --accent: …; }
 *
 * Tailwind utilities `bg-univers`, `text-univers-accent`, etc. read these
 * variables. Components may also inline `style={{ background: theme.surface }}`
 * for cases where Tailwind's class purge would strip dynamic values.
 */

export type UniversTheme = {
  id: string;
  /** Editorial mood line, displayed as eyebrow. */
  mood: string;
  /** Short adjective that describes the design intent. */
  intent: string;
  palette: {
    background: string;
    surface: string;
    accent: string;
    accent2: string;
    text: string;
    /** Optional dark variant for hero overlays. */
    deep?: string;
    /** Optional muted color for borders / hairlines. */
    muted?: string;
  };
  /** "serif" or "sans" — drives display headings. */
  display: "serif" | "sans" | "serif-italic";
  /** Whether the univers prefers a dark hero (Parfums, Cheveux, Homme). */
  darkHero: boolean;
  /** Vertical rhythm: tight | regular | airy. */
  rhythm: "tight" | "regular" | "airy";
  /** Hero photograph used in the top of the univers page. */
  hero: string;
  /** Smaller image used for the homepage mosaic tile. */
  tile: string;
  /** One-line typographic tagline for the univers page. */
  tagline: string;
  /** Sub-narrative shown below the title on the univers page. */
  blurb: string;
  /** Citation-style references for the design rationale. */
  references: string[];
};

export const universThemes: Record<string, UniversTheme> = {
  visage: {
    id: "visage",
    mood: "Apothicaire moderne",
    intent: "clinique douce, lumineuse",
    palette: {
      background: "#FBFAF7",
      surface: "#F4EFE6",
      accent: "#1F4570",
      accent2: "#D9B68C",
      text: "#0E0E10",
      deep: "#1F2C3D",
      muted: "#E1D9C8",
    },
    display: "serif",
    darkHero: false,
    rhythm: "airy",
    hero: "https://laboratoiresvenus.com/wp-content/uploads/2021/06/close-up-of-woman-with-perfect-healthy-fresh-skin-sits-at-the-table-hands-crossed-and-touching-face-1.jpg",
    tile: "https://laboratoiresvenus.com/wp-content/uploads/2021/06/cute-girl-with-beautiful-face.jpg",
    tagline: "Soins dermiques, démaquillants, masques",
    blurb:
      "La promesse Viderm — formules dermatologiques élaborées dans nos laboratoires, conçues pour les peaux sensibles, mixtes ou réactives. Chaque texture est testée par notre département recherche.",
    references: ["Caudalie", "La Roche-Posay", "Tata Harper", "Augustinus Bader"],
  },

  cheveux: {
    id: "cheveux",
    mood: "Brun ardent",
    intent: "chaleureux, profond",
    palette: {
      background: "#F4EFE6",
      surface: "#EBE3D2",
      accent: "#A56438",
      accent2: "#C9A063",
      text: "#1A0F1A",
      deep: "#3F1F2E",
      muted: "#D8C9B5",
    },
    display: "serif-italic",
    darkHero: true,
    rhythm: "regular",
    hero: "https://laboratoiresvenus.com/wp-content/uploads/2021/07/rear-view-of-combing-healthy-long-straight-female-hair-isolated-on-gray.jpg",
    tile: "https://laboratoiresvenus.com/wp-content/uploads/2021/07/rear-view-of-combing-healthy-long-straight-female-hair-isolated-on-gray.jpg",
    tagline: "Shampooings, masques, sérums, soins ciblés",
    blurb:
      "De la gamme Habba Saouda — Hair Glow aux soins professionnels sans sulfates : la science capillaire des Laboratoires Venus, pensée pour révéler chaque nature de cheveu.",
    references: ["Olaplex", "Christophe Robin", "Carolina Herrera", "Habba Saouda"],
  },

  corps: {
    id: "corps",
    mood: "Méditerranéen chaud",
    intent: "tactile, baume au soleil",
    palette: {
      background: "#F4EFE6",
      surface: "#EBE0CB",
      accent: "#C57B57",
      accent2: "#B59669",
      text: "#0F2A44",
      deep: "#3D2418",
      muted: "#D7CDB8",
    },
    display: "serif",
    darkHero: false,
    rhythm: "regular",
    hero: "https://laboratoiresvenus.com/wp-content/uploads/2021/06/gommage-corps-maison-1280x720-1.jpg",
    tile: "https://laboratoiresvenus.com/wp-content/uploads/2021/06/cute-girl-with-beautiful-face-1.jpg",
    tagline: "Gels douche, déodorants, brumes, soins",
    blurb:
      "Gels douche enveloppants, déodorants antibactériens, laits hydratants — la pharmacopée corporelle des Laboratoires Venus, pensée pour les climats chauds.",
    references: ["Aesop", "Le Labo", "Diptyque", "Officine Universelle Buly"],
  },

  solaire: {
    id: "solaire",
    mood: "Lumière du sud",
    intent: "énergique, lumineuse",
    palette: {
      background: "#F4EFE6",
      surface: "#E1ECF0",
      accent: "#2A8A99",
      accent2: "#E8D5A8",
      text: "#0F2A44",
      deep: "#1B5C68",
      muted: "#C9DDE2",
    },
    display: "serif",
    darkHero: false,
    rhythm: "regular",
    hero: "https://laboratoiresvenus.com/wp-content/uploads/2021/06/young-beautiful-woman-applying-sun-cream-on-the-beach.jpg",
    tile: "https://laboratoiresvenus.com/wp-content/uploads/2021/06/young-beautiful-woman-applying-sun-cream-on-the-beach.jpg",
    tagline: "Protection UV — Viderm Solaire S+",
    blurb:
      "Viderm Solaire S+ — la protection haute tolérance signée Venus, formulée pour les peaux sensibles exposées au soleil méditerranéen et saharien.",
    references: ["La Roche-Posay Anthelios", "Vichy Capital Soleil", "Nuxe Sun"],
  },

  bebe: {
    id: "bebe",
    mood: "Cocon doux",
    intent: "tendre, premier rituel",
    palette: {
      background: "#FAF3E7",
      surface: "#E8EFF6",
      accent: "#1F4570",
      accent2: "#F5DBDA",
      text: "#0F2A44",
      deep: "#1A2E47",
      muted: "#D9E2EC",
    },
    display: "serif",
    darkHero: false,
    rhythm: "airy",
    hero: "https://laboratoiresvenus.com/wp-content/uploads/2021/07/bb2-02-02-02.png",
    tile: "https://laboratoiresvenus.com/wp-content/uploads/2021/07/bb2-02-02-02.png",
    tagline: "Lingettes, shampooings, lait de toilette",
    blurb:
      "Venus Bébé — la douceur première. Lingettes ultra-douces, shampooings sans larmes, soins pensés pour les épidermes les plus jeunes, depuis 1981.",
    references: ["Mustela", "Bioderma ABCDerm", "Klorane Bébé"],
  },

  homme: {
    id: "homme",
    mood: "Force contemporaine",
    intent: "puissante, sans détour",
    palette: {
      background: "#1B1B1F",
      surface: "#2A2A2E",
      accent: "#A56438",
      accent2: "#5C6068",
      text: "#F4EFE6",
      deep: "#0E0E10",
      muted: "#3A3A3F",
    },
    display: "sans",
    darkHero: true,
    rhythm: "tight",
    hero: "https://laboratoiresvenus.com/wp-content/uploads/2021/07/portrait-handsome-half-naked-man-spraying-perfume.png",
    tile: "https://laboratoiresvenus.com/wp-content/uploads/2021/07/portrait-handsome-half-naked-man-spraying-perfume.png",
    tagline: "Venus Men — Gel douche, déodorant, sérum",
    blurb:
      "Venus Men — la maison masculine du laboratoire. Gels douche concentrés, déodorants longue tenue, eaux fraîches — un rituel quotidien sans détour.",
    references: ["Aesop Men", "Le Labo", "Tom Ford", "L:A Bruket"],
  },

  parfums: {
    id: "parfums",
    mood: "Pharmacie parfumée",
    intent: "fraîche, lumineuse",
    palette: {
      background: "#F7F3EA",
      surface: "#EFE6D2",
      accent: "#A56438",
      accent2: "#C9A063",
      text: "#0F2A44",
      deep: "#3F1F2E",
      muted: "#D8C9B5",
    },
    display: "serif",
    darkHero: false,
    rhythm: "regular",
    hero: "https://laboratoiresvenus.com/wp-content/uploads/2025/05/Brume_Mille-nuits.png",
    tile: "https://laboratoiresvenus.com/wp-content/uploads/2025/05/Brume_etoilel.png",
    tagline: "Brumes parfumées, eaux fraîches",
    blurb:
      "Brumes parfumées Mille et Une Nuit, Étoile d'Orient, Éclat de Lune — eaux de toilette et de cologne signées Venus depuis 1981, pour parfumer le corps et les cheveux au quotidien.",
    references: ["Officine Universelle Buly", "Acqua di Parma", "Bvlgari Eau Parfumée", "Roger & Gallet"],
  },

  buccodentaire: {
    id: "buccodentaire",
    mood: "Clinique fraîcheur",
    intent: "pur, sourire",
    palette: {
      background: "#FAFCFD",
      surface: "#E8F3F5",
      accent: "#2A8A99",
      accent2: "#C9A063",
      text: "#0F2A44",
      deep: "#0A2C36",
      muted: "#D8DDE2",
    },
    display: "sans",
    darkHero: false,
    rhythm: "regular",
    hero: "https://laboratoiresvenus.com/wp-content/uploads/2021/07/closeup-of-smiling-woman-making-frame-gesture.jpg",
    tile: "https://laboratoiresvenus.com/wp-content/uploads/2021/07/closeup-of-smiling-woman-making-frame-gesture.jpg",
    tagline: "Buccowhite, Dentomint",
    blurb:
      "Buccowhite — le sourire comme un soin. Dentifrices à l'argile, à la menthe glacée, formules respectueuses de l'émail. Le savoir-faire dentaire des Laboratoires Venus.",
    references: ["Marvis", "Spotlight Oral Care", "White Glo"],
  },

  "private-collection": {
    id: "private-collection",
    mood: "Luxe oriental",
    intent: "opulente, sensuelle, dorée",
    palette: {
      background: "#0A0908",
      surface: "#1A1310",
      accent: "#D4A24E",
      accent2: "#E8C770",
      text: "#F5E9D0",
      deep: "#3F2510",
      muted: "#5A4232",
    },
    display: "serif-italic",
    darkHero: true,
    rhythm: "airy",
    hero: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&fit=crop&w=2400&q=80",
    tile: "https://laboratoiresvenus.com/wp-content/uploads/2021/06/Parf4-01.png",
    tagline: "L'archive olfactive Venus — Eden",
    blurb:
      "Eden Stars, Eden Lovely, Eden Flower — la haute parfumerie Venus. Eaux de parfum, déodorants, gels douche ; un rituel précieux, pensé comme une signature personnelle.",
    references: ["Maison Margiela Replica", "Le Labo", "Hermès Parfums", "Acqua di Parma"],
  },
};

export function themeFor(id: string): UniversTheme | undefined {
  return universThemes[id];
}

/**
 * Inline CSS variable map suitable for `style={...}` overrides on a parent
 * `<div data-univers="...">`. Components inside can then read the variables
 * via Tailwind utilities or arbitrary values like `bg-[var(--accent)]`.
 */
export function themeStyleVars(theme: UniversTheme): React.CSSProperties {
  return {
    ["--univ-bg" as string]: theme.palette.background,
    ["--univ-surface" as string]: theme.palette.surface,
    ["--univ-accent" as string]: theme.palette.accent,
    ["--univ-accent-2" as string]: theme.palette.accent2,
    ["--univ-text" as string]: theme.palette.text,
    ["--univ-deep" as string]: theme.palette.deep ?? theme.palette.text,
    ["--univ-muted" as string]: theme.palette.muted ?? theme.palette.surface,
  };
}
