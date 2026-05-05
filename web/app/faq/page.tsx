export const metadata = { title: "FAQ — Questions fréquentes" };

const items = [
  {
    q: "Où acheter les produits Laboratoires Vénus ?",
    a: "Nos références sont distribuées en pharmacies, parapharmacies et grandes surfaces dans toute l'Algérie, ainsi qu'à l'export — Maroc, Tunisie, Mauritanie, France, Belgique, Allemagne, Émirats, Arabie Saoudite, Côte d'Ivoire, Sénégal. Demandez-nous le point de vente le plus proche depuis la page Contact.",
  },
  {
    q: "Vos produits sont-ils testés sur les animaux ?",
    a: "Non. Les Laboratoires Vénus respectent l'interdiction des tests sur animaux pour les cosmétiques en vigueur dans l'Union européenne et au-delà. Toutes nos formules sont testées sous contrôle dermatologique sur volontaires.",
  },
  {
    q: "Vos packagings sont-ils recyclables ?",
    a: "La majorité de nos packagings privilégie les matières recyclables — verre, aluminium, plastiques sélectionnés. Nous travaillons à l'amélioration continue de nos contenants saison après saison.",
  },
  {
    q: "Que signifie « Habba Saouda » ?",
    a: "Habba Saouda est le nom arabe des graines de nigelle (Nigella sativa), utilisées depuis l'Antiquité pour leurs vertus régénératrices. Notre gamme Hair Glow associe l'extrait pur de ces graines à un acide hyaluronique capillaire pour réveiller l'éclat des cheveux bruns.",
  },
  {
    q: "Vos formules contiennent-elles des parabènes ?",
    a: "Notre département R&D travaille en permanence à l'élimination des conservateurs controversés. La majorité de nos références récentes sont sans paraben — chaque produit indique sa charte d'absences sur sa fiche.",
  },
  {
    q: "Comment intégrer la gamme Viderm à ma routine ?",
    a: "Viderm se décline en quatre signatures : Purifiant P+ (peaux à imperfections), Soin S+ (peaux sensibles), Régulateur R+ (peaux mixtes) et Anti-âge A+. Ajoutez Viderm Solaire S+ chaque matin pour finaliser le rituel.",
  },
];

export default function FaqPage() {
  return (
    <div className="pt-44 pb-32">
      <div className="container-prose max-w-4xl">
        <p className="label-eyebrow mb-6">
          <span className="hairline inline-block align-middle mr-3" />
          FAQ
        </p>
        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-navy leading-[1]">
          Questions<br />
          <span className="italic font-light">fréquentes.</span>
        </h1>

        <div className="mt-16 border-t border-ink/15">
          {items.map((it, i) => (
            <details key={i} className="group border-b border-ink/15 py-8">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <span className="font-display text-2xl md:text-3xl text-navy pr-8">{it.q}</span>
                <span className="text-3xl text-navy/50 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="text-ink/75 text-base leading-[1.8] mt-5 max-w-prose">{it.a}</p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}
