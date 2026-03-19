import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, CheckCircle2, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Puits Blindés Paris Île-de-France | Eurobarrere Fondations',
  description: 'Spécialiste puits blindés à Paris et en Île-de-France. Sécurisation des accès aux galeries souterraines pour vos travaux en profondeur. Devis gratuit.',
  openGraph: {
    title: 'Puits Blindés Paris | Eurobarrere Fondations',
    description: 'Expert en réalisation de puits blindés pour accès aux galeries souterraines en Île-de-France.',
    url: 'https://www.eurobarrerefondations.com/prestations/puits-blindes',
    siteName: 'Eurobarrere Fondations',
    locale: 'fr_FR',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.eurobarrerefondations.com/prestations/puits-blindes',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Puits Blindés',
  description: 'Sécurisation des accès aux galeries souterraines. Réalisation de puits blindés pour travaux en profondeur à Paris et en Île-de-France.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Eurobarrere Fondations',
    telephone: '06.80.58.49.52',
    email: 'eurofondations@outlook.fr',
  },
  areaServed: {
    '@type': 'State',
    name: 'Île-de-France',
  },
}

export default function PuitsBlindes() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <main className="pt-20">
        <section className="bg-primary py-16 grain-texture">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <Link href="/prestations" className="inline-flex items-center gap-2 text-accent hover:text-light transition-colors mb-8">
              <ArrowLeft size={20} />
              <span className="font-bold">Retour aux prestations</span>
            </Link>
            
            <h1 className="font-display text-5xl md:text-7xl font-black text-light mb-6 uppercase">
              Puits <span className="text-accent">Blindés</span>
            </h1>
            
            <p className="text-xl text-text-muted leading-relaxed">
              Spécialiste de la réalisation de puits blindés à Paris et en Île-de-France pour sécuriser l'accès aux galeries souterraines.
            </p>
          </div>
        </section>

        <section className="py-16 bg-light text-primary">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="font-display text-3xl md:text-5xl font-black mb-8 uppercase">
              Qu'est-ce qu'un puits blindé ?
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                Un puits blindé est une structure verticale sécurisée permettant l'accès aux galeries souterraines, aux carrières ou aux sous-sols profonds. Cette installation technique est indispensable pour réaliser des travaux souterrains en toute sécurité, notamment dans le cadre de confortement de carrières, d'inspections ou de travaux de consolidation.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Eurobarrere Fondations conçoit et réalise des puits blindés adaptés à chaque configuration de terrain et aux contraintes spécifiques de votre projet. Nos installations respectent les normes de sécurité les plus strictes et garantissent un accès sûr aux zones souterraines.
              </p>

              <h3 className="font-display text-2xl font-bold mt-12 mb-6 uppercase">
                Nos prestations en puits blindés
              </h3>

              <ul className="space-y-4 mb-8">
                {[
                  'Conception et réalisation de puits blindés sur mesure',
                  'Sécurisation des accès aux galeries souterraines',
                  'Installation de systèmes de blindage temporaires ou permanents',
                  'Mise en place d\'équipements de sécurité (échelles, garde-corps)',
                  'Puits d\'accès pour travaux de confortement de carrières',
                  'Puits d\'inspection et de maintenance',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 size={24} className="text-accent flex-shrink-0 mt-1" />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="font-display text-2xl font-bold mt-12 mb-6 uppercase">
                Applications et utilisations
              </h3>

              <p className="text-lg leading-relaxed mb-6">
                Les puits blindés sont essentiels dans de nombreux contextes de travaux souterrains. Ils permettent notamment l'accès sécurisé pour les opérations de confortement de carrières, les inspections techniques, les travaux de consolidation, ou encore l'installation d'équipements souterrains.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Chaque puits blindé est dimensionné en fonction de la profondeur à atteindre, de la nature du terrain, et des équipements à faire descendre. Nos équipes réalisent une étude préalable complète pour garantir la sécurité et l'efficacité de l'installation.
              </p>

              <h3 className="font-display text-2xl font-bold mt-12 mb-6 uppercase">
                Sécurité et conformité
              </h3>

              <p className="text-lg leading-relaxed mb-6">
                La sécurité est notre priorité absolue. Tous nos puits blindés sont conçus et réalisés dans le respect strict des normes en vigueur. Nous utilisons des matériaux de qualité professionnelle et nos installations sont systématiquement contrôlées avant mise en service.
              </p>

              <div className="bg-surface p-8 border-l-4 border-accent mt-12">
                <h3 className="font-display text-2xl font-bold text-light mb-4 uppercase">
                  Expertise technique
                </h3>
                <p className="text-light mb-4">
                  Avec plus de 30 ans d'expérience dans les travaux souterrains, Eurobarrere Fondations maîtrise toutes les techniques de réalisation de puits blindés. Nous intervenons sur l'ensemble de l'Île-de-France avec du matériel professionnel adapté.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-surface grain-texture">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl md:text-5xl font-black text-light mb-6 uppercase">
              Besoin d'un puits blindé ?
            </h2>
            <p className="text-text-muted text-lg mb-8">
              Contactez nos experts pour une étude technique et un devis personnalisé
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0680584952"
                className="inline-flex items-center justify-center gap-3 bg-accent text-light px-8 py-4 font-bold uppercase tracking-wide hover:bg-accent/90 transition-colors"
                style={{ borderRadius: '2px' }}
              >
                <Phone size={20} />
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
    </>
  )
}
