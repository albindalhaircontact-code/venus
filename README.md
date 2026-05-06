# Laboratoires Venus — Refonte

Refonte complète du site `laboratoiresvenus.com` — direction artistique « Méditerranée scientifique ».

**Preview live** : https://out-nixlefad.devinapps.com

## Structure du repo

```
.
├── web/         → Application Next.js 14 (TypeScript + Tailwind)
├── data/        → Snapshot brut + script de normalisation des données WP
├── docs/        → Plan stratégique et moodboard
└── delivery/    → Livrable pour l'organisation (thème enfant Astra + guide)
```

## Stack

- **Next.js 14** (App Router, output static)
- **TypeScript**
- **Tailwind CSS** avec design tokens custom Venus
- **Cormorant Garamond + Inter** (Google Fonts)
- **Données** : 307 produits, 95 catégories, 18 articles importés depuis l'API WordPress publique

## Développement local

```bash
cd web
npm install
npm run dev      # http://localhost:3000
```

## Build statique (pour déploiement)

```bash
cd web
npm run build    # → web/out/ (423 pages HTML, ~32 MB)
```

## Mettre à jour les données

```bash
cd data
python3 fetch.py      # ré-aspire l'API WP de laboratoiresvenus.com
python3 normalize.py  # → site.json
cp site.json ../web/data/
cd ../web && npm run build
```

## Livrables

- `delivery/venus-astra-child.zip` — thème enfant Astra à installer en 1 clic dans WordPress
- `delivery/INSTALLATION.md` — guide d'installation FR pour l'organisation
- `web/out/` — site statique 423 pages prêt à servir sur n'importe quel hébergeur

## Direction artistique

Voir `docs/PLAN_REFONTE.md` pour le plan complet et le moodboard.

**Palette** : `#F4EFE6` ivoire · `#0F2A44` bleu Venus · `#C9A063` or doré · `#C57B57` terracotta · `#A7B098` sauge · `#D5E0EB` bleu pastel
