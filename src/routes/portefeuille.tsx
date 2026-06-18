import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import erp from "@/assets/portfolio-erp.jpg";
import ecom from "@/assets/portfolio-ecom.jpg";
import mobile from "@/assets/portfolio-mobile.jpg";
import corp from "@/assets/portfolio-corp.jpg";
import saas from "@/assets/portfolio-saas.jpg";
import resto from "@/assets/portfolio-resto.jpg";
import { useQuote } from "@/components/QuoteDialog";
import { useT } from "@/components/I18n";

export const Route = createFileRoute("/portefeuille")({
  head: () => ({
    meta: [
      { title: "Portefeuille — MH Digital Solution" },
      { name: "description", content: "Découvrez nos réalisations : sites web, ERP, applications mobiles, logiciels et campagnes social media." },
      { property: "og:title", content: "Portfolio — MH Digital Solution" },
      { property: "og:description", content: "Web, mobile, ERP and more." },
    ],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  const { t } = useT();
  const [filter, setFilter] = useState("Tous");
  const { open } = useQuote();

  const projects = [
    { img: erp, title: "Pilot ERP", cat: "ERP", desc: t("Plateforme de gestion intégrée pour PME industrielle.", "Integrated management platform for an industrial SMB.") },
    { img: ecom, title: "Atlas Store", cat: "E-commerce", desc: t("Boutique en ligne multi-devises, +200 produits.", "Multi-currency online store, 200+ products.") },
    { img: mobile, title: "FitTrack", cat: "Mobile", desc: t("Application iOS / Android de coaching sportif.", "iOS / Android fitness coaching app.") },
    { img: corp, title: "Horizon Group", cat: "Corporate", desc: t("Site institutionnel pour groupe international.", "Corporate website for an international group.") },
    { img: saas, title: "Insight Analytics", cat: "SaaS", desc: t("Plateforme analytics temps réel pour marketers.", "Real-time analytics platform for marketers.") },
    { img: resto, title: "Le Saveurs", cat: "Restauration", desc: t("Site de réservation + commandes en ligne.", "Booking & online ordering site.") },
    { img: corp, title: "Brand Boost", cat: "Social", desc: t("Campagne Facebook & Instagram — +180% engagement.", "Facebook & Instagram campaign — +180% engagement.") },
  ];
  const cats = ["Tous", "ERP", "E-commerce", "Mobile", "Corporate", "SaaS", "Restauration", "Social"];
  const filtered = filter === "Tous" ? projects : projects.filter(p => p.cat === filter);

  return (
    <>
      <section className="relative bg-gradient-hero text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-animated opacity-20" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative max-w-4xl mx-auto px-5 text-center"
        >
          <div className="text-xs font-bold uppercase tracking-[0.25em] text-orange-bright">{t("Portefeuille", "Portfolio")}</div>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold">{t("Quelques projets dont nous sommes fiers", "A few projects we're proud of")}</h1>
          <p className="mt-5 text-lg text-white/80">{t("Une sélection de réalisations livrées pour nos clients.", "A selection of deliveries shipped for our clients.")}</p>
        </motion.div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                  filter === c
                    ? "bg-gradient-orange text-white shadow-glow scale-105"
                    : "bg-card text-navy border border-border hover:border-orange hover:scale-105"
                }`}
              >
                {c === "Tous" ? t("Tous", "All") : c}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p, i) => (
              <motion.a
                key={p.title + i}
                href="#"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ y: -10 }}
                className="group relative rounded-2xl overflow-hidden bg-card shadow-card hover:shadow-glow transition block"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition" />
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-orange flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-100 scale-50 transition">
                    <ArrowUpRight size={18} className="text-white" />
                  </div>
                </div>
                <div className="p-5">
                  <div className="text-xs font-bold uppercase tracking-wider text-orange">{p.cat}</div>
                  <h3 className="mt-1 font-display text-xl font-bold text-navy">{p.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{p.desc}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-accent">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy">{t("Votre projet sera le prochain", "Your project will be next")}</h2>
          <p className="mt-4 text-muted-foreground">{t("Parlons-en. Demandez votre devis gratuit dès maintenant.", "Let's talk. Request your free quote now.")}</p>
          <button
            onClick={open}
            className="mt-8 bg-gradient-orange text-white font-semibold px-8 py-4 rounded-full shadow-glow hover:scale-105 transition"
          >
            {t("Demander un devis", "Request a quote")}
          </button>
        </div>
      </section>
    </>
  );
}
