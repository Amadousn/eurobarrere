import type { Metadata } from 'next'
import Link from 'next/link'
import { Hammer, Mountain, Drill, Search, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Nos Prestations | Eurobarrere Fondations - Travaux Souterrains Paris',
  description: 'Découvrez nos prestations : reprise en sous-œuvre, confortement de carrières, puits blindés et sondages. Expert travaux souterrains à Paris et en Île-de-France.',
  openGraph: {
    title: 'Nos Prestations | Eurobarrere Fondations',
    description: 'Spécialiste travaux souterrains : reprise en sous-œuvre, confortement de carrières, puits blindés, sondages.',
    url: 'https://www.eurobarrerefondations.com/prestations',
    siteName: 'Eurobarrere Fondations',
    locale: 'fr_FR',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.eurobarrerefondations.com/prestations',
  },
}

const prestations = [
  {
    number: '01',
    title: 'Reprise en sous-œuvre',
    description: 'Reprise et correction de structures défaillantes sous immeubles, bâtiments industriels et maisons individuelles. Accès aux sous-sols, changement de canalisations, reprise des fondations insuffisantes ou inexistantes.',
    icon: Hammer,
    href: '/prestations/reprise-en-sous-oeuvre',
    keywords: ['fondations insuffisantes', 'accès sous-sols', 'correction structures'],
  },
  {
    number: '02',
    title: 'Confortement de carrières',
    description: 'Soutènement du ciel de carrière par piliers maçonnés. Ceinturement des anciens puits et fontis. Sécurisation des cavités souterraines en Île-de-France.',
    icon: Mountain,
    href: '/prestations/confortement-carrieres',
    keywords: ['carrières souterraines', 'fontis', 'consolidation'],
  },
  {
    number: '03',
    title: 'Puits blindés',
    description: 'Sécurisation des accès aux galeries souterraines. Réalisation de puits blindés pour travaux en profondeur et inspections techniques.',
    icon: Drill,
    href: '/prestations/puits-blindes',
    keywords: ['accès galeries', 'travaux profondeur', 'sécurisation'],
  },
  {
    number: '04',
    title: 'Sondages',
    description: 'Détermination des caractéristiques d\'un terrain avant construction (immeuble ou maison individuelle). Étape préalable obligatoire pour garantir la pérennité de votre projet.',
    icon: Search,
    href: '/prestations/sondages',
    keywords: ['étude de sol', 'analyse terrain', 'avant construction'],
  },
]

export default function Prestations() {
  return (
    <main className="pt-20">
      <section className="bg-primary py-16 grain-texture">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h1 className="font-display text-5xl md:text-7xl font-black text-light mb-6 uppercase">
            Nos <span className="text-accent">Prestations</span>
          </h1>
          <p className="text-xl text-text-muted max-w-3xl leading-relaxed">
            Eurobarrere Fondations intervient à la demande de particuliers ou de professionnels du bâtiment pour tous vos projets de travaux souterrains à Paris et en Île-de-France.
          </p>
        </div>
      </section>

      <section className="py-24 bg-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {prestations.map((prestation) => {
              const Icon = prestation.icon
              return (
                <Link
                  key={prestation.number}
                  href={prestation.href}
                  className="group relative bg-surface p-10 border-l-4 border-accent hover:bg-primary transition-all duration-300 hover:shadow-2xl"
                >
                  <div className="absolute top-6 right-6 text-[140px] font-display font-black text-light/5 leading-none pointer-events-none">
                    {prestation.number}
                  </div>

                  <div className="relative z-10">
                    <div className="mb-6 inline-block p-4 bg-accent/10">
                      <Icon size={40} className="text-accent" strokeWidth={2} />
                    </div>

                    <h2 className="font-display text-3xl font-bold text-light mb-4 uppercase tracking-tight">
                      {prestation.title}
                    </h2>

                    <p className="text-text-muted leading-relaxed mb-6 text-lg">
                      {prestation.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {prestation.keywords.map((keyword, index) => (
                        <span
                          key={index}
                          className="text-xs uppercase tracking-wider px-3 py-1 bg-accent/20 text-accent font-bold"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>

                    <span className="text-accent font-bold uppercase text-sm tracking-wide group-hover:gap-3 inline-flex items-center gap-2 transition-all duration-200">
                      En savoir plus
                      <ArrowRight className="group-hover:translate-x-1 transition-transform duration-200" size={18} />
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-surface grain-texture">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-5xl font-black text-light mb-6 uppercase">
            Votre partenaire privilégié pour vos travaux souterrains
          </h2>
          <p className="text-text-muted text-lg mb-8 leading-relaxed">
            Expertise inégalée dans la réalisation de projets souterrains complexes. Qualité, sécurité et efficacité au cœur de tout ce que nous faisons.
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
