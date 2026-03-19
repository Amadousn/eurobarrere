import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2000&auto=format&fit=crop"
          alt="Travaux de fondations et construction souterraine professionnelle - Eurobarrere Fondations"
          fill
          className="object-cover"
          priority
          quality={90}
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/85 via-primary/70 to-primary/90"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="inline-block mb-6 px-4 py-2 bg-accent/20 border-l-4 border-accent">
          <span className="text-light text-sm font-bold uppercase tracking-widest">
            30+ ans d'expérience • Paris & Île-de-France
          </span>
        </div>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-light mb-6 leading-none">
          FONDATIONS
          <br />
          <span className="text-accent">SPÉCIALES</span>
        </h1>

        <p className="text-text-muted text-lg md:text-xl max-w-2xl mx-auto mb-12 font-body font-light">
          Expert en reprise en sous-œuvre, confortement de carrières et travaux souterrains en Île-de-France
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/contact"
            className="group bg-accent text-light px-8 py-4 font-bold uppercase tracking-wide flex items-center gap-3 hover:bg-accent/90 transition-all duration-200"
            style={{ borderRadius: '2px' }}
          >
            Demander un devis gratuit
            <ArrowRight className="group-hover:translate-x-1 transition-transform duration-200" size={20} />
          </Link>
          <Link
            href="/prestations"
            className="bg-transparent border-2 border-light text-light px-8 py-4 font-bold uppercase tracking-wide hover:bg-light hover:text-primary transition-all duration-200"
            style={{ borderRadius: '2px' }}
          >
            Nos prestations
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-light/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-light/50 rounded-full" />
        </div>
      </div>
    </section>
  )
}
