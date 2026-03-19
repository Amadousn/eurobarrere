import type { Metadata } from 'next'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact | Eurobarrere Fondations - Devis Gratuit Sous 48h',
  description: 'Contactez Eurobarrere Fondations pour vos projets de travaux souterrains à Paris et en Île-de-France. Devis gratuit sous 48h. Tél : 06.80.58.49.52',
  openGraph: {
    title: 'Contact | Eurobarrere Fondations',
    description: 'Contactez-nous pour un devis gratuit sous 48h. Expert travaux souterrains en Île-de-France.',
    url: 'https://www.eurobarrerefondations.com/contact',
    siteName: 'Eurobarrere Fondations',
    locale: 'fr_FR',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.eurobarrerefondations.com/contact',
  },
}

export default function Contact() {
  return (
    <main className="pt-20">
      <section className="bg-primary py-16 grain-texture">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h1 className="font-display text-5xl md:text-7xl font-black text-light mb-6 uppercase">
            Contactez<span className="text-accent">-nous</span>
          </h1>
          <p className="text-xl text-text-muted leading-relaxed">
            Une question ? Un projet ? Contactez nos experts pour un devis gratuit et personnalisé sous 48h.
          </p>
        </div>
      </section>

      <section className="py-16 bg-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display text-3xl font-black text-primary mb-8 uppercase">
                Nos coordonnées
              </h2>

              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10">
                    <Phone size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-primary mb-1 uppercase">
                      Téléphone
                    </h3>
                    <p className="text-primary">
                      <a href="tel:0680584952" className="hover:text-accent transition-colors font-bold">06.80.58.49.52</a>
                    </p>
                    <p className="text-primary">
                      <a href="tel:0668777144" className="hover:text-accent transition-colors font-bold">06.68.77.71.44</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10">
                    <Mail size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-primary mb-1 uppercase">
                      Email
                    </h3>
                    <p className="text-primary">
                      <a href="mailto:eurofondations@outlook.fr" className="hover:text-accent transition-colors font-bold">
                        eurofondations@outlook.fr
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10">
                    <MapPin size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-primary mb-1 uppercase">
                      Zone d'intervention
                    </h3>
                    <p className="text-primary">
                      Paris et Île-de-France<br />
                      75, 77, 78, 91, 92, 93, 94, 95
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10">
                    <Clock size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-primary mb-1 uppercase">
                      Horaires
                    </h3>
                    <p className="text-primary">
                      Lundi - Vendredi : 8h00 - 18h00<br />
                      Samedi : Sur rendez-vous
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-surface p-8 border-l-4 border-accent">
                <h3 className="font-display text-xl font-bold text-light mb-4 uppercase">
                  Informations légales
                </h3>
                <div className="text-text-muted space-y-2 text-sm">
                  <p><strong>Raison sociale :</strong> Eurobarrere Fondations</p>
                  <p><strong>Forme juridique :</strong> SAS</p>
                  <p><strong>SIRET :</strong> 918 576 695 00012</p>
                  <p><strong>SIREN :</strong> 918 576 695</p>
                  <p><strong>TVA :</strong> FR61918576695</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-display text-3xl font-black text-primary mb-8 uppercase">
                Demande de devis
              </h2>

              <div className="bg-surface p-8 border-l-4 border-accent">
                <p className="text-text-muted mb-6 leading-relaxed">
                  Remplissez ce formulaire pour nous faire part de votre projet. Nous vous répondrons dans les plus brefs délais avec un devis personnalisé.
                </p>

                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-light font-bold mb-2 uppercase text-sm tracking-wide">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-primary border-2 border-steel/20 text-light focus:border-accent focus:outline-none transition-colors"
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
                      className="w-full px-4 py-3 bg-primary border-2 border-steel/20 text-light focus:border-accent focus:outline-none transition-colors"
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
                      className="w-full px-4 py-3 bg-primary border-2 border-steel/20 text-light focus:border-accent focus:outline-none transition-colors"
                      style={{ borderRadius: '2px' }}
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-light font-bold mb-2 uppercase text-sm tracking-wide">
                      Type de prestation *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      className="w-full px-4 py-3 bg-primary border-2 border-steel/20 text-light focus:border-accent focus:outline-none transition-colors"
                      style={{ borderRadius: '2px' }}
                    >
                      <option value="">Sélectionnez une prestation</option>
                      <option value="reprise-sous-oeuvre">Reprise en sous-œuvre</option>
                      <option value="confortement-carrieres">Confortement de carrières</option>
                      <option value="puits-blindes">Puits blindés</option>
                      <option value="sondages">Sondages</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="location" className="block text-light font-bold mb-2 uppercase text-sm tracking-wide">
                      Localisation du projet *
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      required
                      placeholder="Ville ou département"
                      className="w-full px-4 py-3 bg-primary border-2 border-steel/20 text-light focus:border-accent focus:outline-none transition-colors placeholder:text-text-muted"
                      style={{ borderRadius: '2px' }}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-light font-bold mb-2 uppercase text-sm tracking-wide">
                      Description du projet *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      placeholder="Décrivez votre projet en détail..."
                      className="w-full px-4 py-3 bg-primary border-2 border-steel/20 text-light focus:border-accent focus:outline-none transition-colors resize-none placeholder:text-text-muted"
                      style={{ borderRadius: '2px' }}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-accent text-light px-8 py-4 font-bold uppercase tracking-wide hover:bg-accent/90 transition-colors"
                    style={{ borderRadius: '2px' }}
                  >
                    Envoyer la demande
                  </button>

                  <p className="text-text-muted text-xs text-center">
                    * Champs obligatoires. Vos données sont traitées de manière confidentielle.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-surface grain-texture">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-black text-light mb-6 uppercase">
            Préférez nous appeler directement ?
          </h2>
          <p className="text-text-muted text-lg mb-8">
            Nos experts sont à votre écoute pour répondre à toutes vos questions
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
            <a
              href="tel:0668777144"
              className="inline-flex items-center justify-center gap-3 bg-transparent border-2 border-light text-light px-8 py-4 font-bold uppercase tracking-wide hover:bg-light hover:text-primary transition-colors"
              style={{ borderRadius: '2px' }}
            >
              <Phone size={20} />
              06.68.77.71.44
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
