# Eurobarrere Fondations - Site Web

Site web professionnel pour Eurobarrere Fondations, spécialiste en fondations spéciales, reprise en sous-œuvre et travaux souterrains en Île-de-France.

## Stack Technique

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS
- **Fonts**: Barlow Condensed (titres) + DM Sans (body)
- **Icons**: Lucide React
- **Optimisation**: next/image, next/font

## Structure du Projet

```
/app                    → Pages Next.js (App Router)
/components
  /ui                   → Composants réutilisables
  /sections             → Sections de page
  /layout               → Navbar, Footer
/lib                    → Utils, constants
/public/images          → Images optimisées (WebP)
```

## Règles de Développement

Consulter `windsurfrules.md` pour les règles complètes concernant:
- Identité visuelle (palette, typographie, layout)
- Composants standards
- Performance & SEO
- Interdits absolus

## Démarrage

```bash
npm install
npm run dev
```

## SEO

Le site est optimisé pour le référencement organique avec:
- Métadonnées complètes sur chaque page
- Données structurées JSON-LD
- Core Web Vitals optimisés
- Architecture URL SEO-friendly
