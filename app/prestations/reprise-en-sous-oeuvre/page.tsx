import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, CheckCircle2, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Reprise en Sous-Œuvre Paris Île-de-France | Eurobarrere Fondations',
  description: 'Spécialiste reprise en sous-œuvre à Paris et en Île-de-France. Reprise et correction de structures défaillantes sous immeubles et maisons individuelles. Devis gratuit.',
  openGraph: {
    title: 'Reprise en Sous-Œuvre Paris Île-de-France | Eurobarrere Fondations',
    description: 'Expert en reprise en sous-œuvre pour immeubles, bâtiments industriels et maisons individuelles en Île-de-France.',
    url: 'https://www.eurobarrerefondations.com/prestations/reprise-en-sous-oeuvre',
    siteName: 'Eurobarrere Fondations',
    locale: 'fr_FR',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.eurobarrerefondations.com/prestations/reprise-en-sous-oeuvre',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Reprise en Sous-Œuvre',
  description: 'Reprise et correction de structures défaillantes sous immeubles, bâtiments industriels et maisons individuelles. Accès aux sous-sols, changement de canalisations, reprise des fondations insuffisantes.',
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

export default function RepriseEnSousOeuvre() {
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
              Reprise en <span className="text-accent">Sous-Œuvre</span>
            </h1>
            
            <p className="text-xl text-text-muted leading-relaxed">
              Spécialiste de la reprise en sous-œuvre à Paris et en Île-de-France pour immeubles, bâtiments industriels et maisons individuelles.
            </p>
          </div>
        </section>

        <section className="py-16 bg-light text-primary">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="font-display text-3xl md:text-5xl font-black mb-8 uppercase">
              Qu'est-ce que la reprise en sous-œuvre ?
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                La reprise en sous-œuvre est une technique de renforcement et de correction des structures défaillantes situées sous les bâtiments existants. Cette intervention délicate permet de stabiliser et consolider les fondations d'immeubles, de bâtiments industriels ou de maisons individuelles sans compromettre la structure en place.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Chez Eurobarrere Fondations, nous intervenons sur tous types de projets nécessitant une reprise en sous-œuvre : fondations insuffisantes ou inexistantes, accès aux sous-sols, changement de canalisations, ou correction de désordres structurels.
              </p>

              <h3 className="font-display text-2xl font-bold mt-12 mb-6 uppercase">
                Nos interventions en reprise en sous-œuvre
              </h3>

              <ul className="space-y-4 mb-8">
                {[
                  'Reprise de fondations insuffisantes ou inexistantes',
                  'Création d\'accès aux sous-sols',
                  'Changement et rénovation de canalisations enterrées',
                  'Correction de désordres structurels (fissures, affaissements)',
                  'Renforcement de structures sous immeubles anciens',
                  'Adaptation des fondations pour surélévation',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 size={24} className="text-accent flex-shrink-0 mt-1" />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="font-display text-2xl font-bold mt-12 mb-6 uppercase">
                Pourquoi faire appel à Eurobarrere Fondations ?
              </h3>

              <p className="text-lg leading-relaxed mb-6">
                La reprise en sous-œuvre est une opération technique complexe qui nécessite une expertise pointue et un savoir-faire éprouvé. Nos équipes spécialisées maîtrisent l'ensemble des techniques de reprise en sous-œuvre et interviennent avec le matériel adapté pour garantir la sécurité et la pérennité de votre bâtiment.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Nous réalisons une étude préalable approfondie de votre projet afin de déterminer la solution technique la plus adaptée à votre situation. Chaque chantier est unique et mérite une approche personnalisée.
              </p>

              <div className="bg-surface p-8 border-l-4 border-accent mt-12">
                <h3 className="font-display text-2xl font-bold text-light mb-4 uppercase">
                  Zone d'intervention
                </h3>
                <p className="text-light mb-4">
                  Nous intervenons sur l'ensemble de l'Île-de-France : Paris (75), Hauts-de-Seine (92), Seine-Saint-Denis (93), Val-de-Marne (94), Seine-et-Marne (77), Yvelines (78), Essonne (91) et Val-d'Oise (95).
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-surface grain-texture">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl md:text-5xl font-black text-light mb-6 uppercase">
              Besoin d'une reprise en sous-œuvre ?
            </h2>
            <p className="text-text-muted text-lg mb-8">
              Contactez-nous pour un devis gratuit et personnalisé sous 48h
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
