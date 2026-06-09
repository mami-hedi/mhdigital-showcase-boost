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

export const Route = createFileRoute("/portefeuille")({
  head: () => ({
    meta: [
      { title: "Portefeuille — MH Digital Solution" },
      { name: "description", content: "Découvrez nos réalisations : sites web, ERP, applications mobiles et logiciels sur mesure." },
      { property: "og:title", content: "Notre portefeuille — MH Digital Solution" },
      { property: "og:description", content: "Projets web, mobiles, ERP et plus encore." },
    ],
  }),
  component: PortfolioPage,
});

const projects = [
  { img: erp, title: "Pilot ERP", cat: "ERP", desc: "Plateforme de gestion intégrée pour PME industrielle." },
  { img: ecom, title: "Atlas Store", cat: "E-commerce", desc: "Boutique en ligne multi-devises, +200 produits." },
  { img: mobile, title: "FitTrack", cat: "Mobile", desc: "Application iOS / Android de coaching sportif." },
  { img: corp, title: "Horizon Group", cat: "Corporate", desc: "Site institutionnel pour groupe international." },
  { img: saas, title: "Insight Analytics", cat: "SaaS", desc: "Plateforme analytics temps réel pour marketers." },
  { img: resto, title: "Le Saveurs", cat: "Restauration", desc: "Site de réservation + commandes en ligne." },
];
const cats = ["Tous", "ERP", "E-commerce", "Mobile", "Corporate", "SaaS", "Restauration"];

function PortfolioPage() {
  const [filter, setFilter] = useState("Tous");
  const { open } = useQuote();
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
          <div className="text-xs font-bold uppercase tracking-[0.25em] text-orange-bright">Portefeuille</div>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold">Quelques projets dont nous sommes fiers</h1>
          <p className="mt-5 text-lg text-white/80">Une sélection de réalisations livrées pour nos clients.</p>
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
                    ? "bg-gradient-orange text-white shadow-glow"
                    : "bg-card text-navy border border-border hover:border-orange"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p, i) => (
              <motion.a
                key={p.title}
                href="#"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -8 }}
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
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy">Votre projet sera le prochain</h2>
          <p className="mt-4 text-muted-foreground">Parlons-en. Demandez votre devis gratuit dès maintenant.</p>
          <button
            onClick={open}
            className="mt-8 bg-gradient-orange text-white font-semibold px-8 py-4 rounded-full shadow-glow hover:scale-105 transition"
          >
            Demander un devis
          </button>
        </div>
      </section>
    </>
  );
}
