import Image from "next/image";

export const metadata = {
  title: "Engagement — Recyclable, qualité, savoir-faire",
};

const principles = [
  {
    n: "01",
    t: "Produits recyclables",
    c: "Nos packagings privilégient les matières recyclées et recyclables. Verre, aluminium, plastiques sélectionnés — chaque saison, nous reformulons les contenants pour réduire leur empreinte. Un geste demandé après chaque rituel : trier, réintégrer la matière à la chaîne.",
    icon: "/brand/certifications/recyclable-1024x989.png",
  },
  {
    n: "02",
    t: "Qualité-prix",
    c: "Formuler en Algérie, conditionner en Algérie, expédier depuis l'Algérie : un savoir-faire complet sous un même toit, et une maîtrise totale de la chaîne de valeur. C'est ce qui nous permet de proposer des soins exigeants à des prix justes — accessibles à toutes les familles.",
    icon: "/brand/certifications/qualite33.png",
  },
  {
    n: "03",
    t: "Savoir-faire",
    c: "44 ans de recherche, trois gammes élues Produit de l'année, un département R&D qui signe chaque saison de nouvelles innovations. Chaque formule est testée sous contrôle dermatologique avant de quitter le laboratoire.",
    icon: "/brand/certifications/savoir-faire-1-1024x920.png",
  },
];

const certifications = [
  {
    src: "/brand/certifications/PDA_ALGERIE_2023-834x1024.jpg",
    name: "PDA Algérie 2023",
    desc: "Membre du Pôle d'Activité de l'industrie Cosmétique algérienne.",
  },
  {
    src: "/brand/certifications/logo-afao-03-887x1024.png",
    name: "AFAO",
    desc: "Association Forum des chefs d'entreprise — qualité industrielle.",
  },
  {
    src: "/brand/certifications/quality.png",
    name: "Élu produit de l'année",
    desc: "Trois gammes Venus distinguées par les consommateurs.",
  },
  {
    src: "/brand/certifications/cote.png",
    name: "Côté qualité",
    desc: "Évaluation indépendante de la chaîne de production.",
  },
];

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
          {principles.map((p) => (
            <div
              key={p.n}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-t border-ink/15 pt-12"
            >
              <div className="md:col-span-2 flex md:flex-col items-start gap-4 md:gap-6">
                <p className="font-display text-7xl text-gold leading-none">{p.n}</p>
                <Image
                  src={p.icon}
                  alt=""
                  width={84}
                  height={84}
                  className="w-20 h-20 object-contain opacity-90"
                  unoptimized
                />
              </div>
              <h2 className="md:col-span-3 font-display text-3xl text-navy">{p.t}</h2>
              <p className="md:col-span-7 text-ink/75 text-lg leading-[1.8]">{p.c}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div className="container-prose max-w-5xl mt-32">
        <p className="label-eyebrow mb-6">
          <span className="hairline inline-block align-middle mr-3 bg-gold" />
          Certifications & reconnaissances
        </p>
        <h2 className="font-display text-4xl md:text-5xl text-navy leading-[1.05] max-w-3xl">
          Des labels indépendants,<br />
          <span className="italic font-light">une exigence partagée.</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {certifications.map((c) => (
            <div key={c.name} className="text-center">
              <div className="aspect-square bg-ivory-dark/30 border border-ink/8 flex items-center justify-center p-6 mb-4">
                <Image
                  src={c.src}
                  alt={c.name}
                  width={140}
                  height={140}
                  className="max-w-full max-h-full object-contain"
                  unoptimized
                />
              </div>
              <p className="label-eyebrow !text-navy mb-2">{c.name}</p>
              <p className="text-ink/65 text-xs leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
