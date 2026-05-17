import { Baby, Guitar, Mic, Music } from 'lucide-react';
import CourseLanding from './CourseLanding';

const EveilMusical = () => (
  <CourseLanding
    title="Éveil musical à Saint-Gilles"
    eyebrow="Éveil musical • Saint-Gilles (30800)"
    highlight="pour les plus jeunes"
    intro="Une découverte ludique et sensorielle de la musique pour les enfants : jeux de rythme, chansons, écoute, mouvement, découverte des sons et premiers repères musicaux."
    metaTitle="Éveil musical à Saint-Gilles (30800) | École Gilbert Bécaud"
    metaDescription="Éveil musical à Saint-Gilles dans le Gard pour les jeunes enfants. Découverte ludique du rythme, des sons, des chansons et des instruments à l'École Gilbert Bécaud."
    canonicalPath="/eveil-musical-saint-gilles"
    icon={Baby}
    age="3 à 6 ans"
    formats={['Jeux rythmiques', 'Chansons', 'Écoute active', 'Découverte des instruments', 'Expression corporelle']}
    benefits={[
      "Une première rencontre avec la musique dans un cadre rassurant, joyeux et adapté à l'âge.",
      "Des activités qui développent l'écoute, la motricité, la mémoire, la créativité et la socialisation.",
      'Une transition douce vers la pratique instrumentale ou la formation musicale.',
      'Un accueil local à Saint-Gilles pour les familles du Gard et des communes voisines.',
    ]}
    pedagogy={[
      "L'éveil musical permet aux plus jeunes d'explorer la musique avec le corps, la voix, le jeu et l'écoute avant de choisir éventuellement un instrument.",
      'Les séances alternent chansons, comptines, jeux de rythme, découverte de sons, petits instruments et moments de concentration adaptés aux enfants.',
      "L'objectif est de nourrir la curiosité musicale, la confiance, la coordination et le plaisir de participer en groupe.",
    ]}
    levels={[
      { title: 'Découverte des sons', text: 'Explorer les timbres, reconnaître des instruments, écouter, imiter et réagir musicalement.' },
      { title: 'Rythme et mouvement', text: 'Jeux corporels, pulsation, coordination, petites percussions et repères rythmiques simples.' },
      { title: 'Voix et créativité', text: 'Chansons, comptines, expression, imagination et premiers gestes musicaux en groupe.' },
    ]}
    faq={[
      { question: "À quel âge commencer l'éveil musical ?", answer: "L'éveil musical s'adresse généralement aux enfants de 3 à 6 ans, selon leur maturité et leur envie de participer à une activité de groupe." },
      { question: "L'enfant doit-il déjà connaître un instrument ?", answer: "Non. L'éveil musical est justement conçu comme une première découverte avant une éventuelle pratique instrumentale." },
      { question: 'Quels bénéfices pour les enfants ?', answer: "Les séances développent l'écoute, la concentration, la motricité, le langage, la mémoire et le plaisir de créer avec les autres." },
    ]}
    related={[
      { title: 'Piano', href: '/cours-piano-saint-gilles', description: 'Un parcours structuré pour commencer le piano après les premières découvertes musicales.', icon: Music },
      { title: 'Chant', href: '/cours-chant-saint-gilles', description: 'Développer sa voix, son souffle et son expression musicale.', icon: Mic },
      { title: 'Guitare', href: '/cours-guitare-saint-gilles', description: 'Apprendre la guitare acoustique ou électrique à son rythme.', icon: Guitar },
    ]}
    testimonial="Les enfants découvrent la musique en jouant, en écoutant et en participant. C'est une belle première porte d'entrée."
    testimonialAuthor="Retour parent"
  />
);

export default EveilMusical;
