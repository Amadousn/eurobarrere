import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, CheckCircle2, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Confortement de Carrières Paris Île-de-France | Eurobarrere Fondations',
  description: 'Spécialiste confortement de carrières à Paris et en Île-de-France. Soutènement du ciel de carrière, ceinturement des puits et fontis. Expertise reconnue.',
  openGraph: {
    title: 'Confortement de Carrières Paris | Eurobarrere Fondations',
    description: 'Expert en confortement de carrières souterraines. Sécurisation des cavités et consolidation en Île-de-France.',
    url: 'https://www.eurobarrerefondations.com/prestations/confortement-carrieres',
    siteName: 'Eurobarrere Fondations',
    locale: 'fr_FR',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.eurobarrerefondations.com/prestations/confortement-carrieres',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Confortement de Carrières',
  description: 'Soutènement du ciel de carrière par piliers maçonnés. Ceinturement des anciens puits et fontis. Sécurisation des cavités souterraines en Île-de-France.',
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

export default function ConfortementCarrieres() {
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
              Confortement de <span className="text-accent">Carrières</span>
            </h1>
            
            <p className="text-xl text-text-muted leading-relaxed">
              Expert en confortement de carrières souterraines à Paris et en Île-de-France. Sécurisation des cavités et consolidation des anciennes carrières.
            </p>
          </div>
        </section>

        <section className="py-16 bg-light text-primary">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="font-display text-3xl md:text-5xl font-black mb-8 uppercase">
              Le confortement de carrières en Île-de-France
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                L'Île-de-France, et particulièrement Paris, repose sur un sous-sol riche en anciennes carrières souterraines. Ces cavités, exploitées pendant des siècles pour extraire la pierre à bâtir, le calcaire et le gypse, représentent aujourd'hui un risque potentiel pour les constructions en surface.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Le confortement de carrières est une opération essentielle pour garantir la stabilité et la sécurité des bâtiments situés au-dessus de ces vides souterrains. Eurobarrere Fondations intervient pour sécuriser ces cavités par des techniques éprouvées de soutènement et de consolidation.
              </p>

              <h3 className="font-display text-2xl font-bold mt-12 mb-6 uppercase">
                Nos interventions en confortement de carrières
              </h3>

              <ul className="space-y-4 mb-8">
                {[
                  'Soutènement du ciel de carrière par piliers maçonnés',
                  'Ceinturement des anciens puits et fontis',
                  'Consolidation des galeries souterraines',
                  'Comblement de cavités dangereuses',
                  'Inspection et diagnostic des carrières',
                  'Mise en sécurité préventive avant construction',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 size={24} className="text-accent flex-shrink-0 mt-1" />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="font-display text-2xl font-bold mt-12 mb-6 uppercase">
                Pourquoi le confortement est-il nécessaire ?
              </h3>

              <p className="text-lg leading-relaxed mb-6">
                Les carrières souterraines non consolidées présentent plusieurs risques majeurs : affaissement du terrain, effondrement localisé (fontis), fissuration des bâtiments en surface, et dans les cas les plus graves, effondrement de structures entières.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Le confortement préventif permet d'éviter ces désordres en renforçant le ciel de carrière et en assurant la pérennité des constructions. C'est une étape indispensable avant toute construction ou rénovation importante dans les zones concernées.
              </p>

              <h3 className="font-display text-2xl font-bold mt-12 mb-6 uppercase">
                Notre expertise reconnue
              </h3>

              <p className="text-lg leading-relaxed mb-6">
                Avec plus de 30 ans d'expérience dans les travaux souterrains, Eurobarrere Fondations maîtrise l'ensemble des techniques de confortement de carrières. Nos équipes spécialisées interviennent avec le matériel adapté et dans le respect strict des normes de sécurité.
              </p>

              <div className="bg-surface p-8 border-l-4 border-accent mt-12">
                <h3 className="font-display text-2xl font-bold text-light mb-4 uppercase">
                  Zones à risque en Île-de-France
                </h3>
                <p className="text-light mb-4">
                  Les anciennes carrières sont particulièrement présentes à Paris (14e, 5e, 6e arrondissements), dans les Hauts-de-Seine, le Val-de-Marne et certaines communes de Seine-et-Marne. Nous intervenons sur l'ensemble de ces zones sensibles.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-surface grain-texture">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl md:text-5xl font-black text-light mb-6 uppercase">
              Projet de confortement de carrières ?
            </h2>
            <p className="text-text-muted text-lg mb-8">
              Contactez nos experts pour une étude personnalisée et un devis gratuit
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
