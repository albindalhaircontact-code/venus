# Laboratoires Vénus — Refonte « Méditerranée scientifique »
## Guide d'installation pour l'organisation

---

Bonjour,

Ce dossier contient l'intégralité de la refonte du site `laboratoiresvenus.com`. Selon les besoins de l'organisation et le degré d'autonomie souhaité, **deux options de déploiement** sont possibles. Vous pouvez choisir l'une OU l'autre — elles ne sont pas exclusives, mais l'option B (site Next.js) est celle qui rend le design fidèle à 100 %.

| Option | Effort | Fidélité du design | Hébergement |
|---|---|---|---|
| **A. Thème enfant Astra** | 5 minutes | ~70 % (couleurs, typo, boutons, footer) | WordPress existant |
| **B. Site Next.js complet** | 15 minutes | **100 %** | Vercel / Netlify (gratuit) |

---

## Option A — Installer le thème enfant Astra (re-skin progressif)

> Cette option **garde tout le contenu actuel** (produits WooCommerce, articles, pages Elementor) et **applique automatiquement** la nouvelle palette, la nouvelle typographie et les composants Vénus à tout le site existant. Idéal pour une transition douce.

### Étape 1 — Téléverser le thème

1. Téléchargez le fichier `venus-astra-child.zip` (à côté de ce guide).
2. Dans le tableau de bord WordPress, allez dans **Apparence → Thèmes → Ajouter un nouveau thème → Téléverser un thème**.
3. Sélectionnez `venus-astra-child.zip` puis cliquez sur **Installer maintenant**.
4. Une fois installé, cliquez sur **Activer**.

### Étape 2 — Vérifier qu'Astra est bien le thème parent

Le thème enfant a besoin du thème parent **Astra** (déjà installé sur le site actuel). Si Astra n'apparaît plus dans la liste des thèmes, réinstallez-le depuis **Apparence → Thèmes → Ajouter un nouveau thème** (recherchez "Astra").

### Étape 3 — Vider les caches

- **Apparence → Personnaliser** → enregistrer (force la régénération du CSS).
- Si un plugin de cache est actif (WP Rocket, Litespeed, W3 Total Cache…) : vider tous les caches.
- Vider aussi le cache navigateur (Ctrl+F5).

### Que change le thème enfant Astra ?

- **Palette** : ivoire `#F4EFE6` · bleu Vénus `#0F2A44` · or doré `#C9A063` · terracotta `#C57B57` · sauge `#A7B098`
- **Typographie** : Cormorant Garamond (titres) + Inter (corps)
- **Header** : topbar « Une pharmacopée méditerranéenne — Depuis 1981 · Algérie », logo en serif élégant
- **Boutons** : majuscules, lettrage espacé, navy/ivoire
- **Cartes produit WooCommerce** : titres serif, prix en label small caps
- **Footer** : navy plein, liens or au survol
- **Shortcodes utiles dans Elementor** :
  - `[venus_eyebrow text="Notre engagement"]` → petit label avec hairline doré
  - `[venus_display]Quarante-quatre ans <em>d'une science familière.</em>[/venus_display]` → grand titre serif

### Désactivation

Pour revenir à l'apparence précédente : **Apparence → Thèmes → Activer Astra**. Aucun contenu n'est modifié.

---

## Option B — Déployer le site Next.js complet (recommandé)

> Cette option remplace 100 % du frontend par la nouvelle refonte, en gardant WordPress comme back-office. Le site est généré statiquement → ultra-rapide, jamais en panne, hébergement gratuit.

### Ce que vous avez

- `static-site/` — un dossier prêt à servir sur n'importe quel hébergeur statique (≈32 Mo, 423 pages)
- `source/` — le code source Next.js complet (TypeScript) pour régénérer le site quand le catalogue évolue

### Méthode la plus simple : déploiement Vercel (gratuit, 3 minutes)

1. Créez un compte gratuit sur https://vercel.com
2. Cliquez sur **Add New → Project → Browse → glissez le dossier `source/`**
3. Vercel détecte automatiquement Next.js, cliquez **Deploy**
4. Une URL `xxx.vercel.app` est générée. Pointez votre nom de domaine `laboratoiresvenus.com` dessus dans **Vercel → Settings → Domains**

### Méthode statique : n'importe quel hébergeur

Le contenu de `static-site/` est un site HTML/CSS/JS pur. Téléversez-le tel quel via FTP / cPanel / SSH dans le dossier `public_html/` ou équivalent.

### Mettre à jour le contenu (ajout de produit, article)

Le site Next.js lit ses données depuis un snapshot JSON généré à partir de l'API publique de WordPress. Pour rafraîchir :

```bash
cd source/data
python3 fetch.py    # télécharge le catalogue WP
python3 normalize.py # nettoie et structure
cd ../web
npm run build       # régénère les 423 pages
```

→ Vercel rebuild automatiquement à chaque push GitHub.

---

## Documentation technique

### Données importées (snapshot du `2026-05-05`)

- **307 produits** complets (titre, image, catégorie, application, résultats, ingrédients INCI, claims)
- **95 catégories** hiérarchisées
- **18 articles** Vénus Mag avec images d'en-tête

### Pages générées (12 templates, 423 URLs)

- `/` — Accueil (10 sections)
- `/boutique` — Catalogue complet
- `/categorie/[slug]` — 71 pages catégories
- `/produit/[slug]` — 307 pages produit
- `/maison/[id]` — 7 maisons (Habba Saouda, Viderm, Nostalgie, Private Collection, Vénus Men, Buccowhite, Vénus Bébé)
- `/univers/[id]` — 8 univers (Visage, Cheveux, Corps, Solaire, Bébé, Homme, Parfums, Buccodentaire)
- `/journal` & `/journal/[slug]` — 18 articles
- `/laboratoire` — Mot du Président, repères 44 ans
- `/engagement` — 3 piliers (Recyclable, Qualité-prix, Savoir-faire)
- `/contact` — Formulaire et coordonnées
- `/faq` — 6 questions fréquentes

### Direction artistique

Inspirations : **Aesop** (autorité scientifique discrète), **Augustinus Bader** (luxe clinique), **Officine Universelle Buly** (raffinement néo-classique), **Caudalie** (heritage botanique), **Tata Harper** (rituel premium).

---

## Support

Pour toute question sur le déploiement :
- Code source complet : `source/` (Next.js 14, TypeScript, Tailwind CSS)
- Documentation technique : `source/docs/PLAN_REFONTE.md`
- Site de prévisualisation : https://out-nixlefad.devinapps.com

— Réalisé pour Albin Dalhair / Laboratoires Vénus
