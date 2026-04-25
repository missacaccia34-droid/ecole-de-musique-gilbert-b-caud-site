import React, { useEffect } from 'react';
import { Instagram as InstagramIcon, ExternalLink } from 'lucide-react';

const ELFSIGHT_APP_ID = "08d7eaf2-58c9-41d9-808f-e9a0baf80f14";

const Instagram = () => {
  const instagramHandle = "ecole_gilbertbecaud";
  const instagramUrl = `https://www.instagram.com/${instagramHandle}/`;

  useEffect(() => {
    if (!ELFSIGHT_APP_ID) return;

    // Load Elfsight script if not already loaded
    if (!document.querySelector('script[src*="elfsight"]')) {
      const script = document.createElement('script');
      script.src = 'https://static.elfsight.com/platform/platform.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section id="instagram" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4">
            Suivez-nous sur Instagram
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez les coulisses de l'école, les moments forts de nos élèves et l'actualité musicale de Saint-Gilles.
          </p>
        </div>

        {ELFSIGHT_APP_ID ? (
          <div className="max-w-5xl mx-auto mb-10">
            <div className={`elfsight-app-${ELFSIGHT_APP_ID}`} data-elfsight-app-lazy></div>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto mb-10 text-center p-12 rounded-2xl border-2 border-dashed border-muted-foreground/20">
            <InstagramIcon className="w-12 h-12 text-muted-foreground/40 mx-auto mb-4" />
            <p className="text-muted-foreground">Widget Instagram en cours de configuration…</p>
          </div>
        )}

        {/* CTA */}
        <div className="text-center">
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 group"
          >
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[hsl(345,63%,42%)] via-[hsl(25,90%,55%)] to-[hsl(43,74%,66%)] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <InstagramIcon className="w-7 h-7 text-white" />
            </div>
            <div className="text-left">
              <p className="font-heading font-semibold text-primary text-lg">@{instagramHandle}</p>
              <p className="text-sm text-muted-foreground">Voir toutes nos publications</p>
            </div>
            <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Instagram;
