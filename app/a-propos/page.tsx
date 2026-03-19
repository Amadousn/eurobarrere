import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Users, Award, Clock, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'À Propos | Eurobarrere Fondations - Expert Travaux Souterrains',
  description: 'Eurobarrere Fondations, spécialiste des travaux souterrains depuis plus de 30 ans. Expertise inégalée en fondations spéciales, reprise en sous-œuvre et confortement de carrières.',
  openGraph: {
    title: 'À Propos | Eurobarrere Fondations',
    description: 'Plus de 30 ans d\'expertise en travaux souterrains à Paris et en Île-de-France.',
    url: 'https://www.eurobarrerefondations.com/a-propos',
    siteName: 'Eurobarrere Fondations',
    locale: 'fr_FR',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.eurobarrerefondations.com/a-propos',
  },
}

export default function APropos() {
  return (
    <main className="pt-20">
      <section className="bg-primary py-16 grain-texture">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h1 className="font-display text-5xl md:text-7xl font-black text-light mb-6 uppercase">
            À Propos <span className="text-accent">d'Eurobarrere</span>
          </h1>
          <p className="text-xl text-text-muted leading-relaxed">
            Votre partenaire privilégié pour vos travaux souterrains à Paris et en Île-de-France depuis plus de 30 ans.
          </p>
        </div>
      </section>

      <section className="py-16 bg-light text-primary">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-display text-3xl md:text-5xl font-black mb-8 uppercase">
              Notre expertise
            </h2>
            
            <p className="text-lg leading-relaxed mb-6">
              Eurobarrere Fondations est une entreprise spécialisée dans les travaux souterrains complexes. Nous intervenons à la demande de particuliers ou de professionnels du bâtiment et de l'immobilier (maîtres d'ouvrage, architectes, promoteurs, bureaux d'études) pour tous vos projets nécessitant une expertise pointue en fondations spéciales.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              Notre positionnement : spécialiste des confortements de carrières, puits blindés et reprise en sous-œuvre à Paris et en Île-de-France. Nous possédons une expertise inégalée sur les projets souterrains complexes, notamment dans les zones à risque de carrières anciennes.
            </p>

            <h3 className="font-display text-2xl font-bold mt-12 mb-6 uppercase">
              Nos valeurs
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="p-6 bg-surface border-l-4 border-accent">
                <h4 className="font-display text-xl font-bold text-light mb-3 uppercase">Qualité</h4>
                <p className="text-text-muted">
                  Nous garantissons la qualité de nos interventions grâce à notre savoir-faire éprouvé et nos équipes qualifiées.
                </p>
              </div>

              <div className="p-6 bg-surface border-l-4 border-accent">
                <h4 className="font-display text-xl font-bold text-light mb-3 uppercase">Sécurité</h4>
                <p className="text-text-muted">
                  La sécurité est notre priorité absolue sur tous nos chantiers. Respect strict des normes en vigueur.
                </p>
              </div>

              <div className="p-6 bg-surface border-l-4 border-accent">
                <h4 className="font-display text-xl font-bold text-light mb-3 uppercase">Efficacité</h4>
                <p className="text-text-muted">
                  Nous optimisons chaque intervention pour garantir des délais maîtrisés et une exécution sans faille.
                </p>
              </div>

              <div className="p-6 bg-surface border-l-4 border-accent">
                <h4 className="font-display text-xl font-bold text-light mb-3 uppercase">Intégrité</h4>
                <p className="text-text-muted">
                  Transparence et honnêteté dans toutes nos relations avec nos clients et partenaires.
                </p>
              </div>
            </div>

            <h3 className="font-display text-2xl font-bold mt-12 mb-6 uppercase">
              Nos domaines d'intervention
            </h3>

            <ul className="space-y-4 mb-12">
              {[
                'Reprise en sous-œuvre d\'immeubles, bâtiments industriels et maisons individuelles',
                'Confortement de carrières souterraines par piliers maçonnés',
                'Réalisation de puits blindés pour accès aux galeries',
                'Sondages géotechniques et études de sol',
                'Consolidation de structures défaillantes',
                'Sécurisation de cavités souterraines',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 size={24} className="text-accent flex-shrink-0 mt-1" />
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="font-display text-2xl font-bold mt-12 mb-6 uppercase">
              Zone d'intervention
            </h3>

            <p className="text-lg leading-relaxed mb-6">
              Nous intervenons sur l'ensemble de l'Île-de-France : Paris (75), Hauts-de-Seine (92), Seine-Saint-Denis (93), Val-de-Marne (94), Seine-et-Marne (77), Yvelines (78), Essonne (91) et Val-d'Oise (95).
            </p>

            <p className="text-lg leading-relaxed mb-6">
              Notre connaissance approfondie du sous-sol francilien, notamment des zones à risque de carrières anciennes, nous permet d'intervenir efficacement sur tous types de projets.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-surface grain-texture">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 mb-4">
                <Clock size={32} className="text-accent" />
              </div>
              <div className="font-display text-5xl font-black text-accent mb-2">30+</div>
              <div className="text-text-muted uppercase tracking-wide text-sm font-bold">Ans d'expérience</div>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 mb-4">
                <Users size={32} className="text-accent" />
              </div>
              <div className="font-display text-5xl font-black text-accent mb-2">500+</div>
              <div className="text-text-muted uppercase tracking-wide text-sm font-bold">Projets réalisés</div>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 mb-4">
                <Award size={32} className="text-accent" />
              </div>
              <div className="font-display text-5xl font-black text-accent mb-2">100%</div>
              <div className="text-text-muted uppercase tracking-wide text-sm font-bold">Clients satisfaits</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary grain-texture">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-5xl font-black text-light mb-6 uppercase">
            Un projet en cours ?
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
