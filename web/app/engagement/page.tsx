export const metadata = {
  title: "Engagement — Recyclable, qualité, savoir-faire",
};

export default function EngagementPage() {
  return (
    <div className="pt-44 pb-32">
      <div className="container-prose max-w-5xl">
        <p className="label-eyebrow mb-6">
          <span className="hairline inline-block align-middle mr-3 bg-gold" />
          Engagement
        </p>
        <h1 className="font-display text-5xl md:text-7xl text-navy leading-[1] max-w-4xl">
          Trois principes,<br />
          <span className="italic font-light">vérifiables au quotidien.</span>
        </h1>

        <div className="space-y-24 mt-24">
          {[
            {
              n: "01",
              t: "Produits recyclables",
              c: "Nos packagings privilégient les matières recyclées et recyclables. Verre, aluminium, plastiques sélectionnés — chaque saison, nous reformulons les contenants pour réduire leur empreinte. Un geste demandé après chaque rituel : trier, réintégrer la matière à la chaîne.",
            },
            {
              n: "02",
              t: "Qualité-prix",
              c: "Formuler en Algérie, conditionner en Algérie, expédier depuis l'Algérie : un savoir-faire complet sous un même toit, et une maîtrise totale de la chaîne de valeur. C'est ce qui nous permet de proposer des soins exigeants à des prix justes — accessibles à toutes les familles.",
            },
            {
              n: "03",
              t: "Savoir-faire",
              c: "44 ans de recherche, trois gammes élues Produit de l'année, un département R&D qui signe chaque saison de nouvelles innovations. Chaque formule est testée sous contrôle dermatologique avant de quitter le laboratoire.",
            },
          ].map((p) => (
            <div key={p.n} className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-t border-ink/15 pt-12">
              <p className="md:col-span-2 font-display text-7xl text-gold leading-none">{p.n}</p>
              <h2 className="md:col-span-3 font-display text-3xl text-navy">{p.t}</h2>
              <p className="md:col-span-7 text-ink/75 text-lg leading-[1.8]">{p.c}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
