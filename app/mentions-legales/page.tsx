import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mentions Légales | Eurobarrere Fondations',
  description: 'Mentions légales et informations juridiques d\'Eurobarrere Fondations.',
  robots: {
    index: false,
    follow: true,
  },
}

export default function MentionsLegales() {
  return (
    <main className="pt-20">
      <section className="bg-primary py-16 grain-texture">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h1 className="font-display text-5xl md:text-7xl font-black text-light mb-6 uppercase">
            Mentions <span className="text-accent">Légales</span>
          </h1>
        </div>
      </section>

      <section className="py-16 bg-light text-primary">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-display text-3xl font-bold mb-6 uppercase">
              Informations légales
            </h2>

            <h3 className="font-display text-xl font-bold mt-8 mb-4 uppercase">
              Éditeur du site
            </h3>
            <p className="mb-4">
              <strong>Raison sociale :</strong> Eurobarrere Fondations<br />
              <strong>Forme juridique :</strong> SAS (Société par Actions Simplifiée)<br />
              <strong>SIREN :</strong> 918 576 695<br />
              <strong>SIRET :</strong> 918 576 695 00012<br />
              <strong>TVA intracommunautaire :</strong> FR61918576695
            </p>

            <h3 className="font-display text-xl font-bold mt-8 mb-4 uppercase">
              Contact
            </h3>
            <p className="mb-4">
              <strong>Téléphone :</strong> 06.80.58.49.52 / 06.68.77.71.44<br />
              <strong>Email :</strong> eurofondations@outlook.fr
            </p>

            <h3 className="font-display text-xl font-bold mt-8 mb-4 uppercase">
              Hébergement
            </h3>
            <p className="mb-4">
              Ce site est hébergé par Vercel Inc.<br />
              340 S Lemon Ave #4133<br />
              Walnut, CA 91789<br />
              États-Unis
            </p>

            <h3 className="font-display text-xl font-bold mt-8 mb-4 uppercase">
              Propriété intellectuelle
            </h3>
            <p className="mb-4">
              L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
            </p>

            <h3 className="font-display text-xl font-bold mt-8 mb-4 uppercase">
              Données personnelles
            </h3>
            <p className="mb-4">
              Les informations recueillies via le formulaire de contact sont enregistrées dans un fichier informatisé par Eurobarrere Fondations pour le traitement de votre demande de devis ou d'information.
            </p>
            <p className="mb-4">
              Conformément à la loi « informatique et libertés », vous pouvez exercer votre droit d'accès aux données vous concernant et les faire rectifier en contactant : eurofondations@outlook.fr
            </p>

            <h3 className="font-display text-xl font-bold mt-8 mb-4 uppercase">
              Cookies
            </h3>
            <p className="mb-4">
              Ce site n'utilise pas de cookies de tracking ou de publicité. Seuls des cookies techniques essentiels au fonctionnement du site peuvent être utilisés.
            </p>

            <h3 className="font-display text-xl font-bold mt-8 mb-4 uppercase">
              Crédits
            </h3>
            <p className="mb-4">
              Conception et développement : Eurobarrere Fondations<br />
              Toutes les photographies et illustrations sont la propriété d'Eurobarrere Fondations sauf mention contraire.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
