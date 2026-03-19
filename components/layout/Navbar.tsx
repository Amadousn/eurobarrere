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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-primary/95 backdrop-blur-xl shadow-2xl'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-12 h-12 flex-shrink-0">
              <Image
                src="/icon-ef.svg"
                alt="EF"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="font-display text-xl md:text-2xl font-bold text-light tracking-tight">
              EUROBARRERE
              <span className="text-accent ml-2">FONDATIONS</span>
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
            className="md:hidden text-light"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-20 bg-surface z-40">
          <div className="flex flex-col items-center gap-8 pt-12">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-light text-2xl font-display font-bold hover:text-accent transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-accent text-light px-8 py-4 font-bold uppercase tracking-wide text-xl"
              style={{ borderRadius: '2px' }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Devis gratuit
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
