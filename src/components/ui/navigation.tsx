import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Music2, Menu, X, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Accueil', href: '#accueil' },
    { name: 'L\'école', href: '#apropos' },
    { name: 'Nos cours', href: '#cours' },
    { name: 'Tarifs', href: '#tarifs' },
    { name: 'Témoignages', href: '#temoignages' },
    { name: 'Contact', href: '#contact' },
  ];

  const getHref = (href: string) => isHome ? href : `/${href}`;

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled 
          ? "bg-primary/95 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.3)]" 
          : "bg-primary/80 backdrop-blur-sm"
      )}
      aria-label="Navigation principale"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <a href={getHref('#accueil')} className="flex items-center space-x-3 group">
            <div className="relative p-2.5 bg-secondary rounded-xl shadow-md group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 ease-out group-hover:shadow-musical">
              <Music2 className="w-7 h-7 text-primary group-hover:animate-[bounce_0.6s_ease-in-out] transition-transform duration-300" />
            </div>
            <div className="font-heading font-extrabold text-xl leading-tight tracking-wide">
              <span className="text-primary-foreground">École de Musique</span>
              <br />
              <span className="text-base font-bold text-secondary group-hover:text-secondary-light transition-colors duration-300">Saint-Gilles</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={getHref(item.href)}
                className="relative px-4 py-2.5 text-primary-foreground/90 hover:text-secondary transition-colors duration-200 font-bold text-base rounded-lg hover:bg-primary-foreground/10"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:0625700881" className="flex items-center space-x-2 text-base font-semibold text-primary-foreground/80 hover:text-secondary transition-colors">
              <Phone className="w-5 h-5" />
              <span>06 25 70 08 81</span>
            </a>
            <Button className="bg-secondary text-primary font-bold text-base hover:bg-secondary-light shadow-md hover:shadow-lg transition-all duration-300 px-6 py-3" asChild>
              <a href={getHref('#contact')}>Cours d'essai gratuit</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-primary-foreground hover:bg-primary-foreground/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-primary border-t border-primary-foreground/10">
            <div className="px-4 py-6 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={getHref(item.href)}
                  className="block text-primary-foreground/80 hover:text-secondary hover:bg-primary-foreground/10 transition-colors duration-200 font-medium py-3 px-3 rounded-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 border-t border-primary-foreground/10 space-y-3 mt-2">
                <a href="tel:0625700881" className="flex items-center space-x-2 text-sm text-primary-foreground/70 px-3">
                  <Phone className="w-4 h-4" />
                  <span>06 25 70 08 81</span>
                </a>
                <Button className="w-full bg-secondary text-primary font-semibold hover:bg-secondary-light" asChild>
                  <a href={getHref('#contact')} onClick={() => setIsMobileMenuOpen(false)}>
                    Demander un cours d'essai
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
