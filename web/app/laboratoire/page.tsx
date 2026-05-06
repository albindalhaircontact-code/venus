import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Le Laboratoire — 44 ans d'expertise algérienne",
  description: "Mot du Président, savoir-faire, recherche et développement aux Laboratoires Venus.",
};

export default function LaboratoirePage() {
  return (
    <>
      {/* Hero — texte seul, presque manifeste */}
      <section className="pt-44 pb-24">
        <div className="container-prose max-w-4xl">
          <p className="label-eyebrow mb-6">
            <span className="hairline inline-block align-middle mr-3" />
            Le Laboratoire
          </p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-8xl text-navy leading-[0.98]">
            Quarante-quatre ans<br />
            <span className="italic font-light">d&apos;une fidélité réciproque.</span>
          </h1>
          <p className="mt-10 text-ink/75 text-xl leading-[1.7] max-w-prose">
            Le Laboratoire Venus est né en Algérie en 1981. Depuis, il formule, conditionne
            et expédie ses soins capillaires, dermiques, corporels et de parfumerie depuis
            le même territoire — une exigence de proximité que nous n&apos;avons jamais voulu
            déléguer.
          </p>
        </div>
      </section>

      {/* Image bandeau */}
      <section>
        <div className="relative aspect-[21/9] w-full">
          <Image
            src="https://laboratoiresvenus.com/wp-content/uploads/2021/06/uploded_istock-186932212-1594816069-1.jpg"
            alt="Laboratoire Venus"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* Mot du PDG */}
      <section className="py-32">
        <div className="container-prose grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <p className="label-eyebrow mb-4">
              <span className="hairline inline-block align-middle mr-3 bg-gold" />
              Mot du Président
            </p>
            <h2 className="font-display text-4xl lg:text-5xl text-navy leading-[1.05]">
              44 ans d&apos;existence<br />
              <span className="italic font-light">et la fierté d&apos;un pari réussi.</span>
            </h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6 space-y-6 text-ink/80 text-lg leading-[1.8]">
            <p>
              Je suis particulièrement heureux de vous accueillir sur notre site web.
              Soyez les bienvenus dans notre monde de senteurs et de soins.
            </p>
            <p>
              Ces quarante dernières années, l&apos;entreprise <em className="not-italic font-medium">Les Laboratoires Venus</em> est devenue
              au fil du temps votre fidèle alliée dans la préservation de votre capital santé et beauté.
            </p>
            <p>
              Avec l&apos;ensemble de nos collaborateurs, nous nous sommes donnés la mission de
              vous proposer des produits adaptés, personnalisés et de qualité, en développant
              notre expertise autour d&apos;une politique d&apos;innovation et de mise à niveau régulière.
            </p>
            <p>
              La modernisation permanente des Laboratoires Venus, l&apos;expérience de notre département
              Recherche &amp; Développement, notre adaptation permanente aux nouveaux besoins, nous
              permettent de mettre à votre disposition chaque année plusieurs gammes de nouveaux
              produits au meilleur prix.
            </p>
            <p>
              La sélection par vos soins de nos produits nous a permis d&apos;obtenir le label
              <em className="italic"> « Élu produit de l&apos;année »</em> pour trois de nos innovations.
              C&apos;est la fierté d&apos;un challenge réussi.
            </p>
            <p className="pt-4 italic font-display text-navy text-xl">
              — Le Président Directeur Général
            </p>
          </div>
        </div>
      </section>

      {/* Repères clefs */}
      <section className="py-24 bg-navy text-ivory">
        <div className="container-prose">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {[
              { n: "44", l: "Années d'existence" },
              { n: "300+", l: "Références au catalogue" },
              { n: "7", l: "Maisons internes" },
              { n: "10+", l: "Pays d'export" },
            ].map((s) => (
              <div key={s.l}>
                <p className="font-display text-6xl md:text-7xl text-gold leading-none">{s.n}</p>
                <p className="mt-3 label-eyebrow !text-ivory/70">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Liens vers maisons */}
      <section className="py-24">
        <div className="container-prose">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <p className="label-eyebrow mb-4">Notre engagement</p>
              <h3 className="font-display text-3xl text-navy">Recyclable, accessible, signé sur place.</h3>
              <p className="mt-4 text-ink/70">
                Trois principes pratiques, vérifiables au quotidien — découvrez le détail de
                chaque engagement.
              </p>
              <Link href="/engagement" className="btn-link mt-6">Lire l&apos;engagement</Link>
            </div>
            <div>
              <p className="label-eyebrow mb-4">Nos maisons</p>
              <h3 className="font-display text-3xl text-navy">Sept signatures, un seul laboratoire.</h3>
              <p className="mt-4 text-ink/70">
                Habba Saouda, Viderm, Nostalgie, Private Collection, Venus Men, Buccowhite,
                Venus Bébé — toutes nées du même savoir-faire.
              </p>
              <Link href="/#maisons" className="btn-link mt-6">Découvrir les maisons</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
