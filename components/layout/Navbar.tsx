'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Accueil', href: '/' },
    { label: 'Prestations', href: '/prestations' },
    { label: 'Réalisations', href: '/realisations' },
    { label: 'Contact', href: '/contact' },
    { label: 'À propos', href: '/a-propos' },
  ]

  return (
    <>
      {/* Mobile menu overlay - outside nav to avoid stacking context issues */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-primary z-[60]">
          <div className="flex flex-col items-center justify-center gap-6 sm:gap-8 h-full px-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-light text-xl sm:text-2xl font-display font-bold hover:text-accent transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-accent text-light px-6 sm:px-8 py-3 sm:py-4 font-bold uppercase tracking-wide text-lg sm:text-xl"
              style={{ borderRadius: '2px' }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Devis gratuit
            </Link>
          </div>

          {/* Close button inside the overlay */}
          <button
            className="absolute top-4 right-4 text-light p-2"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Fermer le menu"
            type="button"
          >
            <X size={28} />
          </button>
        </div>
      )}

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-primary/95 backdrop-blur-xl shadow-2xl'
            : 'bg-primary/80 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <Link href="/" className="flex items-center gap-2 sm:gap-3 flex-shrink min-w-0">
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0">
                <Image
                  src="/icon-ef.svg"
                  alt="EF"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="font-display text-base sm:text-xl md:text-2xl font-bold text-light tracking-tight whitespace-nowrap overflow-hidden text-ellipsis">
                <span className="hidden xs:inline">EUROBARRERE</span>
                <span className="xs:hidden">EB</span>
                <span className="text-accent ml-1 sm:ml-2 hidden xs:inline">FONDATIONS</span>
                <span className="text-accent ml-1 xs:hidden">F</span>
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-light hover:text-accent transition-colors duration-200 font-medium"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="bg-accent text-light px-6 py-3 font-bold uppercase tracking-wide hover:bg-accent/90 transition-colors duration-200"
                style={{ borderRadius: '2px' }}
              >
                Devis gratuit
              </Link>
            </div>

            <button
              className="md:hidden text-light p-2 flex-shrink-0"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Ouvrir le menu"
              type="button"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>
    </>
  )
}
