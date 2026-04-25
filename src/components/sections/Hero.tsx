import React from 'react';
import { Button } from '@/components/ui/button';
import { Music, Play, Users, Award, GraduationCap } from 'lucide-react';
import heroImage from '@/assets/hero-music-school.jpg';

const Hero = () => {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Cours de musique à l'École de Musique de Saint-Gilles — piano, violon, chant, batterie"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center lg:text-left pt-20">
        <div className="max-w-4xl mx-auto lg:mx-0">
          <div className="mb-6">
            <div className="inline-flex items-center space-x-3 px-6 py-3 bg-secondary text-primary rounded-full shadow-musical mb-4 animate-pulse-slow">
              <Music className="w-5 h-5" />
              <span className="text-base font-bold font-heading tracking-wide">École de Musique à Saint-Gilles (30800)</span>
            </div>
          </div>

          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            École de musique à Saint-Gilles
            <span className="block bg-gradient-musical bg-clip-text text-transparent mt-2">
              Cours pour enfants, ados et adultes
            </span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Piano, violon, chant, batterie, saxophone, guitare, flûte traversière, éveil musical et formation musicale — 
            apprenez la musique à votre rythme dans une ambiance bienveillante, 
            quel que soit votre âge ou votre niveau.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary-light text-secondary-foreground font-semibold px-8 py-4 text-lg shadow-musical"
              asChild
            >
              <a href="#contact">
                <GraduationCap className="w-5 h-5 mr-2" />
                Demander un cours d'essai
              </a>
            </Button>
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 text-lg shadow-musical border-2 border-primary-foreground/20"
              asChild
            >
              <a href="#cours">
                <Music className="w-5 h-5 mr-2" />
                Découvrir nos cours
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto lg:mx-0">
            <div className="flex items-center justify-center lg:justify-start space-x-3 text-primary-foreground">
              <div className="p-3 bg-secondary/20 backdrop-blur-sm rounded-full">
                <Users className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <div className="text-2xl font-bold">200+</div>
                <div className="text-sm opacity-90">Élèves inscrits</div>
              </div>
            </div>
            <div className="flex items-center justify-center lg:justify-start space-x-3 text-primary-foreground">
              <div className="p-3 bg-secondary/20 backdrop-blur-sm rounded-full">
                <Music className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <div className="text-2xl font-bold">7</div>
                <div className="text-sm opacity-90">Disciplines</div>
              </div>
            </div>
            <div className="flex items-center justify-center lg:justify-start space-x-3 text-primary-foreground">
              <div className="p-3 bg-secondary/20 backdrop-blur-sm rounded-full">
                <Award className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <div className="text-2xl font-bold">25 ans</div>
                <div className="text-sm opacity-90">D'expérience</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <a href="#apropos" aria-label="Défiler vers la suite">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-primary-foreground rounded-full flex justify-center">
              <div className="w-1 h-3 bg-primary-foreground rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
