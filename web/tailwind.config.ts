import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Venus design tokens — "Méditerranée scientifique"
        ivory: "#F4EFE6",
        "ivory-dark": "#EAE2D2",
        ink: "#0E0E10",
        "ink-soft": "#2A2A2E",
        navy: "#0F2A44",
        "navy-soft": "#1F4570",
        sky: "#D5E0EB",
        gold: "#C9A063",
        "gold-soft": "#DEC396",
        terracotta: "#C57B57",
        "terracotta-soft": "#E0A88B",
        sage: "#A7B098",
        "sage-soft": "#C2C9B7",
      },
      fontFamily: {
        display: ["var(--font-display)", "Cormorant Garamond", "serif"],
        sans: ["var(--font-sans)", "Inter", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.18em",
      },
      maxWidth: {
        prose: "62ch",
      },
      transitionTimingFunction: {
        venus: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      animation: {
        "fade-up": "fade-up 0.9s cubic-bezier(0.22, 1, 0.36, 1) both",
        "fade-in": "fade-in 1s ease-out both",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
