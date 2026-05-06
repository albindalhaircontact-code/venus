import Link from "next/link";
import { univers } from "@/lib/univers";
import { maisons } from "@/lib/maisons";

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
