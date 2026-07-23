import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";
import {
  ArrowRight, Code2, Database, Smartphone, ShoppingCart, Layers, Cpu,
  Zap, Shield, Sparkles, Star, Users, Rocket, TrendingUp, Award, Share2,
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { useQuote } from "@/components/QuoteDialog";
import { useT } from "@/components/I18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MH Digital Solution — Web, ERP, logiciels & community management" },
      { name: "description", content: "Création de sites web, e-commerce, ERP, CRM, logiciels métier et community management. Design moderne, performance et résultats." },
      { property: "og:title", content: "MH Digital Solution" },
      { property: "og:description", content: "Votre partenaire digital pour des solutions sur mesure." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const { open } = useQuote();
  const { t, lang } = useT();
  const heroWords = lang === "fr"
    ? ["sur mesure", "performantes", "élégantes", "évolutives"]
    : ["custom-made", "high-performing", "elegant", "scalable"];
  const [wordIdx, setWordIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setWordIdx((i) => (i + 1) % heroWords.length), 2200);
    return () => clearInterval(id);
  }, [heroWords.length]);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-hero text-white min-h-[88vh] flex items-center">
        <div className="absolute inset-0 opacity-30">
          <img src={heroBg} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-grid-animated opacity-40" />
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-orange/30 blur-3xl animate-float" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-orange/20 blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />

        <div className="relative max-w-7xl mx-auto px-5 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/20 text-sm">
              <Sparkles size={14} className="text-orange-bright" />
              {t("Agence digitale nouvelle génération", "Next-generation digital agency")}
            </div>
            <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05]">
              {t("Des solutions digitales", "Digital solutions that are")}{" "}
              <span className="relative inline-block">
                <motion.span
                  key={wordIdx}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -30, opacity: 0 }}
                  className="text-gradient-orange inline-block"
                >
                  {heroWords[wordIdx]}
                </motion.span>
              </span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-xl leading-relaxed">
              {t(
                "Sites web, e-commerce, ERP, CRM, logiciels métier et community management — nous concevons des produits qui propulsent votre activité.",
                "Websites, e-commerce, ERP, CRM, business software and community management — we craft products that boost your business."
              )}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={open}
                className="group inline-flex items-center gap-2 bg-gradient-orange text-white font-semibold px-7 py-4 rounded-full shadow-glow hover:scale-105 active:scale-95 transition animate-pulse-glow"
              >
                {t("Demander un devis", "Request a quote")}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
              </button>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 text-white font-semibold px-7 py-4 rounded-full hover:bg-white/20 transition"
              >
                {t("Découvrir nos services", "Explore our services")}
              </Link>
            </div>
            <div className="mt-10 flex gap-8 text-white/70 text-sm">
              {[
                ["120+", t("Projets livrés", "Projects delivered")],
                ["98%", t("Clients satisfaits", "Happy clients")],
                ["24/7", t("Support réactif", "Responsive support")],
              ].map(([n, l]) => (
                <div key={l}>
                  <div className="text-2xl font-bold text-white">{n}</div>
                  <div>{l}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block h-[520px]"
          >
            <FloatCard className="top-0 right-0 w-72" delay={0}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-orange flex items-center justify-center">
                  <Code2 className="text-white" size={20} />
                </div>
                <div>
                  <div className="font-bold text-navy">Web App</div>
                  <div className="text-xs text-muted-foreground">React · TypeScript</div>
                </div>
              </div>
              <div className="h-2 bg-orange/20 rounded-full overflow-hidden">
                <motion.div initial={{ width: 0 }} animate={{ width: "85%" }} transition={{ duration: 1.5, delay: 0.6 }} className="h-full bg-gradient-orange" />
              </div>
              <div className="mt-3 text-xs text-muted-foreground">Performance · 98/100</div>
            </FloatCard>

            <FloatCard className="top-44 left-0 w-64" delay={0.3}>
              <div className="flex items-center gap-3">
                <Database className="text-orange" size={24} />
                <div>
                  <div className="font-bold text-navy">{t("ERP Connecté", "Connected ERP")}</div>
                  <div className="text-xs text-muted-foreground">{t("Temps réel", "Real time")}</div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 mt-4">
                {[40, 75, 55].map((h, i) => (
                  <motion.div key={i} initial={{ height: 0 }} animate={{ height: h }} transition={{ delay: 0.8 + i * 0.15, duration: 0.6 }} className="bg-gradient-orange rounded-t-md" style={{ minHeight: 8 }} />
                ))}
              </div>
            </FloatCard>

            <FloatCard className="bottom-0 right-8 w-72" delay={0.6}>
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-navy">{t("Ventes", "Sales")}</span>
                <span className="text-orange font-bold flex items-center gap-1 text-sm">
                  <TrendingUp size={14} /> +32%
                </span>
              </div>
              <svg viewBox="0 0 200 60" className="w-full h-16">
                <motion.path
                  d="M0,50 Q40,20 80,30 T160,15 L200,20"
                  fill="none"
                  stroke="url(#g)"
                  strokeWidth="3"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 1 }}
                />
                <defs>
                  <linearGradient id="g" x1="0" x2="1">
                    <stop offset="0%" stopColor="#E97A1F" />
                    <stop offset="100%" stopColor="#FBA84F" />
                  </linearGradient>
                </defs>
              </svg>
            </FloatCard>
          </motion.div>
        </div>
      </section>

      {/* Marquee logos */}
      <section className="py-10 bg-card border-y border-border overflow-hidden">
        <p className="text-center text-sm text-muted-foreground uppercase tracking-widest mb-6">{t("Ils nous font confiance", "They trust us")}</p>
        <div className="flex overflow-hidden">
          <div className="flex gap-16 animate-marquee whitespace-nowrap">
            {[...Array(2)].flatMap((_, i) =>
              ["SEJOUR MEDICAL", "CNA", "DAR B&B", "Pauline Baudin ", "Annonce Tunisie Tunisie", "DIGILEARN", "Batiment RH", " Fleurs d'harmonie"].map((b) => (
                <span key={`${i}-${b}`} className="text-2xl font-display font-bold text-navy/40 hover:text-orange transition">{b}</span>
              ))
            )}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            tag={t("Nos services", "Our services")}
            title={t("Tout ce dont vous avez besoin pour réussir en ligne", "Everything you need to succeed online")}
            subtitle={t("Du site vitrine au community management — une expertise full-stack au service de vos ambitions.", "From showcase sites to community management — full-stack expertise to power your ambitions.")}
          />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Layers, title: t("Sites vitrines & corporate", "Showcase & corporate sites"), desc: t("Présence en ligne élégante, performante et optimisée SEO pour convertir vos visiteurs.", "Elegant, fast, SEO-optimized online presence that converts your visitors.") },
              { icon: ShoppingCart, title: t("Sites e-commerce", "E-commerce sites"), desc: t("Boutiques en ligne complètes : paiement, gestion stock, marketing et tableaux de bord.", "Complete online stores: payment, stock, marketing, dashboards.") },
              { icon: Code2, title: t("Applications web sur mesure", "Custom web apps"), desc: t("Plateformes SaaS, espaces clients, portails métier — pensés pour votre activité.", "SaaS platforms, customer portals, business apps tailored to you.") },
              { icon: Database, title: t("ERP & CRM", "ERP & CRM"), desc: t("Systèmes de gestion intégrés pour piloter ventes, stock, comptabilité et relation client.", "Integrated systems to manage sales, stock, accounting and customer relations.") },
              { icon: Cpu, title: t("Logiciels métier", "Business software"), desc: t("Outils internes dédiés pour automatiser vos processus et gagner en productivité.", "Dedicated internal tools to automate processes and boost productivity.") },
              { icon: Smartphone, title: t("Applications mobiles", "Mobile apps"), desc: t("Apps iOS & Android natives ou cross-platform, pour aller à la rencontre de vos utilisateurs.", "Native or cross-platform iOS & Android apps to reach your users.") },
              { icon: Share2, title: t("Community Management", "Community Management"), desc: t("Gestion Facebook & Instagram : contenus, créations visuelles, publications et engagement.", "Facebook & Instagram management: content, visuals, posts and engagement.") },
            ].map((s, i) => (
              <ServiceCard key={s.title} {...s} idx={i} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/services" className="inline-flex items-center gap-2 text-orange font-semibold hover:gap-3 transition-all">
              {t("Voir tous nos services", "View all services")} <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-24 bg-gradient-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-animated opacity-10" />
        <div className="max-w-7xl mx-auto px-5 lg:px-8 relative">
          <SectionHeader
            tag={t("Pourquoi MH Digital", "Why MH Digital")}
            title={t("Une approche pensée pour votre croissance", "An approach built for your growth")}
            subtitle={t("Chez nous, chaque projet est un partenariat — pas une simple prestation.", "With us, every project is a partnership — not just a service.")}
            dark
          />
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Zap, title: t("Rapides & réactifs", "Fast & responsive"), desc: t("Méthode agile, livraisons régulières, équipe disponible tout au long du projet.", "Agile method, regular delivery, an always-available team.") },
              { icon: Shield, title: t("Sécurité & qualité", "Security & quality"), desc: t("Code propre, tests, déploiement sécurisé. Vos données et celles de vos clients protégées.", "Clean code, tests, secure deploys. Your data and your customers' data are safe.") },
              { icon: Users, title: t("Équipe dédiée", "Dedicated team"), desc: t("Un chef de projet, des designers et développeurs experts à vos côtés.", "A project lead plus expert designers and developers by your side.") },
              { icon: Award, title: t("Résultats mesurables", "Measurable results"), desc: t("Performance, conversion, ROI : nous suivons les indicateurs qui comptent vraiment.", "Performance, conversion, ROI: we track the metrics that matter.") },
            ].map((w, i) => (
              <motion.div
                key={w.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="p-6 rounded-2xl bg-white/5 backdrop-blur border border-white/10 hover:border-orange/50 hover:bg-white/10 transition group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-orange flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition">
                  <w.icon size={22} className="text-white" />
                </div>
                <h3 className="font-display text-xl font-bold mb-2">{w.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{w.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader tag={t("Notre méthode", "Our method")} title={t("Un processus clair, des résultats concrets", "A clear process, concrete results")} />
          <div className="mt-16 grid md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-8 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-orange via-orange to-orange/20" />
            {[
              { step: "01", title: t("Découverte", "Discovery"), desc: t("Échange approfondi pour comprendre vos besoins et objectifs.", "Deep dive to understand your needs and goals.") },
              { step: "02", title: t("Conception", "Design"), desc: t("Wireframes, maquettes UI/UX et validation avec vous.", "Wireframes, UI/UX mockups and validation with you.") },
              { step: "03", title: t("Développement", "Development"), desc: t("Construction itérative, tests et démos régulières.", "Iterative build, tests and regular demos.") },
              { step: "04", title: t("Lancement", "Launch"), desc: t("Mise en ligne, formation et accompagnement continu.", "Go-live, training and ongoing support.") },
            ].map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                whileHover={{ y: -6 }}
                className="relative text-center"
              >
                <div className="mx-auto w-16 h-16 rounded-full bg-gradient-orange text-white flex items-center justify-center font-bold text-xl shadow-glow relative z-10 hover:animate-pulse-glow">
                  {p.step}
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-navy">{p.title}</h3>
                <p className="mt-2 text-muted-foreground text-sm">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-accent">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader tag={t("Témoignages", "Testimonials")} title={t("La satisfaction de nos clients, notre plus belle vitrine", "Our clients' satisfaction is our finest showcase")} />
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {[
              { 
    name: "Selim", 
    role: t("CEO, CNA", "CEO, CNA"), 
    quote: t("MH Digital Solution a pris en charge la réalisation de notre site web et de notre ERP avec un grand professionnalisme. Un travail de haute qualité.", "MH Digital Solution handled the creation of our website and ERP with high professionalism. Outstanding quality work.") 
  },
  { 
    name: "Hichem", 
    role: t("Directeur Général, Bâtiment RH", "General Manager, Bâtiment RH"), 
    quote: t("Une équipe très réactive et à l'écoute. Notre site vitrine reflète parfaitement l'image et l'expertise de notre entreprise.", "A very responsive and attentive team. Our showcase website perfectly reflects our company's image and expertise.") 
  },
  { 
    name: "Seif", 
    role: t("Propriétaire, Dar B&B", "Owner, Dar B&B"), 
    quote: t("Le site web et l'espace d'administration sur-mesure facilitent énormément la gestion de nos réservations au quotidien.", "The custom website and admin panel make managing our daily bookings effortless.") 
  },
            ].map((t2, i) => (
              <motion.div
                key={t2.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ y: -6, boxShadow: "0 20px 60px -15px rgba(233,122,31,0.3)" }}
                className="bg-card p-7 rounded-2xl shadow-card border border-border"
              >
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} size={16} className="fill-orange text-orange" />
                  ))}
                </div>
                <p className="text-navy leading-relaxed">"{t2.quote}"</p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-gradient-orange flex items-center justify-center text-white font-bold">
                    {t2.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-navy">{t2.name}</div>
                    <div className="text-xs text-muted-foreground">{t2.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="max-w-5xl mx-auto px-5 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-hero p-12 md:p-16 text-white text-center shadow-glow"
          >
            <div className="absolute inset-0 bg-grid-animated opacity-20" />
            <div className="relative">
              <Rocket className="mx-auto text-orange-bright animate-float" size={48} />
              <h2 className="mt-4 text-3xl md:text-5xl font-extrabold">{t("Prêt à lancer votre projet ?", "Ready to launch your project?")}</h2>
              <p className="mt-4 text-white/80 max-w-xl mx-auto">
                {t("Discutons de votre vision. Devis gratuit et personnalisé sous 24h.", "Let's talk about your vision. Free, tailored quote within 24h.")}
              </p>
              <button
                onClick={open}
                className="mt-8 inline-flex items-center gap-2 bg-gradient-orange text-white font-semibold px-8 py-4 rounded-full shadow-glow hover:scale-105 transition"
              >
                {t("Demander un devis", "Request a quote")} <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

function FloatCard({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.4 + delay, duration: 0.6 }}
      className={`absolute bg-card text-navy rounded-2xl p-5 shadow-glow animate-float ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </motion.div>
  );
}

function SectionHeader({ tag, title, subtitle, dark = false }: { tag: string; title: string; subtitle?: string; dark?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      className="text-center max-w-3xl mx-auto"
    >
      <div className={`inline-block text-xs font-bold uppercase tracking-[0.2em] ${dark ? "text-orange-bright" : "text-orange"}`}>{tag}</div>
      <h2 className={`mt-3 text-3xl md:text-5xl font-extrabold ${dark ? "text-white" : "text-navy"}`}>{title}</h2>
      {subtitle && <p className={`mt-4 text-lg ${dark ? "text-white/70" : "text-muted-foreground"}`}>{subtitle}</p>}
    </motion.div>
  );
}

function ServiceCard({ icon: Icon, title, desc, idx }: { icon: any; title: string; desc: string; idx: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: idx * 0.08, duration: 0.6 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative p-7 rounded-2xl bg-card border border-border hover:border-orange/40 shadow-card hover:shadow-glow transition-all overflow-hidden"
    >
      <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-orange/5 group-hover:bg-orange/15 transition" />
      <div className="relative">
        <div className="w-14 h-14 rounded-xl bg-gradient-orange flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-6 transition">
          <Icon size={26} className="text-white" />
        </div>
        <h3 className="font-display text-xl font-bold text-navy">{title}</h3>
        <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
}
