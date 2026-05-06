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
    hero: "https://laboratoiresvenus.com/wp-content/uploads/2021/06/cute-girl-with-beautiful-face.jpg",
    tile: "https://laboratoiresvenus.com/wp-content/uploads/2021/06/Viderm-soin-logo.png",
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
    hero: "https://laboratoiresvenus.com/wp-content/uploads/2026/04/Banniere_2001x674_Habba-saouda_01.jpg",
    tile: "https://laboratoiresvenus.com/wp-content/uploads/2026/04/Banniere_2001x674_Habba-saouda_01.jpg",
    tagline: "Shampooings, masques, sérums, soins ciblés",
    blurb:
      "De la gamme Habba Saouda — Hair Glow aux soins professionnels sans sulfates : la science capillaire des Laboratoires Vénus, pensée pour révéler chaque nature de cheveu.",
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
    hero: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=2400&q=80",
    tile: "https://laboratoiresvenus.com/wp-content/uploads/2025/07/Deo_PURE_Clean.png",
    tagline: "Gels douche, déodorants, brumes, soins",
    blurb:
      "Gels douche enveloppants, déodorants antibactériens, laits hydratants — la pharmacopée corporelle des Laboratoires Vénus, pensée pour les climats chauds.",
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
    hero: "https://images.unsplash.com/photo-1530653333484-8d2cefcb1d04?auto=format&fit=crop&w=2400&q=80",
    tile: "https://laboratoiresvenus.com/wp-content/uploads/2025/05/sun-protect.jpg",
    tagline: "Protection UV — Viderm Solaire S+",
    blurb:
      "Viderm Solaire S+ — la protection haute tolérance signée Vénus, formulée pour les peaux sensibles exposées au soleil méditerranéen et saharien.",
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
    hero: "https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?auto=format&fit=crop&w=2400&q=80",
    tile: "https://laboratoiresvenus.com/wp-content/uploads/2023/11/lingette2.602-02.png",
    tagline: "Lingettes, shampooings, lait de toilette",
    blurb:
      "Vénus Bébé — la douceur première. Lingettes ultra-douces, shampooings sans larmes, soins pensés pour les épidermes les plus jeunes, depuis 1981.",
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
    hero: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=2400&q=80",
    tile: "https://laboratoiresvenus.com/wp-content/uploads/2025/07/DM461-BOOST-DEO-roll-on-3D-products-venus-02.png",
    tagline: "Vénus Men — Gel douche, déodorant, sérum",
    blurb:
      "Vénus Men — la maison masculine du laboratoire. Gels douche concentrés, déodorants longue tenue, eaux fraîches — un rituel quotidien sans détour.",
    references: ["Aesop Men", "Le Labo", "Tom Ford", "L:A Bruket"],
  },

  parfums: {
    id: "parfums",
    mood: "Luxe oriental",
    intent: "opulente, sensuelle",
    palette: {
      background: "#0A0908",
      surface: "#1A1413",
      accent: "#C9A063",
      accent2: "#E8D5A8",
      text: "#F4EFE6",
      deep: "#3F1F2E",
      muted: "#52403B",
    },
    display: "serif-italic",
    darkHero: true,
    rhythm: "airy",
    hero: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=2400&q=80",
    tile: "https://laboratoiresvenus.com/wp-content/uploads/2021/06/Venus-Private-collection-logoswhit.png",
    tagline: "Nostalgie & Private Collection",
    blurb:
      "Deux maisons parfumées — Nostalgie, l'archive olfactive depuis quarante ans, et Private Collection, l'extrait haute-concentration. Eaux de parfum, brumes, body sprays.",
    references: ["Le Labo", "Maison Margiela Replica", "Officine Universelle Buly", "Acqua di Parma"],
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
    hero: "https://images.unsplash.com/photo-1581585504054-37e0d29c2efe?auto=format&fit=crop&w=2400&q=80",
    tile: "https://laboratoiresvenus.com/wp-content/uploads/2022/02/Logo_Buccowhite.png",
    tagline: "Buccowhite, Dentomint",
    blurb:
      "Buccowhite — le sourire comme un soin. Dentifrices à l'argile, à la menthe glacée, formules respectueuses de l'émail. Le savoir-faire dentaire des Laboratoires Vénus.",
    references: ["Marvis", "Spotlight Oral Care", "White Glo"],
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
