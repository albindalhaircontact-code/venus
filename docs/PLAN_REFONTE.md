# Plan de refonte — Laboratoires Vénus

> **Brief :** refonte complète du design de [laboratoiresvenus.com](https://laboratoiresvenus.com) inspirée des meilleurs sites cosmétiques mondiaux. Site visitable en preview + livrable installable côté organisation.

---

## 1. Contexte & analyse de l'existant

**Marque :** Laboratoires Vénus SAPECO — entreprise algérienne, **44 ans d'existence**, ~300 produits cosmétiques, 96 catégories, 8 maisons internes.

**Maisons identifiées :**
| Maison | Univers | Statut |
|---|---|---|
| **Habba Saouda – Hair Glow** | Capillaire — graines de nigelle + acide hyaluronique | **Lancement actuel** |
| **Viderm** (P+, S+, A+, R+, Solaire) | Dermique scientifique | Pilier laboratoire |
| **Nostalgie** | Parfumerie vintage | Héritage |
| **Private Collection** | Parfumerie prestige | Premium |
| **VENUS Men** | Soin masculin | Capsule |
| **Buccowhite / Dentomint** | Buccodentaire | Spécialité |
| **Bébé** | Soin nourrisson | Care |
| **Solaire** | Protection UV | Saisonnier |

**Tech actuelle :** WordPress 6.9 + Astra + Elementor + WooCommerce 9.8. **API REST 100 % publique** — toutes les données (produits, images, articles, catégories) sont récupérables sans auth.

**Diagnostic visuel actuel :**
- Couleur signature : bleu pastel `#D5E0EB` (manque d'autorité, look 2018)
- Polices : Varela + Montserrat (génériques)
- Pas de système de design cohérent — Elementor accumulé section après section
- 100+ images sur la home, hiérarchie visuelle écrasée
- Site catalogue (prix=0) — vitrine non e-commerce
- Mix anglais/français, doublons de pages WC

---

## 2. Brainstorming — l'équipe virtuelle

J'ai assemblé virtuellement les directions créatives qui ont fait l'autorité de la beauté mondiale et compilé leurs principes pour Vénus :

| Référence | Ce qu'on emprunte |
|---|---|
| **Aesop** | *Quiet authority*, typographie sérif littéraire, fond ivoire, claims sans superlatif. "L'intelligence est déjà partagée." |
| **Augustinus Bader** | Autorité scientifique en single-color statement, photo packshot sur fond uni, restraint absolu sur la home |
| **Officine Universelle Buly 1803** | Néo-classique méditerranéen, cartouches ornés, sépia chaud, voix d'apothicaire |
| **Tata Harper** | Naturel végétal premium, ingrédients héro, photographie macro éditoriale |
| **Typology** | Codification scientifique des concerns (A31, L32…), filtres par préoccupation/peau, transparence formule |
| **Caudalie** | Storytelling ingrédient (vinothérapie → nigelle), héritage familial, légère dorure |
| **Dolce & Gabbana Fresh Skin** *(Awwwards 2025)* | Animation immersive, transitions cinématographiques, mood terracotta/brun |
| **Loewe Perfumes** | Galerie produit en grille éditoriale, fonds de couleur par produit |
| **Le Labo** | Étiquettes typographiques brutes, voix de laboratoire artisanal |
| **Susanne Kaufmann** | Photographie nature, sérénité alpine → décliné méditerranée |

**Études couleurs / psychologie consultées :**
- Le bleu profond évoque autorité scientifique, fiabilité, héritage pharmaceutique → on l'utilise comme couleur de marque.
- L'ivoire/crème évoque luxe naturel, durabilité, packaging premium (Aesop, La Mer, Augustinus Bader).
- La terracotta/or évoque chaleur méditerranéenne, savoir-faire ancestral, soleil algérien — différenciant fort vs concurrents européens.
- Le vert sauge évoque botanique, naturel, soin doux (gamme Bébé / capillaire).

---

## 3. Direction artistique retenue

### **« Méditerranée scientifique »**
*Une pharmacopée moderne née sous le soleil algérien — l'autorité d'un laboratoire, la chaleur d'un héritage 44 ans, la précision d'un rituel.*

### Palette
| Rôle | Couleur | Hex | Usage |
|---|---|---|---|
| **Fond principal** | Ivoire chaud | `#F4EFE6` | Surfaces neutres, atmosphère luxe |
| **Marque profonde** | Bleu Vénus | `#0F2A44` | Headers, CTA, identité |
| **Bleu héritage** | Bleu pastel | `#D5E0EB` | Rappel marque actuelle, surfaces secondaires |
| **Accent prestige** | Or doré poudré | `#C9A063` | Détails, séparateurs, prestige |
| **Accent chaleur** | Terracotta | `#C57B57` | Méditerranée, gamme Habba Saouda |
| **Accent végétal** | Sauge poudrée | `#A7B098` | Naturel, gamme bébé/nature |
| **Encre** | Noir profond | `#0E0E10` | Typographie principale |

### Typographie
- **Display** : *Cormorant Garamond* (serif élégant néo-classique, italique pour les sous-titres)
- **Corps** : *Inter* (sans-serif moderne, lisibilité optimale)
- **Étiquette** : *Inter* en majuscules tracking expanded (small caps numériques pour les claims labos)

### Voix & ton
- **Sage**, *retenu*, méditerranéen
- Phrases courtes, pas de superlatif marketing
- Latin botanique pour les ingrédients (*Nigella sativa*, *Hyaluronic acid*)
- Mention systématique du « Laboratoire Vénus — depuis 1981 »
- Bilingue prêt : FR principal, EN/AR en switch

---

## 4. Architecture & sections

### Navigation principale
```
SOINS / VISAGE / CHEVEUX / CORPS / HOMME / BÉBÉ / SOLAIRE / PARFUMS / [JOURNAL]
```
Mega-menu visuel avec 1 image par catégorie + lien "voir tout".

### Pages clés
1. **Accueil**
2. **Boutique** (toutes catégories, filtres)
3. **Catégorie** (cheveux, visage, corps…)
4. **Maison** (page dédiée par marque interne — Viderm, Habba Saouda, Nostalgie, Private Collection, VENUS Men)
5. **Produit** (galerie, ingrédients, rituel, claims, related)
6. **Le Laboratoire** (about — 44 ans, mot du PDG, savoir-faire, exports)
7. **Engagement** (recyclable, qualité, RSE)
8. **Journal / Venus Mag** (19 articles)
9. **Article**
10. **Contact**
11. **FAQ**
12. **Mentions légales** / **Confidentialité**

### Sections de la home (réinventées)
1. **Hero cinématique** — campagne *Habba Saouda Hair Glow* (image plein écran + claim sobre + 1 CTA)
2. **Manifeste 44 ans** — texte court + signature graphique
3. **L'univers Vénus** — mosaïque éditoriale 6 catégories pivot (Visage, Cheveux, Corps, Bébé, Solaire, Parfums)
4. **Gamme du moment** — focus *Habba Saouda* (3 produits + ingrédient héro + CTA)
5. **Nos maisons** — slider horizontal des 7 maisons internes
6. **Rituels & savoir** — 3 articles Venus Mag éditorialisés
7. **Témoignages** — carrousel client (déjà existant en data)
8. **Engagement** — 3 piliers scrollytell (Recyclable / Qualité-Prix / Savoir-faire)
9. **Présence internationale** — carte des exports
10. **Newsletter** — 1 input + 1 bouton, pas de pop-up agressive
11. **Footer riche** — réassurance, certifications (PDA Algérie, AFAO), réseaux, plan

---

## 5. Page produit — composants

```
[ Galerie 4:5 ]    [ Étiquette catégorie ]
                   [ Nom produit (sérif) ]
                   [ Référence + contenance ]
                   [ Note + nombre d'avis ]
                   [ Description courte ]
                   [ CTA principal — "Trouver en pharmacie" / "Ajouter" ]
                   [ Bénéfices (3 puces) ]
                   [ Ingrédient héro (carte avec illustration) ]
                   [ Accordéons : Application • Résultats • Ingrédients (INCI) • FAQ ]
                   [ Texte de marque (Vénus, 44 ans) ]

[ Section ailleurs ] : "Compléter le rituel" → 3 produits same-line
[ Section ailleurs ] : Articles Venus Mag liés
```

---

## 6. Stack technique & livraison

### Stack du site preview
- **Next.js 14 (App Router)** + **TypeScript**
- **Tailwind CSS** (design tokens custom = palette Vénus)
- **Framer Motion** (animations subtiles)
- Données = snapshot JSON statique généré depuis l'API publique (importé une fois au build → site full static)
- Déployé sur **devinapps.com** (frontend hosting) — URL publique partageable

### Structure du repo
```
venus/
├── web/                # Site Next.js (preview live)
├── data/               # Snapshot API (produits, catégories, articles)
├── delivery/           # Livrables organisation
│   ├── theme-astra-child-venus/   # Thème enfant Astra (.zip à installer)
│   ├── INSTALLATION.md            # Guide en français pour l'organisation
│   └── README.md
├── docs/               # Doc design & plan
└── README.md
```

### Livrables organisation
1. **Thème enfant Astra `.zip`** — installable en 1 clic via *Apparence → Thèmes → Ajouter* dans WP. Tout le contenu (300 produits, 19 articles, 96 catégories) reste intact.
2. **Optionnel — Elementor Kit JSON** — templates de pages à importer dans Elementor.
3. **Guide d'installation** : 5 étapes en français.

---

## 7. Phases de travail

| Phase | Livrable | État |
|---|---|---|
| **0. Audit & plan** | Ce document | ✓ |
| **1. Design system** | Tokens, typographie, composants atomiques | en cours |
| **2. Pages clés** | Home, boutique, catégorie, produit, marque, journal, contact | en cours |
| **3. Données** | Import API → snapshot JSON | ✓ |
| **4. Preview publique** | Déploiement sur devinapps.com | à venir |
| **5. Livrable WordPress** | Thème enfant Astra `.zip` + guide | à venir |
| **6. Validation utilisateur** | Itérations selon retours | à venir |

---

## 8. Décisions à valider

1. **Direction artistique** — *Méditerranée scientifique* (palette ivoire/bleu profond/or/terracotta) ?
2. **Périmètre** — refonte 100 % visuelle + arborescence repensée, ou conserve-t-on les 20 pages existantes telles quelles ?
3. **E-commerce** — site reste vitrine catalogue (sans prix), ou on prépare l'activation prix/panier pour plus tard ?
4. **Langues** — uniquement FR pour la preview, ou FR + EN + AR ?

> Je commence l'implémentation immédiatement avec la direction *Méditerranée scientifique* — facile de pivoter ensuite.
