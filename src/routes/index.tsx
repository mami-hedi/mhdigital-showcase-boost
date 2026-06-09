import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  ArrowRight, Code2, Database, Smartphone, ShoppingCart, Layers, Cpu,
  Zap, Shield, Sparkles, CheckCircle2, Star, Users, Rocket, TrendingUp, Award,
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { useQuote } from "@/components/QuoteDialog";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MH Digital Solution — Agence web, ERP & logiciels sur mesure" },
      { name: "description", content: "Création de sites web, e-commerce, ERP, CRM et logiciels métier sur mesure. Design moderne, performance et résultats." },
      { property: "og:title", content: "MH Digital Solution" },
      { property: "og:description", content: "Votre partenaire digital pour des solutions sur mesure." },
    ],
  }),
  component: HomePage,
});

const heroWords = ["sur mesure", "performants", "élégants", "évolutifs"];

function HomePage() {
  const { open } = useQuote();
  const [wordIdx, setWordIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setWordIdx((i) => (i + 1) % heroWords.length), 2200);
    return () => clearInterval(t);
  }, []);

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
              Agence digitale nouvelle génération
            </div>
            <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05]">
              Des solutions digitales{" "}
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
              Sites web, e-commerce, ERP, CRM, logiciels métier — nous concevons et développons
              des produits qui propulsent votre activité.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={open}
                className="group inline-flex items-center gap-2 bg-gradient-orange text-white font-semibold px-7 py-4 rounded-full shadow-glow hover:scale-105 active:scale-95 transition animate-pulse-glow"
              >
                Demander un devis
                <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
              </button>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 text-white font-semibold px-7 py-4 rounded-full hover:bg-white/20 transition"
              >
                Découvrir nos services
              </Link>
            </div>
            <div className="mt-10 flex gap-8 text-white/70 text-sm">
              {[["120+", "Projets livrés"], ["98%", "Clients satisfaits"], ["8 ans", "D'expertise"]].map(([n, l]) => (
                <div key={l}>
                  <div className="text-2xl font-bold text-white">{n}</div>
                  <div>{l}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Floating mockup cards */}
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
                  <div className="font-bold text-navy">ERP Connecté</div>
                  <div className="text-xs text-muted-foreground">Temps réel</div>
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
                <span className="font-bold text-navy">Ventes</span>
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
        <p className="text-center text-sm text-muted-foreground uppercase tracking-widest mb-6">Ils nous font confiance</p>
        <div className="flex overflow-hidden">
          <div className="flex gap-16 animate-marquee whitespace-nowrap">
            {[...Array(2)].flatMap((_, i) =>
              ["NOVA", "TECHFLOW", "AXIOM", "PIXELLAB", "QUANTUM", "HORIZON", "STELLAR", "VERTEX"].map((b) => (
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
            tag="Nos services"
            title="Tout ce dont vous avez besoin pour réussir en ligne"
            subtitle="Du site vitrine à l'ERP complexe — une expertise full-stack au service de vos ambitions."
          />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceItems.map((s, i) => (
              <ServiceCard key={s.title} {...s} idx={i} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/services" className="inline-flex items-center gap-2 text-orange font-semibold hover:gap-3 transition-all">
              Voir tous nos services <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-24 bg-gradient-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-animated opacity-10" />
        <div className="max-w-7xl mx-auto px-5 lg:px-8 relative">
          <SectionHeader
            tag="Pourquoi MH Digital"
            title="Une approche pensée pour votre croissance"
            subtitle="Chez nous, chaque projet est un partenariat — pas une simple prestation."
            dark
          />
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((w, i) => (
              <motion.div
                key={w.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-white/5 backdrop-blur border border-white/10 hover:border-orange/50 hover:bg-white/10 transition group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-orange flex items-center justify-center mb-4 group-hover:scale-110 transition">
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
          <SectionHeader tag="Notre méthode" title="Un processus clair, des résultats concrets" />
          <div className="mt-16 grid md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-8 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-orange via-orange to-orange/20" />
            {process.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative text-center"
              >
                <div className="mx-auto w-16 h-16 rounded-full bg-gradient-orange text-white flex items-center justify-center font-bold text-xl shadow-glow relative z-10">
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
          <SectionHeader tag="Témoignages" title="La satisfaction de nos clients, notre plus belle vitrine" />
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card p-7 rounded-2xl shadow-card border border-border"
              >
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} size={16} className="fill-orange text-orange" />
                  ))}
                </div>
                <p className="text-navy leading-relaxed">"{t.quote}"</p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-gradient-orange flex items-center justify-center text-white font-bold">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-navy">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
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
            className="relative overflow-hidden rounded-3xl bg-gradient-hero p-12 md:p-16 text-white text-center shadow-glow"
          >
            <div className="absolute inset-0 bg-grid-animated opacity-20" />
            <div className="relative">
              <Rocket className="mx-auto text-orange-bright" size={48} />
              <h2 className="mt-4 text-3xl md:text-5xl font-extrabold">Prêt à lancer votre projet ?</h2>
              <p className="mt-4 text-white/80 max-w-xl mx-auto">
                Discutons de votre vision. Devis gratuit et personnalisé sous 24h.
              </p>
              <button
                onClick={open}
                className="mt-8 inline-flex items-center gap-2 bg-gradient-orange text-white font-semibold px-8 py-4 rounded-full shadow-glow hover:scale-105 transition"
              >
                Demander un devis <ArrowRight size={18} />
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
    <div className="text-center max-w-3xl mx-auto">
      <div className={`inline-block text-xs font-bold uppercase tracking-[0.2em] ${dark ? "text-orange-bright" : "text-orange"}`}>{tag}</div>
      <h2 className={`mt-3 text-3xl md:text-5xl font-extrabold ${dark ? "text-white" : "text-navy"}`}>{title}</h2>
      {subtitle && <p className={`mt-4 text-lg ${dark ? "text-white/70" : "text-muted-foreground"}`}>{subtitle}</p>}
    </div>
  );
}

function ServiceCard({ icon: Icon, title, desc, idx }: { icon: any; title: string; desc: string; idx: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.08 }}
      whileHover={{ y: -6 }}
      className="group relative p-7 rounded-2xl bg-card border border-border hover:border-orange/40 shadow-card transition overflow-hidden"
    >
      <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-orange/5 group-hover:bg-orange/10 transition" />
      <div className="relative">
        <div className="w-14 h-14 rounded-xl bg-gradient-orange flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition">
          <Icon size={26} className="text-white" />
        </div>
        <h3 className="font-display text-xl font-bold text-navy">{title}</h3>
        <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
}

const serviceItems = [
  { icon: Layers, title: "Sites vitrines & corporate", desc: "Présence en ligne élégante, performante et optimisée SEO pour convertir vos visiteurs." },
  { icon: ShoppingCart, title: "Sites e-commerce", desc: "Boutiques en ligne complètes : paiement, gestion stock, marketing et tableaux de bord." },
  { icon: Code2, title: "Applications web sur mesure", desc: "Plateformes SaaS, espaces clients, portails métier — pensés pour votre activité." },
  { icon: Database, title: "ERP & CRM", desc: "Systèmes de gestion intégrés pour piloter ventes, stock, comptabilité et relation client." },
  { icon: Cpu, title: "Logiciels métier", desc: "Outils internes dédiés pour automatiser vos processus et gagner en productivité." },
  { icon: Smartphone, title: "Applications mobiles", desc: "Apps iOS & Android natives ou cross-platform, pour aller à la rencontre de vos utilisateurs." },
];

const whyUs = [
  { icon: Zap, title: "Rapides & réactifs", desc: "Méthode agile, livraisons régulières, équipe disponible tout au long du projet." },
  { icon: Shield, title: "Sécurité & qualité", desc: "Code propre, tests, déploiement sécurisé. Vos données et celles de vos clients protégées." },
  { icon: Users, title: "Équipe dédiée", desc: "Un chef de projet, des designers et développeurs experts à vos côtés." },
  { icon: Award, title: "Résultats mesurables", desc: "Performance, conversion, ROI : nous suivons les indicateurs qui comptent vraiment." },
];

const process = [
  { step: "01", title: "Découverte", desc: "Échange approfondi pour comprendre vos besoins et objectifs." },
  { step: "02", title: "Conception", desc: "Wireframes, maquettes UI/UX et validation avec vous." },
  { step: "03", title: "Développement", desc: "Construction itérative, tests et démos régulières." },
  { step: "04", title: "Lancement", desc: "Mise en ligne, formation et accompagnement continu." },
];

const testimonials = [
  { name: "Karim B.", role: "CEO, NovaTech", quote: "MH Digital a transformé notre vision en une plateforme robuste. Un partenaire de confiance." },
  { name: "Sara L.", role: "Directrice, Boutique Atlas", quote: "Notre e-commerce a doublé son CA en 6 mois grâce à leur expertise et leur écoute." },
  { name: "Yassine R.", role: "DAF, Groupe Horizon", quote: "L'ERP livré est exactement ce dont nous avions besoin. Équipe sérieuse et compétente." },
];

type ReactNode = import("react").ReactNode;
