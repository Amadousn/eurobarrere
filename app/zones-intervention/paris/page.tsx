import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Travaux Souterrains Paris (75) | Eurobarrere Fondations',
  description: 'Spécialiste travaux souterrains à Paris : reprise en sous-œuvre, confortement de carrières, puits blindés. Intervention rapide dans tout Paris. Devis gratuit.',
  openGraph: {
    title: 'Travaux Souterrains Paris | Eurobarrere Fondations',
    description: 'Expert en travaux souterrains à Paris. Reprise en sous-œuvre, confortement de carrières, puits blindés.',
    url: 'https://www.eurobarrerefondations.com/zones-intervention/paris',
    siteName: 'Eurobarrere Fondations',
    locale: 'fr_FR',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.eurobarrerefondations.com/zones-intervention/paris',
  },
}

export default function ZoneParis() {
  return (
    <main className="pt-20">
      <section className="bg-primary py-16 grain-texture">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6 text-accent">
            <MapPin size={24} />
            <span className="font-bold uppercase tracking-wide">Zone d'intervention</span>
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl font-black text-light mb-6 uppercase">
            Travaux Souterrains à <span className="text-accent">Paris</span>
          </h1>
          
          <p className="text-xl text-text-muted leading-relaxed">
            Eurobarrere Fondations intervient dans tout Paris (75) pour vos projets de reprise en sous-œuvre, confortement de carrières et travaux souterrains spéciaux.
          </p>
        </div>
      </section>

      <section className="py-16 bg-light text-primary">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-5xl font-black mb-8 uppercase">
            Expert travaux souterrains à Paris
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-6">
              Paris présente un sous-sol particulièrement complexe avec de nombreuses anciennes carrières souterraines, notamment dans les 5e, 6e, 13e, 14e, 15e et 16e arrondissements. Ces cavités nécessitent une expertise spécifique pour garantir la sécurité des constructions en surface.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              Eurobarrere Fondations intervient depuis plus de 30 ans à Paris pour tous vos projets de travaux souterrains : reprise en sous-œuvre d'immeubles anciens, confortement de carrières, réalisation de puits blindés et sondages géotechniques.
            </p>

            <h3 className="font-display text-2xl font-bold mt-12 mb-6 uppercase">
              Nos prestations à Paris
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <Link href="/prestations/reprise-en-sous-oeuvre" className="p-6 bg-surface border-l-4 border-accent hover:bg-primary transition-colors group">
                <h4 className="font-display text-xl font-bold text-light mb-2 uppercase">Reprise en sous-œuvre</h4>
                <p className="text-text-muted">Consolidation des fondations d'immeubles parisiens</p>
              </Link>

              <Link href="/prestations/confortement-carrieres" className="p-6 bg-surface border-l-4 border-accent hover:bg-primary transition-colors group">
                <h4 className="font-display text-xl font-bold text-light mb-2 uppercase">Confortement de carrières</h4>
                <p className="text-text-muted">Sécurisation des anciennes carrières parisiennes</p>
              </Link>

              <Link href="/prestations/puits-blindes" className="p-6 bg-surface border-l-4 border-accent hover:bg-primary transition-colors group">
                <h4 className="font-display text-xl font-bold text-light mb-2 uppercase">Puits blindés</h4>
                <p className="text-text-muted">Accès sécurisés aux galeries souterraines</p>
              </Link>

              <Link href="/prestations/sondages" className="p-6 bg-surface border-l-4 border-accent hover:bg-primary transition-colors group">
                <h4 className="font-display text-xl font-bold text-light mb-2 uppercase">Sondages</h4>
                <p className="text-text-muted">Étude de sol avant construction à Paris</p>
              </Link>
            </div>

            <h3 className="font-display text-2xl font-bold mt-12 mb-6 uppercase">
              Arrondissements couverts
            </h3>

            <p className="text-lg leading-relaxed mb-6">
              Nous intervenons dans tous les arrondissements de Paris, avec une expertise particulière dans les zones à risque de carrières souterraines : 5e, 6e, 12e, 13e, 14e, 15e et 16e arrondissements.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-surface grain-texture">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-5xl font-black text-light mb-6 uppercase">
            Projet à Paris ?
          </h2>
          <p className="text-text-muted text-lg mb-8">
            Contactez-nous pour une intervention rapide dans tout Paris
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
  )
}
