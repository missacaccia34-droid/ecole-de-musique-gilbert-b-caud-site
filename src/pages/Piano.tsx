import { Baby, Guitar, Mic, Music } from 'lucide-react';
import CourseLanding from './CourseLanding';

const Piano = () => (
  <CourseLanding
    title="Cours de piano à Saint-Gilles"
    eyebrow="Piano • Saint-Gilles (30800)"
    highlight="enfants, ados et adultes"
    intro="Apprenez le piano à votre rythme à l'École de Musique Gilbert Bécaud, dans une approche bienveillante qui associe pratique instrumentale, écoute, plaisir de jouer et progression régulière."
    metaTitle="Cours de piano à Saint-Gilles (30800) | École Gilbert Bécaud"
    metaDescription="Cours de piano à Saint-Gilles dans le Gard pour enfants, adolescents et adultes. Cours débutant ou confirmé avec une pédagogie bienveillante à l'École Gilbert Bécaud."
    canonicalPath="/cours-piano-saint-gilles"
    icon={Music}
    age="Dès 6 ans"
    formats={['Cours individuels', 'Piano débutant', 'Piano enfant', 'Piano adulte', 'Formation musicale intégrée']}
    benefits={[
      "Un accompagnement personnalisé selon l'âge, le niveau et les envies musicales.",
      'Une pédagogie progressive pour développer technique, musicalité et confiance.',
      'Un cadre local accessible depuis Saint-Gilles, Vauvert, Beauvoisin, Bellegarde, Générac, Garons et Nîmes Sud.',
      'Une vraie continuité entre pratique au clavier, écoute musicale, rythme et lecture de partition.',
    ]}
    pedagogy={[
      "À l'École Gilbert Bécaud, les cours de piano permettent aux élèves de progresser à leur rythme, sans pression inutile, avec un cadre clair et motivant.",
      "L'objectif n'est pas seulement d'apprendre des morceaux : l'élève développe aussi l'écoute, la mémoire, la concentration, la sensibilité musicale et le plaisir de jouer.",
      "La pédagogie s'adapte aux débutants, aux enfants, aux adolescents et aux adultes qui souhaitent commencer, reprendre ou approfondir leur pratique du piano.",
    ]}
    levels={[
      { title: 'Piano débutant', text: 'Découverte du clavier, posture, premières notes, rythme, lecture simple et premiers morceaux pour installer de bonnes bases.' },
      { title: 'Piano enfant', text: "Une progression douce et ludique qui nourrit la curiosité musicale, l'écoute et la régularité de l'apprentissage." },
      { title: 'Piano adulte', text: 'Un accompagnement adapté pour débuter, reprendre après une pause ou avancer sur un répertoire choisi avec le professeur.' },
    ]}
    faq={[
      { question: 'À partir de quel âge commencer le piano ?', answer: "Les enfants peuvent généralement commencer autour de 6 ans, selon leur maturité, leur concentration et leur envie de découvrir l'instrument." },
      { question: 'Peut-on commencer le piano adulte ?', answer: "Oui. Les cours accueillent les adultes débutants, les personnes qui reprennent le piano et celles qui veulent progresser sur un objectif précis." },
      { question: 'Faut-il connaître le solfège ?', answer: "Non. La lecture musicale, le rythme et les bases de formation musicale sont intégrés progressivement au cours, au service de la pratique." },
    ]}
    related={[
      { title: 'Chant', href: '/cours-chant-saint-gilles', description: 'Développer sa voix, sa respiration, sa justesse et son interprétation musicale.', icon: Mic },
      { title: 'Guitare', href: '/cours-guitare-saint-gilles', description: 'Apprendre les accords, la rythmique, les arpèges et les morceaux qui vous motivent.', icon: Guitar },
      { title: 'Éveil musical', href: '/eveil-musical-saint-gilles', description: 'Une découverte ludique de la musique pour les plus jeunes.', icon: Baby },
    ]}
    testimonial="Une école attentive où l'on avance avec confiance. Les cours donnent envie de travailler entre deux séances et de continuer à progresser."
    testimonialAuthor="Retour d'élève"
  />
);

export default Piano;
