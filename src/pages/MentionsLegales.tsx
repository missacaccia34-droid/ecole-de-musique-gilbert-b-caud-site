import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Navigation from '@/components/ui/navigation';

const MentionsLegales = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Content */}
      <main className="container mx-auto px-4 pt-32 pb-16 max-w-4xl">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-12">
          Mentions légales
        </h1>

        <div className="space-y-12 text-foreground/90 leading-relaxed">
          {/* Section 1 */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-primary mb-4">1. Éditeur du site</h2>
            <div className="bg-muted/50 rounded-2xl p-6 space-y-2">
              <p>Le présent site internet est édité par :</p>
              <ul className="space-y-1 mt-3">
                <li><strong>Nom de l'association :</strong> École de musique Gilbert Bécaud</li>
                <li><strong>Statut :</strong> Association loi 1901</li>
                <li><strong>Adresse du siège social :</strong> 1 place Frédéric Mistral, 30800 Saint-Gilles</li>
                <li><strong>Numéro SIRET :</strong> 39029876800016</li>
                <li><strong>Téléphone :</strong> <a href="tel:0625700881" className="text-primary hover:text-secondary transition-colors">06 25 70 08 81</a></li>
                <li><strong>Email :</strong> <a href="mailto:ecolegilbertbecaud@gmail.com" className="text-primary hover:text-secondary transition-colors">ecolegilbertbecaud@gmail.com</a></li>
              </ul>
              <p className="mt-4">
                <strong>Directeur de la publication :</strong><br />
                Lionel Sorrentino, président(e) de l'association.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-primary mb-4">2. Hébergement du site</h2>
            <div className="bg-muted/50 rounded-2xl p-6 space-y-2">
              <p>Le site est hébergé par :</p>
              <ul className="space-y-1 mt-3">
                <li><strong>Nom de l'hébergeur :</strong> HOSTINGER operations</li>
                <li><strong>Adresse :</strong> HOSTINGER operations, UAB — Švitrigailos str. 34, Vilnius 03230 Lithuania</li>
                <li><strong>Téléphone :</strong> +37064503378</li>
                <li><strong>Email :</strong> <a href="mailto:domains@hostinger.com" className="text-primary hover:text-secondary transition-colors">domains@hostinger.com</a></li>
              </ul>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-primary mb-4">3. Propriété intellectuelle</h2>
            <div className="bg-muted/50 rounded-2xl p-6 space-y-3">
              <p>
                L'ensemble des contenus présents sur ce site (textes, images, logos, documents, vidéos, éléments graphiques) est la propriété exclusive de l'association École de musique Gilbert Bécaud, sauf mention contraire.
              </p>
              <p>
                Toute reproduction, diffusion, modification ou utilisation, même partielle, sans autorisation préalable écrite est interdite.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-primary mb-4">4. Responsabilité</h2>
            <div className="bg-muted/50 rounded-2xl p-6 space-y-3">
              <p>
                Les informations diffusées sur ce site sont fournies à titre informatif.
              </p>
              <p>
                L'association s'efforce d'assurer leur exactitude et leur mise à jour régulière, mais ne peut garantir l'absence d'erreurs ou d'omissions.
              </p>
              <p>
                L'utilisateur reconnaît utiliser ces informations sous sa responsabilité exclusive.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-primary mb-4">5. Données personnelles</h2>
            <div className="bg-muted/50 rounded-2xl p-6 space-y-3">
              <p>
                Les informations collectées via les formulaires du site (contact, inscription, newsletter) sont destinées uniquement à l'association École de musique Gilbert Bécaud.
              </p>
              <p>
                Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :
              </p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Droit d'accès</li>
                <li>Droit de rectification</li>
                <li>Droit de suppression</li>
                <li>Droit d'opposition au traitement de vos données</li>
              </ul>
              <p>
                Pour exercer ces droits, vous pouvez contacter : <a href="mailto:ecolegilbertbecaud@gmail.com" className="text-primary font-semibold hover:text-secondary transition-colors">ecolegilbertbecaud@gmail.com</a>
              </p>
              <p>Les données ne sont jamais vendues ni cédées à des tiers.</p>
            </div>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-primary mb-4">6. Cookies</h2>
            <div className="bg-muted/50 rounded-2xl p-6 space-y-3">
              <p>
                Le site peut utiliser des cookies afin d'améliorer l'expérience de navigation et de réaliser des statistiques de fréquentation.
              </p>
              <p>
                L'utilisateur peut refuser l'utilisation des cookies en configurant son navigateur.
              </p>
            </div>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-primary mb-4">7. Droit applicable</h2>
            <div className="bg-muted/50 rounded-2xl p-6 space-y-3">
              <p>
                Le présent site est soumis au droit français.
              </p>
              <p>
                Tout litige relatif à son utilisation relève de la compétence des tribunaux français.
              </p>
            </div>
          </section>
        </div>

        {/* Back button */}
        <div className="mt-16 text-center">
          <Button className="bg-secondary text-primary font-bold hover:bg-secondary-light" asChild>
            <Link to="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour à l'accueil
            </Link>
          </Button>
        </div>
      </main>

      {/* Simple footer */}
      <footer className="bg-primary text-primary-foreground/60 text-sm text-center py-6 mt-16">
        © {new Date().getFullYear()} École de Musique de Saint-Gilles. Tous droits réservés.
      </footer>
    </div>
  );
};

export default MentionsLegales;
