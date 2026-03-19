# ============================================================
# WINDSURF FRONTEND RULES — BTP / TRAVAUX SPÉCIAUX
# Client : Eurobarrere Fondations
# Secteur : Fondations, géotechnique, travaux souterrains
# Cible : Professionnels B2B (maîtres d'ouvrage, architectes, bureaux d'études)
# Levier principal : SEO organique (zéro ads)
# ============================================================

## 🎯 IDENTITÉ VISUELLE — RÈGLES ABSOLUES

### Palette de couleurs
- Couleur dominante : noir profond (#0D0D0D)
- Surface/cards : anthracite (#1C1C1C)
- Accent principal : rouge brique (#C0392B) — évoque la terre, le sous-sol, les fondations
- Accent secondaire : acier froid (#7F8C8D)
- Background sections claires : blanc cassé béton (#F0EDE8)
- JAMAIS : orange chantier générique, bleu corporate, violet, vert startup, blanc pur seul
- Toujours utiliser des CSS custom properties pour toutes les couleurs :
  ```css
  :root {
    --color-primary: #0D0D0D;
    --color-surface: #1C1C1C;
    --color-accent: #C0392B;
    --color-steel: #7F8C8D;
    --color-light: #F0EDE8;
    --color-text: #F0EDE8;
    --color-text-muted: #9A9590;
  }
  ```

### Typographie — CRITIQUE
- INTERDIT : Inter, Roboto, Arial, system-ui, sans-serif générique
- Display/Titres : Barlow Condensed, Bebas Neue, DIN Condensed, Antonio, ou Oswald — polices à caractère industriel
- Body/Texte : DM Sans, Epilogue, Figtree, ou Plus Jakarta Sans — lisible mais distinctif
- Toujours importer depuis Google Fonts avec preconnect pour la performance
- Titres H1 : condensed bold, large, uppercase avec letter-spacing négatif
- Sous-titres : police body, poids léger, color muted
- JAMAIS de font-weight 400 seul pour les titres — au minimum 700, idéalement 800-900

### Layout & Composition
- Grilles asymétriques — éviter le centrage systématique de tout
- Hero : plein écran avec superposition texte sur image/vidéo de chantier
- Éléments qui "cassent" la grille : chiffres clés en très grand (opacity réduite), diagonales, overlaps
- Sections avec angle diagonal (clip-path: polygon) pour transitions entre blocs
- JAMAIS de cartes Bootstrap génériques alignées en 3 colonnes parfaites sans traitement
- Utiliser des separateurs visuels forts : lignes en accent color, bordures épaisse à gauche

### Effets visuels & Atmosphère
- Texture subtile sur les backgrounds : noise grain (SVG filter ou pseudo-element)
- Ombres dramatiques et profondes — box-shadow avec spread large et opacity faible
- Images : toujours avec overlay (gradient dark ou accent color à 40-60% opacity)
- Compteurs animés pour les chiffres clés (années d'expérience, projets réalisés, etc.)
- Hover states sur tous les éléments interactifs — transformation subtile + transition 200ms

---

## 🏗️ COMPOSANTS — STANDARDS SECTORIELS

### Hero Section
```
- Hauteur : 100vh minimum
- Background : image chantier/travaux avec overlay sombre gradient
- Titre : 2-3 mots max, très grand, uppercase, Barlow Condensed Bold
- Sous-titre : phrase courte, DM Sans, muted
- CTA : bouton accent color, pas de border-radius générique — soit 0px (carré), soit 2px
- Badge de confiance visible : "Certifié Qualibat", "X ans d'expérience", etc.
```

### Section Services/Prestations
```
- Layout : grille avec numérotation visible (01, 02, 03...) en très grand, opacity 0.1, en arrière-plan
- Icônes : SVG custom ou Lucide, jamais d'emojis, jamais de Font Awesome generique
- Accent gauche : border-left 3px solid var(--color-accent) sur chaque item
- Hover : slight translate-x et background légèrement plus clair
```

### Section Chiffres Clés
```
- Background dark contrastant
- Chiffres : très grand (clamp 48px à 80px), Barlow Condensed, accent color
- Texte descriptif : petit, uppercase, letter-spacing 0.15em, muted
- Animation countUp au scroll (IntersectionObserver)
- Séparateurs verticaux en steel color entre les blocs
```

### Navigation
```
- Sticky avec backdrop-filter: blur(12px) au scroll
- Logo à gauche, liens à droite, CTA bouton accent
- Transition smooth sur scroll : légèrement plus opaque + shadow
- Mobile : hamburger menu avec slide overlay plein écran
- JAMAIS de navbar Bootstrap ou MUI par défaut
```

### Footer
```
- Background : presque noir (#111)
- 3-4 colonnes : info société / services / certifications / contact
- Mentions légales, SIRET visible (crédibilité B2B)
- Couleur accent pour les liens au hover
```

---

## ⚡ PERFORMANCE & CODE

### Next.js / React
- Utiliser `next/image` pour TOUTES les images — jamais de balise `<img>` directe
- `next/font` pour les polices — pas de @import CSS Google Fonts dans les components
- Lazy loading des sections below-the-fold avec `loading="lazy"`
- Composants Server Components par défaut, Client Components uniquement si interaction requise
- Pas de `useEffect` pour des données statiques

### CSS
- CSS Modules ou Tailwind — PAS de styled-components pour ce type de projet
- Si Tailwind : étendre le thème dans `tailwind.config.js` avec la palette du projet
- Variables CSS globales dans `globals.css` — toujours
- Media queries mobile-first
- Transitions : `transition: all` INTERDIT — toujours spécifier la propriété (transform, opacity, background-color)

### Structure de fichiers
```
/components
  /ui          → composants réutilisables (Button, Card, Badge)
  /sections    → sections de page (Hero, Services, About, Contact)
  /layout      → Navbar, Footer, Layout wrapper
/lib           → utils, constants, helpers
/public/images → images optimisées (WebP préféré)
```

---

## 🔍 SEO — RÈGLES CRITIQUES (levier principal du client)

### Métadonnées — chaque page obligatoire
```tsx
export const metadata: Metadata = {
  title: "Reprise en Sous-Œuvre Paris Île-de-France | Eurobarrere Fondations",
  description: "Spécialiste fondations spéciales, reprise en sous-œuvre et confortement de carrières en Île-de-France. Devis gratuit sous 48h.",
  openGraph: {
    title: "...",
    description: "...",
    url: "https://www.eurobarrerefondations.com",
    siteName: "Eurobarrere Fondations",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    locale: "fr_FR",
    type: "website",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.eurobarrerefondations.com/[slug]" }
}
```

### Structure HTML sémantique — OBLIGATOIRE
- UN SEUL h1 par page — contient le mot-clé principal
- h2 pour les sections principales — variantes du mot-clé
- h3 pour les sous-sections — jamais utilisé pour le style
- Balises sémantiques obligatoires : main, header, footer, nav, article, section
- Breadcrumb sur toutes les pages internes

### Images — SEO + Performance
- alt descriptif sur TOUTES les images — jamais alt="" sur contenu
- Format WebP obligatoire — nom de fichier descriptif : reprise-sous-oeuvre-paris.webp
- next/image avec width/height explicites — zéro layout shift (CLS)
- Image hero : priority prop pour LCP < 2.5s
- Image OG 1200x630px par page

### Core Web Vitals — impact ranking Google direct
- LCP < 2.5s : hero image préchargée avec priority
- CLS < 0.1 : width/height sur toutes les images et iframes
- INP < 100ms : pas de JS bloquant au premier chargement
- next/font obligatoire — jamais @import Google Fonts dans les composants

### Données structurées JSON-LD — OBLIGATOIRE dans layout.tsx
- Schema LocalBusiness avec areaServed : Paris, Île-de-France et tous les départements 75/77/78/91/92/93/94/95
- Schema Service individuel par prestation
- Schema FAQ sur chaque page pilier
- Schema BreadcrumbList sur toutes les pages internes

### Architecture des URLs
```
/                                     → accueil
/prestations/                         → hub prestations
/prestations/reprise-en-sous-oeuvre/  → page pilier
/prestations/confortement-carrieres/  → page pilier
/prestations/puits-blindes/           → page pilier
/realisations/                        → portfolio
/realisations/[slug]/                 → page projet
/zones-intervention/paris/            → SEO géolocalisé
/zones-intervention/ile-de-france/    → SEO géolocalisé
/contact/
/a-propos/
```

### Règles de contenu SEO
- Chaque page pilier : minimum 800 mots de contenu réel — jamais lorem ipsum
- Mot-clé principal dans : H1, premier paragraphe, une H2, meta title, meta description
- Maillage interne : chaque page relie vers 2-3 pages connexes avec ancres descriptives
- CTA avec ancre SEO : "Demander un devis reprise en sous-oeuvre" — pas "Cliquez ici"
- FAQ accordion sur chaque page pilier avec Schema FAQ JSON-LD

### Fichiers techniques
- sitemap.xml auto-généré via next-sitemap ou App Router sitemap.ts
- robots.txt : allow all + sitemap URL déclarée
- next.config.js : images WebP/AVIF, compress: true, poweredByHeader: false

---

## 🚫 INTERDITS ABSOLUS

- JAMAIS Inter ou Roboto comme police principale
- JAMAIS purple gradient (#7c3aed style) ou bleu startup (#3B82F6 dominant)
- JAMAIS de cartes Bootstrap 3-colonnes sans personnalisation
- JAMAIS de border-radius > 8px sur les éléments principaux (secteur industriel = carré/anguleux)
- JAMAIS d'icônes Font Awesome ou emojis dans les sections pro
- JAMAIS de `<form>` HTML — utiliser des event handlers React (onChange, onSubmit via button onClick)
- JAMAIS de layout entièrement centré sans éléments qui brisent la symétrie
- JAMAIS de couleur pastel ou "soft UI" dans ce secteur
- JAMAIS de faux témoignages avec avatars génériques ronds — utiliser des citations avec nom/titre/entreprise

---

## ✅ CHECKLIST AVANT LIVRAISON

### Design & Code
- [ ] Toutes les couleurs sont des CSS variables
- [ ] Police display ≠ Inter/Roboto/Arial
- [ ] Au moins 1 effet de texture ou grain
- [ ] Compteurs animés sur les chiffres clés
- [ ] Images avec overlay sombre
- [ ] Navigation sticky fonctionnelle
- [ ] Mobile responsive vérifié (320px, 768px, 1280px)
- [ ] CTA visible en above-the-fold
- [ ] Mentions de confiance visibles (certifications, années d'expérience)
- [ ] Aucun img sans width/height définis

### SEO
- [ ] Un seul H1 par page avec mot-clé principal
- [ ] Metadata title + description sur chaque page
- [ ] Canonical URL sur chaque page
- [ ] Alt text descriptif sur toutes les images
- [ ] Images renommées en kebab-case descriptif (WebP)
- [ ] JSON-LD LocalBusiness dans layout.tsx
- [ ] JSON-LD Service sur chaque page prestation
- [ ] JSON-LD FAQ sur chaque page pilier
- [ ] sitemap.xml généré et déclaré dans robots.txt
- [ ] Breadcrumb visible + Schema BreadcrumbList
- [ ] Core Web Vitals : LCP < 2.5s, CLS < 0.1
- [ ] next/font utilisé — pas de @import Google Fonts
- [ ] next/image avec priority sur le hero
- [ ] Maillage interne vérifié (2-3 liens internes par page)
- [ ] Pages /zones-intervention/ créées pour le SEO local
