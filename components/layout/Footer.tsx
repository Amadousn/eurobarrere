import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Phone, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#111] text-light pt-12 sm:pt-16 pb-6 sm:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-12">
          <div>
            <div className="flex items-center gap-2 sm:gap-3 mb-4">
              <div className="relative w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0">
                <Image
                  src="/icon-ef.svg"
                  alt="EF"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="font-display text-lg sm:text-xl font-bold text-accent">
                EUROBARRERE FONDATIONS
              </h3>
            </div>
            <p className="text-text-muted text-sm leading-relaxed">
              Spécialiste des fondations spéciales, reprise en sous-œuvre et travaux souterrains en Île-de-France depuis plus de 30 ans.
            </p>
          </div>

          <div>
            <h4 className="font-display text-base sm:text-lg font-bold mb-3 sm:mb-4 uppercase tracking-wide">
              Services
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/prestations/reprise-en-sous-oeuvre" className="text-text-muted hover:text-accent transition-colors duration-200">
                  Reprise en sous-œuvre
                </Link>
              </li>
              <li>
                <Link href="/prestations/confortement-carrieres" className="text-text-muted hover:text-accent transition-colors duration-200">
                  Confortement de carrières
                </Link>
              </li>
              <li>
                <Link href="/prestations/puits-blindes" className="text-text-muted hover:text-accent transition-colors duration-200">
                  Puits blindés
                </Link>
              </li>
              <li>
                <Link href="/prestations" className="text-text-muted hover:text-accent transition-colors duration-200">
                  Toutes nos prestations
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-base sm:text-lg font-bold mb-3 sm:mb-4 uppercase tracking-wide">
              Informations légales
            </h4>
            <ul className="space-y-2 text-text-muted text-sm">
              <li>SIRET: 918 576 695 00012</li>
              <li>SIREN: 918 576 695</li>
              <li>TVA: FR61918576695</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-base sm:text-lg font-bold mb-3 sm:mb-4 uppercase tracking-wide">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-text-muted text-sm">
                <MapPin size={18} className="text-accent mt-1 flex-shrink-0" />
                <span>Paris & Île-de-France<br />75, 77, 78, 91, 92, 93, 94, 95</span>
              </li>
              <li className="flex items-center gap-3 text-text-muted text-sm">
                <Phone size={18} className="text-accent flex-shrink-0" />
                <a href="tel:0680584952" className="hover:text-accent transition-colors">06.80.58.49.52</a>
              </li>
              <li className="flex items-center gap-3 text-text-muted text-sm">
                <Phone size={18} className="text-accent flex-shrink-0" />
                <a href="tel:0668777144" className="hover:text-accent transition-colors">06.68.77.71.44</a>
              </li>
              <li className="flex items-center gap-3 text-text-muted text-sm">
                <Mail size={18} className="text-accent flex-shrink-0" />
                <a href="mailto:eurofondations@outlook.fr" className="hover:text-accent transition-colors">eurofondations@outlook.fr</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-steel/20 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 text-text-muted text-xs sm:text-sm">
          <p>&copy; {new Date().getFullYear()} Eurobarrere Fondations. Tous droits réservés.</p>
          <div className="flex gap-4 sm:gap-6">
            <Link href="/mentions-legales" className="hover:text-accent transition-colors duration-200">
              Mentions légales
            </Link>
            <Link href="/politique-confidentialite" className="hover:text-accent transition-colors duration-200">
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
