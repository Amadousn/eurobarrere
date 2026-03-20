import { Shield, Award, Users, Clock } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Expertise reconnue',
    description: 'Plus de 30 ans d\'expérience dans les fondations spéciales et travaux souterrains complexes.',
  },
  {
    icon: Award,
    title: 'Certifications',
    description: 'Qualibat, RGE Travaux et ISO 9001 pour garantir la qualité de nos interventions.',
  },
  {
    icon: Users,
    title: 'Équipe qualifiée',
    description: 'Techniciens et ingénieurs spécialisés en géotechnique et fondations profondes.',
  },
  {
    icon: Clock,
    title: 'Réactivité',
    description: 'Devis gratuit sous 48h et intervention rapide sur toute l\'Île-de-France.',
  },
]

export default function About() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-light text-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-6xl font-black mb-4 sm:mb-6 uppercase">
              Pourquoi choisir
              <br />
              <span className="text-accent">Eurobarrere ?</span>
            </h2>
            <p className="text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
              Depuis plus de trois décennies, Eurobarrere Fondations accompagne les maîtres d'ouvrage, architectes et bureaux d'études dans leurs projets les plus exigeants.
            </p>
            <p className="text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
              Notre expertise couvre l'ensemble des techniques de fondations spéciales, de la reprise en sous-œuvre au confortement de carrières, en passant par les micropieux et puits blindés.
            </p>
            <div className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-accent text-light font-bold uppercase tracking-wide text-xs sm:text-sm md:text-base">
              Zone d'intervention : Paris & IDF
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className="bg-surface p-4 sm:p-6 border-l-4 border-accent"
                >
                  <div className="mb-3 sm:mb-4 inline-block p-2 sm:p-3 bg-accent/10">
                    <Icon size={24} className="sm:w-7 sm:h-7 text-accent" strokeWidth={2} />
                  </div>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-light mb-2 uppercase">
                    {feature.title}
                  </h3>
                  <p className="text-text-muted text-xs sm:text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
