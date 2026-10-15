import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin, Clock, MessageCircle, ChevronDown, HelpCircle } from "lucide-react";
import { useT } from "@/components/I18n";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — MH Digital Solution" },
      { name: "description", content: "Contactez MH Digital Solution à Hammamet, Tunisie. 100% télétravail. Téléphone & WhatsApp : +216 58 146 177." },
      { property: "og:title", content: "Contact — MH Digital Solution" },
      { property: "og:description", content: "Let's talk about your project." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t } = useT();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const infos = [
    { icon: Mail, label: t("Email", "Email"), value: "contact@mh-digital-solution.com", href: "mailto:contact@mh-digital-solution.com" },
    { icon: Phone, label: t("Téléphone / WhatsApp", "Phone / WhatsApp"), value: "+216 58 146 177", href: "tel:+21658146177" },
    { icon: MapPin, label: t("Adresse", "Address"), value: t("Hammamet, Tunisie", "Hammamet, Tunisia") },
    { icon: Clock, label: t("Mode de travail", "Work mode"), value: t("100% télétravail · Lun – Ven", "100% remote · Mon – Fri") },
  ];

  const faqs = [
  {
    q: t(
      "Quels sont vos délais de réalisation ?",
      "What are your project delivery timelines?"
    ),
    a: t(
      "Les délais dépendent de la complexité et des besoins de votre projet. À titre indicatif, un site vitrine peut être réalisé en 2 à 3 semaines, tandis qu'une application web ou un projet ERP/CRM nécessite généralement 4 à 8 semaines, voire davantage selon son périmètre.",
      "Timelines depend on your project's complexity and requirements. As a general guideline, a showcase website can take 2–3 weeks, while a web application or ERP/CRM project typically takes 4–8 weeks or longer depending on its scope."
    ),
  },
  {
    q: t(
      "Comment se déroule un projet avec votre agence ?",
      "How does a project work with your agency?"
    ),
    a: t(
      "Chaque projet suit une méthodologie structurée : analyse de vos besoins, définition des objectifs, conception UI/UX, développement, tests et mise en production. Nous vous accompagnons à chaque étape afin de garantir un résultat aligné avec vos objectifs.",
      "Every project follows a structured process: requirements analysis, goal definition, UI/UX design, development, testing, and deployment. We guide you through every stage to ensure the final solution aligns with your business objectives."
    ),
  },
  {
    q: t(
      "Proposez-vous un accompagnement après la livraison ?",
      "Do you offer support after project delivery?"
    ),
    a: t(
      "Oui. Nous assurons un accompagnement après la mise en production et proposons des solutions de maintenance adaptées à vos besoins : corrections, mises à jour, suivi des performances et évolutions fonctionnelles. Les modalités et la durée de l'accompagnement sont définies selon votre projet.",
      "Yes. We provide post-launch support and offer maintenance solutions tailored to your needs, including bug fixes, updates, performance monitoring, and new features. Support terms and duration are defined according to your project."
    ),
  },
  {
    q: t(
      "Quelles technologies utilisez-vous ?",
      "Which technologies do you use?"
    ),
    a: t(
      "Nous utilisons des technologies modernes et éprouvées, notamment React, Next.js, Node.js et TypeScript pour le développement web, WordPress pour les sites administrables, ainsi qu'Odoo pour les solutions ERP/CRM. Nous choisissons les technologies les plus adaptées à vos objectifs, à votre budget et à vos besoins d'évolution.",
      "We use modern, proven technologies, including React, Next.js, Node.js, and TypeScript for web development, WordPress for content-managed websites, and Odoo for ERP/CRM solutions. We select the technologies best suited to your goals, budget, and long-term needs."
    ),
  },
  {
    q: t(
      "Quels types de projets pouvez-vous réaliser ?",
      "What types of projects can you deliver?"
    ),
    a: t(
      "Nous accompagnons les entreprises dans la création de sites web, d'applications sur mesure, de plateformes digitales et de solutions ERP/CRM. Nous intervenons également sur l'automatisation des processus métier et l'intégration d'outils pour améliorer la productivité.",
      "We help businesses build websites, custom applications, digital platforms, and ERP/CRM solutions. We also automate business processes and integrate tools to improve productivity."
    ),
  },
  {
    q: t(
      "Comment obtenir un devis pour mon projet ?",
      "How can I get a quote for my project?"
    ),
    a: t(
      "Contactez-nous en présentant votre projet, vos objectifs et vos principales attentes. Après un premier échange, nous étudions vos besoins et vous proposons une solution adaptée, accompagnée d'une estimation du budget et des délais.",
      "Get in touch and tell us about your project, goals, and main requirements. After an initial discussion, we assess your needs and propose a tailored solution with an estimated budget and timeline."
    ),
  },
];


  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <>
      <section className="relative bg-gradient-hero text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-animated opacity-20" />
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative max-w-4xl mx-auto px-5 text-center">
          <div className="text-xs font-bold uppercase tracking-[0.25em] text-orange-bright">{t("Contact", "Contact")}</div>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold">{t("Discutons de votre projet", "Let's talk about your project")}</h1>
          <p className="mt-5 text-lg text-white/80">{t("Notre équipe vous répond sous 24h. Échange gratuit et sans engagement.", "We reply within 24h. Free chat, no commitment.")}</p>
        </motion.div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-5 lg:px-8 grid lg:grid-cols-5 gap-10">
          {/* Colonne de gauche : Infos & WhatsApp */}
          <div className="lg:col-span-2 space-y-5">
            {infos.map((info, i) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ x: 6 }}
                className="p-5 rounded-2xl bg-card border border-border shadow-card hover:shadow-glow hover:border-orange/40 flex items-start gap-4 transition"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-orange flex items-center justify-center flex-shrink-0">
                  <info.icon size={22} className="text-white" />
                </div>
                <div>
                  <div className="font-bold text-navy">{info.label}</div>
                  <div>
                    {info.href ? (
                      <a href={info.href} className="text-sm text-muted-foreground mt-0.5 hover:text-orange transition block">
                        {info.value}
                      </a>
                    ) : (
                      <div className="text-sm text-muted-foreground mt-0.5">{info.value}</div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}

            <motion.a
              href="https://wa.me/21658146177"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ x: 6, scale: 1.02 }}
              className="p-5 rounded-2xl bg-[#25D366] text-white shadow-glow flex items-center gap-4 transition"
            >
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                <MessageCircle size={22} />
              </div>
              <div>
                <div className="font-bold">{t("Écrivez-nous sur WhatsApp", "Message us on WhatsApp")}</div>
                <div className="text-sm text-white/90 mt-0.5">{t("Réponse rapide pendant les heures de bureau", "Quick reply during business hours")}</div>
              </div>
            </motion.a>
          </div>

          {/* Colonne de droite : FAQ bilingue */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 bg-card p-8 rounded-2xl shadow-card border border-border flex flex-col justify-between space-y-6"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-orange/10 flex items-center justify-center text-orange flex-shrink-0">
                  <HelpCircle size={22} />
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold text-navy">
                    {t("Questions fréquentes", "Frequently Asked Questions")}
                  </h2>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    {t("Trouvez rapidement des réponses à vos questions.", "Find quick answers to common questions.")}
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {faqs.map((faq, i) => {
                  const isOpen = openFaqIndex === i;
                  return (
                    <div key={i} className="border border-border rounded-xl overflow-hidden transition-colors">
                      <button
                        type="button"
                        onClick={() => toggleFaq(i)}
                        className="w-full p-4 text-left font-bold text-navy flex justify-between items-center bg-background/50 hover:bg-background transition"
                      >
                        <span className="text-sm md:text-base pr-3">{faq.q}</span>
                        <ChevronDown
                          size={18}
                          className={`text-muted-foreground shrink-0 transition-transform duration-300 ${
                            isOpen ? "rotate-180 text-orange" : ""
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden"
                          >
                            <div className="p-4 pt-0 text-sm text-muted-foreground border-t border-border/50 leading-relaxed bg-card">
                              {faq.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Banner bas de FAQ */}
            <div className="p-4 rounded-xl bg-orange/5 border border-orange/20 text-center">
              <p className="text-sm font-semibold text-navy">
                {t("Vous avez une question spécifique ?", "Have a specific question?")}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                {t("Contactez-nous directement sur WhatsApp pour une réponse rapide.", "Contact us directly on WhatsApp for an instant answer.")}
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}