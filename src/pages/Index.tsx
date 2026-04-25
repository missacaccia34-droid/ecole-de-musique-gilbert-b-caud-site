import React from 'react';
import Navigation from '@/components/ui/navigation';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Teachers from '@/components/sections/Teachers';
import Courses from '@/components/sections/Courses';
import Pricing from '@/components/sections/Pricing';
import Instagram from '@/components/sections/Instagram';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Teachers />
      <Courses />
      <Pricing />
      <Instagram />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
