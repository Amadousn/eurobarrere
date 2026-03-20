import Link from 'next/link'
import { Hammer, Mountain, Drill, Search } from 'lucide-react'

const services = [
  {
    number: '01',
    title: 'Reprise en sous-œuvre',
    description: 'Reprise et correction de structures défaillantes sous immeubles, bâtiments industriels et maisons individuelles.',
    icon: Hammer,
    href: '/prestations/reprise-en-sous-oeuvre',
  },
  {
    number: '02',
    title: 'Confortement de carrières',
    description: 'Soutènement du ciel de carrière par piliers maçonnés. Ceinturement des anciens puits et fontis.',
    icon: Mountain,
    href: '/prestations/confortement-carrieres',
  },
  {
    number: '03',
    title: 'Puits blindés',
    description: 'Sécurisation des accès aux galeries souterraines pour vos projets de travaux en profondeur.',
    icon: Drill,
    href: '/prestations/puits-blindes',
  },
  {
    number: '04',
    title: 'Sondages',
    description: 'Détermination des caractéristiques d\'un terrain avant construction. Étape préalable obligatoire.',
    icon: Search,
    href: '/prestations/sondages',
  },
]

export default function Services() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-surface grain-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 sm:mb-12 md:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-6xl font-black text-light mb-3 sm:mb-4 uppercase">
            Nos <span className="text-accent">Prestations</span>
          </h2>
          <p className="text-text-muted text-base sm:text-lg max-w-2xl">
            Des solutions techniques adaptées à tous vos projets de fondations et travaux souterrains
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Link
                key={service.number}
                href={service.href}
                className="group relative bg-primary p-6 sm:p-8 border-l-4 border-accent hover:bg-surface transition-all duration-300 hover:translate-x-2"
              >
                <div className="absolute top-2 right-2 sm:top-4 sm:right-4 text-[80px] sm:text-[120px] font-display font-black text-light/5 leading-none pointer-events-none">
                  {service.number}
                </div>

                <div className="relative z-10">
                  <div className="mb-3 sm:mb-4 inline-block p-2 sm:p-3 bg-accent/10">
                    <Icon size={28} className="sm:w-8 sm:h-8 text-accent" strokeWidth={2} />
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-bold text-light mb-2 sm:mb-3 uppercase tracking-tight">
                    {service.title}
                  </h3>

                  <p className="text-text-muted text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                    {service.description}
                  </p>

                  <span className="text-accent font-bold uppercase text-sm tracking-wide group-hover:gap-2 inline-flex items-center gap-1 transition-all duration-200">
                    En savoir plus
                    <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
