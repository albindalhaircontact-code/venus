import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Laboratoires Vénus — Une pharmacopée méditerranéenne depuis 1981",
    template: "%s · Laboratoires Vénus",
  },
  description:
    "44 ans de savoir‑faire algérien. Soins capillaires, dermiques, corporels, parfumerie. Découvrez la nouvelle gamme Habba Saouda — Hair Glow.",
  metadataBase: new URL("https://laboratoiresvenus.com"),
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Laboratoires Vénus",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${display.variable} ${sans.variable}`}>
      <body className="bg-ivory text-ink antialiased">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
