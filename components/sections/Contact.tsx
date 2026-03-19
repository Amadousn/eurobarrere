'use client'

import { useState } from 'react'
import { Send, MapPin, Phone, Mail } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section className="py-24 bg-surface grain-texture">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-display text-4xl md:text-6xl font-black text-light mb-6 uppercase">
              Demandez votre
              <br />
              <span className="text-accent">Devis gratuit</span>
            </h2>
            <p className="text-text-muted text-lg mb-12 leading-relaxed">
              Nos experts analysent votre projet et vous proposent une solution technique adaptée sous 48h.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10">
                  <MapPin size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-light mb-1 uppercase">
                    Zone d'intervention
                  </h3>
                  <p className="text-text-muted">
                    Paris et Île-de-France<br />
                    Départements 75, 77, 78, 91, 92, 93, 94, 95
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10">
                  <Phone size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-light mb-1 uppercase">
                    Téléphone
                  </h3>
                  <p className="text-text-muted">
                    <a href="tel:0680584952" className="hover:text-accent transition-colors">06.80.58.49.52</a><br />
                    <a href="tel:0668777144" className="hover:text-accent transition-colors">06.68.77.71.44</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10">
                  <Mail size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-light mb-1 uppercase">
                    Email
                  </h3>
                  <p className="text-text-muted">
                    <a href="mailto:eurofondations@outlook.fr" className="hover:text-accent transition-colors">eurofondations@outlook.fr</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-primary p-8 border-l-4 border-accent">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-light font-bold mb-2 uppercase text-sm tracking-wide">
                  Nom complet *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-surface text-light border-2 border-transparent focus:border-accent outline-none transition-colors duration-200"
                  style={{ borderRadius: '2px' }}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-light font-bold mb-2 uppercase text-sm tracking-wide">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-surface text-light border-2 border-transparent focus:border-accent outline-none transition-colors duration-200"
                  style={{ borderRadius: '2px' }}
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-light font-bold mb-2 uppercase text-sm tracking-wide">
                  Téléphone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-surface text-light border-2 border-transparent focus:border-accent outline-none transition-colors duration-200"
                  style={{ borderRadius: '2px' }}
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-light font-bold mb-2 uppercase text-sm tracking-wide">
                  Société
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-surface text-light border-2 border-transparent focus:border-accent outline-none transition-colors duration-200"
                  style={{ borderRadius: '2px' }}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-light font-bold mb-2 uppercase text-sm tracking-wide">
                  Décrivez votre projet *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-surface text-light border-2 border-transparent focus:border-accent outline-none transition-colors duration-200 resize-none"
                  style={{ borderRadius: '2px' }}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-accent text-light px-8 py-4 font-bold uppercase tracking-wide flex items-center justify-center gap-3 hover:bg-accent/90 transition-colors duration-200"
                style={{ borderRadius: '2px' }}
              >
                Envoyer ma demande
                <Send size={20} />
              </button>

              <p className="text-text-muted text-xs text-center">
                * Champs obligatoires - Réponse sous 48h
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
