import React from 'react';
import { Music, MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Footer = () => {
  const quickLinks = [
    { name: 'Accueil', href: '#accueil' },
    { name: "L'école", href: '#apropos' },
    { name: 'Nos cours', href: '#cours' },
    { name: 'Tarifs', href: '#tarifs' },
    { name: 'Témoignages', href: '#temoignages' },
    { name: 'Contact', href: '#contact' }
  ];

  const instruments = [
    'Cours de piano',
    'Cours de violon',
    'Cours de chant',
    'Cours de batterie',
    'Cours de guitare',
    'Cours de saxophone',
    'Cours de flûte',
    'Ensemble vocal',
    'Éveil musical',
    'Formation musicale'
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="p-2 bg-secondary rounded-lg">
                <Music className="w-6 h-6 text-primary" />
              </div>
              <div className="font-heading font-bold text-lg">
                École de Musique
                <br />
                <span className="text-sm font-medium opacity-90">Saint-Gilles (30800)</span>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed mb-4">
              Cours de musique pour enfants, adolescents et adultes à Saint-Gilles, Gard. 
              Piano, violon, chant, batterie, éveil musical et formation musicale.
            </p>
            <p className="text-primary-foreground/60 text-sm mb-6">
              Nous accueillons également les élèves de Vauvert, Beauvoisin, Générac, 
              Bellegarde et de toute la région nîmoise.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6">Navigation</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Instruments */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6">Nos disciplines</h3>
            <ul className="space-y-3">
              {instruments.map((instrument, index) => (
                <li key={index}>
                  <a href="#cours" className="text-primary-foreground/80 hover:text-secondary transition-colors duration-200">
                    {instrument}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                <div className="text-primary-foreground/80">
                  <div>1 Place Frédéric Mistral</div>
                  <div>30800 Saint-Gilles</div>
                </div>
              </div>
              <a href="tel:0625700881" className="flex items-center space-x-3 text-primary-foreground/80 hover:text-secondary transition-colors">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                <span>06 25 70 08 81</span>
              </a>
              <a href="mailto:ecolegilbertbecaud@gmail.com" className="flex items-center space-x-3 text-primary-foreground/80 hover:text-secondary transition-colors">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                <span>ecolegilbertbecaud@gmail.com</span>
              </a>
            </div>
            <div className="flex space-x-4 mt-6">
              <a href="https://www.facebook.com/profile.php?id=61550562451735" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-secondary text-primary font-bold text-sm hover:bg-secondary-light hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg">
                <Facebook className="w-5 h-5" />
                Facebook
              </a>
              <a href="https://www.instagram.com/ecole_gilbertbecaud/" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-secondary text-primary font-bold text-sm hover:bg-secondary-light hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg">
                <Instagram className="w-5 h-5" />
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} École de Musique de Saint-Gilles. Tous droits réservés.
          </div>
          <div className="flex space-x-6 text-sm">
            <Link to="/mentions-legales" className="text-primary-foreground/60 hover:text-secondary transition-colors duration-200">
              Mentions légales
            </Link>
            <Link to="/mentions-legales" className="text-primary-foreground/60 hover:text-secondary transition-colors duration-200">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
