import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Globe, ShoppingBag, Briefcase, GraduationCap, Hotel, Newspaper, Heart,
  Home, Utensils, Calendar, Database, Cpu, Smartphone, Code2, Layers,
  CheckCircle2, ArrowRight, Share2, Instagram, Facebook,
} from "lucide-react";
import { useQuote } from "@/components/QuoteDialog";
import { useT } from "@/components/I18n";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — MH Digital Solution" },
      { name: "description", content: "Sites web, e-commerce, ERP, CRM, logiciels métier, applications mobiles et community management Facebook/Instagram." },
      { property: "og:title", content: "Our services — MH Digital Solution" },
      { property: "og:description", content: "All our digital expertise at a glance." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const { open } = useQuote();
  const { t } = useT();

  const categories = [
    {
      icon: Layers,
      title: t("Sites web sur mesure", "Custom websites"),
      desc: t("Vitrines, portfolios, sites institutionnels — pensés pour convertir et briller.", "Showcase, portfolio and corporate sites — built to convert and shine."),
      items: [
        t("Design unique adapté à votre marque", "Unique design matching your brand"),
        t("Optimisation SEO & performance", "SEO and performance optimization"),
        t("Responsive mobile & tablette", "Mobile & tablet responsive"),
        t("CMS pour gérer votre contenu", "CMS to manage your content"),
      ],
    },
    {
      icon: ShoppingBag,
      title: t("E-commerce & marketplaces", "E-commerce & marketplaces"),
      desc: t("Boutiques en ligne robustes pour vendre partout, 24/7.", "Robust online stores to sell anywhere, 24/7."),
      items: [
        t("Paiement multi-providers", "Multi-provider payments"),
        t("Gestion stock & commandes", "Stock & order management"),
        t("Marketing & promotions", "Marketing & promotions"),
        t("Tableaux de bord analytiques", "Analytics dashboards"),
      ],
    },
    {
      icon: Database,
      title: t("ERP & CRM intégrés", "Integrated ERP & CRM"),
      desc: t("Pilotez l'ensemble de votre activité depuis une plateforme unifiée.", "Run your entire business from one unified platform."),
      items: [
        t("Comptabilité & facturation", "Accounting & invoicing"),
        t("Gestion commerciale & RH", "Sales & HR management"),
        t("Relation client (CRM)", "Customer relations (CRM)"),
        t("Reporting et BI temps réel", "Real-time reporting & BI"),
      ],
    },
    {
      icon: Cpu,
      title: t("Logiciels métier sur mesure", "Custom business software"),
      desc: t("Des outils internes parfaitement adaptés à vos processus.", "Internal tools perfectly tailored to your processes."),
      items: [
        t("Automatisation des tâches", "Task automation"),
        t("Workflow & validations", "Workflows & approvals"),
        t("API & intégrations tierces", "APIs & third-party integrations"),
        t("Sécurité et hébergement géré", "Security & managed hosting"),
      ],
    },
    {
      icon: Smartphone,
      title: t("Applications mobiles", "Mobile applications"),
      desc: t("iOS & Android — natif ou cross-platform pour atteindre vos utilisateurs.", "iOS & Android — native or cross-platform to reach your users."),
      items: [
        t("React Native / Flutter", "React Native / Flutter"),
        t("Notifications push", "Push notifications"),
        t("Géolocalisation & paiements", "Geolocation & payments"),
        t("Publication App Store / Play", "App Store / Play publishing"),
      ],
    },
    {
      icon: Share2,
      title: t("Community Management", "Community Management"),
      desc: t("Animation Facebook & Instagram pour faire grandir votre communauté et votre image.", "Facebook & Instagram management to grow your community and brand."),
      items: [
        t("Stratégie éditoriale & calendrier", "Editorial strategy & calendar"),
        t("Création visuels & reels", "Visuals & reels creation"),
        t("Publication & engagement", "Posting & engagement"),
        t("Reporting mensuel & KPI", "Monthly reporting & KPIs"),
      ],
    },
    {
      icon: Code2,
      title: t("Refonte, SEO & maintenance", "Redesign, SEO & maintenance"),
      desc: t("Faites évoluer vos plateformes existantes pour de meilleurs résultats.", "Grow your existing platforms for better results."),
      items: [
        t("Audit technique & UX", "Technical & UX audit"),
        t("Refonte progressive", "Progressive redesign"),
        t("SEO on-page et technique", "On-page & technical SEO"),
        t("Maintenance & support continu", "Ongoing maintenance & support"),
      ],
    },
  ];

  const siteTypes = [
    { icon: Globe, label: t("Site vitrine", "Showcase site"), desc: t("Présence en ligne pro", "Pro online presence") },
    { icon: ShoppingBag, label: t("E-commerce", "E-commerce"), desc: t("Boutique en ligne", "Online store") },
    { icon: Briefcase, label: t("Site corporate", "Corporate site"), desc: t("Grande entreprise", "Large company") },
    { icon: GraduationCap, label: t("E-learning", "E-learning"), desc: t("Plateforme de cours", "Course platform") },
    { icon: Hotel, label: t("Hôtellerie", "Hospitality"), desc: t("Réservation en ligne", "Online booking") },
    { icon: Newspaper, label: t("Blog / Magazine", "Blog / Magazine"), desc: t("Contenus éditoriaux", "Editorial content") },
    { icon: Heart, label: t("Association / ONG", "NGO / Charity"), desc: t("Dons & adhésions", "Donations & members") },
    { icon: Home, label: t("Immobilier", "Real estate"), desc: t("Annonces & visites", "Listings & tours") },
    { icon: Utensils, label: t("Restauration", "Restaurant"), desc: t("Menu & réservation", "Menu & booking") },
    { icon: Calendar, label: t("Événementiel", "Events"), desc: t("Billetterie & agenda", "Tickets & agenda") },
    { icon: Briefcase, label: t("Portfolio", "Portfolio"), desc: t("Freelance & artistes", "Freelance & artists") },
    { icon: Database, label: "SaaS", desc: t("Applications cloud", "Cloud apps") },
  ];

  const techs = ["React", "Next.js", "Vue", "Node.js", "TypeScript", "Laravel", "Symfony", "Django", ".NET", "PostgreSQL", "MongoDB", "AWS", "Docker", "Tailwind CSS", "React Native", "Flutter", "Stripe", "Odoo"];

  return (
    <>
      <PageHeader
        tag={t("Nos services", "Our services")}
        title={t("Des solutions digitales pour chaque ambition", "Digital solutions for every ambition")}
        subtitle={t("Du site vitrine à l'ERP industriel et au community management — une expertise complète, livrée avec exigence.", "From showcase websites to industrial ERPs and community management — full expertise, delivered with care.")}
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              whileHover={{ y: -6 }}
              className="group relative p-8 rounded-3xl bg-card border border-border shadow-card hover:shadow-glow hover:border-orange/40 transition-all overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-orange/5 rounded-full blur-3xl group-hover:bg-orange/15 transition" />
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-gradient-orange flex items-center justify-center shadow-glow group-hover:scale-110 group-hover:rotate-6 transition">
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

      {/* Community Management highlight */}
      <section className="py-20 bg-gradient-hero text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-animated opacity-20" />
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-orange/20 blur-3xl animate-float" />
        <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-12 items-center relative">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/20 text-sm">
              <Share2 size={14} className="text-orange-bright" />
              {t("Community Management", "Community Management")}
            </div>
            <h2 className="mt-5 text-3xl md:text-5xl font-extrabold">
              {t("Faites rayonner votre marque sur Facebook & Instagram", "Make your brand shine on Facebook & Instagram")}
            </h2>
            <p className="mt-5 text-white/80 text-lg">
              {t("Stratégie de contenu, créations visuelles, publications régulières, modération et reporting — nous gérons votre présence sociale de A à Z.", "Content strategy, visuals, regular posts, moderation and reporting — we run your social presence from A to Z.")}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur border border-white/20 text-sm">
                <Facebook size={16} /> Facebook
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur border border-white/20 text-sm">
                <Instagram size={16} /> Instagram
              </span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { k: "+128%", v: t("Engagement", "Engagement") },
              { k: "x3", v: t("Abonnés", "Followers") },
              { k: "20+", v: t("Posts / mois", "Posts / month") },
              { k: "24/7", v: t("Modération", "Moderation") },
            ].map((s, i) => (
              <motion.div
                key={s.v}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6, scale: 1.04 }}
                className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-6 text-center"
              >
                <div className="text-4xl font-extrabold text-gradient-orange">{s.k}</div>
                <div className="mt-1 text-white/80 text-sm">{s.v}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Website types */}
      <section className="py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-orange">{t("Types de sites web", "Website types")}</div>
            <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-navy">
              {t("Quel que soit votre secteur, nous avons le site qu'il vous faut", "Whatever your industry, we have the right site for you")}
            </h2>
          </div>
          <div className="mt-14 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {siteTypes.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.85, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.04, duration: 0.4 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="bg-card p-5 rounded-xl border border-border hover:border-orange/40 hover:shadow-glow transition group"
              >
                <s.icon size={28} className="text-orange group-hover:scale-110 group-hover:rotate-6 transition" />
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
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-orange-bright">{t("Technologies", "Technologies")}</div>
            <h2 className="mt-3 text-3xl md:text-5xl font-extrabold">{t("Les meilleures stacks pour vos projets", "The best stacks for your projects")}</h2>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {techs.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                whileHover={{ scale: 1.08, y: -3 }}
                className="px-5 py-2.5 rounded-full bg-white/10 backdrop-blur border border-white/20 text-sm font-medium hover:bg-orange hover:border-orange transition cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-5 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy">{t("Un projet en tête ?", "Got a project in mind?")}</h2>
          <p className="mt-4 text-muted-foreground">{t("Demandez votre devis gratuit et recevez une proposition sur mesure sous 24h.", "Request your free quote and get a tailored proposal within 24h.")}</p>
          <button
            onClick={open}
            className="mt-8 inline-flex items-center gap-2 bg-gradient-orange text-white font-semibold px-8 py-4 rounded-full shadow-glow hover:scale-105 transition"
          >
            {t("Demander un devis", "Request a quote")} <ArrowRight size={18} />
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
      <div className="absolute -top-32 right-1/4 w-96 h-96 rounded-full bg-orange/20 blur-3xl animate-float" />
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
