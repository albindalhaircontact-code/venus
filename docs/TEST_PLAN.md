# Test plan — Refonte Méditerranée scientifique

## Ce qui a changé

Refonte intégrale du site `laboratoiresvenus.com` :
- Direction artistique « Méditerranée scientifique » (palette ivoire / navy / or / terracotta, typographie Cormorant Garamond + Inter)
- 12 templates de page, 423 URLs générées au build
- 307 produits, 95 catégories, 18 articles importés depuis l'API publique WP

## Ce que je vais tester

Une seule traversée E2E qui prouve que :
1. La direction artistique s'applique partout (palette, typo, hairlines, eyebrows)
2. Les vraies données sont visibles (produit Habba Saouda existe avec sa vraie image, ses vrais ingrédients)
3. La navigation est fonctionnelle entre les templates principaux
4. Les sections clés du plan stratégique sont présentes (manifeste 44 ans, mosaïque univers, capsule Hair Glow, slider maisons, engagement 3 piliers)

## Cible

Site déployé : **https://out-nixlefad.devinapps.com**

> Note routing : le host (S3 + CloudFront avec fallback SPA) ne résout pas
> automatiquement `<dir>/index.html`. Le build émet désormais des fichiers
> plats (`journal.html`, `maison/habba-saouda.html`, `produit/<slug>.html`)
> et le post-build réécrit tous les liens internes pour cibler ces URLs en
> `.html`. Les tests cliquent donc sur des liens en `.html` et non en `/`.

## Flow E2E

### Étape 1 — Accueil

Ouvrir https://out-nixlefad.devinapps.com/

**Assertions** (chacune doit être visible à l'écran) :
- Le topbar contient exactement le texte « Une pharmacopée méditerranéenne — Depuis 1981 · Algérie ».
- Le logo affiche « Laboratoires Venus » en serif italique sur deux lignes.
- Le hero contient le titre « L'éclat des bruns, par les graines de nigelle. » avec « par les graines de nigelle. » en italique.
- L'eyebrow du hero contient « NOUVELLE CAMPAGNE · HAIR GLOW » en uppercase espacé.
- Le bouton CTA « DÉCOUVRIR LA GAMME » est présent (variante claire sur fond image).

### Étape 2 — Manifeste 44 ans (scroll)

Scroller vers la section « Quarante-quatre ans »

**Assertions** :
- Titre serif « Quarante-quatre ans / d'une science familière. » avec la 2e ligne en italique.
- Eyebrow « DEPUIS 1981 » avec hairline doré.
- Lien « LE MOT DU PRÉSIDENT → ».

### Étape 3 — Mosaïque univers + capsule Habba Saouda

Continuer à scroller.

**Assertions** :
- Titre « Huit territoires de soin, / une seule signature. ».
- Au moins 8 cartes univers visibles (Visage, Cheveux, Corps, Solaire, Bébé, Homme, Parfums, Buccodentaire).
- Section « Capsule du moment » avec eyebrow terracotta, titre « Hair Glow, l'ingrédient ancestral réactualisé. ».
- 3 cartes produits Habba Saouda (Shampooing, Après-Shampooing, Masque).

### Étape 4 — Engagement (section navy)

Scroller jusqu'à la section bleu navy plein.

**Assertions** :
- Fond `#0F2A44` (bleu Venus).
- Eyebrow doré « NOTRE ENGAGEMENT ».
- Titre serif ivoire « Trois principes, vérifiables au quotidien. ».
- 3 piliers numérotés en or : « 01 Recyclable », « 02 Qualité-prix », « 03 Savoir-faire ».

### Étape 5 — Page Maison Habba Saouda

Cliquer sur « DÉCOUVRIR LA GAMME » (lien `/maison/habba-saouda`).

**Assertions** :
- Hero plein écran avec image campagne (cheveux bruns, flacon Hair Shampoo Glow).
- Titre serif « Habba Saouda » en très grande taille blanche.
- Tagline italique « L'éclat des bruns par les graines de nigelle. ».
- Signature « NIGELLA SATIVA · ACIDE HYALURONIQUE » en small caps.
- Section « La maison » avec description (400+ mots).
- Grille de produits (>= 1 référence avec vraie image flacon Hair Glow).

### Étape 6 — Page Produit Hair Glow

Cliquer sur le produit « Shampooing Sublimateur — Hair Glow ».

**Assertions** :
- URL `/produit/shampooing-sublimateur-hair-glow-a-lacide-hyaluronique-habba-saouda/`.
- Image grande du flacon Hair Shampoo Glow visible sur fond ivoire.
- Eyebrow catégorie « SHAMPOOINGS ».
- Titre serif du produit.
- Chips claims `ACIDE HYALURONIQUE` et `GRAINES DE NIGELLE` sur fond sage clair.
- CTA « TROUVER EN PHARMACIE » bleu navy.
- Au moins 3 accordéons fermés : « Application », « Résultats », « Ingrédients (INCI) ».
- Cliquer sur « Ingrédients (INCI) » → liste textuelle commençant par « Aqua » ou contenant « Cocamidopropyl ».

### Étape 7 — Journal Venus Mag

Aller à `/journal/`.

**Assertions** :
- Hero éditorial avec image (article featured).
- Titre serif « Le journal du Laboratoire. ».
- Au moins 3 cartes article avec date FR (`13 juillet 2021` ou similaire).
- Cliquer sur l'un des articles → page article s'ouvre, titre + corps texte de plusieurs paragraphes visibles.

### Étape 8 — Footer

Scroller au footer (sur n'importe quelle page).

**Assertions** :
- Fond bleu navy.
- 4 colonnes : « Laboratoires Venus », « Univers », « Maisons », « Maison Venus ».
- Liste exhaustive des 7 maisons et 8 univers en liens cliquables.
- Mention copyright `© 1981 — 2026 Laboratoires Venus SAPECO`.

## Critère global de réussite

Aucune des 8 étapes ne doit afficher un placeholder cassé, une 404, ou une page sans style. Si un seul élément clé du design system manque (palette appliquée, typo serif, eyebrows, hairlines), le test est failed.

## Hors-périmètre (non testé)

- Backend de soumission du formulaire newsletter / contact (UI seule)
- Recherche
- Mobile narrow viewport (test desktop uniquement pour cette session)
- Performance Core Web Vitals
