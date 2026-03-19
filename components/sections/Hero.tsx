import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/galerie-carriere-consolidee-ile-de-france.jpg"
          alt="Travaux souterrains et confortement de carrières - Eurobarrere Fondations"
          fill
          className="object-cover"
          priority
          quality={90}
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

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="relative animate-bounce">
          <svg 
            width="64" 
            height="64" 
            viewBox="0 0 64 64" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="text-accent drop-shadow-lg"
          >
            {/* Poignée supérieure */}
            <rect x="26" y="8" width="12" height="4" fill="currentColor" rx="2"/>
            
            {/* Corps principal de la foreuse */}
            <rect x="24" y="12" width="16" height="20" fill="currentColor" rx="2"/>
            <rect x="22" y="16" width="20" height="12" fill="currentColor" opacity="0.8" rx="1"/>
            
            {/* Poignées latérales */}
            <path d="M20 18 L16 20 L16 26 L20 28" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none"/>
            <path d="M44 18 L48 20 L48 26 L44 28" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none"/>
            
            {/* Détails moteur */}
            <circle cx="32" cy="22" r="3" fill="#1C1C1C"/>
            <rect x="28" y="26" width="8" height="2" fill="#1C1C1C" opacity="0.6"/>
            
            {/* Mandrin */}
            <rect x="28" y="32" width="8" height="6" fill="currentColor" rx="1"/>
            <circle cx="32" cy="35" r="2" fill="#1C1C1C"/>
            
            {/* Mèche de forage (spirale) */}
            <path d="M30 38 L30 52 M34 38 L34 52" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
            <path d="M30 40 Q32 42 30 44 Q28 46 30 48 Q32 50 30 52" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            <path d="M34 40 Q32 42 34 44 Q36 46 34 48 Q32 50 34 52" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            
            {/* Pointe de forage */}
            <path d="M28 52 L32 56 L36 52" fill="currentColor"/>
          </svg>
          
          {/* Effet de vibration/poussière */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-2 bg-accent/40 blur-md animate-pulse" />
        </div>
      </div>
    </section>
  )
}
