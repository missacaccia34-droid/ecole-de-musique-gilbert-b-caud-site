import { Helmet } from "react-helmet";

const Piano = () => {
  return (
    <>
      <Helmet>
        <title>
          Cours de piano à Saint-Gilles (30800) | École Gilbert Bécaud
        </title>

        <meta
          name="description"
          content="Cours de piano à Saint-Gilles pour enfants, adolescents et adultes. Découvrez les cours de piano de l’École Gilbert Bécaud avec Laurence, professeure et directrice pédagogique."
        />

        <meta
          name="keywords"
          content="cours de piano Saint-Gilles, école de musique Saint-Gilles, piano enfant, piano adulte, cours musique Gard"
        />
      </Helmet>

      <main className="bg-[#F8F7F3] text-[#14274E]">

        {/* HERO */}
        <section className="relative overflow-hidden bg-[#14274E] text-white px-6 py-24">

          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

            <div>
              <div className="inline-flex items-center gap-2 bg-[#E8C15B] text-[#14274E] px-5 py-2 rounded-full font-semibold mb-8">
                🎹 Cours de piano • Saint-Gilles
              </div>

              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-8">
                Cours de piano à Saint-Gilles
              </h1>

              <p className="text-xl text-gray-200 leading-relaxed mb-8">
                Découvrez des cours de piano adaptés aux enfants,
                adolescents et adultes dans une ambiance bienveillante,
                artistique et motivante.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="/contact"
                  className="bg-[#E8C15B] hover:bg-[#f0cc6d] text-[#14274E] font-semibold px-8 py-4 rounded-xl transition"
                >
                  Réserver un cours d’essai
                </a>

                <a
                  href="/cours-chant-saint-gilles"
                  className="border border-white/30 hover:bg-white/10 px-8 py-4 rounded-xl transition"
                >
                  Découvrir nos autres cours
                </a>
              </div>
            </div>

            <div>
              <img
                src="/images/piano-laurence.jpg"
                alt="Cours de piano à Saint-Gilles avec Laurence"
                className="rounded-[32px] shadow-2xl"
              />
            </div>

          </div>
        </section>

        {/* PRESENTATION */}
        <section className="max-w-6xl mx-auto px-6 py-24">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>
              <img
                src="/images/laurence-piano.jpg"
                alt="Laurence professeure de piano"
                className="rounded-[32px] shadow-xl"
              />
            </div>

            <div>

              <span className="text-[#E8C15B] font-semibold uppercase tracking-wider">
                Professeure & Directrice pédagogique
              </span>

              <h2 className="text-5xl font-bold mt-4 mb-8">
                Laurence, une pédagogie bienveillante et passionnée
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Laurence accompagne les élèves de tous niveaux dans
                l’apprentissage du piano à l’École Gilbert Bécaud
                de Saint-Gilles.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Chaque cours est adapté au rythme, aux envies musicales
                et aux objectifs de l’élève afin de développer à la fois
                technique, musicalité et confiance en soi.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                L’école accueille des élèves venant de Saint-Gilles,
                Vauvert, Beauvoisin, Bellegarde, Générac et des environs.
              </p>

            </div>

          </div>

        </section>

        {/* PEDAGOGIE */}
        <section className="bg-white py-24">

          <div className="max-w-5xl mx-auto px-6 text-center">

            <span className="text-[#E8C15B] font-semibold uppercase tracking-wider">
              Notre pédagogie
            </span>

            <h2 className="text-5xl font-bold mt-4 mb-8">
              Apprendre le piano avec plaisir
            </h2>

            <p className="text-xl text-gray-700 leading-relaxed">
              Les cours de piano permettent de développer l’écoute,
              la concentration, la mémoire, la créativité et la
              confiance en soi dans une approche progressive et motivante.
            </p>

          </div>

        </section>

        {/* NIVEAUX */}
        <section className="max-w-6xl mx-auto px-6 py-24">

          <div className="text-center mb-16">

            <h2 className="text-5xl font-bold mb-6">
              Des cours adaptés à tous les niveaux
            </h2>

            <p className="text-xl text-gray-600">
              Débutants, intermédiaires ou confirmés.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white rounded-[28px] p-10 shadow-sm">
              <div className="text-5xl mb-6">🎼</div>

              <h3 className="text-3xl font-bold mb-4">
                Débutants
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Découverte du clavier, rythme, premières partitions
                et premiers morceaux.
              </p>
            </div>

            <div className="bg-white rounded-[28px] p-10 shadow-sm">
              <div className="text-5xl mb-6">🎹</div>

              <h3 className="text-3xl font-bold mb-4">
                Intermédiaires
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Développement technique, autonomie musicale et
                interprétation.
              </p>
            </div>

            <div className="bg-white rounded-[28px] p-10 shadow-sm">
              <div className="text-5xl mb-6">✨</div>

              <h3 className="text-3xl font-bold mb-4">
                Confirmés
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Travail avancé de la musicalité et perfectionnement.
              </p>
            </div>

          </div>

        </section>

        {/* FAQ */}
        <section className="bg-white py-24">

          <div className="max-w-4xl mx-auto px-6">

            <h2 className="text-5xl font-bold text-center mb-16">
              Questions fréquentes
            </h2>

            <div className="space-y-6">

              <div className="bg-[#F8F7F3] rounded-[24px] p-8">
                <h3 className="font-bold text-2xl mb-4">
                  À partir de quel âge peut-on commencer ?
                </h3>

                <p className="text-gray-700">
                  Les enfants peuvent généralement commencer
                  le piano à partir de 6 ans.
                </p>
              </div>

              <div className="bg-[#F8F7F3] rounded-[24px] p-8">
                <h3 className="font-bold text-2xl mb-4">
                  Peut-on débuter adulte ?
                </h3>

                <p className="text-gray-700">
                  Oui, les cours sont ouverts aux adultes
                  débutants ou souhaitant reprendre le piano.
                </p>
              </div>

              <div className="bg-[#F8F7F3] rounded-[24px] p-8">
                <h3 className="font-bold text-2xl mb-4">
                  Faut-il connaître le solfège ?
                </h3>

                <p className="text-gray-700">
                  Non, l’apprentissage du solfège se fait
                  progressivement pendant les cours.
                </p>
              </div>

            </div>

          </div>

        </section>

      </main>
    </>
  );
};

export default Piano;
