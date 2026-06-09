import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Globe, ShoppingBag, Briefcase, GraduationCap, Hotel, Newspaper, Heart,
  Home, Utensils, Calendar, Database, Cpu, Smartphone, Code2, Layers,
  CheckCircle2, ArrowRight,
} from "lucide-react";
import { useQuote } from "@/components/QuoteDialog";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — MH Digital Solution" },
      { name: "description", content: "Création de sites web, e-commerce, ERP, CRM, logiciels métier et applications mobiles sur mesure." },
      { property: "og:title", content: "Nos services — MH Digital Solution" },
      { property: "og:description", content: "Toutes nos expertises digitales en un coup d'œil." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const { open } = useQuote();
  return (
    <>
      <PageHeader
        tag="Nos services"
        title="Des solutions digitales pour chaque ambition"
        subtitle="Du site vitrine à l'ERP industriel — une expertise complète, livrée avec exigence."
      />

      {/* Main categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-8 rounded-3xl bg-card border border-border shadow-card hover:shadow-glow hover:border-orange/40 transition overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-orange/5 rounded-full blur-3xl group-hover:bg-orange/15 transition" />
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-gradient-orange flex items-center justify-center shadow-glow">
                  <cat.icon size={30} className="text-white" />
                </div>
                <h2 className="mt-5 text-2xl md:text-3xl font-display font-bold text-navy">{cat.title}</h2>
                <p className="mt-3 text-muted-foreground">{cat.desc}</p>
                <ul className="mt-5 space-y-2.5">
                  {cat.items.map((it) => (
                    <li key={it} className="flex items-start gap-2.5 text-sm text-navy">
                      <CheckCircle2 size={18} className="text-orange flex-shrink-0 mt-0.5" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Website types */}
      <section className="py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-orange">Types de sites web</div>
            <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-navy">
              Quel que soit votre secteur, nous avons le site qu'il vous faut
            </h2>
          </div>
          <div className="mt-14 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {siteTypes.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -5 }}
                className="bg-card p-5 rounded-xl border border-border hover:border-orange/40 hover:shadow-card transition group"
              >
                <s.icon size={28} className="text-orange group-hover:scale-110 transition" />
                <h3 className="mt-3 font-semibold text-navy">{s.label}</h3>
                <p className="text-xs text-muted-foreground mt-1">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="py-20 bg-gradient-navy text-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-orange-bright">Technologies</div>
            <h2 className="mt-3 text-3xl md:text-5xl font-extrabold">Les meilleures stacks pour vos projets</h2>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {techs.map((t) => (
              <span key={t} className="px-5 py-2.5 rounded-full bg-white/10 backdrop-blur border border-white/20 text-sm font-medium hover:bg-orange hover:border-orange transition cursor-default">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-5 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy">Un projet en tête ?</h2>
          <p className="mt-4 text-muted-foreground">Demandez votre devis gratuit et recevez une proposition sur mesure sous 24h.</p>
          <button
            onClick={open}
            className="mt-8 inline-flex items-center gap-2 bg-gradient-orange text-white font-semibold px-8 py-4 rounded-full shadow-glow hover:scale-105 transition"
          >
            Demander un devis <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </>
  );
}

function PageHeader({ tag, title, subtitle }: { tag: string; title: string; subtitle?: string }) {
  return (
    <section className="relative bg-gradient-hero text-white py-24 overflow-hidden">
      <div className="absolute inset-0 bg-grid-animated opacity-20" />
      <div className="absolute -top-32 right-1/4 w-96 h-96 rounded-full bg-orange/20 blur-3xl" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative max-w-4xl mx-auto px-5 lg:px-8 text-center"
      >
        <div className="text-xs font-bold uppercase tracking-[0.25em] text-orange-bright">{tag}</div>
        <h1 className="mt-4 text-4xl md:text-6xl font-extrabold">{title}</h1>
        {subtitle && <p className="mt-5 text-lg text-white/80 max-w-2xl mx-auto">{subtitle}</p>}
      </motion.div>
    </section>
  );
}

const categories = [
  {
    icon: Layers,
    title: "Sites web sur mesure",
    desc: "Vitrines, portfolios, sites institutionnels — pensés pour convertir et briller.",
    items: ["Design unique adapté à votre marque", "Optimisation SEO & performance", "Responsive mobile & tablette", "CMS pour gérer votre contenu"],
  },
  {
    icon: ShoppingBag,
    title: "E-commerce & marketplaces",
    desc: "Boutiques en ligne robustes pour vendre partout, 24/7.",
    items: ["Paiement multi-providers", "Gestion stock & commandes", "Marketing & promotions", "Tableaux de bord analytiques"],
  },
  {
    icon: Database,
    title: "ERP & CRM intégrés",
    desc: "Pilotez l'ensemble de votre activité depuis une plateforme unifiée.",
    items: ["Comptabilité & facturation", "Gestion commerciale & RH", "Relation client (CRM)", "Reporting et BI temps réel"],
  },
  {
    icon: Cpu,
    title: "Logiciels métier sur mesure",
    desc: "Des outils internes parfaitement adaptés à vos processus.",
    items: ["Automatisation des tâches", "Workflow & validations", "API & intégrations tierces", "Sécurité et hébergement géré"],
  },
  {
    icon: Smartphone,
    title: "Applications mobiles",
    desc: "iOS & Android — natif ou cross-platform pour atteindre vos utilisateurs.",
    items: ["React Native / Flutter", "Notifications push", "Géolocalisation & paiements", "Publication App Store / Play"],
  },
  {
    icon: Code2,
    title: "Refonte, SEO & maintenance",
    desc: "Faites évoluer vos plateformes existantes pour de meilleurs résultats.",
    items: ["Audit technique & UX", "Refonte progressive", "SEO on-page et technique", "Maintenance & support continu"],
  },
];

const siteTypes = [
  { icon: Globe, label: "Site vitrine", desc: "Présence en ligne pro" },
  { icon: ShoppingBag, label: "E-commerce", desc: "Boutique en ligne" },
  { icon: Briefcase, label: "Site corporate", desc: "Grande entreprise" },
  { icon: GraduationCap, label: "E-learning", desc: "Plateforme de cours" },
  { icon: Hotel, label: "Hôtellerie", desc: "Réservation en ligne" },
  { icon: Newspaper, label: "Blog / Magazine", desc: "Contenus éditoriaux" },
  { icon: Heart, label: "Association / ONG", desc: "Dons & adhésions" },
  { icon: Home, label: "Immobilier", desc: "Annonces & visites" },
  { icon: Utensils, label: "Restauration", desc: "Menu & réservation" },
  { icon: Calendar, label: "Événementiel", desc: "Billetterie & agenda" },
  { icon: Briefcase, label: "Portfolio", desc: "Freelance & artistes" },
  { icon: Database, label: "SaaS", desc: "Applications cloud" },
];

const techs = ["React", "Next.js", "Vue", "Node.js", "TypeScript", "Laravel", "Symfony", "Django", ".NET", "PostgreSQL", "MongoDB", "AWS", "Docker", "Tailwind CSS", "React Native", "Flutter", "Stripe", "Odoo"];
