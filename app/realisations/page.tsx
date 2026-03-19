import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Nos Réalisations | Eurobarrere Fondations - Travaux Souterrains Paris',
  description: 'Découvrez nos réalisations en travaux souterrains : confortement de carrières, puits blindés, reprise en sous-œuvre à Paris et en Île-de-France.',
  openGraph: {
    title: 'Nos Réalisations | Eurobarrere Fondations',
    description: 'Portfolio de nos projets de travaux souterrains en Île-de-France.',
    url: 'https://www.eurobarrerefondations.com/realisations',
    siteName: 'Eurobarrere Fondations',
    locale: 'fr_FR',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.eurobarrerefondations.com/realisations',
  },
}

const realisations = [
  {
    id: 1,
    title: 'Confortement de carrière - Piliers maçonnés',
    category: 'Confortement de carrières',
    location: 'Paris 14e',
    image: '/images/confortement-carriere-piliers-maconnes.jpg',
    description: 'Soutènement du ciel de carrière par piliers maçonnés en pierre. Consolidation d\'anciennes galeries souterraines.',
  },
  {
    id: 2,
    title: 'Pilier de soutènement en carrière',
    category: 'Confortement de carrières',
    location: 'Île-de-France',
    image: '/images/pilier-soutenement-carriere-paris.jpg',
    description: 'Réalisation de pilier maçonné pour soutènement du ciel de carrière. Technique traditionnelle éprouvée.',
  },
  {
    id: 3,
    title: 'Reprise en sous-œuvre avec étaiement',
    category: 'Reprise en sous-œuvre',
    location: 'Paris',
    image: '/images/reprise-sous-oeuvre-etaiement.jpg',
    description: 'Structure d\'étaiement temporaire pour reprise en sous-œuvre d\'un bâtiment. Sécurisation complète du chantier.',
  },
  {
    id: 4,
    title: 'Arche en pierre - Ceinturement',
    category: 'Confortement de carrières',
    location: 'Paris',
    image: '/images/arche-pierre-ceinturement-carriere.jpg',
    description: 'Ceinturement d\'anciens puits par arche maçonnée en pierre. Consolidation pérenne des structures souterraines.',
  },
  {
    id: 5,
    title: 'Puits blindé circulaire',
    category: 'Puits blindés',
    location: 'Paris',
    image: '/images/hero-puits-blinde-paris.jpg',
    description: 'Réalisation d\'un puits blindé pour accès sécurisé aux galeries souterraines. Structure circulaire en bois.',
  },
  {
    id: 6,
    title: 'Passerelle d\'accès en galerie',
    category: 'Travaux souterrains',
    location: 'Île-de-France',
    image: '/images/passerelle-acces-galerie-souterraine.jpg',
    description: 'Installation de passerelle métallique sécurisée pour accès aux zones de travaux en carrière.',
  },
  {
    id: 7,
    title: 'Consolidation par arche maçonnée',
    category: 'Confortement de carrières',
    location: 'Paris',
    image: '/images/consolidation-carriere-arche-maconnee.jpg',
    description: 'Arche en pierre maçonnée pour consolidation de galerie souterraine. Travaux de haute précision.',
  },
  {
    id: 8,
    title: 'Mur de soutènement en carrière',
    category: 'Confortement de carrières',
    location: 'Île-de-France',
    image: '/images/mur-soutenement-carriere-idf.jpg',
    description: 'Mur de soutènement maçonné pour stabilisation du ciel de carrière. Technique traditionnelle.',
  },
  {
    id: 9,
    title: 'Voûte en pierre - Confortement',
    category: 'Confortement de carrières',
    location: 'Paris',
    image: '/images/voute-pierre-confortement-paris.jpg',
    description: 'Voûte maçonnée en pierre pour confortement de carrière ancienne. Savoir-faire artisanal.',
  },
  {
    id: 10,
    title: 'Entrée de galerie sécurisée',
    category: 'Confortement de carrières',
    location: 'Île-de-France',
    image: '/images/entree-galerie-souterraine-securisee.jpg',
    description: 'Sécurisation d\'entrée de galerie souterraine par arche maçonnée. Consolidation complète.',
  },
  {
    id: 11,
    title: 'Galerie de carrière consolidée',
    category: 'Confortement de carrières',
    location: 'Île-de-France',
    image: '/images/galerie-carriere-consolidee-ile-de-france.jpg',
    description: 'Galerie souterraine entièrement consolidée. Murs maçonnés et soutènement du ciel de carrière.',
  },
]

export default function Realisations() {
  return (
    <main className="pt-20">
      <section className="bg-primary py-16 grain-texture">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h1 className="font-display text-5xl md:text-7xl font-black text-light mb-6 uppercase">
            Nos <span className="text-accent">Réalisations</span>
          </h1>
          <p className="text-xl text-text-muted max-w-3xl leading-relaxed">
            Découvrez nos projets de travaux souterrains réalisés à Paris et en Île-de-France. Plus de 30 ans d'expertise au service de vos projets.
          </p>
        </div>
      </section>

      <section className="py-24 bg-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {realisations.map((realisation) => (
              <div
                key={realisation.id}
                className="group bg-surface overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={realisation.image}
                    alt={realisation.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent"></div>
                  
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 bg-accent text-light text-xs font-bold uppercase tracking-wider">
                      {realisation.category}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 text-light text-sm mb-2">
                      <MapPin size={16} className="text-accent" />
                      <span>{realisation.location}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-light mb-3 uppercase tracking-tight">
                    {realisation.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed mb-4">
                    {realisation.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-surface grain-texture">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-5xl font-black text-light mb-6 uppercase">
            Un projet similaire ?
          </h2>
          <p className="text-text-muted text-lg mb-8">
            Contactez-nous pour discuter de votre projet de travaux souterrains
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0680584952"
              className="inline-flex items-center justify-center gap-3 bg-accent text-light px-8 py-4 font-bold uppercase tracking-wide hover:bg-accent/90 transition-colors"
              style={{ borderRadius: '2px' }}
            >
              06.80.58.49.52
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-transparent border-2 border-light text-light px-8 py-4 font-bold uppercase tracking-wide hover:bg-light hover:text-primary transition-colors"
              style={{ borderRadius: '2px' }}
            >
              Demander un devis
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
