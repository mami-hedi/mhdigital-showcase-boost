import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Target, Lightbulb, Heart, Award, Users, Rocket } from "lucide-react";
import { useQuote } from "@/components/QuoteDialog";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: "À propos — MH Digital Solution" },
      { name: "description", content: "MH Digital Solution : une équipe passionnée de designers et développeurs au service de vos projets digitaux." },
      { property: "og:title", content: "À propos — MH Digital Solution" },
      { property: "og:description", content: "Notre mission, nos valeurs et notre équipe." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { open } = useQuote();
  return (
    <>
      <section className="relative bg-gradient-hero text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-animated opacity-20" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative max-w-4xl mx-auto px-5 text-center"
        >
          <div className="text-xs font-bold uppercase tracking-[0.25em] text-orange-bright">À propos</div>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold">Bâtir le digital de demain, avec passion</h1>
          <p className="mt-5 text-lg text-white/80">
            MH Digital Solution est une agence à taille humaine qui transforme vos idées en produits digitaux d'exception.
          </p>
        </motion.div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-orange">Notre histoire</div>
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-navy">Une vision claire : démocratiser l'excellence digitale</h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Fondée par des passionnés du web, MH Digital Solution est née de la conviction qu'une bonne solution digitale n'est pas un luxe — c'est un levier de croissance accessible à toutes les entreprises.
              </p>
              <p>
                Aujourd'hui, nous accompagnons startups, PME et grands groupes dans la création de sites, ERP, logiciels et applications qui font la différence.
              </p>
              <p>
                Notre force : combiner design soigné, ingénierie solide et écoute attentive pour livrer des produits qui dépassent les attentes.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-orange rounded-3xl blur-2xl opacity-30" />
            <div className="relative grid grid-cols-2 gap-4">
              {[["120+", "Projets livrés"], ["50+", "Clients heureux"], ["8 ans", "D'expérience"], ["15", "Experts"]].map(([n, l]) => (
                <div key={l} className="bg-card p-6 rounded-2xl shadow-card text-center border border-border">
                  <div className="text-4xl font-extrabold text-gradient-orange">{n}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{l}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-accent">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center max-w-3xl mx-auto">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-orange">Nos valeurs</div>
            <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-navy">Ce qui nous guide chaque jour</h2>
          </div>
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card p-7 rounded-2xl border border-border shadow-card text-center"
              >
                <div className="mx-auto w-14 h-14 rounded-2xl bg-gradient-orange flex items-center justify-center shadow-glow">
                  <v.icon size={26} className="text-white" />
                </div>
                <h3 className="mt-4 font-display text-xl font-bold text-navy">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-navy text-white text-center">
        <div className="max-w-3xl mx-auto px-5">
          <h2 className="text-3xl md:text-5xl font-extrabold">Travaillons ensemble</h2>
          <p className="mt-4 text-white/80">Confiez-nous votre prochain projet et donnons vie à votre vision.</p>
          <button onClick={open} className="mt-8 bg-gradient-orange text-white font-semibold px-8 py-4 rounded-full shadow-glow hover:scale-105 transition">
            Demander un devis
          </button>
        </div>
      </section>
    </>
  );
}

const values = [
  { icon: Target, title: "Excellence", desc: "Nous visons toujours le niveau supérieur, dans chaque ligne de code et chaque pixel." },
  { icon: Heart, title: "Écoute", desc: "Vos objectifs guident nos choix. Nous travaillons en transparence totale." },
  { icon: Lightbulb, title: "Innovation", desc: "Nous suivons l'évolution des technologies pour vous offrir le meilleur." },
  { icon: Users, title: "Partenariat", desc: "Plus que des prestataires, nous sommes des alliés de votre croissance." },
  { icon: Award, title: "Qualité", desc: "Tests, revues, sécurité : nos standards sont élevés et constants." },
  { icon: Rocket, title: "Impact", desc: "Chaque projet doit produire un résultat concret pour votre activité." },
];
