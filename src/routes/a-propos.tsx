import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Target, Lightbulb, Heart, Award, Users, Rocket, Globe2 } from "lucide-react";
import { useQuote } from "@/components/QuoteDialog";
import { useT } from "@/components/I18n";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: "À propos — MH Digital Solution" },
      { name: "description", content: "MH Digital Solution : une équipe passionnée de designers et développeurs au service de vos projets digitaux, 100% télétravail depuis Hammamet, Tunisie." },
      { property: "og:title", content: "About — MH Digital Solution" },
      { property: "og:description", content: "Our mission, our values, our team." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { open } = useQuote();
  const { t } = useT();

  const values = [
    { icon: Target, title: t("Excellence", "Excellence"), desc: t("Nous visons toujours le niveau supérieur, dans chaque ligne de code et chaque pixel.", "We aim higher in every line of code and every pixel.") },
    { icon: Heart, title: t("Écoute", "Listening"), desc: t("Vos objectifs guident nos choix. Nous travaillons en transparence totale.", "Your goals drive our choices. We work in full transparency.") },
    { icon: Lightbulb, title: t("Innovation", "Innovation"), desc: t("Nous suivons l'évolution des technologies pour vous offrir le meilleur.", "We follow tech evolution to offer you the very best.") },
    { icon: Users, title: t("Partenariat", "Partnership"), desc: t("Plus que des prestataires, nous sommes des alliés de votre croissance.", "More than vendors — true allies of your growth.") },
    { icon: Award, title: t("Qualité", "Quality"), desc: t("Tests, revues, sécurité : nos standards sont élevés et constants.", "Tests, reviews, security: our standards are high and consistent.") },
    { icon: Rocket, title: t("Impact", "Impact"), desc: t("Chaque projet doit produire un résultat concret pour votre activité.", "Every project must deliver concrete results for your business.") },
  ];

  return (
    <>
      <section className="relative bg-gradient-hero text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-animated opacity-20" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative max-w-4xl mx-auto px-5 text-center"
        >
          <div className="text-xs font-bold uppercase tracking-[0.25em] text-orange-bright">{t("À propos", "About")}</div>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold">{t("Bâtir le digital de demain, avec passion", "Building tomorrow's digital, with passion")}</h1>
          <p className="mt-5 text-lg text-white/80">
            {t(
              "MH Digital Solution est une agence à taille humaine qui transforme vos idées en produits digitaux d'exception.",
              "MH Digital Solution is a human-sized agency turning your ideas into outstanding digital products."
            )}
          </p>
        </motion.div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-orange">{t("Notre histoire", "Our story")}</div>
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-navy">{t("Une vision claire : démocratiser l'excellence digitale", "A clear vision: democratize digital excellence")}</h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>{t(
                "Animés par notre passion du web, nous sommes convaincus qu'une bonne solution digitale n'est pas un luxe — c'est un levier de croissance accessible à toutes les entreprises.",
                "Driven by our passion for the web, we believe a great digital solution isn't a luxury — it's a growth lever accessible to every business."
              )}</p>
              <p>{t(
                "Nous accompagnons startups, PME et grands groupes dans la création de sites, ERP, logiciels, applications et stratégies social media qui font la différence.",
                "We support startups, SMBs and large groups in building sites, ERPs, software, apps and social-media strategies that make a difference."
              )}</p>
              <p>{t(
                "Notre force : combiner design soigné, ingénierie solide et écoute attentive pour livrer des produits qui dépassent les attentes.",
                "Our edge: combining refined design, solid engineering and active listening to ship products that exceed expectations."
              )}</p>
              <p className="flex items-center gap-2 text-navy font-semibold">
                <Globe2 size={18} className="text-orange" />
                {t("Basés à Hammamet, Tunisie — 100% télétravail, partout dans le monde.", "Based in Hammamet, Tunisia — 100% remote, working worldwide.")}
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
              {[
                ["120+", t("Projets livrés", "Projects delivered")],
                ["50+", t("Clients heureux", "Happy clients")],
                ["100%", t("Télétravail", "Remote")],
                ["24/7", t("Support", "Support")],
              ].map(([n, l]) => (
                <motion.div
                  key={l}
                  whileHover={{ y: -6, scale: 1.03 }}
                  className="bg-card p-6 rounded-2xl shadow-card text-center border border-border hover:shadow-glow transition"
                >
                  <div className="text-4xl font-extrabold text-gradient-orange">{n}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{l}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-accent">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center max-w-3xl mx-auto">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-orange">{t("Nos valeurs", "Our values")}</div>
            <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-navy">{t("Ce qui nous guide chaque jour", "What guides us every day")}</h2>
          </div>
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="bg-card p-7 rounded-2xl border border-border shadow-card hover:shadow-glow text-center transition"
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
          <h2 className="text-3xl md:text-5xl font-extrabold">{t("Travaillons ensemble", "Let's work together")}</h2>
          <p className="mt-4 text-white/80">{t("Confiez-nous votre prochain projet et donnons vie à votre vision.", "Trust us with your next project — let's bring your vision to life.")}</p>
          <button onClick={open} className="mt-8 bg-gradient-orange text-white font-semibold px-8 py-4 rounded-full shadow-glow hover:scale-105 transition">
            {t("Demander un devis", "Request a quote")}
          </button>
        </div>
      </section>
    </>
  );
}
