import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import sejourMedical from "@/assets/mockup_sejour_medical.png";
import batimentRh from "@/assets/batimentrh.webp";
import darBnbAdmin from "@/assets/mockup_darbandb_admin.png";
import gem from "@/assets/mockup_gem_gwenaelle.png";
import darBnb from "@/assets/mockup_darbandb.png";
import annonceTn from "@/assets/mockup_annonce.png";
import mylieu from "@/assets/mylieufr.webp";
import petitsPieds from "@/assets/pauline.webp";
import annonceTnAdmin from "@/assets/admin-annonce.webp";
import closLacam from "@/assets/leclos.webp";
import cna from "@/assets/stecna.webp";
import cnaErp from "@/assets/erpcna.jpg";
import samMecaSite from "@/assets/sammecasite.jpg";
import samMecaErp from "@/assets/erp-sammeca.jpg";

import { useQuote } from "@/components/QuoteDialog";
import { useT } from "@/components/I18n";

export const Route = createFileRoute("/portefeuille")({
  head: () => ({
    meta: [
      { title: "Portefeuille — MH Digital Solution" },
      {
        name: "description",
        content:
          "Découvrez nos réalisations : sites web, ERP, applications mobiles, logiciels et campagnes social media.",
      },
      { property: "og:title", content: "Portefeuille — MH Digital Solution" },
      {
        property: "og:description",
        content:
          "Découvrez nos réalisations : sites web, ERP, applications mobiles, logiciels et campagnes social media.",
      },
    ],
  }),
  component: PortfolioPage,
});

type Category =
  | "corporate"
  | "ecommerce"
  | "showcase"
  | "dashboard"
  | "hosting"
  | "realestate"
  | "ERP";

type Project = {
  img: string;
  title: string;
  cat: Category;
  link: string | null;
  desc: { fr: string; en: string };
};

// Clés de catégories (stables, indépendantes de la langue) + libellés FR/EN
const CATEGORY_LABELS: Record<Category | "all", { fr: string; en: string }> = {
  all: { fr: "Tous", en: "All" },
  corporate: { fr: "Corporate", en: "Corporate" },
  ecommerce: { fr: "E-commerce", en: "E-commerce" },
  showcase: { fr: "Vitrine", en: "Showcase" },
  dashboard: { fr: "Dashboard", en: "Dashboard" },
  hosting: { fr: "Hébergement", en: "Hosting" },
  realestate: { fr: "Immobilier", en: "Real Estate" },
  ERP: { fr: "ERP", en: "ERP" },
};

const CATS = Object.keys(CATEGORY_LABELS) as (Category | "all")[];

const PROJECTS: Project[] = [
  {
    img: sejourMedical,
    title: "Séjour Médical",
    cat: "corporate",
    link: "https://www.sejour-medical.fr/",
    desc: {
      fr: "Plateforme vitrine et facilitateur de confiance pour le tourisme médical international.",
      en: "Showcase platform and trusted facilitator for international medical tourism.",
    },
  },
  {
    img: batimentRh,
    title: "RH Bâtiment",
    cat: "showcase",
    link: "https://batimentrh.tn/",
    desc: {
      fr: "Site vitrine professionnel mettant en valeur l'expertise et la gestion de projets de construction générale.",
      en: "Professional showcase website highlighting expertise and project management in general construction.",
    },
  },
  {
    img: darBnbAdmin,
    title: "Dar B&B Admin",
    cat: "dashboard",
    link: null,
    desc: {
      fr: "Système de gestion intégrée (Back-office) pour piloter les réservations, les tarifs dynamiques, les codes promos et le calendrier des disponibilités.",
      en: "Integrated management system (Back-office) to control reservations, dynamic pricing, promo codes, and availability calendar.",
    },
  },
  {
    img: gem,
    title: "GEM by Gwenaëlle",
    cat: "ecommerce",
    link: "https://www.gembygwenaelle.fr/",
    desc: {
      fr: "Boutique en ligne élégante dédiée à l'artisanat d'art, aux créations en macramé et accessoires faits main.",
      en: "Elegant online store dedicated to art crafts, macrame creations, and handmade accessories.",
    },
  },
  {
    img: darBnb,
    title: "Dar B&B",
    cat: "hosting",
    link: "https://www.bnb-villa.com/",
    desc: {
      fr: "Plateforme de réservation en ligne et vitrine d'exception pour une maison d'hôtes haut de gamme.",
      en: "Online booking platform and premium showcase website for an exclusive guesthouse.",
    },
  },
  {
    img: annonceTn,
    title: "Annonce Tunisie",
    cat: "realestate",
    link: "https://tunisie-immobilier-pro.vercel.app/",
    desc: {
      fr: "Plateforme dynamique de recherche et de diffusion d'annonces immobilières ciblées en Tunisie.",
      en: "Dynamic platform for searching and publishing targeted real estate listings in Tunisia.",
    },
  },
  {
    img: mylieu,
    title: "MyLieu",
    cat: "showcase",
    link: "https://www.mylieu.fr/",
    desc: {
      fr: "Site vitrine d'une agence d'architecture présentant un portfolio de projets de logements, bureaux, équipements et créations design sur mesure.",
      en: "Showcase website for an architecture studio presenting a portfolio of housing, office, public facility, and bespoke design projects.",
    },
  },
  {
    img: petitsPieds,
    title: "Petits pieds grands pas",
    cat: "showcase",
    link: "https://petitspiedsgrandpas.com/",
    desc: {
      fr: "Site vitrine et de réservation pour une infirmière puéricultrice libérale, proposant accompagnement parental, portage physiologique et massage bébé.",
      en: "Showcase and booking website for a private pediatric nurse, offering parental support, physiological baby-wearing guidance, and baby massage sessions.",
    },
  },
  {
    img: closLacam,
    title: "Le Clos Lacam",
    cat: "showcase",
    link: "https://www.closlacam.fr/",
    desc: {
      fr: "Site vitrine et de réservation pour des appartements meublés de tourisme 3 étoiles, installés dans une bâtisse historique au cœur médiéval de Gourdon.",
      en: "Showcase and booking website for 3-star furnished tourist apartments, set in a historic building in the medieval heart of Gourdon.",
    },
  },
  {
    img: cna,
    title: "CNA",
    cat: "showcase",
    link: "https://www.ste-cna.tn/",
    desc: {
      fr: "Site vitrine pour une entreprise tunisienne spécialisée dans la production industrielle d'aliments composés pour animaux, mettant en valeur ses produits et son expertise.",
      en: "Showcase website for a Tunisian company specializing in the industrial production of compound animal feed, highlighting its products and expertise.",
    },
  },
  {
    img: cnaErp,
    title: "ERP CNA",
    cat: "ERP",
    link: null,
    desc: {
      fr: "Projet de déploiement et personnalisation de l'ERP Odoo pour la Société Chok de Nutrition Animale (CNA).",
      en: "Odoo ERP deployment and customization project for Société Chok de Nutrition Animale (CNA).",
    },
  },
  {
    img: annonceTnAdmin,
    title: "Annonce Tunisie Admin",
    cat: "dashboard",
    link: null,
    desc: {
      fr: "Tableau de bord d'administration pour la gestion complète d'une plateforme d'annonces immobilières en Tunisie (ventes, locations et statistiques de performance).",
      en: "Administration dashboard for the comprehensive management of a real estate classifieds platform in Tunisia (sales, rentals, and performance statistics).",
    },
  },
  {
    img: samMecaSite,
    title: "SAM MECA",
    cat: "showcase",
    link: "https://www.sam-meca.com/",
    desc: {
      fr: "Site vitrine pour une entreprise de métallerie industrielle. Présentation des services de construction métallique, chaudronnerie, et fabrication de pièces mécaniques.",
      en: "Showcase website for an industrial metalwork company. Presentation of steel construction, industrial smithing, and mechanical parts manufacturing services.",
    },
  },
  {
    img: samMecaErp,
    title: "ERP SAM MECA",
    cat: "ERP",
    link: null,
    desc: {
      fr: "Projet de déploiement et personnalisation de l'ERP Odoo pour la gestion intégrale d'une entreprise de métallerie industrielle.",
      en: "Odoo ERP deployment and customization project for the comprehensive management of an industrial metalwork company.",
    },
  },
];

function PortfolioPage() {
  const { t } = useT();
  const [filter, setFilter] = useState<Category | "all">("all");
  const { open } = useQuote();

  const filtered = filter === "all" ? PROJECTS : PROJECTS.filter((p) => p.cat === filter);

  return (
    <>
      <section className="relative bg-gradient-hero text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-animated opacity-20" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative max-w-4xl mx-auto px-5 text-center"
        >
          <div className="text-xs font-bold uppercase tracking-[0.25em] text-orange-bright">
            {t("Portefeuille", "Portfolio")}
          </div>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold">
            {t("Quelques projets dont nous sommes fiers", "A few projects we're proud of")}
          </h1>
          <p className="mt-5 text-lg text-white/80">
            {t(
              "Une sélection de réalisations livrées pour nos clients.",
              "A selection of deliveries shipped for our clients.",
            )}
          </p>
        </motion.div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {CATS.map((c) => (
              <button
                key={c}
                type="button"
                aria-pressed={filter === c}
                onClick={() => setFilter(c)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                  filter === c
                    ? "bg-gradient-orange text-white shadow-glow scale-105"
                    : "bg-card text-navy border border-border hover:border-orange hover:scale-105"
                }`}
              >
                {t(CATEGORY_LABELS[c].fr, CATEGORY_LABELS[c].en)}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: (i % 3) * 0.08, duration: 0.5 }}
                whileHover={p.link ? { y: -10 } : undefined}
                className={`group relative rounded-2xl overflow-hidden bg-card shadow-card transition ${
                  p.link ? "hover:shadow-glow" : ""
                }`}
              >
                {/* Lien uniquement si le projet a une URL : plus de href="#" qui remonte en haut de page */}
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${p.title} — ${t("ouvrir le site", "open website")}`}
                    className="absolute inset-0 z-10"
                  />
                )}

                <div className="overflow-hidden relative bg-gray-100 aspect-[4/3]">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    className={`w-full h-full object-cover object-top transition duration-700 ${
                      p.link ? "group-hover:scale-110" : ""
                    }`}
                  />
                  {p.link && (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition" />
                      <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-orange flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-100 scale-50 transition">
                        <ArrowUpRight size={18} className="text-white" />
                      </div>
                    </>
                  )}
                </div>

                <div className="p-5">
                  <div className="text-xs font-bold uppercase tracking-wider text-orange">
                    {t(CATEGORY_LABELS[p.cat].fr, CATEGORY_LABELS[p.cat].en)}
                  </div>
                  <h3 className="mt-1 font-display text-xl font-bold text-navy">{p.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{t(p.desc.fr, p.desc.en)}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-accent">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy">
            {t("Votre projet sera le prochain", "Your project will be next")}
          </h2>
          <p className="mt-4 text-muted-foreground">
            {t(
              "Parlons-en. Demandez votre devis gratuit dès maintenant.",
              "Let's talk. Request your free quote now.",
            )}
          </p>
          <button
            type="button"
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