import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, CheckCircle2, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Sondages Terrain Paris Île-de-France | Eurobarrere Fondations',
  description: 'Spécialiste sondages et étude de sol à Paris et en Île-de-France. Détermination des caractéristiques du terrain avant construction. Étape préalable obligatoire.',
  openGraph: {
    title: 'Sondages Terrain Paris | Eurobarrere Fondations',
    description: 'Expert en sondages et étude de sol avant construction en Île-de-France. Analyse complète du terrain.',
    url: 'https://www.eurobarrerefondations.com/prestations/sondages',
    siteName: 'Eurobarrere Fondations',
    locale: 'fr_FR',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.eurobarrerefondations.com/prestations/sondages',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Sondages',
  description: 'Détermination des caractéristiques d\'un terrain avant construction (immeuble ou maison individuelle). Étape préalable obligatoire pour tout projet de construction.',
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

export default function Sondages() {
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
              Sondages <span className="text-accent">Terrain</span>
            </h1>
            
            <p className="text-xl text-text-muted leading-relaxed">
              Spécialiste des sondages et études de sol à Paris et en Île-de-France pour déterminer les caractéristiques de votre terrain avant construction.
            </p>
          </div>
        </section>

        <section className="py-16 bg-light text-primary">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="font-display text-3xl md:text-5xl font-black mb-8 uppercase">
              Pourquoi réaliser un sondage de terrain ?
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                Le sondage de terrain est une étape préalable obligatoire avant toute construction d'immeuble ou de maison individuelle. Cette analyse approfondie permet de déterminer les caractéristiques géotechniques du sol, d'identifier les risques potentiels (carrières souterraines, zones instables, nappes phréatiques) et de dimensionner correctement les fondations.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                En Île-de-France, où le sous-sol peut présenter des particularités importantes (anciennes carrières, gypse, calcaire), le sondage est d'autant plus crucial pour garantir la pérennité et la sécurité de votre projet de construction.
              </p>

              <h3 className="font-display text-2xl font-bold mt-12 mb-6 uppercase">
                Nos prestations de sondages
              </h3>

              <ul className="space-y-4 mb-8">
                {[
                  'Sondages géotechniques avant construction',
                  'Étude de sol pour maisons individuelles',
                  'Sondages pour immeubles et bâtiments industriels',
                  'Détection de carrières souterraines',
                  'Analyse de la portance du sol',
                  'Recommandations pour le type de fondations adaptées',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 size={24} className="text-accent flex-shrink-0 mt-1" />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="font-display text-2xl font-bold mt-12 mb-6 uppercase">
                Que révèle un sondage de terrain ?
              </h3>

              <p className="text-lg leading-relaxed mb-6">
                Un sondage de terrain complet permet d'obtenir des informations essentielles sur la nature du sol, sa composition, sa résistance, la présence éventuelle d'eau souterraine, et l'existence de cavités ou d'anciennes carrières. Ces données sont indispensables pour :
              </p>

              <ul className="space-y-3 mb-6 ml-6">
                <li className="text-lg">• Dimensionner correctement les fondations</li>
                <li className="text-lg">• Choisir le type de fondations adapté (superficielles, profondes, sur pieux)</li>
                <li className="text-lg">• Anticiper les risques de tassement ou d'affaissement</li>
                <li className="text-lg">• Identifier les zones nécessitant un confortement préalable</li>
                <li className="text-lg">• Optimiser les coûts de construction</li>
              </ul>

              <h3 className="font-display text-2xl font-bold mt-12 mb-6 uppercase">
                Déroulement d'un sondage
              </h3>

              <p className="text-lg leading-relaxed mb-6">
                Nos équipes réalisent les sondages à l'aide de matériel professionnel adapté. Selon la nature du projet, nous effectuons des sondages à la tarière, des sondages carottés, ou des sondages pressiométriques. Chaque intervention est suivie d'un rapport détaillé avec recommandations techniques.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Le rapport de sondage est un document technique précieux qui accompagne votre projet tout au long de sa réalisation et peut être exigé par les assurances ou les organismes de contrôle.
              </p>

              <div className="bg-surface p-8 border-l-4 border-accent mt-12">
                <h3 className="font-display text-2xl font-bold text-light mb-4 uppercase">
                  Obligation légale
                </h3>
                <p className="text-light mb-4">
                  Depuis 2020, l'étude de sol est obligatoire pour toute vente de terrain constructible dans les zones exposées au phénomène de retrait-gonflement des argiles. En Île-de-France, de nombreuses communes sont concernées par cette obligation.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-surface grain-texture">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl md:text-5xl font-black text-light mb-6 uppercase">
              Besoin d'un sondage de terrain ?
            </h2>
            <p className="text-text-muted text-lg mb-8">
              Contactez-nous pour planifier votre étude de sol et obtenir un devis
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
