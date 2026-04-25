import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Send,
  Music,
  GraduationCap,
  CheckCircle,
  Loader2
} from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      toast({ title: "Erreur", description: "Veuillez remplir tous les champs obligatoires.", variant: "destructive" });
      return;
    }

    setIsSubmitting(true);
    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: formData,
      });

      if (error) throw error;

      setIsSubmitted(true);
      toast({ title: "Message envoyé !", description: "Nous vous répondrons dans les plus brefs délais." });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({ title: "Erreur", description: "Une erreur est survenue. Veuillez réessayer.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Adresse",
      details: ["1 Place Frédéric Mistral", "30800 Saint-Gilles"],
      color: "text-primary"
    },
    {
      icon: Phone,
      title: "Téléphone",
      details: ["06 25 70 08 81"],
      color: "text-secondary",
      link: "tel:0625700881"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["ecolegilbertbecaud@gmail.com"],
      color: "text-accent",
      link: "mailto:ecolegilbertbecaud@gmail.com"
    },
    {
      icon: Facebook,
      title: "Réseaux sociaux",
      details: [],
      color: "text-primary",
      socialLinks: [
        { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/profile.php?id=61550562451735" },
        { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/ecole_gilbertbecaud/" }
      ]
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
            Contactez-nous
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Envie de découvrir notre école de musique à Saint-Gilles ? 
            Demandez votre cours d'essai gratuit ou posez-nous vos questions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="font-heading text-2xl font-semibold text-primary mb-8">
              Informations pratiques
            </h3>
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <Card key={index} className="hover:shadow-card transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 rounded-full bg-muted flex items-center justify-center ${info.color}`}>
                        <info.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-heading font-semibold text-foreground mb-2">{info.title}</h4>
                        <div className="space-y-1">
                          {info.socialLinks ? (
                            <div className="flex gap-3 mt-1">
                              {info.socialLinks.map((social, idx) => (
                                <a key={idx} href={social.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                                  <social.icon className="w-5 h-5" />
                                  <span>{social.label}</span>
                                </a>
                              ))}
                            </div>
                          ) : info.details.map((detail, idx) => (
                            info.link ? (
                              <a key={idx} href={info.link} className="block text-muted-foreground hover:text-primary transition-colors">{detail}</a>
                            ) : (
                              <p key={idx} className="text-muted-foreground">{detail}</p>
                            )
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mb-6 bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <h4 className="font-heading font-semibold text-primary mb-3">Comment venir ?</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  L'école se situe en plein centre de Saint-Gilles, Place Frédéric Mistral. 
                  Parking gratuit à proximité. Facilement accessible depuis <strong>Vauvert, 
                  Beauvoisin, Générac, Bellegarde et Nîmes</strong>.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-musical border-0">
              <CardContent className="p-6">
                <h4 className="font-heading text-lg font-semibold text-secondary-foreground mb-4 text-center">
                  Suivez-nous sur les réseaux sociaux
                </h4>
                <div className="flex justify-center space-x-4">
                  <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" asChild>
                    <a href="https://www.facebook.com/profile.php?id=61550562451735" target="_blank" rel="noopener noreferrer">
                      <Facebook className="w-4 h-4 mr-2" />
                      Facebook
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" asChild>
                    <a href="https://www.instagram.com/ecole_gilbertbecaud/" target="_blank" rel="noopener noreferrer">
                      <Instagram className="w-4 h-4 mr-2" />
                      Instagram
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="shadow-hero">
              <CardHeader>
                <CardTitle className="font-heading text-2xl text-primary flex items-center">
                  <GraduationCap className="w-6 h-6 mr-3 text-secondary" />
                  Demander un cours d'essai gratuit
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  Remplissez ce formulaire et nous vous recontactons rapidement pour organiser votre premier cours.
                </p>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-secondary mx-auto mb-4" />
                    <h3 className="font-heading text-xl font-semibold text-primary mb-2">Message envoyé !</h3>
                    <p className="text-muted-foreground mb-6">
                      Merci pour votre message. Nous vous répondrons dans les plus brefs délais.
                    </p>
                    <Button variant="outline" onClick={() => { setIsSubmitted(false); setFormData({ firstName: '', lastName: '', email: '', phone: '', subject: '', message: '' }); }}>
                      Envoyer un autre message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">Prénom *</Label>
                        <Input id="firstName" placeholder="Votre prénom" value={formData.firstName} onChange={handleChange} required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Nom *</Label>
                        <Input id="lastName" placeholder="Votre nom" value={formData.lastName} onChange={handleChange} required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" type="email" placeholder="votre.email@exemple.com" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Téléphone</Label>
                      <Input id="phone" type="tel" placeholder="06 12 34 56 78" value={formData.phone} onChange={handleChange} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Cours souhaité</Label>
                      <Input id="subject" placeholder="Ex : Piano, Chant, Éveil musical..." value={formData.subject} onChange={handleChange} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea id="message" placeholder="Parlez-nous de votre projet musical, de l'âge de l'élève, de vos disponibilités..." rows={5} value={formData.message} onChange={handleChange} required />
                    </div>
                    <Button type="submit" className="w-full bg-gradient-musical hover:opacity-90 text-lg py-6" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <><Loader2 className="w-5 h-5 mr-2 animate-spin" /> Envoi en cours...</>
                      ) : (
                        <><Music className="w-5 h-5 mr-2" /> Envoyer ma demande</>
                      )}
                    </Button>
                    <p className="text-sm text-muted-foreground text-center">* Champs obligatoires — Réponse sous 48h</p>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map */}
        <div className="mt-16">
          <h3 className="font-heading text-2xl font-semibold text-primary text-center mb-8">
            Nous trouver à Saint-Gilles
          </h3>
          <Card className="overflow-hidden shadow-hero">
            <div className="h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2884.5!2d4.4318!3d43.6784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b42c5c3f88f8d5%3A0x1!2sPlace+Fr%C3%A9d%C3%A9ric+Mistral%2C+30800+Saint-Gilles!5e0!3m2!1sfr!2sfr!4v1"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation de l'École de Musique de Saint-Gilles"
              ></iframe>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
