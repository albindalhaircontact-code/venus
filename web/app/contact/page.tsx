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
              <p>Laboratoires Venus SAPECO<br />Algérie</p>
            </div>
            <div>
              <p className="label-eyebrow mb-2">Service consommateurs</p>
              <p>contact@laboratoiresvenus.com</p>
            </div>
            <div>
              <p className="label-eyebrow mb-2">Horaires</p>
              <p>Du dimanche au jeudi · 9h — 17h</p>
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
