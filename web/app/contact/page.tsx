export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <div className="pt-44 pb-32">
      <div className="container-prose grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <p className="label-eyebrow mb-6">
            <span className="hairline inline-block align-middle mr-3" />
            Contact
          </p>
          <h1 className="font-display text-5xl md:text-6xl text-navy leading-[1.05]">
            Écrivez-nous,<br />
            <span className="italic font-light">nous lisons tout.</span>
          </h1>
          <p className="mt-6 text-ink/70 leading-relaxed max-w-prose">
            Une question sur une formule, un point de vente, une demande presse, un projet
            d&apos;export ? Le Laboratoire vous répond sous 48 heures ouvrées.
          </p>

          <div className="mt-10 space-y-6 text-ink/80">
            <div>
              <p className="label-eyebrow mb-2">Adresse</p>
              <p>
                Laboratoires Venus SAPECO<br />
                202, Rue du 17 Septembre 1956<br />
                09100 Oued Yaïch · Blida<br />
                Algérie
              </p>
            </div>
            <div>
              <p className="label-eyebrow mb-2">Téléphone</p>
              <p>
                <a href="tel:+213252753 54" className="hover:text-navy">+213 (0) 25 27 53 54</a>{" "}
                / <a href="tel:+213252754 54" className="hover:text-navy">+213 (0) 25 27 54 54</a>
              </p>
            </div>
            <div>
              <p className="label-eyebrow mb-2">Service consommateurs</p>
              <p>
                <a href="tel:0770400040" className="hover:text-navy">0770 40 00 40</a>
              </p>
            </div>
            <div>
              <p className="label-eyebrow mb-2">Email</p>
              <p>
                <a href="mailto:contact@labovenus.dz" className="hover:text-navy">contact@labovenus.dz</a>
              </p>
            </div>
            <div>
              <p className="label-eyebrow mb-2">Horaires</p>
              <p>Du dimanche au jeudi · 9h — 17h</p>
            </div>
            <div>
              <p className="label-eyebrow mb-2">Suivez-nous</p>
              <ul className="space-y-1">
                <li><a className="hover:text-navy" href="https://www.facebook.com/laboratoiresvenus/" target="_blank" rel="noopener noreferrer">Facebook · @laboratoiresvenus</a></li>
                <li><a className="hover:text-navy" href="https://www.instagram.com/laboratoires_venus_sapeco/" target="_blank" rel="noopener noreferrer">Instagram · @laboratoires_venus_sapeco</a></li>
                <li><a className="hover:text-navy" href="https://www.linkedin.com/company/laboratoires-venus-sapeco" target="_blank" rel="noopener noreferrer">LinkedIn · Laboratoires Venus SAPECO</a></li>
                <li><a className="hover:text-navy" href="https://www.youtube.com/channel/UCcIIPIHz8Zp197_XyEQStdg" target="_blank" rel="noopener noreferrer">YouTube · Laboratoires Venus</a></li>
                <li><a className="hover:text-navy" href="https://www.tiktok.com/@laboratoiresvenussapeco" target="_blank" rel="noopener noreferrer">TikTok · @laboratoiresvenussapeco</a></li>
              </ul>
            </div>
          </div>
        </div>

        <form className="lg:col-span-6 lg:col-start-7 space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Input label="Prénom" />
            <Input label="Nom" />
          </div>
          <Input label="Email" type="email" />
          <Input label="Sujet" />
          <div>
            <label className="label-eyebrow mb-2 block">Message</label>
            <textarea
              rows={6}
              className="w-full bg-ivory border border-ink/20 px-5 py-3 text-sm focus:outline-none focus:border-navy resize-none"
            />
          </div>
          <button type="submit" className="btn-primary">Envoyer le message</button>
        </form>
      </div>
    </div>
  );
}

function Input({ label, type = "text" }: { label: string; type?: string }) {
  return (
    <div>
      <label className="label-eyebrow mb-2 block">{label}</label>
      <input
        type={type}
        className="w-full bg-ivory border border-ink/20 px-5 py-3 text-sm focus:outline-none focus:border-navy"
      />
    </div>
  );
}
