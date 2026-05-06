# Test E2E — Refonte Méditerranée scientifique

**Cible** : https://out-nixlefad.devinapps.com
**PR** : https://github.com/albindalhaircontact-code/venus/pull/1
**Session Devin** : https://app.devin.ai/sessions/c361f213bb7b4df7a509525b231660ed
**Recording** : https://app.devin.ai/attachments/f47536fb-7da1-4922-b4e1-f3a8b25d5af0/rec-91eca336-956e-416b-b3fa-fbc077475fb2-edited.mp4

## TL;DR

Toutes les assertions du flow E2E sont passées (10/10). Un bug de routing a été identifié pendant le premier passage (toutes les sous-pages retournaient l'accueil), corrigé pendant la session, redéployé et re-testé. Le site déployé est navigable sur tous les templates.

## Escalations

Aucun blocage. Une seule chose à noter pour le futur : les URLs publiques sur ce host se terminent en `.html` (ex. `/journal.html`). Sur Vercel/Netlify ou un host qui résout `<dir>/index.html`, on peut basculer `trailingSlash: true` pour avoir des URLs propres `/journal/`.

## Résultats

| # | Test | Résultat |
|---|---|---|
| 1 | It should display the home hero with brand voice | ✅ passed |
| 2 | It should anchor the brand with the 44-year manifesto | ✅ passed |
| 3 | It should display 8 univers cards with imagery and labels | ✅ passed |
| 4 | It should preview the 7 maisons signature | ✅ passed |
| 5 | It should display the 3-pillar engagement section on navy bg | ✅ passed |
| 6 | It should navigate to the Habba Saouda maison page on click | ✅ passed |
| 7 | It should list the Habba Saouda product gamme | ✅ passed |
| 8 | It should expose real INCI ingredients in the accordion | ✅ passed |
| 9 | It should display the editorial Venus Mag listing | ✅ passed |
| 10 | It should open the journal article detail page | ✅ passed |
| 11 | It should display the navy footer with 4 columns + copyright | ✅ passed |

## Bug trouvé pendant les tests, corrigé

| 🔴 AVANT (bug routing) | 🟢 APRÈS (fix `.html` flat) |
|---|---|
| `/journal/` → renvoie l'accueil | `/journal.html` → renvoie la liste éditoriale |
| `/maison/habba-saouda/` → renvoie l'accueil | `/maison/habba-saouda.html` → renvoie la maison |
| `/produit/<slug>/` → renvoie l'accueil | `/produit/<slug>.html` → renvoie la fiche produit |

Le host devinapps.com (S3 + CloudFront avec fallback SPA) ne résout pas automatiquement `<dir>/index.html`. Le build émet maintenant des fichiers `.html` plats et un postbuild script (`web/scripts/postbuild-flatten.mjs`) réécrit tous les liens internes en `.html`. Commit : `51abee4`.

## Captures clés

### Direction artistique sur l'accueil

| Hero campagne Habba Saouda | Manifeste 44 ans |
|---|---|
| ![Hero](https://app.devin.ai/attachments/d0922363-5529-4e1c-9dd2-500dfec88b0a/screenshot_46361073624f41b084e22533eccf73e2.png) | ![Manifeste](https://app.devin.ai/attachments/d8bf741b-d87c-46b1-8fc0-1e4627c3c33f/screenshot_e22425cb87604b3e8c597ea3cdd14093.png) |
| Titre serif italique « L'éclat des bruns, par les graines de nigelle. » + CTA Découvrir la gamme | « Quarante-quatre ans / d'une science familière. » + Le mot du Président |

| Mosaïque univers (8 territoires) | Slider Maisons (7 signatures) |
|---|---|
| ![Univers](https://app.devin.ai/attachments/3bcbc9aa-d458-4d87-b9ee-76bbad3ce7c7/screenshot_bf294f47362041528917dc1a17736550.png) | ![Maisons](https://app.devin.ai/attachments/d391ec44-88a2-4f21-b435-ff3a80812d62/screenshot_fd6d85f6473547a994dd1631fa07c00f.png) |
| Visage / Cheveux / Corps / Solaire / Bébé / Homme / Parfums / Buccodentaire | Habba Saouda / Viderm / Nostalgie / Private Collection / Venus Men… |

### Section engagement (palette navy + or)

![Engagement navy](https://app.devin.ai/attachments/571f356a-ae50-433d-b96c-1ee9a407746b/screenshot_bf2105eaa3e34043b485372e34f2e30a.png)

« Trois principes, vérifiables au quotidien. » — fond `#0F2A44`, numéros `01 / 02 / 03` en or `#C9A063`, piliers Recyclable / Qualité-prix / Savoir-faire.

### Maison & produit Habba Saouda

| Hero Maison | Gamme (4 références importées) |
|---|---|
| ![Maison hero](https://app.devin.ai/attachments/0016412e-3559-4a3b-9596-653011194fe3/screenshot_4bafe75c8ab3483f8ec70e08e1f078be.png) | ![Gamme](https://app.devin.ai/attachments/fd3d9d7f-f04c-43ad-8208-3f770a59ce8f/screenshot_110abee3a405452180d9bb5ed0e6595f.png) |
| « Habba Saouda » + tagline italique « L'éclat des bruns par les graines de nigelle. » + signature `NIGELLA SATIVA · ACIDE HYALURONIQUE` | SHAMPOOINGS · DÉMÊLANTS · MASQUES · CHEVEUX BRUNS ET TERNES |

| Fiche produit | INCI réel importé |
|---|---|
| ![Produit](https://app.devin.ai/attachments/16ee6848-120c-49e8-90cf-ec6a69b632e7/screenshot_2779230fe4844dba8a7b4892d2cbe98d.png) | ![INCI](https://app.devin.ai/attachments/73d264e3-d04b-4885-9bf8-ec8df56cefe1/screenshot_9082255cad34446c870be448f38ec507.png) |
| Chips `ACIDE HYALURONIQUE` + `GRAINES DE NIGELLE`, accordéons Application / Résultats / INCI, CTA Trouver en pharmacie | `Aqua, Aqua (and) Ammonium Laureth Sulfate (and) ... Cocamidopropyl Betaine ... Nigella sativa seed ...` |

### Venus Mag (journal)

| Listing éditorial | Article détail |
|---|---|
| ![Journal](https://app.devin.ai/attachments/9bbf129f-daf1-4932-9611-b0101d1360d2/screenshot_3cff20971701434aa23a3c7a73764918.png) | ![Article](https://app.devin.ai/attachments/1d32af36-e770-4791-93d5-0f526d4673b1/screenshot_f8d1b2b0da154c859c18d09c97185890.png) |
| « Le journal du Laboratoire. » + featured + grid d'articles avec dates FR | Article complet « 8 astuces pour avoir un beau sourire » avec corps multi-paragraphes |

### Footer

![Footer](https://app.devin.ai/attachments/113721fc-0e49-4962-8c63-4f1cf4e878a4/screenshot_08e40415f54a4fdd85a3eafb5123eedf.png)

Navy `#0F2A44`, 4 colonnes (Laboratoires Venus / Univers / Maisons / Maison Venus), badges certifications (Élu Produit de l'année · PDA · AFAO), copyright `© 1981 — 2026 LABORATOIRES VÉNUS SAPECO`.

## Hors-périmètre (non testé)

- Soumission backend formulaire newsletter / contact (UI seule sans backend)
- Recherche produits
- Mobile narrow viewport (test desktop uniquement)
- Performance Core Web Vitals
- Tests visuels comparatifs sur les 423 pages (sondage de templates ciblé)
