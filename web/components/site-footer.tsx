import Link from "next/link";
import { univers } from "@/lib/univers";
import { maisons } from "@/lib/maisons";

/**
 * Social media icons — drawn as inline SVGs (Lucide does not ship brand icons
 * in the version pinned in package.json). Single-source, easy to extend.
 */
type IconProps = { size?: number };

function FacebookIcon({ size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.24.19 2.24.19v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.45 2.91h-2.33V22c4.78-.76 8.43-4.92 8.43-9.94z" />
    </svg>
  );
}

function InstagramIcon({ size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedinIcon({ size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM8.34 17.5H5.67V9.75h2.67V17.5zM7 8.6a1.55 1.55 0 1 1 0-3.1 1.55 1.55 0 0 1 0 3.1zM18.34 17.5h-2.67v-3.77c0-.9-.02-2.06-1.26-2.06-1.26 0-1.45.98-1.45 2v3.83h-2.67V9.75h2.56v1.06h.04c.36-.68 1.23-1.4 2.54-1.4 2.71 0 3.21 1.78 3.21 4.1v4z" />
    </svg>
  );
}

function YoutubeIcon({ size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23 12s0-3.5-.45-5.18A2.6 2.6 0 0 0 20.7 4.97C19 4.5 12 4.5 12 4.5s-7 0-8.7.47A2.6 2.6 0 0 0 1.45 6.82C1 8.5 1 12 1 12s0 3.5.45 5.18a2.6 2.6 0 0 0 1.85 1.85C5 19.5 12 19.5 12 19.5s7 0 8.7-.47a2.6 2.6 0 0 0 1.85-1.85C23 15.5 23 12 23 12zM10 15.5v-7l5.5 3.5L10 15.5z" />
    </svg>
  );
}

function TikTokIcon({ size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.83a8.16 8.16 0 0 0 4.77 1.52V6.9a4.85 4.85 0 0 1-1.84-.21z" />
    </svg>
  );
}

const socialLinks = [
  { href: "https://www.facebook.com/laboratoiresvenus/", label: "Facebook", Icon: FacebookIcon },
  { href: "https://www.instagram.com/laboratoires_venus_sapeco/", label: "Instagram", Icon: InstagramIcon },
  { href: "https://www.linkedin.com/company/laboratoires-venus-sapeco", label: "LinkedIn", Icon: LinkedinIcon },
  { href: "https://www.youtube.com/channel/UCcIIPIHz8Zp197_XyEQStdg", label: "YouTube", Icon: YoutubeIcon },
  { href: "https://www.tiktok.com/@laboratoiresvenussapeco", label: "TikTok", Icon: TikTokIcon },
];

export function SiteFooter() {
  return (
    <footer className="bg-navy text-ivory mt-32">
      <div className="container-prose py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            {/* Footer wordmark — pair the serif Venus mark with a vintage stamp */}
            <div className="mb-5">
              <span className="block text-[10px] tracking-[0.3em] uppercase text-gold">
                Laboratoires
              </span>
              <span className="block font-display text-5xl leading-none italic text-ivory mt-1">
                Venus
              </span>
              <span className="block text-[10px] tracking-[0.3em] uppercase text-ivory/50 mt-2">
                Depuis 1981 · Algérie
              </span>
            </div>
            <p className="text-ivory/70 max-w-prose text-sm leading-relaxed">
              Une pharmacopée méditerranéenne née sous le soleil algérien.
              Depuis 1981, nous formulons des soins capillaires, dermiques,
              corporels et de parfumerie pour la famille — pensés, testés,
              produits sur place.
            </p>
            <div className="flex items-center gap-3 mt-6 text-[11px] uppercase tracking-widest text-ivory/50 flex-wrap">
              <span>Élu produit de l&apos;année</span>
              <span>·</span>
              <span>PDA Algérie</span>
              <span>·</span>
              <span>AFAO</span>
            </div>
          </div>

          <div className="md:col-span-2">
            <p className="label-eyebrow !text-ivory/50 mb-4">Univers</p>
            <ul className="space-y-2 text-ivory/80 text-sm">
              {univers.map((u) => (
                <li key={u.id}>
                  <Link href={`/univers/${u.id}`} className="hover:text-gold transition">
                    {u.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="label-eyebrow !text-ivory/50 mb-4">Maisons</p>
            <ul className="space-y-2 text-ivory/80 text-sm">
              {maisons.map((m) => (
                <li key={m.id}>
                  <Link href={`/maison/${m.id}`} className="hover:text-gold transition">
                    {m.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="label-eyebrow !text-ivory/50 mb-4">Maison Venus</p>
            <ul className="space-y-2 text-ivory/80 text-sm">
              <li><Link href="/laboratoire" className="hover:text-gold transition">Le Laboratoire</Link></li>
              <li><Link href="/engagement" className="hover:text-gold transition">Engagement</Link></li>
              <li><Link href="/journal" className="hover:text-gold transition">Journal Venus Mag</Link></li>
              <li><Link href="/contact" className="hover:text-gold transition">Contact</Link></li>
              <li><Link href="/faq" className="hover:text-gold transition">FAQ</Link></li>
              <li><Link href="/exports" className="hover:text-gold transition">Présence internationale</Link></li>
            </ul>

            <p className="label-eyebrow !text-ivory/50 mb-3 mt-8">Nos coordonnées</p>
            <ul className="space-y-1 text-ivory/70 text-sm leading-snug">
              <li>202, Rue du 17 Septembre 1956</li>
              <li>09100 Oued Yaïch · Blida · Algérie</li>
              <li className="pt-2">
                <a href="tel:+213252753 54" className="hover:text-gold">+213 (0) 25 27 53 54</a>
              </li>
              <li>
                <a href="tel:0770400040" className="hover:text-gold">0770 40 00 40</a>{" "}
                <span className="text-ivory/40">· Service consommateurs</span>
              </li>
              <li>
                <a href="mailto:contact@labovenus.dz" className="hover:text-gold">contact@labovenus.dz</a>
              </li>
            </ul>

            <p className="label-eyebrow !text-ivory/50 mb-3 mt-8">Suivez-nous</p>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 inline-flex items-center justify-center rounded-full border border-ivory/25 text-ivory/85 hover:text-navy hover:bg-gold hover:border-gold transition-colors duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-ivory/15 mt-16 pt-8 flex flex-col md:flex-row md:justify-between gap-4 text-[11px] uppercase tracking-widest text-ivory/50">
          <span>© 1981 — {new Date().getFullYear()} Laboratoires Venus SAPECO. Tous droits réservés.</span>
          <div className="flex flex-wrap gap-6">
            <Link href="/mentions-legales" className="hover:text-gold transition">Mentions légales</Link>
            <Link href="/protection-donnees" className="hover:text-gold transition">Protection des données</Link>
            <Link href="/conditions" className="hover:text-gold transition">Conditions d&apos;utilisation</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
